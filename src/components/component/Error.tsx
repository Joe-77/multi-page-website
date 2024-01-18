import err from "../../assets/404bg.png"
const Error = () => {
  return (
    <div className="flex items-center justify-center my-5 h-[80vh]">
      <img className="sm:w-1/2" src={err} alt="" />
    </div>
  )
}

export default Error