import React from 'react';
import { ReactComponent as Notification } from "../../Assets/Icons/notificationbell.svg";



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex items-center gap-2">
        <div className="bg-gray-400 rounded-md h-10 w-10"></div>
        <h1 className="text-2xl font-bold">Dazzie</h1>
      </div>

      <div className="flex items-center gap-4">
        <Notification className="mx-6" />
        <div className="bg-darkGray rounded-full h-10 w-10"></div>
        <div className="w-32">
          <h2 className="font-bold text-base">Sumanto</h2>
          <p className="text-sm text-darkGray">Cashier</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar