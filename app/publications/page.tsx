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
          Abstract: Recent advancements in artificial intelligence (AI) have paved the way for innovative models in cancer prognosis. This paper proposes interpretable machine learning classifiers that enhance transparency and trustworthiness in clinical settings. By leveraging multi-modal data, including genomics, imaging, and clinical variables, the models offer improved predictive performance while providing explanations comprehensible to oncologists. We evaluate these models on publicly available cancer datasets and demonstrate their ability to outperform traditional statistical methods. Further, case studies illustrate practical applications, highlighting how interpretable outputs can influence treatment decisions and patient outcomes. Ethical considerations, validation strategies, and potential future improvements are discussed to facilitate the integration of AI into routine oncology practice. This work contributes significantly to bridging the gap between AI research and clinical adoption.
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
          Abstract: Electronic health records (EHR) harbor vast amounts of clinical data that can revolutionize personalized treatment strategies. In this study, we explore advanced big data analytics and predictive modeling techniques applied to large EHR datasets to optimize therapy selection for cancer patients. The approach integrates patient demographics, medical history, biomarker profiles, and treatment responses to generate individualized recommendations. Our machine learning models demonstrate superior accuracy in predicting patient outcomes compared to conventional methods, enhancing decision-making for oncologists. Additionally, we address challenges in EHR data quality, privacy, and ethical use, proposing frameworks to mitigate biases and ensure equitable healthcare delivery. This work provides a robust foundation for harnessing real-world data towards precision medicine goals.
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

      <article className="mb-5">
        <h3 className="text-2xl font-bold mb-1">
          Multi-Omics Integration for Cancer Subtype Classification
        </h3>
        <p>
          <em>Bioinformatics, 2024</em>
        </p>
        <p>
          Abstract: Cancer is a highly heterogeneous disease where precise subtype classification is critical for effective treatment. This paper introduces an integrated machine learning framework that combines genomics, transcriptomics, and proteomics data to classify cancer subtypes with higher accuracy. We utilize novel feature extraction and fusion techniques to capture the complex biological interactions across data types. Our methodology is validated on multiple cancer cohorts and benchmarked against existing classifiers, demonstrating significant improvement in predictive accuracy. Furthermore, the framework includes mechanisms for interpretability to understand the influence of various omics features. The study discusses implications for personalized therapeutics, challenges in multi-omics data integration, and directions for future research. This integrative approach promises enhanced diagnostic and prognostic capabilities in oncology.
        </p>
        <a
          href="https://doi.org/10.1093/bioinformatics/btac123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read full article
        </a>
      </article>

      <article className="mb-5">
        <h3 className="text-2xl font-bold mb-1">
          Machine Learning Approaches for Drug Repurposing in Oncology
        </h3>
        <p>
          <em>Journal of Cancer Research, 2023</em>
        </p>
        <p>
          Abstract: Drug repurposing offers a cost-effective and efficient method for discovering new cancer treatments by identifying novel therapeutic uses for existing drugs. In this study, we apply state-of-the-art machine learning algorithms to chemical compound databases and pharmacogenomic profiles to predict drug efficacy against various cancer types. Our pipeline integrates molecular docking simulations with graph-based neural networks, enabling the identification of promising drug candidates for clinical validation. We present comprehensive evaluations of model performance and highlight case studies where our predictions align with observed clinical effects. The research also discusses the challenges of data heterogeneity, model interpretability, and the translational potential of computational repurposing methodologies. Our findings contribute to accelerating oncological drug discovery through innovative AI-driven approaches.
        </p>
        <a
          href="https://doi.org/10.1158/jcr.2023.4567"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read full article
        </a>
      </article>

      <article className="mb-5">
        <h3 className="text-2xl font-bold mb-1">
          Predictive Biomarkers for Immunotherapy Response
        </h3>
        <p>
          <em>Clinical Cancer Insights, 2024</em>
        </p>
        <p>
          Abstract: Immunotherapy has transformed cancer treatment paradigms, but patient response varies widely. This paper focuses on the identification and validation of predictive biomarkers that can stratify patients likely to benefit from immunotherapeutic interventions. Using high-throughput sequencing, proteomics, and advanced bioinformatics, we analyze tumor microenvironment profiles and immune signatures across diverse cancer types. Our study employs machine learning classifiers to correlate biomarker expression with clinical outcomes, achieving strong predictive power. The findings provide insights into mechanisms of resistance and sensitivity, offering pathways to optimize patient selection and personalize immunotherapy regimens. Considerations on clinical implementation, assay reproducibility, and future research directions are also addressed.
        </p>
        <a
          href="https://doi.org/10.1016/cci.2024.00123"
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
