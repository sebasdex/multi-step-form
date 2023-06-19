
function Pick({ addOn, checks, handleChangePick }) {
  return (
    <section className="grid grid-rows-3 gap-5">
      {addOn.map((item, index) => (
        <article
          className={`border-2 flex cursor-pointer gap-5 justify-between items-center text-sm p-4 rounded-md hover:bg-[hsl(231,100%,99%)] hover:border-[hsl(243,100%,62%)]`}
          key={item.id}
          onClick={() => handleChangePick(index, item.id)}
        >
          <div className="flex items-center justify-center gap-5">
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={checks[index]}
              onChange={() => handleChangePick(index, item.id)}
            />
            <p className="text-[hsl(213,96%,18%)] font-semibold">
              {item.name}
              <span className="block font-normal text-gray-400">
                {item.description}
              </span>
            </p>
          </div>
          <p className="text-[hsl(243,100%,62%)] font-semibold">
            +{item.bill}/{item.time}
          </p>
        </article>
      ))}
    </section>
  );
}

export default Pick;
