import { Badge } from "lucide-react";

export type ListingProperty = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  rest: number;
  sqft: string;
  type: string;
  yearBuilt: number;
  lotSize: string;
  description: string;
  carousel?: string[];
};

export const listingsProperties = [
  {
    id: 1,
    title: "The Mulia Bali",
    location: "Nusa Dua, Bali",
    price: "941,000,000",
    image: "/mulia.webp",
    beds: 526,
    rest: 9,
    sqft: "299.460",
    type: "Resort",
    yearBuilt: 2012,
    lotSize: "N/A",
    description:
      "The Mulia, Mulia Resort & Villas – Nusa Dua, Bali adalah resort mewah tepi pantai yang menawarkan suites elegan, private villas dengan kolam renang, spa kelas dunia, infinity pool ikonik, serta 9 restoran dan bar eksklusif. Berdiri di kawasan premium Nusa Dua, properti ini menjadi destinasi unggulan untuk liburan, acara spesial, maupun investasi hospitality berkelas internasional.",
    features: [
      "Airport Shuttle / Transfer",
      "Meeting & Conference Rooms",
      "Multiple Outdoor Swimming Pools (≈ 6)",
      "Infinity Pool eksklusif (Oasis Pool) untuk tamu The Mulia & Villas",
      "Private Beach / Beachfront Access (Geger Beach)",
      "Spa & Wellness Centre dengan fasilitas lengkap (ice room, sauna, steam room, hidroterapi panas & dingin)",
      "Kids Club / T-Zone untuk berbagai kelompok umur",
      "Restaurants & Bars (9 restoran/bar) dengan pilihan kuliner internasional & lokal",
      "Gym / Fitness Centre",
      "Tennis Courts",
      "Poolside Bars & Loungers / Cabanas",
      "Garden & Terrace Area",
      "Nightlife / Lounge Areas (Sky Bar, bar malam)",
      "Room Service 24 jam",
      "Free WiFi di area kamar & umum",
      "Balcony / Terrace di kamar",
      "Luxury bathroom (bathtub & shower terpisah, jetted bathtub, outdoor shower ‒ tergantung tipe kamar)",
      "Premium bedding & amenities kamar",

    ],
    amenities: [
      "AC",
      "TV Layar Datar",
      "Wi-Fi Gratis",
      "Minibar",
      "Coffee & Tea Maker",
      "Balkon / Teras dengan pemandangan laut atau taman",
      "Living Area (beberapa tipe kamar & suite)",
      "Kamar Mandi Marmer",
      "Bathtub & Shower Terpisah",
      "Hair Dryer",
      "Safety Box",
      "Meja Kerja",
      "Premium Toiletries",
      "Room Service 24 Jam"
    ],
    carousel: [
      "/mulia.webp",
      "/mulia3.webp",
      "/mulia2.webp",
      "/mulia4.webp",
    ],
  },
  {
    id: 2,
    title: "Keraton Jimbaran",
    location: "Jimbaran, Bali",
    price: "39,956,000",
    image: "/keraton3.jpg",
    beds: 102,
    rest: 2,
    sqft: "15.400",
    type: "Beach Resort",
    yearBuilt: 1991,
    lotSize: "N/A",
    description:
      "Keraton Jimbaran Resort adalah resort bergaya tradisional Bali yang berlokasi langsung di tepi pantai Jimbaran. Dikelilingi taman tropis yang asri, resort ini menawarkan kamar dan villa dengan sentuhan arsitektur klasik, kolam renang outdoor, spa, serta akses langsung ke pantai berpasir putih Jimbaran. Dengan suasana tenang dan autentik, Keraton Jimbaran menjadi pilihan ideal untuk liburan santai maupun pengalaman budaya Bali yang khas.",
    features: [
      "Airport Shuttle",
      "Meeting Room",
      "Kolam Renang Outdoor",
      "Pantai Pribadi",
      "Spa & Wellness",
      "Restaurant",
      "Bar",
      "Wi-Fi Gratis",
      "Parkir Gratis",
      "Private Pool Villa"
    ],
    amenities: [
      "AC",
      "TV Layar Datar",
      "Minibar",
      "Peralatan Membuat Teh & Kopi",
      "Wi-Fi Gratis",
      "Balkon / Teras",
      "Room Service",
      "Shower & Bathtub",
      "Hair Dryer",
      "Safety Box"
    ],
     carousel: [
      "/keraton.jpg",
      "/keraton2.jpg",
      "/keraton3.jpg",
      "/keraton4.jpg",
    ],
  },
  {
    id: 3,
    title: "Abi Bali Resort",
    location: "Jimbaran, Bali",
    price: "23,548,387",
    image: "/abi.png",
    beds: 32,
    rest: 1,
    sqft: "10.000",
    type: "Resort",
    yearBuilt: 2010,
    lotSize: "N/A",
    description:
      "Abi Bali Resort & Villas & Spa – Jimbaran, Bali adalah resort modern bergaya tropis yang menawarkan kamar luas serta villa pribadi dengan kolam renang. Dilengkapi dengan restoran, spa, pusat kebugaran, dan layanan shuttle gratis ke pantai, resort ini menghadirkan kenyamanan dan privasi untuk liburan romantis maupun keluarga di kawasan tenang Jimbaran.",
    features: [
      "Kolam Renang Outdoor",
      "Villa dengan Private Pool",
      "Spa & Perawatan Tubuh (Massages, Body Treatments, Facials)",
      "Fitness Center / Gym",
      "Restaurant (Spize Restaurant)",
      "Shuttle Pantai Gratis",
      "Airport Shuttle (biaya tambahan)",
      "Ruang Meeting & Hall Banquet",
      "Wi-Fi Gratis di seluruh area",
      "Parkir Gratis di properti",
      "Layanan Kamar 24 jam",
      "Dry Cleaning / Laundry",
      "Business Center",
      "Taman / Area Hijau tropis",
      "Bathtub & Shower terpisah",
      "Kitchenette di villa (villa lengkap)",
      "Reception 24 jam",
      "Ruang Stereo / Lounge Area",
      "Layanan Tur / Bantuan Tiket"
    ],
    amenities: [
      "AC",
      "TV Layar Datar",
      "Wi-Fi Gratis",
      "Minibar",
      "Coffee & Tea Maker",
      "Kitchenette (untuk tipe villa)",
      "Meja Kerja",
      "Area Duduk / Living Room",
      "Balkon / Teras",
      "Bathtub & Shower Terpisah",
      "Hair Dryer",
      "Safety Box",
      "Telepon",
      "Perlengkapan Mandi Gratis",
      "Room Service 24 Jam"
    ],
     carousel: [
      "/abi.png",
      "/abi2.png",
      "/abi3.png",
      "/abi4.jpg",
    ],
  },
  {
    id: 4,
    title: "Alam Ubud",
    location: "Ubud, Bali",
    price: "7,096,774",
    image: "/ubud.jpg",
    beds: 2,
    rest: 2,
    sqft: "40.000",
    type: "Hideaway Resort",
    yearBuilt: 2010,
    lotSize: "N/A",
    description:
      "Experience the ultimate in Manhattan luxury living with this extraordinary penthouse suite. Perched high above the city, this residence offers breathtaking panoramic views of the iconic skyline. Every detail has been meticulously crafted to create a sanctuary of sophistication in the heart of the city.",
    features: [
      "Kolam Renang Outdoor & Infinity Pool",
      "Villa dengan Private Pool",
      "Restoran & Bar / Lounge",
      "Spa & Wellness Centre (perawatan tubuh, pijat, facial)",
      "Yoga Class / Studio",
      "Room Service",
      "Airport Shuttle (bayar)",
      "Wi-Fi Gratis di kamar & area umum",
      "Parkir Gratis",
      "Layanan Laundry / Dry Cleaning",
      "Taman / Area Hijau & Pemandangan Alam (hutan, lembah, sungai)",
      "Balcony / Terrace di vila",
      "AC dan kamar bebas rokok",
      "Fasilitas Meeting / Banquet",
      "Aktivitas luar ruang (trekking / hiking, bersepeda, berkuda)"
    ],
    amenities: [
      "AC & Wi-Fi Gratis",
      "TV Layar Datar & Minibar",
      "Bathtub & Shower Terpisah",
      "Balkon / Teras dengan Pemandangan Alam",
      "Private Pool (untuk tipe villa)",
      "Restaurant & Bar",
      "Spa & Layanan Pijat",
      "Room Service"
    ],
    carousel: [
      "/ubud.jpg",
      "/ubud2.jpg",
      "/ubud3.jpeg",
      "/ubud4.jpg",
    ],
  },
  {
    id: 5,
    title: "The Royal Beach",
    location: "Seminyak, Bali",
    price: "97,419,354",
    image: "/theroyal.webp",
    beds: 127,
    rest: 3,
    sqft: "43.000",
    type: "Spa Resort",
    yearBuilt: 1994,
    lotSize: "N/A",
    description:
      "The Royal Beach Seminyak Bali adalah resort mewah tepi pantai yang berdiri di lahan seluas 43.000 m² di kawasan Seminyak. Dikelilingi taman tropis yang indah, properti ini menawarkan kamar elegan dan vila pribadi dengan kolam renang, serta fasilitas lengkap seperti spa, restoran, bar, dan dua kolam renang outdoor. Lokasinya strategis di jantung Seminyak, hanya beberapa langkah dari pusat hiburan, restoran, dan butik kelas dunia.",
    features: [
      "Akses langsung ke Pantai Seminyak (beachfront)",
      "2 kolam renang outdoor (satu menghadap laut, satu di area taman)",
      "Vila pribadi dengan private pool atau jacuzzi",
      "Multiple restoran dan bar (Teppanyaki, restoran internasional, beachfront bar)",
      "Spa & pusat wellness",
      "Taman tropis yang luas sekitar properti",
      "Fasilitas meeting / ballroom",
      "Gym / pusat kebugaran",
      "Kolam renang anak",
      "Free WiFi di seluruh properti",
      "Parkir gratis di lokasi",
      "Resepsionis 24 jam",
      "Layanan kamar 24 jam",
      "Laundry / dry cleaning",
      "Akses mudah ke pusat wisata & restoran di Seminyak"
    ],
    amenities: [
      "Wi-Fi Gratis di seluruh area",
      "AC (Air Conditioning)",
      "Minibar dalam kamar",
      "Smart TV / LED TV",
      "Safe / Brankas kamar",
      "Rambut pengering (Hairdryer)",
      "Bathrobe & Slippers",
      "Balkon / Teras",
      "Room Service 24 jam",
      "Free Parkir di lokasi"
    ],
     carousel: [
      "/theroyal.webp",
      "/theroyal2.webp",
    ],
  },

]
