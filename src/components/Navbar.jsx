// src/components/Navbar.jsx
import { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = [
    { id: 1, name: 'Home', link: '#' },
    { id: 2, name: 'About', link: '#about' },
    { id: 3, name: 'Projects', link: '#projects' },
    { id: 4, name: 'Skills', link: '#skills' },
    { id: 5, name: 'Experience', link: '#experience' },
    { id: 6, name: 'Contact', link: '#contact' },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Niyas</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a href={link} className="hover:text-blue-400 transition">
                {name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download="Mohaideen_Niyas_Resume.pdf"
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-2 text-white"
            >
              <FaDownload size={14} />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleNav} className="md:hidden text-white text-2xl">
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <ul className="md:hidden bg-gray-900 px-4 pb-4 space-y-3">
          {navLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a
                href={link}
                onClick={() => setNavOpen(false)}
                className="block hover:text-blue-400 transition"
              >
                {name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download="Mohaideen_Niyas_Resume.pdf"
              className="block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition text-white"
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
