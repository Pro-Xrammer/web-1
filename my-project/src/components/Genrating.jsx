import { loading } from "../assets"
const Genrating = ({className}) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base ${className || ''}`}
    ><img className='w-5 h-5 mr-4' src={loading} alt="loading" /> AI is Genarating</div>
  )
}

export default Genrating;