
function SideBar({step}) {
    return (
        <div className="bg-sidebar-mobile md:bg-sidebar-desktop bg-cover bg-no-repeat h-40 md:w-96 md:h-full rounded-lg md:p-6">
            <ul className="flex md:flex-col justify-center gap-5 md:gap-10 pt-8 font-semibold text-white">
                <li className="flex gap-5 font-bold">
                    <p className={`${step === 1 ? 'bg-[hsl(206,94%,87%)] text-black' : null} border rounded-full w-10 h-10 flex justify-center items-center`}>1</p>
                    <p className="uppercase text-gray-400 text-sm hidden md:inline">Step 1
                        <span className="block text-white">Your Info</span>
                    </p>
                </li>
                <li className="flex gap-5 font-bold">
                <p className={`${step === 2 ? 'bg-[hsl(206,94%,87%)] text-black' : null} border rounded-full w-10 h-10 flex justify-center items-center`}>2</p>
                    <p className="uppercase text-gray-400 text-sm hidden md:inline">Step 2
                        <span className="block text-white">Select Plan</span>
                    </p>
                </li>
                <li className="flex gap-5 font-bold">
                <p className={`${step === 3 ? 'bg-[hsl(206,94%,87%)] text-black' : null} border rounded-full w-10 h-10 flex justify-center items-center`}>3</p>
                    <p className="uppercase text-gray-400 text-sm hidden md:inline">Step 3
                        <span className="block text-white" >Add ons</span>
                    </p>
                </li>
                <li className="flex gap-5 font-bold">
                <p className={`${step >=4 ? 'bg-[hsl(206,94%,87%)] text-black' : null} border rounded-full w-10 h-10 flex justify-center items-center`}>4</p>
                    <p className="uppercase text-gray-400 text-sm hidden md:inline">Step 4
                        <span className="block text-white">Summary</span>
                    </p>
                </li>
            </ul>
        </div>

    )
}

export default SideBar