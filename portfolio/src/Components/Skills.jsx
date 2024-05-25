import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";

function Skills() {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <button class="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            SKILLS
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
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-html-144.png"
                alt="html"
              />
            </a>
            <a class="mr-5 hover:text-gray-900">
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-css-144.png"
                alt="html"
              />
            </a>
            <a class="mr-5 hover:text-gray-900">
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-javascript-144.png"
                alt="html"
              />
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-typescript-144.png"
                alt="html"
              />
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-nextjs-144.png"
                alt="html"
              />
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-mongodb-144.png"
                alt="html"
              />
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-python-144.png"
                alt="html"
              />
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-aws-144.png"
                alt="html"
              />
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-android-144.png"
                alt="html"
              />
            </a>
            <a class="mr-5 hover:text-gray-900">
              {" "}
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/icons8-react-js-144.png"
                alt="html"
              />
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default Skills;
