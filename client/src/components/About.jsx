import { motion } from "framer-motion";
import bhuv from "../assets/bhuv.jpg";
import akashay from "../assets/aka.png";
import sir2 from "../assets/sir.jpg";
import miss from "../assets/miss.jpg";
import meg from "../assets/meg.jpg";
import sir3 from "../assets/sir3.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    y: direction === "up" ? 50 : -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const Section = ({ children, direction = "up", delay = 0 }) => (
  <motion.div
    variants={fadeIn(direction, delay)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const GradientImage = ({ src, alt }) => (
  <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
    <img src={src} alt={alt} className="object-cover w-full h-auto" />
    <div className="absolute inset-0 " />
  </div>
);

const About = () => {
  return (
    <div className=" relative  text-white font-sans">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* About Section */}

      <Section direction="up" delay={0.9}>
        <div className="max-w-3xl mx-auto py-20 px-6 mc-10 text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-lg">
          {/* Image */}
          <div className="mb-8 w-full overflow-hidden rounded-xl">
            {/* <GradientImage src="/nanosemic.png" alt="About Image" /> */}
          </div>

          {/* Text */}
          <h1 className="text-5xl font-bold mb-6 text-white">About Us</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Nano Semic Pvt. Ltd. is one of the brand new members in the discrete
            semiconductor innovation space. We specialize in developing advanced
            sensing platforms, unique sensing materials, characterization kits,
            and smart sensor products that leverage cutting-edge semiconductor
            technology.
          </p>
        </div>
      </Section>

      {/* Company Section */}
      <Section direction="down backdrop-blur-md bg-white/5">
        <div className=" max-w-6xl mx-auto py-20 px-6 grid my-10 md:grid-cols-2 gap-12 items-center max-w-3xl mx-auto py-20 px-6 text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-lg">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Company</h2>
            <p className="text-lg text-gray-300">
              Nano Semic Pvt. Ltd. was founded in 2024 and is presently
              incubated with IIT Bhubaneswar Research and Entrepreneurship Park.
              We are a semiconductor products and services company.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-lg text-gray-300">
              <li>Gas and water sensing in industries and homes.</li>
              <li>Healthcare diagnosis via non-invasive techniques.</li>
              <li>Educational and research tools for universities/schools.</li>
            </ul>
          </div>
          <div>
            <GradientImage src="/nanosemic.png" alt="Company" />
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section>
        <div className="max-w-6xl mx-auto py-20 px-6 grid my-10 md:grid-cols-2 gap-12 items-center max-w-3xl mx-auto py-20 px-6 text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-lg">
          <div className="order-2 md:order-1">
            <GradientImage src={meg} alt="Mission" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6">Mission</h2>
            <p className="text-lg text-gray-300">
              To make sensor technology accessible, reliable, and affordable for
              everyone — from innovators building smart homes to engineers
              powering smart cities.
            </p>
          </div>
        </div>
      </Section>

      {/* Innovation Section */}
      <Section direction="down">
        <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center max-w-3xl mx-auto py-20 px-6 text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-lg">
          <div>
            <h2 className="text-4xl font-bold mb-6">We are innovative</h2>
            <p className="text-lg text-gray-300">
              We craft intelligent sensing solutions that transform industries.
              From IoT-enabled environments to advanced automation, our
              cutting-edge sensor technology empowers businesses and enhances
              everyday life. Innovation is our core foundation.
            </p>
          </div>
          <div>
            <GradientImage src={miss} alt="Innovation" />
          </div>
        </div>
      </Section>

      {/* Core Team Section */}
      <Section>
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Meet the Core Team
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-20 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">

          {[
            {
              name: "Dr. Sayan Dey",
              title: "Director",
              image: sir2,
              bio: "Dr. Sayan received his B.Tech from WBUT, M.Tech from Jadavpur University, and Ph.D. from IIT Kharagpur. Fulbright-Nehru Fellow at Columbia University. Assistant Professor at IIT Bhubaneswar.",
            },
            {
              name: "Dr. Akashay K",
              title: "Director",
              image: akashay,
              bio: "Dr. Akashay received his B.Tech from NIT Calicut, and MS+PhD from IIT Madras. Former Senior Engineer at Micron. Assistant Professor at IIT Bhubaneswar.",
            },

          ].map((member, i) => (
            <Section direction={i % 2 === 0 ? "up" : "down"} key={member.name}>
              <div className="bg-black/60 text-white rounded-xl overflow-hidden backdrop-blur-md border border-white/10 shadow-xl transform transition-transform duration-500  hover:scale-105 hover:border-white/30 hover:shadow-[0_0_20px_#ffffff22]">
                <div className="w-full aspect-[3/2] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-md text-gray-300">{member.title}</p>
                  <p className="text-sm text-gray-400 mt-2">{member.bio}</p>
                  <div className="flex gap-4 mt-4">
                    <FaLinkedinIn
                      size={20}
                      className="hover:text-blue-400 transition-colors"
                    />
                    <FaXTwitter
                      size={20}
                      className="hover:text-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
