
function Finishing({ finishPlan, pickAdd, setStep }) {

    const total = () => {
        const result = finishPlan.map(item => item.bill);
        const result2 = pickAdd.length === 1 ? pickAdd[0].bill : pickAdd.reduce((acc, curr) => acc + curr.bill, 0);
        const time = finishPlan.map(item => item.time);
        return Number(result) + Number(result2) + '/' + time;

    }

    const redirect = () =>{
        setStep(2);
    }

    return (
        <>
            <section className="bg-[hsl(231,100%,99%)] p-4 rounded-lg m-2">
                {finishPlan.map(item =>
                    <div key={item.id}>
                        <p className="text-[hsl(213,96%,18%)] font-semibold">{item.name}{item.time === 'mo' ? ' (Monthly)' : item.time === 'yr' ? ' (Yearly)' : ''}</p>
                        <div className="flex justify-between pb-4">
                            <a href="#" 
                            className="border-b-2 border-gray-400 text-gray-500 
                            hover:text-[hsl(243,100%,62%)] hover:border-[hsl(243,100%,62%)]" 
                            onClick={redirect}>
                                Change
                            </a>
                            <p className="text-[hsl(213,96%,18%)] font-semibold">${item.bill}/{item.time}</p>
                        </div>
                    </div>
                )}

                <hr />
                {pickAdd.map(item =>
                    <div className="flex justify-between pb-4 pt-3" key={item.id}>
                        <p className="text-gray-500">{item.name}</p>
                        <p className="text-[hsl(213,96%,18%)]">+${item.bill}/{item.time}</p>
                    </div>
                )}

            </section >
            <div className="flex justify-between px-4">
                <p className="text-gray-500">Total (per month)</p>
                <p className="text-[hsl(243,100%,62%)] font-bold">+${total()}</p>
            </div>
        </>
    )
}

export default Finishing