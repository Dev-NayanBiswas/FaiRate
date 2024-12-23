import Header from "../../Components/Header/Header"
import FeaturedServices from "../../Components/Main/FeaturedServices"
import useCURD from "../../Hooks/useCURD"

function Home(){
  const {name} = useCURD();
  console.log(name)
  return (
    <>
      <section>
        <section>
        </section>
        <main>
          <FeaturedServices/>
        </main>
      </section>
    </>
  )
}

export default Home