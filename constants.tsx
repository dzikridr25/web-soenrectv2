
import React from 'react';
import { Service, PortfolioProject, Testimonial, NavLink, MultilingualText, ClientLogoData } from './types';

// SVG Icons (remain unchanged, but WhatsAppIcon used in ContactForm is now part of constants)
export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const DesignIcon: React.FC<{ className?: string }> = ({ className }) => ( 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
);

export const CodeIcon: React.FC<{ className?: string }> = ({ className }) => ( 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const MarketingIcon: React.FC<{ className?: string }> = ({ className }) => ( 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.69-5.69" />
  </svg>
);

export const ProjectorIcon: React.FC<{ className?: string }> = ({ className }) => ( 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10M7 4v5M7 4L3 7v10l4 3M17 4v5M17 4l4 3v10l-4 3M7 9h10M7 9L3 12M7 9v11M17 9L21 12M17 9v11M3 12h18M3 12l4 3h10l4-3" />
    <circle cx="12" cy="14" r="2" />
  </svg>
);

export const VideoIcon: React.FC<{ className?: string }> = ({ className }) => ( 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
  </svg>
);

export const VisualsIcon: React.FC<{ className?: string }> = ({ className }) => ( 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75V3.75m0 12.75l-2.25-2.25M10.5 16.5l2.25-2.25m0 0l2.25 2.25m-2.25-2.25l2.25-2.25M10.5 16.5l-2.25 2.25m2.25-2.25V7.5A2.25 2.25 0 0112.75 5.25h.04" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 0A2.25 2.25 0 001.5 9.75v-.015A2.25 2.25 0 013.75 7.5h0a2.25 2.25 0 012.25 2.25v.015A2.25 2.25 0 003.75 12zm16.5 0a2.25 2.25 0 012.25 2.25v.015a2.25 2.25 0 00-2.25 2.25h0a2.25 2.25 0 00-2.25-2.25v-.015a2.25 2.25 0 012.25-2.25z" />
  </svg>
);

export const LiveStreamIcon: React.FC<{ className?: string }> = ({ className }) => ( 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m3 0H3v5.25c0 .621.504 1.125 1.125 1.125h15.75c.621 0 1.125-.504 1.125-1.125V6.75A1.125 1.125 0 0020.25 5.625H5.625A1.125 1.125 0 004.5 6.75v5.25H6.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 19.5h19.5" />
  </svg>
);

export const BusinessIcon: React.FC<{ className?: string }> = ({ className }) => ( 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 12.75h6M9 18.75h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v0a1.5 1.5 0 011.06.44l3 3a1.5 1.5 0 010 2.12l-3 3a1.5 1.5 0 01-2.12 0l-3-3a1.5 1.5 0 010-2.12l3-3A1.5 1.5 0 0112 3z" />
  </svg>
);

export const MotionIcon: React.FC<{ className?: string }> = ({ className }) => ( 
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0-15l-15 15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.23 15.26c-.22-.11-.76-.38-1.04-.51s-.42-.19-.59.19-.62.76-.76.91-.29.17-.55.06c-.25-.11-1.06-.39-2.02-1.25-.74-.67-1.23-1.5-.1.73-.14-.11.11-.3.17-.42.06-.11.03-.19-.01-.25-.05-.06-.59-.71-.81-.97s-.42-.22-.59-.22-.32 0-.48 0c-.17 0-.42.06-.65.32s-.87.84-.87 2.04.89 2.36 1.01 2.53.25.22 1.76 1.03c1.15.59 1.45.73 1.96.91.28.11.53.09.73.06.22-.03.76-.31.87-.62.11-.3.11-.55.08-.62-.03-.06-.14-.11-.22-.17z" />
  </svg>
);

export const LanguageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
  </svg>
);


export const NAV_LINKS_DATA: NavLink[] = [
  { id: 'home', label: { en: 'Home', id: 'Beranda' }, href: '#hero' },
  { id: 'services', label: { en: 'Services', id: 'Layanan' }, href: '#services' },
  { id: 'portfolio', label: { en: 'Portfolio', id: 'Portofolio' }, href: '#portfolio' },
  { id: 'testimonials', label: { en: 'Testimonials', id: 'Testimoni' }, href: '#testimonials' },
  { id: 'about', label: { en: 'About Us', id: 'Tentang Kami' }, href: '#about' },
  { id: 'contact', label: { en: 'Contact', id: 'Kontak' }, href: '#contact' },
];

