"use client"
import React from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import AnimatedSection from './components/AnimatedSection'
import Navigation from './components/navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* AnimatedBackground now contains the intro content directly in a clean layout like Rishi's site */}
      <AnimatedBackground />
      
      <main className="relative">
        {/* Hidden spacer to push content down */}
        <div className="h-screen"></div>
        
        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-slate-950">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold text-blue-400 mb-2"
            >
              PROFESSIONAL EXPERIENCE
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold text-white"
            >
              ## Where I've Worked
            </motion.h3>
          </div>
          
          <div className="space-y-20">
            {/* Opennote Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-5 gap-8"
            >
              <div className="md:col-span-1">
                <div className="text-5xl font-bold text-white/20">01</div>
              </div>
              <div className="md:col-span-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-400 uppercase tracking-wider text-sm mb-1">Machine Learning Engineer / Researcher</p>
                    <h4 className="text-2xl font-bold text-white">UC Berkeley Machine Learning & Nanotech Research</h4>
                  </div>
                  <p className="text-gray-400">June 2024 - Present</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-5 mb-6">
                  <img 
                    src="/profile.jpg" 
                    alt="UC Berkeley ML Preview"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-300">
                    Engineered an EEG monitoring system to analyze brainwave activity to detect leaning in individuals with Parkinson's disease, providing real-time feedback to prevent potential falls and improve mobility.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">classification speed</p>
                    <p className="text-2xl font-bold text-white">~30ms</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">model accuracy</p>
                    <p className="text-2xl font-bold text-white">90%+</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">scikit-learn</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">SVM</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">GPU Acceleration</span>
                </div>
                
                <a href="#" className="inline-block text-blue-400 hover:text-blue-300">
                  Research
                </a>
              </div>
            </motion.div>
            
            {/* NASA SUITS Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-5 gap-8"
            >
              <div className="md:col-span-1">
                <div className="text-5xl font-bold text-white/20">02</div>
              </div>
              <div className="md:col-span-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-400 uppercase tracking-wider text-sm mb-1">Software Engineering Intern</p>
                    <h4 className="text-2xl font-bold text-white">InterestingSoup</h4>
                  </div>
                  <p className="text-gray-400">June 2021 - September 2021</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-5 mb-6">
                  <img 
                    src="/profile.jpg" 
                    alt="InterestingSoup Preview"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-300">
                    Developed and optimized backend API endpoints using Python and Flask, improving data retrieval speed by 30%. Collaborated in a cross-functional team to integrate a real-time analytics dashboard, enhancing user engagement insights.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">data retrieval improvement</p>
                    <p className="text-2xl font-bold text-white">+30%</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">location</p>
                    <p className="text-2xl font-bold text-white">San Francisco</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Flask</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">API Development</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Analytics</span>
                </div>
                
                <a href="#" className="inline-block text-blue-400 hover:text-blue-300">
                  Details
                </a>
              </div>
            </motion.div>
            
            {/* Muslim Tech Collaborative Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-5 gap-8"
            >
              <div className="md:col-span-1">
                <div className="text-5xl font-bold text-white/20">03</div>
              </div>
              <div className="md:col-span-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-400 uppercase tracking-wider text-sm mb-1">Founder & VP</p>
                    <h4 className="text-2xl font-bold text-white">Muslim Tech Collaborative at UC San Diego</h4>
                  </div>
                  <p className="text-gray-400">August 2024 - Present</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-5 mb-6">
                  <img 
                    src="/profile.jpg" 
                    alt="Muslim Tech Collaborative Preview"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-300">
                    Led technical boot camps and events to help students develop technical skills, gain practical experience, and explore innovative ethical AI applications, fostering a community of open-source development.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">focus</p>
                    <p className="text-2xl font-bold text-white">Ethical AI</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">location</p>
                    <p className="text-2xl font-bold text-white">La Jolla, CA</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Community</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Open Source</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Ethics</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Workshops</span>
                </div>
                
                <a href="#" className="inline-block text-blue-400 hover:text-blue-300">
                  Community
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-slate-950">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold text-blue-400 mb-2"
            >
              FEATURED PROJECTS
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold text-white"
            >
              ## What I've Built
            </motion.h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 rounded-xl overflow-hidden"
            >
              <div className="p-1">
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">01</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">Leukemia Classifier</h4>
                <p className="text-gray-400 text-sm mb-4">AI Blood Cancer Detection</p>
                
                <div className="bg-white/5 rounded-lg p-5 mb-6">
                  <img 
                    src="/profile.jpg" 
                    alt="Leukemia Classifier Preview"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-300">
                    Built a ResNet50-powered AI system analyzing 3,200+ blood smear images to classify leukemia subtypes, achieving 81.0% accuracy and 85.2% AUC-ROC for early cancer detection.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">accuracy</p>
                    <p className="text-xl font-bold text-white">81.0%</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">AUC-ROC</p>
                    <p className="text-xl font-bold text-white">85.2%</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">YOLO</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">NumPy</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Python</span>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">Demo</a>
                </div>
              </div>
            </motion.div>
            
            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 rounded-xl overflow-hidden"
            >
              <div className="p-1">
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">02</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">EEG-Based Attention State Classification</h4>
                <p className="text-gray-400 text-sm mb-4">Neural State Analysis</p>
                
                <div className="bg-white/5 rounded-lg p-5 mb-6">
                  <img 
                    src="/profile.jpg" 
                    alt="EEG Project Preview"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-300">
                    Built an ML system using EEG data (DEAP dataset) to classify cognitive states (Focused, Distracted, Overstimulated), extracting key frequency band features and achieving 90% accuracy with SVM, LSTM, and CNN models.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">model accuracy</p>
                    <p className="text-xl font-bold text-white">90%</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">framework</p>
                    <p className="text-xl font-bold text-white">TensorFlow</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">SVM</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">LSTM</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">CNN</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Python</span>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
                </div>
              </div>
            </motion.div>
            
            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 rounded-xl overflow-hidden"
            >
              <div className="p-1">
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">03</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">MunchMate</h4>
                <p className="text-gray-400 text-sm mb-4">AI-Powered Meal Planning</p>
                
                <div className="bg-white/5 rounded-lg p-5 mb-6">
                  <img 
                    src="/profile.jpg" 
                    alt="MunchMate Preview"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-300">
                    Developed an AI-driven nutrition platform with a React front-end, Python back-end, and OpenAI API, delivering personalized recipes with 93% user satisfaction and reducing food waste by 27%.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">user satisfaction</p>
                    <p className="text-xl font-bold text-white">93%</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">waste reduction</p>
                    <p className="text-xl font-bold text-white">27%</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">OpenAI API</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">Demo</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-slate-950">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold text-blue-400 mb-2"
            >
              GET IN TOUCH
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold text-white"
            >
              ## Let's Connect
            </motion.h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <p className="text-white">mkhawaja@ucsd.edu</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p className="text-white">San Francisco Bay Area</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Phone</p>
                  <p className="text-white">510-949-7141</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Message"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto mb-20 bg-slate-950">
          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold text-blue-400 mb-2"
            >
              A BIT ABOUT ME
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold text-white"
            >
              ## WHO I AM
            </motion.h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-gray-300">
                I'm a full-stack developer with a drive for building beautiful, functional, and scalable web applications. I love to jump into projects and learn from those around me to refine my skills as a student and developer.
              </p>
              <p className="text-gray-300">
                Apart from my work, I'm a huge runner and love to explore new genres of music, so feel free to reach out and send me your favorite songs or talk about running (check out my Strava if you're curious)!
              </p>
              
              <div className="flex space-x-4 pt-4">
                <a href="#contact" className="btn btn-primary">Get in Touch</a>
                <a href="#" className="btn btn-outline">Download CV</a>
              </div>
            </motion.div>
            
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-white">University of California, San Diego</h4>
                  <p className="text-blue-400">June 2025</p>
                </div>
                <p className="text-lg text-gray-300 italic mb-2">B.S. - Cognitive Science: Machine Learning & Neural Computation</p>
                <p className="text-lg text-gray-300 mb-4">Minor: Computer Science</p>
                
                <h5 className="text-white font-semibold mb-2">Relevant Coursework:</h5>
                <p className="text-gray-300">
                  AI Algorithms, Supervised & Unsupervised Machine Learning, Advanced Data Structures & Algorithms, Neural Networks & Deep Learning, LLMs, Reinforcement Learning, Advanced Machine Learning Methods
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Technical Skills</h3>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <h5 className="text-white font-semibold mb-2">Languages & Libraries:</h5>
                <p className="text-gray-300 mb-4">
                  Python, PyTorch, TensorFlow, Scikit-Learn, NumPy, SciPy, Pandas, SVMs, PCA, NLP, C++, Java, JavaScript, React, Swift, YOLO, EEG Signal Processing, BART, Decision Trees, Firebase, ARM
                </p>
                
                <h5 className="text-white font-semibold mb-2">Location:</h5>
                <p className="text-gray-300">
                  San Francisco Bay Area
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 border-t border-white/10 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400">© 2024 Mohsin Khawaja. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}

/*
Dependencies:
  npm install framer-motion
*/
