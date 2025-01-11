
import {motion} from "motion/react";
import myFaq from "../assets/freq.svg"



function FrequentlyAskedQuestions(){

    const faq = [
        {
          question: "What is FaiRate, and what services does it offer?",
          answer: "FaiRate is a platform that connects users with curated services like event planning, professional consultations, and creative works."
        },
        {
          question: "How can I list my services on FaiRate?",
          answer: "Create an account, go to the 'List a Service' section, provide the necessary details, and publish your service for others to find."
        },
        {
          question: "How do I contact a service provider on FaiRate?",
          answer: "Use the secure messaging feature on FaiRate to communicate directly with providers and discuss details about the services you need."
        },
        {
          question: "Can I review and rate services on FaiRate?",
          answer: "Absolutely! After using a service, you can leave a review and rate the provider to help others make informed choices."
        },
        {
          question: "What happens if a service I booked is unavailable?",
          answer: "If a service is unavailable, the provider will notify you, and you can request a refund or book a different service."
        },
        {
          question: "Does FaiRate have a cancellation policy for booked services?",
          answer: "Cancellation policies vary by provider. Please check the service details for refund eligibility and cancellation guidelines."
        },
        {
          question: "Can I offer services in multiple categories on FaiRate?",
          answer: "Yes, FaiRate allows providers to list services in multiple categories. Just create separate listings for each service."
        }
      ];
      
      
  return (
    <section className="">
      <article
        className="md:mb-6 mb-20"
        initial={{
          opacity:0,
          x:'-100vw'
        }}
        animate={{
          opacity:1,
          x:0,
          transition:{
            duration:5,
            type:"spring",
            stiffness:20
          }
        }}
        >
        {/* <section className="flex justify-center items-center mb-5 gap-4 my-10 text-left"> */}
        <h1 className="sectionHeading text-left text-defaultColor font-semibold md:text-5xl text-3xl font-heading">People Often Asked . . .</h1>
        {/* </section> */}
        <p className="text-sm text-left w-full mx-auto my-4 font-ubuntu">People always asked about their queries, You might have something common in them or for better consultancy talk to our expert one</p>
        <div className="border-b-defaultColor border-b-[1px]"/>
      </article>
      <section
      
       className="flex lg:flex-row flex-col justify-center gap-4">
        <figure className="lg:w-4/12 w-full flex flex-col justify-center items-center">
          <img className="" src={myFaq} alt="" />
        </figure>
      <section className="lg:w-8/12 w-full">
      <motion.section
      initial={{
        opacity:0,
        x:"100vw"
      }}
      animate={{
        opacity:1,
        x:0,
        transition:{
          duration:5,
          type:"spring",
          stiffness:20
        }
      }}
       className=" flex flex-col gap-5">
        {
            faq.map(({question, answer}, index)=>
                <section
                 key={index} className='collapse collapse-plus shadow-lg'>
          <input type='radio' name='my-accordion-3' defaultChecked />

          <motion.section
          initial={{
            opacity:0.2,
            x:'50vw'
          }}
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              duration:0.7,
              delay:index/5,
              type:"tween",
              ease:"easeInOut"
            }
          }}
           className='collapse-title h-fit md:text-xl font-heading text-[16px] font-semibold text-defaultColor italic'>
            {question}
          </motion.section>
          <section
           className='collapse-content'>
            <p className="first-letter:text-4xl first-letter:font-para first-letter:italic first-letter:text-defaultColor first-letter:font-bold">{answer}</p>
          </section>
        </section>
            )
        }
      </motion.section>
      </section>
      </section>


    </section>
  );
}

export default FrequentlyAskedQuestions;