export const SERVICES_DATA: Service[] = [
  { 
    id: 's1', 
    icon: <ProjectorIcon />, 
    title: { en: 'Mapping Projection', id: 'Proyeksi Pemetaan' }, 
    description: { 
      en: 'Transforming surfaces into dynamic visual experiences with stunning projections.',
      id: 'Mengubah permukaan menjadi pengalaman visual dinamis dengan proyeksi menakjubkan.' 
    },
    details: { 
      en: 'We create immersive projection mapping installations for events, architectural features, and artistic displays, using advanced software and high-lumen projectors.',
      id: 'Kami membuat instalasi pemetaan proyeksi imersif untuk acara, fitur arsitektur, dan tampilan artistik, menggunakan perangkat lunak canggih dan proyektor lumen tinggi.'
    }
  },
  { 
    id: 's2', 
    icon: <VideoIcon />, 
    title: { en: 'Video Editing', id: 'Penyuntingan Video' }, 
    description: { 
      en: 'Professional video editing services for corporate, promotional, and creative content.',
      id: 'Layanan penyuntingan video profesional untuk konten korporat, promosi, dan kreatif.'
    },
    details: { 
      en: 'Our team handles everything from raw footage to final cut, including color grading, sound design, motion graphics, and storytelling to captivate your audience.',
      id: 'Tim kami menangani semuanya mulai dari rekaman mentah hingga potongan akhir, termasuk pewarnaan, desain suara, grafis gerak, dan penceritaan untuk memikat audiens Anda.'
    }
  },
  { 
    id: 's10', 
    icon: <MotionIcon />, 
    title: { en: 'Motion Graphics', id: 'Grafis Gerak' }, 
    description: { 
      en: 'Engaging motion graphics and animations for video, web, and presentations.',
      id: 'Grafis gerak dan animasi menarik untuk video, web, dan presentasi.'
    },
    details: { 
      en: 'We design and produce captivating motion graphics, including explainer videos, logo animations, title sequences, and animated infographics to bring your content to life.',
      id: 'Kami merancang dan memproduksi grafis gerak yang menawan, termasuk video penjelas, animasi logo, urutan judul, dan infografis animasi untuk menghidupkan konten Anda.'
    }
  },
   { 
    id: 's3', 
    icon: <DesignIcon />, 
    title: { en: 'Graphic Design', id: 'Desain Grafis' }, 
    description: { 
      en: 'Creative graphic design solutions for branding, marketing materials, and digital assets.',
      id: 'Solusi desain grafis kreatif untuk branding, materi pemasaran, dan aset digital.'
    },
    details: { 
      en: 'We craft compelling visual identities, logos, brochures, social media graphics, and more, ensuring your brand stands out and communicates effectively.',
      id: 'Kami membuat identitas visual yang menarik, logo, brosur, grafis media sosial, dan lainnya, memastikan merek Anda menonjol dan berkomunikasi secara efektif.'
    }
  },
  { 
    id: 's4', 
    icon: <VisualsIcon />, 
    title: { en: 'Media Visual Jockey (VJ)', id: 'Visual Jockey Media (VJ)' }, 
    description: { 
      en: 'Live visual performances and content creation for events, concerts, and installations.',
      id: 'Pertunjukan visual langsung dan pembuatan konten untuk acara, konser, dan instalasi.'
    },
    details: { 
      en: 'Our VJs mix and manipulate visuals in real-time, creating synchronized and electrifying atmospheres that enhance any live experience.',
      id: 'VJ kami mencampur dan memanipulasi visual secara real-time, menciptakan suasana yang tersinkronisasi dan menggemparkan yang meningkatkan pengalaman langsung apa pun.'
    }
  },
  { 
    id: 's5', 
    icon: <LiveStreamIcon />, 
    title: { en: 'Live Streaming & Media Ops', id: 'Siaran Langsung & Operasi Media' }, 
    description: { 
      en: 'End-to-end live streaming solutions and media operation for virtual and hybrid events.',
      id: 'Solusi siaran langsung end-to-end dan operasi media untuk acara virtual dan hybrid.'
    },
    details: { 
      en: 'We provide multi-camera production, encoding, platform management, and on-site media operations to ensure flawless live broadcasts and event media delivery.',
      id: 'Kami menyediakan produksi multi-kamera, encoding, manajemen platform, dan operasi media di tempat untuk memastikan siaran langsung yang sempurna dan pengiriman media acara.'
    }
  },
  { 
    id: 's6', 
    icon: <BusinessIcon />, 
    title: { en: 'Business Development Marketplace', id: 'Pengembangan Bisnis Marketplace' }, 
    description: { 
      en: 'Strategic support for marketplace integration and e-commerce business growth.',
      id: 'Dukungan strategis untuk integrasi marketplace dan pertumbuhan bisnis e-commerce.'
    },
    details: { 
      en: 'We help businesses expand their reach by developing strategies for online marketplaces, optimizing listings, and managing e-commerce operations for growth.',
      id: 'Kami membantu bisnis memperluas jangkauan mereka dengan mengembangkan strategi untuk marketplace online, mengoptimalkan daftar, dan mengelola operasi e-commerce untuk pertumbuhan.'
    }
  },
  { 
    id: 's7', 
    icon: <MarketingIcon />, 
    title: { en: 'Digital Marketing', id: 'Pemasaran Digital' }, 
    description: { 
      en: 'Driving growth through strategic online marketing and targeted campaigns.',
      id: 'Mendorong pertumbuhan melalui pemasaran online strategis dan kampanye yang ditargetkan.'
    }, 
    details: { 
      en: 'Our services include SEO, SEM, content marketing, social media strategy, and email campaigns to enhance your online presence and achieve marketing goals.',
      id: 'Layanan kami meliputi SEO, SEM, pemasaran konten, strategi media sosial, dan kampanye email untuk meningkatkan kehadiran online Anda dan mencapai tujuan pemasaran.'
    } 
  },
  { 
    id: 's8', 
    icon: <DesignIcon />, 
    title: { en: 'UI/UX Design', id: 'Desain UI/UX' }, 
    description: { 
      en: 'Crafting intuitive and beautiful user experiences for web and mobile.',
      id: 'Menciptakan pengalaman pengguna yang intuitif dan indah untuk web dan seluler.'
    }, 
    details: { 
      en: 'Our design process focuses on user research, wireframing, prototyping, and user testing to create engaging and user-friendly digital products.',
      id: 'Proses desain kami berfokus pada riset pengguna, wireframing, prototipe, dan pengujian pengguna untuk menciptakan produk digital yang menarik dan ramah pengguna.'
    } 
  },
  { 
    id: 's9', 
    icon: <CodeIcon />, 
    title: { en: 'Web Development', id: 'Pengembangan Web' }, 
    description: { 
      en: 'Building responsive, scalable, and high-performance web applications.',
      id: 'Membangun aplikasi web yang responsif, dapat diskalakan, dan berkinerja tinggi.'
    }, 
    details: { 
      en: 'We specialize in modern JavaScript frameworks, backend technologies, and CMS platforms to deliver robust websites and applications tailored to your needs.',
      id: 'Kami berspesialisasi dalam kerangka kerja JavaScript modern, teknologi backend, dan platform CMS untuk memberikan situs web dan aplikasi yang kuat yang disesuaikan dengan kebutuhan Anda.'
    } 
  },
];

