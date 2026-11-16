/**
 * SITE CONTENT
 * ============
 * Every piece of text, contact detail and setting on the website comes from this file.
 * Edit the values below, save, and rebuild (`npm run build`). See docs/CONTENT-GUIDE.md.
 *
 * Rules for doctors' websites in India (NMC Guidelines on Ethical Advertising, 6 Oct 2026):
 *  - Keep the registration number visible (doctor.registration).
 *  - Do not add patient testimonials, patient counts, success rates, ratings used as promotion,
 *    or words such as "best", "top", "leading", "guaranteed" or "painless".
 *  - Condition pages are for education. Do not name drug brands or promise a cure.
 * Have the doctor approve any change to medical text before publishing.
 *
 * Search for "TODO" to find details that must be confirmed before launch.
 */
import type { SiteContent } from './types'

export const content: SiteContent = {
  // ---------------------------------------------------------------- Site settings
  site: {
    // TODO: change to the practice's own domain once it is connected.
    url: 'https://logan37.github.io/dr-kgbs-website',
    language: 'en-IN',
    titleSuffix: 'Dr. Srinija Kummaraganti, Pulmonologist, Kondapur',
    description:
      'Dr. Srinija Kummaraganti is a consultant interventional pulmonologist and allergy specialist at TrueMed Diagnostics and Clinics, Kondapur, Hyderabad. Lung function tests, allergy testing, sleep studies and bronchoscopy.',
    // TODO: add a 1200x630 photo of the doctor or clinic at public/share.jpg and set '/share.jpg'.
    shareImage: '',
    themeColor: '#13283B',
  },

  // ---------------------------------------------------------------- The doctor
  doctor: {
    name: 'Dr. Srinija Kummaraganti',
    fullName: 'Dr. G. Bhavani Srinija Kummaraganti',
    degrees: 'MBBS, MD (Pulmonary Medicine), FIP, DAA (CMC Vellore)',
    title: 'Consultant Interventional Pulmonologist',
    tagline: 'Lung, allergy and sleep specialist',
    // TODO: required by the NMC guidelines. Add the Telangana State Medical Council number.
    registration: 'Telangana State Medical Council Reg. No. [ADD NUMBER]',
    // TODO: add a recent headshot at public/doctor.jpg and set src to '/doctor.jpg'.
    photo: { src: '', alt: 'Dr. Srinija Kummaraganti' },
    yearsInPractice: 8,
    philosophy:
      'I test first, then treat. Once we know what is driving the symptoms, many patients can manage with fewer medicines than they expected.',
    bio: [
      'Dr. Srinija Kummaraganti is a consultant interventional pulmonologist and allergy specialist at TrueMed Diagnostics and Clinics in Kondapur, Hyderabad.',
      'She completed her MBBS at Dr. NTR University of Health Sciences and her MD in Pulmonary Medicine at Jawaharlal Nehru Medical College, KLE University. She then trained in interventional pulmonology, covering flexible bronchoscopy, lung biopsy and pleural procedures, and completed the Diploma in Allergy and Asthma at Christian Medical College, Vellore.',
      'At the clinic she performs and reads lung function tests and allergy skin tests herself, and manages asthma, COPD, chronic cough, sleep apnea and other lung conditions.',
      'Her published research studied Vitamin D deficiency in patients admitted with acute asthma attacks.',
    ],
    qualifications: [
      { degree: 'MBBS', institution: 'Dr. NTR University of Health Sciences, Vijayawada' },
      { degree: 'MD, Pulmonary Medicine', institution: 'Jawaharlal Nehru Medical College, KLE University, Belagavi' },
      { degree: 'Fellowship in Interventional Pulmonology (FIP)', institution: 'Bronchoscopy, lung biopsy and pleural procedures' },
      { degree: 'Diploma in Allergy and Asthma (DAA)', institution: 'Christian Medical College, Vellore' },
    ],
    memberships: [
      'Indian Chest Society',
      'European Respiratory Society',
      'Academy of Allergy and Immunology',
    ],
    publications: [
      {
        title: 'Prevalence of Vitamin D deficiency in acute exacerbations of bronchial asthma',
        journal: 'Indian Journal of Health Sciences and Biomedical Research (KLEU)',
        // TODO: add the year and a link to the paper.
        year: '',
        url: '',
      },
    ],
    // TODO: confirm the languages Dr. Srinija consults in.
    languages: ['English', 'Telugu'],
    profiles: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dr-srinija-kummaraganti-036381348/' },
    ],
  },

  // ---------------------------------------------------------------- Clinic
  clinic: {
    name: 'TrueMed Diagnostics and Clinics',
    unit: 'First Floor, Plot No. 141',
    streetAddress: 'Madhava Hills, Kondapur',
    locality: 'Kondapur',
    city: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
    country: 'IN',
    landmark: 'Near Botanical Garden Road',
    mapsUrl: 'https://maps.google.com/?q=True+Med+Diagnostics+and+Clinics+Kondapur+Hyderabad',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=True%20Med%20Diagnostics%20and%20Clinics%20Kondapur%20Hyderabad&output=embed',
    // TODO: add exact coordinates from Google Maps (right-click the pin).
    geo: null,
    hours: [
      {
        days: 'Monday to Saturday',
        sessions: ['10:00 am to 1:30 pm', '5:30 pm to 8:30 pm'],
        schema: [
          { days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], opens: '10:00', closes: '13:30' },
          { days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], opens: '17:30', closes: '20:30' },
        ],
      },
      {
        days: 'Sunday',
        sessions: ['10:00 am to 1:00 pm, by appointment'],
        schema: [{ days: ['Su'], opens: '10:00', closes: '13:00' }],
      },
    ],
    areasServed: ['Kondapur', 'Gachibowli', 'Madhapur', 'Hitec City', 'Kothaguda', 'Miyapur'],
  },

  // ---------------------------------------------------------------- Contact
  contact: {
    // TODO: the number below is a placeholder. Replace all three with the clinic's real number.
    phone: '+918008812345',
    phoneDisplay: '+91 80088 12345',
    whatsapp: '918008812345',
    // TODO: confirm this mailbox exists.
    email: 'appointments@drsrinijapulmo.com',
  },

  // ---------------------------------------------------------------- Booking
  booking: {
    heading: 'Request an appointment',
    intro: 'The clinic will call or message you on WhatsApp to confirm a time.',
    reasons: [
      'Cough or breathlessness',
      'Asthma or allergy',
      'Allergy skin test',
      'Lung function test',
      'Snoring or sleep problems',
      'Lung check before surgery',
      'A scan or X-ray report',
      'Something else',
    ],
    sessions: ['Morning', 'Evening', 'Either'],
    whatsappGreeting: "Hello, I would like to book an appointment with Dr. Srinija Kummaraganti.",
    successMessage: 'Request sent. The clinic will contact you during clinic hours to confirm.',
    emergencyNote:
      'Severe breathlessness, chest pain or coughing up a lot of blood? Call 108 or go to the nearest emergency department now.',
    consentText:
      'I agree that the clinic may use these details to contact me about this appointment. See the privacy notice.',
    // Optional. Fees may be declared publicly under NMC rules, e.g. 'Consultation fee: ₹800'.
    consultationFee: '',
    // Optional. Link to the doctor's Practo profile.
    practoUrl: '',
  },

  // Set to null to hide. A rating shown as promotion may conflict with the NMC guidelines,
  // so it is hidden by default.
  rating: null,

  // ---------------------------------------------------------------- Home page
  home: {
    heading: "Find out why you're coughing, wheezing or short of breath.",
    intro:
      'Dr. Srinija Kummaraganti is an interventional pulmonologist in Kondapur. She runs and reads your lung function and allergy tests herself, usually in the same visit, and you leave with a written treatment plan.',
    credentialLine:
      'MD in Pulmonary Medicine. Fellowship in Interventional Pulmonology. Diploma in Allergy and Asthma, CMC Vellore.',
    curveCaption:
      'A lung function test draws this curve as you breathe out as hard as you can. A scooped curve like the solid line points to narrowed airways, as in asthma or COPD. Dr. Srinija goes through your curve with you before you leave.',
    symptomsHeading: 'What are you noticing?',
    symptomsIntro: 'Choose the closest match to see what might be causing it and which test can tell.',
    symptoms: [
      {
        id: 'cough',
        label: 'A cough that has lasted over 3 weeks',
        explanation:
          'A cough that does not settle after syrups and antibiotics usually has a cause that can be found and treated directly.',
        commonCauses: 'Cough-variant asthma, post-nasal drip, acid reflux, a lingering infection',
        test: 'Lung function test, with an allergy screen if needed',
        duration: '15 to 25 minutes',
        learnMore: '/conditions/chronic-cough/',
      },
      {
        id: 'breathless',
        label: 'Out of breath on stairs or walking',
        explanation:
          'Breathlessness that is getting worse over months is worth testing early, while treatment can do the most.',
        commonCauses: 'Asthma, COPD, scarring of the lung (ILD)',
        test: 'Lung function test, sometimes a CT scan',
        duration: '15 to 25 minutes',
        learnMore: '/conditions/copd/',
      },
      {
        id: 'allergy',
        label: 'Sneezing, itchy eyes, blocked nose',
        explanation:
          'Nasal allergies often come with asthma. Knowing your exact triggers lets you treat the cause instead of taking tablets every day.',
        commonCauses: 'Dust mites, pollen, mould, pet dander',
        test: 'Allergy skin prick test',
        duration: '30 to 45 minutes',
        learnMore: '/conditions/allergic-rhinitis/',
      },
      {
        id: 'snoring',
        label: 'Loud snoring and tired all day',
        explanation:
          'If someone has seen you stop breathing or gasp in your sleep, it may be sleep apnea, which raises blood pressure and stroke risk.',
        commonCauses: 'A narrow airway, extra weight around the neck, alcohol before bed',
        test: 'Overnight or home sleep study',
        duration: 'One night',
        learnMore: '/conditions/sleep-apnea/',
      },
      {
        id: 'scan',
        label: 'A patch or shadow on a scan',
        explanation:
          'A shadow that does not clear may need a sample from inside the lung to find out what it is.',
        commonCauses: 'Infection, tuberculosis, a growth',
        test: 'Bronchoscopy with sampling',
        duration: '20 to 40 minutes',
        learnMore: '/tests/bronchoscopy/',
      },
      {
        id: 'surgery',
        label: 'Lung check before surgery',
        explanation:
          'Surgeons and anaesthetists often ask for a lung check before an operation, especially for smokers and people with asthma.',
        commonCauses: 'Routine assessment before an operation',
        test: 'Lung function test with a written report',
        duration: '15 to 25 minutes',
        learnMore: '/tests/pre-operative-lung-check/',
      },
    ],
    testsHeading: 'Tests and treatment at the clinic',
    testsIntro: 'Most are done by Dr. Srinija in person, so the doctor who reads your result is the one treating you.',
    firstVisitHeading: 'Your first visit',
    firstVisitSteps: [
      { title: 'Book and bring your reports', text: 'Bring past X-rays, CT scans and the inhalers or medicines you use now.' },
      { title: 'Talk, then test', text: 'If you need a lung function or allergy test, it is usually done the same day.' },
      { title: 'Go home with a written plan', text: 'Your diagnosis, how to use your inhaler, and when to come back.' },
    ],
    faqHeading: 'Questions patients ask',
    faqIntro: 'Anything else? Send the clinic a WhatsApp message. Replies come during clinic hours.',
  },

  // ---------------------------------------------------------------- Tests and procedures
  // Each entry becomes a page at /tests/<slug>/
  tests: [
    {
      slug: 'spirometry-pft',
      name: 'Lung function test (spirometry / PFT)',
      shortName: 'Lung function test',
      summary:
        'A breathing test that measures how much air you can blow out and how fast. It confirms asthma or COPD and shows how well treatment is working.',
      category: 'Diagnostic test',
      intro: [
        'Spirometry is the most common lung function test. You take a deep breath and blow out as hard and as long as you can into a tube connected to a computer. The machine draws a curve and measures values such as FEV1 and FVC.',
        'The test is usually repeated after a few puffs of an inhaler. If your breathing improves clearly, the narrowing in your airways is reversible, which points to asthma.',
      ],
      whoItsFor: [
        'A cough that has lasted more than 3 weeks',
        'Wheezing or breathlessness on exertion',
        'Current or former smokers over 35',
        'People with asthma or COPD, to check control',
        'Before major surgery, when the surgeon asks for a lung check',
      ],
      howToPrepare: [
        'Wear loose clothing that does not restrict your chest.',
        'Do not smoke for at least 4 hours before the test.',
        'Avoid a heavy meal in the 2 hours before.',
        'Ask the clinic whether to skip your inhaler that morning. Do not stop any medicine without advice.',
      ],
      whatHappens: [
        'You sit upright and a soft clip is placed on your nose.',
        'You seal your lips around a mouthpiece and blow out as hard and as long as you can, at least three times.',
        'You take an inhaler and repeat the test after about 15 minutes.',
        'Dr. Srinija reviews the curve with you in the same visit.',
      ],
      duration: '15 to 25 minutes',
      performedBy: 'Performed and read by Dr. Srinija',
      afterwards: 'You can go back to normal activity straight away. Some people feel briefly light-headed from the hard breathing.',
      relatedConditions: ['asthma', 'copd', 'chronic-cough', 'interstitial-lung-disease'],
    },
    {
      slug: 'allergy-skin-prick-test',
      name: 'Allergy skin prick test and immunotherapy',
      shortName: 'Allergy skin test',
      summary:
        'Small drops of common allergens on the forearm show what you react to. If needed, allergy drops or injections can then reduce your sensitivity over time.',
      category: 'Diagnostic test',
      intro: [
        'A skin prick test checks for allergies to things in the air and in food, such as house dust mites, pollen, mould, cockroach and pet dander. It is the standard first test for allergic asthma and allergic rhinitis.',
        'The test follows the protocol taught at the CMC Vellore allergy programme. When the results show a clear trigger, Dr. Srinija may suggest allergen immunotherapy, given as drops under the tongue or as injections, to reduce your reaction over months to years.',
      ],
      whoItsFor: [
        'Frequent sneezing, a runny or blocked nose',
        'Asthma that flares with dust, season changes or pets',
        'Itchy, watery eyes',
        'People considering allergy immunotherapy',
      ],
      howToPrepare: [
        'Stop antihistamine tablets 5 to 7 days before the test, if your doctor agrees. They block the reaction and give a false result.',
        'You can keep using inhalers and nasal sprays.',
        'Tell the clinic about any medicines you take, including for blood pressure.',
      ],
      whatHappens: [
        'Small drops of allergen extract are placed on your forearm.',
        'The skin under each drop is pricked lightly. It feels like a scratch and does not draw blood.',
        'After 15 to 20 minutes, any reaction shows as a small itchy bump and is measured.',
        'Dr. Srinija explains which allergens you react to and what to do about them.',
      ],
      duration: '30 to 45 minutes',
      performedBy: 'Performed and read by Dr. Srinija',
      afterwards: 'Mild itching usually fades within an hour.',
      relatedConditions: ['allergic-rhinitis', 'asthma', 'chronic-cough'],
    },
    {
      slug: 'sleep-study',
      name: 'Sleep study (polysomnography)',
      shortName: 'Sleep study',
      summary:
        'An overnight recording of your breathing, oxygen level and sleep. It confirms sleep apnea and sets the right pressure for a CPAP or BiPAP machine.',
      category: 'Diagnostic test',
      intro: [
        'A sleep study records your breathing, oxygen level, heart rate and body position while you sleep. It shows how often your breathing stops or becomes shallow during the night.',
        'Depending on your symptoms, the study is done at a sleep lab (level 1) or at home with a smaller device (level 3). If you need a CPAP or BiPAP machine, the study also helps set the right pressure.',
      ],
      whoItsFor: [
        'Loud snoring, especially with pauses or gasping',
        'Waking up tired, with a headache or dry mouth',
        'Falling asleep while driving, at work or watching TV',
        'High blood pressure that is hard to control',
      ],
      howToPrepare: [
        'Avoid alcohol and daytime naps on the day of the study.',
        'Avoid caffeine after midday.',
        'Take your usual medicines unless told otherwise.',
      ],
      whatHappens: [
        'Small sensors are placed on your finger, chest and near your nose.',
        'You sleep as normally as you can, at the lab or at home.',
        'The recording is scored and Dr. Srinija reviews it with you at a follow-up visit.',
      ],
      duration: 'One night, results at the follow-up visit',
      performedBy: 'Reviewed by Dr. Srinija',
      relatedConditions: ['sleep-apnea'],
    },
    {
      slug: 'bronchoscopy',
      name: 'Bronchoscopy',
      shortName: 'Bronchoscopy',
      summary:
        'A thin flexible camera passed into the airways under sedation, to look inside, take samples or clear a blockage.',
      category: 'Procedure',
      intro: [
        'In a flexible bronchoscopy, a thin tube with a camera is passed through the nose or mouth into the windpipe and lungs. It lets the doctor see the airways directly.',
        'During the procedure, samples can be taken by washing a small area of the lung (bronchoalveolar lavage, BAL) or by taking a tiny piece of tissue (biopsy). These are sent for tests for infection, tuberculosis or cancer.',
      ],
      whoItsFor: [
        'A patch or shadow on a chest X-ray or CT scan that has not cleared',
        'Coughing up blood',
        'Pneumonia that keeps coming back in the same place',
        'A suspected blockage or inhaled object',
      ],
      howToPrepare: [
        'Do not eat or drink for 6 hours before the procedure.',
        'Tell the clinic if you take blood thinners. They may need to be paused under medical advice.',
        'Bring your CT scan films or reports.',
        'Come with someone who can take you home.',
      ],
      whatHappens: [
        'Your throat and nose are numbed with a spray and you are given a mild sedative.',
        'The bronchoscope is passed into the airways. You can breathe normally throughout.',
        'Samples are taken if needed. The procedure itself takes 20 to 40 minutes.',
        'You rest for an hour or two and go home the same day.',
      ],
      duration: '20 to 40 minutes, plus recovery',
      performedBy: 'Performed by Dr. Srinija',
      afterwards: 'Do not eat or drink until the numbness wears off, usually about 2 hours. A mild sore throat or a little blood-streaked phlegm is common for a day.',
      relatedConditions: ['tuberculosis', 'interstitial-lung-disease', 'chronic-cough'],
    },
    {
      slug: 'thoracentesis',
      name: 'Draining fluid from around the lung (thoracentesis)',
      shortName: 'Pleural fluid drainage',
      summary:
        'An ultrasound-guided procedure to drain fluid from around the lung, to ease breathlessness and find the cause.',
      category: 'Procedure',
      intro: [
        'Fluid can collect in the space between the lung and the chest wall (a pleural effusion). It presses on the lung and makes breathing harder.',
        'In thoracentesis, a fine needle is placed between the ribs under ultrasound guidance and the fluid is drained. A sample is sent for tests for infection, tuberculosis and other causes. If the fluid keeps returning, a small chest tube or other treatment may be needed.',
      ],
      whoItsFor: [
        'Pleural effusion seen on X-ray, ultrasound or CT',
        'Breathlessness caused by fluid around the lung',
        'Chest pain on breathing in, with fluid present',
      ],
      howToPrepare: [
        'Tell the clinic if you take blood thinners.',
        'Bring your chest X-ray or scan reports.',
        'You can usually eat lightly beforehand.',
      ],
      whatHappens: [
        'You sit leaning forward on a table.',
        'Ultrasound marks the best place, and the skin is numbed with local anaesthetic.',
        'A fine needle drains the fluid. You may feel pressure or an urge to cough.',
        'A chest X-ray may be taken afterwards.',
      ],
      duration: '30 to 45 minutes, day care',
      performedBy: 'Performed by Dr. Srinija',
      relatedConditions: ['pleural-effusion', 'tuberculosis'],
    },
    {
      slug: 'pre-operative-lung-check',
      name: 'Lung check before surgery',
      shortName: 'Pre-operative lung check',
      summary:
        'A consultation and lung function test before an operation, with a written report for your surgeon and anaesthetist.',
      category: 'Diagnostic test',
      intro: [
        'Before major surgery, your surgeon or anaesthetist may ask for a lung check, especially if you smoke, have asthma or COPD, or get breathless.',
        'The visit includes a review of your history, an examination and a lung function test. You receive a written report with any steps to take before surgery, such as changing inhalers or treating an infection first.',
      ],
      whoItsFor: [
        'Anyone referred by a surgeon or anaesthetist',
        'Smokers and former smokers before major surgery',
        'People with asthma, COPD or other lung disease',
      ],
      howToPrepare: [
        'Bring the referral letter and your surgery date.',
        'Bring your current medicines and any recent X-ray or blood reports.',
        'Follow the spirometry preparation on the lung function test page.',
      ],
      whatHappens: [
        'Consultation and examination.',
        'Lung function test.',
        'A written report on the same day where possible.',
      ],
      duration: 'About 45 minutes',
      performedBy: 'Performed and read by Dr. Srinija',
      relatedConditions: ['copd', 'asthma'],
    },
  ],

  // ---------------------------------------------------------------- Conditions
  // Each entry becomes a page at /conditions/<slug>/
  conditions: [
    {
      slug: 'asthma',
      name: 'Asthma',
      shortName: 'Asthma',
      summary:
        'Long-term inflammation of the airways that causes wheezing, chest tightness and cough, often worse at night or with triggers.',
      overview: [
        'In asthma, the airways are inflamed and react strongly to triggers such as dust, cold air, smoke or exercise. They narrow, and breathing becomes harder.',
        'Some people only cough, often at night, without wheezing. This is called cough-variant asthma.',
        'Asthma cannot be cured, but with the right inhaler, used the right way, most people control it well and lead normal lives.',
      ],
      symptoms: [
        'Wheezing when breathing out',
        'Cough, often at night or early morning',
        'Breathlessness with exercise or cold air',
        'Chest tightness',
      ],
      causes: [
        'Allergies to dust mites, pollen, mould or pets',
        'Viral chest infections',
        'Smoke and air pollution',
        'Family history of asthma or allergy',
      ],
      whenToSeeADoctor:
        'See a doctor if you wheeze, cough at night or need your reliever inhaler more than twice a week. Get emergency help if you cannot speak in full sentences or your reliever is not working.',
      relatedTests: ['spirometry-pft', 'allergy-skin-prick-test'],
      treatment: [
        'A preventer inhaler that reduces airway inflammation, often combined with a long-acting reliever.',
        'Checking and correcting inhaler technique at every visit.',
        'Identifying and reducing exposure to your triggers.',
        'For allergic asthma, allergen immunotherapy may be considered.',
        'For severe asthma that stays uncontrolled, further tests and newer injectable treatments.',
      ],
    },
    {
      slug: 'allergic-rhinitis',
      name: 'Allergic rhinitis (nasal allergy)',
      shortName: 'Nasal allergy',
      summary:
        'An allergic reaction in the nose that causes sneezing, a runny or blocked nose and itchy eyes. It often goes with asthma.',
      overview: [
        'Allergic rhinitis happens when the lining of the nose reacts to things in the air, such as house dust mites or pollen.',
        'It is closely linked to asthma. Treating the nose well often improves asthma control too.',
      ],
      symptoms: [
        'Bouts of sneezing, often in the morning',
        'Runny or blocked nose',
        'Itchy nose, eyes or throat',
        'Mucus dripping down the back of the throat, causing cough',
      ],
      causes: ['House dust mites in bedding and carpets', 'Grass and weed pollen', 'Mould', 'Pet dander and cockroaches'],
      whenToSeeADoctor:
        'See a doctor if symptoms affect sleep, work or school, if over-the-counter tablets are not enough, or if you also cough or wheeze.',
      relatedTests: ['allergy-skin-prick-test', 'spirometry-pft'],
      treatment: [
        'Skin prick testing to find your triggers.',
        'Practical steps to reduce exposure, such as mite-proof bed covers.',
        'Steroid nasal sprays and non-drowsy antihistamines.',
        'Allergen immunotherapy for people with clear triggers whose symptoms continue.',
      ],
    },
    {
      slug: 'copd',
      name: 'COPD (chronic bronchitis and emphysema)',
      shortName: 'COPD',
      summary:
        'Long-term lung damage, usually from smoking or smoke from cooking fuel, that causes breathlessness and a daily cough.',
      overview: [
        'COPD (chronic obstructive pulmonary disease) is lasting damage to the airways and air sacs. Air gets trapped in the lungs, and breathing out becomes slow and hard.',
        'In India, smoke from wood and other cooking fuels is a common cause, as well as tobacco.',
        'The damage cannot be reversed, but treatment slows it down, eases breathlessness and reduces flare-ups.',
      ],
      symptoms: [
        'Breathlessness on stairs or walking, slowly getting worse',
        'A daily cough, often with phlegm',
        'Frequent chest infections',
        'Tiredness',
      ],
      causes: [
        'Cigarette or beedi smoking',
        'Long exposure to smoke from wood, coal or dung cooking fires',
        'Dust and fumes at work',
        'Rarely, an inherited condition (alpha-1 antitrypsin deficiency)',
      ],
      whenToSeeADoctor:
        'See a doctor if you smoke or used to, and you get breathless or cough most days. Get urgent help if breathlessness suddenly gets much worse or your lips turn blue.',
      relatedTests: ['spirometry-pft', 'pre-operative-lung-check'],
      treatment: [
        'Stopping smoking, with support and medicines if needed.',
        'Long-acting inhalers, chosen to suit your symptoms and inhaler technique.',
        'Breathing exercises and pulmonary rehabilitation.',
        'Flu and pneumonia vaccines.',
        'Home oxygen for people with low oxygen levels.',
      ],
    },
    {
      slug: 'chronic-cough',
      name: 'Chronic cough',
      shortName: 'Chronic cough',
      summary: 'A cough that has lasted more than 8 weeks in adults, or keeps returning after syrups and antibiotics.',
      overview: [
        'A cough lasting more than 8 weeks is called chronic. Most cases have a cause that can be found with a careful history and a few simple tests.',
        'Often more than one cause is involved, so treatment is done step by step.',
      ],
      symptoms: [
        'Cough most days for weeks or months',
        'Tickling or irritation in the throat',
        'Coughing fits set off by talking, cold drinks or lying down',
        'Disturbed sleep',
      ],
      causes: [
        'Cough-variant asthma',
        'Post-nasal drip from nasal allergy or sinus problems',
        'Acid reflux',
        'A previous infection that left the airways sensitive',
        'Some blood pressure medicines (ACE inhibitors)',
      ],
      whenToSeeADoctor:
        'See a doctor if a cough lasts more than 3 weeks. See one sooner if you cough up blood, lose weight, have night sweats or fever.',
      relatedTests: ['spirometry-pft', 'allergy-skin-prick-test', 'bronchoscopy'],
      treatment: [
        'Finding the cause with lung function and allergy tests, and an X-ray if needed.',
        'Treating each cause in turn, such as asthma, nasal allergy or reflux.',
        'Reviewing medicines that can cause cough.',
      ],
    },
    {
      slug: 'sleep-apnea',
      name: 'Obstructive sleep apnea',
      shortName: 'Sleep apnea',
      summary:
        'Repeated blocking of the airway during sleep, causing loud snoring, pauses in breathing and daytime tiredness.',
      overview: [
        'In obstructive sleep apnea, the throat closes again and again during sleep. Breathing stops for a few seconds, oxygen drops, and the brain briefly wakes you to breathe.',
        'Untreated sleep apnea raises the risk of high blood pressure, heart disease, stroke and road accidents.',
      ],
      symptoms: [
        'Loud snoring with pauses or gasping',
        'Waking up tired even after a full night',
        'Morning headaches or dry mouth',
        'Sleepiness while driving or working',
      ],
      causes: ['A narrow airway or large tonsils', 'Extra weight, especially around the neck', 'Alcohol or sleeping pills at night', 'Sleeping on your back'],
      whenToSeeADoctor:
        'See a doctor if someone has noticed pauses in your breathing at night, or if you feel sleepy during the day despite enough hours in bed.',
      relatedTests: ['sleep-study'],
      treatment: [
        'A sleep study to confirm the diagnosis and its severity.',
        'CPAP or BiPAP machine, with help choosing and fitting the mask.',
        'Weight loss, avoiding alcohol at night, and changing sleep position.',
        'Referral to an ENT surgeon when there is a structural cause.',
      ],
    },
    {
      slug: 'tuberculosis',
      name: 'Tuberculosis (TB)',
      shortName: 'Tuberculosis',
      summary: 'A bacterial infection, most often of the lungs, that spreads through the air and needs a full course of treatment.',
      overview: [
        'Tuberculosis is caused by a bacterium that spreads through the air when someone with active lung TB coughs. It usually affects the lungs but can affect other parts of the body, including the lining of the lung.',
        'Early diagnosis and a full, supervised course of treatment matter, both for your health and to stop drug-resistant TB.',
      ],
      symptoms: [
        'Cough for more than 2 weeks',
        'Fever in the evening and night sweats',
        'Weight loss and poor appetite',
        'Blood in the phlegm',
      ],
      causes: ['Close contact with someone who has active TB', 'Weak immunity, from diabetes, HIV or some medicines', 'Malnutrition'],
      whenToSeeADoctor:
        'See a doctor if a cough lasts more than 2 weeks, especially with fever, weight loss or blood in the phlegm.',
      relatedTests: ['bronchoscopy', 'thoracentesis'],
      treatment: [
        'Sputum tests, including rapid molecular tests that also check for drug resistance.',
        'Bronchoscopy for a sample when sputum tests are negative.',
        'A full course of anti-TB treatment under the national programme guidelines, with regular follow-up.',
      ],
    },
    {
      slug: 'interstitial-lung-disease',
      name: 'Interstitial lung disease (lung fibrosis)',
      shortName: 'Interstitial lung disease',
      summary: 'A group of conditions that scar and stiffen the lung tissue, causing breathlessness and a dry cough.',
      overview: [
        'In interstitial lung disease (ILD), the tissue around the air sacs becomes inflamed or scarred. The lungs become stiff, and oxygen passes into the blood less easily.',
        'There are many types. Finding the type guides treatment, which can slow the disease in many cases.',
      ],
      symptoms: [
        'Breathlessness on exertion that slowly gets worse',
        'A dry, persistent cough',
        'Tiredness',
        'Rounded, swollen fingertips (clubbing)',
      ],
      causes: [
        'Autoimmune conditions such as rheumatoid arthritis or scleroderma',
        'Exposure to birds, especially pigeon droppings',
        'Mould and dust at work',
        'Some medicines',
        'Often no cause is found (idiopathic)',
      ],
      whenToSeeADoctor:
        'See a doctor if you have breathlessness or a dry cough that has been getting worse for weeks to months.',
      relatedTests: ['spirometry-pft', 'bronchoscopy'],
      treatment: [
        'High-resolution CT scan and lung function tests, including how well oxygen passes into the blood.',
        'Avoiding the exposure that caused it, where one is found.',
        'Anti-fibrotic or anti-inflammatory medicines, depending on the type.',
        'Oxygen and pulmonary rehabilitation when needed.',
      ],
    },
    {
      slug: 'pleural-effusion',
      name: 'Pleural effusion (fluid around the lung)',
      shortName: 'Pleural effusion',
      summary: 'Fluid collecting between the lung and the chest wall, causing breathlessness and chest pain.',
      overview: [
        'A pleural effusion is a build-up of fluid in the space around the lung. Large effusions press on the lung and make it hard to breathe.',
        'Finding the cause is the key step. A sample of the fluid usually shows whether it comes from infection, tuberculosis, heart, kidney or liver disease, or cancer.',
      ],
      symptoms: [
        'Breathlessness, worse when lying flat',
        'Sharp chest pain when breathing in or coughing',
        'Dry cough',
        'Fever, if the fluid is infected',
      ],
      causes: ['Pneumonia', 'Tuberculosis', 'Heart, kidney or liver disease', 'Cancer'],
      whenToSeeADoctor:
        'See a doctor promptly if you have new breathlessness or chest pain on breathing. Get emergency help if breathlessness is severe.',
      relatedTests: ['thoracentesis', 'bronchoscopy'],
      treatment: [
        'Ultrasound-guided drainage of the fluid, with tests on the sample.',
        'Treating the cause, such as antibiotics, anti-TB treatment or managing heart failure.',
        'A chest tube or other procedures if the fluid keeps returning.',
      ],
    },
  ],

  // ---------------------------------------------------------------- FAQs (home page)
  faqs: [
    {
      question: 'Does Dr. Srinija do the lung function test herself?',
      answer: 'Yes. She runs the test and reads the result, then talks you through it in the same visit.',
    },
    {
      question: 'When should I see a lung specialist instead of my GP?',
      answer:
        'When a cough lasts over 3 weeks, you get breathless doing things you used to manage, you snore heavily and wake tired, or a scan shows a shadow that has not cleared.',
    },
    {
      question: 'Does the allergy skin test hurt?',
      answer: 'It feels like a light scratch on the forearm and does not draw blood. Results show in about 20 minutes.',
    },
    {
      question: 'How do I get ready for a lung function test?',
      answer:
        'Do not smoke for 4 hours or eat a heavy meal for 2 hours beforehand. Ask the clinic whether to skip your inhaler that morning.',
    },
    {
      question: 'Will I need inhalers for life?',
      answer:
        'It depends on the cause. Many people with asthma can step down to a low dose once it is controlled. Dr. Srinija reviews your dose at each visit.',
    },
    {
      question: 'Can I book on WhatsApp?',
      answer: 'Yes. Send your name, what you would like to be seen for, and whether you prefer a morning or evening slot.',
    },
  ],

  // ---------------------------------------------------------------- Testimonials
  // Hidden by default. The NMC guidelines (Oct 2026) do not allow patient testimonials
  // to be used for promotion. Leave show: false unless the doctor has legal advice otherwise.
  testimonials: { show: false, items: [] },

  // ---------------------------------------------------------------- Privacy and disclaimer
  legal: {
    lastUpdated: '16 November 2026',
    privacy: [
      {
        heading: 'What we collect',
        paragraphs: [
          'When you request an appointment, we collect your name, mobile number, the reason for your visit, and your preferred day and session. Any extra note you add is optional. Please do not include detailed medical history in the form.',
        ],
      },
      {
        heading: 'Why we collect it',
        paragraphs: ['We use these details only to contact you about your appointment. We do not use them for marketing and do not sell them.'],
      },
      {
        heading: 'Who handles it',
        paragraphs: [
          'Form requests are delivered to the clinic by email through a form service. If you choose WhatsApp, your message is handled by WhatsApp (Meta). Clinic staff see your request in order to book your visit.',
        ],
      },
      {
        heading: 'How long we keep it',
        paragraphs: ['Appointment requests are deleted within 90 days unless they become part of your medical record at the clinic.'],
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'You can ask us to see, correct or delete your details at any time by writing to the email address below. We follow the Digital Personal Data Protection Act, 2023.',
        ],
      },
      {
        heading: 'This website',
        paragraphs: ['This website does not use advertising or tracking cookies.'],
      },
    ],
    disclaimer: [
      'The information on this website is for general education about lung, allergy and sleep conditions. It is not a diagnosis and does not replace a consultation with a doctor who has examined you.',
      'Do not start, stop or change any medicine based on this website. If you have severe breathlessness, chest pain or are coughing up a lot of blood, call 108 or go to the nearest emergency department.',
    ],
  },
}
