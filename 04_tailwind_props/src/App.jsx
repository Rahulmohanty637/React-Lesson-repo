import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      id: 1,
      name: "Anirban Bhattacharya",
      designation: "Assistant Professor",
      department: ["CSE"],
      doj: "2/19/2024",
      bio: `16 years industry experience and 4 years teaching experience `,
      teaching: [],
      research: ["Operating System "],
      awwards: [],
      workshops: [],
      responsibilities: [],
      qualification: ["MSc.", "MCA", "MTech."],
      scholar: "",
      patents: [],
      efprojects: "",
      consultproject: "",
      industryproject: [],
      phdcontinue: "",
      phdcompleted: "",
      imageUrl:
        "https://drive.google.com/open?id=13yFXQlMV2tEpvMtLtaesKgR0_ZnNsf18",
    },
    {
      id: 2,
      name: "Ankita Biswal",
      designation: "Assistant Professor",
      department: ["CSE"],
      doj: "7/17/2023",
      bio: `After Completing Mtech from Odisha University of Technology and Research, Bhubaneswar (former College of Engineering and Technology) joined at UNIITECH Residential college as Lecturer. After that I joined at Ramadevi University where I could learn about methodologies of and published "Human Activity Recognition Using Machine Learning: A Review" at ICACIE 2020 conference. Then joined at BJB junior College as guest faculty in BSc ITM department. I joined at Centurion University on 17th of July 2023. `,
      teaching: [
        "Database Cluster Administration and Security",
        "Data Structure",
        "Software Engineering",
        "Operating System",
        "Information Security",
      ],
      research: ["Machine Learning"],
      awwards: [],
      workshops: [],
      responsibilities: [],
      qualification: ["Mtech in CSE"],
      scholar: "https://scholar.google.com/citations?user=SyDv_AEAAAAJ&hl=en",
      patents: [],
      efprojects: "",
      consultproject: "",
      industryproject: [],
      phdcontinue: "",
      phdcompleted: "",
      imageUrl:
        "https://drive.google.com/open?id=1I13o4GjVZUCeHDzrxeBHQFLhkc9AWugY",
    },
    {
      id: 3,
      name: "G V L Priyansa",
      designation: "Teaching Assistant",
      department: ["CSE"],
      doj: "11/11/2022",
      bio: `I am MCA graduate, currently preparing for PhD.`,
      teaching: [
        "Operating System",
        "Computer Networks",
        "Gaming and Immersive Learning Domain subjects",
      ],
      research: ["Information Security"],
      awwards: [],
      workshops: [],
      responsibilities: [],
      qualification: ["MCA"],
      scholar: "",
      patents: [],
      efprojects: "",
      consultproject: "",
      industryproject: [],
      phdcontinue: "",
      phdcompleted: "",
      imageUrl:
        "https://drive.google.com/open?id=1D95E1hXDxI-LME3KP63I0DL0Uv4ka9Em",
    },
    {
      id: 4,
      name: "Adyasha Swain",
      designation: "Assistant Professor",
      department: ["CSE"],
      doj: "9/15/2023",
      bio: `After earning a master’s degree in Computer Science and Engineering with a specialization in Distributed Cloud Systems from the Luleå University of Technology in Sweden. I am currently involved on the academic front, as an Assistant Professor for Engineering students at Computer Science Department at Centurion University of Technology and Management. I had an inclination toward doctoral studies; therefore, I spent two years working on a research project, Digital Occupancy Assessment for Lighting Evaluation (DOALE) that involved the conception of a Digital Twin (DT) solution in an intelligent built environment for evaluating lighting characteristics from the perspective of its occupants at Jönköping University, Sweden. `,
      teaching: ["Cloud Practioner", "IT Infrastructure and Management"],
      research: ["Cloud Computing And Internet of Things"],
      awwards: [],
      workshops: [],
      responsibilities: [],
      qualification: ["MTech."],
      scholar:
        "https://www.diva-portal.org/smash/resultList.jsf?dswid=-2458&language=en&searchType=SIMPLE&query=adyasha+swain&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all",
      patents: [],
      efprojects: "",
      consultproject: "",
      industryproject: ["3D Assets development "],
      phdcontinue: "",
      phdcompleted: "",
      imageUrl:
        "https://drive.google.com/open?id=1YFGdBcXzFQ4eT6WKbtikVumx6ye3MnBP",
    },
    {
      id: 5,
      name: "Dr. Sunil Kumar Mohapatra",
      designation: "Assistant Professor",
      department: ["CSE"],
      doj: "6/1/2022",
      bio: `Dr. Sunil Kumar Mohapatra has awarded Ph.D. degree in Computer Science and Engineering from KIIT deemed to be University, Bhubaneswar, Odisha in the year 2023. He has obtained an M.Tech degree in Computer Science and Engineering from C.V. Raman College of Engineering, Bhubaneswar under Biju Patnaik University of Technology, Rourkela, Odisha in the year 2013.He has completed B.Tech degree in Computer Science and Engineering from Seemanta Engineering College, Odisha under Biju Patnaik University of Technology, Rourkela, Odisha in 2009. He was working as a faculty in the department of CSE at Odisha University of Technology & Research (formerly College of Engineering & Technology), Bhubaneswar from July 2018 to December 2021, Assistant Professor at C.V. Raman College of Engineering, Bhubaneswar from May 2014 to June 2018 and Tenure lecturer at C.V. Raman College of Engineering, Bhubaneswar from November 2010 to April 2014. He has been working as an assistant professor in the Computer Science & Engineering department at Centurion University of Technology and Management, Bhubaneswar since 1st June 2022. He has 12 years of teaching experience and is carrying out research in various aspects of WSN, IoT, machine learning, and data science. `,
      teaching: [
        "Mathematics for Machine Learning",
        "Machine Learning for Predictive Analysis",
        "Machine Learning Using Python",
        "Wireless Networks",
        "Mathematical Problem Solving",
        "Data Structure",
        "Programming in C",
        "Design and Analysis of Algorithms",
        "Computer Graphics",
        "System Programming",
        "Advanced Operating System",
      ],
      research: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Data Science",
      ],
      awwards:
        ["Award in Recognition of “Good Academic Performance” During the Years 2012-2013 "],
      workshops: [
        `Actively participated and completed FDP on “Satellite Remote Sensing of Atmosphere” THIS ONLINE COURSE WAS CONDUCTED BY INDIAN INSTITUTE OF REMOTE SENSING, DEHRADUN, DURING 04-07-2022 to 08-07-2022. (Concerned IIRS Nodal Centre- Centurion University of Technology and Management, Odisha).`,
        `Actively participated and completed FDP on “Machine Learning to Deep Learning: A Journey for Remote Sensing Data Classification” THIS ONLINE COURSE WAS CONDUCTED BY INDIAN INSTITUTE OF REMOTE SENSING, DEHRADUN, DURING 04-07- 2022 to 08-07-2022. (Concerned IIRS Nodal Centre- Centurion University of Technology and Management, Odisha).`,
        `Actively participated and completed the International Conference on Distributed Computing and Intelligent Technology from 19th to 23rd January 2022 at KIIT Deemed to be University, Bhubaneswar.`,
        `Successfully participated & and completed AICTE Training and Learning (ATAL) Academy Online Elementary FDP on "Emerging Techniques and Applications in IoT" from 09/08/2021 to 13/08/2021 at VEER SURENDRA SAI UNIVERSITY OF TECHNOLOGY.`,
        `Actively participated in A.I.C.T.E Sponsored Short Term Training Programme (STTP) on “Data Analytics and Database Management in IoT” organized by the Department of E.T.C, Trident Academy of Technology, from 31st May 2021 to 05th June 2021.`,
        `Bhubaneswar, Odisha. Actively participating in FDP on Recent Advances in Computational Techniques (RACT) organized online by the Department of Information echnology, College of Engineering and Technology, Bhubaneswar under TEQIP-III from 19th September to 23rd September 2020.`,
        `Actively participated in a webinar on “Artificial Intelligence for COVID-19” on 30th May 2020 organized by DMI College of Engineering, Chennai.`,
        `Attended Four Days National Workshop Cum FDP on “DATA ANALYTICS USING HADOOP and SPARK” (Hands-on) Jointly organized by JNTU CEK, Kakinada, and CET, Bhubaneswar with TEQIP- III 7th to 10th February 2020.`,
        `Attended Five Days FDP on “ICT TOOLS FOR TEACHING LEARNING PROCESS & INSTITUTES” Organized by Electronics & ICT Academy, MNIT Jaipur from 13th to 20th. January 2020.`,
      ],
      responsibilities: ["BSC-IT Coordinator", "IQAC coordinator Dept. of CSE"],
      qualification: ["PhD"],
      scholar: "https://scholar.google.co.in/citations?user=UA5BrPYAAAAJ&hl=en",
      patents:
        ["Real-time Crop Recommendation Framework Based on Soil Quality and Environmental Condition Using Machine Learning Model"],
      efprojects: "",
      consultproject: "",
      industryproject: [""],
      phdcontinue: "",
      phdcompleted: "",
      imageUrl:
        "https://drive.google.com/open?id=1Ijy1DeMFGfESZYnvt0PqTx2IeUEWaPIL",
    },
    {
      id: 6,
      name: "Dr. Satya Narayan Sahu",
      designation: "Assistant Professor",
      department: ["Biotechnology"],
      doj: "10/3/2023",
      bio: `Dr. Satya Narayan Sahu, presently working as Assistant Professor, in School of Biotechnology, Centurion University of Technology and Management, Bhubaneswar. He has a Ph.D. in Life Sciences, with specialization Bioinformatics from Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha. He has 6 years of research experience in the field of Computational Biology and data analysis. His education includes Msc. Bioinformatics from OUAT, Bhubaneswar and Bsc. Bioinformatics from BJB autonomous college, Bhubaneswar. His research area basically focused on Computer aided drug designing (CADD), Water mediate molecular interaction analysis of proteins and small molecules using Bioinformatics technique, Molecular Docking and molecular dynamic simulation. `,
      teaching: ["Bioinformatics", "Biochemistry"],
      research: ["Drug design"],
      awwards: [],
      workshops: [],
      responsibilities: [],
      qualification: ["PhD Life science"],
      scholar: "https://scholar.google.com/citations?hl=en&user=Pju1O1sAAAAJ",
      patents: [],
      efprojects: "",
      consultproject: "",
      industryproject: [""],
      phdcontinue: "",
      phdcompleted: "",
      imageUrl:
        "https://drive.google.com/open?id=1P5WXfyj2khzR2l8INmLodz9C3wSejxpg",
    },
    {
      id: 7,
      name: "Dr. Debashree Debadatta Behera",
      designation: "Assistant Professor",
      department: ["Mechanical Engineering department"],
      doj: "3/1/2013",
      bio: `Dr. Debashree Debadatta Behera is currently working as an Assistant Professor in the Department of Mechanical Engineering, Centurion University of Technology and Management, Odisha as well as pursuing Ph.D.  She has completed B.Tech in Mechanical engineering, C.V. Raman college of Engineering, Odisha, 2008. She had completed M. Tech in Thermal Engineering, Centurion University of Technology and Management, Odisha, India, 2016. She has completed Ph.D. in Mechanical engineering, Centurion University of Technology and Management, Odisha, India, 2023. She had qualified assessment test under Skill Council for Green jobs for Suryamitra and Master Training Programme in Domain Skills and Platform Skills. Her research interests include Renewable Energy. She has done 32 number of publication in national/international journals publications, 13 no conferences publications, 6 no of books, 2 book chapter and 8 numbers of patent publications. She has received 6 no of awards. She has 12.5 years of teaching experience.`,
      teaching: [
        "Fluid mechanics with Finite volume method",
        "Hydraulic machinery",
        "Heat Transfer with fdm/fvm",
        "Thermodynamics",
        "Domain and Skill Subject expertise in Renewable energy Application and Solar Thermal system",
      ],
      research: [
        "Solar drying system",
        "Solar thermal system",
        "Renewable energy system",
      ],
      awwards: [
        "Received “Best Paper Award 2023” as a Co-Author from Third International Conference on Sustainable Energy, Environment and Green Technologies (ICSEEGT 2023)",
        "Received “Provost Best Thesis Award”, 2023.",
        "Nominated as Odisha corporate Foundation Advisor for Entrepreneurs Development- Solar & renewable.",
        "Reviewer for SCIE indexed Journal “HELIYON”.",
        "Received “Incentive Award 2022 by CUTM” in the category of Performer.",
        "Received “Certificate of Excellence as Women Researcher Award” for the contribution and honorable achievement in Innovative Research given under the seal of Scifax, Science father in Feb 2022.",
        "Received “Certificate of Excellence by CUTM”  for granted Australian Patent.",
        "A certified Master Trainer “Skill Council for Green jobs, NSDC”,RENAC, Trainer Certificate no: SGJ/Q0101/FT-914",
        "A certified Trainer in “Skill Council for Green Jobs”, Trainer Certificate no: SGJ/ Q0101/FT-52, SGJ/Q0102/FT-52 and SGJ/Q0103/FT-52",
      ],
      workshops: [
        `Attended a Five-day Faculty Development Program on “Advances in Mechanical Engineering Research (AMER)” held from 24-28 May 2022 Organized by Centurion University of Technology and Management, Paralakhemundi, Odisha, India.`,
        `Invited to participate in a conference  on “Renewable Energy in Odisha: A Policy Dialogue” on August 23, 2022 in Bhubaneswar, Odisha  organized by  International Forum for Environment, Sustainability and Technology (iFOREST)",
      "Conducted Webinar on Greening India’s Power Sector: Opportunities & Challenges" on 26th May 2023 from Research Center Smart Infrastructure`,
        `,Participated  along Students  in Make in Odisha Conclave in 2022`,
        `Participated along students in Model Exhibition Utkal Mandap and guided student for displaying project, 2023`,
        `Participated and received certificate on successful completion of the 5-day online ATAL FDP on 5-day online ATAL FDP on Green Technology & Sustainability Engineering from 1- 5 July, 2021.`,
        `Attended a Five-day Faculty Development Program on “Advances in Mechanical Engineering Research (AMER)” held from 24-28 May 2022 Organized by Centurion University of Technology and Management, Paralakhemundi, Odisha, India.`,
        `Invited to participate in a conference  on “Renewable Energy in Odisha: A Policy Dialogue” on August 23, 2022 in Bhubaneswar, Odisha  organized by  International Forum for Environment, Sustainability and Technology (iFOREST)`,
        `Participated  along Students  in Make in Odisha Conclave in 2022`,
        `Participated along students in Model Exhibition Utkal Mandap and guided student for displaying project, 2023`,
        `Organized a Webinar on “Sustainable Development and Clean Energy” on 19th May 2021.`,
        `ATAL FDP Attended on "Computational Fluid Dynamics – A Potential Engineering Design Tool" from 2021-07-26 to2021-07-30`,
        `Training on A PV Rooftop Quality and Performance Initiative Virtual Training Programme for DISCOMs and EPCs by RENAC , NSDC`,
        `Participated and received certificate on successful completion of the 5-day online ATAL FDP on Computational Fluid Dynamics – A Potential Engineering Design Tool" from 2021-07-26 to 2021-07-30`,
        `Participated and received certificate on successful completion of the 5-day online FDP on "Modern Innovations and Development in Renewable Energy Technology" from 2021-7-12 to 2021-7-16 at University of Lucknow.`,
        `Participated and received certificate on successful completion of the 5-day online FDP on “Energy Engineering" from 2020-10-5 to 2020-10-9 at JNTUA College of Engineering Kalikiri.`,
        `Participated and received certificate on successful completion of the 5-day online FDP on Solar Energy: Technologies and Applications" from 2020-9-21 to 2020-9-25 at Jyothi Engineering College.`,
        `Attended a 5-day FDP on Green Technology for Enhancing Livelihoods organized by Centurion University of Technology and Management from 31 May to 4 June 2021.`,
        `Attended and received certificate 2 days certificate course on PV SYST under Skill council of Green Job on 28-09-2020.`,
        `Attended and received certificate 5 days fdp on “Renewable Energy Application in Smart Grid, Micro Grid and EVs (REASGMGEV-2020) from July 12-17, 2020 organized by GMR Institute of Technology.`,
        `Attended and received certificate "Green Energy Development: Supporting Technologies and Environmental Aspects” organized by REVA University IEEE PES Student Branch Chapter in association with IEEE PES Bangalore Chapter on One Week Online Workshop (19th April -23rd April 2021)`,
        `Attended a webinar on Linking Forests and Kitchens: Sustainable Energy and Climate Change organized by Greenway Grameen Infra Private Limited on 5 June 2021.`,
      ],
      responsibilities: ["IQAC and NAAC Coordinator"],
      qualification: [
        "PhD in Mechanical Engineering",
        "MTech. Thermal Engineering",
        "BTech. in Mechanical",
      ],
      scholar:
        "https://scholar.google.com, WOS ID: https://www.webofscience.com/wos/author/record/ADD-9215-2022/citations?user=RRulnZcAAAAJ&hl=en&oi=ao, Scopus ID: https://www.scopus.com/authid/detail.uri?authorId=57211600943",
      patents: [
        `Received Permanent Patent Number 1181/KOL/2015A, with International Classification Number F24J2/00 for an invention of Solar Dryer. It has been published in the Patent Office Journal dated 4th December 2015. (Not Granted)`,
        `Received Permanent Patent Number 201631029624A, with International Classification Number A01G9/24 for an invention of Solar Drip Irrigation System. It has been published in the Patent Office Journal dated 7th Oct 2016. (Not Granted)`,
        `Received Permanent Patent Number 201631029623A, with International Classification Number F26B3/28 for an invention of Fluid Heating Solar Dehydrator. It has been published in the Patent Office Journal dated 7th Oct 2016. (Not Granted)`,
        `Received Permanent Patent Number 201731043329, with International Classification Number A47J for an invention of Low Smoke Portable Combustion Furnace. It has been published in the Patent Office Journal dated 7th June 2019. (Not Granted)`,
        `Received an Innovation Australian Patent as granted titled “Solar Assisted IOT based Automatic Vertical Medicinal Plant cultivation of critically endangered plant nardostachys jatamansi”, Permanent Patent Number 2021103371, March 2022.`,
        `Received an Indian Patent as granted titled “POWDER MANUFACTURING UNIT”, Permanent Patent Number 377791-001, January 2023.`,
        `Received an Indian as granted titled “SOLAR OPTICAL DESALINATION UNIT”, Permanent Patent Number 368071-001, March 2023.`,
        `Received an Indian as granted titled “Solar Powered Device to Track Nutrients in Agri Water”, Permanent Patent Number 388845-001, March 2023`,
      ],
      efprojects: "",
      consultproject: "",
      industryproject: [
        "MOU Signed CUTM and SSPTL for commercialization of Research project solar dryer, solar cooker",
      ],
      phdcontinue: "",
      phdcompleted: "",
      imageUrl:
        "https://drive.google.com/open?id=1c3l1KH9zX9r5Wafvx9ffEWe4LgbJGhOM",
    },
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
