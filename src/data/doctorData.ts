export interface DoctorProfile {
  name: string;
  fullNameWithInitials: string;
  degrees: string;
  title: string;
  subTitle: string;
  experienceYears: number;
  patientsTreated: string;
  rating: number;
  reviewCount: number;
  linkedinUrl: string;
  aboutText: string[];
  philosophy: string;
  qualifications: {
    degree: string;
    institution: string;
    year?: string;
    note?: string;
  }[];
  fellowships: {
    title: string;
    institution: string;
    description: string;
  }[];
  research: {
    title: string;
    journal: string;
    description: string;
  }[];
  memberships: string[];
  clinic: {
    name: string;
    center: string;
    addressLine1: string;
    addressLine2: string;
    landmark: string;
    city: string;
    pincode: string;
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
    timings: {
      days: string;
      morning: string;
      evening: string;
    }[];
    googleMapsUrl: string;
    embedMapQuery: string;
  };
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Diagnostic' | 'Interventional' | 'Therapeutic' | 'Specialized Clinic';
  iconName: string;
  keyBenefits: string[];
  procedureTime?: string;
  recommendedFor: string[];
  isDoctorPerformed?: boolean;
}

export interface ConditionItem {
  id: string;
  name: string;
  category: 'Airway & Asthma' | 'Infections & Pleural' | 'Chronic & Interstitial' | 'Sleep & Lifestyle';
  shortDesc: string;
  symptoms: string[];
  causes: string[];
  treatmentApproach: string;
  severity: 'Common' | 'Chronic' | 'Urgent';
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  location: string;
  condition: string;
  feedback: string;
  rating: number;
  verified: boolean;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Treatments' | 'Procedures' | 'Appointments';
}

