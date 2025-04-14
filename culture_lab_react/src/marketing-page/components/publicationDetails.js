import React from "react";
import "./publicationDetails.css";

const publications = [
  {
    title: "Towards Measuring and Modeling “Culture” in LLMs: A Survey",
    authors: "Muhammad Farid Adilazuarda*, Sagnik Mukherjee*, Pradhyumna Lavania, Siddhant Singh, Ashutosh Dwivedi, Alham Fikri Aji, Jacki O’Neill, Ashutosh Modi, Monojit Choudhury",
    paperLink: "https://arxiv.org/pdf/2403.15412v1",
    citation: "https://arxiv.org/abs/2403.15412",
    // thumbnail: "thumbnail.webp",
    // abstract:
    //   "We present a survey of 39 recent papers that aim to study cultural representation and inclusion in large language models. We observe that none of the studies define “culture,” which is a complex, multifaceted concept; instead, they probe the models on some specially designed datasets which represent certain aspects of “culture.” We call these aspects the proxies of cultures, and organize them across three dimensions of demographic, semantic and linguistic cultural interaction proxies. We also categorize the probing methods employed. Our analysis indicates that only certain aspects of “culture”, such as values and objectives, have been studied, leaving several other interesting and important facets, especially the multitude of semantic domains (Thompson et al., 2020) and aboutness (Hershcovich et al., 2022), unexplored. Two other crucial gaps are the lack of robustness and situatedness of the current methods. Based on these observations, we provide several recommendations for a holistic and practically useful research agenda for furthering cultural inclusion in LLMs and LLM-based applications.",
    conference: "Empirical Methods in Natural Language Processing (EMNLP), 2024",
  },
  {
    title: "Cultural Conditioning or Placebo? On the Effectiveness of Socio-Demographic Prompting",
    authors: "Sagnik Mukherjee*, Muhammad Farid Adilazuarda*, Sunayana Sitaram, Kalika Bali, Alham Fikri Aji, Monojit Choudhury",
    paperLink: "https://arxiv.org/pdf/2406.11661",
    citation: "https://arxiv.org/abs/2406.11661",
    thumbnail: "thumbnail.webp",
    // abstract:
    //   "Socio-demographic prompting is a commonly employed approach to study cultural biases in LLMs as well as for aligning models to certain cultures. In this paper, we systematically probe four LLMs (Llama 3, Mistral v0.2, GPT3.5 Turbo and GPT-4) with prompts that are conditioned on culturally sensitive and nonsensitive cues, on datasets that are supposed to be culturally sensitive (EtiCor and CALI) or neutral (MMLU and ETHICS). We observe that all models except GPT-4 show significant variations in their responses on both kinds of datasets for both kinds of prompts, casting doubt on the robustness of the culturally conditioned prompting as a method for eliciting cultural bias in models or as an alignment strategy. The work also calls rethinking the control experiment design to tease apart the cultural conditioning of responses from “placebo effect”, i.e., random perturbations of model responses due to arbitrary tokens in the prompt.",
    conference: "Empirical Methods in Natural Language Processing (EMNLP), 2024",
  },
  {
    title: "Paper Title",
    authors: "Authors",
    paperLink: "link-to-paper",
    citation: "link-to-citation",
    codeLink: "link-to-code",
    demoLink: "link-to-demo",
    presentationLink: "link-to-presentation",
    poster : "link-to-poster",
    thumbnail: "thumbnail.webp",
    // abstract:
    //   "Short summary or Abstract",
    conference: "Conference Name",
  },
];

const PublicationDetails = () => {
  return (
    <div id="publications-container">
      <h1>Publications</h1>
      {publications.map((pub, index) => (
        <div key={index} className="publication">
          {/* <div className="thumbnail">
            <img src={pub.thumbnail} alt="Thumbnail" />
          </div> */}
          <div className="details">
            <h2 className="title">{pub.title}</h2>
            <p className="authors">Authors: {pub.authors}</p>
            {pub.abstract && <p className="abstract">{pub.abstract}</p>}
            {pub.conference && (
              <p className="conference">Accepted at: <strong>{pub.conference}</strong></p>
            )}
            <div className="links">
              {pub.paperLink && (
                <a
                  href={pub.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  Paper
                </a>
              )}
              {pub.codeLink && (
                <a
                  href={pub.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  Code
                </a>
              )}
              {pub.demoLink && (
                <a
                  href={pub.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  Demo
                </a>
              )}
              {pub.presentationLink && (
                <a
                  href={pub.presentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  Presentation
                </a>
              )}
              {pub.poster && (
                <a
                  href={pub.poster}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  Poster
                </a>
              )}
              {pub.citation && (
                <a
                  href={pub.citation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  Cite
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default PublicationDetails;
