"use client"

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Button } from "@material-tailwind/react";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isBrowser, setIsBrowser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsBrowser(true);
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                router.replace('/admin');
            } else {
                setIsLoading(false);
            }
        };
        
        checkUser();
    }, [router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError("Giriş başarısız! E-posta veya şifre yanlış.");
        } else {
            window.location.href = "/admin";
        }
    };

    if (!isBrowser || isLoading) return null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Admin Girişi</h2>
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-6">
                    <input
                        type="email"
                        placeholder="E-posta"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </form>
                <div className="flex gap-4">
                    <Button
                        type="submit"
                        onClick={handleLogin}
                        color="blue"
                        className="flex-1"
                        fullWidth
                    >
                        Giriş Yap
                    </Button>
                    <Link href="/" className="flex-1">
                        <Button
                            variant="outlined"
                            color="gray"
                            fullWidth
                        >
                            Siteye Dön
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}