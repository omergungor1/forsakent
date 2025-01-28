import { Navbar, Footer } from "../../components";
// import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Proje 1",
        description: "Bu proje, AI destekli bir araçtır.",
        imageUrl: "/image/img1.jpg",
        detailsUrl: "/projects/1",
    },
    {
        id: 2,
        title: "Proje 2",
        description: "Bu proje, mobil uygulama geliştirme üzerine.",
        imageUrl: "/image/img2.jpg",
        detailsUrl: "/projects/2",
    },
    {
        id: 3,
        title: "Proje 3",
        description: "Bu proje, web uygulama geliştirme üzerine.",
        imageUrl: "/image/img3.jpg",
        detailsUrl: "/projects/3",
    },
    {
        id: 4,
        title: "Proje 4",
        description: "Bu proje, veri analizi üzerine.",
        imageUrl: "/image/img4.jpg",
        detailsUrl: "/projects/4",
    },
];

function projeler() {
    const Card = ({ children, className }) => {
        return (
            <div className={`rounded-lg overflow-hidden shadow-lg bg-white ${className}`}>
                {children}
            </div>
        );
    };

    const CardBody = ({ children }) => {
        return (
            <div className="p-6 space-y-4">
                {children}
            </div>
        );
    };

    const CardFooter = ({ children }) => {
        return (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                {children}
            </div>
        );
    };

    const Button = ({ onClick, children, color = "blue" }) => {
        const colorClasses = {
            blue: "bg-blue-600 hover:bg-blue-700 text-white",
            lightBlue: "bg-lightBlue-500 hover:bg-lightBlue-600 text-white",
            gray: "bg-gray-500 hover:bg-gray-600 text-white",
        };

        return (
            <button
                onClick={onClick}
                className={`w-full px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${colorClasses[color]}`}
            >
                {children}
            </button>
        );
    };

    return (
        <div>
            <Navbar defaultIsScrolling={true} />
            <div className='mt-24 '>
                {/**Main Content */}
                {
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {projects.map((project) => (
                            <Card key={project.id} className="shadow-lg">
                                <img src={project.imageUrl} alt={project.title} className="h-48 w-full object-cover" />
                                <CardBody>
                                    <h5 className="text-xl font-bold">{project.title}</h5>
                                    <p>{project.description}</p>
                                </CardBody>
                                <CardFooter>
                                    <Link href={project.detailsUrl}>
                                        <Button color="lightBlue">Detaylar</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                }


            </div>
            <Footer />
        </div>
    )
}

export default projeler
