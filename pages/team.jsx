import Head from "next/head";
import Hero from "../components/Hero";
import TeamCard from "../components/TeamCard";

export default function Team() {
  const teamHero = {
    title: "Team members",
    tagline: "Skilled and experienced members in the field",
    img: {
      url: "/images/team.jpg",
      desc: "Our team members."
    }
  };

  const teamMembers = [
    {
      prefix: "",
      name: "Mohammad Jaber",
      suffix: "",
      position: "Executive Director of Halal Alaqsa",
      photoUrl: "/images/persons/mohammad_jaber.jpeg",
      cv: {
        "Place of birth": ["Jerusalem - Palestine"],
        Education: [
          "Project management certificate from Anwar college – Jerusalem",
          "Diploma in Islamic Sharia Anata- Jerusalem",
          "Bsc. In industrial engineering in production and IT, Beersheba university "
        ],
        Work: [
          "Branch manager of largest communication company in the country",
          "Teacher of mathematics and languages",
          "Vice manager of the community center",
          "Imam and Khatib of Ozair mosque in Abu Ghosh Jerusalem (volunteer)"
        ],
        "Additional Courses": [
          "Various Islamic courses inside the country and abroad",
          "Course in Khitaba (Friday sermon)",
          "Various conferences",
          "Manager of Hajj and Umra trips Abu Ghosh Jerusalem"
        ]
      }
    },
    {
      prefix: "Mufti",
      name: "Husam Al-Din bin Musa Muhammad bin Afana",
      suffix: "",
      position: "Head of Advisory Board",
      photoUrl: "/images/persons/husam_afaneh.bmp",
      cv: {
        "Place of birth": ["Jerusalem - Palestine"],
        "Academic degrees": [
          "BA in Sharia with a grade of “very good” with honors from the College of Sharia, Islamic University - Madinah / Saudi Arabia in 1978.",
          "MA in Fiqh & Usool, with a grade of “very good”, from the College of Sharia - Umm Al-Qura University / Saudi Arabia in 1982.",
          "PhD in Fiqh & Usool with a grade of “very good”, from the College of Sharia, Umm Al-Qura University, Saudi Arabia, in 1985."
        ],
        "Work experience": [
          "Assistant Professor, College of Da`wah and Religion, Al-Quds University, 1985-1987.",
          "Assistant Professor, Department of Islamic Culture, College of Education, King Saud University, Riyadh, Saudi Arabia, 1988-1991.",
          "Assistant Professor, College of Da`wah and Religion, Al-Quds University, 1991-1997.",
          "Associate Professor, College of Da`wah and Religion, 1997-2004.",
          "Associate Professor, College of Da`wah and Religion, 1997-2004.",
          "Former Head of the Department of Fiqh and Legislation / College of Da`wa and Religion / Al-Quds University.",
          "Former Coordinator of the Master's Program in Fiqh, Legislation and Usool / College of Da’wah and Religion / Al-Quds University.",
          "Teaching courses in Fiqh and Usool at An-Najah National University - Nablus for postgraduate students, 1992.",
          "Teaching at the College of Da`wah and Islamic Studies in Umm al-Fahm, 1991-1994.",
          "Teaching scientific research courses and semantics and the explanation of the Personal Status Law and Ijtihad to master's students, the Higher Judicial Institute, Hebron University, 1997-1999.",
          "Member of the Academic Council of Al-Quds University from 1995 to 1999.",
          "Member of the editorial board of Huda Al-Islam magazine, 1986 – present.",
          "Head of the Sharia Supervisory Board of the Palestinian Bait Al-Mal Company (a company that deals in accordance with the provisions of Islamic transactions) from 1994 until 2004, when the company ceased to operate.",
          "Head of the Sharia Supervisory Board of Al-Aqsa Islamic Bank from 1998 until the sale of the bank to the Palestine Islamic Bank in 2010.",
          "Former coordinator of the Master's Program in Contemporary Islamic Studies, Al-Quds University.",
          "Former member of the Scientific Research Council at Al-Quds University.",
          "Former member of the Graduate Studies Council at Al-Quds University.",
          "Former member of the Shariah Supervisory Board of the Takaful Islamic Insurance Company.",
          "Chairman of the Sharia Supervisory Board of the Palestinian Islamic Bank from February 2009 to 2019.",
          "Member of the Shariah Supervisory Board of the Palestinian Islamic Bank from 2019 to August 2021.",
          "Head of the Sharia Supervisory Board of Tamkeen Company for Insurance with an Islamic perspective.",
          "Former coordinator of the Ph.D. Program Fiqh & Usool  / College of Da`wah and Religion / Al-Quds University.",
          ""
        ],
        "": [
          "It is worth mentioning that Dr Afaneh is one of the most prominent scholars in Palestine, having written dozens of books in many subjects in Fiqh and other subjects in Islam, these books include the well-known Yasoloonalk series with 27 parts of the series already been published.  Also supervising dozens of masters and Doctoral thesis.",
          "He also gives many lessons in centers and mosques all over towns in the West Bank and Jerusalem."
        ]
      }
    },
    {
      prefix: "Dr.",
      name: "Inrahim Abdallah Afaneh",
      suffix: "P.h.d. in Food Engineering",
      position: "Ingredients Advisor",
      photoUrl: "/images/persons/ibrahim_afaneh.jpeg",
      cv: {
        "Place of birth": ["Saudi Arabia"],
        Education: [
          "1998-2001	PhD. Food Engineering/ Chemical Engineering school (study the heat and mass transfer processes to improve the technology of fried foods). Queens University of Belfast, U.K."
        ],
        Employment: [
          "2018-2020 Dean of Faculty of Engineering ",
          "2014 Awarded the associated professorship in Food engineering",
          "2007- 2010 Head of Food processing department, Alquds University. ",
          "2005-2010 Head board of Arab European Institute for vocational training and research, Ramallah",
          "2001-2007 Assistant professor in Food processing department, Al-Quds University.  "
        ],
        Publications: [
          "2019 Valli, E., Ayyad, Z., Garcia-Salas, P., Cevoli, C., Afaneh, I.A., Bendini, A., Gallina Toschi, T., 2019. Influence of an innovative and promising gas clarification process on the quality of stored extra virgin olive oils. Food Research International 116, 30–36.",
          "2013 Evaluation of selected quality degradation indices for Palestinian extra virgin olive oil bottled in different packaging materials upon storage under different lighting conditions. Ibrahim Abdullah afaneh, jehad abbadi, ziad ayyad, wadie sultan, and Khalid kanan. Journal of food science and engineering 3 (2013) 267-283  ",
          "2013 Develpoment of set and drinking sesame yoghurt from decorticated sesame seed. Ibrahim Abdullah afaneh. American Journal of applied sciences 10 (11): 1392-1397, 2013",
          "2012 Effect of acidity on Delta 7 Stigmastenol contect of Palestinian olive oil. Jihad M. Quasem, Ibrahim Abdullah Afaneh, Harbi T. Al-Masri, Muhammad A.Hmidat, Ayman Suliman Mazahreh, and Ahmad Sundookah. American Journal of Apllie Sceince. 9 (12): 1916-1921, ",
          "2011 Effect of critical processing variables on sesame milk quality",
          "Ibrahim Afaneh, Khaled Abu-Alruz, Jihad M. Quasem, Ahmad Sundookah, Jehad Abbadi,  Suleiman Alloussi and saleh sawalha. American Journal of Agriculatural and biological sciences 6 (4): 517-520, 2011",
          "2011 Fundamental Elements to Produce Sesame Yoghurt from Sesame Milk. Ibrahim Afaneh, Khaled Abu-Alruz, Jihad M. Quasem, Ahmad Sundookah, Jehad Abbadi,  Suleiman Alloussi and Ziad Ayyad. American Journal of Applied Science 8 (11): 1086-1092, 2011.",
          "2011 Factors affecting D-7- Stigmastenol in Palestinian olive oil. K. Abu-Alruz, I.A. Afaneh, J.M. Quasem, M.A. Hmidat, J. Abbady and A.S. Mazahreh. Journal of Applied Sciences 11(5):797-805,2011",
          "2009 Effect of Methyl Cellulose Coating and Pre-Treatment on Oil Uptake, Moisture Retention and Physical Properties of Deep-Fat Fried Starchy Dough  System. Jihad M. Quasem, Ayman Suliman Mazahreh, Khaled Abu-Alruz, Ibrahim A. Afaneh, Ala’a H. Al-Muhtaseb and T.R.A. Magee. American Journal of     Agricultural and Biological Sciences 4 (2): 156-166, 2009.",
          "2009 The effect of Adjusting PH on Stretchability   and Meltability to White Brined Nabulsi cheese. Ayman Suliman Mazahreh, Jihad M. Quasem, Ali Alshaubka, Ibrahim Abdullah Afaneh, Al-Balqa Applied University, Princes Alia University College, American Journal of Applied Sciences 6 (4): 543-550, 2009",
          "2009 Solubility of Solar Dried Jameed, Dr. Jihad M. Quasem, Dr. Ayman Suliman Mazahreh, Dr. Ibrahim Abdullah Afaneh and Dr. Amer Al Omari   Pakistan Journal of Nutrition 8 (2): 134-138, 2009",
          "Dec 2000 Modeling the Heat and Mass Transfer Phenomena During Immersion Frying, Chemical Engineering Congress, Calcutta, India. McMinn, W.A.M, Jonathan, P. F., Afaneh, I. A and Magee, I.R.A.",
          "April 2000 Two stage Frying of Potatoes, Eight International Congress on Engineering and Food, Puebla, Mexico, McMinn,W.A.M, Afaneh, I. A, and Magee T.RA.",
          "Jan 2000 Heat and Mass Transfer During the Frying of Potato Pieces, Chemical Engineering Research 2000, University of Bat, McMinn, W.A.M, Afaneh, LA and Magee T.R.A",
          "Sep 1999 Frying Characteristics of Potato Cylinders, Jordan International Chemical Engineering Conference Amman, Afaneh,I.A. McMinn,W.A M and Magee T.RA "
        ],
        Achievements: [
          "First honor for three semesters during the B.Sc., Jordan ",
          "Scholarship of the N. Ireland teaching board for three years (Ph.D), UK.",
          "Scholarship of the Arab-Aid for three years (Ph.D), U.K.",
          "Scholarship of the “Western churches funds”, UK.",
          "Scholarship of the “Churches funds for overseas”, UK.",
          "Scholarship of “The hardship fund”, UK."
        ],
        "Teaching Fields": [
          "Undergraduates: Technology Courses, Thermal Processing of Food, Food Engineering, Quality Control, and Nutrition.",
          "Postgraduates (master): Quality control, Frying technology, Total quality management (TQM)."
        ],
        "Research Fields": [
          "Food product shelf-life",
          "Antioxidant applications in frying oil. ",
          "Factors affecting olive oil quality.",
          "Quality systems applications.",
          "Baking technology.",
          "Food packaging materials.",
          "Frying technology and healthy food.",
          "Drying techniques",
          "Dairy products (cheese and yoghurt)"
        ],
        Supervision: [
          "Master project in olive oil quality",
          "Master project in TQM (ISO, HACCP)",
          "Master project in dairy product Packaging ",
          "Master project in antioxidant effect of olive oil",
          "Building new devices for food analysis  ",
          "New engineering unit to enhance olive oil extraction quality and quantity",
          "Engineering the factors matrix of local white cheese criteria  "
        ],
        "Participation and Profession": [
          "Consultant and trainer of “fighting poverty” project donated by ACDI/VOCA and USAID.",
          "Consultant of Hanan-USAID “nutrition project” in producing new healthy meals guideline for pregnant and lactating Palestinian women. ",
          "Consultant of the ministry of education for forming the nutrition guide book for schools, Palestine.",
          "Member of trusty’s board of Al-Mashroa’ Al-Ensha’y Al-Arabi, Jericho, Palestine.",
          "Representative of Al-Quds university for the quality system trade mark in the ministry of higher education.",
          "Consultant of the Science and Faith conference, Al-Quds University, Jerusalem, 2003.",
          "The representative of Al-Quds academics in the academic council of the Al-Quds University from 2003-2005.",
          "The representative of the Palestinian universities in food standardizing committees in Palestinian standard institute (PSI) for two years.",
          "Member of the scientific committee of the national initiative for food safety. ",
          "Consultant of the ministry of education for forming the nutrition guide line for national schools, Palestine.",
          "Member of the planning and developing committee for improving the relationship between Al-Quds University and the local society. ",
          "Board member of the alumni affair department and head group of training and development at Al-Quds university. ",
          "Representative of the Palestinian universities in the Quality council in the Palestinian standard institute. ",
          "The chairman of the commercial and trade contract committee of Al-Quds university. ",
          "Certified trainer of the MAP program for developing small businesses.",
          "Provision lead auditor in ISO 9001:2008",
          "Provision lead assessor in ISO 17025:2005",
          "Expert in general requirement of European quality infrastructure for food safety, through SIDA training program in Stockholm in Sweden. ",
          "Consultant for UN the WFP program studying the potential of producing snack food products for schools, 2012."
        ],
        "Industrial Projects": [
          "Enhancing and solving problems of dairy products of Al- Rayan dairy factory, ramalla, Palestine.",
          "Enhancing and solving problems of dairy products of Al-Mashroa’ al_Arabi, Jericho, Palestine. ",
          "Supervising and mentoring the construction of feeding machine in Arab development society, Jericho.  ",
          "Producing the high fiber bamba, according to the regulation of ministry of education, Salah food company. ",
          "Investing the camel milk as food and soap products, Al jabban for food investment.  "
        ]
      }
    }
  ];

  return (
    <div>
      <Head>
        <title>Halal AlAqsa - members</title>
        <meta name="description" content="Team Members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero {...teamHero} />

        <TeamCard teamMembers={teamMembers} />
      </main>
    </div>
  );
}
