import React, { useEffect, useRef } from 'react';
import './App.css';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
    {
      title: "Software & Game Dev",
      icon: "💻",
      description: "Building immersive 3D games and robust software systems.",
      tags: ["C++", "C#", "Python", "Unity", "Unreal"]
    },
    {
      title: "Embedded Systems",
      icon: "🔌",
      description: "Designing and fabricating PCBs and programming microcontrollers.",
      tags: ["Arduino", "ESP32", "PCB Design", "Firmware"]
    },
    {
      title: "CAD & Fabrication",
      icon: "⚙️",
      description: "Designing components in SolidWorks and bringing them to life with 3D printing.",
      tags: ["SolidWorks", "3D Printing", "Prototyping"]
    },
    {
      title: "AI & Learning Agents",
      icon: "🧠",
      description: "Simulating behavior through reinforcement learning and autonomous systems.",
      tags: ["Reinforcement Learning", "TensorFlow", "PyTorch", "Agents"]
    },
    {
      title: "VR / AR",
      icon: "🥽",
      description: "Developing virtual and augmented reality experiences.",
      tags: ["Oculus", "ARKit", "Spatial Computing"]
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      description: "Implementing vision systems for hardware and software integration.",
      tags: ["OpenCV", "Object Detection", "Tracking"]
    }
  ];

  const projects = [
    {
      title: "BrickSpace",
      description: "A Team based VR game where players must work together to build a structure using bricks. ",
      tags: ["C++", "Unreal", "VR", "Meta Quest", "Team Based"],
      link: "#"
    },
    {
      title: "Robo-Arm",
      description: "A Team based project where a robotic arm must collect and sort objects.",
      tags: ["Python", "OpenCV", "Zed Cameras", "Team Based", "Solidworks", "PCB Design"],
      link: "#"
    },
    {
      title: "Stewart Platform",
      description: "Custom designed Stewart Platform  to Simulate 6 degrees of freedom.",
      tags: ["Solidworks", "PCB Design", "ESP32", "Firmware", "Digital Fabrication", "Solo Project"],
      link: "#"
    },
    {
      title: "Solar Nexus",
      description: "A unity based game where players must navigate a solar system to collect resources.",
      tags: ["C#", "Unity", "Game Dev", "Solo Project"],
      link: "#"
    }
  ];

  const blogs = [
    {
      title: "My Journey into Reinforcement Learning",
      date: "October 24, 2023",
      excerpt: "How I went from simple A* algorithms to training agents that can navigate complex 3D environments.",
      link: "#"
    },
    {
      title: "Designing my first Custom PCB",
      date: "September 15, 2023",
      excerpt: "Lessons learned from fabricating a microcontroller board for my smart home project. Mistakes were made!",
      link: "#"
    },
    {
      title: "The Future of VR Interfaces",
      date: "August 02, 2023",
      excerpt: "Why I believe hand-tracking combined with haptic feedback is the next big leap for immersive experiences.",
      link: "#"
    }
  ];

  return (
    <div className="app">
      <canvas ref={canvasRef} className="background-canvas"></canvas>

      <header className="hero">
        <div className="container">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Heman</span>.
          </h1>
          <p className="hero-subtitle">
            I'm a Hardware & Software Engineer. <br />
            I build <strong>Games</strong>, design <strong>PCBs</strong>, and train <strong>AI Agents</strong>.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">See My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </header>

      <section id="blogs" className="section blogs-section">
        <div className="container">
          <h2 className="section-title">Latest Thoughts</h2>
          <div className="grid blogs-grid">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="grid skills-grid">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Selected Projects</h2>
          <div className="grid projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <p>
              I've always been fascinated by how things work—both inside a computer and out in the real world.
            </p>
            <p>
              I don't just write code; I build systems. Whether it's soldering a custom microcontroller,
              training a reinforcement learning model to fly a drone, or creating an immersive VR game,
              I love bridging the gap between digital software and physical hardware.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>Interested in collaborating on a project or just want to say hi?</p>
            <a href="mailto:hello@example.com" className="btn btn-primary">Send Me an Email</a>
            <div className="social-links">
              {/* Add social icons/links here later */}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Heman. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
