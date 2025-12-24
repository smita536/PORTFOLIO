import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills-education", label: "Skills & Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-[#00aee0] text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Debasmita</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:underline hover:text-yellow-300 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 font-medium">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:underline hover:text-yellow-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
