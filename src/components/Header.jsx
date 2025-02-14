import { RiNotification3Line, RiArrowDownSLine } from "react-icons/ri";
import { Menu, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[8vh] border-b border-gray-600 p-4 flex items-center justify-between bg-gray-800">
      {/* Contenedor vacío para el lado izquierdo del header */}
      <div className="flex items-center gap-4"></div>
      {/* Contenedor para la información del usuario en el lado derecho */}
      <div className="flex items-center gap-4">
        <Link to="/profile" className="flex items-center gap-2 text-white hover:text-gray-300">
          <img
            src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
            className="w-8 h-8 object-cover rounded-full"
            alt="User Profile"
          />
          <span>Andres Felipe Reyes</span>
        </Link>
        <Menu
          menuButton={<MenuButton className="relative hover:bg-gray-700 p-2 rounded-lg transition-colors text-white"><RiNotification3Line size="1.5em" /></MenuButton>}
          align="end"
          arrow
          transition
          arrowClassName="bg-gray-800"
          menuClassName="bg-gray-800 p-4 rounded-lg"
        >
          {/* Notification Items */}
        </Menu>
        <Menu
          menuButton={<MenuButton className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-lg transition-colors text-white"><RiArrowDownSLine /></MenuButton>}
          align="end"
          arrow
          arrowClassName="bg-gray-800"
          transition
          menuClassName="bg-gray-800 p-4 rounded-lg"
        >
          {/* User Menu Items */}
        </Menu>
      </div>
    </header>
  );
};

export default Header;
