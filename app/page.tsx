import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      {/* HERO SECTION */}
      <div className="text-center mb-8">
        <img
          src="/profile.jpg"
          alt="Mureed Sajjad"
          className="w-32 h-32 rounded-full mx-auto shadow-lg mb-4"
        />
        <h1 className="text-5xl font-bold text-blue-900 mb-2">Mureed Sajjad</h1>
        <p className="text-xl text-blue-700 mb-2">
          Data Science Student | Biomedical AI Enthusiast
        </p>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Final-year Data Science student at University of Sindh, Jamshoro, passionate about leveraging Artificial Intelligence and Big Data for transforming Biomedicine and Healthcare.
        </p>
      </div>

      {/* QUICK LINKS/NAVIGATION */}
      <div className="flex justify-center gap-8 mb-10">
        <a href="/research" className="font-semibold text-blue-600 hover:underline">Research</a>
        <a href="/publications" className="font-semibold text-blue-600 hover:underline">Publications</a>
        <a href="/projects" className="font-semibold text-blue-600 hover:underline">Projects</a>
        <a href="/contact" className="font-semibold text-blue-600 hover:underline">Contact</a>
      </div>

      {/* ACADEMIC BIO */}
      <div className="mb-7">
        <h2 className="text-2xl text-blue-800 font-semibold mb-2">About Me</h2>
        <p className="text-base text-gray-800">
          I am dedicated to advancing biomedical discovery through data-driven approaches. My work focuses on AI-powered healthcare solutions, multi-omics integration, and developing interpretable models for disease diagnosis and prognosis. I thrive in collaborative, research-driven environments and aspire to contribute impactful innovations in biomedicine.
        </p>
      </div>

      {/* RESEARCH INTERESTS */}
      <div className="mb-8">
        <h2 className="text-2xl text-blue-800 font-semibold mb-1">Research Interests</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Artificial Intelligence for disease prediction and diagnostics</li>
          <li>Multi-omics & biomedical Big Data integration</li>
          <li>Interpretability and transparency in machine learning</li>
          <li>Clinical data mining and EHR analytics</li>
          <li>Personalized medicine and precision healthcare</li>
        </ul>
      </div>

      {/* HIGHLIGHTS */}
      <div className="mb-8 border-l-4 border-blue-600 pl-4 py-3 bg-blue-50">
        <strong>Highlights:</strong>
        <ul className="list-disc ml-5 mt-1">
          <li>3+ major research projects in AI & biomedicine</li>
          <li>Published in leading journals and conferences</li>
          <li>Finalist, University Data Science Challenge 2024</li>
        </ul>
      </div>

      {/* SOCIAL & CONTACT */}
      <div className="flex gap-6 justify-center mb-4 text-2xl">
        <a href="mailto:2k23-ds-77@usind.edu.pk" className="text-blue-700 hover:text-blue-900" title="Contact Email"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/mureed-sajjad/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/MureedSajjad" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900" title="GitHub"><FaGithub /></a>
      </div>

      {/* CV Download */}
      <div className="text-center">
        <a
          href="/Mureed_Sajjad_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 mt-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
