/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Slider({ slides }){
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="relative w-full container place-self-center h-auto my-16">
        {/* Slides */}
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {
                slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative flex justify-between ">
                        {/* Background Image */}
                        <img src={slide.image} className="w-full h-96 object-contain -rotate-12" />

                        {/* Content Overlay */}
                        <div className="w-full inset-0 flex flex-col justify-center items-end text-center text-black mr-16 p-4">
                            <h2 className="text-7xl font-bold mb-5">{slide.title}</h2>
                            <p className="my-4 ">{slide.description}</p>
                            {slide.button && (
                            <a
                                href={slide.button.link}
                                className="px-4 py-2 text-white font-bold bg-orange-300 rounded hover:bg-orange-500 hover:scale-110 transition"
                            >
                                {slide.button.text}
                            </a>
                            )}
                        </div>
                        <div className="w-20"></div>
                    </div>
                ))
            }
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange-200 text-white p-3 hover:scale-110 rounded-full hover:bg-orange-400 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-200 text-white p-3 hover:scale-110 rounded-full hover:bg-orange-400 transition"
        >
          ❯
        </button>
      </div>
    );
  };
