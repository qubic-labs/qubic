import React, { useState } from "react";
import "./publicationDetails.css";

const projects = [
  {
    name: "Culturally Yours",
    publications: [
      {
        title: "Reading between the Lines: Can LLMs Identify Cross-Cultural Communication Gaps?",
        authors: "Sougata Saha*, Saurabh Kumar Pandey*, Harshit Gupta, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2502.09636",
        codeLink: "https://github.com/sougata-ub/reading_between_lines",
        conference: "NAACL, 2025 (Main)"
      },
      {
        title: "Meta-Cultural Competence: Climbing the Right Hill of Cultural Awareness",
        authors: "Sougata Saha, Saurabh Kumar Pandey, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2502.09637",
        conference: "NAACL, 2025 (Main)"
      },
      {
        title: "CULTURALLY YOURS: A Reading Assistant for Cross-Cultural Content",
        authors: "Saurabh Kumar Pandey, Harshit Budhiraja, Sougata Saha, Monojit Choudhury",
        paperLink: "https://aclanthology.org/2025.coling-demos.21.pdf",
        codeLink: "https://github.com/skp1999/CULTURALLY_YOURS",
        demoLink: "https://www.youtube.com/watch?v=OVbnilgHaCU",
        conference: "COLING - Systems & Demonstrations, 2024"
      },
      {
        title: "Cultural Conditioning or Placebo? On the Effectiveness of Socio-Demographic Prompting",
        authors: "Sagnik Mukherjee*, Muhammad Farid Adilazuarda*, Sunayana Sitaram, Kalika Bali, Alham Fikri Aji, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2406.11661",
        // citation: "https://arxiv.org/abs/2406.11661",
        conference: "EMNLP, 2024 (Main)",
      },
      {
        title: "Towards Measuring and Modeling “Culture” in LLMs: A Survey",
        authors: "Muhammad Farid Adilazuarda*, Sagnik Mukherjee*, Pradhyumna Lavania, Siddhant Singh, Ashutosh Dwivedi, Alham Fikri Aji, Jacki O’Neill, Ashutosh Modi, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2403.15412v1",
        // citation: "https://arxiv.org/abs/2403.15412",
        conference: "EMNLP, 2024 (Main)",
      },
      {
        title:'"They are uncultured": Unveiling Covert Harms and Social Threats in LLM Generated Conversations',
        authors: "Preetam Prabhu Srikar Dammu, Hayoung Jung, Anjali Singh, Monojit Choudhury, Tanushree Mitra",
        paperLink: "https://arxiv.org/pdf/2405.05378",
        conference: "EMNLP, 2024 (Main)"
      },
      {
        title: "The Zeno's Paradox of Low-Resource Languages",
        authors: "Hellina Hailu Nigatu, Atnafu Lambebo Tonja, Benjamin Rosman, Thamar Solorio, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2410.20817",
        conference: "EMNLP, 2024 (Main)"
      },
    ],
  },
  {
    name: "Missing Melodies",
    publications: [
      {
        title: "Missing Melodies: AI Music Generation and its \"Nearly\" Complete Omission of the Global South",
        authors: "Atharva Mehta, Shivam Chauhan, Monojit Choudhury",
        paperLink: "https://arxiv.org/abs/2412.04100",
        // citation: "https://arxiv.org/src/2412.04100",
        demoLink: "https://github.com/atharva20038/aimusicexamples.github.io",
      },
      {
        title: "Music for All : Representational bias and cross-cultural adaptability in music generation models.",
        authors: "Atharva Mehta, Shivam Chauhan, Amirbek Djanibekov, Atharva Kulkarni, Gus Xia, Monojit Choudhury",
        paperLink: "https://arxiv.org/abs/2502.07328",
        // citation: "https://arxiv.org/src/2502.07328",
        conference: "NAACL, 2025 (Findings)",
        codeLink: "https://github.com/atharva20038/music4all/tree/main?tab=readme-ov-file",
        hfLink: "https://huggingface.co/collections/athi180202/music4all-67a0778b5b562859c2a9a8e1"
      }
    ],
  }, 
  {
    name: "All Publications",
    publications: [
      {
        title: "Missing Melodies: AI Music Generation and its \"Nearly\" Complete Omission of the Global South",
        authors: "Atharva Mehta, Shivam Chauhan, Monojit Choudhury",
        paperLink: "https://arxiv.org/abs/2412.04100",
        // citation: "https://arxiv.org/src/2412.04100",
        demoLink: "https://github.com/atharva20038/aimusicexamples.github.io",
      },
      {
        title: "Music for All : Representational bias and cross-cultural adaptability in music generation models.",
        authors: "Atharva Mehta, Shivam Chauhan, Amirbek Djanibekov, Atharva Kulkarni, Gus Xia, Monojit Choudhury",
        paperLink: "https://arxiv.org/abs/2502.07328",
        // citation: "https://arxiv.org/src/2502.07328",
        conference: "NAACL, 2025 (Findings)",
        codeLink: "https://github.com/atharva20038/music4all/tree/main?tab=readme-ov-file"
      },
      {
        title: "All languages matter: Evaluating lmms on culturally diverse 100 languages",
        authors: "Ashmal Vayani, Dinura Dissanayake, Hasindri Watawana, Noor Ahsan, Nevasini Sasikumar, Omkar Thawakar, Henok Biadglign Ademtew, Yahya Hmaiti, Amandeep Kumar, Kartik Kuckreja, Mykola Maslych, Wafa Al Ghallabi, Mihail Mihaylov, Chao Qin, Abdelrahman M Shaker, Mike Zhang, Mahardika Krisna Ihsani, Amiel Esplana, Monil Gokani, Shachar Mirkin, Harsh Singh, Ashay Srivastava, Endre Hamerlik, Fathinah Asma Izzati, Fadillah Adamsyah Maani, Sebastian Cavada, Jenny Chim, Rohit Gupta, Sanjay Manjunath, Kamila Zhumakhanova, Feno Heriniaina Rabevohitra, Azril Amirudin, Muhammad Ridzuan, Daniya Kareem, Ketan More, Kunyang Li, Pramesh Shakya, Muhammad Saad, Amirpouya Ghasemaghaei, Amirbek Djanibekov, Dilshod Azizov, Branislava Jankovic, Naman Bhatia, Alvaro Cabrera, Johan Obando-Ceron, Olympiah Otieno, Fabian Farestam, Muztoba Rabbani, Sanoojan Baliah, Santosh Sanjeev, Abduragim Shtanchaev, Maheen Fatima, Thao Nguyen, Amrin Kareem, Toluwani Aremu, Nathan Xavier, Amit Bhatkal, Hawau Toyin, Aman Chadha, Hisham Cholakkal, Rao Muhammad Anwer, Michael Felsberg, Jorma Laaksonen, Thamar Solorio, Monojit Choudhury, Ivan Laptev, Mubarak Shah, Salman Khan, Fahad Khan",
        paperLink: "https://arxiv.org/pdf/2411.16508",
        conference: "CVPR 2025 (Highlight Paper)"
      },
      {
        title: "Reading between the Lines: Can LLMs Identify Cross-Cultural Communication Gaps?",
        authors: "Sougata Saha*, Saurabh Kumar Pandey*, Harshit Gupta, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2502.09636",
        codeLink: "https://github.com/sougata-ub/reading_between_lines",
        conference: "NAACL, 2025 (Main)"
      },
      {
        title: "Meta-Cultural Competence: Climbing the Right Hill of Cultural Awareness",
        authors: "Sougata Saha, Saurabh Kumar Pandey, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2502.09637",
        conference: "NAACL, 2025 (Main)"
      },
      {
        title: "SMAB: MAB based word Sensitivity Estimation Framework and its Applications in Adversarial Text Generation",
        authors: "Saurabh Kumar Pandey*, Sachin Vashistha*, Debrup Das,Somak Aditya,Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2502.07101",
        conference: "NAACL, 2025 (Main)",
      },
      {
        title: "CULTURALLY YOURS: A Reading Assistant for Cross-Cultural Content",
        authors: "Saurabh Kumar Pandey, Harshit Budhiraja, Sougata Saha, Monojit Choudhury",
        paperLink: "https://aclanthology.org/2025.coling-demos.21.pdf",
        codeLink: "https://github.com/skp1999/CULTURALLY_YOURS",
        demoLink: "https://www.youtube.com/watch?v=OVbnilgHaCU",
        conference: "COLING - Systems & Demonstrations, 2024"
      },
      {
        title: "The promise and pitfalls of generative AI",
        authors: "Monojit Choudhury, Zohar Elyoseph, Nathanael J. Fast, Desmond C. Ong, Elaine O. Nsoesie & Ellie Pavlick",
        paperLink: "https://doi.org/10.1038/s44159-024-00402-0",
        conference: "Nature Reviews Psychology"
      },
      {
        title: "Libra-Leaderboard: Towards Responsible AI through a Balanced Leaderboard of Safety and Capability",
        authors: "Haonan Li, Xudong Han, Zenan Zhai, Honglin Mu, Hao Wang, Zhenxuan Zhang, Yilin Geng, Shom Lin, Renxi Wang, Artem Shelmanov, Xiangyu Qi, Yuxia Wang, Donghai Hong, Youliang Yuan, Meng Chen, Haoqin Tu, Fajri Koto, Tatsuki Kuribayashi, Cong Zeng, Rishabh Bhardwaj, Bingchen Zhao, Yawen Duan, Yi Liu, Emad A Alghamdi, Yaodong Yang, Yinpeng Dong, Soujanya Poria, Pengfei Liu, Zhengzhong Liu, Xuguang Ren, Eduard Hovy, Iryna Gurevych, Preslav Nakov, Monojit Choudhury, Timothy Baldwin",
        paperLink: "https://arxiv.org/pdf/2412.18551",
      },
      {
        title: "Towards Measuring and Modeling “Culture” in LLMs: A Survey",
        authors: "Muhammad Farid Adilazuarda*, Sagnik Mukherjee*, Pradhyumna Lavania, Siddhant Singh, Ashutosh Dwivedi, Alham Fikri Aji, Jacki O’Neill, Ashutosh Modi, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2403.15412v1",
        // citation: "https://arxiv.org/abs/2403.15412",
        conference: "EMNLP, 2024 (Main)",
      },
      {
        title: "Cultural Conditioning or Placebo? On the Effectiveness of Socio-Demographic Prompting",
        authors: "Sagnik Mukherjee*, Muhammad Farid Adilazuarda*, Sunayana Sitaram, Kalika Bali, Alham Fikri Aji, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2406.11661",
        // citation: "https://arxiv.org/abs/2406.11661",
        conference: "EMNLP, 2024 (Main)",
      },
      {
        title:'"They are uncultured": Unveiling Covert Harms and Social Threats in LLM Generated Conversations',
        authors: "Preetam Prabhu Srikar Dammu, Hayoung Jung, Anjali Singh, Monojit Choudhury, Tanushree Mitra",
        paperLink: "https://arxiv.org/pdf/2405.05378",
        conference: "EMNLP, 2024 (Main)"
      },
      {
        title: "The Zeno's Paradox of Low-Resource Languages",
        authors: "Hellina Hailu Nigatu, Atnafu Lambebo Tonja, Benjamin Rosman, Thamar Solorio, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2410.20817",
        conference: "EMNLP, 2024 (Main)"
      },
      {
        title: "Evaluating Large Language Models for Health-related Queries with Presuppositions",
        authors: "Navreet Kaur, Monojit Choudhury, Danish Pruthi", 
        paperLink: "https://arxiv.org/pdf/2312.08800",
        conference: "ACL, 2024 (Findings)"
      },
      {
        title: "Ethical reasoning and moral value alignment of LLMs depend on the language we prompt them in",
        authors: "Utkarsh Agarwal, Kumar Tanmay, Aditi Khandelwal, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2404.18460",
        conference: "LREC-COLING, 2024 (Main)"
      },
      {
        title: "From Human Judgements to Predictive Models: Unravelling Acceptability in Code-Mixed Sentences",
        authors: "Prashant Kodali, Anmol Goel, Likhith Asapu, Vamshi Krishna Bonagiri, Anirudh Govil, Monojit Choudhury, Manish Shrivastava, Ponnurangam Kumaraguru",
        paperLink: "https://arxiv.org/pdf/2405.05572"
      },
      {
        title: "Do moral judgment and reasoning capability of llms change with language? A study using the multilingual defining issues test",
        authors: "Aditi Khandelwal, Utkarsh Agarwal, Kumar Tanmay, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2402.02135",
        conference: "EACL, 2024 (Main)"
      },
      {
        title: "Generative AI has a language problem",
        authors: "Monojit Choudhury",
        paperLink: "https://www.nature.com/articles/s41562-023-01716-4",
        journal: "Nature Human Behavior"
      },
      {
        title: "Ethical reasoning over moral alignment: A case and framework for in-context ethical policies in LLMs",
        authors: "Abhinav Rao, Aditi Khandelwal, Kumar Tanmay, Utkarsh Agarwal, Monojit Choudhury",
        paperLink: "https://arxiv.org/pdf/2310.07251",
        conference: "EMNLP, 2023 (Findings)"
      }
    ],
  }, 
];

