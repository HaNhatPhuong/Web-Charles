import Banner from "./components/Banner";
import ProductDetail from "./components/ProductDetail";
import Related from "./components/Related";
import Review from "./components/Review";

const Shopdetails = () => {
  return (
    <div className="">
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <ProductDetail />
      </div>
      <div className="mb-[120px]">
        <Review />
      </div>
      <div className="mb-[100px]">
        <Related />
      </div>
    </div>
  );
};

export default Shopdetails;