export const DOCTOR_DATA: DoctorProfile = {
  name: "Dr. Srinija Kummaraganti",
  fullNameWithInitials: "Dr. G. Bhavani Srinija Kummaraganti",
  degrees: "MBBS, MD (Pulmonology), FIP, DAA (CMC Vellore)",
  title: "Consultant Interventional Pulmonologist",
  subTitle: "Allergy, Asthma, PFT & Advanced Respiratory Medicine",
  experienceYears: 8,
  patientsTreated: "12,000+",
  rating: 4.9,
  reviewCount: 340,
  linkedinUrl: "https://www.linkedin.com/in/dr-srinija-kummaraganti-036381348/",
  aboutText: [
    "Dr. Srinija Kummaraganti is an accomplished Consultant Interventional Pulmonologist, and Certified Allergy & Asthma Specialist practicing in Kondapur, Hyderabad.",
    "She completed her MBBS from Dr. NTR University of Health Sciences, followed by an MD in Pulmonary Medicine (Respiratory Diseases) with extensive clinical training in acute and chronic lung disorders.",
    "Committed to advanced clinical subspecialties, Dr. Srinija completed a Fellowship in Interventional Pulmonology (FIP) mastering diagnostic and therapeutic bronchoscopy, alongside a distinguished Diploma in Allergy and Asthma (DAA) from Christian Medical College (CMC), Vellore—one of India's leading centers for allergy and immunology research.",
    "She has also contributed actively to medical literature, authoring published clinical research on the prevalence of Vitamin D deficiency in acute bronchial asthma exacerbations in the Indian Journal of Health Sciences and Biomedical Research (KLEU).",
    "At TrueMed Diagnostics & Clinics, Dr. Srinija personally conducts and interprets in-clinic Pulmonary Function Tests (PFT / Spirometry), comprehensive skin prick allergy testing, sleep apnea evaluations, and evidence-based personalized management for severe asthma, COPD, and chronic respiratory disorders."
  ],
  philosophy: "Breathing freely is the foundation of quality life. My approach centers on precise diagnostic investigation, doctor-supervised lung testing, and tailored therapy plans that avoid unnecessary long-term medication dependency.",
  qualifications: [
    {
      degree: "MBBS",
      institution: "Dr. NTR University of Health Sciences, Vijayawada",
      note: "Distinction in clinical sciences and respiratory medicine foundations"
    },
    {
      degree: "MD - Pulmonology (Respiratory Medicine)",
      institution: "Jawaharlal Nehru Medical College (JNMC) / KLE University",
      note: "Specialized residency in severe asthma, COPD, tuberculosis & critical pulmonary care"
    },
    {
      degree: "Fellowship in Interventional Pulmonology (FIP)",
      institution: "Apex Interventional Center",
      note: "Hands-on expertise in flexible video bronchoscopy, BAL, EBUS, and pleural procedures"
    },
    {
      degree: "Diploma in Allergy and Asthma (DAA)",
      institution: "Christian Medical College (CMC), Vellore",
      note: "Accredited specialization in aeroallergen identification, standardized prick testing & immunotherapy"
    }
  ],
  fellowships: [
    {
      title: "Interventional Pulmonology Fellow",
      institution: "Apex Pulmonary Center",
      description: "Advanced training in diagnostic/therapeutic flexible bronchoscopy, transbronchial lung biopsy (TBLB), and ultrasound-guided pleural interventions."
    },
    {
      title: "CMC Vellore Certified Allergist & Immunotherapist",
      institution: "CMC Vellore Allergy & Immunology Board",
      description: "Comprehensive qualification in aeroallergen identification, standardized prick testing, and precision disease-modifying immunotherapy."
    }
  ],
  research: [
    {
      title: "Prevalence of Vitamin D Deficiency in Acute Asthma Exacerbations",
      journal: "Indian Journal of Health Sciences and Biomedical Research KLEU",
      description: "Hospital-based clinical study investigating the impact of serum 25-hydroxyvitamin D levels on the severity and frequency of acute bronchial asthma attacks."
    }
  ],
  memberships: [
    "Indian Chest Society (ICS)",
    "European Respiratory Society (ERS)",
    "Academy of Allergy and Immunology",
    "Telangana State Medical Council (TSMC)"
  ],
  clinic: {
    name: "TrueMed Diagnostics & Clinics",
    center: "Pulmonology & Respiratory Health Wing",
    addressLine1: "First Floor, Plot No. 141, Madhava Hills",
    addressLine2: "Opposite / Near True Med Diagnostics, Kondapur",
    landmark: "Madhava Hills, Near Botanical Garden Road",
    city: "Hyderabad, Telangana",
    pincode: "500084",
    phone: "+91 80088 12345",
    phoneFormatted: "+91 80088 12345",
    whatsapp: "+91 80088 12345",
    whatsappFormatted: "+91 80088 12345",
    email: "appointments@drsrinijapulmo.com",
    timings: [
      {
        days: "Monday – Saturday",
        morning: "10:00 AM – 01:30 PM",
        evening: "05:30 PM – 08:30 PM"
      },
      {
        days: "Sunday",
        morning: "10:00 AM – 01:00 PM (By Appointment Only)",
        evening: "Emergency on call"
      }
    ],
    googleMapsUrl: "https://maps.google.com/?q=True+Med+Diagnostics+and+Clinics+Kondapur+Hyderabad",
    embedMapQuery: "True Med Diagnostics and Clinics Kondapur Hyderabad"
  },
  stats: [
    { label: "Specialist Experience", value: "8+ Years", detail: "In Pulmonary & Allergy Medicine" },
    { label: "Patients Treated", value: "12,000+", detail: "Across Hyderabad & Beyond" },
    { label: "Procedures & PFTs", value: "1,500+", detail: "PFT, Bronchoscopy & Allergy Tests" },
    { label: "Patient Rating", value: "4.9 / 5.0", detail: "Over 340+ Verified Reviews" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "pft-spirometry",
    title: "Pulmonary Function Testing (PFT) & Spirometry",
    shortDesc: "In-clinic computerized lung function testing personally conducted and interpreted by Dr. Srinija to accurately measure lung capacity and airway obstruction.",
    fullDesc: "Pulmonary Function Testing (PFT) and computerized spirometry with pre- and post-bronchodilator reversibility testing are performed personally by Dr. Srinija Kummaraganti. This examination provides real-time, objective data on vital capacity, forced expiratory volume (FEV1), airway resistance, and response to inhalers—crucial for diagnosing Asthma, COPD, and assessing fitness before major surgeries.",
    category: "Diagnostic",
    iconName: "Activity",
    keyBenefits: [
      "Personally conducted and immediately interpreted by Dr. Srinija",
      "Pre- and Post-Bronchodilator reversibility testing to confirm asthma",
      "High-precision computerized spirometry curves with same-day report",
      "Essential pre-operative pulmonary clearance & fitness assessment"
    ],
    procedureTime: "15 - 25 minutes",
    recommendedFor: ["Chronic coughing (> 3 weeks)", "Wheezing or breathlessness on exertion", "Smokers aged 35+", "Asthma & COPD disease monitoring"],
    isDoctorPerformed: true
  },
  {
    id: "allergy-skin-testing",
    title: "Allergy Skin Prick Testing & Immunotherapy",
    shortDesc: "Accredited CMC Vellore protocol to identify exact environmental triggers and formulate curative allergy desensitization.",
    fullDesc: "Skin prick testing evaluates allergic responses to dust mites, pollens, molds, animal dander, and food allergens. Based on results, personalized Sublingual (SLIT) or Subcutaneous Immunotherapy is formulated to treat allergies at the root cause.",
    category: "Specialized Clinic",
    iconName: "ShieldAlert",
    keyBenefits: [
      "Identifies specific allergic culprits within 20 minutes",
      "Safe, highly standardized CMC Vellore protocol",
      "Personalized allergen immunotherapy (desensitization drops)",
      "Helps eliminate permanent dependency on antihistamines"
    ],
    procedureTime: "30 - 45 minutes",
    recommendedFor: ["Frequent sneezing & runny nose", "Allergic bronchitis", "Morning nasal congestion", "Severe or seasonal asthma"],
    isDoctorPerformed: true
  },
  {
    id: "interventional-bronchoscopy",
    title: "Diagnostic & Therapeutic Bronchoscopy",
    shortDesc: "Fiberoptic airway inspection, bronchoalveolar lavage (BAL), endobronchial biopsy, and foreign body removal under mild sedation.",
    fullDesc: "Utilizing state-of-the-art flexible video bronchoscopy, Dr. Srinija examines deep bronchial passages to diagnose non-resolving lung shadows, take targeted biopsy samples, clear mucous plugs, and investigate persistent hemoptysis (coughing blood).",
    category: "Interventional",
    iconName: "Stethoscope",
    keyBenefits: [
      "High-definition visualization of trachea & bronchial tree",
      "Microbiological culture from deepest lung lobes (BAL)",
      "Minimally invasive with rapid same-day recovery",
      "Performed under comfortable conscious sedation"
    ],
    procedureTime: "20 - 40 minutes",
    recommendedFor: ["Unexplained lung patches on CT scan", "Coughing blood (hemoptysis)", "Suspected lung tumor/infection", "Chronic unresolving pneumonia"],
    isDoctorPerformed: true
  },
  {
    id: "sleep-apnea-study",
    title: "Sleep Apnea & Polysomnography Clinic",
    shortDesc: "Overnight sleep study, snoring evaluation, and CPAP / BiPAP pressure titration for restorative, healthy sleep.",
    fullDesc: "Obstructive Sleep Apnea (OSA) severely stresses the heart and causes daytime fatigue, brain fog, and high blood pressure. We conduct Level 1 & Level 3 Polysomnography with expert pressure titration to restore restful nights.",
    category: "Diagnostic",
    iconName: "Moon",
    keyBenefits: [
      "Accurate detection of nighttime oxygen drops & breathing pauses",
      "Prevents sleep-apnea-induced hypertension and stroke risk",
      "Tailored CPAP/BiPAP machine calibration and mask fitting",
      "Comprehensive daytime sleepiness remediation"
    ],
    procedureTime: "Overnight / Home Sleep Test",
    recommendedFor: ["Loud persistent snoring", "Morning headaches & dry mouth", "Daytime drowsiness while driving/working", "Witnessed gasping in sleep"]
  },
  {
    id: "copd-rehabilitation",
    title: "COPD Care & Pulmonary Rehabilitation",
    shortDesc: "Multidisciplinary management for chronic bronchitis, emphysema, and long-term smoking-induced airway damage.",
    fullDesc: "Individualized pharmacological regimens featuring dual/triple bronchodilators, smoking cessation pharmacotherapy, breathing retraining exercises, and oxygen therapy optimization to keep you active and out of hospital emergencies.",
    category: "Therapeutic",
    iconName: "HeartPulse",
    keyBenefits: [
      "Customized inhaler selection and technique masterclass",
      "Structured pulmonary rehabilitation exercises",
      "Significant reduction in acute emergency flare-ups",
      "Science-backed smoking cessation roadmap"
    ],
    procedureTime: "Consultation & Rehab Plan",
    recommendedFor: ["Current/former smokers", "Progressive walking breathlessness", "Chronic phlegm production", "Diagnosed COPD patients"]
  },
  {
    id: "pleural-procedures",
    title: "Pleural Procedures & Thoracentesis",
    shortDesc: "Bedside ultrasound-guided fluid drainage (thoracentesis), intercostal catheter insertion, and pleurodesis.",
    fullDesc: "Safe, ultrasound-guided evacuation of fluid (pleural effusion) or trapped air (pneumothorax) surrounding the lungs to promptly alleviate severe breathlessness and send fluid for biochemical, cytological, and TB analysis.",
    category: "Interventional",
    iconName: "Layers",
    keyBenefits: [
      "Immediate relief from chest heaviness and breathlessness",
      "Ultrasound guidance ensures maximal patient safety",
      "Accurate diagnostic fluid testing for TB, cancer, or infections",
      "Day-care procedure with local anesthesia"
    ],
    procedureTime: "30 - 45 minutes",
    recommendedFor: ["Pleural effusion (water in lungs)", "Chest pain on deep breathing", "Infectious empyema", "Pneumothorax"],
    isDoctorPerformed: true
  }
];

export const CONDITIONS_DATA: ConditionItem[] = [
  {
    id: "asthma",
    name: "Bronchial Asthma & Cough-Variant Asthma",
    category: "Airway & Asthma",
    shortDesc: "Chronic airway inflammation causing recurrent wheezing, chest tightness, and nighttime cough.",
    symptoms: ["Wheezing sound when exhaling", "Persistent dry cough worse at 3-5 AM", "Shortness of breath with cold air or exercise", "Chest tightness"],
    causes: ["Pollen, dust mites, molds, or pet dander", "Viral respiratory infections", "Cold weather changes", "Stress and vigorous physical exertion"],
    treatmentApproach: "Tailored combination inhalers (ICS-LABA), correct device technique training, trigger elimination, and advanced biologics for severe resistant asthma.",
    severity: "Common"
  },
  {
    id: "allergic-rhinitis",
    name: "Allergic Rhinitis & Sinusitis (Hay Fever)",
    category: "Airway & Asthma",
    shortDesc: "Overactive immune reaction to airborne irritants leading to chronic sneezing, nasal drip, and airway hypersensitivity.",
    symptoms: ["Paroxysms of morning sneezing", "Watery or itchy eyes and itchy palate", "Nasal congestion and mouth breathing", "Post-nasal drip triggering cough"],
    causes: ["Dust mites in bedding", "Grass and weed pollens", "Fungal spores", "Vehicle emissions and smoke"],
    treatmentApproach: "Skin prick testing to identify triggers, non-sedating antihistamines, nasal corticosteroid sprays, and allergen immunotherapy (desensitization).",
    severity: "Common"
  },
  {
    id: "copd",
    name: "COPD (Emphysema & Chronic Bronchitis)",
    category: "Chronic & Interstitial",
    shortDesc: "Long-term progressive airflow restriction resulting from tobacco smoke, biomass fuel smoke, or environmental dust.",
    symptoms: ["Chronic cough producing sputum", "Breathlessness on climbing stairs or walking", "Frequent chest colds", "Fatigue and lack of energy"],
    causes: ["Cigarette or bidi smoking", "Long-term exposure to biomass fuel or chulha smoke", "Occupational chemical fumes and dust", "Alpha-1 antitrypsin deficiency"],
    treatmentApproach: "Long-acting bronchodilators, pulmonary rehabilitation, smoking cessation guidance, annual influenza/pneumococcal vaccination, and oxygen titration.",
    severity: "Chronic"
  },
  {
    id: "sleep-apnea",
    name: "Obstructive Sleep Apnea (OSA)",
    category: "Sleep & Lifestyle",
    shortDesc: "Repetitive airway collapse during sleep causing oxygen desaturations and micro-arousals throughout the night.",
    symptoms: ["Loud irregular snoring punctuated by silence", "Waking up choking or gasping for air", "Excessive daytime sleepiness and fatigue", "Morning dry mouth & headaches"],
    causes: ["Anatomical airway narrowing", "Excess body weight / neck circumference", "Enlarged tonsils or adenoids", "Alcohol intake before bed"],
    treatmentApproach: "Diagnostic sleep study (polysomnography), CPAP/BiPAP pressure titration, positional therapy, lifestyle weight management, and upper airway review.",
    severity: "Chronic"
  },
  {
    id: "tuberculosis",
    name: "Pulmonary & Extrapulmonary Tuberculosis",
    category: "Infections & Pleural",
    shortDesc: "Bacterial infection caused by Mycobacterium tuberculosis, requiring prompt diagnosis and strict treatment adherence.",
    symptoms: ["Cough lasting more than 2-3 weeks", "Low-grade evening fever with night sweats", "Unexplained weight loss and loss of appetite", "Blood in sputum (hemoptysis)"],
    causes: ["Airborne transmission from active infected persons", "Impaired immunity or close household contact"],
    treatmentApproach: "CBNAAT / GeneXpert rapid molecular testing, sputum cultures, standard DOTS/ATT regimens, therapeutic monitoring to prevent drug resistance.",
    severity: "Urgent"
  },
  {
    id: "ild-fibrosis",
    name: "Interstitial Lung Disease (ILD) & Pulmonary Fibrosis",
    category: "Chronic & Interstitial",
    shortDesc: "Scarring and stiffness of the lung tissue between air sacs, making it harder for oxygen to pass into the bloodstream.",
    symptoms: ["Progressive shortness of breath on exertion", "Dry, non-productive hacking cough", "Velcro-like crackles on chest examination", "Fingertip clubbing (rounding)"],
    causes: ["Autoimmune diseases (Rheumatoid arthritis, Scleroderma)", "Pigeon droppings / bird fancier's lung", "Molds and occupational dusts", "Idiopathic (unknown cause)"],
    treatmentApproach: "High-Resolution CT (HRCT) analysis, antifibrotic medications (Pirfenidone, Nintedanib), immunosuppressive therapy, and ambulatory oxygen management.",
    severity: "Chronic"
  },
  {
    id: "pleural-effusion",
    name: "Pleural Effusion (Fluid in Lung Cavity)",
    category: "Infections & Pleural",
    shortDesc: "Abnormal accumulation of liquid in the space between the lungs and the chest wall.",
    symptoms: ["Sharp chest pain aggravated by deep inhalation or coughing", "Sudden breathlessness on lying flat", "Persistent dry cough", "Fever if infected (Empyema)"],
    causes: ["Pneumonia complication (parapneumonic)", "Tuberculosis of pleura", "Heart, kidney, or liver disease", "Malignancy"],
    treatmentApproach: "Ultrasound-guided thoracentesis to drain fluid, diagnostic cytological and microbiological testing, chest tube drainage when necessary.",
    severity: "Urgent"
  },
  {
    id: "chronic-cough",
    name: "Unexplained Chronic Cough (> 4 Weeks)",
    category: "Airway & Asthma",
    shortDesc: "Persistent cough lasting weeks or months that fails to respond to ordinary cough syrups and antibiotics.",
    symptoms: ["Tickling or irritation in throat", "Frequent throat clearing", "Cough paroxysms triggered by cold drinks or speaking", "Disturbed sleep"],
    causes: ["Cough-variant asthma (CVA)", "Upper Airway Cough Syndrome (UACS / post-nasal drip)", "Gastroesophageal Reflux (GERD)", "Eosinophilic bronchitis"],
    treatmentApproach: "Systematic multi-factorial diagnostic workup (Spirometry, FeNO, Allergy screen) followed by targeted step-wise relief without over-medication.",
    severity: "Common"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "rev-1",
    patientName: "Rajeshwar Rao V.",
    location: "Kondapur, Hyderabad",
    condition: "Severe Allergic Asthma",
    feedback: "I had been suffering from nightly coughing and wheezing for over 4 years. Dr. Srinija Kummaraganti conducted a detailed PFT and allergy prick test. Within three weeks, my breathlessness vanished. Her calm explanation gave my family immense confidence.",
    rating: 5,
    verified: true,
    date: "1 month ago"
  },
  {
    id: "rev-2",
    patientName: "Swathi M.",
    location: "Gachibowli, Hyderabad",
    condition: "Chronic Cough & Dust Allergy",
    feedback: "Dr. Srinija is one of the kindest and most knowledgeable doctors I have met. Where other clinics kept prescribing antibiotics, she immediately identified dust mite allergy with CMC Vellore test protocols. Now on immunotherapy and feeling completely normal!",
    rating: 5,
    verified: true,
    date: "2 months ago"
  },
  {
    id: "rev-3",
    patientName: "K. Venkat Narayan",
    location: "Madhapur, Hyderabad",
    condition: "COPD & Breathlessness",
    feedback: "My elderly father has COPD and was getting breathless walking even 20 meters. Dr. Srinija personally conducted his lung function spirometry, adjusted his medicines, and trained him on correct inhaler usage. His quality of life has dramatically improved.",
    rating: 5,
    verified: true,
    date: "3 months ago"
  },
  {
    id: "rev-4",
    patientName: "Praveen Kumar B.",
    location: "Hitec City, Hyderabad",
    condition: "Sleep Apnea & Heavy Snoring",
    feedback: "I used to wake up tired and had dangerous daytime drowsiness. Dr. Srinija arranged a sleep study and recommended CPAP therapy. I haven't slept this soundly in 10 years! Highly recommend her for anyone with snoring or breathing issues.",
    rating: 5,
    verified: true,
    date: "4 months ago"
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Is the Pulmonary Function Test (PFT / Spirometry) done by Dr. Srinija herself?",
    answer: "Yes, absolutely! At TrueMed Diagnostics & Clinics, Dr. Srinija Kummaraganti personally oversees and conducts Pulmonary Function Testing (PFT) and computerized Spirometry. This ensures correct patient breathing maneuvers, accurate measurement of pre- and post-bronchodilator reversibility, and immediate doctor interpretation during your consultation.",
    category: "Procedures"
  },
  {
    id: "faq-2",
    question: "When should I consult a Pulmonologist instead of a General Physician?",
    answer: "You should see a Pulmonologist if you have a cough lasting longer than 3 weeks, unexplained shortness of breath on exertion, audible wheezing or chest tightness, frequent chest infections, blood in your phlegm, or persistent loud snoring with daytime fatigue. Dr. Srinija has specialized equipment like Spirometry, FeNO, Bronchoscopy, and Allergy Testing to pinpoint root causes that routine checkups might miss.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "What is an Allergy Skin Prick Test and is it painful?",
    answer: "An Allergy Skin Prick Test is the international gold standard for detecting aeroallergens and food triggers. A tiny droplet of standardized allergen extracts is placed on the forearm and gently pricked on the surface of the skin. It does not cause bleeding and feels like a tiny pinch. Results are read in just 15 to 20 minutes, allowing Dr. Srinija to determine exactly what causes your asthma or nasal allergies.",
    category: "Procedures"
  },
  {
    id: "faq-4",
    question: "How should I prepare for a Pulmonary Function Test (Spirometry)?",
    answer: "Wear loose, comfortable clothing. Avoid smoking or heavy exercise for 4 hours prior. Avoid large meals 2 hours before the test. If you are already using inhalers, our reception will advise you whether to pause bronchodilator inhalers for a few hours prior so we can measure your baseline airway function accurately.",
    category: "Procedures"
  },
  {
    id: "faq-5",
    question: "Is Asthma completely curable, or will I need inhalers forever?",
    answer: "While asthma has a genetic predisposition, it can be 100% controlled. Most patients who adhere to the correct inhaler medication and allergen management lead entirely normal lives, play competitive sports, and eventually taper down to minimal maintenance doses. Furthermore, for allergic asthma, allergen immunotherapy (desensitization) can provide long-lasting remission by retraining the immune system.",
    category: "Treatments"
  },
  {
    id: "faq-6",
    question: "How do I know if my snoring is actually Sleep Apnea?",
    answer: "If your snoring is loud enough to be heard through closed doors, is accompanied by pauses in breathing or choking sounds, or if you wake up with morning dry mouth, headaches, or feel exhausted despite 8 hours in bed, you likely have Obstructive Sleep Apnea (OSA). A simple overnight sleep study at TrueMed will confirm the diagnosis.",
    category: "Treatments"
  },
  {
    id: "faq-7",
    question: "Where is Dr. Srinija Kummaraganti's clinic located in Hyderabad?",
    answer: "Dr. Srinija consults at TrueMed Diagnostics & Clinics, 1st Floor, Plot No. 141, Madhava Hills, Kondapur, Hyderabad (near Botanical Garden Road). Consultations are available Monday through Saturday (Morning 10 AM – 1:30 PM & Evening 5:30 PM – 8:30 PM), and Sundays by prior appointment.",
    category: "Appointments"
  },
  {
    id: "faq-8",
    question: "Can I book a consultation online or via WhatsApp?",
    answer: "Yes, absolutely! You can schedule directly through the appointment booking form on this website, or message/call our reception team directly on WhatsApp (+91 80088 12345). We provide immediate confirmation and guidance on previous medical records to bring.",
    category: "Appointments"
  }
];

export const LUNG_SCREENER_QUESTIONS = [
  {
    id: 1,
    question: "How long have you been experiencing a cough or throat irritation?",
    options: [
      { text: "Less than 1 week (acute cold/flu)", score: 0 },
      { text: "1 to 3 weeks", score: 1 },
      { text: "More than 3 to 4 weeks (persistent/chronic)", score: 3 }
    ]
  },
  {
    id: 2,
    question: "Do you experience breathlessness or chest tightness?",
    options: [
      { text: "Never, normal breathing", score: 0 },
      { text: "Only during vigorous sports or heavy gym work", score: 1 },
      { text: "When climbing one flight of stairs or walking fast", score: 2 },
      { text: "At rest, during the night, or accompanied by wheezing sounds", score: 3 }
    ]
  },
  {
    id: 3,
    question: "Do you experience allergy symptoms like sneezing bouts or itchy eyes?",
    options: [
      { text: "No, rarely or never", score: 0 },
      { text: "Occasionally during season change", score: 1 },
      { text: "Frequent morning sneezing, runny nose, or dust sensitivity", score: 3 }
    ]
  },
  {
    id: 4,
    question: "What about your sleep quality and snoring?",
    options: [
      { text: "I sleep quietly and wake up refreshed", score: 0 },
      { text: "Light occasional snoring, no daytime tiredness", score: 1 },
      { text: "Loud snoring, waking up gasping, or daytime drowsiness", score: 3 }
    ]
  },
  {
    id: 5,
    question: "Have you ever smoked or been exposed to occupational dust/fumes?",
    options: [
      { text: "Never smoked, clean indoor/outdoor environment", score: 0 },
      { text: "Passive smoke or living in high-traffic urban area", score: 1 },
      { text: "Current or former smoker, or occupational dust exposure", score: 3 }
    ]
  }
];
