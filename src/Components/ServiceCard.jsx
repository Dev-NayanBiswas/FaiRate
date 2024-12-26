import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import {motion} from "motion/react"

import Button from "./Loader/Button";
   
function ServiceCard({idx,cardData}){
  const {_id,website,serviceTitle,serviceImage,price,description,companyName,category,name,userPhoto,publishedOn} = cardData || {}
    return (
      <motion.Card
      initial={{
        y:'100px',
        opacity:0,
        scale:0.9
      }}
      whileInView={{
        y:0,
        opacity:1,
        scale:1,
        transition:{
          delay:idx/5,
          type:"spring",
          duration:0.5
        }
      }}
        shadow={false}
        className="relative w-full overflow-hidden flex flex-col items-end rounded-xl"
      >
        <CardHeader
        style={{
          background:`url(${serviceImage})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
        backgroundPosition:'center',
        }}
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        >
          <div className="to-bg-black-100 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/900 to-black/45" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12 flex-1 flex flex-col">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-heading leading-[1.5] text-gray-200"
          >
            {serviceTitle}
          </Typography>
          <Typography variant="paragraph" className="mb-4 text-gray-200 flex-1">
            {description}
          </Typography>
          <Typography variant="paragraph" className="text-gray-300 font-para text-xl font-semibold my-8">Starting From
          </Typography>
          <Typography variant="small" className="text-2xl text-white">
            $ {price}/month 
            </Typography>
          <section className="flex flex-col justify-between">
          <section className="flex gap-5 mt-10">
          <Avatar
            size="md"
            variant="circular"
            alt="User"
            className="border-2 object-cover border-defaultColor"
            src={userPhoto}
          />
          <section className="text-gray-300 flex-1">
            <Typography variant="paragraph">By : {name}</Typography>
            <Typography variant="paragraph">Posted On : {publishedOn}</Typography>
          </section>
          </section>
          <section className="flex justify-end items-center mt-6">
            <Button state={cardData} to={"/details"} />
          </section>
          </section>
        </CardBody>
      </motion.Card>
    );
  }


  export default ServiceCard;