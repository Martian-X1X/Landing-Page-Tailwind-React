import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className=" Max-container">
      <div className=" flex justify-between items-star gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src= {footerLogo} width={150} height={50} />
          </a>
          <p className=" mt-6 text-base leading-7 font-palanquin text-white-400 sm:max-w-sm"> Get your product from our nearest store. Dont forget to collect points and use to get discounts and offers. (terms and condition Applied). </p>
            <div className=" flex items-center  gap-5 mt-8">
              {socialMedia.map((icon)=>(
                <div className=" flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img src={icon.src} alt="icon.alt" width={34} height={34} />
                </div>
              ))}
            </div>        
        </div>
        <div className=" flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className=" text-white font-palanquin text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul> {section.links.map((link) =>(
                <li className=" mt-3 text-white-400 font-serif leading-normal hover:text-rose-400 cursor-pointer" key= {link.name}>
                  <a> {link.name} </a>
                </li>
              ))} </ul>

            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className=" flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} className=" rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className=" font-palanquin cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer