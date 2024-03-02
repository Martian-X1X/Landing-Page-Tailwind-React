import PopularProductCard from "../Components/PopularProductCard";
import { products  } from "../constants";
const PopularProducts = () => {
  return (
    <section id="producrs" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-montserrat font-bold">Top Selling <span className=" text-fuchsia-700">Popular</span> Products</h2>
        <p className=" lg:max-w-lg mt-2 font-mono text-slate-900"> Our best slling products build for your comfort with styles that will remake your fashion sense</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
       {products.map((product)=>(
        <PopularProductCard key={product.name}{...product}/>
       ))}
      </div>
    </section>
  )
}

export default PopularProducts