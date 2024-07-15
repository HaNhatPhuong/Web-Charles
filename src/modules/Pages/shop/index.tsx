import Banner from "./components/Banner";
import Items from "./components/Items";

const Shop = () => {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <Items />
      </div>
    </div>
  );
};

export default Shop;
