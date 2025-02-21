import logo from "./logo.svg";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">

        <div className="md:w-1/3 space-y-4">
          <img src={logo} alt="10Pearls Logo" className="h-10" />
          <p className="text-gray-400 text-sm">
            10Pearls is an award-winning digital development company, helping
            businesses with product design, development, and technology
            acceleration.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-between mt-6 md:mt-0">
          <div className="space-y-2">
            <h3 className="font-semibold">Company</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Services</li>
              <li>Industries</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Insights</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/3 flex flex-wrap justify-start md:justify-end mt-6 md:mt-0 space-x-4 text-sm text-gray-400">
          <p>United States</p>
          <p>United Kingdom</p>
          <p>Costa Rica</p>
          <p>Peru</p>
          <p>Colombia</p>
          <p>Pakistan</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">
          +1-703-935-1919 &nbsp; | &nbsp; info@10pearls.com
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
          <FaXTwitter className="text-gray-400 hover:text-white cursor-pointer" />
          <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
        </div>
        <p className="text-gray-400 text-sm mt-4 md:mt-0 cursor-pointer hover:text-white">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;