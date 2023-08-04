import { Filter } from "../Components/Filter/Filter";
import Info from "../Components/Info/Info";
import Products from "../Components/Products/Products";

const Home = () => {
  return (
    <div>
      <Filter />
      <Products />
      <Info />
    </div>
  );
};

export default Home;
