import logo from '../assets/logos/logo-bookmark.svg';
import icon1 from '../assets/logos/icon-facebook.svg';
import icon2 from '../assets/logos/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
       
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <img src={logo} alt="Bookmark logo" className="w-32" />
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="hover:text-red-500">FEATURES</a>
            <a href="#" className="hover:text-red-500">DOWNLOAD</a>
            <a href="#" className="hover:text-red-500">FAQ</a>
          </div>
        </div>

        
        <div className="flex space-x-6">
          <a href="#"><img src={icon1} alt="Facebook" className="w-6 h-6" /></a>
          <a href="#"><img src={icon2} alt="Twitter" className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
