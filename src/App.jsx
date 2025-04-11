import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myimage from './assets/myimage.jpg'
import Card from './components/Card';
import SkillBars from './components/SkillBars'

const skills = [
  {
    skillName: "HTML",
    level: 30
  },
  {
    skillName: "CSS",
    level: 40

  },
  {
    skillName: "Python",
    level: 55
  },
  {
    skillName: "Cisco",
    level: 80
  },
  {
    skillName: "Java script",
    level: 40
  },
  {
    skillName: "English",
    level: 20
  },

  {
    skillName: "French",
    level: 100
  },

  {
    skillName: "Japanese",
    level: 35
  },
]


function App() {
  return (
    <>
       <header className="text-gray-700 border-b border-gray-200">
        <div className="container mx-auto p-5 flex flex-col md:flex-row items-center font-serif">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">DjokoCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300 font-serif">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300 font-serif">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-400 duration-300 font-serif">
              Skills
            </a>
            <a href="#blog" className="mr-5 hover:text-blue-400 duration-300 font-serif">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex flex-col md:flex-row items-center container mx-auto py-20 px-5 space-y-8 md:space-y-0 md:space-x-12 font-serif">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-medium mb-4 font-serif">
              HI!
              <br />
              I'm DjokoCode
              <br />
              Web developer
            </h1>
            <p className="mb-8 leading-relaxed font-serif">
              I'm a passionate, creative and solutions-oriented web developer apprentice who tries to bring technical expertise and experience to ambitious digital projects. I'm proficient in various technologies, including HTML, CSS, JavaScript, PHP, and frameworks such as React, Vue.js, Node.js, Python.
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300 font-serif">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 w-5/6">
            <img src={myimage} alt="DjokoCode" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900 font-serif" id="about">
              About Me
            </h1>
            <p className="pb-10 font-serif">
              Hi, my name is Djoko Tayem Christy Brayanne. I'm from Cameroon, studying in Japan. My dream is to become a computer engineer, and I'll do everything to achieve that. I'm a hard worker and always motivated to learn a lot.
            </p>
            <p className="font-serif">
              I'm particularly interested in IP addressing, routing, software development, cybersecurity, and database management. I'm self-motivated, autonomous, and I'm convinced that I can bring added value to a team while continuing to develop my skills.
            </p>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <div className="m-6 px-6 mx-auto max-w-6xl min-h-96 font-serif">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Card
            titleText="Learn to code by watching others"
            contentsText="My hobbies are listening to music, especially hip hop, watching TV shows, studying new languages, and playing sports. I love technology, mobile phones, computers, and business."
          />
          <Card
            titleText="Passionate by Code"
            contentsText="I've had experience in the professional world since high school. In 2019-2020, I did my internship at Camtel Cameroon Telecommunication."
          />
          <Card
            titleText="Everytime Code"
            contentsText="I went to a training school and got a BTS in network and telecommunication in 2023. I also have experience in audiovisual and security systems."
          />
        </div>
      </div>

      {/* Skills Section */}
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
            <img src="https://t4.ftcdn.net/jpg/02/66/07/83/360_F_266078398_vXlKFR2KDOj8bpsly1lduNbvaDrZGMY2.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 lg:py-6">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left font-serif" id="skills">
              My Skills
            </h1>
            <div className="w-full">
              {SkillBars(skills)}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left font-serif" id="blog">
              My Blog
            </h1>
            <p className="pb-3 font-serif">
              Welcome to my blog!
            </p>
            <p className="font-serif">
              I'm passionate about web design and technology. After earning my BTS in Networks and Telecommunications in 2023, I decided to dive into web development.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-wrap justify-between items-start">
          <div className="footer-links space-y-4">
            <ul className="list-none">
              <li><a href="/about" className="hover:text-orange-500">À propos</a></li>
              <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-orange-500">Politique de confidentialité</a></li>
              <li><a href="/terms" className="hover:text-orange-500">Conditions d'utilisation</a></li>
            </ul>
          </div>
          <div className="footer-socials space-x-6">
            <a href="" className="text-white text-xl hover:text-orange-500">Facebook</a>
            <a href="" className="text-white text-xl hover:text-orange-500">Twitter</a>
            <a href="" className="text-white text-xl hover:text-orange-500">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
