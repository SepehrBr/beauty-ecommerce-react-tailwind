/* eslint-disable react/prop-types */
export default function ProductIntro({ width, src }) {

    return (
        <>
            <div className="flex justify-between my-5 mx-6 relative ">
                <div className="absolute left-12 bottom-9 z-10 space-y-3" >
                    <p className="text-gray-400">حس خوب</p>
                    <h2 className="font-bold text-black">title</h2>
                    <p className="text-gray-500">حس خوب</p>
                    <button className="bg-orange-300 rounded-full py-4 px-5 text-white font-bold">call to action</button>
                </div>
                <img className="z-1 rounded-xl" width={width} src={src} alt="" />
            </div>
        </>
    )
}
