import Product from "./auth/Product";
import Showcase from "./auth/Showcase";
import Navbar from "./Navbar";
const Home = () => {
  // Example list of products
  return(
    <div className="flex flex-col gap-10 bg-gray-700">
    <Navbar/>
    <Showcase/>
    <Product />
    </div>
  )
}
export default Home;
