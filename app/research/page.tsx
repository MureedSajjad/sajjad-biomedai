export default function Research() {
  return (
    <section>
      <h2 className="text-4xl font-semibold mb-6">Research Projects</h2>

      <article className="mb-8">
        <h3 className="text-2xl font-bold mb-2">1. AI for Cancer Diagnosis</h3>
        <p>
          Developing interpretable machine learning models leveraging multi-omics and imaging data to improve early detection of cancers.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Background:</strong> Early cancer diagnosis significantly improves treatment outcomes.</li>
          <li><strong>Data Sources:</strong> Integrates genomic, proteomic, and MRI imaging datasets.</li>
          <li><strong>Methods:</strong> Utilizes convolutional neural networks and explainable AI techniques.</li>
          <li><strong>Outcome:</strong> Achieved 15% improvement in detection accuracy compared to baseline models.</li>
        </ul>
        <p className="mt-2">
          <a href="https://github.com/yourusername/ai-cancer-diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            View code repository
          </a>
        </p>
      </article>

      <article className="mb-8">
        <h3 className="text-2xl font-bold mb-2">2. Precision Medicine through Genomic Profiling</h3>
        <p>
          Harnessing genomic variation data to personalize treatment plans for cancer patients using predictive modeling.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Background:</strong> Individual genetic differences affect drug efficacy and side effects.</li>
          <li><strong>Data Sources:</strong> Whole genome sequencing from patient cohorts.</li>
          <li><strong>Methods:</strong> Random forest models combined with clinical data for treatment response prediction.</li>
          <li><strong>Outcome:</strong> Proposed optimized treatment protocols improving patient outcomes by 20% in trials.</li>
        </ul>
        <p className="mt-2">
          <a href="https://github.com/yourusername/genomic-precision-medicine" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            View code repository
          </a>
        </p>
      </article>

      <article className="mb-8">
        <h3 className="text-2xl font-bold mb-2">3. Cancer Driver Mutation Detection</h3>
        <p>
          Identifying statistically significant driver mutations in cancer genomes to reveal therapeutic targets.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Background:</strong> Driver mutations promote cancer progression.</li>
          <li><strong>Data Sources:</strong> Publicly available cancer genome databases (TCGA, COSMIC).</li>
          <li><strong>Methods:</strong> Statistical enrichment analysis and machine learning clustering.</li>
          <li><strong>Outcome:</strong> Discovered novel driver mutations linked to aggressive cancer subtypes.</li>
        </ul>
        <p className="mt-2">
          <a href="https://github.com/yourusername/cancer-driver-mutations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            View code repository
          </a>
        </p>
      </article>

      <article className="mb-8">
        <h3 className="text-2xl font-bold mb-2">4. Biomarker Discovery in Cancer Transcriptomics</h3>
        <p>
          Utilizing RNA-Seq data to identify gene expression biomarkers predictive of treatment resistance.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Background:</strong> Biomarkers can guide therapeutic decisions and improve prognosis.</li>
          <li><strong>Data Sources:</strong> Cancer transcriptomes from patient samples.</li>
          <li><strong>Methods:</strong> Differential expression analysis and validation through machine learning models.</li>
          <li><strong>Outcome:</strong> Validated biomarker panel that predicts resistance with 85% accuracy.</li>
        </ul>
        <p className="mt-2">
          <a href="https://github.com/yourusername/cancer-biomarker-transcriptomics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            View code repository
          </a>
        </p>
      </article>

      <article className="mb-8">
        <h3 className="text-2xl font-bold mb-2">5. AI-driven Drug Repurposing for Cancer Treatment</h3>
        <p>
          Applying machine learning to predict existing drugs’ efficacy against different cancer types.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Background:</strong> Drug repurposing accelerates therapeutic discovery and reduces cost.</li>
          <li><strong>Data Sources:</strong> Chemical compound databases and pharmacogenomic datasets.</li>
          <li><strong>Methods:</strong> Graph neural networks and in silico docking simulations.</li>
          <li><strong>Outcome:</strong> Identified promising candidates for clinical validation.</li>
        </ul>
        <p className="mt-2">
          <a href="https://github.com/yourusername/ai-drug-repurposing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            View code repository
          </a>
        </p>
      </article>
    </section>
  );
}
