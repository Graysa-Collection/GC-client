import { NewArrivalSection, YouMayLike } from "@/components"
import { ProductDetailsSection } from "@/components/Pages/ProductDetails"

const ProductDetailsPage = () => {
    return(
        <>
            <ProductDetailsSection/>
            <NewArrivalSection/>
            <YouMayLike/>
        </>
    );
};

export default ProductDetailsPage;
