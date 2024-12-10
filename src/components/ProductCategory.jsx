/* eslint-disable react/prop-types */
export default function ProductCategory({ width, src }) {

    return (
        <div className="flex items-center justify-center my-2 mb-5 mx-3 relative group">
            <div className="transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-flyInUp absolute bg-white px-5 py-10  group-hover:animation-none transition-all duration-500 ease-in-out rounded-xl flex-col z-10 justify-center items-center space-y-3" >
                <p className="text-gray-400">حس خوب</p>
                <h2 className="font-bold text-black">title</h2>
                <p className="text-gray-500">حس خوب</p>
                <button className="bg-orange-300 rounded-full py-4 px-5 text-white font-bold">call to action</button>
            </div>
            <img className="z-1 rounded-xl" width={width} src={src} alt="" />
        </div>
    )
}
