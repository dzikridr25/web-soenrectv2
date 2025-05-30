import { Language, MultilingualText } from '../types';

export interface Translations {
  // Navbar
  navHome: string;
  navServices: string;
  navPortfolio: string;
  navTestimonials: string;
  navAbout: string;
  navContact: string;
  navToggleTheme: string;
  navOpenMenu: string;
  navSwitchToEnglish: string;
  navSwitchToIndonesian: string;
  navSoenrect: string;

  // Hero Section
  heroTitlePart1: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroBtnGetInTouch: string;
  heroBtnViewWork: string;
  heroVideoNotSupported: string;

  // Client Logos
  clientLogosTitle: string;

  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;
  servicesLearnMore: string;
  servicesShowLess: string;
  // servicesRunningTextIntro: string; // Marquee text is generated from service titles

  // Portfolio Section
  portfolioTitle: string;
  portfolioSubtitle: string;
  portfolioCategoryAll: string;
  portfolioViewDetails: string;
  portfolioNoProjects: string;
  // Categories will be translated directly where used or mapped
  portfolioCategoryWebDesign: string;
  portfolioCategoryAppDevelopment: string;
  portfolioCategoryBranding: string;


  // Portfolio Modal
  portfolioModalTechUsed: string;
  portfolioModalGallery: string;
  portfolioModalViewSite: string;
  portfolioModalViewCaseStudy: string;
  portfolioModalClose: string;

  // Testimonials Section
  testimonialsTitle: string;
  testimonialsSubtitle: string;

  // About Us Section
  // aboutUsTitle: string; // This comes from ABOUT_US_TEXT constant
  aboutUsTeamTitle: string;

  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  contactInfoTitle: string;
  contactInfoEmail: string;
  contactInfoPhone: string;
  contactInfoAddress: string;
  contactInfoOfficeHours: string;
  contactInfoOfficeHoursDays: string;
  contactInfoOfficeHoursWeekend: string;
  contactConnectWhatsAppTitle: string;
  contactConnectWhatsAppDesc: string;
  contactConnectWhatsAppButton: string;

  // Footer
  footerTagline: string;
  footerQuickLinks: string;
  footerConnectWithUs: string;
  footerRightsReserved: string;
  footerDesignedWithPassion: string;
  footerSocialFacebook: string;
  footerSocialTwitter: string;
  footerSocialLinkedIn: string;
  footerSocialInstagram: string;


  // Loader
  loaderMessage: string;
  loaderLoading: string;

  // Common
  viewDetails: string;
  previous: string;
  next: string;
  goToSlide: string; // For aria-label like "Go to slide {number}"
}

