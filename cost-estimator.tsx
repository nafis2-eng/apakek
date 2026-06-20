export const site = {
  name: 'Rahayu Cipta Mandiri',
  shortName: 'RCM',
  tagline: 'Membangun Kepercayaan, Mewujudkan Impian',
  founded: 2022,
  location: 'Kota Tangerang, Banten',
  address: 'Jl. Cluster Akasia 1, Kota Tangerang, Banten',
  phone: '082280399942',
  phoneLabel: '0822-8039-9942',
  contactPerson: 'Satino',
  hours: 'Senin - Sabtu, 08.00 - 17.00 WIB',
  email: 'halo@rahayuciptamandiri.co.id',
  // WhatsApp number in international format (62 = Indonesia)
  whatsapp: '6282280399942',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
}

export function waLink(message?: string) {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : `?text=${encodeURIComponent(
        `Halo ${site.name}, saya tertarik untuk konsultasi proyek konstruksi.`,
      )}`
  return `https://wa.me/${site.whatsapp}${text}`
}

export const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/testimoni', label: 'Testimoni' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontak', label: 'Kontak' },
]

export const stats = [
  { value: 120, suffix: '+', label: 'Proyek Selesai' },
  { value: 98, suffix: '%', label: 'Klien Puas' },
  { value: 35, suffix: ' Thn', label: 'Pengalaman' },
  { value: 25, suffix: '+', label: 'Tim Ahli' },
]

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  features: string[]
  icon: 'building' | 'hammer' | 'road' | 'compass'
}

export const services: Service[] = [
  {
    slug: 'konstruksi-bangunan',
    title: 'Konstruksi Bangunan',
    short: 'Rumah, ruko, dan gedung dibangun dari nol dengan standar mutu tinggi.',
    description:
      'Kami menangani pembangunan rumah tinggal, ruko, hingga gedung bertingkat secara menyeluruh — mulai dari perencanaan struktur, pengadaan material berkualitas, hingga serah terima kunci.',
    features: [
      'Rumah tinggal & hunian mewah',
      'Ruko & bangunan komersial',
      'Gedung bertingkat & perkantoran',
      'Manajemen proyek end-to-end',
    ],
    icon: 'building',
  },
  {
    slug: 'renovasi-remodeling',
    title: 'Renovasi & Remodeling',
    short: 'Mengubah ruang lama menjadi fungsional, modern, dan bernilai lebih.',
    description:
      'Layanan renovasi total maupun parsial untuk rumah, kantor, dan tempat usaha. Kami fokus pada peningkatan estetika, fungsi, dan kekuatan struktur tanpa mengganggu kenyamanan Anda.',
    features: [
      'Renovasi rumah & ruko',
      'Remodeling kantor & retail',
      'Penambahan lantai & ekspansi',
      'Perbaikan struktur & atap',
    ],
    icon: 'hammer',
  },
  {
    slug: 'pekerjaan-sipil',
    title: 'Pekerjaan Sipil',
    short: 'Jalan, drainase, dan pondasi yang kokoh dan tahan lama.',
    description:
      'Pekerjaan infrastruktur sipil untuk kebutuhan kawasan perumahan, industri, maupun proyek pemerintah dan swasta dengan pengawasan ketat dan material bersertifikat.',
    features: [
      'Pembangunan & pengerasan jalan',
      'Sistem drainase & saluran air',
      'Pondasi & pekerjaan tanah',
      'Talud & struktur penahan',
    ],
    icon: 'road',
  },
  {
    slug: 'konsultasi-arsitektur-mep',
    title: 'Konsultasi Arsitektur & MEP',
    short: 'Desain arsitektur dan sistem MEP yang matang sejak awal.',
    description:
      'Tim arsitek dan engineer kami membantu Anda merancang konsep bangunan, gambar kerja, serta sistem mekanikal, elektrikal, dan plumbing (MEP) yang efisien dan sesuai regulasi.',
    features: [
      'Desain arsitektur & 3D render',
      'Gambar kerja (DED) lengkap',
      'Perencanaan MEP',
      'Estimasi biaya (RAB)',
    ],
    icon: 'compass',
  },
]

