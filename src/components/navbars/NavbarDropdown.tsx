"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "@/components/brand/Logo";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

interface NavbarDropdownProps {
  logo: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

const NavbarDropdown = ({ logo, navItems, ctaButton }: NavbarDropdownProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const go = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0 });
    } else if (href.startsWith("#")) {
      e.preventDefault();
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav data-section="navbar" ref={navRef} className="fixed z-1000 top-5 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
      <div className="flex items-center justify-between p-2 xl:p-3 2xl:p-4 rounded-xl backdrop-blur-sm bg-card text-card-foreground border">
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="pl-1" aria-label={logo}>
          <Logo descriptor />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => go(e, item.href)}
              className={cn(
                "px-3 py-2 text-sm rounded-lg transition-colors",
                isActive(item.href)
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4">
          <Link to={ctaButton.href} onClick={(e) => go(e, ctaButton.href)} className="hidden sm:flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{ctaButton.text}</Link>

          <div
            className="relative flex md:hidden items-center justify-center size-10 rounded-lg cursor-pointer bg-primary text-primary-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={cn("absolute w-3 h-px bg-primary-foreground transition-all duration-300", menuOpen ? "rotate-45" : "-translate-y-1")} />
            <span className={cn("absolute w-3 h-px bg-primary-foreground transition-all duration-300", menuOpen ? "-rotate-45" : "translate-y-1")} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden absolute top-full right-2 -mt-1 px-4 py-1 w-3/4 rounded-xl bg-primary text-primary-foreground"
          >
            {navItems.map((item, index) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  onClick={(e) => go(e, item.href)}
                  className="group flex items-center justify-between py-3 w-full"
                >
                  <span className="text-base text-primary-foreground group-hover:ml-2 transition-[margin] duration-300">
                    {item.name}
                  </span>
                  <ArrowUpRight className="size-4 text-primary-foreground group-hover:rotate-45 group-hover:mr-2 transition-all duration-300" strokeWidth={1.75} />
                </Link>
                {index < navItems.length - 1 && <div className="h-px bg-primary-foreground/20" />}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarDropdown;
