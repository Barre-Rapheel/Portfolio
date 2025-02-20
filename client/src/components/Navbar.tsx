import { Link } from "react-router-dom";
import { Home, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <Briefcase className="w-7 h-7 text-yellow-400" />
          <span>Portfolio</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <Home className="w-5 h-5" /> Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <Briefcase className="w-5 h-5" /> Projets
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <Mail className="w-5 h-5" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

