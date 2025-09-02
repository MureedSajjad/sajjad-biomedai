export default function Publications() {
  return (
    <section>
      <h2 className="text-4xl font-semibold mb-6">Publications</h2>

      <article className="mb-8">
        <h3 className="text-2xl font-bold mb-1">
          Machine Learning Framework for Cancer Biomarker Identification from Multi-Omics Data
        </h3>
        <p>
          <em>Journal of Biomedical Informatics &middot; 2024 &middot; Published</em>
        </p>
        <p>
          This research introduces a robust machine learning framework designed to identify cancer biomarkers from large-scale genomic datasets. By analyzing multi-omics data from over 500 cancer patients, we applied a combination of ensemble learning techniques—including Random Forest, XGBoost, and neural networks—to uncover patterns associated with disease progression and treatment response.
          Our approach achieved a biomarker identification accuracy of 94%, demonstrating strong predictive performance across diverse cancer types. In addition to validating known biomarkers, the model revealed several novel candidates with potential therapeutic relevance, contributing to the advancement of precision oncology.
          This work highlights the power of machine learning in extracting clinically meaningful insights from complex genomic data and supports the development of targeted cancer therapies based on individual molecular profiles.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">📄 arXiv</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">🔗 PubMed</a>
        </div>
      </article>

      <article className="mb-8">
        <h3 className="text-2xl font-bold mb-1">
          Deep Learning for Precision Medicine: Predicting Treatment Response in Cancer Patients
        </h3>
        <p>
          <em>Nature Machine Intelligence &middot; 2024 &middot; Under Review</em>
        </p>
        <p>
          This study presents a deep learning framework designed to predict how cancer patients will respond to specific treatments, with the goal of advancing precision medicine in oncology. By integrating clinical records, genomic profiles, and medical imaging data, we developed a transformer-based architecture capable of learning complex patterns across modalities.
          The model was trained and validated on a dataset of 1,200 cancer patients, achieving an overall prediction accuracy of 89% for therapy outcomes. These results demonstrate the potential of AI to guide personalized treatment decisions, reduce trial-and-error approaches, and improve patient care.
          Importantly, the model's design emphasizes interpretability, allowing clinicians to understand which features contribute most to each prediction. This transparency supports clinical trust and opens pathways for integrating AI into real-world oncology workflows.
          Our work contributes to the growing field of data-driven precision medicine and highlights how multimodal deep learning can play a transformative role in tailoring cancer therapies to individual patients.
        </p>
        <div className="mt-2">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">📄 Preprint</a>
        </div>
      </article>

      <article className="mb-8">
        <h3 className="text-2xl font-bold mb-1">
          AI-Driven Biomarker Discovery for Early Detection of Alzheimer's Disease
        </h3>
        <p>
          <em>Cell Reports Medicine &middot; 2025 &middot; In Preparation</em>
        </p>
        <p>
          Alzheimer's disease is notoriously difficult to detect in its earliest stages, when intervention could be most effective. This research aims to develop artificial intelligence (AI) algorithms that can identify early biomarkers of Alzheimer's using multimodal data sources, including neuroimaging and proteomic profiles.
          We are applying advanced feature extraction techniques and interpretable machine learning models to uncover subtle patterns that may indicate pre-symptomatic neurodegeneration. Our goal is to build a diagnostic framework that can detect Alzheimer's before clinical symptoms appear, potentially enabling earlier and more targeted treatment strategies.
          Preliminary results show promising accuracy in distinguishing early-stage Alzheimer's from healthy controls, and several features identified by the model align with known biological pathways. By using explainable AI, we ensure that the results are not only accurate but also understandable to clinicians and researchers.
          This work contributes to the growing field of precision neurology and offers a scalable, data-driven approach to improving early diagnosis and long-term outcomes for individuals at risk of Alzheimer's disease.
        </p>
        <div className="mt-2">
          <span className="text-gray-500 italic">📄 BioRxiv (Coming Soon)</span>
        </div>
      </article>
    </section>
  );
}
