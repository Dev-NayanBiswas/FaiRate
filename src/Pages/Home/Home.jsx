import BannerCarousel from "../../Components/BannerCarousel"
import CountUpContainer from "../../Components/CountUpContainer"
import FeaturedServices from "../../Components/Main/FeaturedServices"
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
          <FeaturedServices/>
        </main>
        <CountUpContainer/>
      </section>
    </>
  )
}

export default Home