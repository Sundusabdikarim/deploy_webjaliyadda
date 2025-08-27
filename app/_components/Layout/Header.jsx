"use client";
import NextLink from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const path = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [
    { display: "Home", slug: "/" },
    { display: "About", slug: "/about" },
    { display: "Events", slug: "/events" },
    { display: "Blog", slug: "/blog" },
  ];

  const handleContactClick = () => {
    setMenuOpen(false);

    if (path === "/") {
      // Already on homepage, scroll to contact
      scroll.scrollTo(document.getElementById("contact").offsetTop - 70);
    } else {
      // Navigate to homepage and scroll to contact
      router.push("/#contact");
    }
  };

  return (
    <header className={`header ${path === "/about" ? "header--light" : ""}`}>
      {/* Logo */}
      <Image
        className="header_logo"
        src="/assets/WhatsApp_Image_2024-12-30_at_06.02.59_bd23cc54-removebg-preview.png"
        alt="Logo"
      />

      {/* Hamburger Button */}
      <button
        className="header_menuBtn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Nav */}
      <ul className={`header_nav ${menuOpen ? "open" : ""}`}>
        {navItem.map((item) => (
          <li key={item.slug}>
            <NextLink href={item.slug} onClick={() => setMenuOpen(false)}>
              <h5>{item.display}</h5>
            </NextLink>
          </li>
        ))}

        {/* Contact Button */}
        <li>
          <button
            className="contact-btn flex items-center gap-2"
            onClick={handleContactClick}
          >
            <FaPhone /> Contact
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
