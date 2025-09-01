export default function Publications() {
  return (
    <section>
      <h2 className="text-4xl font-semibold mb-6">Publications</h2>

      <article className="mb-5">
        <h3 className="text-2xl font-bold mb-1">
          Interpretable AI Models for Cancer Prognosis
        </h3>
        <p>
          <em>Journal of Biomedical Informatics, 2024</em>
        </p>
        <p>
          This paper presents novel methods to increase transparency of AI-based classifiers in cancer prognosis, improving clinical adoption.
        </p>
        <a
          href="https://arxiv.org/abs/1234.56789"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read full paper on arXiv
        </a>
      </article>

      <article className="mb-5">
        <h3 className="text-2xl font-bold mb-1">
          Leveraging EHR Data for Precision Treatment
        </h3>
        <p>
          <em>Nature Medicine, 2023</em>
        </p>
        <p>
          Analysis of large-scale EHR datasets demonstrates improved personalized therapy selection using predictive modeling.
        </p>
        <a
          href="https://doi.org/10.1038/s41591-023-01234-5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read full article
        </a>
      </article>
    </section>
  );
}
