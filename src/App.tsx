import { useState } from 'react';
import { motion } from 'motion/react';
import { Particles } from './components/Particles';
import { Code2, Database, Globe, Mail, Github, Linkedin, Server, Smartphone, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import profileImage from './assets/4e3e4d22cd479729dc5154b03355080701dd767b.png';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building responsive and modern web applications using the latest technologies and best practices.',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Creating beautiful, interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Node.js, databases, and RESTful APIs.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'Designing and implementing efficient database structures for optimal data management.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Design',
      description: 'Ensuring seamless user experiences across all devices and screen sizes.',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment with ongoing maintenance and support.',
    },
  ];

  const experiences = [
    {
      year: '2026 - Present',
      title: 'Information Technology',
      company: 'University Studies',
      description: '3rd-year Information Technology focusing on web development, algorithms, and software engineering. Building practical projects while maintaining strong academic performance.',
    },
    {
      year: '2025',
      title: 'Freelance Web Developer',
      company: 'Independent Projects',
      description: 'Developed responsive websites and web applications for small businesses and personal projects. Gained hands-on experience with React, Node.js, and modern web technologies.',
    },
    {
      year: '2023 - 2022',
      title: 'Web Development Intern',
      company: 'Tech Learning Initiative',
      description: 'Completed intensive web development training program, learning frontend and backend fundamentals. Built multiple projects using HTML, CSS, JavaScript, and React.',
    },
    {
      year: '2021 - 2022',
      title: 'Programming Fundamentals Study',
      company: 'Self-Learning Journey',
      description: 'Started programming journey learning Python, JavaScript, and basic web development concepts. Created personal projects and participated in online coding challenges.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden">
      <Particles />
      
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl tracking-tight"
              style={{ color: '#c4a77d' }}
            >
              Portfolio | Mil Kieven Bugasia
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 rounded-full transition-all"
                style={{ backgroundColor: '#c4a77d', color: 'white' }}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              style={{ color: '#c4a77d' }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 rounded-lg transition-colors"
                style={{ backgroundColor: '#c4a77d', color: 'white' }}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src={profileImage}
                alt="Mil Kieven Bugasia"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
              />
              <div 
                className="absolute inset-0 rounded-full border-4"
                style={{ borderColor: '#c4a77d' }}
              ></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-4"
          >
            <div className="inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
              <span className="text-gray-600">Hello, I'm</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-6xl md:text-8xl mb-4 tracking-tight"
            style={{ color: '#c4a77d' }}
          >
            Mil Kieven Bugasia
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-2xl md:text-3xl text-gray-700 mb-8"
          >
            Full Stack Web Developer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button
              className="px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#c4a77d', color: 'white' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full border-2 border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur-sm shadow-lg transition-all"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl mb-4" style={{ color: '#c4a77d' }}>About Me</h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c4a77d' }}></div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate 3rd-year Information Technology student with a love for creating elegant solutions to complex problems. 
                Since starting my programming journey in 2021, I've developed strong skills in both frontend and backend development, 
                specializing in building scalable, user-friendly applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My academic journey has provided me with a solid foundation in algorithms, data structures, and software engineering principles, 
                while my practical experience has allowed me to apply these concepts to real-world projects. I believe in 
                writing clean, maintainable code and staying up-to-date with the latest technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not studying or coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I'm always excited to take on new challenges and 
                collaborate on interesting projects that push the boundaries of what's possible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-4 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl mb-4" style={{ color: '#c4a77d' }}>Services</h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c4a77d' }}></div>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
                >
                  <div
                    className="mb-4 inline-flex p-4 rounded-2xl"
                    style={{ backgroundColor: 'rgba(196, 167, 125, 0.1)' }}
                  >
                    <div style={{ color: '#c4a77d' }}>{service.icon}</div>
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl mb-4" style={{ color: '#c4a77d' }}>Experience</h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c4a77d' }}></div>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
                style={{ backgroundColor: '#c4a77d', opacity: 0.3 }}
              ></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  <div className="flex items-start md:items-center gap-4">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10"
                      style={{ backgroundColor: '#c4a77d' }}
                    ></div>
                    
                    <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'} flex-1`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200"
                      >
                        <div className="mb-2 inline-block px-4 py-1 rounded-full text-sm" style={{ backgroundColor: 'rgba(196, 167, 125, 0.1)', color: '#c4a77d' }}>
                          {exp.year}
                        </div>
                        <h3 className="text-2xl mb-2 text-gray-900">{exp.title}</h3>
                        <p className="mb-3" style={{ color: '#c4a77d' }}>{exp.company}</p>
                        <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-5xl mb-4" style={{ color: '#c4a77d' }}>Get In Touch</h2>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c4a77d' }}></div>
              <p className="mt-6 text-lg text-gray-600">
                Have a project in mind? Let's work together to bring your ideas to life.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-6 py-6 rounded-2xl border-2 border-gray-200 focus:border-[#c4a77d] transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-6 py-6 rounded-2xl border-2 border-gray-200 focus:border-[#c4a77d] transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-6 py-6 rounded-2xl border-2 border-gray-200 focus:border-[#c4a77d] transition-colors resize-none"
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: '#c4a77d', color: 'white' }}
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-6">Or connect with me on:</p>
                <div className="flex gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="mailto:mil.bugasia@example.com"
                    className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-200"
                    style={{ color: '#c4a77d' }}
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-200"
                    style={{ color: '#c4a77d' }}
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-200"
                    style={{ color: '#c4a77d' }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 text-center border-t border-gray-200">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Mil Kieven Bugasia. All rights reserved.
        </p>
        <p className="text-gray-500 mt-2">Built with passion and code ✨</p>
      </footer>
    </div>
  );
}