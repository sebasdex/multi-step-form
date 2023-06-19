function Plan({ handlePlanRadio, planRadio, planCash, handlePlanClick, planActive }) {
    return (
        <section className="h-96 p-2 grid grid-rows-3 gap-3 md:grid-cols-3">
            {planCash.map(item =>
                <article className={`${planActive === item.name ? 'bg-[hsl(231,100%,99%)] border-[hsl(243,100%,62%)]' : ''} border flex md:flex-col md:items-start md:justify-between md:py-5 items-center gap-4 px-4 rounded-md
                hover:bg-[hsl(231,100%,99%)] hover:border-[hsl(243,100%,62%)] md:row-span-2`} 
            key={item.id} onClick={() => handlePlanClick(item.id)}>
                    <img src={item.img} alt={item.name} />
                    <p className="text-[hsl(213,96%,18%)] font-semibold">{item.name}
                        <span className="text-gray-400 block font-normal">${item.bill}/{item.time}</span>
                        {planRadio ? <span className="text-[hsl(213,96%,18%)] block font-normal">2 months free</span> : ''}
                    </p>
                </article>
            )}

            <article className="bg-[hsl(231,100%,99%)] h-10 rounded-lg flex items-center justify-center gap-2 mt-2 md:col-span-3 p-7">
                <p className="text-[hsl(213,96%,18%)] font-semibold">Monthly</p>
                <div className="p-1 rounded-xl bg-[hsl(213,96%,18%)] 
            flex justify-center items-center gap-1">
                    <input type="radio" name="plan"
                        className="appearance-none w-4 h-4 rounded-full checked:bg-white"
                        defaultChecked={planRadio ? false : true}
                        onChange={handlePlanRadio} />
                    <input type="radio" name="plan"
                        className="appearance-none w-4 h-4 rounded-full checked:bg-white"
                        onChange={handlePlanRadio}
                        defaultChecked={planRadio ? true : false} />
                </div>
                <p className="text-gray-400 font-semibold">Yearly</p>
            </article>
        </section>
    )
}

export default Plan