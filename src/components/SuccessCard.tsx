
interface SuccessCardProps {
  handleDismiss: () => void
}


const SuccessCard = ({ handleDismiss }: SuccessCardProps) => {


  return (
    <div className="bg-slate-50 w-100% md:w-[700px] flex flex-col p-10 gap-5 shadow-2xl shadow-slate-500 rounded-3xl ">
      <h1 className="text-center font-bold text-4xl">
        Thanks for subscribing!
      </h1>

      <p className="py-3 text-xl">A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>

      <button
        onClick={handleDismiss}
        className="text-xl py-3 px-3.5 font-medium text-white bg-slate-800 rounded-xl bg-color hover:bg-slate-700 transition-colors uppercase">
        Dismiss message
      </button>
    </div>
  )
}

export default SuccessCard

