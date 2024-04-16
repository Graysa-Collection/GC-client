import { NewArrivalSection, YouMayLike } from "@/components";
import { HeroSection, ProductListSection } from "@/components/Pages/ProductList";

const Books = () => {
    return(
        <>
            <HeroSection title="books" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." maskColor='yellow' bgImage='books'/>
            <ProductListSection bgColor='yellow'/>
            <NewArrivalSection/>
            <YouMayLike/>
        </>
    );
};

export default Books;
