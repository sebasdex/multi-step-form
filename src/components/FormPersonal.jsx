function FormPersonal({ error, handleChange, formData }) {
    return (
        <div className='space-y-4 text-[hsl(213,96%,18%)]'>
            <div className='space-y-2'>
                <label htmlFor="name" className="md:flex justify-between">Name
                    {error.name && <span className="text-red-500 font-bold block">{error.name}</span>}
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className='p-2 md:p-4 border block w-full rounded-md' placeholder="e.g. Stephen King"
                />
            </div>
            <div className='space-y-2'>
                <label htmlFor="email" className="md:flex justify-between">Email Address
                    {error.email && <span className="text-red-500 font-bold block">{error.email}</span>}
                </label>

                <input type="email" name="email" value={formData.email} onChange={handleChange} className='p-2 md:p-4 border block w-full rounded-md' placeholder="e.g. stephenking@lorem.com" />
            </div>
            <div className='space-y-2'>
                <label htmlFor="number" className="md:flex justify-between">Phone Number
                    {error.number && <span className="text-red-500 font-bold block">{error.number}</span>}
                </label>
                <input type="text" name="number" value={formData.number} onChange={handleChange} className='p-2 md:p-4 border block w-full rounded-md' placeholder="e.g. +1 234 567 890" />
            </div>
        </div>
    )
}

export default FormPersonal