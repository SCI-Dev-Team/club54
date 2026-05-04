/** Contact page + general inquiry form labels for `useSiteLanguage()`. */

export type InquiryGeneralLabels = {
  title: string;
  successMessage: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  numberOfPeople: string;
  message: string;
  submit: string;
  submitting: string;
  footnote: string;
  placeholderName: string;
  placeholderCompany: string;
  placeholderMessage: string;
};

export const CONTACT_COPY = {
  en: {
    heroEyebrow: 'Working concept — confidential',
    heroTitle: 'Contact & CSR alignment',
    heroBody:
      'Reach out for communication, partnership exploration, or general inquiries about Club54. Further operational details are shared in subsequent collaboration stages as the project develops.',

    sectionContactInfo: 'Contact Information',
    labelAddress: 'Address',
    labelPhone: 'Phone',
    labelEmail: 'Email',
    emailNote: 'We aim to respond within a few business days',
    labelAvailability: 'Availability',
    availabilityBody: 'Scheduling details will follow formal alignment discussions.',

    followUs: 'Follow Us',

    sectionLocation: 'Location',
    countryName: 'Cambodia',
    mapIframeTitle: 'Club54 area — Google Maps',
    openInGoogleMaps: 'Open in Google Maps',

    dirTransitTitle: 'Transit',
    dirTransitBody:
      'Central Phnom Penh — plan extra time during peak traffic; grab apps serve Street 242 well.',
    dirParkingTitle: 'Parking',
    dirParkingBody:
      'Street-side and nearby paid parking vary by time of day; confirm locally when you visit.',
    dirBusTitle: 'Bus & tuk-tuk',
    dirBusBody:
      'Use Google Maps or local ride apps from your hotel or meeting point for the quickest route.',

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'How do we explore partnership?',
        a: 'Share your organization’s focus (skills, events, storytelling, or responsible product collaborations) via the form or email. We will route your note to the appropriate lead and suggest next steps aligned with the Club54 concept.',
      },
      {
        q: 'Is this a public venue listing?',
        a: 'This site presents a working concept for communication and CSR alignment. It is not authorization to reproduce or implement the model without written agreement from the founding team.',
      },
      {
        q: 'When will operational details be available?',
        a: 'Timelines, staffing, pricing (if applicable), and venue specifics will be shared as collaborations mature—consistent with the overview shared here.',
      },
      {
        q: 'Can media or communications teams get assets?',
        a: 'Yes—note your needs (brand narrative, impact storytelling, co-branded campaigns, or partner materials) and the communications team will coordinate under agreed guidelines.',
      },
    ],

    inquiryGeneral: {
      title: 'Send Us a Message',
      successMessage: 'Thank you! We’ll get back to you within 24 hours.',
      fullName: 'Full Name *',
      email: 'Email Address *',
      phone: 'Phone Number',
      company: 'Company Name',
      numberOfPeople: 'Number of People',
      message: 'Message *',
      submit: 'Submit Inquiry',
      submitting: 'Sending…',
      footnote: '* Required fields. We’ll respond to your inquiry within 24 hours.',
      placeholderName: 'John Doe',
      placeholderCompany: 'Your Company',
      placeholderMessage: 'Tell us about your requirements…',
    } satisfies InquiryGeneralLabels,
  },
  km: {
    heroEyebrow: 'គំនិតការងារ · សម្ងាត់',
    heroTitle: 'ទំនាក់ទំនង និងការសម្រប CSR',
    heroBody:
      'ទាក់ទងសម្រាប់ទំនាក់ទំនង ការស្វែងរកភាពជាដៃគូ ឬសំណួរទូទៅអំពី Club54។ ព័ត៌មានប្រតិបត្តិការបន្ថែមនឹងត្រូវបានចែករំលែកនៅដំណាក់ការសហការបន្ទាប់ ពេលគម្រោងរីកចម្រើន។',

    sectionContactInfo: 'ព័ត៌មានទំនាក់ទំនង',
    labelAddress: 'អាសយដ្ឋាន',
    labelPhone: 'ទូរស័ព្ទ',
    labelEmail: 'អ៊ីមែល',
    emailNote: 'យើងព្យាយាមឆ្លើយតបក្នុងរយៈពេលពីរបីថ្ងៃធ្វើការ',
    labelAvailability: 'ពេលវេលាទំនាក់ទំនង',
    availabilityBody:
      'ព័ត៌មានការណាត់ជួបនឹងត្រូវបានចែករំលែកបន្ទាប់ពីមានការសន្ទនាសម្របផ្លូវការ។',

    followUs: 'តាមដានយើង',

    sectionLocation: 'ទីតាំង',
    countryName: 'កម្ពុជា',
    mapIframeTitle: 'តំបន់ Club54 — ផែនទី Google',
    openInGoogleMaps: 'បើកនៅ Google Maps',

    dirTransitTitle: 'ធ្វើដំណើរសាធារណៈ',
    dirTransitBody:
      'កណ្តាលរាជធានីភ្នំពេញ — គ្រោងពេលបន្ថែមនៅម៉ោងចរាចរណ៍ខ្លាំង; កម្មវិធីហៅរថយន្តប្រើបានល្អតាមផ្លូវ ២៤២។',
    dirParkingTitle: 'កន្លែងចំណត',
    dirParkingBody:
      'ការចតតាមផ្លូវ និងកន្លែងគិតថ្លៃនៅក្បែរប្រែប្រួលតាមម៉ោង; សូមបញ្ជាក់ក្នុងតំបន់នៅពេលមកទស្សនា។',
    dirBusTitle: 'រថយន្តក្រុង និងតុកតុក',
    dirBusBody:
      'ប្រើ Google Maps ឬកម្មវិធីហៅរថយន្តក្នុងស្រុកពីសណ្ឋាគារ ឬកន្លែងប្រជុំ ដើម្បីផ្លូវលឿនបំផុត។',

    faqTitle: 'សំណួរញឹកញាប់',
    faqs: [
      {
        q: 'តើយើងស្វែងរកភាពជាដៃគូយ៉ាងដូចម្តេច?',
        a: 'ចែករំលែកផ្នែកសំខាន់របស់អង្គការអ្នក (ជំនាញ ព្រឹត្តិការណ៍ រឿងរ៉ាវផលប៉ះពាល់ ឬការសហការផលិតផលទទួលខុសត្រូវ)តាមបែបបទ ឬអ៊ីមែល។ យើងនឹងបញ្ជូនសំណួររបស់អ្នកទៅអ្នកទទួលខុសត្រូវ និងស្នើជំហានបន្ទាប់ស្របនឹងគំនិត Club54។',
      },
      {
        q: 'តើនេះជាបញ្ជីកន្លែងសាធារណៈទេ?',
        a: 'គេហទំព័រនេះបង្ហាញគំនិតការងារសម្រាប់ទំនាក់ទំនង និងការសម្រប CSR។ វាមិនមានន័យថាបានអនុញ្ញាតឱ្យចម្លង ឬអនុវត្តម៉ូដែលដោយគ្មានកិច្ចព្រមព្រៀងលីខិតពីក្រុមបង្កើតទេ។',
      },
      {
        q: 'ពេលណាព័ត៌មានប្រតិបត្តិការនឹងមាន?',
        a: 'កាលវិភាគ បុគ្គលិក តម្លៃ (ប្រសិនបើមាន) និងលម្អិតកន្លែងនឹងត្រូវបានចែករំលែកនៅពេលការសហការរីកចម្រើន — ស្របនឹងសង្ខេបដែលបានចែករំលែកនៅទីនេះ។',
      },
      {
        q: 'តើក្រុមប្រព័ន្ធផ្សព្វផ្សាយ ឬទំនាក់ទំនងអាចយកសម្ភារៈបានទេ?',
        a: 'បាន — សរសេរតម្រូវការរបស់អ្នក (រឿងរ៉ាវម៉ាក រឿងផលប៉ះពាល់ យុទ្ធនាការរួមម៉ាក ឬសម្ភារៈដៃគូ) ហើយក្រុមទំនាក់ទំនងនឹងសម្របតាមគោលការណ៍ដែលបានព្រមព្រៀង។',
      },
    ],

    inquiryGeneral: {
      title: 'ផ្ញើសារមកយើង',
      successMessage: 'សូមអរគុណ! យើងនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង។',
      fullName: 'ឈ្មោះពេញ *',
      email: 'អាសយដ្ឋានអ៊ីមែល *',
      phone: 'លេខទូរស័ព្ទ',
      company: 'ឈ្មោះក្រុមហ៊ុន',
      numberOfPeople: 'ចំនួនមនុស្ស',
      message: 'សារ *',
      submit: 'ដាក់ស្នើសំណួរ',
      submitting: 'កំពុងផ្ញើ…',
      footnote: '* វាលដែលត្រូវការ។ យើងនឹងឆ្លើយតបសំណួររបស់អ្នកក្នុងរយៈពេល ២៤ ម៉ោង។',
      placeholderName: 'គ្រាន់តែឈ្មោះ',
      placeholderCompany: 'ក្រុមហ៊ុនរបស់អ្នក',
      placeholderMessage: 'ប្រាប់យើងពីតម្រូវការរបស់អ្នក…',
    } satisfies InquiryGeneralLabels,
  },
} as const;
