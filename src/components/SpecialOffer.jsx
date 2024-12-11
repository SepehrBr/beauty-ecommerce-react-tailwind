import Slider from "./Slider";

export default function SpeciaOffer() {


    return (
        <>
            <div className="w-full container place-self-center h-full flex justify-center items-center my-10">
                <div className="bg-orange-300 px-1 h-80 rounded-tl-full rounded-bl-full"></div>

                <div className="bg-white w-4/12 h-full shadow-lg rounded-xl ">
                    <ul className="flex flex-col items-end my-36 font-bold  w-full  text-white">
                        <li className="bg-gradient-to-l from-orange-300 from-60% to-orange-50 my-3  w-full text-end bg-orange-300 pr-2  py-2 rounded-lg flex justify-between items-center">
                            <p className="w-full mr-7 text-xl">محصولی پرفروش شماره 1</p>
                            <span className="font-bold text-3xl pb-1 rounded">|</span>
                        </li>
                        <li className="w-full text-end text-orange-300 pr-2  py-2 rounded-lg flex justify-between items-center">
                            <p className="w-full mr-7 text-xl ">محصولی پرفروش شماره 2</p>
                            <span className="font-bold text-3xl pb-1 rounded">|</span>
                        </li>
                        <li className="w-full text-end text-orange-300 pr-2  py-2 rounded-lg flex justify-between items-center">
                            <p className="w-full mr-7 text-xl ">محصولی پرفروش شماره 3</p>
                            <span className="font-bold text-3xl pb-1 rounded">|</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white w-8/12 h-full flex justify-center items-center shadow-lg rounded-xl">
                    {/* description */}
                    <div className="w-8/12 flex flex-col items-end mr-4">
                        <h2 className="font-bold text-3xl text-gray-600 mb-10 pt-4">لوسیون خوشبوکننده بدن</h2>

                        <div className="w-full flex justify-end items-center">
                            <div className="w-4/12 border-dashed border-2 h-full border-gray-500 p-2 text-center rounded-l-lg text-gray-400 font-bold bg-gray-200 hover:text-white hover:bg-orange-300 transition group">
                                <h3 className="font-bold ">درصد تخفیف شما:</h3>
                                <div className="p-4 bg-orange-300 rounded-r-2xl rounded-b-2xl text-white my-2 w-14 h-14 place-self-center group-hover:bg-gray-300">50%</div>
                            </div>
                            <div className="w-7/12 h-full border-dashed border-2 border-gray-500 p-2 text-center rounded-r-lg text-gray-400 font-bold bg-gray-200 hover:text-white hover:bg-orange-300 transition flex flex-col items-end group">
                                <h3 className="font-bold line-through decoration-2 my-2">500000 تومان</h3>
                                <h2 className="font-bold text-3xl text-black group-hover:text-white mb-5">250000 تومان</h2>
                            </div>
                        </div>
                        <ul className="flex flex-col items-end mt-7">
                            <li className="flex justify-center items-center py-2">
                                <p className="font-bold text-gray-400">ویژگی شماره 1</p>
                                <svg className="w-5 h-5 mx-3 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                                </svg>
                            </li>
                            <li className="flex justify-center items-center py-2">
                                <p className="font-bold text-gray-400">ویژگی شماره 2</p>
                                <svg className="w-5 h-5 mx-3 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                                </svg>
                            </li>
                            <li className="flex justify-center items-center py-2">
                                <p className="font-bold text-gray-400">ویژگی شماره 3</p>
                                <svg className="w-5 h-5 mx-3 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                                </svg>
                            </li>
                            <li className="flex justify-center items-center py-2">
                                <p className="font-bold text-gray-400">ویژگی شماره 4</p>
                                <svg className="w-5 h-5 mx-3 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                                </svg>
                            </li>
                        </ul>

                        <button className="rounded-l-full rounded-t-full bg-gray-700 text-white px-6 flex justify-center items-center py-3 my-5 hover:bg-gray-600 transition">
                            <p className="font-bold mr-2">فزودن به سبد خرید</p>
                            <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>

                    {/* picture */}
                    <div className="w-4/12 flex flex-col justify-center items-center mr-4">
                        <div className="w-11/12 py-3 rounded-bl-full rounded-br-full bg-gradient-to-l from-orange-300 from-75% to-white text-center place-self-center">
                            <p className="w-full font-bold text-white text-xl">پیشنهاد ویژه امروز</p>
                        </div>
                        <div className="w-full flex justify-center items-center relative">
                            <svg className="absolute left-0 w-9 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 8-4 4 4 4"/>
                            </svg>
                            <img src="https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/img-15-768x768.png"  />
                            <svg className="absolute right-0 w-9 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
                            </svg>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center place-self-center">
                            <h3 className="font-bold text-gray-500 text-lg">زمان باقی مانده تا پایان تخفیف</h3>
                            <div className="flex items-center justify-center space-x-4">
                                <div className="w-4/12 flex flex-col justify-center items-center my-3">
                                    <div className="border-dashed border-2 border-gray-400 p-2 text-center rounded-lg text-gray-400 font-bold hover:text-white hover:bg-orange-300 transition">22</div>
                                    <div className="text-gray-400 font-bold hover">دقیقه</div>
                                </div>
                                <div className="w-4/12 flex flex-col justify-center items-center my-3">
                                    <div className="border-dashed border-2 border-gray-400 p-2 text-center rounded-lg text-gray-400 font-bold hover:text-white hover:bg-orange-300 transition">22</div>
                                    <div className="text-gray-400 font-bold hover">ساعت</div>
                                </div>
                                <div className="w-4/12 flex flex-col justify-center items-center my-3">
                                    <div className="border-dashed border-2 border-gray-400 p-2 text-center rounded-lg text-gray-400 font-bold hover:text-white hover:bg-orange-300 transition">22</div>
                                    <div className="text-gray-400 font-bold hover">روز</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-orange-300 px-1 h-80 rounded-tr-full rounded-br-full"></div>
            </div>
        </>
    )
}
