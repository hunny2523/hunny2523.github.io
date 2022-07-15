import React from "react";
import { FaInfoCircle } from "react-icons/fa";


export default function NavbarComponent() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="p-4 md:px-8 w-full top-0 bg-blue-900 shadow-lg text-white">
        <div className="flex justify-between">
          <div className="uppercase text-xl font-semibold">
            reminder-app
          </div>
          <div className=" has-tooltip">
            <FaInfoCircle className="text-2xl" />
            <span className='w-80 tooltip rounded shadow-lg p-3 border-blue-900 border bg-white text-black top-12 right-7'>Hello User!<br />Here you can create reminders for your upcoming things and make a list of your tasks. <br />Your data is being saved on your own PC so it's safe. We are not using any kind of database to save your personal information. <br /> For any kind of query,feel free to Email At @honeypatelf302@gmail.com <br />Thank You...!</span>
          </div>

        </div>
      </nav>
    </>
  );
}