import React from "react";

function Footer() {
  return (
    <div>
      {" "}
      <footer class="text-gray-600 body-font" id="footer">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Prankur Pandey</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
            <a
              class="mr-5 hover:text-gray-900"
              href="https://facebook.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296499_fb_facebook_facebook%20logo_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              class="mr-5 hover:text-gray-900"
              href="https://linkedin.com/in/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296501_linkedin_network_linkedin%20logo_icon.svg"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>{" "}
            <a
              class="mr-5 hover:text-gray-900"
              href="https://twitter.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296516_tweet_twitter_twitter%20logo_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>{" "}
            <a class="mr-5 hover:text-gray-900" href="https://wa.me/7580909961">
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296520_bubble_chat_mobile_whatsapp_whatsapp%20logo_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              class="mr-5 hover:text-gray-900"
              href="https://youtube.com/@prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296521_play_video_vlog_youtube_youtube%20logo_icon.svg"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              class="mr-5 hover:text-gray-900"
              href="https://instagram.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296765_camera_instagram_instagram%20logo_icon.svg"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              class="mr-5 hover:text-gray-900"
              href="https://www.upwork.com/freelancers/~014495ec1bab529596"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/6092b7514135708162a4be92_Favicon%20256.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              class="mr-5 hover:text-gray-900"
              href="https://github.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/211904_social_github_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
