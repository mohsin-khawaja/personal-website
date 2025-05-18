import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      <ul style={{ margin: '1rem 0' }}>
        <li>
          <strong>San Diego Airbnb Analysis:</strong> Analyzed 10,000+ listings to discover
          how descriptions and amenities influence pricing and guest perception.
        </li>
        <li style={{ marginTop: '1rem' }}>
          <strong>MunchMate - AI-Powered Meal Planning:</strong> Full-stack meal suggestion app 
          (React + Python + OpenAI API) delivering personalized recipes and reducing food waste.
        </li>
        <li style={{ marginTop: '1rem' }}>
          <strong>Islamic GenAI Guild:</strong> Developed and evaluated AI models for Islamic knowledge,
          achieving high performance in content-based evaluations.
        </li>
      </ul>

      <nav style={{ marginTop: '2rem' }}>
        <Link href="/">Home</Link>
        <Link href="/about" style={{ marginLeft: '1rem' }}>About</Link>
        <Link href="/resume" style={{ marginLeft: '1rem' }}>Resume</Link>
      </nav>
    </main>
  );
}
