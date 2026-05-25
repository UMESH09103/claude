import React, { useState, useEffect, useRef } from 'react';
import Darshan from './assets/Darshan.jpeg';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Download } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-950/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Darshan
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Animated Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 md:w-56 md:h-56">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-75 animate-pulse"></div>
              <img
                src={Darshan}
                alt="Darshan"
                className="relative w-full h-full rounded-full object-cover border-4 border-slate-950 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Darshan Thatsingar
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Electronics & Telecommunication Engineer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionate about designing innovative solutions in electrical engineering, manufacturing systems, and emerging technologies. Currently interning at Spark Minda.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://linkedin.com/in/darshan-thatsingar-810a88258" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-lg hover:bg-blue-500/20 hover:border-blue-400 border border-white/10 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-lg hover:bg-gray-500/20 hover:border-gray-400 border border-white/10 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="mailto:darshan.thatsingar@mitaoe.ac.in"
              className="p-3 bg-white/5 rounded-lg hover:bg-red-500/20 hover:border-red-400 border border-white/10 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Electronics and Telecommunication Engineering student at MIT Academy of Engineering, Pune, with a strong focus on manufacturing systems, electrical design, and emerging technologies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With hands-on experience in production planning, SAP ERP systems, and industrial automation, I'm committed to solving real-world engineering challenges. Currently interning at Spark Minda, I'm gaining valuable insights into automotive electrical systems.
              </p>
              <div className="flex gap-4 flex-wrap pt-4">
                {['Electrical Engineering', 'Manufacturing', 'SAP ERP', 'Automation'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">4+</div>
                <p className="text-gray-400 mt-2">Internships</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">15+</div>
                <p className="text-gray-400 mt-2">Skills</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">3+</div>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-404 to-blue-600 bg-clip-text text-transparent">6.52</div>
                <p className="text-gray-400 mt-2">CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'Programming', skills: ['C++', 'Python', 'MATLAB'] },
              { category: 'ERP & Industrial', skills: ['SAP ERP', 'BOM', 'PLC/SCADA'] },
              { category: 'Design & CAD', skills: ['CAD', 'Circuit Design', 'PCB Layout'] },
              { category: 'Domain Expertise', skills: ['Electric Vehicles', 'Robotics', 'Drones'] },
            ].map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-4">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-8">
            {[
              {
                company: 'Spark Minda',
                position: 'Trainee - PPC Department',
                duration: 'Mar 2026 - Jun 2026',
                description: 'Production planning, control, SAP ERP, BOM',
                icon: '🏭',
              },
              {
                company: 'Spark Gen Enterprises',
                position: 'Assistant Trainee',
                duration: 'Jan 2026 - Mar 2026',
                description: 'PLC panels, SCADA, Industrial Automation',
                icon: '⚙️',
              },
              {
                company: 'Gustovalley Innovations',
                position: 'Core Engineering Intern',
                duration: 'Jul 2024 - Aug 2024',
                description: 'Hardware design, prototyping, project development',
                icon: '🔧',
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400">{exp.position}</h3>
                    <p className="text-gray-400 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Energy Harvesting System',
                description: 'Low power device system for sustainable energy collection',
                tags: ['Hardware', 'Electronics', 'IoT'],
                icon: '⚡',
              },
              {
                title: 'Zero Energy Building',
                description: 'Innovative building design with energy efficiency optimization',
                tags: ['Design', 'Sustainability', 'Engineering'],
                icon: '🏢',
              },
              {
                title: 'RF Power Monitoring',
                description: 'Remote monitoring system for radio transmitter power levels',
                tags: ['RF Engineering', 'Monitoring', 'System Design'],
                icon: '📡',
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-blue-500/0 to-purple-600/0 group-hover:from-cyan-400/10 group-hover:via-blue-500/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <a href="mailto:darshan.thatsingar@mitaoe.ac.in" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    darshan.thatsingar@mitaoe.ac.in
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <a href="tel:+918767232070" className="text-gray-300 hover:text-cyan-400 transition-colors">
                    +91 8767232070
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-gray-300">Navapur, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/darshan-thatsingar-810a88258" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300">
              <Linkedin size={28} className="text-blue-400" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-gray-500/20 hover:border-gray-400 transition-all duration-300">
              <Github size={28} className="text-gray-400" />
            </a>
            <a href="mailto:darshan.thatsingar@mitaoe.ac.in"
              className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-red-500/20 hover:border-red-400 transition-all duration-300">
              <Mail size={28} className="text-red-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© 2026 Darshan Thatsingar. All rights reserved. Built with React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