export type Project = {
  slug: string
  title: string
  category: 'residential' | 'commercial' | 'industrial'
  categoryLabel: string
  location: string
  year: number
  client: string
  image: string
  description: string
}

export const projects: Project[] = [
  {
    slug: 'rumah-modern-bsd',
    title: 'Rumah Modern 2 Lantai',
    category: 'residential',
    categoryLabel: 'Residensial',
    location: 'BSD, Tangerang',
    year: 2024,
    client: 'Keluarga Wijaya',
    image: '/images/project-house.png',
    description:
      'Pembangunan rumah tinggal modern dua lantai seluas 220 m² dengan konsep minimalis tropis.',
  },
  {
    slug: 'ruko-3-lantai-cipondoh',
    title: 'Ruko 3 Lantai',
    category: 'commercial',
    categoryLabel: 'Komersial',
    location: 'Cipondoh, Tangerang',
    year: 2024,
    client: 'PT Maju Bersama',
    image: '/images/project-ruko.png',
    description:
      'Pembangunan deret ruko tiga lantai dengan fasad kontemporer dan storefront kaca.',
  },
  {
    slug: 'gedung-kantor-serpong',
    title: 'Gedung Kantor Korporat',
    category: 'commercial',
    categoryLabel: 'Komersial',
    location: 'Serpong, Tangerang',
    year: 2023,
    client: 'PT Sentosa Group',
    image: '/images/project-office.png',
    description:
      'Konstruksi gedung perkantoran dengan curtain wall kaca dan sistem MEP modern.',
  },
  {
    slug: 'gudang-industri-balaraja',
    title: 'Gudang & Pabrik Industri',
    category: 'industrial',
    categoryLabel: 'Industrial',
    location: 'Balaraja, Tangerang',
    year: 2023,
    client: 'PT Logistik Nusantara',
    image: '/images/project-warehouse.png',
    description:
      'Pembangunan gudang berstruktur baja seluas 1.500 m² lengkap dengan loading dock.',
  },
  {
    slug: 'renovasi-kantor-alam-sutera',
    title: 'Renovasi Interior Kantor',
    category: 'commercial',
    categoryLabel: 'Komersial',
    location: 'Alam Sutera, Tangerang',
    year: 2024,
    client: 'Startup Teknologi',
    image: '/images/project-interior.png',
    description:
      'Remodeling interior kantor open-space dengan partisi kaca dan area kolaborasi.',
  },
  {
    slug: 'jalan-drainase-kawasan',
    title: 'Jalan & Drainase Kawasan',
    category: 'industrial',
    categoryLabel: 'Industrial',
    location: 'Pasar Kemis, Tangerang',
    year: 2023,
    client: 'Pengembang Kawasan',
    image: '/images/project-road.png',
    description:
      'Pekerjaan sipil pengerasan jalan dan sistem drainase untuk kawasan perumahan.',
  },
]

export const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pemilik Rumah, BSD',
    rating: 5,
    quote:
      'Pengerjaan rumah kami selesai tepat waktu dan hasilnya melebihi ekspektasi. Tim RCM komunikatif dan rapi dalam bekerja.',
    initials: 'BS',
  },
  {
    name: 'Linda Hartono',
    role: 'Direktur, PT Maju Bersama',
    rating: 5,
    quote:
      'Pembangunan ruko kami ditangani secara profesional dari awal hingga akhir. Laporan progres jelas dan transparan.',
    initials: 'LH',
  },
  {
    name: 'Agus Pratama',
    role: 'Manajer Operasional Pabrik',
    rating: 5,
    quote:
      'Gudang industri kami dibangun dengan struktur yang kokoh dan sesuai jadwal. Sangat puas dengan hasil dan layanannya.',
    initials: 'AP',
  },
  {
    name: 'Sri Wahyuni',
    role: 'Pemilik Usaha Retail',
    rating: 5,
    quote:
      'Renovasi toko kami membuat suasana jadi jauh lebih modern. Anggaran terkontrol dan tidak ada biaya tersembunyi.',
    initials: 'SW',
  },
]