export const PORTFOLIO_PROJECTS_DATA: PortfolioProject[] = [
  {
    id: 'p1',
    title: { en: 'E-commerce Platform Redesign', id: 'Desain Ulang Platform E-commerce' },
    category: { en: 'Web Design', id: 'Desain Web' },
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    description: { 
      en: 'Complete overhaul of a major e-commerce platform for enhanced user experience.',
      id: 'Perombakan total platform e-commerce utama untuk pengalaman pengguna yang lebih baik.'
    },
    longDescription: { 
      en: 'The project involved a deep dive into user analytics, A/B testing various layouts, and implementing a new design system. The result was a 25% increase in conversion rates and a significant improvement in user satisfaction scores. We focused on mobile-first design and accessibility.',
      id: 'Proyek ini melibatkan analisis mendalam terhadap analitik pengguna, pengujian A/B berbagai tata letak, dan implementasi sistem desain baru. Hasilnya adalah peningkatan 25% dalam tingkat konversi dan peningkatan signifikan dalam skor kepuasan pengguna. Kami berfokus pada desain mobile-first dan aksesibilitas.'
    },
    technologies: ['React', 'Node.js', 'GraphQL', 'Figma'],
    liveLink: '#',
    documentationImageUrls: [
        'https://picsum.photos/seed/p1doc1/800/600',
        'https://picsum.photos/seed/p1doc2/800/600',
        'https://picsum.photos/seed/p1doc3/800/600',
    ]
  },
  {
    id: 'p2',
    title: { en: 'Mobile App for Fintech', id: 'Aplikasi Seluler untuk Fintech' },
    category: { en: 'App Development', id: 'Pengembangan Aplikasi' },
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    description: { 
      en: 'Secure and intuitive mobile banking application.',
      id: 'Aplikasi perbankan seluler yang aman dan intuitif.'
    },
    longDescription: { 
      en: 'Developed a native mobile application for iOS and Android, focusing on security features like biometric authentication and end-to-end encryption. The UI was designed for ease of use, catering to a diverse user base. Integrated with multiple third-party financial services.',
      id: 'Mengembangkan aplikasi seluler asli untuk iOS dan Android, dengan fokus pada fitur keamanan seperti otentikasi biometrik dan enkripsi end-to-end. UI dirancang untuk kemudahan penggunaan, melayani basis pengguna yang beragam. Terintegrasi dengan berbagai layanan keuangan pihak ketiga.'
    },
    technologies: ['SwiftUI', 'Kotlin', 'Firebase', 'REST APIs'],
    caseStudyLink: '#',
  },
  {
    id: 'p3',
    title: { en: 'Branding for Startup X', id: 'Branding untuk Startup X' },
    category: { en: 'Branding', id: 'Branding' },
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    description: { 
      en: 'Creating a unique brand identity for an emerging tech startup.',
      id: 'Menciptakan identitas merek yang unik untuk startup teknologi yang sedang berkembang.'
    },
    longDescription: { 
      en: 'From logo design to a comprehensive brand guide, we helped Startup X establish a strong market presence. This involved market research, competitor analysis, and workshops with the founding team to define their brand voice and visual style.',
      id: 'Mulai dari desain logo hingga panduan merek yang komprehensif, kami membantu Startup X membangun kehadiran pasar yang kuat. Ini melibatkan riset pasar, analisis pesaing, dan lokakarya dengan tim pendiri untuk menentukan suara merek dan gaya visual mereka.'
    },
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Strategy'],
  },
  {
    id: 'p4',
    title: { en: 'Interactive Data Visualization', id: 'Visualisasi Data Interaktif' },
    category: { en: 'Web Design', id: 'Desain Web' },
    videoUrl: './assets/video/backgroundvid.mp4', 
    description: { 
      en: 'Web-based tool for visualizing complex datasets with D3.js.',
      id: 'Alat berbasis web untuk memvisualisasikan kumpulan data kompleks dengan D3.js.'
    },
    longDescription: { 
      en: 'Built a dynamic and interactive data visualization dashboard allowing users to explore and understand large datasets. Features include custom filtering, sorting, and various chart types. Optimized for performance with large data.',
      id: 'Membangun dasbor visualisasi data yang dinamis dan interaktif yang memungkinkan pengguna menjelajahi dan memahami kumpulan data besar. Fitur termasuk pemfilteran khusus, pengurutan, dan berbagai jenis bagan. Dioptimalkan untuk kinerja dengan data besar.'
    },
    technologies: ['D3.js', 'React', 'Python (Flask)', 'SVG'],
    liveLink: '#',
    documentationImageUrls: [
        'https://picsum.photos/seed/p4doc1/800/600',
        'https://picsum.photos/seed/p4doc2/800/600',
    ]
  },
];

