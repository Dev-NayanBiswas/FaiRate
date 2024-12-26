import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function BannerCarousel(){
  const carouselProperties = [
    {
      image:"https://i.ibb.co.com/XkyH5bN/interior-wall-design.jpg",
      heading:"Interior Design",
      description:"Interior design blends creativity and functionality, transforming spaces into aesthetically pleasing, practical environments tailored to individual tastes and needs."
    },
    {
      image:"https://i.ibb.co.com/nMKzjjg/Influence-of-art-on-graphic-design3.jpg",
      heading:"Graphics Design",
      description:"Graphic design combines art and technology to create visual content, including logos, posters, and branding, that communicates ideas and captivates audiences."
    },
    {
      image:"https://i.ibb.co.com/fdxHC7c/Screenshot-7.jpg",
      heading:"Web Dev",
      description:"Web development involves designing, building, and maintaining websites, combining coding, creativity, and problem-solving to create engaging, functional online experiences. It encompasses front-end, back-end, and full-stack development."
    }
  ]
  return (
    <Carousel loop={true} autoplay={true} 
    transition={{
      type:"spring",
      bounce:0.4,
      duration:0.5}} className="rounded-xl h-[80vh]">
      {
        carouselProperties?.map(({image, heading, description})=><div key={crypto.randomUUID()} className="relative h-full w-full">
        <img
          src={image}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              {heading}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              {description}
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to="/services" size="lg" className="text-4xl text-defaultColor font-heading border-defaultColor px-7 py-2 bg-green-700/15 rounded-lg font-semibold cursor-pointer" color="white">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>)
      }
    </Carousel>
  );
}