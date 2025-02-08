"use client"

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Button } from "@material-tailwind/react";
import { Toaster, toast } from 'react-hot-toast';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        if (e) e.preventDefault();
        
        if (!email || !password) {
            toast.error("Lütfen tüm alanları doldurun!");
            return;
        }

        setIsLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                if (error.message === 'Invalid login credentials') {
                    toast.error('E-posta veya şifre hatalı!');
                } else {
                    toast.error('Giriş yapılırken bir hata oluştu!');
                }
                return;
            }

            toast.success('Giriş başarılı! Yönlendiriliyorsunuz...');
            router.push('/admin');
        } catch (error) {
            console.error('Giriş hatası:', error);
            toast.error('Beklenmeyen bir hata oluştu!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Toaster 
                position="top-center"
                toastOptions={{
                    success: {
                        style: {
                            background: '#10B981',
                            color: 'white',
                        },
                        iconTheme: {
                            primary: 'white',
                            secondary: '#10B981',
                        },
                    },
                    error: {
                        style: {
                            background: '#EF4444',
                            color: 'white',
                        },
                        iconTheme: {
                            primary: 'white',
                            secondary: '#EF4444',
                        },
                    },
                    duration: 3000,
                }}
            />
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-8">Admin Panel Girişi</h1>
                
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            E-posta
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="E-posta adresiniz"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Şifre
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Şifreniz"
                            required
                        />
                    </div>

                    <div className="flex gap-4">
                        <Button
                            type="submit"
                            color="blue"
                            className="flex-1"
                            fullWidth
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Giriş Yapılıyor...
                                </div>
                            ) : (
                                'Giriş Yap'
                            )}
                        </Button>
                        <Link href="/" className="flex-1">
                            <Button
                                variant="outlined"
                                color="gray"
                                fullWidth
                                disabled={isLoading}
                            >
                                Siteye Dön
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}