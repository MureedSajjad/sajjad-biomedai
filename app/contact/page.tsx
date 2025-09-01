import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Me</h2>
      <p className="mb-6 text-lg text-gray-700">
        I welcome collaboration opportunities, research questions, and inquiries. Feel free to reach out!
      </p>

      <ul className="space-y-4 text-gray-800 text-lg">
        <li className="flex items-center space-x-3">
          <FaEnvelope className="text-blue-600" size={24} />
          <div>
            <div className="font-semibold">Official Email</div>
            <a href="mailto:2k23-ds-77@usind.edu.pk" className="text-blue-600 hover:underline">
              2k23-ds-77@usind.edu.pk
            </a>
          </div>
        </li>

        <li className="flex items-center space-x-3">
          <FaEnvelope className="text-gray-400" size={24} />
          <div>
            <div className="font-semibold">Personal Email (optional)</div>
            <a href="mailto:mureedsajjad786@gmail.com" className="text-blue-600 hover:underline">
              mureedsajjad786@gmail.com
            </a>
          </div>
        </li>

        <li className="flex items-center space-x-3">
          <FaPhoneAlt className="text-green-600" size={24} />
          <div>
            <div className="font-semibold">Phone</div>
            <a href="tel:+923000332872" className="text-blue-600 hover:underline">
              +92 300 033 2872
            </a>
          </div>
        </li>

        <li className="flex items-center space-x-3">
          <FaLinkedin className="text-blue-700" size={24} />
          <div>
            <div className="font-semibold">LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/mureed-sjad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/mureed-sjad/
            </a>
          </div>
        </li>

        <li className="flex items-center space-x-3">
          <FaGithub className="text-gray-800" size={24} />
          <div>
            <div className="font-semibold">GitHub</div>
            <a
              href="https://github.com/MureedSajjad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/MureedSajjad
            </a>
          </div>
        </li>

        <li className="flex items-center space-x-3">
          <FaGlobe className="text-purple-600" size={24} />
          <div>
            <div className="font-semibold">Website</div>
            <a
              href="https://sajjad-biomedai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              sajjad-biomedai.vercel.app
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
