import { star } from '../assets/icons';
const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <img
         src={imgURL} alt={name} className="w-[290px] h-[290]"
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24}/>
            <p className=' font-serif text-xl leading-normal text-slate-600'>4.5</p>
            <h3 className='mt-2 text-l leading-normal font-semibold font-mono'>{name}</h3>
            <p className=' mt-2 font-semibold font-mono text-red-500 text-l leading-normal'>{price}</p>


        </div>
    </div>
  )
}

export default PopularProductCard