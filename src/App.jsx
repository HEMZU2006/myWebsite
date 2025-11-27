import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let width, height;

    // Mouse interaction
    let mouse = { x: null, y: null };

    // Gravity well parameters
    const GRAVITY_RADIUS = 250;
    const GRAVITY_STRENGTH = 0.8;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Star {
      constructor() {
        this.reset(true);
      }

      reset(randomY = false) {
        this.x = Math.random() * width;
        this.y = randomY ? Math.random() * height : -10;
        this.z = Math.random() * 2 + 0.5; // Depth/Speed factor
        this.size = Math.random() * 1.5 + 0.5;
        this.baseColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`;
        this.activeColor = `rgba(100, 200, 255, ${Math.random() * 0.8 + 0.2})`; // Blue-ish tint when active
        this.isAffected = false;
      }

      update() {
        // Normal movement
        this.y += this.z * 0.5;

        // Spotlight effect (no gravity pull)
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < GRAVITY_RADIUS) {
            this.isAffected = true;
          } else {
            this.isAffected = false;
          }
        } else {
          this.isAffected = false;
        }

        // Reset if out of bounds
        if (this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = this.isAffected ? this.activeColor : this.baseColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (this.isAffected ? 1.5 : 1), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((width * height) / 4000); // Density
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <canvas ref={canvasRef} className="background-canvas" />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
