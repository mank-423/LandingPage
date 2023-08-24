const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 border
            font-montserrat text-lg leading-none bg-coral-red text-white
            rounded-full border-coral-red">
        {label}

        {iconURL && <img 
            src={iconURL} 
            alt="arrow right icon" 
            className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button