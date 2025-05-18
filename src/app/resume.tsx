import Link from 'next/link';

export default function ResumePage() {
  return (
    <main>
      <h1>Resume</h1>

      <section style={{ margin: '1rem 0' }}>
        <h2>Education</h2>
        <p><strong>UC San Diego</strong>, B.S. in Computer Science & Cognitive Science (Machine Learning), Dec 2025</p>
        <p><strong>Stanford University (via Coursera)</strong>, Machine Learning Certification, Apr 2021 - Jun 2021</p>
      </section>

      <section style={{ margin: '1rem 0' }}>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Machine Learning Engineer Researcher</strong> @ UC Berkeley Engineering Lab (June 2024 - Present)
            <br />
            Developed EEG-based algorithms for detecting leaning inwards in stroke or Parkinson's disease patients,
            achieving real-time feedback and ~90% accuracy.
          </li>
          <li style={{ marginTop: '1rem' }}>
            <strong>IT Operations Engineer</strong> @ InterestingSoup (Oct 2021 - Apr 2022)
            <br />
            Led AI integration for predictive maintenance, reducing infrastructure costs by 25%.
          </li>
          <li style={{ marginTop: '1rem' }}>
            <strong>Founder & VP</strong> @ Muslim Tech Collaborative, UC San Diego (Aug 2024 - Present)
            <br />
            Connected members with internship programs, facilitating 15+ successful placements.
          </li>
        </ul>
      </section>

      <section style={{ margin: '1rem 0' }}>
        <h2>Technical Skills</h2>
        <p>
          Python, PyTorch, TensorFlow, scikit-learn, NumPy, React, Next.js, EEG Signal Processing,
          SVMs, PCA, NLP, etc.
        </p>
      </section>

      {/* Link to a PDF if you have one in public/resume.pdf */}
      <p style={{ marginTop: '1rem' }}>
        <a href="/Mohsin_Khawaja_Resume.pdf" target="_blank" rel="noopener noreferrer">
          View/Download PDF Resume
        </a>
      </p>

      <nav style={{ marginTop: '2rem' }}>
        <Link href="/">Home</Link>
        <Link href="/about" style={{ marginLeft: '1rem' }}>About</Link>
        <Link href="/projects" style={{ marginLeft: '1rem' }}>Projects</Link>
      </nav>
    </main>
  );
}
