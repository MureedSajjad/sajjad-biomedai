export default function Projects() {
  return (
    <section>
      <h2 className="text-4xl font-semibold mb-6">Code & Datasets</h2>

      <ul className="list-disc list-inside space-y-3">
        <li>
          <a
            href="https://github.com/yourusername/biomedical-ai-tool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Biomedical AI Tool
          </a>{" "}
          - Python package for genomic data analysis with machine learning.
        </li>

        <li>
          <a
            href="https://github.com/yourusername/clinical-trial-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Clinical Trial Analytics
          </a>{" "}
          - Open-source repository for statistical analysis of clinical trial data.
        </li>

        <li>
          <a
            href="https://zenodo.org/record/1234567"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            COVID-19 Genome Dataset
          </a>{" "}
          - Publicly accessible dataset of SARS-CoV-2 genomes (updated 2025).
        </li>
      </ul>
    </section>
  );
}