// Portfolio categories are now derived dynamically in the component based on translated project categories or defined in locales.

export const TESTIMONIALS_DATA: Testimonial[] = [
  { 
    id: 't1', 
    name: 'Dzikri Amrulloh', 
    role: { en: 'CEO', id: 'CEO' }, 
    company: 'Tech Solutions Inc.', 
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100', 
    quote: { 
      en: 'Soenrect transformed our online presence! Their team is professional, creative, and delivered beyond our expectations.',
      id: 'Soenrect mengubah kehadiran online kami! Tim mereka profesional, kreatif, dan memberikan hasil di luar ekspektasi kami.'
    } 
  },
  { 
    id: 't2', 
    name: 'M. Fikri Arif R.', 
    role: { en: 'Marketing Director', id: 'Direktur Pemasaran' }, 
    company: 'Innovate Ltd.', 
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100', 
    quote: { 
      en: 'The new website designed by Soenrect has significantly boosted our engagement metrics. Highly recommended!',
      id: 'Situs web baru yang dirancang oleh Soenrect telah secara signifikan meningkatkan metrik keterlibatan kami. Sangat direkomendasikan!'
    }
  },
  { 
    id: 't3', 
    name: 'Alice Brown', 
    role: { en: 'Product Manager', id: 'Manajer Produk' }, 
    company: 'Future Forward Co.', 
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100', 
    quote: { 
      en: 'Working with Soenrect was a breeze. They understood our vision and executed it flawlessly. Their attention to detail is impeccable.',
      id: 'Bekerja dengan Soenrect sangat mudah. Mereka memahami visi kami dan melaksanakannya dengan sempurna. Perhatian mereka terhadap detail sangat sempurna.'
    }
  },
];

export const HERO_VIDEO_URL = "./assets/video/backgroundvid.mp4";

