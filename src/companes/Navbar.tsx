import React from 'react';

interface IProps {
  setPage:(pageName:string)=>void

}

const Navbar: React.FC<IProps> = (iProms:IProps) => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <a onClick={()=>iProms.setPage("home")} href="#home" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <a onClick={()=>iProms.setPage("product")} href="#product" className="hover:text-gray-300">Services</a>
        </li>
        <li>
          <a onClick={()=>iProms.setPage("about")} href="#about" className="hover:text-gray-300">About</a>
        </li>
        <li>
          <a onClick={()=>iProms.setPage("HooksScreen")} href="#HooksScreen" className="hover:text-gray-300">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
