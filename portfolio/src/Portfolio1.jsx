import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Code, FileText, Home, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import { IconCloudDemo } from "./IconCloudDemo";
import IconCloud from "./components/magicui/icon-cloud";
import { FlickeringGridDemo } from "./FlickeringGridDemo";

const Portfolio1 = () => {
  const [posts, setPosts] = useState([]);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchDevToPosts = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=prankurpandeyy"
        );
        const posts = await response.json();
        setPosts(posts);
        console.log(posts);
      } catch (error) {
        console.error("Error fetching Dev.to posts:", error);
      }
    };
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/orgs/atdsoftwares/repos"
        );
        const repos = await response.json();
        setRepos(repos);
        console.log(repos);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchGithubRepos();

    fetchDevToPosts();
  }, []);

  return (
    <div className="min-h-screen bg-yellow-100 font-mono">
      {/* Header */}
      <header className="bg-black text-white p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            Prankur Pandey
          </a>
          <ul className="flex space-x-4">
            {[
              {
                href: "#home",
                icon: <Home className="w-4 h-4" />,
                label: "Home",
              },
              {
                href: "#about",
                icon: <User className="w-4 h-4" />,
                label: "About",
              },
              {
                href: "#skills",
                icon: <User className="w-4 h-4" />,
                label: "Skill",
              },
              {
                href: "#services",
                icon: <Code className="w-4 h-4" />,
                label: "Services",
              },
              {
                href: "#work",
                icon: <Briefcase className="w-4 h-4" />,
                label: "Work",
              },
              {
                href: "#blog",
                icon: <FileText className="w-4 h-4" />,
                label: "Blog",
              },
            ].map(({ href, icon, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center space-x-1 hover:underline"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4 space-y-12">
        {/* Hero Section */}

        <section id="home" className="text-center py-20">
          <h1 className="text-6xl font-bold mb-4">Prankur Pandey</h1>
          <p className="text-2xl mb-8">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile App Developer",
                1000,
                "Technical Writer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pprankur@gmail.com&su=Want+to+work+with+you&body=Hello+Prankur,+I+need+your+help+to+do+some+software+development+work.+Please+share+your+availability."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black text-white text-xl py-6 px-8 rounded-none hover:bg-white hover:text-black border-4 border-black transition-colors">
              Get In Touch
            </Button>
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="bg-pink-300 p-8 border-8 border-black">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl">
            I'm Prankur Pandey, a passionate developer specializing in
            full-stack web and mobile application development. With a strong
            command of the MERN stack (MongoDB, Express.js, React, Node.js) and
            React Native for mobile apps, I focus on building responsive and
            scalable solutions. I have extensive experience working with DevOps
            tools, cloud services like AWS, and CI/CD pipelines to ensure smooth
            deployment and efficient development processes. My projects often
            incorporate modern libraries and tools such as Chakra UI, Appwrite,
            and Three.js for 3D visualizations. I love sharing knowledge through
            technical writing, and you can find my articles on Dev.to, where I
            cover topics ranging from web development to DevOps best practices.
            When I’m not coding or writing, I explore new technologies, looking
            for innovative ways to create value through software.
          </p>
        </section>
        {/* SKILLS */}
        <section
          id="skills"
          className="bg-yellow-300 p-8 border-8 border-black"
        >
          <h2 className="text-4xl font-bold mb-4">Skills </h2>
          <div className="flex justify-center items-center space-x-4 bg-yellow-300">
            <IconCloudDemo />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="space-y-8">
          <h2 className="text-4xl font-bold">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web App Development",
                description: "Modern web application development",
              },
              {
                title: "Technical Writing and Documentation",
                description:
                  "Effective technical documentation for your projects",
              },
              {
                title: "Mobile Apps",
                description: "Cross-platform mobile applications",
              },
            ].map((service, index) => (
              <Card key={index} className="border-4 border-black">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="space-y-8">
          <h2 className="text-4xl font-bold">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repos.map((project, index) => (
              <Card key={index} className="border-4 border-black bg-blue-300">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
                    <a href={project.html_url} target="_blank">
                      {" "}
                      Code
                    </a>
                  </Button>
                </CardFooter>
                <CardFooter>
                  <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
                    <a href={project.homepage} target="_blank">
                      {" "}
                      Demo{" "}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="space-y-8">
          <h2 className="text-4xl font-bold">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="border-4 border-black bg-green-300">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.published_at}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
                    <a href={post.canonical_url} target="_blank">
                      Read More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section
          id="contact"
          className="bg-purple-300 p-8 border-8 border-black"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="border-2 border-black"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="border-2 border-black"
            />
            <Textarea
              placeholder="Your Message"
              className="border-2 border-black"
            />
            <Button
              type="submit"
              className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors"
            >
              Send Message
            </Button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-4 mt-12">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Prankur Pandey</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
            <a
              className="mr-5 hover:text-gray-900"
              href="https://facebook.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296499_fb_facebook_facebook%20logo_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="https://linkedin.com/in/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296501_linkedin_network_linkedin%20logo_icon.svg"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>{" "}
            <a
              className="mr-5 hover:text-gray-900"
              href="https://twitter.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296516_tweet_twitter_twitter%20logo_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>{" "}
            <a
              className="mr-5 hover:text-gray-900"
              href="https://wa.me/7580909961"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296520_bubble_chat_mobile_whatsapp_whatsapp%20logo_icon.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="https://youtube.com/@prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296521_play_video_vlog_youtube_youtube%20logo_icon.svg"
                alt="facebook"
                classNameName="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="https://instagram.com/prankurpandeyy"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/5296765_camera_instagram_instagram%20logo_icon.svg"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="https://www.upwork.com/freelancers/~014495ec1bab529596"
            >
              <img
                src="https://raw.githubusercontent.com/prankurpandeyy/github-imagehosting/main/6092b7514135708162a4be92_Favicon%20256.png"
                alt="facebook"
                className="h-10 w-10"
              />
            </a>
            <a
              className="mr-5 hover:text-gray-900"
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
};

export default Portfolio1;
