export default function Footer() {

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h2 className="text-lg font-bold">Woodmart</h2>
                    <p className="text-gray-400 mt-2">
                    ارائه‌دهنده بهترین محصولات آرایشی و بهداشتی
                    </p>
                </div>
                <div className="flex justify-center space-x-4 text-gray-400">
                    <a href="#" className="hover:text-pink-500">اینستاگرام</a>
                    <a href="#" className="hover:text-pink-500">تلگرام</a>
                    <a href="#" className="hover:text-pink-500">تماس با ما</a>
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                    © {new Date().getFullYear()} تمامی حقوق محفوظ است.
                </div>
            </div>
        </footer>
    )
}
