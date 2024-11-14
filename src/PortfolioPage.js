// components/PortfolioPage.js
import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Card = ({ children, className = "" }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

const PortfolioPage = () => {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="hero-section"
      >
        <h1>Mohsin Khawaja</h1>
        <p className="subtitle">Machine Learning Specialist & Software Engineer</p>
        <p className="contact-info">San Francisco Bay Area | mkhawaja@ucsd.edu</p>
      </motion.div>

      {/* About Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="section"
      >
        <Card>
          <h2>About Me</h2>
          <p>
            I'm a Cognitive Science student at UC San Diego, specializing in Machine Learning with a minor in Computer Science. 
            My passion lies at the intersection of AI, software development, and cutting-edge technology. Currently, I'm conducting 
            research in nanotechnology at UC Berkeley's Engineering Lab while pursuing my academic goals.
          </p>
        </Card>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="section"
      >
        <h2>Experience</h2>
        <div className="experience-grid">
          <motion.div variants={fadeIn}>
            <Card>
              <h3>Nanotech Researcher</h3>
              <p className="job-period">UC Berkeley Engineering Lab - June 2024 - Present</p>
              <ul>
                <li>Conduct research in nanotechnology, focusing on programmable nanostructures</li>
                <li>Develop software/firmware for advanced exoskeleton systems</li>
                <li>Integrate embedded systems with real-time control algorithms</li>
                <li>Implement cloud-based AI/ML solutions</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <h3>IT Operations Engineer</h3>
              <p className="job-period">InterestingSoup - Oct 2021 - Oct 2022</p>
              <ul>
                <li>Led AI technologies integration into business processes</li>
                <li>Spearheaded cloud computing solutions adoption</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <h3>Manager</h3>
              <p className="job-period">Wayback Burgers - Aug 2017 - May 2021</p>
              <ul>
                <li>Managed day-to-day operations and customer service</li>
                <li>Implemented strategic initiatives for operational efficiency</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="section"
      >
        <Card>
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div>
              <h3>Programming Languages</h3>
              <p>Python, Java, C++, SQL</p>
            </div>
            <div>
              <h3>Specialized Skills</h3>
              <p>Machine Learning, Data Visualization, Data Structures, Project Management</p>
            </div>
          </div>
        </Card>
      </motion.section>
    </div>
  );
};

export default PortfolioPage;