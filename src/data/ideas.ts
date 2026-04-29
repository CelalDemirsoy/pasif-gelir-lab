export type Category = "Araç" | "İçerik" | "Süreç";
export type Difficulty = "Çok Kolay" | "Kolay" | "Orta";

export interface Idea {
  id: number;
  title: string;
  category: Category;
  description: string;
  buildTime: string;
  incomeModel: string;
  potential: string;
  difficulty: Difficulty;
}

export const ideas: Idea[] = [
  {
    id: 1,
    title: "Niş Hukuki Belge Üreteci",
    category: "Araç",
    description: "Küçük işletmeler ve freelancer'lar için yapay zeka destekli sözleşme, NDA, iş teklifi üretimi. Türkçe hukuk belgesi pazarı neredeyse boş.",
    buildTime: "1-2 gün",
    incomeModel: "Kullanım başına ödeme ($3-10/belge) veya aylık abonelik",
    potential: "₺5.000 - ₺20.000/ay",
    difficulty: "Kolay",
  },
  {
    id: 2,
    title: "CV + İlan Eşleştirici",
    category: "Araç",
    description: "Kullanıcı iş ilanı + CV'sini yapıştırır, sistem tailored CV + beklenen mülakat soruları üretir.",
    buildTime: "1-2 gün",
    incomeModel: "Tek seferlik ödeme ($10-20)",
    potential: "₺3.000 - ₺12.000/ay",
    difficulty: "Kolay",
  },
  {
    id: 3,
    title: "Ses/Video Transkriptör + Özet",
    category: "Araç",
    description: "Ses dosyası veya YouTube linki gir, temiz transkript + yapay zeka özeti al. Podcast'çiler ve öğrenciler için.",
    buildTime: "1-2 gün",
    incomeModel: "Dakika başına ücret veya abonelik",
    potential: "₺4.000 - ₺15.000/ay",
    difficulty: "Kolay",
  },
  {
    id: 4,
    title: "PDF Soru-Cevap Botu",
    category: "Araç",
    description: "Herhangi bir PDF'i yükle, yapay zeka ile sohbet et. Hukuk, akademi, finans için güçlü niş.",
    buildTime: "1-2 gün",
    incomeModel: "Aylık abonelik ($10-25)",
    potential: "₺5.000 - ₺25.000/ay",
    difficulty: "Kolay",
  },
  {
    id: 5,
    title: "Excel/Veri Raporlayıcı",
    category: "Araç",
    description: "Ham veri veya Excel dosyası gir, profesyonel görsel rapor veya infografik al.",
    buildTime: "2-3 gün",
    incomeModel: "Kullanım başına veya abonelik",
    potential: "₺6.000 - ₺20.000/ay",
    difficulty: "Orta",
  },
  {
    id: 6,
    title: "E-ticaret Ürün Açıklaması Yazıcı",
    category: "İçerik",
    description: "Trendyol/Hepsiburada satıcıları için SEO'ya uygun ürün açıklamaları. Binlerce satıcı, tek bir sorun.",
    buildTime: "1 gün",
    incomeModel: "Kredi sistemi veya aylık plan",
    potential: "₺4.000 - ₺18.000/ay",
    difficulty: "Çok Kolay",
  },
  {
    id: 7,
    title: "Sosyal Medya İçerik Otomatı",
    category: "İçerik",
    description: "İşletme bilgilerini bir kez gir, sistem haftalık post takvimi üretir ve onaya sunar. Küçük işletmeler için tam otomasyon.",
    buildTime: "2-3 gün",
    incomeModel: "Aylık abonelik ($20-50)",
    potential: "₺8.000 - ₺30.000/ay",
    difficulty: "Orta",
  },
  {
    id: 8,
    title: "Niş Haber Bülteni Motoru",
    category: "İçerik",
    description: "Belirli sektör (emlak, teknoloji, hukuk) için günlük yapay zeka destekli email bülteni üret. Aboneler para öder.",
    buildTime: "2-3 gün",
    incomeModel: "Okuyucu aboneliği + reklam",
    potential: "₺3.000 - ₺15.000/ay",
    difficulty: "Orta",
  },
  {
    id: 9,
    title: "E-posta Şikayeti → Profesyonel Yanıt",
    category: "Süreç",
    description: "Kızgın müşteri emaili yapıştır, yapay zeka sakin ve profesyonel yanıt üretir. KOBİ'ler ve müşteri hizmetleri için.",
    buildTime: "1 gün",
    incomeModel: "Kullanım başına ($1-3)",
    potential: "₺2.000 - ₺10.000/ay",
    difficulty: "Çok Kolay",
  },
  {
    id: 10,
    title: "White-label SEO İçerik Servisi",
    category: "Süreç",
    description: "Dijital ajanslar müşterileri için içerik üretmekte zorlanır. Onlara kendi markayla sunabilecekleri arka plan sistemi kur.",
    buildTime: "2-3 gün",
    incomeModel: "Ajans başına aylık sabit ücret ($50-200)",
    potential: "₺10.000 - ₺40.000/ay",
    difficulty: "Orta",
  },
  {
    id: 11,
    title: "Akademik/Kurumsal Raporlama Asistanı",
    category: "Süreç",
    description: "Ham veriler, notlar veya tablolar gir — bağlamlı ve akıcı rapor al. Türkiye'de bu segmente odaklı araç yok.",
    buildTime: "2-3 gün",
    incomeModel: "Aylık abonelik ($15-30)",
    potential: "₺5.000 - ₺22.000/ay",
    difficulty: "Orta",
  }
];
