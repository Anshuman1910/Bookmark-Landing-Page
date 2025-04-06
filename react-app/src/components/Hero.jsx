import hero from '../assets/logos/hero-img.svg';

const Hero = () => {
  return (
    <section className="container mx-auto px-50 py-12 flex flex-col-reverse md:flex-row items-center">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">A Simple Bookmark Manager</h1>
        <p className="text-gray-500 text-base md:text-xl">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-6">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-white hover:text-blue-500 border border-blue-500">Get it on Chrome</button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-white">Get it on Firefox</button>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 mb-10 md:mb-0">
        <img src={hero} alt="Hero" className="mx-auto md:max-w-full max-w-64"/>
      </div>
    </section>
  );
};

export default Hero;
