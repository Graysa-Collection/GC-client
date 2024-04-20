import { CartSidebar, NewArrivalSection, YouMayLike } from "@/components"
import { ProductDetailsSection } from "@/components/Pages/ProductDetails"

const ProductDetailsPage = () => {
    return(
        <>
            <CartSidebar/>
            <ProductDetailsSection/>
            <NewArrivalSection/>
            <YouMayLike/>
        </>
    );
};

export default ProductDetailsPage;
