// Sync the Anvar_CV.pdf content into Mongo (personal.website, route=/vita).
// Source of truth: Anvar_CV.pdf (September 2026 revision).
import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.WEBSITE_CONNECTION_STRING.replace(/"/g, "");

const docs = [
  {
    route: "/vita",
    section: "education",
    type: "educations",
    title: "Education",
    items: [
      {
        degree: "Doctor of Medicine",
        school: "Shiraz University of Medical Sciences",
        location: "Shiraz, Iran",
        dates: "09/2007 - 12/2015",
        remarks: "Internships at university affiliated out-patient clinics and teaching-hospitals Namazi, Faghihi, Chamran, Hafez, Avesina",
      },
      {
        degree: "Master of Science in Health and Human Services",
        school: "Fairleigh Dickinson University",
        location: "Vancouver, British Columbia",
        dates: "09/2021 - 06/2023",
      },
    ],
  },
  {
    route: "/vita",
    section: "internships",
    type: "internships",
    title: "Internships",
    items: [
      { title: "Outpatient Medicine (II)", description: "Internal Medicine & Pediatrics", duration: 4, dates: { start: "2013-March-21", end: "2013-April-20" } },
      { title: "Community Medicine", description: "Epidemiology, Population & Public Health", duration: 4, dates: { start: "2013-April-21", end: "2013-May-21" } },
      { title: "Obstetrics & Gynecology", description: "Emergencies, Prenatology, Labour & Delivery", duration: 8, dates: { start: "2013-May-22", end: "2013-July-22" } },
      { title: "Pediatrics", description: "Emergencies, Neurology & Gastroenterology", duration: 8, dates: { start: "2013-July-23", end: "2013-September-22" } },
      { title: "Outpatient Medicine (I)", description: "Gynecology & General Surgery", duration: 4, dates: { start: "2013-September-23", end: "2013-October-22" } },
      { title: "Psychiatry", description: "Emergencies & Mental disorders", duration: 4, dates: { start: "2013-October-23", end: "2013-November-21" } },
      { title: "Internal Medicine", description: "Inpatient care General & Rheumatology wards", duration: 8, dates: { start: "2013-November-22", end: "2014-January-20" } },
      { title: "Emergency Medicine", description: "Poisonings, Overdoses & First line screenings", duration: 8, dates: { start: "2014-January-21", end: "2014-March-20" } },
      { title: "General Surgery (I)", description: "Inpatient pre & post-op Care, OR", duration: 4, dates: { start: "2014-March-21", end: "2014-April-20" } },
      { title: "Dissertation", description: "Regression modeling in trauma mortality", duration: 4, dates: { start: "2014-April-21", end: "2014-May-21" } },
      { title: "General Surgery (II)", description: "ER, Colo-rectal & Urology wards", duration: 4, dates: { start: "2014-May-22", end: "2014-July-22" } },
    ],
  },
  {
    route: "/vita",
    section: "licensure",
    type: "licensure",
    title: "Licensure",
    items: [
      { title: "Licentiate of the Medical Council of Canada", detail: "No 167385", date: "06/2025" },
      { title: "Licentiate of the IRI Medical Council", detail: "No 154090", date: "01/2016" },
    ],
  },
  {
    route: "/vita",
    section: "exams",
    type: "exams",
    title: "Examinations",
    items: [
      { title: "CELPIP General", scores: ["Listening 11", "Speaking 12", "Reading 10", "Writing 11"], date: "11/2025" },
      { title: "NAC OSCE", scores: ["598"], date: "05/2025" },
      { title: "MCCQE1", scores: ["241"], date: "11/2024" },
    ],
  },
  {
    route: "/vita",
    section: "clinical work experience",
    type: "clinical-work",
    title: "Clinical Work Experience",
    items: [
      {
        title: "General Physician in Energy Industry",
        place: "Petro Orim Kish Company, Kish Island, Iran",
        period: "08/2019 - 10/2020",
        definition: [
          "Provided comprehensive medical care within the energy sector in remote areas focusing on treating injuries, addressing common outpatient complaints, and ensuring the safe transportation of emergencies.",
          "Managed occupational risk factors in collaboration with safety officers, serving a workforce of 800 employees.",
        ],
      },
      {
        title: "Internal Medicine Ward General Physician",
        place: "Namazi Hospital, Shiraz, Iran",
        period: "03/2018 - 11/2018",
        definition: [
          "Facilitated inpatient care of critical oncology patients with a team of 2 attending physicians and 10 nurses.",
          "Reviewed diagnostic plans, laboratory, imaging studies and followed up on progression of therapeutic procedures, discharge plans.",
        ],
      },
      {
        title: "Emergency Department General Practitioner",
        place: "Public Hospital, Saqquez, Iran",
        period: "08/2016 - 05/2017",
        definition: [
          "Conducted triage and assessment and evaluation of medical and surgical emergencies within a fast-paced 20-bed emergency department, servicing a community of 200,000 individuals.",
          "Formulated and executed diagnostic plans to ensure prompt treatment for diverse presenting cases in close collaboration with on-call specialist supervisors.",
        ],
      },
      {
        title: "Urgent & Primary Care Physician",
        place: "Saqqez Public Hospital Outpatient Clinic, Saqquez, Iran",
        period: "08/2016 - 05/2017",
        definition: [
          "Diagnosed and treated a spectrum of urgent medical conditions including acute infections, minor injuries and common complaints such as fever, gastrointestinal, allergic reactions and respiratory conditions.",
          "Conduct initial assessments for non-emergency pain mental health concerns, providing appropriate care and referral as needed within the urgent care framework.",
        ],
      },
      {
        title: "Military General Physician (Return of Service)",
        place: "Iranian military ground forces, Saqquez, Iran",
        period: "03/2016 - 12/2017",
        definition: [
          "Implemented early diagnosis & treatment plans along with prevention strategies for common presenting complaints in a population of 3000 military personnel/families.",
          "Performed minor procedures including wound sutures & debridement, abscess drainage, fracture stabilization and splinting, foreign body removal.",
        ],
      },
      {
        title: "Rural Family Physician",
        place: "Kamfirooz Health Center, Shiraz, Iran",
        period: "01/2016 - 03/2016",
        definition: [
          "Monitored health status of an under-served population of 10,000 by diagnosing and treating medical conditions, performing minor surgical procedures, stabilizing emergencies for safe referral.",
          "Conducted periodic health & hygiene inspections of schools, assisted in family planning, assessed adherence to vaccination protocols, monitored high risk pregnancies & care of chronic conditions.",
        ],
      },
    ],
  },
  {
    route: "/vita",
    section: "non-clinical work experience",
    type: "non-clinical",
    title: "Non-Clinical Work Experience",
    items: [
      {
        title: "Family Medicine Clinical Observer",
        place: "Nuevo Medical Clinic, North Vancouver, BC",
        period: "02/2026 - Present",
        definition: [
          "Supervisor: Dr. Armine Galstyan",
          "Conducted patients assessments, formulated differential diagnoses, and developed management plans and followed up with patients under the direct supervision of the attending physician. (OSCAR EMR)",
        ],
      },
      {
        title: "Family Medicine Clinical Observer",
        place: "Ocean Medical Clinic, West Vancouver, BC",
        period: "03/2026 - 06/2026",
        definition: [
          "Supervisor: Dr. Robert Scott",
          "Performed patient assessments, including history-taking, physical examinations, differential diagnosis, management planning, interpretation of investigations, and in-person and virtual follow-up. (OSCAR EMR)",
        ],
      },
      {
        title: "Cardiology Clinical Observer",
        place: "North Shore Heart Center, North Vancouver, BC",
        period: "09/2025 - 02/2026",
        definition: [
          "Supervisor: Dr. John Vyselaar",
          "Conducted cardiovascular history-taking, physical exams, and clinical synthesis under supervision of attending cardiologists (Med Access EMR).",
          "Interpreted follow-up cardiac investigations (ECG, echocardiogram, stress testing, Holter/ambulatory BP labs) and formulated diagnostic impressions, management plans, and follow-up strategies for patients with arrhythmias, heart failure, coronary artery disease, and cardiomyopathies.",
        ],
      },
    ],
  },
  {
    route: "/vita",
    section: "research experience",
    type: "research",
    title: "Research Experience",
    items: [
      {
        title: "Community Medicine Project Assistant Manager",
        dates: "2020 - 2021",
        bullet_points: [
          "Assisted in designing electronic questionnaires and data analysis for a university-affiliated endeavor related to the prevalence of hookah smoking and cessation strategies in Shiraz.",
        ],
      },
      {
        title: "Student Consultant at Shiraz Bone & Joint Research Center, Shiraz, Iran",
        dates: "2016 - 2019",
        bullet_points: [
          "Assisted in formulating/refining research questions, interpreting results and drafting three observational studies.",
        ],
      },
      {
        title: "Research Assistant at Shiraz Trauma Center, Shiraz, Iran",
        dates: "2015 - 2019",
        bullet_points: [
          "Identified potential use of trauma center & EMS administrative databases in studying epidemiological patterns of injuries.",
        ],
      },
      {
        title: "Data Analysis Advisor at Shiraz Neonatology Research Center",
        dates: "2018 - 2019",
        bullet_points: [
          "Contributed to model development in quantifying risk of catheter-related blood stream infections in neonatal intensive care units.",
        ],
      },
    ],
  },
  {
    route: "/vita",
    section: "voluntary experience",
    type: "voluntary",
    title: "Voluntary & Extracurricular Activities",
    items: [
      {
        title: "Academic Publication Consultant",
        period: "09/2013 - 12/2019",
        bullet_points: [
          "Mentored medical students and residents, taught workshops on research methodology, literature review, and academic writing, resulting in numerous successful publications in reputable medical journals.",
        ],
      },
      {
        title: "Health Care Consultant at Kurdistan Red Crescent Society.",
        period: "09/2016 - 09/2017",
        bullet_points: [
          "Actively engaged in providing unpaid services at clinics and wards, emphasizing a compassionate approach to patient care. Saqquez Imam Khomaini Hospital.",
        ],
      },
      {
        title: "Student Committee Coordinator at Shiraz Education Development Center.",
        period: "09/2007 - 09/2012",
        bullet_points: [
          "Facilitated active involvement of students in improving the medical education curriculum and advocated for continuous evidence-based improvements in the curriculum.",
        ],
      },
    ],
  },
  {
    route: "/vita",
    section: "technical skills",
    type: "skills",
    title: "Technical Skills",
    items: [
      { label: "Technical Skills", text: "Fluent in programming in Python, JavaScript, R languages to analyze health data, design and deploy secure web applications." },
    ],
  },
  {
    route: "/vita",
    section: "languages",
    type: "languages",
    title: "Languages",
    items: [
      { label: "English", text: "Fluent" },
      { label: "Persian", text: "Native" },
    ],
  },
  // Publications: match existing docs by id; PDF order is newest first (id desc).
  {
    route: "/vita",
    section: "publications",
    type: "publications",
    title: "Publications",
  },
  {
    route: "/vita",
    section: "presentations",
    type: "presentations",
    // kept in DB for reference; not rendered on /vita (not part of the PDF CV)
    hidden: true,
  },
];

const client = new MongoClient(uri);
await client.connect();

const col = client.db("personal").collection("website");

for (const doc of docs) {
  const existing = await col.findOne({ route: "/vita", section: doc.section });
  if (existing && !doc.items) {
    console.log(`skip (keep existing items): ${doc.section}`);
    continue;
  }
  await col.updateOne(
    { route: "/vita", section: doc.section },
    { $set: doc },
    { upsert: true },
  );
  console.log(`upserted: ${doc.section}${doc.items ? ` (${doc.items.length} items)` : ""}`);
}

// drop the stale standalone "clinical experience" + presentations+education old-format duplicates
for (const stale of ["clinical experience"]) {
  if (!docs.find((d) => d.section === stale)) {
    const r = await col.deleteOne({ route: "/vita", section: stale });
    if (r.deletedCount) console.log(`deleted stale: ${stale}`);
  }
}

await client.close();
console.log("done");
