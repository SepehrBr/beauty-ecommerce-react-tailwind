/* eslint-disable react/prop-types */
export default function MagazineCard({ image, label, title, author, excerpt, link }) {
    return (
      <div className="bg-white rounded-2xl shadow  border border-gray-200 relative group w-full">
        <div className="w-full mb-3 py-2 flex items-center justify-center">
            <span className="w-64 bg-orange-300  absolute top-0 rounded-bl-full rounded-br-full py-2"></span>
        </div>

        <div className="relative w-full flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="transform group-hover:animate-zoomIn group-hover:animation-none transition-all duration-600 ease-in-out w-9/12 rounded-3xl h-48 object-cover mb-3"
          />
          {
            label
            &&
            (
                <span className="absolute bottom-0 bg-orange-300 text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
                    { label }
                </span>
            )
          }
        </div>

        <div className="flex-col items-center text-center p-4">

          <h2 className="text-lg font-bold text-gray-800 mb-2 hover:text-orange-300 transition">
            {title}
          </h2>
          <div className="flex justify-center items-center text-sm text-gray-500 mb-2 text-center">
            <span className="flex items-center mr-2 space-x-2">
                {/* share */}
                <svg className="w-[30px] h-[30px]   text-gray-400 dark:text-white hover:text-orange-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z"/>
                </svg>

                {/* comments */}
                <div className="relative space-y-2">
                    <span className="absolute top-0 left-0 p-0.5 bg-gray-300 text-white font-light rounded-full shadow">
                        0
                    </span>
                    <svg className="w-[30px] h-[30px] hover:text-orange-300 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
                    </svg>
                </div>

                {/* admin */}
                <span className="flex ml-2 space-x-1 justify-center items-center">
                    <p>{author}</p>
                    <svg className="w-[30px] h-[30px] hover:text-orange-300  text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd"/>
                    </svg>
                </span>
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {excerpt}
          </p>
          <a
            href={link}
            className="text-sm font-semibold text-orange-400 hover:text-orange-300"
          >
            ادامه مطلب
          </a>
        </div>
      </div>
    );
  };
