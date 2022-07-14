import React from "react";
import { FaInfoCircle } from "react-icons/fa";


export default function NavbarComponent() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="p-4 md:px-8 bg-blue-900 shadow-lg text-white">
        <div className="flex justify-between">
          <div className="uppercase text-xl font-semibold">
            reminder-app
          </div>
          <div className="text-2xl">
            <FaInfoCircle></FaInfoCircle>
          </div>
        </div>
      </nav>
    </>
  );
}