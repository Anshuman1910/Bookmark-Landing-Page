import React, { useState } from "react";
import img1 from "../assets/features/illustration-features-tab-1.svg";
import img2 from "../assets/features/illustration-features-tab-2.svg";
import img3 from "../assets/features/illustration-features-tab-3.svg";
const featuresData = [
  {
    title: "Simple Bookmarking",
    header: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control.",
    image: img1,
  },
  {
    title: "Speedy Searching",
    header: "Intelligent search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: img2,
  },
  {
    title: "Easy Sharing",
    header: "Share your bookmarks",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: img3,
  },
];

const Features = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-20 ">
      <div className="conatiner mx-auto text-center px-4">
        <h2 className="mb-4 font-bold text-4xl">Features</h2>
        <p className="text-m text-slate-500 mx-auto max-w-xl mb-14">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <div className="flex justify-center space-x-4 mb-8 ">
          {featuresData.map((feature, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`pb-2 px-4 font-medium ${
                selectedIndex === index
                  ? "border-b-4 border-red-500 text-black"
                  : "text-gray-400"
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>
        <div className="  flex md:flex-row items-center gap-10 mt-12 ">
          <div className="px-20 hidden md:block">
            <img
              src={featuresData[selectedIndex].image}
              alt={featuresData[selectedIndex].title}
              className="max-w-m mx-auto"
            />
          </div>
          <div className="max-w-md text-left px-30">
            <h3 className="text-2xl font-semibold mb-6">
              {featuresData[selectedIndex].header}
            </h3>
            <p className="text-slate-500 mb-4 ">
              {featuresData[selectedIndex].content}
            </p>
            <a
              href="#"
              className="bg-blue-500 font-bold text-white rounded-md px-6 py-3 hover:text-blue-500 hover:bg-white"
            >
              More Info
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
