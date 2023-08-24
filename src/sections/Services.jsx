import ServiceCard from "../Components/ServiceCard"
import { services } from "../constants"
const Services = () => {
  return (
    <section className="flex 
    justify-center max-container flex-wrap
    gap-9
    ">
      
      {services.map((service)=>(
        <ServiceCard 
          key={service.label}
          label={service.label}
          subtext={service.subtext}
          imgUrl = {service.imgURL}
          />
      ))}
    
    </section>
  )
}

export default Services
