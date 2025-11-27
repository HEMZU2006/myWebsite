import React, { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import { getBlogs } from '../utils/blogLoader';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function loadBlogs() {
            const data = await getBlogs();
            setBlogs(data);
        }
        loadBlogs();
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
            description: "Designing custom PCBs and writing firmware for microcontrollers.",
            tags: ["C", "KiCad", "ESP32", "Arduino", "RTOS"]
        },
        {
            title: "AI & Robotics",
            icon: "🤖",
            description: "Training intelligent agents and controlling autonomous robots.",
            tags: ["PyTorch", "ROS", "Computer Vision", "RL"]
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

    return (
        <>
            <header className="hero">
                <div className="container">
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Hemant</span>.
                    </h1>
                    <p className="hero-subtitle">
                        I'm a Hardware & Software Engineer. <br />
                        I build <strong>Games</strong>, design <strong>Systems</strong>, and train <strong>AI Agents</strong>.
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
                            <BlogCard
                                key={index}
                                title={blog.title}
                                date={new Date(blog.date).toLocaleDateString()}
                                excerpt={blog.excerpt}
                                link={`/blog/${blog.slug}`}
                            />
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

            <section id="about" className="section about-section">
                <div className="container">
                    <div className="about-content">
                        <h2 className="section-title">About Me</h2>
                        <p>
                            I’m a software engineer with a builder’s mindset. My passion lies in developing autonomous systems, training learning models, and crafting immersive VR experiences.
                        </p>
                        <p>
                            I love creating systems where the virtual and physical worlds collide. From developing VR programs to training reinforcement learning agents, I focus on building complete systems. I enjoy the hands-on nature of hardware design just as much as the logic of software engineering. I'm at my best when I get to combine them.
                        </p>
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

            <section id="contact" className="section contact-section">
                <div className="container">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="contact-content">
                        <p>Interested in collaborating on a project or just want to say hi?</p>
                        <a href="mailto:hemantrs2006@gmail.com" className="btn btn-primary">Send Me an Email</a>
                        <div className="social-links">
                            <a href="mailto:hemantrs2006@gmail.com" className="social-link">Gmail</a>
                            <a href="https://www.linkedin.com/in/hemant-rajesh-kumar" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                            <a href="https://github.com/HEMZU2006" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                            <a href="https://www.instagram.com/wtf__hemzu/?next=%2F" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
