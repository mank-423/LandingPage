import Button from "../Components/Button"

const SuperQuality = () => {
  return (
    <section 
      id="about-us"
      className="flex justify-between items-center
                max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">

        <h3 className='mt-10 font-palanquin text-4xl 
            capitalize font-bold lg:max-w-lg'>
          We provide you
          <span className="text-coral-red p-1">Super</span>
          <span className="text-coral-red p-1">Quality</span>
          Shoes
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h3>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed
          to elevate your experience, providing you with unwatched quality, innovation, and
          a touch of elegance.
        </p>

        <div className="mt-11">
          <Button label='View Details'/>
        </div>
      </div>

    </section>
  )
}

export default SuperQuality
