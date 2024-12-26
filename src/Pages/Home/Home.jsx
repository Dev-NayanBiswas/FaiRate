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
          <section>
            <BannerCarousel/>
          </section>
          <section>
          <FeaturedServices/>
          </section>
          <section>
        <CountUpContainer/>
          </section>
          <section>
            <WhoWeAre/>
          </section>
          <section className="my-2">
            <MeetOurPartners/>
          </section>
          <section>
            <FrequentlyAskedQuestions/>
          </section>
        </main>
      </section>
    </>
  )
}

export default Home