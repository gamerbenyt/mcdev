import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard";
import { MessageSquare, ExternalLink } from "lucide-react";
import { BsDiscord } from "react-icons/bs";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const titles = [
    "Discord Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Javascript Developer"
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  
  useEffect(() => {
    let currentIndex = 0;
    let currentTitleIndex = titleIndex;
    
    const intervalId = setInterval(() => {
      if (currentIndex <= titles[currentTitleIndex].length) {
        setTypedText(titles[currentTitleIndex].slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length);
          currentIndex = 0;
        }, 1000);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [titleIndex]);

  const skills = [
    { name: "Python", percentage: 100 },
    { name: "Javascript", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "Discord.js", percentage: 85 },
    { name: "MongoDB", percentage: 75 },
    { name: "C#", percentage: 5 },
  ];

  const projects = [
    {
      title: "License Management Discord Bot",
      description: "A modern e-commerce platform built with React and Node.js",
      technologies: ["Express.js", "Node.js", "MongoDB", "Discord.js"],
      buyUrl: "https://builtbybit.com/resources/titanauth-product-license-management.53599/",
      image: "https://builtbybit.com/attachments/banner-png.833266/?variant=display",
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Jxnyzk</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            I build exceptional digital experiences that make people's lives easier.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://discordapp.com/users/1211382638963728394/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
              aria-label="Discord Profile"
            >
              <BsDiscord size={24} />
            </a>
            <a
              href="https://discord.gg/jyrjcrGMkw"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
              aria-label="Discord Server"
            >
              <BsDiscord size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@jxnyzkdev"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="glass p-8 rounded-xl">
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 container">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to new opportunities and collaborations.
          </p>
          <a
            href="https://discord.gg/jyrjcrGMkw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <BsDiscord size={19} />
            <span> Contact me on Discord</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container text-center text-muted-foreground">
          <p>© 2024 Jxnyzk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;