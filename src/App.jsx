import "./App.css";
import React, { useState, useEffect } from "react";
import heroImage from "./images/hero_image.jpg";
import image_1 from "./images/background.png";
import image_xl from "./images/background_xl.png";
import image_lg from "./images/background_lg.png";
import image_md from "./images/background_md.png";
import image_sm from "./images/background_sm.png";
import image_mobile from "./images/background_mobile.png";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
];

const handleSubmit = async (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  try {
    const response = await fetch(
      "https://portfolio-backend-zwvz.onrender.com/api/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      }
    );

    if (response.ok) {
      alert("Message sent successfully!");
      e.target.reset(); // optional: clears the form
    } else {
      const data = await response.json();
      alert(data?.error || "Something went wrong.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server error!");
  }
};

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 400; // adjust as needed
      const opacity =
        1 - Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
      setBgOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setPosition({ x: (clientX - centerX) / 30, y: (clientY - centerY) / 30 });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <div
          className="block sm:hidden w-full h-full bg-cover bg-center shadow-xl"
          style={{
            backgroundImage: `url(${image_mobile})`,
            opacity: bgOpacity,
          }}
        ></div>
        <div
          className="hidden sm:block md:hidden w-full h-full bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${image_sm})`, opacity: bgOpacity }}
        ></div>
        <div
          className="hidden md:block lg:hidden w-full h-full bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${image_md})`, opacity: bgOpacity }}
        ></div>
        <div
          className="hidden lg:block xl:hidden w-full h-full bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${image_lg})`, opacity: bgOpacity }}
        ></div>
        <div
          className="hidden xl:block 2xl:hidden w-full h-full bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${image_xl})`, opacity: bgOpacity }}
        ></div>
        <div
          className="hidden 2xl:block w-full h-full bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url(${image_1})`, opacity: bgOpacity }}
        ></div>
      </div>

          {/* navbar section */}
      <div className="navbar">
        <div className="navbar-container">
          <h1 className="site-name">Subham's PORTFOLIO</h1>
          <nav className="nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative z-10 h-screen"></div>

      <section className="min-h-screen bg-transparent px-8 py-16" id="about">
        <div
          className="flex flex-col md:flex-row items-center justify-center h-fit py-20 px-6 md:px-16 bg-transparent "
          onMouseMove={handleMouseMove}
        >
          <div
            className="w-full md:w-1/3"
            data-aos="zoom-in"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src={heroImage}
              alt="Myself"
              className="rounded-full shadow-xl w-[300px] h-[300px] object-cover mx-auto"
            />
          </div>

          <div
            className="w-full md:w-2/3 mt-10 md:mt-0 md:pl-10"
            data-aos="fade-left"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <h1 className="text-4xl font-mono font-bold text-[#6973cd]">
              About Me
            </h1>
            <p className="mt-4 text-[#ddb6f1d7] leading-relaxed text-lg">
              I'm Subham Biswas, a full stack developer passionate about
              building modern, user-friendly web apps. With a background in
              industrial design, I blend creativity with code. I'm currently
              focused on React, Node.js, and Tailwind. Always learning, always
              improving — open to internships and projects that challenge me to
              grow.
            </p>

            {/* Skills */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div
                className="bg-[#927e93] p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-semibold mb-6 text-[#7b158f]">
                  Skills
                </h3>
                {/* Fixed grid layout - responsive columns and proper spacing */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center group cursor-pointer hover:-translate-y-1 transition-transform duration-300 min-h-[80px] justify-center"
                    >
                      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 mb-2">
                        {skill.icon}
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-[#430c68] group-hover:text-[#e2dfe8] text-center leading-tight">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div
                className="bg-[#927e93] p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#4b0082]">
                  Experience
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="leading-relaxed">
                    <strong className="text-[#4b0082]">
                      Smart Cycle Parking System
                    </strong>
                    <br />
                    <span className="text-sm">
                      Campus project blending design + tech
                    </span>
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-[#4b0082]">Sticars</strong>
                    <br />
                    <span className="text-sm">
                      Visual sticker tool for car mods
                    </span>
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-[#4b0082]">
                      Event Tech Contribution
                    </strong>
                    <br />
                    <span className="text-sm">
                      Contributed to event tech stack at NES & Roots (Event
                      management)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mt-8 bg-[#927e93] p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-[#4b0082]">
                Education
              </h3>
              <ul className="space-y-4 text-[#080c10]">
                <li>
                  <strong>B.Tech in Industrial Design</strong>
                  <br />
                  <a
                    href="https://www.nitrkl.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 hover:underline"
                  >
                    National Institute of Technology, Rourkela
                  </a>
                  <p className="text-sm text-[#dcd3d390]">Aug 2023 – Present</p>
                </li>
                <li>
                  <strong>Class 12</strong>
                  <br />
                  Jawahar Navodaya Vidyalaya, Khatiguda
                  <br />
                  <span className="text-sm text-[#dcd3d390]">
                    CBSE | Passed: 2022 | 90%
                  </span>
                </li>
                <li>
                  <strong>Class 10</strong>
                  <br />
                  Jawahar Navodaya Vidyalaya, Khatiguda
                  <br />
                  <span className="text-sm text-[#dcd3d390]">
                    CBSE | Passed: 2020 | 95%
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section className="py-20 px-6 md:px-16 " id="projects">
        <h2
          className="text-4xl font-bold text-center text-[#e234e6] mb-12"
          data-aos="fade-up"
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div
            className="bg-[#927e93] p-6 rounded-xl shadow-md hover:shadow-xl transition"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold text-[#703095f6]">
              Smart Cycle Parking
            </h3>
            <p className="text-gray-700 mt-2">
              A campus project using sensors and IoT to manage cycle parking
              intelligently.
            </p>
            <p className="text-sm text-[#1f0b21c6] mt-2">
              Tech: Node.js, Express, MongoDB
            </p>
          </div>
          <div
            className="bg-[#927e93] p-6 rounded-xl shadow-md hover:shadow-xl transition"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold text-[#703095f6]">Sticars</h3>
            <p className="text-gray-700 mt-2">
              A tool to visualize how stickers would look on cars, including
              material analysis.
            </p>
            <p className="text-sm text-black mt-2">
              Tech: HTML, CSS, JS, Figma
            </p>
          </div>
        </div>
      </section>
      {/* ===== Contact Section ===== */}
      <section className="py-20 px-6 md:px-16 " id="contact">
        <h2
          className="text-4xl font-bold text-center text-[#e234e6] mb-12"
          data-aos="fade-up"
        >
          Contact Me
        </h2>
        <div
          className="grid md:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="space-y-6 text-[#e7ebf0]">
            <p className="text-lg">
              I'm open to freelance, collaborations, or full-time roles. Drop me
              a message and let's connect!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[#dc28ed] font-semibold">📧 Email:</span>
                <a
                  href="mailto:subham@example.com"
                  className="text-[#e7ebf0] hover:underline"
                >
                  subham04567gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#dc28ed] font-semibold">📞 Phone:</span>
                <a
                  href="tel:+918926040785"
                  className="text-[#e7ebf0] hover:underline"
                >
                  +91 89260 40785
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#dc28ed] font-semibold">
                  📍 Location:
                </span>
                <span>Rourkela, Odisha</span>
              </div>
            </div>
          </div>

          <form
            className=" bg-[#534c57] p-8 rounded-xl shadow-md space-y-6"
            data-aos="fade-left"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#703095f6]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#703095f6]"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md border border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#a357cff6]"
              required
            />
            <button
              type="submit"
              className="bg-[#b34beff6] text-white px-6 py-3 rounded-md hover:bg-[#5d267a] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
