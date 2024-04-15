import { NewArrivalSection, YouMayLike } from "@/components";
import { HeroSection, ProductListSection } from "@/components/Pages/ProductList";

const Apparel = () => {
    return(
        <>
            <HeroSection title="apparel" bgImage='apparel' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." secondary/>
            <ProductListSection bgColor='pink'/>
            <NewArrivalSection/>
            <YouMayLike/>
        </>
    );
};

export default Apparel;
