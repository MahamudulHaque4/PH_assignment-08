import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { Link, useLoaderData } from "react-router";
import Facts from "../Components/Facts";
import Hero from "../Components/Hero";
import ProductCards from "../Components/ProductCard";

const Home = () => {
  const products = useLoaderData();
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <Hero></Hero>
      <Facts></Facts>
      
      <div className="py-16 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">Trending Apps</h1>
            <HiMiniArrowTrendingUp className="text-4xl text-purple-600" />
          </div>

          <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
          >
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;