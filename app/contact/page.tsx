export default function Contact() {
  return (
    <section>
      <h2 className="text-4xl font-semibold mb-6">Contact</h2>
      <p className="mb-2">Feel free to reach out to me through any of the following:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Email: <a href="mailto:mureed@example.com" className="text-blue-600 hover:underline">mureed@example.com</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@yourusername</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/yourprofile</a></li>
      </ul>
    </section>
  );
}
