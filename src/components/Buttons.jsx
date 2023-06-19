
function Buttons({handleClick, step, setStep}) {
    function handleBack(){
        setStep(step -1);
    }
    return (
        <div className={`p-2 border-black bg-white flex ${step > 1 ? 'justify-between' : 'justify-end'} md:mt-2`}>
            {step > 1 ? 
            (<button className="text-gray-400 font-semibold" onClick={handleBack}>Go Back</button>): null
        }
            <button className={`${step >=4 ? 'bg-[hsl(243,100%,62%)]' : 'bg-[hsl(213,96%,18%)]'} rounded-lg  text-white p-3 
            hover:bg-[hsl(213,96%,25%)]`} 
            onClick={handleClick}>{step >=4 ? 'Confirm' : 'Next Step'}</button>            
        </div>
    )
}

export default Buttons