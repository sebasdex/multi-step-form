
function HeaderPersonal({title, desc}) {
    return (
        <>
            <header className='space-y-3'>
                <p className='text-2xl font-bold md:text-4xl text-[hsl(213,96%,18%)]'>{title}</p>
                <p className='text-gray-500'>{desc}</p>
            </header>
        </>
    )
}

export default HeaderPersonal