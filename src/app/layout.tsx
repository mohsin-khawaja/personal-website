import './globals.css';

export const metadata = {
  title: 'Mohsin Khawaja',
  description: 'Personal portfolio of Mohsin Khawaja - Machine Learning Engineer & AI Researcher',
  keywords: 'Mohsin Khawaja, Machine Learning, AI, Neural Networks, Software Engineer, UCSD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-mono antialiased bg-slate-950">{children}</body>
    </html>
  );
}