const ProjectsTab = ({bgColor}) => {
  const [selectedProject, setSelectedProject] = useState(projects[0].name);
  console.log(bgColor);
  return (
    <div id="projects-container">
      {/* <h1>Publications</h1> */}
      
      {/* Tabs Navigation */}
      <div className="tabs">
        {projects.map((project) => (
          <button
            key={project.name}
            className={`tab-button ${selectedProject === project.name ? "active" : ""}`}
            style={{backgroundColor:  `${selectedProject === project.name ? "#80350e" : ""}`}}
            onClick={() => setSelectedProject(project.name)}
          >
            {project.name}
          </button>
        ))}
      </div>

      {/* Display Publications of Selected Project */}
      <div className="publications">
        {projects
          .find((project) => project.name === selectedProject)
          .publications.map((pub, index) => (
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
                      style={{backgroundColor:  bgColor}}
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
                      style={{backgroundColor:  bgColor}}
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
                      style={{backgroundColor:  bgColor}}
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
                      style={{backgroundColor:  bgColor}}
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
                      style={{backgroundColor:  bgColor}}
                    >
                      Poster
                    </a>
                  )}
                  {pub.hfLink && (
                    <a
                      href={pub.poster}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                      style={{backgroundColor:  bgColor}}
                    >
                      HuggingFace
                    </a>
                  )}
                  {pub.citation && (
                    <a
                      href={pub.citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                      style={{backgroundColor:  bgColor}}
                    >
                      Cite
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectsTab;
