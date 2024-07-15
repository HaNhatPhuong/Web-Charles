import Banner from "./components/Banner";
import List from "./components/List";

function Bloglist() {
  return (
    <div>
      <div className="mb-[120px]">
        <Banner />
      </div>
      <div className="mb-[120px]">
        <List />
      </div>
    </div>
  );
}

export default Bloglist;
