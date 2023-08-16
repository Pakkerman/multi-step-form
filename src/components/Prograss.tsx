export const MobileProgress = () => {
  return (
    <div className="flex justify-center space-x-4 md:hidden ">
      {["1", "2", "3", "4"].map((item) => (
        <button className="border-magnolia h-8 w-8 rounded-full border-2 bg-primary-light-blue">
          {item}
        </button>
      ))}
    </div>
  )
}

export const DesktopProgress = () => {
  return (
    <ul className="mx-8 hidden flex-col space-y-6  p-4 pt-[15%] md:flex ">
      {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map((item, idx) => (
        <li className="flex items-center space-x-2">
          <button className="border-magnolia h-8 w-8 rounded-full border-2 bg-primary-light-blue font-bold">
            {idx + 1}
          </button>
          <div className="flex flex-col">
            <p className="text-sm font-normal text-neutral-cool-gray">
              STEP {idx + 1}
            </p>
            <p className="text-sm font-bold text-neutral-light-gray ">{item}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
