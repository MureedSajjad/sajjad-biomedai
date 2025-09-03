"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const sections = ["home", "research", "publications", "projects", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-md z-50">
        <ul className="flex justify-center space-x-10 py-4 font-semibold text-gray-300 select-none">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className={`cursor-pointer hover:text-blue-400 transition ${
                activeSection === section ? "text-blue-500 border-b-2 border-blue-500" : ""
              }`}
              aria-current={activeSection === section ? "page" : undefined}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      {/* Page Content */}
      <main className="bg-gray-900 text-white pt-24 max-w-6xl mx-auto px-6 sm:px-12">
        {/* Home Section */}
        <section id="home" className="flex flex-col md:flex-row items-center gap-8 mb-20">
          {/* Profile Photo and Quote */}
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <Image
              src="/Profile.png"
              alt="Mureed Sajjad"
              width={190}
              height={190}
              className="rounded-full shadow-lg border-4 border-blue-700 bg-white object-cover"
              style={{ objectPosition: "top" }}
            />
            <blockquote className="mt-6 text-center md:text-left font-bold italic text-blue-400 max-w-xs">
              “I don&apos;t come from prestige—I come from persistence. And that&apos;s what powers my research.”
            </blockquote>
          </div>
          {/* Content to the right */}
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-5xl font-bold text-blue-400">Mureed Sajjad</h1>
            <h2 className="text-3xl font-semibold text-blue-300">
              Data Science Student | Biomedical AI Enthusiast
            </h2>
            <div className="flex flex-col sm:flex-row sm:space-x-8 text-gray-300 text-sm sm:text-base">
              <div>
                <span className="font-semibold">E-mail: </span>
                <a
                  href="mailto:2k23-ds-77@usind.edu.pk"
                  className="text-blue-400 hover:underline"
                >
                  2k23-ds-77@usind.edu.pk
                </a>
              </div>
              <div>
                <span className="font-semibold">LinkedIn: </span>
                <a
                  href="https://linkedin.com/in/mureed-sajjad/"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /mureed-sajjad
                </a>
              </div>
              <div>
                <span className="font-semibold">GitHub: </span>
                <a
                  href="https://github.com/MureedSajjad"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /MureedSajjad
                </a>
              </div>
              <div>
                <span className="font-semibold">University: </span>University of Sindh, Jamshoro
              </div>
            </div>
            <a
              href="/Mureed_Sajjad_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-7 py-3 bg-blue-600 hover:bg-blue-800 rounded font-semibold transition"
            >
              Download CV
            </a>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-20 scroll-mt-28">
          <h2 className="text-4xl font-bold text-blue-400 mb-6 border-b border-blue-700 pb-2">Research</h2>
          <p className="text-gray-300 mb-4 max-w-prose leading-relaxed">
            Dedicated to advancing biomedical discovery with data science, AI, and Big Data.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 max-w-prose">
            <li>Artificial Intelligence for disease prediction and diagnostics</li>
            <li>Multi-omics &amp; biomedical Big Data integration</li>
            <li>Machine learning model interpretability &amp; transparency</li>
            <li>Clinical data mining and EHR analytics</li>
            <li>Personalized medicine &amp; precision healthcare</li>
          </ul>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-20 scroll-mt-28">
          <h2 className="text-4xl font-bold text-blue-400 mb-6 border-b border-blue-700 pb-2">
            Publications
          </h2>
          <p className="text-gray-300 max-w-prose mb-4">
            [List or summary of publications can be added here.]
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20 scroll-mt-28">
          <h2 className="text-4xl font-bold text-blue-400 mb-6 border-b border-blue-700 pb-2">
            Projects
          </h2>
          <p className="text-gray-300 max-w-prose mb-4">
            [Descriptions of main research projects, collaborations, or software tools.]
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 scroll-mt-28">
          <h2 className="text-4xl font-bold text-blue-400 mb-6 border-b border-blue-700 pb-2">Contact</h2>
          <p className="text-gray-300 max-w-prose mb-4">
            Feel free to reach out via email or LinkedIn for collaborations, questions, or research discussions.
          </p>
          <div className="space-y-2 text-gray-400 max-w-prose">
            <div>
              <span className="font-semibold">E-mail:</span>{" "}
              <a
                href="mailto:2k23-ds-77@usind.edu.pk"
                className="text-blue-400 hover:underline"
              >
                2k23-ds-77@usind.edu.pk
              </a>
            </div>
            <div>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/mureed-sajjad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                /mureed-sajjad
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
