import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1"> 
      <img src={offer} width={773} height={700} className=" object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col ">
       <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
       Get Best Deals Ever around
       <span className="text-red-800 inline-block mt-3"> 50-70% Off!!! </span>
        From all Our Stores. 
       </h2>
       <p className=" mt-4 lg:max-w-lg info-text ">"Step into savings at Martian Shoe Store! Unearth incredible deals with 50-70% off – your journey to stylish and affordable footwear begins here. Don't miss out on stepping into Martian savings!"</p>
       <p  className=" mt-4 lg:max-w-lg font-montserrat text-red-800 leading-7 font-bold">Strut your stuff with Martian flair – our shoes are not just on sale, they're on fire! Grab a pair and ignite your style</p>
       <div className=" mt-11 flex flex-wrap gap-4">
        <Button label= "Grab Now" iconURL={arrowRight} />
        <Button label="Learn More" backgroundColor="bg-gray-200" borderColor="border-slate-500" textColor="text-red-600" />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer