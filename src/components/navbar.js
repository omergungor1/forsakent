"use client"

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import LanguageToggle from "./toggle-languge";
import { useState, useEffect } from "react";
import { useLanguage } from "../../src/context/LanguageContext";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  PhoneIcon
} from "@heroicons/react/24/solid";

function NavItem({ children, href }) {
  return (
    <li className="cursor-pointer">
      <Typography
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium" >
        {children}
      </Typography>
    </li>
  );
}



export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true);
  const pathname = usePathname();
  const { language } = useLanguage();

  const NAV_MENU = [
    {
      name: language == 'tr' ? "Ana Sayfa" : "Home",
      icon: HomeIcon,
      href: "/",
    },
    {
      name: language == 'tr' ? "Hizmetlerimiz" : "Services",
      icon: RectangleStackIcon,
      href: "/hizmetler",
    },
    {
      name: language == 'tr' ? "Projeler" : "Projects",
      icon: Squares2X2Icon,
      href: "/projeler",
    },
    {
      name: language == 'tr' ? "Referanslar" : "References",
      icon: UserCircleIcon,
      href: "/referanslar",
    },
    {
      name: language == 'tr' ? "İletişim" : "Contact",
      icon: PhoneIcon,
      href: "/iletisim",
    },
  ];



  // useEffect(() => {
  //   if (pathname === '/') {
  //     window.addEventListener("scroll", handleScroll);
  //   } else {
  //     window.removeEventListener("scroll", handleScroll)
  //     // setIsScrolling(true)
  //   }
  // }, [pathname]);


  // useEffect(() => {
  //   if (pathname === '/') {
  //     if (window.scrollY > 0) {
  //       setIsScrolling(true);
  //     } else {
  //       setIsScrolling(false);
  //     }
  //   } else {
  //     setIsScrolling(true)
  //   }
  // }, [pathname]);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  useEffect(() => {
    if (window.scrollY > 0 || pathname != '/') {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }

    function handleScroll() {
      if (window.scrollY > 0 || pathname != '/') {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
      console.log(isScrolling, pathname)
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            width={256}
            height={125}
            src={'/logos/logo.png'}
            alt={"Forsa Kent Logo"}
            className="w-40 "
          />
        </Link>
        <ul className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"}`}>
          {
            NAV_MENU.map(({ name, icon: Icon, href }) => (
              <Link
                href={href}
                key={name}
                className="flex items-center gap-2"
              >
                <NavItem key={name}>
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                </NavItem>
              </Link>
            ))
          }
        </ul>
        {/* <div className="hidden items-center gap-4 lg:flex">
          <Button color={isScrolling ? "gray" : "white"} variant="text">
            Log in
          </Button>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"}>blocks</Button>
          </a>
        </div> */}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden">
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
        <LanguageToggle />
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {
              NAV_MENU.map(({ name, icon: Icon, href }) => (
                <Link
                  href={href}
                  key={name}
                  className="flex items-center gap-2"
                >
                  <NavItem key={name}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                </Link>
              ))
            }
          </ul>
          {/* <div className="mt-6 flex items-center gap-4">
            <Button variant="text">Log in</Button>
            <a href="https://www.materila-tailwind.com/blocks" target="_blank">
              <Button color="gray">blocks</Button>
            </a>
          </div> */}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
