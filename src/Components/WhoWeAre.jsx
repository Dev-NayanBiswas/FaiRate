import { Link } from "react-router-dom"

function WhoWeAre() {
  return (
    <div className="my-10">
        <h1 className="mx-auto my-10 text-defaultColor text-5xl font-semibold font-heading text-left">Who we Are . . .</h1>
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/MC1rd3m/rawpixel-com-lifeofpix-rawpixelcom1624-306786.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-justify">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold font-heading tracking-wide">About Us</h1>
      <p className="mb-5 text-left">
      At FaiRate, we prioritize user experience, transparency, and community building. Our platform is built on a foundation of trust, supported by advanced features that ensure fair bidding and quality service delivery. From web developers and graphic designers to SEO experts and instructors, FaiRate celebrates diversity and talent. Join our growing community today to unlock endless possibilities, connect with skilled professionals, and bring your visions to life. Together, we’re shaping a smarter, more connected world of services.
      </p>
      <p className="mb-5 text-right">
      At FaiRate, our users are at the heart of everything we do. We strive to provide a platform that empowers you to achieve your goals, whether you're offering your skills or seeking services. With intuitive tools, secure transactions, and a thriving community, FaiRate ensures your journey is smooth and rewarding. Your feedback and contributions help us continually evolve, making FaiRate not just a platform, but a space where your ideas, expertise, and aspirations come to life. Together, we build a community where every connection creates value and opportunity.
      </p>
      <Link to="/login" className="px-8 py-4 bg-defaultColor/45 text-xl font-heading rounded-xl">Lets Join Us</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default WhoWeAre