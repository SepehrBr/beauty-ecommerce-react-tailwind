export default function Footer() {

    return (
        <footer className="bg-orange-300 text-gray-800 py-8">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h2 className="text-lg font-bold">Woodmart</h2>
                    <p className="text-gray-500 font-bold mt-2">
                    ارائه‌دهنده بهترین محصولات آرایشی و بهداشتی
                    </p>
                </div>
                <div className="flex justify-center space-x-4 text-gray-600-300">
                    <a href="#" className="hover:text-gray-500 hover:scale-110 transition ">اینستاگرام</a>
                    <a href="#" className="hover:text-gray-500 hover:scale-110 transition ">تلگرام</a>
                    <a href="#" className="hover:text-gray-500 hover:scale-110 transition ">تماس با ما</a>
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                    © {new Date().getFullYear()} تمامی حقوق محفوظ است.
                </div>
            </div>
        </footer>
    )
}
