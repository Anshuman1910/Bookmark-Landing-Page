import Card from "./Card";
import logo1 from '../assets/logos/logo-chrome.svg';
import logo2 from '../assets/logos/logo-firefox.svg';
import logo3 from '../assets/logos/logo-opera.svg';

const Extension = () => {
  return (
    <>
     
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Download the extension</h1>
        <p className="text-gray-500 mt-4 md:mt-6 max-w-xl mx-auto text-base md:text-lg">
          We've got more browsers in the pipeline. Please let us know if you have a favorite you'd like us to prioritize.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card image={logo1} title="Add to Chrome" version={"62"} />
        <Card image={logo2} title="Add to Firefox" version={"55"} />
        <Card image={logo3} title="Add to Opera" version={"46"} />
      </div>
    </>
  );
};

export default Extension;
