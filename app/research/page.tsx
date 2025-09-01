export default function Research() {
  return (
    <section>
      <h2 className="text-4xl font-semibold mb-6">Research Projects</h2>

      <article className="mb-6">
        <h3 className="text-2xl font-bold mb-1">AI for Cancer Diagnosis</h3>
        <p>
          Developing interpretable machine learning models leveraging multi-omics and imaging data to improve early detection of cancers.
        </p>
      </article>

      <article className="mb-6">
        <h3 className="text-2xl font-bold mb-1">Precision Medicine Analytics</h3>
        <p>
          Applying big data techniques to electronic health records (EHR) and clinical trial datasets for personalized treatment optimization.
        </p>
      </article>

      <article className="mb-6">
        <h3 className="text-2xl font-bold mb-1">COVID-19 Genomic Surveillance</h3>
        <p>
          Building scalable data pipelines for real-time monitoring and variant tracking of SARS-CoV-2 using public genome databases.
        </p>
      </article>
    </section>
  );
}