export const certifications = [
  { code: 'SIUJK', label: 'Surat Izin Usaha Jasa Konstruksi' },
  { code: 'NIB', label: 'Nomor Induk Berusaha' },
  { code: 'SBU', label: 'Sertifikat Badan Usaha' },
  { code: 'ISO 9001', label: 'Manajemen Mutu' },
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readingTime: string
  image: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cara-menghitung-estimasi-biaya-bangun-rumah',
    title: 'Cara Menghitung Estimasi Biaya Bangun Rumah 2025',
    excerpt:
      'Panduan praktis menghitung anggaran pembangunan rumah berdasarkan luas, tipe bangunan, dan kualitas material.',
    category: 'Tips Konstruksi',
    date: '12 Februari 2025',
    readingTime: '6 menit',
    image: '/images/blog-1.png',
    content: [
      'Membangun rumah membutuhkan perencanaan anggaran yang matang. Salah satu cara termudah memperkirakan biaya adalah dengan metode harga per meter persegi, yang dikalikan dengan luas bangunan dan disesuaikan dengan kualitas finishing yang diinginkan.',
      'Tiga faktor utama yang memengaruhi biaya adalah luas bangunan, tipe/kompleksitas desain, dan standar material. Semakin tinggi standar material dan kompleksitas struktur, semakin besar pula anggaran yang dibutuhkan.',
      'Gunakan kalkulator estimasi kami untuk mendapatkan gambaran awal, lalu konsultasikan dengan tim kami untuk RAB (Rencana Anggaran Biaya) yang detail dan akurat.',
    ],
  },
  {
    slug: 'tren-desain-rumah-tropis-modern',
    title: 'Tren Desain Rumah Tropis Modern yang Sedang Naik Daun',
    excerpt:
      'Material alami, ventilasi silang, dan pencahayaan alami menjadi kunci hunian tropis modern yang nyaman.',
    category: 'Tren Desain',
    date: '28 Januari 2025',
    readingTime: '5 menit',
    image: '/images/blog-2.png',
    content: [
      'Desain tropis modern menggabungkan estetika minimalis dengan adaptasi terhadap iklim Indonesia. Konsep ini mengutamakan sirkulasi udara, pencahayaan alami, dan penggunaan material yang ramah lingkungan.',
      'Elemen seperti bukaan lebar, void, taman dalam, dan penggunaan kayu serta batu alam menjadi ciri khas yang banyak diminati pemilik rumah saat ini.',
      'Selain estetis, pendekatan ini juga hemat energi karena mengurangi ketergantungan pada pendingin dan lampu di siang hari.',
    ],
  },
  {
    slug: 'pentingnya-pondasi-yang-kuat',
    title: 'Pentingnya Pondasi yang Kuat untuk Bangunan Tahan Lama',
    excerpt:
      'Pondasi adalah fondasi keselamatan bangunan. Kenali jenis pondasi dan kapan harus digunakan.',
    category: 'Edukasi',
    date: '15 Januari 2025',
    readingTime: '7 menit',
    image: '/images/blog-3.png',
    content: [
      'Pondasi merupakan elemen struktur paling krusial yang menanggung seluruh beban bangunan dan meneruskannya ke tanah. Kesalahan dalam perencanaan pondasi dapat berakibat fatal pada keseluruhan struktur.',
      'Jenis pondasi dipilih berdasarkan kondisi tanah dan beban bangunan, mulai dari pondasi batu kali, footplat, hingga tiang pancang untuk bangunan bertingkat.',
      'Investasi pada pondasi yang tepat akan menghemat biaya perawatan jangka panjang dan menjamin keamanan penghuni.',
    ],
  },
]
