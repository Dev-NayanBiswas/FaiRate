
import {motion} from "motion/react";


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
    <section className="flex flex-col justify-center h-full my-10">
        <article
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
        <section className="flex justify-center items-center mb-5 gap-4 my-10">


        <div
         className="border-b-[1px] border-defaultColor flex-1 w-4/12 origin-right"/>
        <h1 className="sectionHeading text-center text-defaultColor font-semibold text-4xl font-heading">People Often Asked</h1>
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4 font-ubuntu">People always asked about their queries, You might have something common in them or for better consultancy talk to our expert one</p>
      </article>
      <motion.section
      
       className="flex lg:flex-row flex-col justify-center gap-4">
       



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
                 key={index} className='collapse collapse-plus shadow-lg w-full'>
          <input type='radio' name='my-accordion-3' defaultChecked />

          <motion.section
          initial={{
            opacity:0.2,
            x:'50vw'
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{
              duration:0.7,
              delay:index/5,
              type:"tween",
              ease:"easeInOut"
            }
          }}
           className='collapse-title md:text-2xl font-heading text-lg font-semibold text-defaultColor italic'>
            {question}
          </motion.section>
          <section className='collapse-content'>
            <p>{answer}</p>
          </section>
        </section>
            )
        }
      </motion.section>
      </motion.section>


    </section>
  );
}

export default FrequentlyAskedQuestions;
