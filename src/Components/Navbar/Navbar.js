import React from 'react';
import { ReactComponent as Notification } from "../../Assets/Icons/notificationbell.svg";



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex items-center gap-2">

        <div className="bg-gray-400 rounded-md h-10 w-10 cursor-pointer"></div>
        <a href="/" className="text-2xl font-bold cursor-pointer">Dazzie</a>
      </div>

      <div className="flex items-center gap-4">
        <Notification className="mx-6 cursor-pointer" />
        <div className="bg-darkGray rounded-full h-10 w-10 cursor-pointer"></div>
        <div className="w-32">
          <h2 className="font-bold text-base cursor-pointer">Sumanto</h2>
          <p className="text-sm text-darkGray">Cashier</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar