"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import ProjectCard, {
  ProjectCardProps,
} from "./components/project_card/project_card";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Menu,
  Globe,
  X,
} from "lucide-react";

const GrainOverlay = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-50 pointer-events-none opacity-[0.15]">
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "contrast(120%) brightness(95%)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};

type BlobPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

const GradientBlob = ({
  position = "top-right",
}: {
  position?: BlobPosition;
}) => {
  const positionClasses: Record<BlobPosition, string> = {
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} w-[500px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none`}
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)",
      }}
    />
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((position / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences: Array<ProjectCardProps> = [
    {
      id: "01",
      title: "UC Berkeley College of Engineering",
      subtitle: "Machine Learning Engineer & Nanotech Researcher / Intern",
      period: "June 2024 - Present",
      description:
        "Conducted research on an exoskeleton project. Co-developed a machine learning algorithm using EEG brainwave data to detect user intent and improve motion control. Also built real-time signal classification models using Python, scikit-learn, TensorFlow, and MNE-Python, supporting neurotech applications for mobility and accessibility.",
      tags: ["Python", "TensorFlow", "scikit-learn", "ML/AI"],
      imageSrc: "/shutterstock_149303390.jpg",
      links: {
        live: "https://github.com/mohsin-khawaja/UC-Berkeley-exoskeleton-brainwave-algorithm",
      },
      metrics: {
        "classification accuracy": "95%",
        "response time": "<100ms"
      },
    },
    {
      id: "02",
      title: "InterestingSoup",
      subtitle: "Software Engineering Intern",
      period: "June 2021 - January 2022",
      description:
        "Engineered and deployed scalable RESTful APIs using Python and Flask, reducing response time by 30% and supporting a 20% increase in concurrent users and implemented full-stack development. Partnered with cross-functional teams to build and integrate a real-time analytics dashboard using React and Chart.js, enhancing data visibility and enabling faster decision-making.",
      tags: ["Browser Agents", "Full-Stack Development", "React", "Python", "Flask"],
      imageSrc: "/interestingsoup.png",
      links: {
        // github: "#",
        live: "https://interestingsoup.com/",
      },
      metrics: {
        // reliability: "+50%",
        // latency: "-27%",
        // "cognitive load": "-40%",
      },
    },
    {
      id: "03",
      title: "Muslim Tech Collaborative @ UC San Diego",
      subtitle: "Founder & VP",
      period: "May 2023 - June 2024",
      description:
        "Founded and led a student organization focused on empowering Muslim students in tech. Secured funding for events and managed logistics across workshops, speaker sessions, and networking socials. Organized hands-on workshops covering web development and machine learning to help students build practical skills and portfolios. Created inclusive social events to foster community and connect members with industry professionals.",
      tags: ["Leadership", "Networking", "Finance", "Computer Science", "Entrepreneurship"],
      imageSrc: "/mtc-ucsd.png",
      links: {
        live: "https://www.muslimtech.org/",
      },
      metrics: {
        "members reached": "100+",
        "events organized": "15+"
      }
    },
  ];

  const projects: Array<ProjectCardProps> = [
    {
    id: "01",
    title: "NeuroFocus",
    subtitle: "Using EEG and AI to Classify Human Attention States",
    description:
        "NeuroFocus is a machine learning project that classifies cognitive attention states—Focused, Distracted, and Overstimulated—by analyzing EEG data from the DEAP dataset. I built a complete ML pipeline that extracts key features from EEG frequency bands (Theta, Alpha, Beta, Gamma) and applies models like SVM, LSTM, and CNN to achieve up to 90% classification accuracy. The system is designed with real-world applications in mind, such as mental focus tracking, neurofeedback, and brain-computer interface (BCI) systems. This project highlights the intersection of neuroscience and AI, showing how neural signal processing can be used for accurate, real-time cognitive state monitoring.",
    tags: ["EEG", "ML/AI", "Python", "TensorFlow", "scikit-learn"],
    imageSrc: "/neurofocus.jpg",
    links: {
        github: "https://github.com/mohsin-khawaja/NeuroFocus",
    },
    metrics: {
        "classification accuracy": "90%",
    },
      },
    {
      id: "02",
      title: "RL-LSTM Trading Agent",
      subtitle: "Real-time Financial Trading with Deep Learning & Reinforcement Learning",
      description:
        "A real-time financial trading system that combines deep learning with reinforcement learning to predict market movements and execute trades. I designed and implemented a hybrid architecture using a Bidirectional LSTM for price forecasting and a Deep Q-Network for action optimization. The system achieved 94.2% prediction accuracy, a 2.52 Sharpe ratio, and a 79.4% win rate across 26+ experiments. Built with PyTorch and deployed on Vercel, the project features a live dashboard for visualizing trading decisions, performance, and risk metrics. Full implementation is open-source and integrates custom risk management logic, real-time data pipelines, and an interactive web demo.",
             tags: ["PyTorch", "LSTM", "Deep Q-Network", "RL", "Trading", "Blockchain", "Crypto", "ML/AI"],
             imageSrc: "/trading-dashboard.png",
      links: {
        live: "https://rl-lstm-ai-trading-agent-3kuk24u4s-mohsin-khawajas-projects.vercel.app/",
        report: "/rl-lstm-trading-report.pdf",
      },
      metrics: {
        "prediction accuracy": "94.2%",
        "Sharpe ratio": "2.52",
        "win rate": "79.4%"
      },
    },
    {
      id: "03",
      title: "LLM Sensitivity Evaluation in Political Contexts",
      subtitle: "Analyzing Large Language Model Political Bias & Response Consistency",
      description:
        "This project explores how large language models (LLMs) respond to politically sensitive prompts, leveraging techniques in Natural Language Processing (NLP) and Automatic Prompt Evaluation (APE). The pipeline systematically probes LLMs with ideologically varied inputs and quantifies their response consistency and sensitivity. It offers a practical framework for analyzing model alignment, political bias, and linguistic stability—critical challenges in modern NLP. The insights contribute to building more robust, transparent, and socially-aware AI systems.",
      tags: ["NLP", "LLM", "Political Analysis", "Bias Detection", "Python", "ML/AI", "APE"],
      imageSrc: "/llm-evaluation-diagram.png",
      links: {
        github: "https://github.com/mohsin-khawaja/LLM-Sensitivity-Eval-to-Politics",
      },
      metrics: {
        "models analyzed": "5+",
        "prompt variations": "100+",
      },
    },
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React/Next.js", level: "3-4 years" },
        { name: "TypeScript", level: "3 years" },
        { name: "Tailwind CSS", level: "3 years" },
        { name: "Tauri", level: "< 1 year" },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: "4 years" },
        { name: "Python", level: "5 years" },
        { name: "PostgreSQL", level: "2 years" },
        { name: "SQL", level: "2 years" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Docker", level: "1 year" },
        { name: "AWS", level: "1 year" },
        { name: "CI/CD", level: "4 years" },
        { name: "Git", level: "4+ years" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-gray-100 overflow-hidden">
      <div
        className="fixed inset-0 z-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
          backgroundSize: "100% 100%",
        }}
      />

      <GrainOverlay />

      <Navbar />

      <div className="relative z-10 min-h-screen backdrop-contrast-110 backdrop-brightness-95">

        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto px-4 py-32 z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mono text-sm text-gray-500 mb-4 tracking-widest"
            >
              PUSHING THE BOUNDARIES OF DIGITAL EXPERIENCES
            </motion.div>
            <div className="flex items-center space-x-6 mb-8">
              <div className="bg-zinc-900/60 rounded-full p-1 shadow-lg">
                <img
                  src="/mohsin-new.jpg"
                  alt="Mohsin Khawaja"
                  className="w-48 h-48 rounded-full object-cover object-[50%_55%] border-2 border-violet-400"
                />
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl md:text-7xl font-extralight tracking-tight leading-tight"
              >
                Hey, I'm Mohsin
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-8 font-light"
            >
              I love to build impactful full-stack projects with modern
              technologies and high-performance.
            </motion.p>
          </motion.div>
        </section>

        <section id="experience" className="relative min-h-screen py-32">
          <div className="max-w-7xl mx-auto px-4 z-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 pb-4"
            >
              <div className="mono text-sm text-gray-500 mb-4 tracking-widest">
                PROFESSIONAL EXPERIENCE
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-16 tracking-tight">
                Where I've Worked
              </h2>
            </motion.div>

            <div className="space-y-32 md:ml-24">
              {experiences.map((experience) => (
                <ProjectCard key={experience.id} {...experience} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="relative min-h-screen py-32">
          <div className="max-w-7xl mx-auto px-4 z-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 pb-4"
            >
              <div className="mono text-sm text-gray-500 mb-4 tracking-widest">
                FEATURED PROJECTS
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-16 tracking-tight">
                What I've Built
              </h2>
            </motion.div>

            <div className="space-y-32 md:ml-24">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative min-h-screen py-32">
          <GradientBlob position="bottom-right" />
          <div className="max-w-7xl mx-auto px-4 z-20 relative">
            <div className="mono text-sm text-gray-500 mb-4 tracking-widest">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mb-12">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-violet-400" size={24} />
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <a
                        href="mailto:mohsinkhawaja10@gmail.com"
                        className="text-lg hover:text-slate-400 transition-colors"
                      >
                          mohsinkhawaja10@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="text-violet-400" size={24} />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="text-lg">San Francisco Bay Area</div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-6">
                  <a
                    href="https://github.com/mohsin-khawaja"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mohsin-khawaja"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-md rounded-lg p-8 border border-gray-800/30">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-800/50 rounded-lg border border-gray-700/30 px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-800/50 rounded-lg border border-gray-700/30 px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-gray-800/50 rounded-lg border border-gray-700/30 px-4 py-3 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="Your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-violet-400 hover:bg-violet-600 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative min-h-screen py-32">
          <GradientBlob position="top-right" />
          <div className="max-w-7xl mx-auto px-4 z-20 relative">
            <div className="mono text-sm text-gray-500 mb-4 tracking-widest">
              A BIT ABOUT ME
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight mb-16 tracking-tight">
              WHO I AM
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-gray-400 text-lg">
                I grew up in the San Francisco Bay Area. I completed my undergrad at UC San Diego in Cognitive Science (Machine Learning) and Computer Science. I love building and scaling AI projects.
                </p>
                <p className="text-gray-400 text-lg">
                I am a builder. I create software, engage in entrepreneurial ventures, lead communities, and challenge myself through fitness. Whether it's coding or CrossFit, I appreciate the struggle and tend to fall in love with the process.
                </p>
                <p className="text-gray-400 text-lg">
                Apart from work, I enjoy staying active through soccer, tennis, biking, and running. I'm also passionate about traveling to new places and winding down with a good book whenever I can.
                   (check out my{" "}
                  <a
                    href="https://www.strava.com/athletes/159204247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center group text-violet-300 hover:text-white transition-colors relative px-1"
                  >
                    <span className="relative">
                      Strava
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-violet-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                    </span>
                  </a>{" "}
                  if you're curious)!
                </p>
                <div className="flex space-x-6 pt-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-violet-400 hover:bg-violet-600 rounded-lg transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

              {/* <div className="space-y-12">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="space-y-4">
                    <h3 className="text-xl font-light tracking-tight">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-4">
                      {skillGroup.items.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-gray-500">{skill.level}</span>
                          </div>
                          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-violet-400 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </section>

        <section id="photos" className="relative min-h-screen py-32">
          <GradientBlob position="bottom-left" />
          <div className="max-w-7xl mx-auto px-4 z-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 pb-4"
            >
              <div className="mono text-sm text-gray-500 mb-4 tracking-widest">
                LIFE IN PICTURES
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-16 tracking-tight">
                PHOTO GALLERY
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* San Francisco */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-md border border-gray-800/30 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/IMG_1985.jpg"
                  alt="Mountain Adventure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-medium"></div>
                </div>
              </motion.div>

              {/* Family */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-md border border-gray-800/30 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/IMG_7642.JPG"
                  alt="Friends & Sunset"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-medium"></div>
                </div>
              </motion.div>

              {/* UC San Diego */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-md border border-gray-800/30 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/IMG_27602.JPG"
                  alt="Mosque Visit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-medium"></div>
                </div>
              </motion.div>

              {/* Friends */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-md border border-gray-800/30 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/IMG_5858.jpeg"
                  alt="Paris Adventures"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-medium"></div>
                </div>
              </motion.div>

              {/* Nature & Hiking */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-md border border-gray-800/30 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/IMG_4921.jpeg"
                  alt="Friends & Culture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-medium"></div>
                </div>
              </motion.div>

              {/* Travel */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-md border border-gray-800/30 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/JapanIMG.jpg"
                  alt="Japan Adventures"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-medium"></div>
                </div>
              </motion.div>

              {/* Tech & Projects */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-md border border-gray-800/30 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/IMG_0822 2.jpeg"
                  alt="Tech & Projects"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-medium"></div>
                </div>
              </motion.div>

              {/* Food & Culture */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-md border border-gray-800/30 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/IMG_4882.jpg"
                  alt="Formal Events"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-medium"></div>
                </div>
              </motion.div>

              {/* Sports & Activities */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden bg-gray-800/30 backdrop-blur-md border border-gray-800/30 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/IMG_4943.jpg"
                  alt="Group Celebrations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="text-white text-sm font-medium"></div>
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-lg text-center mt-12 max-w-2xl mx-auto"
            >
             
            </motion.p>
          </div>
        </section>

        <footer className="border-t border-gray-800/20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Mohsin Khawaja. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
