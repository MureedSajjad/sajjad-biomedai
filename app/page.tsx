import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 text-white bg-gray-900">
      {/* Top layout: image/name/contact sidebar */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-10 gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <Image
            src="/Profile.png"
            alt="Mureed Sajjad"
            width={128}
            height={128}
            className="rounded-full shadow-lg border-4 border-blue-700 bg-white object-cover"
            style={{ objectPosition: "top" }}
          />
        </div>
        {/* Name & Contacts */}
        <div className="flex-1 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">Mureed Sajjad</h1>
          <h2 className="text-2xl font-semibold text-blue-200 mb-3">Data Science Student | Biomedical AI Enthusiast</h2>
          {/* Contact Sidebar */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3 text-sm">
            <div>
              <span className="font-bold">E-mail:</span>{" "}
              <a href="mailto:2k23-ds-77@usind.edu.pk" className="text-blue-300 hover:underline">
                2k23-ds-77@usind.edu.pk
              </a>
            </div>
            <div>
              <span className="font-bold">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/mureed-sajjad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                /mureed-sajjad
              </a>
            </div>
            <div>
              <span className="font-bold">GitHub:</span>{" "}
              <a
                href="https://github.com/MureedSajjad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                /MureedSajjad
              </a>
            </div>
            <div>
              <span className="font-bold">University:</span> University of Sindh, Jamshoro
            </div>
          </div>
          {/* CV Button */}
          <div>
            <a
              href="/Mureed_Sajjad_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-500 text-white font-bold rounded shadow-lg hover:bg-blue-700 transition text-base mt-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Research summary */}
      <div className="mb-6">
        <span className="block text-lg text-blue-200 font-semibold mb-1">Main Research Interests</span>
        <p className="font-medium text-gray-100 leading-relaxed mb-2">
          Dedicated to advancing biomedical discovery with data science, AI, and Big Data.
        </p>
        <ul className="list-disc ml-6 text-base text-gray-100 space-y-1 mb-4">
          <li>Artificial Intelligence for disease prediction and diagnostics</li>
          <li>Multi-omics &amp; biomedical Big Data integration</li>
          <li>Machine learning model interpretability &amp; transparency</li>
          <li>Clinical data mining and EHR analytics</li>
          <li>Personalized medicine &amp; precision healthcare</li>
        </ul>
      </div>

      {/* Academic narrative */}
      <div className="mb-8">
        <span className="block text-lg text-blue-300 font-semibold mb-1">Academic Profile</span>
        <p className="text-base text-gray-200 leading-relaxed">
          Final-year Data Science student at University of Sindh, Jamshoro, committed to leveraging Artificial Intelligence and Big Data to transform Biomedicine and Healthcare. Experienced in developing multimodal models, integrating genomics, clinical, and imaging data for precision medicine. Collaborative, research-driven mindset with publications in leading journals and participation in competitive data challenges.
        </p>
      </div>

      {/* Highlights box */}
      <div className="mb-8 border-l-4 border-blue-500 pl-4 py-4 bg-blue-900 bg-opacity-70 rounded-lg shadow-inner">
        <h3 className="text-blue-200 font-semibold mb-2">Highlights:</h3>
        <ul className="list-disc ml-6 text-gray-100 text-base space-y-1">
          <li>3+ major research projects in AI &amp; biomedicine</li>
          <li>Published in leading journals and conferences</li>
          <li>Finalist, University Data Science Challenge 2024</li>
        </ul>
      </div>

      {/* Quote box */}
      <div className="bg-gray-800 rounded-xl px-6 py-4 my-6 text-center shadow-md max-w-2xl mx-auto">
        <span className="italic text-blue-200 text-lg">
          &quot;I don&apos;t come from prestige—I come from persistence. And that&apos;s what powers my research.&quot;
        </span>
      </div>
    </section>
  );
}
