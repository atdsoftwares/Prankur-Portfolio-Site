import React from "react";
import { TypeAnimation } from "react-type-animation";
function About() {
  return (
    <div>
      <section class="text-gray-600 body-font" id="about">
        <div class="container px-5 py-24  mx-auto">
          <button class="inline-flex items-center bg-yellow-500 mb-16 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            ABOUT
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">
              {" "}
              I am{" "}
            </h3>
            <h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", // Types 'One'
                  1000, // Waits 1s
                  "Front End Developer", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Technical Writer", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s

                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em", display: "inline-block" }}
              />
            </h3>
            <button class="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              <a href="https://drive.google.com/file/d/1qimMeJ8tqNOZ3rBPsRTdWGz0eWw373jk/view?usp=sharing">
                RESUME
              </a>
            </button>
          </div>

          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/IMG_20240507_123930.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