export interface AboutUsTeamMember {
  name: string;
  role: MultilingualText;
  imageUrl: string;
}
export interface AboutUsContent {
  title: MultilingualText;
  paragraphs: MultilingualText[]; // Array of multilingual paragraph objects
  team: AboutUsTeamMember[];
}

export const ABOUT_US_TEXT: AboutUsContent = {
  title: { 
    en: "About Soenrect",
    id: "Tentang Soenrect"
  },
  paragraphs: [
    {
      en: "Soenrect is a passionate team of designers, developers, and strategists dedicated to crafting exceptional digital experiences. We believe in the power of technology and design to solve problems, inspire users, and drive business growth.",
      id: "Soenrect adalah tim desainer, pengembang, dan ahli strategi yang bersemangat yang berdedikasi untuk menciptakan pengalaman digital yang luar biasa. Kami percaya pada kekuatan teknologi dan desain untuk memecahkan masalah, menginspirasi pengguna, dan mendorong pertumbuhan bisnis."
    },
    {
      en: "Founded in [Year], our mission has always been to partner with innovative businesses and help them navigate the ever-evolving digital landscape. We thrive on challenges and are committed to delivering results that matter.",
      id: "Didirikan pada [Tahun], misi kami selalu menjadi mitra bagi bisnis inovatif dan membantu mereka menavigasi lanskap digital yang terus berkembang. Kami berkembang dalam tantangan dan berkomitmen untuk memberikan hasil yang berarti."
    },
    {
      en: "Our culture is built on collaboration, creativity, and continuous learning. We stay ahead of the curve, embracing new technologies and methodologies to ensure our clients receive cutting-edge solutions.",
      id: "Budaya kami dibangun di atas kolaborasi, kreativitas, dan pembelajaran berkelanjutan. Kami tetap terdepan, merangkul teknologi dan metodologi baru untuk memastikan klien kami menerima solusi mutakhir."
    }
  ],
  team: [
    { name: "Alex Johnson", role: { en: "Founder & CEO", id: "Pendiri & CEO" }, imageUrl: "https://picsum.photos/seed/team1/200/200" },
    { name: "Maria Garcia", role: { en: "Lead Designer", id: "Desainer Utama" }, imageUrl: "https://picsum.photos/seed/team2/200/200" },
    { name: "David Lee", role: { en: "Head of Development", id: "Kepala Pengembangan" }, imageUrl: "https://picsum.photos/seed/team3/200/200" },
  ]
};

export interface ContactInfo {
  email: string;
  phone: string;
  address: string; // Address might need translation if displayed in parts or for different regions
  whatsappNumber: string;
  defaultWhatsappMessage: MultilingualText;
}

export const CONTACT_INFO: ContactInfo = {
  email: "soenrect@gmail.com",
  phone: "+6281324959098",
  address: "Jl. Cagak Maruyung Pacet Kab. Bandung Jawa Barat", 
  whatsappNumber: "6281324959098", // Assuming WhatsApp number is the same as phone, remove '+' 
  defaultWhatsappMessage: {
    en: "Hello Soenrect, I'm interested in your services and would like to know more!",
    id: "Halo Soenrect, saya tertarik dengan layanan Anda dan ingin tahu lebih banyak!"
  },
};


export const CLIENT_LOGOS_DATA: ClientLogoData[] = [
  { id: 'cl1', name: 'Innovate Corp', logoUrl: 'https://picsum.photos/seed/innovatecorp/200/80' },
  { id: 'cl2', name: 'Tech Solutions Ltd', logoUrl: 'https://picsum.photos/seed/techsolutions/200/80' },
  { id: 'cl3', name: 'Future Systems', logoUrl: 'https://picsum.photos/seed/futuresystems/200/80' },
  { id: 'cl4', name: 'Global Connect', logoUrl: 'https://picsum.photos/seed/globalconnect/200/80' },
  { id: 'cl5', name: 'Alpha Projects', logoUrl: 'https://picsum.photos/seed/alphaprojects/200/80' },
  { id: 'cl6', name: 'Synergy Group', logoUrl: 'https://picsum.photos/seed/synergygroup/200/80' },
  { id: 'cl7', name: 'Momentum Ventures', logoUrl: 'https://picsum.photos/seed/momentumventures/200/80' },
  { id: 'cl8', name: 'Quantum Leap Inc.', logoUrl: 'https://picsum.photos/seed/quantumleap/200/80' },
  { id: 'cl9', name: 'Pinnacle Co', logoUrl: 'https://picsum.photos/seed/pinnacleco/200/80' },
  { id: 'cl10', name: 'Starlight Digital', logoUrl: 'https://picsum.photos/seed/starlightdigital/200/80' },
];
