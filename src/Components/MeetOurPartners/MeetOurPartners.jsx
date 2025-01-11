import { MdOutlineEdit } from "react-icons/md";
import { SiCssdesignawards } from "react-icons/si";
import {motion} from "motion/react"

export default function MeetOurPartners(){
    return (
      <section className="">
        <h1 className="text-left md:text-5xl text-3xl text-defaultColor font-semibold font-heading md:mb-20 mb-10">Meet Our Partners . . . </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 h-full">
        <div className="grid gap-4">





          <motion.div
          initial={{ opacity:0, x:50}}
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              duration:2,
              delay:0.5,
              type:"spring",
              bounce:0.5,
            }
          }}
           className="group relative overflow-hidden rounded-xl">
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/pfqmPwC/images-q-tbn-ANd9-Gc-SYdop-LSPF5-L9-RS-p6dm6-Qr-SDC3-TO4-BFk-TVGQ-s.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-0 opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Anthony</p>
            <p className="text-white">Anthony, a top content writer on our website, excels in creating engaging, insightful, and high-quality articles that captivate readers worldwide</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">Content Writer</span>
            </figure>
            </section>
          </motion.div>




          <motion.div
          initial={{ opacity:0, y:50}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              duration:2,
              delay:1,
              type:"spring",
              bounce:0.5,
            }
          }}
           className="group relative rounded-xl overflow-hidden">
            <img
              className="h-full max-w-full rounded-lg object-cover object-center "
              src="https://i.ibb.co.com/dg976N1/graphic-design-page.webp"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-0 opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Our Partners</p>
            <p className="text-white">Thanks to all of them for their Contribution</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">by - Chairman</span>
            </figure>
            </section>
          </motion.div>





          <motion.div
          initial={{ opacity:0, y:50}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              duration:5,
              delay:0.2,
              type:"spring",
              bounce:0.5,
            }
          }}
           className="group relative rounded-xl overflow-hidden">
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/fnnZW6T/Jon-snow-0-1536999998.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-0 opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">John</p>
            <p className="text-white">John’s technical brilliance ensures seamless functionality, crafting a robust and efficient foundation for this innovative website.</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">Web Dev</span>
            </figure>
            </section>
          </motion.div>





        </div >
        <div className="grid gap-4 relative rounded-xl overflow-hidden">





          <motion.div
          initial={{ opacity:0, y:50}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              duration:5,
              type:"spring",
              bounce:0.5,
              delay:0.2
            }
          }}
           className="group relative rounded-xl overflow-hidden">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://i.ibb.co.com/CzG1gzy/84-640x640-exact-v1639052155.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-[0px] opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Lukaku</p>
            <p className="text-white">Lukaku’s strategic optimization techniques have improved visibility and search rankings, driving organic traffic and enhancing the site's reach.</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">SEO</span>
            </figure>
            </section>
          </motion.div>





          <motion.div
          initial={{ opacity:0, y:50}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              duration:3,
              type:"spring",
              bounce:0.5,
              delay:0.5
            }
          }}
           className="group relative rounded-xl overflow-hidden h-[40vh]">
            <img
              className="max-w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/p3KKvYV/luke-perry-attends-the-build-series-to-discuss-riverdale-at-news-photo-1721078178.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-0 opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Ovi</p>
            <p className="text-white">Ovi’s dedication and coding skills have contributed significantly to building and refining the website’s dynamic features.</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">Jr Dev</span>
            </figure>
            </section>
          </motion.div>


          <motion.div
          initial={{ opacity:0, y:50}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              duration:2,
              type:"spring",
              bounce:0.5,
              delay:0.2
            }
          }}
           className="group overflow-hidden relative">
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/hs93cR0/MV5-BZTFm-NWQ1-NTct-ZDA2-Ni00-ODAx-LTg3-ZGUt-Njhh-MTNl-ODE0-NWNm-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-[0px] opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Riya</p>
            <p className="text-white">Riya’s exceptional graphic design work adds vibrancy and creativity, making the website visually compelling and engaging.</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">Graphics Designer</span>
            </figure>
            </section>
          </motion.div>



        </div>


        <motion.div
        initial={{ opacity:0, y:50}}
        whileInView={{
          opacity:1,
          y:0,
          transition:{
            duration:2,
            type:"spring",
            bounce:0.5,
            delay:0.5
          }
        }}
         className="grid gap-4 ">
          <div className="group overflow-hidden relative rounded-xl">
            <img
              className="h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/vv2c8sB/tutor-8.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-[0px] opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Sam</p>
            <p className="text-white">Sam's guidance and teaching have empowered the team, fostering skills and collaboration for the website’s successful development.</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">Instructor</span>
            </figure>
            </section>
          </div>




          <motion.div
          initial={{ opacity:0, y:50}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              duration:2,
              type:"spring",
              bounce:0.5,
              delay:0.5
            }
          }}
           className="group overflow-hidden relative">
            <img
              className="h-full w-full rounded-lg object-cover "
              src="https://i.ibb.co.com/Df6bxww/images-q-tbn-ANd9-Gc-R13t-Rckwq-S44od-By9-EJfu-DJ7a8-I9-Hv-NGFNvg-s.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-[0px] opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Bill</p>
            <p className="text-white">Bill’s leadership and organizational prowess have ensured smooth project management, keeping the team aligned and achieving milestones effectively.</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">Manager</span>
            </figure>
            </section>
          </motion.div>




          <motion.div
          initial={{ opacity:0, y:50}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              duration:3,
              type:"spring",
              bounce:0.5,
              delay:0.2
            }
          }}
           className="group overflow-hidden relative rounded-xl h-full">
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/sC98xmk/11-2024-08-b4fb193ef05e1b363fd9dfb7f0deb5c6.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-[0px] opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Jim</p>
            <p className="text-white">Jim’s exceptional talent management fosters a motivated team, driving collaboration and nurturing the creativity behind the website's development.</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">Director</span>
            </figure>
            </section>
          </motion.div>
        </motion.div>




        <motion.div
        initial={{ opacity:0, y:50}}
        whileInView={{
          opacity:1,
          y:0,
          transition:{
            duration:2,
            type:"spring",
            bounce:0.5,
            delay:0.2
          }
        }}
         className="grid gap-4">
          <div className="group overflow-hidden h-full relative rounded-xl">
            <img
              className="object-cover max-w-full h-full rounded-lg"
              src="https://i.ibb.co.com/nC899t7/nadia.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-[0px] opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Nadia</p>
            <p className="text-white">Nadia's visionary leadership steers the project, ensuring strategic alignment and setting a clear direction for the website's success.</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <MdOutlineEdit />
            <span className="text-xl italic font-ubuntu">HR</span>
            </figure>
            </section>
          </div>





          <motion.div
          initial={{ opacity:0, y:50}}
          whileInView={{
            opacity:1,
            y:0,
            transition:{
              duration:4,
              type:"spring",
              bounce:0.5,
              delay:0.4
            }
          }}
           className="group overflow-hidden relative">
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co.com/KxWQFzX/1622044748009-e-2147483647-v-beta-t-AMq57p-Ljcg29w-Bilb-Uj-CWWn1-EIg-O8ju-Qfe7-N7-W8-A-E.jpg"
              alt="gallery-photo"
            />
            <section className="absolute h-full -bottom-24 group-hover:bottom-[0px] opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 rounded-xl px-3 py-10">
            <p className="text-2xl text-white font-heading font-semibold">Jenny</p>
            <p className="text-white">Jenny's creativity and expertise in design have brought visually stunning elements to life, elevating the website's aesthetic appeal.</p>
            <figure className="text-white flex justify-start items-center gap-2">
            <SiCssdesignawards />
            <span className="text-xl italic font-ubuntu">Designer</span>
            </figure>
            </section>
          </motion.div>
        </motion.div>


      </div>
      </section>
    );
  }