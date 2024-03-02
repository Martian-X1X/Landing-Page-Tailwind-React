import  Button from "../Components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col ">
       <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
       The Best Quality Ever
       <span className="text-red-800 inline-block mt-3"> Imagined </span>
        From Our Stores 
       </h2>
       <p className=" mt-4 lg:max-w-lg info-text ">Martian Shop sets the standard for top-notch shoes, combining exquisite craftsmanship with premium materials. Their collection boasts timeless designs, superior comfort, and lasting durability, making each pair a true statement of quality and style.</p>
       <p  className=" mt-4 lg:max-w-lg font-montserrat text-red-800 leading-7 font-bold">"Elevate your style to new heights with shoes that redefine excellence."</p>
       <div className=" mt-11">
        <Button label= "View Details" />
        </div>
      </div>
      
      <div className=" fle-1 flex justify-center items-center">
        <img
         src={shoe8} alt="shoe8" width={570} height={520} className=" object-contain"
        />

      </div>
    </section>
  )
}

export default SuperQuality