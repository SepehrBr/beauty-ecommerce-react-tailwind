/* eslint-disable react/prop-types */
export default function ProductCard({ image, title, price, label }) {
  return (
    <div className="mx-8 flex flex-col items-center bg-white rounded-lg shadow-md p-4 w-64 relative group">
      {label && (
        <span className="px-3 py-1 text-sm text-white bg-orange-300 rounded-full mb-2 absolute top-4 right-4">
          {label}
        </span>
      )}
      <ul className="transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-flyInLeft bg-white group-hover:animation-none transition-all duration-500 ease-in-out flex-col justify-center items-center space-y-3 border-2 border-gray-100 rounded-full px-2 py-3 absolute left-4 shadow">
        <li className="bg-transparent font-bold text-black my-2">
          <a href="#">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
          </a>
        </li>
        <li className="relative inline-flex items-center  text-sm font-medium text-center text-black bg-transparent">
          <a href="#" className="flex space-x-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </a>
        </li>
      </ul>
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4 "
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-lg text-orange-300 font-bold">{price} تومان</p>
    </div>
  );
}
