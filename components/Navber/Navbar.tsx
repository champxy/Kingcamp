import { DarkMode } from "./Darkmode";
import DropdownListmanu from "./DropdownListmanu";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className=" shadow-sm mb-5">
      <div className="ctn mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 justify-center">
            <Search />
          </div>

          {/* Dark mode & Dropdown */}
          <div className="flex items-center space-x-4">
            <DarkMode />
            <DropdownListmanu />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="block md:hidden mt-4">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
