import { useRef, useState } from "react";
import ProductCard from "./ProductCard";

/* eslint-disable react/prop-types */
export default function ProductCrousel({ products, itemsPerPage = 3 }) {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const containerRef = useRef(null);

    const handleNext = () => {
      if (currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    const handlePrevious = () => {
      if (currentPage > 0) {
        setCurrentPage((prev) => prev - 1);
      }
    };

    // تابع برای گرفتن آیتم‌های صفحه جاری
    const getVisibleItems = () => {
      const start = currentPage * itemsPerPage;
      const end = start + itemsPerPage;
      return products.slice(start, end);
    };

    return (
      <div className="relative w-screen h-full pb-10 pt-8 bg-orange-200 flex-col items-center justify-center">
        <div className="flex justify-between items-center mb-8">
            <ul className="bg-transparent flex ml-10">
                <li className="bg-transparent font-bold text-black p-2"><a href="#">آرایشی</a></li>
                <li className="bg-transparent text-black p-2 font-thin">|</li>
                <li className="bg-transparent font-bold text-black p-2"><a href="#">بهداشتی</a></li>
                <li className="bg-transparent text-black p-2 font-thin">|</li>
                <li className="bg-transparent font-bold text-black p-2"><a href="#">موی سر</a></li>
                <li className="bg-transparent text-black p-2 font-thin">|</li>
                <li className="bg-transparent font-bold text-black p-2"><a href="#">بدن</a></li>
            </ul>
            <h2 className="mr-20 font-bold">محصولات پرفروش</h2>
        </div>
       <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className={`absolute left-20 top-1/2 transform -translate-y-1/2  text-gray-400 bg-transparent transition ${
            currentPage === 0 ? "opacity-50" : "hover:text-gray-900"
          }`}
        >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
            </svg>
        </button>

       <div
          ref={containerRef}
          className="flex gap-4 overflow-hidden w-full justify-center items-center transition-transform ease-in-out duration-500"
        >
          {getVisibleItems().map((product, index) => (
            <div key={index} className="flex-none">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

       <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className={`absolute right-20 top-1/2 transform -translate-y-1/2  text-gray-400 bg-transparent transition ${
            currentPage === totalPages - 1 ? "opacity-50" : "hover:text-gray-900"
          }`}
        >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
            </svg>
        </button>
      </div>
    );
  };
