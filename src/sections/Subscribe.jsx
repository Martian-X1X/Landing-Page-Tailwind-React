import Button from "../Components/Button"

const Subscribe = () => {
  return (
    <section className=" max-container flex justify-between items-center max=lg:flex-col gap-10" id="contact-us">
      <h3 className=" text-4xl leading-[70px] lf:max-w-md font-palanquin font-bold">Sign Up For<span className=" text-red-600"> Updates </span> & Newsletter</h3>
      <div className=" lg:max-w-[40%] w-full flex items-center msx-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-200 rounded-full">
        <input type="text" placeholder="Subscribe Now Martian@xyz.com" className="input" />
        <div className=" flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign-Up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe