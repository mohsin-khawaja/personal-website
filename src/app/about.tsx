import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <p>
        I’m a Computer Science & Cognitive Science (Machine Learning) student at UC San Diego,
        graduating in December 2025. I have experience in:
      </p>
      <ul style={{ margin: '1rem 0' }}>
        <li>Machine Learning & AI (Python, PyTorch, TensorFlow, scikit-learn)</li>
        <li>EEG Signal Processing</li>
        <li>Web Development (React, Next.js)</li>
      </ul>
      <p>
        I’m currently a Machine Learning Engineer Researcher at UC Berkeley Engineering Lab,
        focusing on EEG-based algorithms for detecting leaning inwards in individuals with stroke
        or Parkinson's disease.
      </p>

      <p style={{ marginTop: '1rem' }}>
        I also founded the Muslim Tech Collaborative at UC San Diego, helping students
        connect with internships and industry mentors.
      </p>

      <nav style={{ marginTop: '2rem' }}>
        <Link href="/">Home</Link>
        <Link href="/projects" style={{ marginLeft: '1rem' }}>Projects</Link>
        <Link href="/resume" style={{ marginLeft: '1rem' }}>Resume</Link>
      </nav>
    </main>
  );
}
