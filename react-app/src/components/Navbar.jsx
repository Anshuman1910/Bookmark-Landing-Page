import { useState } from 'react';
import logos from '../assets/logos/logo-bookmark.svg';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-50 py-6">
      <div className="flex justify-between items-center">
        
        <img src={logos} alt="bookmark-logo" className="md:w-32 w-64" />

        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-500 hover:text-red-500">Features</a>
          <a href="#" className="text-gray-500 hover:text-red-500">Pricing</a>
          <a href="#" className="text-gray-500 hover:text-red-500">FAQ</a>
          <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-white hover:text-red-600 border border-red-500">Login</button>
        </div>

       
        <div className="md:hidden absolute right-6 top-6 z-50 ">
          <button onClick={() => setIsOpen(!isOpen)} >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="flex flex-col space-y-4 mt-4 text-center md:hidden">
          <a href="#" className="text-gray-500 hover:text-red-500">Features</a>
          <a href="#" className="text-gray-500 hover:text-red-500">Pricing</a>
          <a href="#" className="text-gray-500 hover:text-red-500">FAQ</a>
          <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-white hover:text-red-600 border border-red-500">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
