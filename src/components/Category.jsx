import ProductCategory from "./ProductCategory";
import ProductIntro from "./ProductIntro";

export default function Category() {

    return (
        <div className="flex-col justify-center items-center">
            <div className="flex justify-center items-center">
                <ProductIntro  width={500} src={"https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/banner-21-1.jpg"} />
                <ProductIntro width={500} src={"https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/banner-21-1.jpg"} />
            </div>
            <div className="flex justify-center">
                <ProductCategory width={250} src={"https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/0.jpg"} />
                <ProductCategory width={250} src={"https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/0.jpg"} />
                <ProductCategory width={250} src={"https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/0.jpg"} />
                <ProductCategory width={250} src={"https://demo.i-wp.ir/woodland/cosmetic/wp-content/uploads/2022/01/0.jpg"} />

            </div>
        </div>
    )
}
