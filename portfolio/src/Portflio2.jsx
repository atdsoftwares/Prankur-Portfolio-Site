import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
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
import {
  Briefcase,
  Code,
  FileText,
  Home,
  Mail,
  User,
  Laptop,
  Smartphone,
  PenTool,
} from "lucide-react";

const SkillCube = ({ position, skill }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-0.4, -0.25, 0.51]}
      >
        {skill}
        <meshNormalMaterial />
      </Text3D>
    </mesh>
  );
};

const Skills3D = () => {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SkillCube position={[-2, 0, 0]} skill="React" />
      <SkillCube position={[0, 0, 0]} skill="Node.js" />
      <SkillCube position={[2, 0, 0]} skill="Flutter" />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

const ParallaxSection = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
};

// Helper function for the parallax effect
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Portfolio2 = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 font-mono">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-black z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="bg-black text-white p-4 sticky top-0 z-40">
        <nav className="container mx-auto flex justify-between items-center">
          <motion.a
            href="/"
            className="text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            NEOBRUTALIST
          </motion.a>
          <ul className="flex space-x-4">
            {[
              { id: "home", icon: <Home className="w-4 h-4" />, label: "Home" },
              {
                id: "about",
                icon: <User className="w-4 h-4" />,
                label: "About",
              },
              {
                id: "skills",
                icon: <Code className="w-4 h-4" />,
                label: "Skills",
              },
              {
                id: "services",
                icon: <Briefcase className="w-4 h-4" />,
                label: "Services",
              },
              {
                id: "work",
                icon: <Laptop className="w-4 h-4" />,
                label: "Work",
              },
              {
                id: "blog",
                icon: <FileText className="w-4 h-4" />,
                label: "Blog",
              },
            ].map(({ id, icon, label }) => (
              <motion.li
                key={id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 hover:underline ${
                    activeSection === id ? "text-pink-500" : ""
                  }`}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4 space-y-24">
        {/* Hero Section */}
        <section id="home" className="text-center py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-bold mb-4">I'm John Doe</h1>
            <p className="text-2xl mb-8">
              Web Developer | Mobile Developer | Technical Writer
            </p>
            <Button className="bg-black text-white text-xl py-6 px-8 rounded-none hover:bg-white hover:text-black border-4 border-black transition-colors">
              Explore My World
            </Button>
          </motion.div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-pink-300 p-8 border-8 border-black relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl">
              I'm a passionate developer with expertise in both web and mobile
              technologies. My love for coding is matched only by my enthusiasm
              for sharing knowledge through technical writing.
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <h2 className="text-4xl font-bold">My Skills</h2>
          <Skills3D />
          <ParallaxSection baseVelocity={-5}>
            HTML CSS JavaScript React Node.js Express MongoDB Flutter Dart
            Firebase Technical Writing
          </ParallaxSection>
        </section>

        {/* Services Section */}
        <section id="services" className="space-y-8">
          <h2 className="text-4xl font-bold">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Crafting responsive and dynamic websites",
                icon: <Laptop className="w-8 h-8" />,
              },
              {
                title: "Mobile Development",
                description: "Building cross-platform mobile applications",
                icon: <Smartphone className="w-8 h-8" />,
              },
              {
                title: "Technical Writing",
                description:
                  "Creating clear and concise technical documentation",
                icon: <PenTool className="w-8 h-8" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="border-4 border-black group hover:bg-black hover:text-white transition-colors">
                  <CardHeader>
                    <CardTitle className="group-hover:text-white flex items-center space-x-2">
                      {service.icon}
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="group-hover:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="space-y-8">
          <h2 className="text-4xl font-bold">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-4 border-black bg-blue-300 overflow-hidden">
                <CardHeader>
                  <CardTitle>Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Web Development"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-4 border-black bg-green-300 overflow-hidden">
                <CardHeader>
                  <CardTitle>Mobile Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Mobile Development"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="space-y-8">
          <h2 className="text-4xl font-bold">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The Future of Web Development", date: "May 15, 2023" },
              {
                title: "Mobile App Development Trends",
                date: "April 22, 2023",
              },
              {
                title: "Effective Technical Writing Tips",
                date: "March 10, 2023",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="border-4 border-black bg-purple-300">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section
          id="contact"
          className="bg-yellow-300 p-8 border-8 border-black"
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
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio2;
