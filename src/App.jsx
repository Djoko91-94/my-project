import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myimage from './assets/myimage.jpg'

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">DjokoCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#Blog" className="mr-5 hover:text-blue-400 duration-300">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section classname="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium,mb-4">
              HI!
              <br />
              I'm DjokoCode
              <br />
              Web developer
            </h1>
            <p className="mb-8 leading-relaxed">
              I'm a passionate, creative and solutions-oriented web developer apprentice who tries to bring technical expertise and experience to ambitious digital projects,I'm proficient in various technologies, including HTML, CSS, JavaScript, PHP and frameworks such as React, Vue.js, Node.js,python.
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 lg:max-lg w-5/6">
            <img src={myimage} alt="" />
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
        </div>
        <div className="text-center mb-20">
          <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900" id="about">
            About Me
          </h1>
          <p className="pb-10">
            hi my name is Djoko tayem christy brayanne i'm from cameroon studying in japan, my dream is to become a computer engineer and i'll do everything to be one, i'm a hard worker and always motivated to learn a lot.
          </p>
          <p>
            I'm particularly interested in [specific: IP addressing and routing,software development, cybersecurity, database management, etc.], and I'm always ready to learn and take on new challenges. I have a good command of programming languages such as [examples: Python, JavaScript, HTML/CSS] and tools such as [examples: Git, Visual Studio Code].

            I'm self-motivated, autonomous, and I'm convinced that I can bring added value to a team while continuing to develop my skills.
          </p>
        </div>
      </section>
      {/*カードのdiv タグ*/}
      <div className="m-6 px-6 mx-auto max-w-6xl min-h-96">
        <div className="flex gap-2 max-h-full">
          <div className="md:w-1/3 bg-gray-200 rounded-lg p-8 min-h-full flex-wrap">
            <div className="flex items-center my-2">
              <div className="bg-green-500 text-white rounded-full"></div>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 1H1V7H3.38197L4.88196 4L7.11803 4L10 9.76393L11.382 7H15V1Z" fill="#000000"
                />
                <path d="M15 9H12.618L11.118 12L8.88197 12L6 6.23607L4.61803 9H1V15H15V9Z" fill="#000000"
                />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg font-medium ml-2 my-5">My hobby</h2>
            <p>
              my hobbies are listening to music, especially hiphop, watching TV shows and series, studying new languages, playing sports, watching educational videos on social networks, I love technology, for example mobile phones and computers, I love business, and in the future I'd like to be a  big businessman and provide for my family.
            </p>
            <a href="#" className="flex mt-3 text-green-500 items-center">
              MORE
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="md:w-1/3 bg-gray-200 rounded-lg p-8 min-h-full">
            <div className="flex items-center my-2">
              <div className="bg-green-500 text-white rounded-full"></div>
              <svg width="24px" height="24px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1H1V7H3.38197L4.88196 4L7.11803 4L10 9.76393L11.382 7H15V1Z" fill="#000000" />
                <path d="M15 9H12.618L11.118 12L8.88197 12L6 6.23607L4.61803 9H1V15H15V9Z" fill="#000000" />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg font-medium ml-2 my-5">
              professional experience
            </h2>
            <p>
              I've had experience in the professional world since the first year of high school,in 2019-2020 I did my internship at Camtel Cameroon Telecommunication, where
              In 2023 I carried out a project on the security of a wifi network at ISYD with a captive portal, but the implementation malfunctioned.
            </p>
            <a href="#" className="flex mt-3 text-green-500 items-center">
              MORE
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="md:w-1/3 bg-gray-200 rounded-lg p-8 min-h-full">
            <div className="flex items-center my-2">
              <div className="bg-green-500 text-white rounded-full"></div>
              <svg width="24px"
                height="24px"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1H1V7H3.38197L4.88196 4L7.11803 4L10 9.76393L11.382 7H15V1Z" fill="#000000"
                />
                <path d="M15 9H12.618L11.118 12L8.88197 12L6 6.23607L4.61803 9H1V15H15V9Z" fill="#000000"
                />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg font-medium ml-2 my-5">
              Training
            </h2>
            <p>
              I went to a training school and got a BTS in network and telecommunication in 2023, I also have experience in audio visual and alarm and security, during my school career I had to learn that apart from network and telecommunication, I used to help an uncle with the preventive and corrective maintenance of air-conditioning units.
            </p>
            <a href="#" className="flex mt-3 text-green-500 items-center my-7">
              MORE
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-1/3 p-4"></div>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* left side */}
          <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex j">
            <img src="https://t4.ftcdn.net/jpg/02/66/07/83/360_F_266078398_vXlKFR2KDOj8bpsly1lduNbvaDrZGMY2.jpg"
              alt=""
              className="rounded"
            />
          </div>
          {/*right side*/}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
              My Skills
            </h1>
            <div className="w-full">
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "40%" }}
                >
                  40%
                </div>
              </div>
              <h2>CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "45%" }}
                >
                  45%
                </div>
              </div>
              <h2>Javascript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "30%" }}
                >
                  30%
                </div>
              </div>
              <h2>Python</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "65%" }}
                >
                  65%
                </div>
              </div>
              <h2>Communication</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "80%" }}
                >
                  80%
                </div>
              </div>
              <h2>IP adressing</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
              <h2>French</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "100%" }}
                >
                  100%
                </div>
              </div>
              <h2>English</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "30%" }}
                >
                  30%
                </div>
              </div>
              <h2>Japanese</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "40%" }}
                >
                  40%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;