export const locales: Record<Language, Translations> = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navTestimonials: "Testimonials",
    navAbout: "About Us",
    navContact: "Contact",
    navToggleTheme: "Toggle theme",
    navOpenMenu: "Open main menu",
    navSwitchToEnglish: "Switch to English",
    navSwitchToIndonesian: "Switch to Indonesian",
    navSoenrect: "Soenrect",

    heroTitlePart1: "Meet Your ",
    heroTitleHighlight: "Visual Needs",
    heroSubtitle: "Pasundan Creative Project (Soenrect) is your partner in building innovative and engaging media digital solutions that drive results and inspire users.",
    heroBtnGetInTouch: "Get in Touch",
    heroBtnViewWork: "View Our Work",
    heroVideoNotSupported: "Your browser does not support the video tag.",

    clientLogosTitle: "Trusted by Industry Leaders",

    servicesTitle: "Our Services",
    servicesSubtitle: "We offer a comprehensive suite of digital services to bring your vision to life.",
    servicesLearnMore: "Learn More",
    servicesShowLess: "Show Less",

    portfolioTitle: "Our Work",
    portfolioSubtitle: "Explore a selection of our finest projects that showcase our expertise and creativity.",
    portfolioCategoryAll: "All",
    portfolioViewDetails: "View Details",
    portfolioNoProjects: "No projects found in this category.",
    portfolioCategoryWebDesign: "Web Design",
    portfolioCategoryAppDevelopment: "App Development",
    portfolioCategoryBranding: "Branding",


    portfolioModalTechUsed: "Technologies Used:",
    portfolioModalGallery: "Project Gallery",
    portfolioModalViewSite: "View Live Site",
    portfolioModalViewCaseStudy: "Read Case Study",
    portfolioModalClose: "Close project details",

    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Hear from businesses that have partnered with Soenrect.",

    aboutUsTeamTitle: "Meet Our Core Team",

    contactTitle: "Get In Touch",
    contactSubtitle: "Have a project in mind or just want to say hi? We'd love to hear from you.",
    contactInfoTitle: "Contact Information",
    contactInfoEmail: "Email:",
    contactInfoPhone: "Phone:",
    contactInfoAddress: "Address:",
    contactInfoOfficeHours: "Office Hours",
    contactInfoOfficeHoursDays: "Monday - Friday: 9 AM to 6 PM",
    contactInfoOfficeHoursWeekend: "Saturday - Sunday: Closed",
    contactConnectWhatsAppTitle: "Connect With Us Instantly",
    contactConnectWhatsAppDesc: "Prefer a quick chat? Reach out to us directly on WhatsApp for immediate assistance or inquiries.",
    contactConnectWhatsAppButton: "Chat on WhatsApp",

    footerTagline: "Meet Your Visual Needs, crafting digital excellence at a time. We are committed to innovative solutions and client needs.",
    footerQuickLinks: "Quick Links",
    footerConnectWithUs: "Connect With Us",
    footerRightsReserved: "All rights reserved.",
    footerDesignedWithPassion: "Designed with passion.",
    footerSocialFacebook: "Facebook",
    footerSocialTwitter: "Twitter",
    footerSocialLinkedIn: "LinkedIn",
    footerSocialInstagram: "Instagram",

    loaderMessage: "Initializing Portal of Soenrect...",
    loaderLoading: "Loading...",

    viewDetails: "View Details",
    previous: "Previous",
    next: "Next",
    goToSlide: "Go to slide {number}",
  },
  id: {
    navHome: "Beranda",
    navServices: "Layanan",
    navPortfolio: "Portofolio",
    navTestimonials: "Testimoni",
    navAbout: "Tentang Kami",
    navContact: "Kontak",
    navToggleTheme: "Ganti tema",
    navOpenMenu: "Buka menu utama",
    navSwitchToEnglish: "Ganti ke Bahasa Inggris",
    navSwitchToIndonesian: "Ganti ke Bahasa Indonesia",
    navSoenrect: "Soenrect",

    heroTitlePart1: "Memenuhi Kebutuhan ",
    heroTitleHighlight: "Visual Anda",
    heroSubtitle: "Pasundan Creative Project (Soenrect) adalah mitra Anda dalam membangun solusi digital yang inovatif dan menarik yang mendorong hasil dan menginspirasi pengguna.",
    heroBtnGetInTouch: "Hubungi Kami",
    heroBtnViewWork: "Lihat Karya Kami",
    heroVideoNotSupported: "Browser Anda tidak mendukung tag video.",

    clientLogosTitle: "Dipercaya oleh Pemimpin Industri",

    servicesTitle: "Layanan Kami",
    servicesSubtitle: "Kami menawarkan rangkaian lengkap layanan digital untuk mewujudkan visi Anda.",
    servicesLearnMore: "Pelajari Lebih Lanjut",
    servicesShowLess: "Tampilkan Lebih Sedikit",

    portfolioTitle: "Karya Kami",
    portfolioSubtitle: "Jelajahi pilihan proyek terbaik kami yang menunjukkan keahlian dan kreativitas kami.",
    portfolioCategoryAll: "Semua",
    portfolioViewDetails: "Lihat Detail",
    portfolioNoProjects: "Tidak ada proyek yang ditemukan dalam kategori ini.",
    portfolioCategoryWebDesign: "Desain Web",
    portfolioCategoryAppDevelopment: "Pengembangan Aplikasi",
    portfolioCategoryBranding: "Branding",

    portfolioModalTechUsed: "Teknologi yang Digunakan:",
    portfolioModalGallery: "Galeri Proyek",
    portfolioModalViewSite: "Lihat Situs Web",
    portfolioModalViewCaseStudy: "Baca Studi Kasus",
    portfolioModalClose: "Tutup detail proyek",

    testimonialsTitle: "Apa Kata Klien Kami",
    testimonialsSubtitle: "Dengarkan dari bisnis yang telah bermitra dengan Soenrect.",

    aboutUsTeamTitle: "Temui Tim Inti Kami",

    contactTitle: "Hubungi Kami",
    contactSubtitle: "Punya proyek atau hanya ingin menyapa? Kami ingin mendengar dari Anda.",
    contactInfoTitle: "Informasi Kontak",
    contactInfoEmail: "Email:",
    contactInfoPhone: "Telepon:",
    contactInfoAddress: "Alamat:",
    contactInfoOfficeHours: "Jam Kantor",
    contactInfoOfficeHoursDays: "Senin - Jumat: 9 PG hingga 6 SG",
    contactInfoOfficeHoursWeekend: "Sabtu - Minggu: Tutup",
    contactConnectWhatsAppTitle: "Terhubung Langsung Dengan Kami",
    contactConnectWhatsAppDesc: "Lebih suka ngobrol cepat? Hubungi kami langsung di WhatsApp untuk bantuan atau pertanyaan segera.",
    contactConnectWhatsAppButton: "Chat di WhatsApp",

    footerTagline: "Memenuhi Kebutuhan Visual Anda, menciptakan keunggulan media digital. Kami berkomitmen pada solusi inovatif dan kebutuhan klien.",
    footerQuickLinks: "Tautan Cepat",
    footerConnectWithUs: "Terhubung Dengan Kami",
    footerRightsReserved: "Hak cipta dilindungi.",
    footerDesignedWithPassion: "Didesain dengan penuh semangat.",
    footerSocialFacebook: "Facebook",
    footerSocialTwitter: "Twitter",
    footerSocialLinkedIn: "LinkedIn",
    footerSocialInstagram: "Instagram",

    loaderMessage: "Menginisialisasi Portal Soenrect...",
    loaderLoading: "Memuat...",

    viewDetails: "Lihat Detail",
    previous: "Sebelumnya",
    next: "Berikutnya",
    goToSlide: "Ke slide {number}",
  }
};

// Helper to get category translations, might be used in PortfolioSection
export const getTranslatedPortfolioCategories = (language: Language): MultilingualText[] => {
  return [
    { en: "Web Design", id: "Desain Web" },
    { en: "App Development", id: "Pengembangan Aplikasi" },
    { en: "Branding", id: "Branding" },
  ];
};