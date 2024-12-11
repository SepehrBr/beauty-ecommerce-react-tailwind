/* eslint-disable react/prop-types */
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MagazineRow from "../components/MagazineRow";
import ProductCrousel from "../components/ProductCrousel";
import Slider from "../components/Slider";
import SpeciaOffer from "../components/SpecialOffer";

export default function Root() {
  const slides = [
    {
      image:
        "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/revslider/rose-slide.png",
      title: "عنوان اسلاید ۱",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      button: { text: "بیشتر بدانید", link: "#slide1" },
    },
    {
      image: "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/revslider/branname.png",
      title: "عنوان اسلاید ۲",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      button: { text: "شروع کنید", link: "#slide2" },
    },
    {
      image: "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/revslider/ladies.png",
      title: "عنوان اسلاید ۳",
      description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      button: { text: "تماس با ما", link: "#slide3" },
    },
  ];

  const products = [
    {
      image:
        "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/img-2.png",
      title: "محصول ۱",
      price: "100,000",
      label: "جدید",
    },
    {
      image:
        "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/img-1.png",
      title: "محصول ۲",
      price: "200,000",
      label: "حراج",
    },
    {
      image:
        "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/img-5-1.png",
      title: "محصول ۳",
      price: "300,000",
    },
    {
      image:
        "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/img-15.png",
      title: "محصول ۴",
      price: "400,000",
      label: "ویژه",
    },
    {
      image: "https://via.placeholder.com/600x400?text=Product+5",
      title: "محصول ۵",
      price: "500,000",
    },
    {
      image: "https://via.placeholder.com/600x400?text=Product+6",
      title: "محصول ۶",
      price: "600,000",
    },
  ];

  const articles = [
    {
      id: 1,
      image: "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/5-trip-beautiful.jpg",
      label: "دسته‌بندی شده",
      title: "متن ساختگی برای دمو نوشته های بلاگ",
      author: "Admin",
      excerpt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      link: "#",
    },
    {
      id: 2,
      image: "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/2373413-2-1536x1152.jpg",
      label: "دسته‌بندی شده",
      title: "متن ساختگی برای دمو نوشته های بلاگ",
      author: "Admin",
      excerpt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      link: "#",
    },
    {
      id: 3,
      image: "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/blog-3-768x396.jpg",
      label: "دسته‌بندی شده",
      title: "متن ساختگی برای دمو نوشته های بلاگ",
      author: "Admin",
      excerpt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      link: "#",
    },
    {
      id: 4,
      image: "https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/beautiful-girl-standing-with-cream-min-2.jpg",
      label: "دسته‌بندی شده",
      title: "متن ساختگی برای دمو نوشته های بلاگ",
      author: "Admin",
      excerpt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      link: "#",
    },
  ];

  return (
    <div className="-z-50 bg-gradient-to-br from-orange-50 to-white w-screen p-0 m-0">
        <Header />
        <Slider slides={slides} />
      <main className="w-screen flex-col items-center">
        <Category />
        <SpeciaOffer />
        <ProductCrousel products={products} itemsPerPage={3} />
        <div className="w-screen">
            <MagazineRow articles={articles} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
