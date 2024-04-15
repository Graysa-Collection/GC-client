import { NewArrivalSection, YouMayLike } from "@/components";
import { HeroSection, ProductListSection } from "@/components/Pages/ProductList";

const BeautyAndCare = () => {
    return(
        <>
            <HeroSection title="beauty & care" bgImage='beauty' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." primary/>
            <NewArrivalSection/>
            <ProductListSection bgColor='green'/>
            <YouMayLike/>
        </>
    );
};

export default BeautyAndCare;
