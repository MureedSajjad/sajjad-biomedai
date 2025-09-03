import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 text-white">
      {/* HERO SECTION */}
      <div className="text-center mb-10">
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Mureed Sajjad"
            className="w-32 h-32 rounded-full mx-auto shadow-lg mb-4 border-4 border-blue-700 bg-white object-cover"
            style={{ objectPosition: "top" }}
          />
        </div>
        <h1 className="text-5xl font-bold text-blue-400 mb-2 drop-shadow-lg">Mureed Sajjad</h1>
        <p className="text-2xl font-semibold text-blue-200 mb-1 drop-shadow-sm">Data Science Student | Biomedical AI Enthusiast</p>
        <p className="text-lg text-gray-100 max-w-xl mx-auto mb-4">
          Final-year Data Science student at University of Sindh, Jamshoro, passionate about leveraging Artificial Intelligence and Big Data for transforming Biomedicine and Healthcare.
        </p>
      </div>

      {/* QUICK LINKS / NAVIGATION */}
      <div className="flex justify-center gap-8 mb-10">
        <a href="/research" className="font-semibold text-blue-300 hover:underline hover:text-blue-500 transition">Research</a>
        <a href="/publications" className="font-semibold text-blue-300 hover:underline hover:text-blue-500 transition">Publications</a>
        <a href="/projects" className="font-semibold text-blue-300 hover:underline hover:text-blue-500 transition">Projects</a>
        <a href="/contact" className="font-semibold text-blue-300 hover:underline hover:text-blue-500 transition">Contact</a>
      </div>

      {/* ABOUT SECTION */}
      <div className="mb-7">
        <h2 className="text-2xl text-blue-300 font-bold mb-3 drop-shadow">About Me</h2>
        <p className="text-base text-gray-100 leading-relaxed">
          I am dedicated to advancing biomedical discovery through data-driven approaches. My work focuses on AI-powered healthcare solutions, multi-omics integration, and developing interpretable models for disease diagnosis and prognosis.
          I thrive in collaborative, research-driven environments and aspire to contribute impactful innovations in biomedicine.
        </p>
      </div>

      {/* RESEARCH INTERESTS */}
      <div className="mb-7">
        <h2 className="text-2xl text-blue-300 font-bold mb-2 drop-shadow">Research Interests</h2>
        <ul className="list-disc ml-7 text-lg text-gray-100 space-y-1">
          <li>Artificial Intelligence for disease prediction and diagnostics</li>
          <li>Multi-omics &amp; biomedical Big Data integration</li>
          <li>Interpretability and transparency in machine learning</li>
          <li>Clinical data mining and EHR analytics</li>
          <li>Personalized medicine and precision healthcare</li>
        </ul>
      </div>

      {/* HIGHLIGHTS */}
      <div className="mb-8 border-l-4 border-blue-500 pl-4 py-4 bg-blue-900 bg-opacity-70 rounded-lg shadow-inner">
        <h3 className="text-blue-200 font-semibold mb-2">Highlights:</h3>
        <ul className="list-disc ml-6 text-gray-100 text-base space-y-1">
          <li>3+ major research projects in AI &amp; biomedicine</li>
          <li>Published in leading journals and conferences</li>
          <li>Finalist, University Data Science Challenge 2024</li>
        </ul>
      </div>

      {/* SOCIAL & CONTACT */}
      <div className="flex gap-8 justify-center mb-6 text-3xl">
        <a href="mailto:2k23-ds-77@usind.edu.pk" className="text-blue-400 hover:text-blue-600 transition" title="Contact Email"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/mureed-sajjad/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/MureedSajjad" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition" title="GitHub"><FaGithub /></a>
      </div>

      {/* CV Download */}
      <div className="text-center mt-6">
        <a
          href="/Mureed_Sajjad_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 bg-blue-500 text-white font-bold rounded shadow-lg hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
