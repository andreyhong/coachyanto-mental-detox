export interface ModuleItem {
  number: string;
  title: string;
  duration: string;
  summary: string;
  takeaways: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const masterclassData = {
  hero: {
    badge: "BATCH 12 PENDAFTARAN DIBUKA • ONLINE INTERACTIVE VIA ZOOM",
    title: "Hentikan Overthinking, Bangun Mental Clarity di Bawah Tekanan",
    subtitle: "Framework praktis berbasis Neuro-Linguistic Programming (NLP) untuk para Leader, Entrepreneur, dan Profesional yang ingin menjernihkan kepala, meredakan mental noise, dan mengambil keputusan strategis dengan tenang.",
    stats: [
      { value: "1,500+", label: "Alumni Leader & Profesional" },
      { value: "98.4%", label: "Tingkat Kepuasan Peserta" },
      { value: "4.9 / 5.0", label: "Rating Evaluasi Kelas" },
      { value: "100%", label: "Framework Actionable & Praktis" },
    ],
    contactWhatsapp: "https://wa.me/628118178971?text=Halo%20Coach%20Yanto%20%26%20Tim%20Mind%20Mastery%20Academy%2C%20saya%20ingin%20mendaftar%20Mental%20Detox%20Masterclass.",
  },
  symptoms: [
    {
      id: 1,
      title: "Pikiran Tetap 'Lembur' Saat Jam Kerja Selesai",
      desc: "Tubuh sudah di kasur, tetapi otak masih memutar skenario rapat besok, email yang belum dibalas, atau ketakutan yang belum tentu terjadi.",
    },
    {
      id: 2,
      title: "Analysis Paralysis Sebelum Mengambil Keputusan",
      desc: "Terlalu banyak menimbang skenario buruk hingga menunda eksekusi penting yang akhirnya menghambat pertumbuhan bisnis atau karier Anda.",
    },
    {
      id: 3,
      title: "Lelah Mental Kronis (Brain Fog)",
      desc: "Bukan lelah fisik karena olahraga, melainkan energi terkuras habis karena otak dipenuhi 'mental clutter' dan tab-tab pikiran yang tidak pernah ditutup.",
    },
    {
      id: 4,
      title: "Emosi Reaktif di Situasi Penuh Tekanan",
      desc: "Toleransi stres menipis, mudah tersulut rasa cemas atau frustrasi saat menghadapi perubahan mendadak dari tim maupun klien.",
    },
  ],
  pillars: [
    {
      step: "01",
      title: "Neural Pattern Interrupt",
      tagline: "Hentikan Spiral Overthinking Seketika",
      desc: "Teknik NLP presisi untuk memutus siklus ruminasi mental dalam waktu kurang dari 90 detik saat gelombang kecemasan mulai menyerang.",
    },
    {
      step: "02",
      title: "Cognitive De-Cluttering & Reframing",
      tagline: "Ubah Kekacauan Pikiran Menjadi Peta Kejernihan",
      desc: "Metode menguraikan tumpukan masalah menjadi elemen yang dapat dikendalikan, menyaring 80% kebisingan mental yang tidak esensial.",
    },
    {
      step: "03",
      title: "Grounded Decision Velocity",
      tagline: "Eksekusi Keputusan Tanpa Keraguan Berulang",
      desc: "Framework pengambilan keputusan berbasis ketenangan batin (*calm confidence*), menjaga Anda tetap objektif di bawah tekanan tinggi.",
    },
  ],
  modules: [
    {
      number: "01",
      title: "Neuroscience of Overthinking & The Root Cause",
      duration: "Sesi 1 • 60 Menit",
      summary: "Memahami bagaimana amygdala dan Default Mode Network (DMN) otak menciptakan ilusi bahaya yang memicu overthinking.",
      takeaways: [
        "Mendeteksi trigger otomatis yang mengaktifkan overthinking",
        "Perbedaan antara strategic thinking vs unproductive ruminating",
        "Latihan pernapasan dan grounding neurologis penurun hormon kortisol",
      ],
    },
    {
      number: "02",
      title: "NLP Pattern Interrupt & State Management",
      duration: "Sesi 2 • 75 Menit",
      summary: "Menguasai teknik anchoring dan reframing NLP untuk mengubah respon mental dari cemas menjadi terkendali secara instan.",
      takeaways: [
        "Teknik 'Submodality Shift' untuk meredakan gambaran mental menakutkan",
        "Membangun Anchor Ketenangan (Peace Anchor) yang bisa dipicu kapan saja",
        "Menetralkan 'inner critic' dan suara meragukan dalam diri",
      ],
    },
    {
      number: "03",
      title: "Strategic Mental Clarity & Decision Under Pressure",
      duration: "Sesi 3 • 60 Menit",
      summary: "Mengikis analysis paralysis dan mengembalikan kecepatan pengambilan keputusan bagi leader dan eksekutif.",
      takeaways: [
        "Framework 3-Filter Decision Making untuk situasi ambigu",
        "Cara memisahkan fakta objektif dari asumsi ketakutan",
        "Mengelola ekspektasi tim tanpa membebani kapasitas mental sendiri",
      ],
    },
    {
      number: "04",
      title: "The 15-Minute Daily Mental Detox Ritual",
      duration: "Sesi 4 • 45 Menit",
      summary: "Membangun sistem dan ritual harian sederhana namun kuat agar pikiran Anda selalu segar dan siap menghadapi tantangan setiap hari.",
      takeaways: [
        "Protokol 'Morning Clarity' sebelum membuka smartphone",
        "Protokol 'Evening Brain Dump' untuk tidur lelap dan regenerasi saraf",
        "Panduan integrasi dengan E-Workbook harian",
      ],
    },
  ] as ModuleItem[],
  coach: {
    name: "Coach Yanto",
    title: "Executive Mental Clarity & Leadership Expert",
    credentials: [
      "Founder Mind Mastery Academy",
      "Licensed Master Practitioner of Neuro-Linguistic Programming (NLP)",
      "Executive Coach berpengalaman mendampingi 1,500+ Pemimpin, CEO, & Profesional",
      "Spesialisasi: Mental Toughness, Emotional Agility, dan Decision Under Pressure",
    ],
    bio: "Coach Yanto telah mendedikasikan lebih dari satu dekade dalam mempelajari neurosains praktis, psikologi perilaku, dan NLP. Visi utamanya adalah membantu para profesional dan entrepreneur mencapai kesuksesan luar biasa tanpa harus mengorbankan kedamaian mental dan kesehatan psikologis mereka.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  bonuses: [
    {
      title: "E-Workbook Mental Detox Eksklusif",
      value: "Rp 350.000",
      desc: "Panduan interaktif dan lembar kerja harian berisi checklist, latihan pernapasan, dan template decision framework.",
    },
    {
      title: "Akses Rekaman Video Penuh (Full Recording)",
      value: "Rp 750.000",
      desc: "Tonton ulang seluruh sesi materi dan studi kasus kapan pun Anda butuhkan, tanpa batas waktu.",
    },
    {
      title: "Official E-Certificate Mind Mastery Academy",
      value: "Rp 250.000",
      desc: "Sertifikat resmi keikutsertaan berverifikasi untuk menunjang profil profesional dan LinkedIn Anda.",
    },
    {
      title: "VIP Q&A & Group Discussion Session",
      value: "Rp 500.000",
      desc: "Sesi tanya jawab langsung bersama Coach Yanto untuk membedah studi kasus dan tantangan spesifik Anda.",
    },
  ],
  testimonials: [
    {
      name: "Budi Santoso",
      role: "VP of Operations",
      company: "Tech Logistics Enterprise",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "Sebagai VP yang memimpin 200+ staf, kepala saya tidak pernah tenang sampai tengah malam. Mengikuti kelas Coach Yanto memberi saya framework konkret untuk 'mematikan switch' kerja. Keputusan saya sekarang jauh lebih tenang dan akurat.",
      rating: 5,
    },
    {
      name: "Priska Maharani",
      role: "Founder & Creative Director",
      company: "Studio Agensi Brand",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      content: "Dulu saya sering terjebak analysis paralysis hingga tim kebingungan. Teknik Submodality Shift dari Coach Yanto luar biasa ampuh! Saya bisa kembali fokus pada ide esensial hanya dalam hitungan menit.",
      rating: 5,
    },
    {
      name: "Hendra Wijaya",
      role: "Senior Product Manager",
      company: "Fintech Unicorn",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content: "Buku dan seminar lain banyak bicara teori, tapi Mental Detox Masterclass ini murni metode taktis. Latihan 15 menit malam hari membuat kualitas tidur saya meningkat drastis setelah berbulan-bulan insomnia ringan.",
      rating: 5,
    },
  ] as TestimonialItem[],
  faqs: [
    {
      question: "Apakah masterclass ini dilakukan secara langsung (live) atau rekaman?",
      answer: "Kelas diselenggarakan secara LIVE interaktif via Zoom bersama Coach Yanto. Peserta dapat berinteraksi dan bertanya langsung. Namun, Anda juga akan mendapatkan akses rekaman penuh seumur hidup.",
    },
    {
      question: "Saya bukan seorang eksekutif atau manager, apakah materi ini cocok untuk saya?",
      answer: "Sangat cocok. Framework Mental Detox dirancang untuk siapa saja yang mengalami overthinking kronis, kelelahan mental, stres kerja, atau kesulitan berkonsentrasi dalam mengambil langkah hidup yang penting.",
    },
    {
      question: "Apakah saya membutuhkan latar belakang ilmu psikologi atau NLP sebelumnya?",
      answer: "Sama sekali tidak. Coach Yanto menyampaikan materi dengan bahasa yang sangat aplikatif, tanpa jargon rumit, disertai analogi praktis yang langsung bisa Anda praktekkan di hari yang sama.",
    },
    {
      question: "Bagaimana jika pada tanggal pelaksanaan saya berhalangan hadir?",
      answer: "Tenang saja. Seluruh peserta mendapatkan akses video rekaman lengkap berkualitas tinggi dan materi e-Workbook yang dapat dipelajari secara fleksibel kapan saja.",
    },
    {
      question: "Bagaimana cara melakukan pembayaran dan konfirmasi tiket?",
      answer: "Anda dapat klik tombol daftar yang terhubung langsung ke WhatsApp Admin resmi Mind Mastery Academy (+62 811-8178-971) untuk memilih metode pembayaran (Transfer Bank, QRIS, dll) dan menerima link Zoom.",
    },
  ] as FaqItem[],
};
