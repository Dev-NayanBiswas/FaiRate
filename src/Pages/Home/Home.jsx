import BannerCarousel from "../../Components/BannerCarousel"
import CountUpContainer from "../../Components/CountUpContainer"
import FrequentlyAskedQuestions from "../../Components/FrequentlyAskedQuestion"
import FeaturedServices from "../../Components/Main/FeaturedServices"
import MeetOurPartners from "../../Components/MeetOurPartners/MeetOurPartners"
import WhoWeAre from "../../Components/WhoWeAre"
import dynamicTitle from "../../Utilities/dynamicTitle"

function Home(){
  dynamicTitle("Home")
  return (
    <>
      <section>
        <section>
        </section>
        <main>
          <section className="md:mb-40 mb-16">
            <BannerCarousel/>
          </section>
          <section className="md:mb-40 mb-16">
          <FeaturedServices/>
          </section>
          <section className="md:mb-40 mb-16">
        <CountUpContainer/>
          </section>
          <section className="md:mb-40 mb-16">
            <WhoWeAre/>
          </section>
          <section className="md:mb-40 mb-16">
            <MeetOurPartners/>
          </section>
          <section className="md:mb-40 mb-16">
            <FrequentlyAskedQuestions/>
          </section>
        </main>
      </section>
    </>
  )
}

export default Home