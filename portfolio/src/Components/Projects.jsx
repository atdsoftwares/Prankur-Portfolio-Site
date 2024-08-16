import React, { useEffect, useState } from "react";
import axios from "axios";
function Projects() {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  const fetchProjects = async () => {
    try {
      const data = axios
        .get("https://api.github.com/orgs/atdsoftwares/repos")
        .then((data) => setProjects(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font" id="projects">
        <div class="container px-5 py-24 mx-auto">
          <button class="inline-flex items-center bg-yellow-500  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0">
            PROJECTS
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
          <div class="flex flex-col text-center w-full mb-20"></div>
          <div class="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div class="p-4 lg:w-1/2">
                <div
                  keys={project.id}
                  class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
                >
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://avatars.githubusercontent.com/u/105973148?v=4"
                  />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      {project.name}
                    </h2>
                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                    <p class="mb-4">{project.description}</p>
                    <div className="flex justify-between items-center ">
                      <span class="inline-flex">
                        Live :
                        <a href={project.homepage}>
                          <img
                            className="w-6 h-6"
                            src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/link-svgrepo-com.svg"
                            alt="link_url"
                          />{" "}
                        </a>
                      </span>{" "}
                      <span class="inline-flex">
                        Github :
                        <a href={project.html_url}>
                          <img
                            className="w-6 h-6"
                            src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/github-142-svgrepo-com.svg"
                            alt="github_url"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
