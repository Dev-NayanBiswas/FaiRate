import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
import Button from "./Loader/Button";
   
function ServiceCard({cardData}) {
  const {_id,website,serviceTitle,serviceImage,price,description,companyName,category} = cardData || {}
    return (
      <Card
        shadow={false}
        className="relative w-full overflow-hidden flex flex-col items-end"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
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
            alt="tania andrew"
            className="border-2 border-defaultColor"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <section className="text-gray-300 flex-1">
            <Typography variant="paragraph">Author</Typography>
            <Typography variant="paragraph">Published on</Typography>
          </section>
          </section>
          <section className="flex justify-end items-center mt-6">
            <Button state={cardData} to={"/details"} />
          </section>
          </section>
        </CardBody>
      </Card>
    );
  }


  export default ServiceCard;