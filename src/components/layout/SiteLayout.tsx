import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import NavbarDropdown from "@/components/navbars/NavbarDropdown";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";
import Logo from "@/components/brand/Logo";
import { brand, nav } from "@/data/site";

const SiteLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <ReactLenis root>
      <AuroraBackground className="fixed" />

      <NavbarDropdown
        logo={brand.name}
        navItems={nav}
        ctaButton={{ text: "Démarrer un projet", href: "/contact" }}
      />

      <main>
        <Outlet />
      </main>

      <FooterSimpleReveal
        brand={<Logo tone="onPrimary" />}
        columns={[
          {
            title: "Navigation",
            items: [
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Projets", href: "/projets" },
              { label: "Blog", href: "/blog" },
            ],
          },
          {
            title: "Services",
            items: [
              { label: "Développement web", href: "/services" },
              { label: "E-commerce", href: "/services" },
              { label: "Design & branding", href: "/services" },
              { label: "SEO & performance", href: "/services" },
            ],
          },
          {
            title: "Contact",
            items: [
              { label: brand.website, href: brand.websiteUrl },
              { label: brand.email, href: `mailto:${brand.email}` },
              { label: "Démarrer un projet", href: "/contact" },
              { label: "LinkedIn", href: "#" },
            ],
          },
        ]}
        copyright={brand.copyright}
        links={[
          { label: "Confidentialité", href: "#" },
          { label: "Mentions légales", href: "#" },
        ]}
      />
    </ReactLenis>
  );
};

export default SiteLayout;
