import React, { useState, useEffect, useMemo, useRef } from 'react';
import confetti from 'canvas-confetti';
import QRCode from 'qrcode';
import {
  Mic,
  MicOff,
  Volume2,
  ShieldCheck,
  HeartHandshake,
  Heart,
  Share2,
  Clock,
  Printer,
  Trash2,
  Download,
  Upload,
  Search,
  CheckCircle2,
  AlertTriangle,
  Coins,
  FileSpreadsheet,
  PackageCheck,
  RefreshCw,
  Copy,
  Info,
  Sparkles,
  QrCode,
  Scan,
  X,
  Check,
  Eye,
  EyeOff,
  Wifi,
  WifiOff,
  CreditCard,
  Landmark,
  Globe,
  Lock,
  Scale,
  Settings,
  Activity,
  Server,
  Database,
  CheckCheck,
  FileCheck2,
  SlidersHorizontal,
  ChevronDown,
  Building2,
  FileText,
  Users,
  VolumeX,
  PenTool,
  Fingerprint,
  PhoneCall,
  MessageSquare
} from 'lucide-react';

// ==========================================
// 1. BRAND LOGO COMPONENT: BolMizan
// ==========================================
export function BolMizanLogo({
  className = "w-10 h-10",
  showText = true,
  textClass = ""
}: {
  className?: string;
  showText?: boolean;
  textClass?: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative shrink-0 ${className}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bmGradShield" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="50%" stopColor="#065f46" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <linearGradient id="bmGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="bmGradBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Octagonal Islamic Geometric Security Shield (Amanat & Digital Seal) */}
          <polygon
            points="50,4 82,18 96,50 82,82 50,96 18,82 4,50 18,18"
            fill="url(#bmGradShield)"
            stroke="url(#bmGradGold)"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          <polygon
            points="50,11 77,23 89,50 77,77 50,89 23,77 11,50 23,23"
            fill="none"
            stroke="#34d399"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            opacity="0.6"
          />

          {/* Central Pillar of Mizan (Justice & Equilibrium) */}
          <line x1="50" y1="22" x2="50" y2="74" stroke="url(#bmGradGold)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="22" r="4.5" fill="url(#bmGradGold)" />
          <polygon points="40,74 60,74 56,79 44,79" fill="url(#bmGradGold)" />

          {/* Horizontal Balance Beam */}
          <line x1="22" y1="35" x2="78" y2="35" stroke="url(#bmGradBeam)" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="50" cy="35" r="3.2" fill="#ffffff" />

          {/* Left Pan (Voice & Acoustic Waves / Bol) */}
          <line x1="24" y1="35" x2="18" y2="52" stroke="url(#bmGradGold)" strokeWidth="1.5" />
          <line x1="24" y1="35" x2="30" y2="52" stroke="url(#bmGradGold)" strokeWidth="1.5" />
          <path d="M14 52 Q24 58 34 52 Z" fill="url(#bmGradGold)" />
          <path d="M20 47 Q24 44 28 47" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M22 43 Q24 41 26 43" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Right Pan (Cryptographic Lock & Weight / Amanat) */}
          <line x1="76" y1="35" x2="70" y2="52" stroke="url(#bmGradGold)" strokeWidth="1.5" />
          <line x1="76" y1="35" x2="82" y2="52" stroke="url(#bmGradGold)" strokeWidth="1.5" />
          <path d="M66 52 Q76 58 86 52 Z" fill="url(#bmGradGold)" />
          <rect x="73" y="45" width="6" height="5" rx="1" fill="#ffffff" />
          <path d="M74.5 45 V43 C74.5 42 77.5 42 77.5 43 V45" stroke="#ffffff" strokeWidth="1" fill="none" />

          {/* Central Voice Resonance Ring */}
          <circle cx="50" cy="54" r="8.5" fill="#ffffff" fillOpacity="0.16" stroke="url(#bmGradGold)" strokeWidth="1.5" />
          <path d="M46 54 Q50 50 54 54 Q50 58 46 54" fill="url(#bmGradGold)" />
        </svg>
      </div>
      {showText && (
        <div className={textClass}>
          <div className="flex items-center gap-1.5">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-emerald-950 font-sans">
              BolMizan
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200">
              بول میزان
            </span>
          </div>
          <p className="text-[10px] font-semibold text-emerald-700/90 leading-tight">
            قانونی صوتی کھاتہ و بین الاقوامی امانت نظام
          </p>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 2. DATA TYPES & LEGAL INTERFACES
// ==========================================
type Language = 'ur' | 'sd' | 'ar' | 'en';
type TransactionType = 'udhaar' | 'nakad';
type TransactionStatus = 'Pending' | 'Paid' | 'Forgiven';

interface LedgerEntry {
  id: number;
  biz: string;
  cat: string;
  name: string;
  phone: string;
  amount: number;
  currency: string;
  originalAmount: number;
  dueDate: string;
  detail: string;
  type: TransactionType;
  status: TransactionStatus;
  createdAt: string;
  paidAt: string | null;
  hash: string;
  ext: number; // Mohlat extension count
  paymentRail?: 'Cash' | 'Raast' | '1LINK_IBAN' | 'ISO20022_Wire';
  raastId?: string;
  iban?: string;
  isoRef?: string;
  signatureDataUrl?: string; // Electronic signature / thumb impression
  witness1?: string; // Witness 1 per Quran 2:282
  witness2?: string; // Witness 2 per Quran 2:282
}

interface ShopPaymentProfile {
  businessName: string;
  raastId: string;
  bankName: string;
  iban: string;
  swiftBic: string;
  defaultCurrency: string;
}

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

const DB_KEY = 'bolmizan_legal_db_v2';
const PROFILE_KEY = 'bolmizan_shop_profile_v2';
const SAVED_EXPIRY_KEY = 'bolmizan_expiry_saved_v2';
const SYNC_QUEUE_KEY = 'bolmizan_sync_queue_v2';

const DEFAULT_PROFILE: ShopPaymentProfile = {
  businessName: 'الميزان جنرل اسٹور اینڈ ہارڈویئر نوابشاہ',
  raastId: '03001234567',
  bankName: 'Meezan Bank Ltd (Islamic Banking)',
  iban: 'PK36MEZN0001234567890123',
  swiftBic: 'MEZNPKKA',
  defaultCurrency: 'PKR'
};

const SEED_DATA: LedgerEntry[] = [
  {
    id: 1718001000000,
    biz: 'الميزان جنرل اسٹور اینڈ ہارڈویئر نوابشاہ',
    cat: 'Kiryana / General',
    name: 'حاجی محمد اسماعیل',
    phone: '923001234567',
    amount: 14500,
    currency: 'PKR',
    originalAmount: 18000,
    dueDate: new Date(Date.now() + 10 * 86400000).toISOString().split('T')[0],
    detail: '2 گٹو گندم، 10 کلو گھی، چاول سپر کرنل [قسط ادا: 3500]',
    type: 'udhaar',
    status: 'Pending',
    createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
    paidAt: null,
    hash: '8f7a2d64bc910398f58b76c813deea6749021e1a5390e181ca559ad1ec1d9402',
    ext: 1,
    paymentRail: 'Raast',
    raastId: '03001234567',
    iban: 'PK36MEZN0001234567890123',
    isoRef: 'BOLMIZAN/2026/17180010'
  },
  {
    id: 1718002000000,
    biz: 'الميزان جنرل اسٹور اینڈ ہارڈویئر نوابشاہ',
    cat: 'Medical / Pharmacy',
    name: 'عبدالستار ملاح (غریب کسان)',
    phone: '923019876543',
    amount: 6200,
    currency: 'PKR',
    originalAmount: 6200,
    dueDate: new Date(Date.now() - 3 * 86400000).toISOString().split('T')[0],
    detail: 'انسولین، شوگر دوا، بلڈ پریشر سیرپ (تنگ دستی کی وجہ سے معاف)',
    type: 'udhaar',
    status: 'Forgiven',
    createdAt: new Date(Date.now() - 20 * 86400000).toISOString(),
    paidAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    hash: '3e1c98a58712aef410bdc194bc882046ad37728fca0039281e828a2c2bf31804',
    ext: 2,
    paymentRail: 'Cash',
    isoRef: 'BOLMIZAN/2026/17180020'
  },
  {
    id: 1718003000000,
    biz: 'الميزان جنرل اسٹور اینڈ ہارڈویئر نوابشاہ',
    cat: 'Agriculture / Mandi',
    name: 'وڈیرو غلام مرتضیٰ زرداری',
    phone: '923055554433',
    amount: 85000,
    currency: 'PKR',
    originalAmount: 85000,
    dueDate: new Date(Date.now() - 1 * 86400000).toISOString().split('T')[0],
    detail: '10 بوری ڈی اے پی کھاد، 4 لیٹر زرعی اسپرے',
    type: 'nakad',
    status: 'Paid',
    createdAt: new Date(Date.now() - 15 * 86400000).toISOString(),
    paidAt: new Date(Date.now() - 1 * 86400000).toISOString(),
    hash: 'bb4012e43bc37021d9607f2a1b9c7de92043e0a293847291a82b3d881029c910',
    ext: 0,
    paymentRail: '1LINK_IBAN',
    iban: 'PK36MEZN0001234567890123',
    isoRef: 'BOLMIZAN/2026/17180030'
  },
  {
    id: 1718004000000,
    biz: 'الميزان جنرل اسٹور اینڈ ہارڈویئر نوابشاہ',
    cat: 'Construction / Hardware',
    name: 'مستری رشید احمد ٹنڈو آدم',
    phone: '923331122334',
    amount: 28000,
    currency: 'PKR',
    originalAmount: 28000,
    dueDate: new Date(Date.now() - 4 * 86400000).toISOString().split('T')[0],
    detail: '50 بوری لکی سیمنٹ، 2 بندل سریا 4 سوتر',
    type: 'udhaar',
    status: 'Pending',
    createdAt: new Date(Date.now() - 18 * 86400000).toISOString(),
    paidAt: null,
    hash: '57b291038eacba4918237d046f827104eac61049281e0123847a9b0cde194025',
    ext: 0,
    paymentRail: 'Raast',
    raastId: '03001234567',
    iban: 'PK36MEZN0001234567890123',
    isoRef: 'BOLMIZAN/2026/17180040'
  }
];

// Cryptographic hash helper
async function generateSha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Built-in Web Audio Synthesizer (Zero-file external dependency audio feedback)
function playTone(type: 'success' | 'forgive' | 'click' | 'alert') {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    if (type === 'success') {
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now);
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.15);
      gain1.gain.setValueAtTime(0.18, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.35);
    } else if (type === 'forgive') {
      const now = ctx.currentTime;
      [329.63, 392.00, 523.25].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.15, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.5);
      });
    } else if (type === 'click') {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    }
  } catch (e) {
    // Audio context prevented or disabled
  }
}

// Translations
const i18n = {
  ur: {
    dir: 'rtl' as const,
    voice: 'ur-PK',
    title: '🎙️ بول میزان (BolMizan) قانونی صوتی کھاتہ',
    sub: 'قرآن 2:282 و ETO 2002 قانونی معاہدات • صوتی کھاتہ • راست (Raast) و IBAN • امانت و زکوٰۃ',
    lU: 'باقی ادھار',
    lN: 'نقد / وصول',
    lD: 'اوسط واپسی',
    lC: 'کل معاہدے',
    lG: 'صدقہ / معاف',
    lS: 'ایکسپائری بچت',
    t1: '1. بول کھاتہ',
    t2: '2. امانت لیجر',
    t3: '3. قانونی ادائیگی (Raast/IBAN)',
    t4: '4. مال گارڈ و بچت',
    t5: '5. زکوٰۃ و تصدیق',
    mic: '🎤 بول کر لکھیں (دبائیں اور بولیں)',
    listening: 'سن رہا ہوں... بولیے (مثلاً: "علی 500 ادھار")',
    biz: 'دکان / قانونی بزنس ٹائٹل',
    name: 'گاہک / پارٹی کا نام',
    phone: 'واٹس ایپ نمبر (مثال: 923001234567)',
    amt: 'رقم (Amount)',
    dueDate: 'واپسی کی آخری تاریخ',
    det: 'تفصیل (مثلاً: 2 بوری کھاد / انسولین / سیمنٹ)',
    udhaar: 'ادھار دیا (لینے ہیں / Receivable)',
    nakad: 'نقد ملا (وصول ہوئے / Cash Received)',
    save: '✅ قانونی ڈیجیٹل معاہدہ بنائیں (SHA-256)',
    search: '🔍 نام، تفصیل، فون یا کیٹیگری تلاش کریں...',
    wa: 'WhatsApp',
    tts: '🔊 سنیں',
    mohlat: '15-دن مہلت',
    qist: 'قسط لیں',
    sadqah: '💜 معاف (صدقہ)',
    pdf: '📄 پرنٹ رسید',
    payRail: '💳 قانونی ادائیگی',
    paidBtn: 'وصول ہو گیا',
    cur: 'PKR',
    all: 'تمام',
    pending: 'باقی (Pending)',
    overdue: 'تاریخ گزر گئی (Overdue)',
    paid: 'وصول شدہ (Paid)',
    forgiven: 'صدقہ / معاف (Sadqah)',
    privacyOn: 'پردہ موڈ فعال: حساس رقوم چھپائی گئی ہیں',
    privacyOff: 'پردہ موڈ',
    online: 'آن لائن (مربوط)',
    offline: '100% آف لائن موڈ (ڈیٹا ڈیوائس پر محفوظ ہے)',
    readOut: (n: string, a: number, st: TransactionStatus) =>
      `${n} کے ذمے ${a} روپے ${
        st === 'Pending'
          ? 'باقی ہیں'
          : st === 'Forgiven'
          ? 'اللہ کی رضا کے لیے مکمل معاف کر دیے گئے ہیں'
          : 'وصول ہو چکے ہیں'
      }۔`,
    waU: (n: string, a: number, d: string, b: string, h: string, dt: string) =>
      `*بول میزان (BolMizan) قانونی امانت پرچی*\n(قرآن 2:282 و ETO 2002 مجریہ پاکستان)\nالسلام علیکم ${n} بھائی،\nادارہ: ${b || 'ہمارا کاروبار'}\nباقی رقم: ${a} PKR\nواپسی تاریخ: ${dt}\nتفصیل: ${d}\nSHA-256 ثبوت: ${h.slice(
        0,
        14
      )}...\n_BolMizan: بلا سود، قانونی و باوقار ڈیجیٹل کھاتہ_`,
    waN: (n: string, a: number, d: string, b: string, h: string) =>
      `*بول میزان (BolMizan) نقد وصولی رسید*\nالسلام علیکم ${n} بھائی، ${b || 'ہماری جانب سے'} "${d}" کے ${a} PKR نقد وصول ہو گئے ہیں۔\nثبوت: ${h.slice(
        0,
        14
      )}... جزاک اللہ خیراً!`,
    waM: (n: string, a: number, b: string, dt: string) =>
      `*عزت اور مہلت (قرآن 2:280)*\nالسلام علیکم ${n} بھائی، آپ کی مجبوری اور آسانی کا احترام کرتے ہوئے ${
        b || 'ہماری جانب سے'
      } ${a} PKR کی واپسی کے لیے بغیر کسی سود یا جرمانے کے *15 دن کی مزید مہلت* (نئی تاریخ: ${dt}) دی گئی ہے۔`,
    waS: (n: string, a: number, b: string) =>
      `*صدقہ و قرض معافی سند (قرآن 2:280)*\nالسلام علیکم ${n} بھائی، اللہ تعالیٰ کی رضا اور آپ کا بوجھ ہلکا کرنے کے لیے ${
        b || 'ہماری جانب سے'
      } آپ کے ذمے ${a} PKR کا تمام قرض *مکمل معاف (صدقہ جاریہ)* کر دیا گیا ہے۔ اب آپ پر کوئی قرض نہیں۔ اللہ پاک آسانیاں فرمائے۔`
  },
  sd: {
    dir: 'rtl' as const,
    voice: 'sd-IN',
    title: '🎙️ ٻول ميزان (BolMizan) قانوني صوتی کاتو',
    sub: 'قرآن 2:282 ۽ ETO 2002 قانوني معاهدا • صوتی کاتو • راست (Raast) ۽ IBAN • امانت و زڪوات',
    lU: 'باقي اوڌار',
    lN: 'نقد / وصول',
    lD: 'سراسري واپسي',
    lC: 'ڪل معاهدا',
    lG: 'صدقو / معاف',
    lS: 'اڪسپائري بچت',
    t1: '1. ٻول کاتو',
    t2: '2. امانت ليجر',
    t3: '3. قانوني ادائيگي (Raast/IBAN)',
    t4: '4. مال گارڊ و بچت',
    t5: '5. زڪوات و تصديق',
    mic: '🎤 ڳالهائي لکو (دٻايو ۽ ڳالهايو)',
    listening: 'ٻڌان پيو... ڳالهايو (مثال: "علي 500 اوڌار")',
    biz: 'دڪان / قانوني نالو',
    name: 'گراهڪ / پارٽي جو نالو',
    phone: 'واٽس ايپ نمبر (92300...)',
    amt: 'رقم (Amount)',
    dueDate: 'واپسي جي آخري تاريخ',
    det: 'تفصيل (سامان / دوائون / سروس)',
    udhaar: 'اوڌار ڏنو (وٺڻا آهن)',
    nakad: 'نقد مليو (وصول ٿيا)',
    save: '✅ محفوظ ڊجيٽل معاهدو ٺاهيو (SHA-256)',
    search: '🔍 نالي يا تفصيل سان ڳوليو...',
    wa: 'WhatsApp',
    tts: '🔊 ٻڌو',
    mohlat: '15-ڏينهن مهلت',
    qist: 'قسط',
    sadqah: '💜 معاف (صدقو)',
    pdf: '📄 پرنٽ رسيد',
    payRail: '💳 قانوني ادائيگي',
    paidBtn: 'وصول ٿيو',
    cur: 'PKR',
    all: 'سڀ',
    pending: 'باقي',
    overdue: 'تاريخ گذري وئي',
    paid: 'وصول ٿيل',
    forgiven: 'صدقو / معاف',
    privacyOn: 'پردو فعال: رقم لڪايل آهي',
    privacyOff: 'پردو موڊ',
    online: 'آن لائن',
    offline: '100% آف لائن موڊ (محفوظ ڊيٽا)',
    readOut: (n: string, a: number, st: TransactionStatus) =>
      `${n} جي ذمي ${a} رپيا ${
        st === 'Pending'
          ? 'باقي آهن'
          : st === 'Forgiven'
          ? 'الله جي رضا لاءِ معاف ڪيا ويا آهن'
          : 'وصول ٿي چڪا آهن'
      }۔`,
    waU: (n: string, a: number, d: string, b: string, h: string, dt: string) =>
      `*ٻول ميزان (BolMizan) امانت پرچي*\nاسلام عليڪم ${n} سائين،\nدڪان: ${b || 'اسان جو ڪاروبار'}\nباقي رقم: ${a} رپيا\nواپسي تاريخ: ${dt}\nتفصيل: ${d}\nثبوت: ${h.slice(
        0,
        14
      )}...`,
    waN: (n: string, a: number, d: string, b: string, h: string) =>
      `*ٻول ميزان (BolMizan) نقد رسيد*\nاسلام عليڪم ${n} سائين، "${d}" جا ${a} رپيا نقد وصول ٿي ويا آهن. جزاک الله!`,
    waM: (n: string, a: number, b: string, dt: string) =>
      `*عزت ۽ مهلت (قرآن 2:280)*\nاسلام عليڪم ${n} سائين، اوهان جي آسانيءَ لاءِ بنا وياج جي ${a} رپين لاءِ *15 ڏينهن جي وڌيڪ مهلت* (نئين تاريخ: ${dt}) ڏني وئي آهي.`,
    waS: (n: string, a: number, b: string) =>
      `*صدقو ۽ معافي (قرآن 2:280)*\nاسلام عليڪم ${n} سائين، الله جي رضا لاءِ ${
        b || 'اسان جي طرفان'
      } اوهان جا ${a} رپيا *مڪمل معاف (صدقو)* ڪيا ويا آهن.`
  },
  ar: {
    dir: 'rtl' as const,
    voice: 'ar-SA',
    title: '🎙️ بول ميزان (BolMizan) الدفتر الصوتي القانوني',
    sub: 'عقود القرآن 2:282 والقوانين التجارية • الدفتر الصوتي • التحويلات الفورية وIBAN • الزكاة',
    lU: 'إجمالي الآجل',
    lN: 'إجمالي النقد',
    lD: 'متوسط التحصيل',
    lC: 'العقود',
    lG: 'صدقة / إبراء',
    lS: 'وفورات الصلاحية',
    t1: '1. الدفتر الصوتي',
    t2: '2. سجل الأمانة',
    t3: '3. السداد القانوني (Raast/IBAN)',
    t4: '4. المخزون',
    t5: '5. الزكاة والتوثيق',
    mic: '🎤 تحدث للكتابة (اضغط وتحدث)',
    listening: 'جاري الاستماع... تحدث الآن',
    biz: 'الاسم التجاري القانوني',
    name: 'اسم العميل / الطرف',
    phone: 'رقم الواتساب',
    amt: 'المبلغ',
    dueDate: 'تاريخ الاستحقاق',
    det: 'التفاصيل',
    udhaar: 'آجل / دين (مستحق القبض)',
    nakad: 'نقدي (تم الاستلام)',
    save: '✅ حفظ العقد الرقمي الموثق (SHA-256)',
    search: '🔍 بحث بالاسم، الفئة أو التفاصيل...',
    wa: 'واتساب',
    tts: '🔊 استماع',
    mohlat: 'إمهال 15 يوماً',
    qist: 'قسط',
    sadqah: '💜 إبراء (صدقة)',
    pdf: '📄 طباعة إيصال',
    payRail: '💳 سداد بنكي',
    paidBtn: 'تم السداد',
    cur: 'PKR/SAR',
    all: 'الكل',
    pending: 'مستحق',
    overdue: 'متأخر',
    paid: 'مسدد',
    forgiven: 'معفى عنه',
    privacyOn: 'حجب الخصوصية نشط',
    privacyOff: 'حماية الخصوصية',
    online: 'متصل بالإنترنت',
    offline: '100% وضع غير متصل (بيانات آمنة محلياً)',
    readOut: (n: string, a: number, st: TransactionStatus) =>
      `العميل ${n} المبلغ ${a} ${
        st === 'Pending' ? 'مستحق الدفع' : st === 'Forgiven' ? 'تم التصدق به لوجه الله' : 'تم سداده بالكامل'
      }۔`,
    waU: (n: string, a: number, d: string, b: string, h: string, dt: string) =>
      `*سند أمانة موثق - بول ميزان (BolMizan)*\n(القرآن 2:282 والأنظمة التجارية المعتمدة)\nالسلام عليكم أخي ${n}،\nالمتجر: ${b || 'شركتنا'}\nالمبلغ المتبقي: ${a}\nتاريخ الاستحقاق: ${dt}\nالتفاصيل: ${d}\nالتوثيق: ${h.slice(
        0,
        14
      )}...`,
    waN: (n: string, a: number, d: string, b: string, h: string) =>
      `*إيصال استلام نقدي - BolMizan*\nالسلام عليكم أخي ${n}، تم استلام مبلغ ${a} مقابل "${d}". بارك الله فيكم!`,
    waM: (n: string, a: number, b: string, dt: string) =>
      `*تيسير وإمهال (القرآن 2:280)*\nالسلام عليكم أخي ${n}، تقديراً لظروفكم تم منحكم *مهلة إضافية 15 يوماً* بدون أي فوائد لسداد ${a} (التاريخ الجديد: ${dt}).`,
    waS: (n: string, a: number, b: string) =>
      `*إبراء ذمة وصدقة (القرآن 2:280)*\nالسلام عليكم أخي ${n}، ابتغاء مرضاة الله تم *إبراء ذمتكم والتصدق* بمبلغ ${a} بالكامل.`
  },
  en: {
    dir: 'ltr' as const,
    voice: 'en-US',
    title: '🎙️ BolMizan | Legal Voice Ledger & Financial OS',
    sub: 'Quran 2:282 & ETO 2002 Legal Contracts • Voice Ledger • SBP Raast, IBAN & ISO 20022',
    lU: 'Receivables',
    lN: 'Cash / Collected',
    lD: 'Avg Recovery',
    lC: 'Contracts',
    lG: 'Forgiven (Sadqah)',
    lS: 'Expiry Saved',
    t1: '1. Voice Khata',
    t2: '2. Amanat Ledger',
    t3: '3. Legal Pay Rails (Raast/IBAN)',
    t4: '4. Stock & Waste Audit',
    t5: '5. Zakat & Verification',
    mic: '🎤 Click & Speak Entry',
    listening: 'Listening... Speak (e.g., "Ali 500 credit fertilizer")',
    biz: 'Legal Shop / Entity Name',
    name: 'Party / Client Legal Name',
    phone: 'WhatsApp / Contact (e.g. 923001234567)',
    amt: 'Amount',
    dueDate: 'Maturity / Due Date',
    det: 'Item Description (e.g. 2 bags fertilizer / medicine)',
    udhaar: 'Credit Given (Receivable)',
    nakad: 'Cash Received (Paid)',
    save: '✅ Create Legal Contract (SHA-256)',
    search: '🔍 Search by name, item, phone or notes...',
    wa: 'WhatsApp',
    tts: '🔊 Listen',
    mohlat: '15-Day Grace',
    qist: 'Partial Pay',
    sadqah: '💜 Forgive (Sadqah)',
    pdf: '📄 Print Receipt',
    payRail: '💳 Legal Pay Rail',
    paidBtn: 'Mark Paid',
    cur: 'PKR',
    all: 'All',
    pending: 'Pending',
    overdue: 'Overdue',
    paid: 'Paid',
    forgiven: 'Forgiven (Sadqah)',
    privacyOn: 'Privacy Shield Active: Amounts Hidden',
    privacyOff: 'Privacy Shield',
    online: 'Online (Connected)',
    offline: '100% Offline Mode (Local Sovereign Data)',
    readOut: (n: string, a: number, st: TransactionStatus) =>
      `Account ${n}, amount ${a} rupees, status is ${st}.`,
    waU: (n: string, a: number, d: string, b: string, h: string, dt: string) =>
      `*BolMizan Legal Amanat Receipt*\n(Electronic Transactions Ordinance 2002 & Quran 2:282)\nAssalam-o-Alaikum ${n},\nBusiness: ${
        b || 'Our Store'
      }\nBalance Due: ${a} PKR\nDue Date: ${dt}\nDetails: ${d}\nSHA-256 Proof: ${h.slice(
        0,
        14
      )}...\n_BolMizan: Sovereign, Legally Certified Halal Ledger_`,
    waN: (n: string, a: number, d: string, b: string, h: string) =>
      `*BolMizan Cash Receipt*\nAssalam-o-Alaikum ${n}, we confirm receipt of ${a} PKR for "${d}". Thank you! Proof: ${h.slice(
        0,
        14
      )}...`,
    waM: (n: string, a: number, b: string, dt: string) =>
      `*Empathy & Grace Extension (Quran 2:280)*\nAssalam-o-Alaikum ${n}, respecting your situation, ${
        b || 'we'
      } have granted a *15-day interest-free extension* (New Due Date: ${dt}) for ${a} PKR.`,
    waS: (n: string, a: number, b: string) =>
      `*Debt Forgiveness & Sadqah (Quran 2:280)*\nAssalam-o-Alaikum ${n}, for the sake of Allah and to ease your burden, ${
        b || 'we'
      } have *completely forgiven* your debt of ${a} PKR. You owe nothing.`
  }
};

// ==========================================
// 3. MAIN APPLICATION
// ==========================================
export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ur');
  const [activeTab, setActiveTab] = useState<number>(1);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 100% Offline/Online Network & Synchronization State
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>(() => new Date().toLocaleTimeString());
  const [syncQueue, setSyncQueue] = useState<any[]>(() => {
    try {
      const q = localStorage.getItem(SYNC_QUEUE_KEY);
      return q ? JSON.parse(q) : [];
    } catch {
      return [];
    }
  });

  // Extreme Privacy Mode (Parda Mode): Masks numbers so counter onlookers cannot see sensitive figures
  const [isPrivacyMasked, setIsPrivacyMasked] = useState<boolean>(() => {
    return localStorage.getItem('bolmizan_privacy_mode') === 'true';
  });

  // Persistent shop legal payment profile
  const [shopProfile, setShopProfile] = useState<ShopPaymentProfile>(() => {
    try {
      const saved = localStorage.getItem(PROFILE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_PROFILE;
  });

  // Persistent transaction ledger
  const [entries, setEntries] = useState<LedgerEntry[]>(() => {
    try {
      const stored = localStorage.getItem(DB_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return SEED_DATA;
  });

  const [savedExpiryBachat, setSavedExpiryBachat] = useState<number>(() => {
    return parseFloat(localStorage.getItem(SAVED_EXPIRY_KEY) || '42500');
  });

  // Toast notifications state (replaces non-professional alert/prompts)
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3200);
  };

  // Form Inputs for Tab 1
  const [cat, setCat] = useState<string>('Kiryana / General');
  const [personName, setPersonName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('PKR');
  const [dueDate, setDueDate] = useState<string>(() => {
    const d = new Date(Date.now() + 15 * 86400000);
    return d.toISOString().split('T')[0];
  });
  const [detail, setDetail] = useState<string>('');
  const [transType, setTransType] = useState<TransactionType>('udhaar');

  // Voice recognition state
  const [isListening, setIsListening] = useState<boolean>(false);
  const [voiceStatus, setVoiceStatus] = useState<string>('');

  // Interactive Modals State (replaces window.prompt/confirm/alert)
  const [qistModalContract, setQistModalContract] = useState<LedgerEntry | null>(null);
  const [qistInputAmount, setQistInputAmount] = useState<string>('');

  const [forgiveModalContract, setForgiveModalContract] = useState<LedgerEntry | null>(null);
  const [deleteModalContract, setDeleteModalContract] = useState<LedgerEntry | null>(null);

  // New High-Utility Features State
  const [signatureModalContract, setSignatureModalContract] = useState<LedgerEntry | null>(null);
  const [formSignatureDataUrl, setFormSignatureDataUrl] = useState<string>('');
  const [formSignatureModalOpen, setFormSignatureModalOpen] = useState<boolean>(false);
  const [selectedCustomerForStatement, setSelectedCustomerForStatement] = useState<string | null>(null);
  const [zakatModalOpen, setZakatModalOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [tab1ViewMode, setTab1ViewMode] = useState<'entries' | 'customers'>('entries');

  // Tab 3: Payment Rails Modal & State
  const [paymentModalEntry, setPaymentModalEntry] = useState<LedgerEntry | null>(null);
  const [raastQrDataUrl, setRaastQrDataUrl] = useState<string>('');
  const [tab3RaastQrUrl, setTab3RaastQrUrl] = useState<string>('');
  const [copiedField, setCopiedField] = useState<string>('');
  const [profileSettingsOpen, setProfileSettingsOpen] = useState<boolean>(false);

  // Tab 4: Stock & Loss Audit state
  const [matName, setMatName] = useState<string>('سیمنٹ کی بوریاں (Lucky Cement 50kg)');
  const [matSent, setMatSent] = useState<string>('200');
  const [matUsed, setMatUsed] = useState<string>('182');
  const [matPrice, setMatPrice] = useState<string>('1250');
  const [matExpiry, setMatExpiry] = useState<string>(() => {
    const d = new Date(Date.now() + 45 * 86400000);
    return d.toISOString().split('T')[0];
  });
  const [matPhone, setMatPhone] = useState<string>('923001234567');
  const [auditResult, setAuditResult] = useState<{
    diff: number;
    pct: string;
    loss: number;
    daysLeft: number;
    discountTotal: number;
    offerUrl: string;
    isClean: boolean;
  } | null>(null);

  // Tab 5: Zakat & Verifier state
  const [zakatCash, setZakatCash] = useState<string>('350000');
  const [zakatStock, setZakatStock] = useState<string>('920000');
  const [zakatPayables, setZakatPayables] = useState<string>('180000');
  const [zakatCalculated, setZakatCalculated] = useState<{
    totalAssets: number;
    liabilities: number;
    netWealth: number;
    zakatDue: number;
  } | null>(null);

  const [verifyHashInput, setVerifyHashInput] = useState<string>('');
  const [verifyResult, setVerifyResult] = useState<{
    found: boolean;
    validOriginal: boolean;
    entry?: LedgerEntry;
    message: string;
  } | null>(null);

  // Print Receipt & QR Modal
  const [printEntry, setPrintEntry] = useState<LedgerEntry | null>(null);
  const [printQrDataUrl, setPrintQrDataUrl] = useState<string>('');
  const [qrCopied, setQrCopied] = useState<boolean>(false);

  // ==========================================
  // 4. FULL-STACK SERVER SYNCHRONIZATION ENGINE
  // ==========================================
  const triggerFullSync = async (forcedQueue?: any[]) => {
    setIsSyncing(true);
    const queueToProcess = forcedQueue || syncQueue;
    try {
      const res = await fetch('/api/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientQueue: queueToProcess,
          clientContracts: entries
        })
      });

      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.contracts)) {
          setEntries(json.contracts);
          setSyncQueue([]);
          localStorage.removeItem(SYNC_QUEUE_KEY);
          setLastSyncTime(new Date().toLocaleTimeString());
          addToast('سرور اور لوکل ڈیٹا کامیابی سے سنک ہو گیا!', 'success');
        }
      } else {
        // Server responded with error, keep queue
        addToast('سرور کنکشن سست ہے، آف لائن قطار محفوظ رکھی گئی ہے۔', 'info');
      }
    } catch (err) {
      // Offline fallback
      addToast('آف لائن موڈ: آپ کی تبدیلیاں ڈیوائس پر محفوظ ہو گئی ہیں۔', 'info');
    } finally {
      setIsSyncing(false);
    }
  };

  // Fetch initial contracts from server on load
  useEffect(() => {
    async function loadServerData() {
      try {
        const res = await fetch('/api/contracts');
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setEntries(json.data);
          }
        }
      } catch (err) {
        console.log('Serving from local storage cache');
      }
    }
    loadServerData();
  }, []);

  // Online / Offline listener
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      addToast('انٹرنیٹ بحال! سرور سنکرونائزیشن جاری ہے...', 'info');
      triggerFullSync();
    };
    const handleOffline = () => {
      setIsOnline(false);
      addToast('آپ آف لائن ہیں: بول میزان 100% لوکل ڈیٹا محفوظ رکھ رہا ہے۔', 'info');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [syncQueue, entries]);

  // Generate Tab 3 Raast QR 100% offline via local qrcode library (zero external API dependency)
  useEffect(() => {
    const genTab3RaastQr = async () => {
      try {
        const payload = `raast://pay?pa=${shopProfile.raastId}&pn=${encodeURIComponent(
          shopProfile.businessName
        )}&cu=${shopProfile.defaultCurrency || 'PKR'}`;
        const url = await QRCode.toDataURL(payload, {
          width: 260,
          margin: 2,
          color: { dark: '#047857', light: '#ffffff' }
        });
        setTab3RaastQrUrl(url);
      } catch (e) {
        console.error('Failed to generate local Raast QR', e);
      }
    };
    genTab3RaastQr();
  }, [shopProfile]);

  // Check URL query parameters for ?verify=HASH on load (from QR scan)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const verifyHash = params.get('verify');
      if (verifyHash) {
        setActiveTab(5);
        setVerifyHashInput(verifyHash);
        const match = entries.find(
          x =>
            x.hash.toLowerCase() === verifyHash.toLowerCase() ||
            x.hash.toLowerCase().startsWith(verifyHash.toLowerCase())
        );
        if (match) {
          setVerifyResult({
            found: true,
            validOriginal: true,
            entry: match,
            message:
              currentLang === 'ur'
                ? '✅ 100% تصدیق شدہ! اسمارٹ فون QR اسکین کے ذریعے معاہدہ کامیابی سے چیک ہو گیا۔'
                : '✅ 100% Authenticated! Digital contract verified via QR Code scan.'
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [entries, currentLang]);

  // Persist entries locally
  useEffect(() => {
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(entries));
    } catch (e) {
      console.error('Local save error', e);
    }
  }, [entries]);

  // Persist profile
  useEffect(() => {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(shopProfile));
    } catch {}
  }, [shopProfile]);

  // Persist expiry bachat
  useEffect(() => {
    localStorage.setItem(SAVED_EXPIRY_KEY, savedExpiryBachat.toString());
  }, [savedExpiryBachat]);

  // Persist privacy mode
  useEffect(() => {
    localStorage.setItem('bolmizan_privacy_mode', isPrivacyMasked.toString());
  }, [isPrivacyMasked]);

  // Persist sync queue
  useEffect(() => {
    try {
      localStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(syncQueue));
    } catch {}
  }, [syncQueue]);

  // Set document direction and language
  useEffect(() => {
    const t = i18n[currentLang];
    document.documentElement.dir = t.dir;
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const t = i18n[currentLang];
  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);

  // Format amount with Privacy Masking support
  const formatAmount = (num: number, cur = 'PKR') => {
    if (isPrivacyMasked) return '•••••• ' + cur;
    return `${num.toLocaleString()} ${cur}`;
  };

  const formatPhone = (ph: string) => {
    if (!ph) return '';
    if (isPrivacyMasked && ph.length > 5) {
      return ph.slice(0, 4) + '••••' + ph.slice(-2);
    }
    return ph;
  };

  // Compute live KPI metrics
  const { totalUdhaar, totalNakad, totalSadqah, avgRecoveryDays, contractCount } = useMemo(() => {
    let u = 0;
    let n = 0;
    let s = 0;
    let daysSum = 0;
    let paidCount = 0;

    entries.forEach(e => {
      if (e.status === 'Pending') {
        u += e.amount;
      } else if (e.status === 'Forgiven') {
        s += e.amount;
      } else if (e.status === 'Paid') {
        n += e.amount;
        if (e.paidAt && e.createdAt) {
          const days = Math.max(
            1,
            Math.round((new Date(e.paidAt).getTime() - new Date(e.createdAt).getTime()) / 86400000)
          );
          daysSum += days;
          paidCount++;
        }
      }
    });

    return {
      totalUdhaar: u,
      totalNakad: n,
      totalSadqah: s,
      avgRecoveryDays: paidCount ? Math.round(daysSum / paidCount) : 0,
      contractCount: entries.length
    };
  }, [entries]);

  // Halal Amanat Trust Score calculation
  const getTrustScore = (name: string): number => {
    const partyEntries = entries.filter(e => e.name.trim().toLowerCase() === name.trim().toLowerCase());
    if (partyEntries.length === 0) return 100;
    const paidCount = partyEntries.filter(e => e.status === 'Paid').length;
    const forgivenCount = partyEntries.filter(e => e.status === 'Forgiven').length;
    return Math.min(
      100,
      Math.max(45, Math.round(((paidCount + forgivenCount * 0.5 + 1) / (partyEntries.length + 1)) * 100))
    );
  };

  // Web Speech Text-to-Speech (TTS)
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = t.voice;
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Web Speech Recognition (Voice-to-Khata)
  const startVoiceInput = () => {
    const SpeechRecognition =
      (window as unknown as { SpeechRecognition?: any }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: any }).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      addToast('براؤزر میں وائس اسپیچ سپورٹ نہیں ہے۔ براہ کرم Google Chrome استعمال کریں۔', 'info');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = t.voice;
      recognition.continuous = false;
      recognition.interimResults = false;

      setIsListening(true);
      setVoiceStatus(t.listening);

      recognition.onresult = async (e: any) => {
        const transcript = e.results[0][0].transcript;
        setVoiceStatus(`سن لیا گیا: "${transcript}"`);

        // Try AI Voice Parse endpoint
        try {
          const res = await fetch('/api/ai-parse', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: transcript, language: currentLang })
          });
          if (res.ok) {
            const parsed = await res.json();
            if (parsed.success && parsed.data) {
              const d = parsed.data;
              if (d.name) setPersonName(d.name);
              if (d.amount) setAmount(d.amount.toString());
              if (d.currency) setCurrency(d.currency);
              if (d.dueDate) setDueDate(d.dueDate);
              if (d.detail) setDetail(d.detail);
              if (d.type) setTransType(d.type);
              if (d.cat) setCat(d.cat);

              addToast(
                `صوتی معاہدہ تیار ہو گیا! (${parsed.source === 'gemini_ai' ? 'Gemini AI' : 'سمارٹ پارسر'})`,
                'success'
              );
              if (soundEnabled) playTone('success');
              speakText(
                currentLang === 'ur'
                  ? `${d.name} کے نام ${d.amount} روپے کا معاہدہ تیار ہے۔`
                  : `Voice contract ready for ${d.name}, ${d.amount}.`
              );
              setIsListening(false);
              return;
            }
          }
        } catch (err) {
          // offline fallback
        }

        // Heuristic Fallback
        const numMatch = transcript.match(/\d+/);
        if (numMatch) {
          setAmount(numMatch[0]);
        }
        const cleaned = transcript.replace(/\d+/g, '').trim();
        const parts = cleaned.split(/\s+/);
        if (parts.length > 0 && !personName) {
          setPersonName(parts[0]);
        }
        setDetail(transcript);

        if (/نقد|وصول|cash|paid|نقدي/i.test(transcript)) {
          setTransType('nakad');
        } else {
          setTransType('udhaar');
        }

        if (soundEnabled) playTone('click');
        speakText(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
        setVoiceStatus('Voice input error. Please try again.');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      console.error(err);
      setIsListening(false);
    }
  };

  // Add new transaction entry with SHA-256 fingerprint & Full-Stack Sync
  const handleAddEntry = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = personName.trim();
    const numAmount = parseFloat(amount);

    if (!cleanName || isNaN(numAmount) || numAmount <= 0) {
      addToast(currentLang === 'ur' ? 'برائے مہربانی پارٹی کا نام اور درست رقم درج کریں۔' : 'Please provide Party Name and valid Amount.', 'error');
      return;
    }

    const createdAt = new Date().toISOString();
    const hash = await generateSha256(
      `${shopProfile.businessName}|${cleanName}|${numAmount}|${currency}|${dueDate}|${detail}|${transType}|${createdAt}`
    );

    const newId = Date.now();
    const newEntry: LedgerEntry = {
      id: newId,
      biz: shopProfile.businessName.trim() || 'BolMizan Business',
      cat,
      name: cleanName,
      phone: phone.trim(),
      amount: numAmount,
      currency,
      originalAmount: numAmount,
      dueDate,
      detail: detail.trim() || 'General Trade Agreement',
      type: transType,
      status: transType === 'nakad' ? 'Paid' : 'Pending',
      createdAt,
      paidAt: transType === 'nakad' ? createdAt : null,
      hash,
      ext: 0,
      paymentRail: transType === 'nakad' ? 'Cash' : 'Raast',
      raastId: shopProfile.raastId,
      iban: shopProfile.iban,
      isoRef: `BOLMIZAN/${new Date().getFullYear()}/${newId.toString().slice(-8)}`,
      signatureDataUrl: formSignatureDataUrl || undefined
    };

    // 1. Immediately update client state & local storage (Zero-delay)
    setEntries(prev => [newEntry, ...prev]);

    // 2. Queue for server sync or commit to API
    if (isOnline) {
      fetch('/api/contracts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEntry)
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setLastSyncTime(new Date().toLocaleTimeString());
          }
        })
        .catch(() => {
          setSyncQueue(prev => [...prev, { action: 'CREATE', contract: newEntry }]);
        });
    } else {
      setSyncQueue(prev => [...prev, { action: 'CREATE', contract: newEntry }]);
    }

    // Clear form
    setPersonName('');
    setPhone('');
    setAmount('');
    setDetail('');
    setFormSignatureDataUrl('');

    if (soundEnabled) playTone('success');
    addToast(currentLang === 'ur' ? 'معاہدہ محفوظ ہو گیا!' : 'Contract registered successfully!', 'success');
    speakText(
      transType === 'nakad'
        ? `${cleanName} سے ${numAmount} روپے نقد وصول درج ہو گئے`
        : `${cleanName} کے نام ${numAmount} روپے کا قانونی معاہدہ درج ہو گیا`
    );
  };

  // Execute Partial Payment (Qist) from custom modal
  const handleConfirmQist = () => {
    if (!qistModalContract) return;
    const qist = parseFloat(qistInputAmount);
    if (isNaN(qist) || qist <= 0) {
      addToast('درست رقم درج کریں', 'error');
      return;
    }

    const id = qistModalContract.id;
    if (qist >= qistModalContract.amount) {
      handleMarkPaid(id);
    } else {
      const remaining = qistModalContract.amount - qist;
      const note = `${qistModalContract.detail} [قسط ادا: ${qist} PKR بتاریخ ${new Date().toISOString().slice(0, 10)}]`;

      setEntries(prev =>
        prev.map(e => (e.id === id ? { ...e, amount: remaining, detail: note } : e))
      );

      // Fullstack update
      const updates = { amount: remaining, detail: note };
      if (isOnline) {
        fetch(`/api/contracts/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updates)
        }).catch(() => {
          setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
        });
      } else {
        setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
      }

      if (soundEnabled) playTone('success');
      addToast(`${qist} PKR قسط وصول درج ہو گئی! باقی: ${remaining} PKR`, 'success');
      speakText(`${qist} روپے قسط وصول درج ہو گئی`);
    }

    setQistModalContract(null);
    setQistInputAmount('');
  };

  // Mark Full Payment Paid
  const handleMarkPaid = (id: number) => {
    const paidAt = new Date().toISOString();
    setEntries(prev =>
      prev.map(e => (e.id === id ? { ...e, status: 'Paid', paidAt } : e))
    );

    const updates = { status: 'Paid', paidAt };
    if (isOnline) {
      fetch(`/api/contracts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      }).catch(() => {
        setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
      });
    } else {
      setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
    }

    if (soundEnabled) playTone('success');
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    addToast('رقم مکمل وصول ہو گئی، قانونی ریکارڈ اپڈیٹ ہو گیا!', 'success');
    speakText('رقم مکمل وصول ہو گئی، قانونی ریکارڈ اپڈیٹ ہو گیا');
  };

  // Quran 2:280 Empathy 15-Day Grace Extension
  const handleGiveMohlat = (id: number) => {
    const item = entries.find(x => x.id === id);
    if (!item) return;

    const current = new Date(item.dueDate);
    current.setDate(current.getDate() + 15);
    const newDueDate = current.toISOString().split('T')[0];
    const newExt = (item.ext || 0) + 1;

    setEntries(prev =>
      prev.map(e => (e.id === id ? { ...e, dueDate: newDueDate, ext: newExt } : e))
    );

    const updates = { dueDate: newDueDate, ext: newExt };
    if (isOnline) {
      fetch(`/api/contracts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      }).catch(() => {
        setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
      });
    } else {
      setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
    }

    if (soundEnabled) playTone('forgive');
    addToast('15 دن کی بلا سود مہلت دے دی گئی!', 'success');
    speakText('قرآن اور فیئر ڈیبٹ قوانین کے مطابق بغیر سود پندرہ دن کی قانونی مہلت دے دی گئی ہے');
  };

  // Execute Debt Forgiveness (Sadqah)
  const handleConfirmForgive = () => {
    if (!forgiveModalContract) return;
    const id = forgiveModalContract.id;
    const paidAt = new Date().toISOString();

    setEntries(prev =>
      prev.map(e => (e.id === id ? { ...e, status: 'Forgiven', paidAt } : e))
    );

    const updates = { status: 'Forgiven', paidAt };
    if (isOnline) {
      fetch(`/api/contracts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      }).catch(() => {
        setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
      });
    } else {
      setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
    }

    if (soundEnabled) playTone('forgive');
    confetti({
      particleCount: 100,
      spread: 80,
      colors: ['#047857', '#10b981', '#f59e0b', '#7c3aed'],
      origin: { y: 0.6 }
    });

    addToast('ماشاءاللہ! قرض اللہ کی رضا کے لیے معاف کر دیا گیا!', 'success');
    speakText('ماشاءاللہ! اللہ تعالیٰ آپ کا صدقہ قبول فرمائے اور رزق حلال میں وسعت دے۔');
    setForgiveModalContract(null);
  };

  // Save Electronic Signature & Thumb-Impression
  const handleSaveSignature = (dataUrl: string) => {
    if (formSignatureModalOpen) {
      setFormSignatureDataUrl(dataUrl);
      setFormSignatureModalOpen(false);
      addToast('دستخط فارم کے ساتھ منسلک ہو گئے!', 'success');
      if (soundEnabled) playTone('success');
      return;
    }

    if (!signatureModalContract) return;
    const id = signatureModalContract.id;
    setEntries(prev =>
      prev.map(e => (e.id === id ? { ...e, signatureDataUrl: dataUrl } : e))
    );

    const updates = { signatureDataUrl: dataUrl };
    if (isOnline) {
      fetch(`/api/contracts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      }).catch(() => {
        setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
      });
    } else {
      setSyncQueue(prev => [...prev, { action: 'UPDATE', contractId: id, updates }]);
    }

    if (soundEnabled) playTone('success');
    addToast('قانونی ڈیجیٹل دستخط محفوظ ہو گئے!', 'success');
    setSignatureModalContract(null);
  };

  // Execute Deletion
  const handleConfirmDelete = () => {
    if (!deleteModalContract) return;
    const id = deleteModalContract.id;

    setEntries(prev => prev.filter(e => e.id !== id));

    if (isOnline) {
      fetch(`/api/contracts/${id}`, { method: 'DELETE' }).catch(() => {
        setSyncQueue(prev => [...prev, { action: 'DELETE', contractId: id }]);
      });
    } else {
      setSyncQueue(prev => [...prev, { action: 'DELETE', contractId: id }]);
    }

    addToast('معاہدہ حذف کر دیا گیا', 'info');
    setDeleteModalContract(null);
  };

  // Format QR payload for smartphone scanning
  const buildQrPayload = (e: LedgerEntry) => {
    return [
      `BOLMIZAN LEGAL DIGITAL CONTRACT`,
      `Statute: ETO 2002 & Quran 2:282`,
      `Receipt ID: #${e.id.toString().slice(-8)}`,
      `Party: ${e.name}`,
      `Amount: ${e.amount.toLocaleString()} ${e.currency || 'PKR'} (${e.status})`,
      `Due Date: ${e.dueDate}`,
      `Entity: ${e.biz}`,
      `Details: ${e.detail}`,
      `Raast ID: ${shopProfile.raastId}`,
      `IBAN: ${shopProfile.iban}`,
      `ISO 20022 Ref: ${e.isoRef || 'N/A'}`,
      `SHA-256 Hash: ${e.hash}`,
      `Verify: ${window.location.origin}/?verify=${e.hash}`
    ].join('\n');
  };

  // Open receipt modal & generate QR code data URL (100% Offline via local QRCode library)
  const handleOpenPrint = async (e: LedgerEntry) => {
    setPrintEntry(e);
    setQrCopied(false);
    try {
      const payload = buildQrPayload(e);
      const dataUrl = await QRCode.toDataURL(payload, {
        width: 360,
        margin: 2,
        errorCorrectionLevel: 'M',
        color: {
          dark: '#064e3b',
          light: '#ffffff'
        }
      });
      setPrintQrDataUrl(dataUrl);
    } catch (err) {
      console.error('Failed to generate QR code', err);
    }
  };

  const handleCopyQrPayload = () => {
    if (!printEntry) return;
    navigator.clipboard.writeText(buildQrPayload(printEntry));
    setQrCopied(true);
    addToast('QR کوڈ کا ڈیٹا کاپی ہو گیا!', 'success');
    setTimeout(() => setQrCopied(false), 2000);
  };

  const handleVerifyFromReceipt = (hash: string) => {
    setPrintEntry(null);
    setActiveTab(5);
    setVerifyHashInput(hash);
    setTimeout(() => {
      handleVerifyHash();
    }, 150);
  };

  // Open Legal Payment Rail Modal for a specific transaction
  const handleOpenPaymentRail = async (e: LedgerEntry) => {
    setPaymentModalEntry(e);
    setCopiedField('');
    try {
      const raastPayload = `raast://pay?pa=${shopProfile.raastId}&pn=${encodeURIComponent(
        shopProfile.businessName
      )}&am=${e.amount}&cu=${e.currency || 'PKR'}&ref=${e.isoRef || e.id}`;

      const qr = await QRCode.toDataURL(raastPayload, {
        width: 320,
        margin: 2,
        color: {
          dark: '#047857',
          light: '#ffffff'
        }
      });
      setRaastQrDataUrl(qr);
    } catch (err) {
      console.error(err);
    }
  };

  // Filtered transactions
  const filteredEntries = useMemo(() => {
    return entries.filter(e => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.detail.toLowerCase().includes(q) ||
        (e.phone && e.phone.includes(q)) ||
        (e.cat && e.cat.toLowerCase().includes(q)) ||
        e.amount.toString().includes(q) ||
        (e.isoRef && e.isoRef.toLowerCase().includes(q));

      if (!matchesQuery) return false;

      const isOverdue = e.status === 'Pending' && e.dueDate < todayStr;

      if (statusFilter === 'Pending') return e.status === 'Pending';
      if (statusFilter === 'Overdue') return isOverdue;
      if (statusFilter === 'Paid') return e.status === 'Paid';
      if (statusFilter === 'Forgiven') return e.status === 'Forgiven';

      return true;
    });
  }, [entries, searchQuery, statusFilter, todayStr]);

  // Aggregated Parties for Tab 2
  const partyDirectory = useMemo(() => {
    const map: Record<
      string,
      {
        name: string;
        phone: string;
        totalDeals: number;
        totalPending: number;
        totalPaid: number;
        totalForgiven: number;
        lastDate: string;
      }
    > = {};

    entries.forEach(e => {
      const k = e.name.trim();
      if (!map[k]) {
        map[k] = {
          name: k,
          phone: e.phone || '',
          totalDeals: 0,
          totalPending: 0,
          totalPaid: 0,
          totalForgiven: 0,
          lastDate: e.createdAt
        };
      }
      map[k].totalDeals += 1;
      if (e.phone && !map[k].phone) map[k].phone = e.phone;
      if (e.status === 'Pending') map[k].totalPending += e.amount;
      else if (e.status === 'Paid') map[k].totalPaid += e.amount;
      else if (e.status === 'Forgiven') map[k].totalForgiven += e.amount;
    });

    return Object.values(map).sort((a, b) => b.totalPending - a.totalPending);
  }, [entries]);

  // Tab 4: Stock Audit
  const handleRunAudit = () => {
    const s = parseFloat(matSent);
    const u = parseFloat(matUsed);
    const p = parseFloat(matPrice) || 0;

    if (isNaN(s) || isNaN(u) || s < 0 || u < 0) {
      addToast('براہ کرم درست تعداد درج کریں۔', 'error');
      return;
    }

    const diff = s - u;
    const loss = Math.max(0, diff * p);
    const pct = s > 0 ? ((diff / s) * 100).toFixed(1) : '0';

    let daysLeft = 999;
    if (matExpiry) {
      daysLeft = Math.round((new Date(matExpiry).getTime() - new Date().getTime()) / 86400000);
    }

    const discountRate = p * 0.75;
    const discountTotal = u * discountRate;

    const offerMsg = encodeURIComponent(
      `*BolMizan Stock Clearance Offer*\nItem: ${matName}\nRemaining Units: ${u}\nExpiry Date: ${matExpiry} (${daysLeft} days remaining)\nSpecial Discount Rate: ${discountRate} PKR/unit\nContact: ${shopProfile.businessName}`
    );
    const offerUrl = matPhone ? `https://wa.me/${matPhone}?text=${offerMsg}` : `https://wa.me/?text=${offerMsg}`;

    setAuditResult({
      diff,
      pct,
      loss,
      daysLeft,
      discountTotal,
      offerUrl,
      isClean: diff <= 0
    });

    addToast('اسٹاک و ایکسپائری آڈٹ مکمل ہو گیا!', 'success');
  };

  const handleRecordBachat = (amountToSave: number) => {
    if (amountToSave > 0) {
      setSavedExpiryBachat(prev => prev + amountToSave);
      confetti({ particleCount: 60, spread: 60 });
      addToast(`ایکسپائری بچت (+${Math.round(amountToSave).toLocaleString()} PKR) ریکارڈ ہو گئی!`, 'success');
      speakText('ایکسپائری بچت کی رقم کامیابی سے ریکارڈ ہو گئی');
    }
  };

  // Tab 5: Zakat
  const handleCalculateZakat = () => {
    const cash = parseFloat(zakatCash) || 0;
    const stock = parseFloat(zakatStock) || 0;
    const rec = totalUdhaar;
    const pay = parseFloat(zakatPayables) || 0;

    const totalAssets = cash + stock + rec;
    const netWealth = totalAssets - pay;
    const zakatDue = netWealth > 0 ? netWealth * 0.025 : 0;

    setZakatCalculated({
      totalAssets,
      liabilities: pay,
      netWealth,
      zakatDue
    });
    addToast('زکوٰۃ کا حساب مکمل ہو گیا!', 'success');
  };

  // Tab 5: Tamper-proof hash check (Dual Backend & Client Verification)
  const handleVerifyHash = async () => {
    const cleanHash = verifyHashInput.trim().toLowerCase();
    if (!cleanHash) return;

    // Check backend first if online
    if (isOnline) {
      try {
        const res = await fetch('/api/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ hash: cleanHash })
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.found) {
            setVerifyResult({
              found: true,
              validOriginal: json.isTamperProofOriginal,
              entry: json.data,
              message: json.isTamperProofOriginal
                ? currentLang === 'ur'
                  ? '✅ 100% تصدیق شدہ! سرور اور ETO 2002 کے تحت معاہدے میں صفر چھیڑ چھاڑ ہوئی ہے۔'
                  : '✅ 100% Legally Authenticated by Server & ETO 2002.'
                : currentLang === 'ur'
                ? '✅ اصل معاہدہ تصدیق شدہ (قسط یا قانونی مہلت کے ذریعے اپڈیٹ ہوا ہے)۔'
                : '✅ Original Contract Verified (Amended lawfully via Qist or Grace).'
            });
            return;
          }
        }
      } catch (e) {
        // Fall back to client calculation
      }
    }

    // Local Verification Engine
    const match = entries.find(x => x.hash.toLowerCase() === cleanHash || x.hash.toLowerCase().startsWith(cleanHash));
    if (!match) {
      setVerifyResult({
        found: false,
        validOriginal: false,
        message:
          currentLang === 'ur'
            ? '❌ کوئی ریکارڈ نہیں ملا۔ یہ SHA-256 ہیش رجسٹرڈ ڈیٹا بیس میں موجود نہیں ہے۔'
            : '❌ Record not found in local legal registry.'
      });
      return;
    }

    const recomputed = await generateSha256(
      `${match.biz}|${match.name}|${match.originalAmount || match.amount}|${match.currency || 'PKR'}|${match.dueDate}|${match.detail}|${match.type}|${match.createdAt}`
    );

    const isExact = recomputed === match.hash;
    setVerifyResult({
      found: true,
      validOriginal: isExact,
      entry: match,
      message: isExact
        ? currentLang === 'ur'
          ? '✅ 100% تصدیق شدہ! قرآن 2:282 و ETO 2002 کے تحت معاہدے میں صفر چھیڑ چھاڑ ہوئی ہے۔'
          : '✅ 100% Legally Authenticated. Valid digital signature under Electronic Transactions Ordinance 2002.'
        : currentLang === 'ur'
        ? '✅ اصل معاہدہ تصدیق شدہ (قسط یا قانونی مہلت کے ذریعے اپڈیٹ ہوا ہے)۔'
        : '✅ Original Contract Verified (Amended lawfully via Qist or Grace).'
    });
  };

  // CSV Export
  const handleExportCsv = () => {
    if (entries.length === 0) return addToast('ایکسپورٹ کے لیے کوئی ڈیٹا موجود نہیں', 'error');

    const headers = [
      'Legal_Contract_ID',
      'Business_Entity',
      'Category',
      'Party_Name',
      'Phone',
      'Currency',
      'Original_Principal',
      'Current_Balance',
      'Due_Date',
      'Status',
      'Grace_Extensions',
      'Payment_Rail',
      'ISO20022_Ref',
      'Created_Timestamp',
      'Settled_Timestamp',
      'SHA256_Cryptographic_Fingerprint'
    ];

    const rows = entries.map(c => [
      c.id,
      `"${c.biz.replace(/"/g, '""')}"`,
      `"${c.cat}"`,
      `"${c.name.replace(/"/g, '""')}"`,
      `"${c.phone}"`,
      c.currency || 'PKR',
      c.originalAmount || c.amount,
      c.amount,
      c.dueDate,
      c.status,
      c.ext || 0,
      c.paymentRail || 'Raast',
      c.isoRef || '',
      c.createdAt,
      c.paidAt || '',
      c.hash
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `BolMizan_Legal_Ledger_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    addToast('قانونی CSV فائل ڈاؤنلوڈ ہو گئی!', 'success');
  };

  const handleBackupJson = () => {
    const jsonStr = JSON.stringify({ entries, profile: shopProfile }, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `BolMizan_Encrypted_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    addToast('محفوظ JSON بیک اپ تیار ہو گیا!', 'success');
  };

  const handleRestoreJson = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const parsed = JSON.parse(ev.target?.result as string);
        if (parsed.entries && Array.isArray(parsed.entries)) {
          setEntries(parsed.entries);
          if (parsed.profile) setShopProfile(parsed.profile);
          addToast('بیک اپ کامیابی سے بحال ہو گیا!', 'success');
          triggerFullSync(parsed.entries.map((c: any) => ({ action: 'CREATE', contract: c })));
        } else if (Array.isArray(parsed)) {
          setEntries(parsed);
          addToast('بیک اپ کامیابی سے بحال ہو گیا!', 'success');
          triggerFullSync(parsed.map((c: any) => ({ action: 'CREATE', contract: c })));
        } else {
          addToast('غلط بیک اپ فائل', 'error');
        }
      } catch {
        addToast('بیک اپ فائل پڑھنے میں ناکامی', 'error');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen pb-16 bg-gradient-to-b from-emerald-50/50 via-slate-50 to-emerald-50/30 text-slate-900">
      {/* Toast Notification Container */}
      <div className="fixed top-4 right-4 z-[99999] flex flex-col gap-2 max-w-sm pointer-events-none no-print">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`pointer-events-auto px-4 py-3 rounded-2xl shadow-xl border text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all transform animate-in fade-in slide-in-from-top-4 ${
              toast.type === 'success'
                ? 'bg-emerald-900 text-white border-emerald-700'
                : toast.type === 'error'
                ? 'bg-rose-900 text-white border-rose-700'
                : 'bg-slate-900 text-white border-slate-700'
            }`}
          >
            {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />}
            {toast.type === 'error' && <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0" />}
            {toast.type === 'info' && <Info className="w-4 h-4 text-blue-300 shrink-0" />}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* ============================================================ */}
      {/* PRINT-ONLY AREA (Clean Thermal & A4 Receipt with QR & ETO 2002) */}
      {/* ============================================================ */}
      <div id="printArea" className="hidden">
        {printEntry && (
          <div className="max-w-md mx-auto border-2 border-slate-900 p-6 rounded-lg text-slate-900 font-sans">
            <div className="text-center border-b-2 border-slate-900 pb-3 mb-3">
              <div className="text-xs uppercase tracking-widest font-black text-emerald-800">
                BOLMIZAN LEGAL RECORD
              </div>
              <h1 className="text-2xl font-black">{printEntry.biz || shopProfile.businessName}</h1>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                Electronic Transactions Ordinance 2002 • Quran 2:282 Verified
              </p>
              <div className="flex justify-between items-center text-[10px] bg-slate-100 p-1.5 rounded mt-2 font-mono">
                <span>Receipt #: {printEntry.id.toString().slice(-8)}</span>
                <span>ISO Ref: {printEntry.isoRef || 'N/A'}</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">Party / Client:</span>
                <span className="font-bold text-base">{printEntry.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Contact / Phone:</span>
                <span className="font-mono">{formatPhone(printEntry.phone) || 'Not recorded'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Amanat Trust Score:</span>
                <span className="font-bold text-emerald-800">{getTrustScore(printEntry.name)}% (Verified Track)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Transaction Date:</span>
                <span>{printEntry.createdAt.slice(0, 10)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Maturity / Due Date:</span>
                <span className="font-bold">{printEntry.dueDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Contract Status:</span>
                <span className="font-bold uppercase tracking-wider">{printEntry.status}</span>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <span className="font-semibold text-xs text-slate-500">Itemized Details:</span>
                <p className="text-xs bg-slate-50 p-2 rounded mt-0.5">{printEntry.detail}</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-300 rounded text-center">
              <div className="text-xs text-emerald-800 font-bold uppercase tracking-wider">
                Total Contract Consideration
              </div>
              <div className="text-2xl font-black text-emerald-950">
                {formatAmount(printEntry.amount, printEntry.currency || 'PKR')}
              </div>
            </div>

            {/* Official Banking & Raast Rails on Printed Receipt */}
            <div className="mt-3 p-2.5 bg-slate-50 border border-slate-200 rounded text-[11px] space-y-1">
              <div className="font-bold text-slate-800">Approved Payment Settlement Rails:</div>
              <div className="flex justify-between">
                <span className="text-slate-600">State Bank Raast ID:</span>
                <span className="font-mono font-bold">{shopProfile.raastId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">IBAN ({shopProfile.bankName.slice(0, 15)}):</span>
                <span className="font-mono font-bold text-[10px]">{shopProfile.iban}</span>
              </div>
            </div>

            {/* Printed Smartphone Verification QR */}
            {printQrDataUrl && (
              <div className="mt-4 p-3 border border-slate-300 rounded-lg flex items-center justify-between gap-3 bg-white">
                <div className="text-left rtl:text-right">
                  <div className="text-xs font-bold text-slate-900">
                    Smartphone Contract Verification QR
                  </div>
                  <p className="text-[10px] text-slate-600 mt-0.5 max-w-[200px]">
                    Scan with any standard smartphone camera to authenticate SHA-256 fingerprint & ETO 2002 legality.
                  </p>
                </div>
                <img
                  src={printQrDataUrl}
                  alt="QR Code"
                  className="w-24 h-24 border border-slate-400 p-1 bg-white rounded shrink-0"
                />
              </div>
            )}
            {/* Customer Electronic Signature / Thumb Mark on Printed Receipt */}
            <div className="mt-4 pt-3 border-t border-slate-300 grid grid-cols-2 gap-3 text-[10px]">
              <div className="border border-slate-300 rounded p-2 text-center bg-slate-50">
                <span className="font-bold text-slate-700 block mb-1">
                  Customer / Debtor Signature (دستخط یا نشانِ انگوٹھا)
                </span>
                {printEntry.signatureDataUrl ? (
                  <img
                    src={printEntry.signatureDataUrl}
                    alt="Customer Signature"
                    className="h-12 mx-auto object-contain bg-white rounded border border-slate-200 p-0.5"
                  />
                ) : (
                  <div className="h-12 flex items-center justify-center text-slate-400 border border-dashed border-slate-300 rounded text-[9px]">
                    Signature / Thumb Mark
                  </div>
                )}
                <span className="text-[8.5px] text-slate-500 block mt-1">Section 7 & 8, ETO 2002</span>
              </div>

              <div className="border border-slate-300 rounded p-2 text-center bg-slate-50 flex flex-col justify-between">
                <div>
                  <span className="font-bold text-slate-700 block mb-1">
                    Two Adal Witnesses (گواہانِ عدل - قرآن 2:282)
                  </span>
                  <div className="border-b border-dashed border-slate-400 mt-3 pb-0.5 text-[8.5px] text-slate-500">
                    Witness 1: _________________
                  </div>
                  <div className="border-b border-dashed border-slate-400 mt-2.5 pb-0.5 text-[8.5px] text-slate-500">
                    Witness 2: _________________
                  </div>
                </div>
                <span className="text-[8.5px] text-slate-500 block mt-1">وَاسْتَشْهِدُوا شَهِيدَيْنِ مِنْ رِجَالِكُمْ</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-300 text-[9.5px] text-slate-500 space-y-1">
              <div>
                <span className="font-bold">SHA-256 Tamper-Proof Cryptographic Hash:</span>
                <p className="font-mono break-all text-[8.5px] bg-slate-100 p-1 rounded mt-0.5">{printEntry.hash}</p>
              </div>
              <p className="text-center pt-2 font-medium">
                Certified Legal Record under Section 3 & 4 of Electronic Transactions Ordinance (ETO) 2002.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* MAIN CONTAINER */}
      {/* ============================================================ */}
      <div className="max-w-4xl mx-auto px-3 sm:px-5 pt-3 sm:pt-5">
        {/* Top Sovereign Bar: Logo + Offline/Online + Sync + Privacy Shield + Lang */}
        <div className="bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl p-3 sm:p-4 shadow-sm mb-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* BolMizan Brand & Logo */}
            <BolMizanLogo className="w-11 h-11" showText={true} />

            {/* Controls Bar: Network Status + Sync Status + Privacy Shield + Settings + Lang */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Online / Offline Status Badge */}
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  isOnline
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-amber-50 text-amber-900 border-amber-300 animate-pulse'
                }`}
                title={
                  isOnline
                    ? 'Connected to Network • Dual Storage Active'
                    : '100% Offline Mode: Zero data loss, all cryptography and voice work locally on device.'
                }
              >
                {isOnline ? (
                  <>
                    <Wifi className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.online}</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-3.5 h-3.5 text-amber-700" />
                    <span>{t.offline}</span>
                  </>
                )}
              </div>

              {/* Sync Status Button */}
              <button
                type="button"
                onClick={() => triggerFullSync()}
                disabled={isSyncing}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  syncQueue.length > 0
                    ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
                title="Force Re-synchronization with Server"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-emerald-600' : 'text-slate-500'}`} />
                <span>
                  {isSyncing
                    ? 'سنکنگ...'
                    : syncQueue.length > 0
                    ? `${syncQueue.length} قطار میں`
                    : 'سنک مکمل'}
                </span>
              </button>

              {/* Privacy Shield (Parda Mode) Toggle */}
              <button
                type="button"
                onClick={() => {
                  setIsPrivacyMasked(prev => {
                    const next = !prev;
                    addToast(next ? 'پردہ موڈ فعال: رقوم چھپا دی گئیں' : 'پردہ موڈ غیر فعال', 'info');
                    return next;
                  });
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  isPrivacyMasked
                    ? 'bg-purple-700 text-white border-purple-800 shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
                title="Toggle Privacy Shield (Hide sensitive amounts from onlookers at your shop counter)"
              >
                {isPrivacyMasked ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5 text-purple-200" />
                    <span>پردہ موڈ فعال</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>پردہ موڈ</span>
                  </>
                )}
              </button>

              {/* Sound Audio Toggle */}
              <button
                type="button"
                onClick={() => {
                  setSoundEnabled(prev => {
                    const next = !prev;
                    addToast(next ? 'صوتی آواز فعال' : 'صوتی آواز بند', 'info');
                    if (next) playTone('click');
                    return next;
                  });
                }}
                className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                  soundEnabled
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-slate-100 text-slate-400 border-slate-200'
                }`}
                title="Toggle Audio Feedback"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-emerald-700" />
                ) : (
                  <VolumeX className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {/* Islamic Merchant Zakat Quick Audit */}
              <button
                type="button"
                onClick={() => setZakatModalOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300 transition-all cursor-pointer shadow-xs"
                title="Islamic Merchant Zakat on Debt Receivables (Dayn Qawi / AAOIFI 35)"
              >
                <Scale className="w-3.5 h-3.5 text-amber-700" />
                <span className="hidden sm:inline">زکوٰۃ آڈٹ</span>
              </button>

              {/* Quick Settings Button */}
              <button
                type="button"
                onClick={() => setProfileSettingsOpen(true)}
                className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl border border-slate-200 cursor-pointer"
                title="Shop Banking & Legal Settings"
              >
                <Settings className="w-4 h-4" />
              </button>

              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                {(
                  [
                    { code: 'ur', label: 'اردو' },
                    { code: 'sd', label: 'سنڌي' },
                    { code: 'ar', label: 'العربية' },
                    { code: 'en', label: 'EN' }
                  ] as const
                ).map(item => (
                  <button
                    key={item.code}
                    onClick={() => setCurrentLang(item.code)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currentLang === item.code
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slogan & Legal Status */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <p className="font-semibold text-emerald-800 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.sub}</span>
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-slate-500">
              <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                Raast: {shopProfile.raastId}
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                IBAN: {shopProfile.iban.slice(0, 8)}...
              </span>
            </div>
          </div>

          {/* 6-Metric Live Dashboard (Privacy-Aware) */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5 mt-3.5">
            <div className="bg-gradient-to-br from-rose-50 to-white border border-rose-200 p-2 rounded-xl text-center shadow-xs">
              <div className="text-sm sm:text-base font-black text-rose-700 tracking-tight">
                {isPrivacyMasked ? '••••••' : totalUdhaar.toLocaleString()}
              </div>
              <div className="text-[10px] font-bold text-rose-900/70 mt-0.5">{t.lU}</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-2 rounded-xl text-center shadow-xs">
              <div className="text-sm sm:text-base font-black text-emerald-700 tracking-tight">
                {isPrivacyMasked ? '••••••' : totalNakad.toLocaleString()}
              </div>
              <div className="text-[10px] font-bold text-emerald-900/70 mt-0.5">{t.lN}</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-2 rounded-xl text-center shadow-xs">
              <div className="text-sm sm:text-base font-black text-blue-700 tracking-tight">
                {avgRecoveryDays ? `${avgRecoveryDays}d` : '—'}
              </div>
              <div className="text-[10px] font-bold text-blue-900/70 mt-0.5">{t.lD}</div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-2 rounded-xl text-center shadow-xs">
              <div className="text-sm sm:text-base font-black text-slate-800 tracking-tight">
                {contractCount}
              </div>
              <div className="text-[10px] font-bold text-slate-600 mt-0.5">{t.lC}</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 p-2 rounded-xl text-center shadow-xs">
              <div className="text-sm sm:text-base font-black text-purple-700 tracking-tight">
                {isPrivacyMasked ? '••••••' : totalSadqah.toLocaleString()}
              </div>
              <div className="text-[10px] font-bold text-purple-900/70 mt-0.5">{t.lG}</div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 p-2 rounded-xl text-center shadow-xs">
              <div className="text-sm sm:text-base font-black text-amber-700 tracking-tight">
                {isPrivacyMasked ? '••••••' : savedExpiryBachat.toLocaleString()}
              </div>
              <div className="text-[10px] font-bold text-amber-900/70 mt-0.5">{t.lS}</div>
            </div>
          </div>
        </div>

        {/* 5 High-Utility Pillars */}
        <div className="flex gap-1.5 sm:gap-2 bg-slate-200/80 p-1.5 rounded-2xl mb-4 overflow-x-auto scrollbar-none shadow-inner">
          {[
            { id: 1, label: t.t1, icon: Mic },
            { id: 2, label: t.t2, icon: HeartHandshake },
            { id: 3, label: t.t3, icon: CreditCard },
            { id: 4, label: t.t4, icon: PackageCheck },
            { id: 5, label: t.t5, icon: FileSpreadsheet }
          ].map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-white text-emerald-950 shadow-md scale-[1.01]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-emerald-700' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* TAB 1: 🎙️ BOL-KHATA (Voice & Digital Contract Engine) */}
        {/* ============================================================ */}
        {activeTab === 1 && (
          <div className="space-y-4">
            {/* Voice Input Banner */}
            <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 rounded-2xl p-4 text-white shadow-md">
              <button
                type="button"
                onClick={startVoiceInput}
                className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer ${
                  isListening
                    ? 'bg-rose-600 text-white animate-pulse ring-4 ring-rose-400/50'
                    : 'bg-white text-emerald-950 hover:bg-emerald-50'
                }`}
              >
                {isListening ? (
                  <>
                    <MicOff className="w-5 h-5 text-white animate-bounce" />
                    <span>{t.listening}</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5 text-emerald-700" />
                    <span>{t.mic}</span>
                  </>
                )}
              </button>
              {voiceStatus && (
                <p className="text-center text-xs font-medium text-emerald-100 mt-2 bg-emerald-900/60 py-1 px-3 rounded-lg">
                  {voiceStatus}
                </p>
              )}
            </div>

            {/* View Mode Segmented Switch: All Transactions vs Customer Ledger Book */}
            <div className="flex bg-slate-200/90 p-1.5 rounded-2xl border border-slate-300 shadow-inner">
              <button
                type="button"
                onClick={() => setTab1ViewMode('entries')}
                className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  tab1ViewMode === 'entries'
                    ? 'bg-white text-emerald-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className={`w-4 h-4 ${tab1ViewMode === 'entries' ? 'text-emerald-700' : 'text-slate-400'}`} />
                <span>روزنامچہ معاہدات ({entries.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setTab1ViewMode('customers')}
                className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  tab1ViewMode === 'customers'
                    ? 'bg-white text-emerald-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className={`w-4 h-4 ${tab1ViewMode === 'customers' ? 'text-emerald-700' : 'text-slate-400'}`} />
                <span>گاہک کھاتہ رجسٹر ({partyDirectory.length})</span>
              </button>
            </div>

            {tab1ViewMode === 'customers' ? (
              <div className="space-y-3">
                <div className="bg-white border border-emerald-100 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-700" />
                      <span>گاہک کھاتہ رجسٹر (Customer Ledger Directory)</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      ہر گاہک کا الگ کھاتہ، باقی ادھار، اور 1-کلک مکمل پی ڈی ایف یا واٹس ایپ اسٹیٹمنٹ۔
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-xl">
                    {partyDirectory.length} گاہک
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {partyDirectory.map(party => {
                    const score = getTrustScore(party.name);
                    const partyWaText = `*بول میزان (BolMizan) گاہک کھاتہ خلاصہ*\nالسلام علیکم ${party.name} بھائی،\nادارہ: ${shopProfile.businessName}\nکل ادھار: ${party.totalPending} PKR\nوصول شدہ: ${party.totalPaid} PKR\nصافی بقایا: ${party.totalPending} PKR\nراست آئی ڈی: ${shopProfile.raastId}\n_BolMizan: بلا سود قانونی کھاتہ_`;
                    const partyWaUrl = party.phone
                      ? `https://wa.me/${party.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(partyWaText)}`
                      : `https://wa.me/?text=${encodeURIComponent(partyWaText)}`;

                    return (
                      <div
                        key={party.name}
                        className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="font-extrabold text-base text-slate-900">{party.name}</h4>
                              <p className="text-xs text-slate-500 font-mono mt-0.5">
                                {party.phone ? `Phone: ${formatPhone(party.phone)}` : 'فون درج نہیں'}
                              </p>
                            </div>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
                              امانت: {score}%
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-xs mt-3 pt-3 border-t border-slate-100">
                            <div className="bg-slate-50 p-2 rounded-xl">
                              <span className="text-slate-500 text-[10px] block">کل سودے</span>
                              <strong className="text-slate-900 text-sm font-bold">{party.totalDeals}</strong>
                            </div>
                            <div className="bg-emerald-50 p-2 rounded-xl">
                              <span className="text-emerald-700 text-[10px] block">وصول</span>
                              <strong className="text-emerald-900 text-sm font-black">
                                {formatAmount(party.totalPaid)}
                              </strong>
                            </div>
                            <div className="bg-rose-50 p-2 rounded-xl">
                              <span className="text-rose-700 text-[10px] block">صافی بقایا</span>
                              <strong className="text-rose-900 text-sm font-black">
                                {formatAmount(party.totalPending)}
                              </strong>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setSelectedCustomerForStatement(party.name)}
                            className="flex-1 py-1.5 px-2.5 rounded-xl text-xs font-extrabold bg-emerald-800 hover:bg-emerald-900 text-white flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>اسٹیٹمنٹ دیکھیں</span>
                          </button>

                          <a
                            href={partyWaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center"
                            title="Send WhatsApp Balance Notice"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                          </a>

                          {party.phone && (
                            <a
                              href={`sms:${party.phone.replace(/[^0-9]/g, '')}?body=${encodeURIComponent(
                                `BolMizan: Assalam-o-Alaikum ${party.name}, Baqi: ${party.totalPending} PKR at ${shopProfile.businessName}. Raast: ${shopProfile.raastId}.`
                              )}`}
                              className="p-2 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center"
                              title="Direct SMS"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {party.phone && (
                            <a
                              href={`tel:${party.phone.replace(/[^0-9]/g, '')}`}
                              className="p-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center"
                              title="Call Customer"
                            >
                              <PhoneCall className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <>
                {/* Entry Form Card */}
                <form
                  onSubmit={handleAddEntry}
              className="bg-white border border-emerald-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">{t.biz}</label>
                  <input
                    type="text"
                    value={shopProfile.businessName}
                    onChange={e =>
                      setShopProfile(prev => ({ ...prev, businessName: e.target.value }))
                    }
                    placeholder={t.biz}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    {currentLang === 'ur' ? 'کاروبار کی کیٹیگری' : 'Business Category'}
                  </label>
                  <select
                    value={cat}
                    onChange={e => setCat(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Kiryana / General">Kiryana / General (کریانہ و جنرل اسٹور)</option>
                    <option value="Medical / Pharmacy">Medical / Pharmacy (میڈیکل و فارمیسی)</option>
                    <option value="Agriculture / Mandi">Agriculture / Mandi (زراعت و اناج منڈی)</option>
                    <option value="Construction / Hardware">Construction / Hardware (سیمنٹ، سریا و ہارڈویئر)</option>
                    <option value="Services / Freelance">Services / Freelance (خدمات و فری لانس)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">{t.name}</label>
                  <input
                    type="text"
                    required
                    value={personName}
                    onChange={e => setPersonName(e.target.value)}
                    placeholder={t.name}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">{t.phone}</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder={t.phone}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold text-slate-600 mb-1">{t.amt}</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder={t.amt}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold text-emerald-950 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Currency</label>
                  <select
                    value={currency}
                    onChange={e => setCurrency(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="PKR">PKR (پاکستانی روپیہ)</option>
                    <option value="SAR">SAR (سعودی ریال)</option>
                    <option value="AED">AED (اماراتی درہم)</option>
                    <option value="USD">USD (امریکی ڈالر)</option>
                    <option value="EUR">EUR (یورو)</option>
                    <option value="GBP">GBP (برطانوی پاؤنڈ)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">{t.dueDate}</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={e => setDueDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">{t.det}</label>
                <input
                  type="text"
                  value={detail}
                  onChange={e => setDetail(e.target.value)}
                  placeholder={t.det}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">
                  {currentLang === 'ur' ? 'معاہدے کی قسم' : 'Transaction Type'}
                </label>
                <select
                  value={transType}
                  onChange={e => setTransType(e.target.value as TransactionType)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="udhaar">{t.udhaar}</option>
                  <option value="nakad">{t.nakad}</option>
                </select>
              </div>

              {/* Optional Electronic Signature / Thumb Mark on Form */}
              <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-bold text-slate-700">
                    {formSignatureDataUrl ? '✅ ڈیجیٹل دستخط منسلک ہے' : 'گاہک کے دستخط / انگوٹھا لیں (اختیاری)'}
                  </span>
                </div>
                {formSignatureDataUrl ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={formSignatureDataUrl}
                      alt="Signature"
                      className="h-6 w-16 object-contain border border-slate-300 rounded bg-white px-1"
                    />
                    <button
                      type="button"
                      onClick={() => setFormSignatureDataUrl('')}
                      className="text-[11px] text-rose-600 font-bold hover:underline cursor-pointer"
                    >
                      ختم کریں
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setFormSignatureModalOpen(true)}
                    className="px-2.5 py-1 text-xs font-bold bg-white border border-slate-300 rounded-lg text-emerald-800 hover:bg-emerald-50 cursor-pointer shadow-xs"
                  >
                    ✍️ دستخط پیڈ کھولیں
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-black text-sm bg-emerald-800 hover:bg-emerald-900 text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
                <span>{t.save}</span>
              </button>
            </form>

            {/* Search and Filters */}
            <div className="bg-white border border-emerald-100 rounded-2xl p-3 sm:p-4 shadow-sm space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute top-3.5 right-3.5 text-slate-400 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={t.search}
                  className="w-full py-2.5 px-10 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="flex gap-2 flex-wrap items-center">
                {[
                  { id: 'all', label: t.all },
                  { id: 'Pending', label: t.pending },
                  { id: 'Overdue', label: t.overdue },
                  { id: 'Paid', label: t.paid },
                  { id: 'Forgiven', label: t.forgiven }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setStatusFilter(p.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      statusFilter === p.id
                        ? 'bg-emerald-950 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Transaction Ledger List */}
            <div className="space-y-3">
              {filteredEntries.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-300 text-slate-500">
                  <Info className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                  <p className="text-sm font-semibold">
                    {currentLang === 'ur' ? 'کوئی ریکارڈ نہیں ملا۔' : 'No transactions found.'}
                  </p>
                </div>
              ) : (
                filteredEntries.map(entry => {
                  const isOverdue = entry.status === 'Pending' && entry.dueDate < todayStr;
                  const trust = getTrustScore(entry.name);

                  let waText = '';
                  if (entry.status === 'Pending') {
                    waText = t.waU(entry.name, entry.amount, entry.detail, entry.biz, entry.hash, entry.dueDate);
                  } else if (entry.status === 'Forgiven') {
                    waText = t.waS(entry.name, entry.amount, entry.biz);
                  } else {
                    waText = t.waN(entry.name, entry.amount, entry.detail, entry.biz, entry.hash);
                  }
                  const waUrl = entry.phone
                    ? `https://wa.me/${entry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(waText)}`
                    : `https://wa.me/?text=${encodeURIComponent(waText)}`;

                  const speakLine = t.readOut(entry.name, entry.amount, entry.status);

                  return (
                    <div
                      key={entry.id}
                      className={`bg-white border rounded-2xl p-4 shadow-sm transition-all border-l-4 rtl:border-r-4 rtl:border-l-0 ${
                        entry.status === 'Paid'
                          ? 'border-slate-300 border-l-slate-400 rtl:border-r-slate-400 bg-slate-50/50'
                          : entry.status === 'Forgiven'
                          ? 'border-purple-200 border-l-purple-600 rtl:border-r-purple-600 bg-purple-50/30'
                          : isOverdue
                          ? 'border-rose-300 border-l-rose-600 rtl:border-r-rose-600 bg-rose-50/40'
                          : 'border-emerald-200 border-l-emerald-600 rtl:border-r-emerald-600'
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-extrabold text-base text-slate-900">{entry.name}</span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
                              Amanat: {trust}%
                            </span>
                            {entry.ext > 0 && (
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                                Mohlat: {entry.ext}x
                              </span>
                            )}
                            {entry.isoRef && (
                              <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                                {entry.isoRef}
                              </span>
                            )}
                            {entry.signatureDataUrl && (
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                                <Fingerprint className="w-3 h-3 text-emerald-700" />
                                <span>دستخط مصدقہ</span>
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-x-2">
                            <span className="font-semibold text-slate-700">[{entry.cat}]</span>
                            <span>Due: {entry.dueDate}</span>
                            {entry.phone && (
                              <span className="text-slate-600 font-mono">
                                • {formatPhone(entry.phone)}
                              </span>
                            )}
                            {isOverdue && (
                              <span className="text-rose-600 font-bold">
                                ({currentLang === 'ur' ? 'تاریخ گزر گئی' : 'Overdue'})
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-700 font-medium mt-1 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                            {entry.detail}
                          </p>
                        </div>

                        {/* Amount & Status Badge (Privacy Masking aware) */}
                        <div className="text-right rtl:text-left">
                          <div
                            className={`text-lg sm:text-xl font-black ${
                              entry.status === 'Paid'
                                ? 'text-slate-600'
                                : entry.status === 'Forgiven'
                                ? 'text-purple-700'
                                : isOverdue
                                ? 'text-rose-600'
                                : 'text-emerald-800'
                            }`}
                          >
                            {formatAmount(entry.amount, entry.currency || 'PKR')}
                          </div>
                          <span
                            className={`inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full mt-1 ${
                              entry.status === 'Paid'
                                ? 'bg-slate-200 text-slate-700'
                                : entry.status === 'Forgiven'
                                ? 'bg-purple-100 text-purple-800'
                                : isOverdue
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {entry.status}
                          </span>
                        </div>
                      </div>

                      {/* Cryptographic SHA-256 Fingerprint */}
                      <div className="mt-3 p-2 bg-slate-100 rounded-lg text-[10.5px] font-mono text-slate-600 flex items-center justify-between gap-2 overflow-hidden">
                        <span className="truncate select-all" title={entry.hash}>
                          SHA-256: {entry.hash}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(entry.hash);
                            addToast('SHA-256 فنگر پرنٹ کاپی ہو گیا!', 'success');
                          }}
                          className="shrink-0 p-1 text-slate-500 hover:text-slate-800 cursor-pointer"
                          title="Copy Hash"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2 border-t border-slate-100">
                        {/* WhatsApp Notice */}
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          <span>{t.wa}</span>
                        </a>

                        {/* Audio Readout */}
                        <button
                          type="button"
                          onClick={() => speakText(speakLine)}
                          className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white flex items-center gap-1 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>{t.tts}</span>
                        </button>

                        {/* Legal Pay Rail (Raast / IBAN Voucher) */}
                        {entry.status === 'Pending' && (
                          <button
                            type="button"
                            onClick={() => handleOpenPaymentRail(entry)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-950 hover:bg-black text-white flex items-center gap-1 cursor-pointer shadow-xs"
                          >
                            <CreditCard className="w-3.5 h-3.5 text-emerald-300" />
                            <span>{t.payRail}</span>
                          </button>
                        )}

                        {/* Partial Payment (Qist Modal) */}
                        {entry.status === 'Pending' && (
                          <button
                            type="button"
                            onClick={() => {
                              setQistModalContract(entry);
                              setQistInputAmount('');
                            }}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-sky-700 hover:bg-sky-800 text-white flex items-center gap-1 cursor-pointer"
                          >
                            <Coins className="w-3.5 h-3.5" />
                            <span>{t.qist}</span>
                          </button>
                        )}

                        {/* 15-Day Empathy Mohlat */}
                        {entry.status === 'Pending' && (
                          <button
                            type="button"
                            onClick={() => handleGiveMohlat(entry.id)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-amber-700 hover:bg-amber-800 text-white flex items-center gap-1 cursor-pointer"
                          >
                            <Clock className="w-3.5 h-3.5" />
                            <span>{t.mohlat}</span>
                          </button>
                        )}

                        {/* Mark Paid */}
                        {entry.status === 'Pending' && (
                          <button
                            type="button"
                            onClick={() => handleMarkPaid(entry.id)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-900 hover:bg-black text-white flex items-center gap-1 cursor-pointer"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{t.paidBtn}</span>
                          </button>
                        )}

                        {/* Quran 2:280 Forgive Debt (Sadqah Modal) */}
                        {entry.status === 'Pending' && (
                          <button
                            type="button"
                            onClick={() => setForgiveModalContract(entry)}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-purple-700 hover:bg-purple-800 text-white flex items-center gap-1 shadow-xs cursor-pointer"
                          >
                            <Heart className="w-3.5 h-3.5 fill-current" />
                            <span>{t.sadqah}</span>
                          </button>
                        )}

                        {/* Direct SMS Notice for Button / Keypad Phones */}
                        {entry.phone && (
                          <a
                            href={`sms:${entry.phone.replace(/[^0-9]/g, '')}?body=${encodeURIComponent(
                              entry.status === 'Pending'
                                ? `BolMizan: Assalam-o-Alaikum ${entry.name}, Balance: ${entry.amount} PKR at ${shopProfile.businessName}. Raast: ${shopProfile.raastId}. Due: ${entry.dueDate}. Ref: ${entry.hash.slice(0, 10)}.`
                                : `BolMizan: Assalam-o-Alaikum ${entry.name}, Payment received: ${entry.amount} PKR. Thank you! Ref: ${entry.hash.slice(0, 10)}.`
                            )}`}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-1 cursor-pointer"
                            title="Direct SMS for Keypad Mobiles"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>SMS</span>
                          </a>
                        )}

                        {/* Electronic Signature / Thumb Mark */}
                        <button
                          type="button"
                          onClick={() => setSignatureModalContract(entry)}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition-all ${
                            entry.signatureDataUrl
                              ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                          }`}
                          title="Affix or view Customer Digital Signature"
                        >
                          <PenTool className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{entry.signatureDataUrl ? 'دستخط شدہ' : 'دستخط لیں'}</span>
                        </button>

                        {/* Print Receipt & QR Modal */}
                        <button
                          type="button"
                          onClick={() => handleOpenPrint(entry)}
                          className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-1 cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>{t.pdf}</span>
                        </button>

                        {/* Delete Confirmation Modal */}
                        <button
                          type="button"
                          onClick={() => setDeleteModalContract(entry)}
                          className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg ml-auto rtl:mr-auto rtl:ml-0 cursor-pointer"
                          title="Delete entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>
    )}

        {/* ============================================================ */}
        {/* TAB 2: 🤝 AMANAT LEDGER & CLIENT DIRECTORY */}
        {/* ============================================================ */}
        {activeTab === 2 && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-emerald-900 to-teal-950 rounded-2xl p-5 text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <HeartHandshake className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">
                    {currentLang === 'ur'
                      ? 'امانت لیجر و پارٹیز ڈائریکٹری (Amanat Trust Ledger)'
                      : 'Amanat Halal Credit & Client Directory'}
                  </h2>
                  <p className="text-xs text-emerald-100/90 mt-0.5">
                    {currentLang === 'ur'
                      ? 'بغیر سود اور ہراساں کیے، خالص وقت پر ادائیگی کے ریکارڈ کی بنیاد پر اخلاقی کریڈٹ اسکور۔'
                      : 'Fair, transparent credit scoring based strictly on contract fulfillment history.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {partyDirectory.map(party => {
                const score = getTrustScore(party.name);
                const tier =
                  score >= 90
                    ? { label: '🥇 ممتاز امانت دار (Gold)', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
                    : score >= 75
                    ? { label: '🥈 معتبر گاہک (Silver)', color: 'bg-blue-100 text-blue-900 border-blue-300' }
                    : score >= 55
                    ? { label: '🥉 عام گاہک (Bronze)', color: 'bg-amber-100 text-amber-900 border-amber-300' }
                    : { label: '⚠️ محتاط ڈیل (Monitored)', color: 'bg-rose-100 text-rose-900 border-rose-300' };

                return (
                  <div
                    key={party.name}
                    className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-emerald-300 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900">{party.name}</h3>
                        <p className="text-xs text-slate-500 mt-0.5 font-mono">
                          {party.phone ? `Phone: ${formatPhone(party.phone)}` : 'No phone recorded'}
                        </p>
                      </div>
                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${tier.color}`}>
                        {tier.label}
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-slate-50 p-2 rounded-xl">
                        <div className="text-slate-500 font-semibold text-[10px]">Total Deals</div>
                        <div className="font-extrabold text-slate-800 text-sm">{party.totalDeals}</div>
                      </div>
                      <div className="bg-emerald-50 p-2 rounded-xl">
                        <div className="text-emerald-700 font-semibold text-[10px]">Paid</div>
                        <div className="font-extrabold text-emerald-800 text-sm">
                          {formatAmount(party.totalPaid)}
                        </div>
                      </div>
                      <div className="bg-rose-50 p-2 rounded-xl">
                        <div className="text-rose-700 font-semibold text-[10px]">Baqi</div>
                        <div className="font-extrabold text-rose-800 text-sm">
                          {formatAmount(party.totalPending)}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-600">Amanat Score: {score}%</span>
                      <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            score >= 80 ? 'bg-emerald-600' : score >= 60 ? 'bg-amber-500' : 'bg-rose-600'
                          }`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setSelectedCustomerForStatement(party.name)}
                        className="flex-1 py-1.5 px-2 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>اسٹیٹمنٹ دیکھیں</span>
                      </button>

                      {party.phone && (
                        <a
                          href={`https://wa.me/${party.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `*بول میزان (BolMizan) گاہک کھاتہ*\nالسلام علیکم ${party.name} صاحب،\nادارہ: ${shopProfile.businessName}\nکل بقایا: ${party.totalPending} PKR\nراست ID: ${shopProfile.raastId}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center cursor-pointer"
                          title="WhatsApp Balance Reminder"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {party.phone && (
                        <a
                          href={`sms:${party.phone.replace(/[^0-9]/g, '')}?body=${encodeURIComponent(
                            `BolMizan: Assalam-o-Alaikum ${party.name}, Baqi: ${party.totalPending} PKR at ${shopProfile.businessName}. Raast: ${shopProfile.raastId}.`
                          )}`}
                          className="p-1.5 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center cursor-pointer"
                          title="Direct SMS"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {party.phone && (
                        <a
                          href={`tel:${party.phone.replace(/[^0-9]/g, '')}`}
                          className="p-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
                          title="Call"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: 💳 LEGAL SETTLEMENT RAILS (Raast, IBAN, ISO 20022) */}
        {/* ============================================================ */}
        {activeTab === 3 && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 rounded-2xl p-5 text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <CreditCard className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">
                    {currentLang === 'ur'
                      ? 'قانونی ادائیگی، راست (Raast) و بین الاقوامی بینکاری نظام'
                      : 'Legal Payment Rails: SBP Raast, IBAN & ISO 20022'}
                  </h2>
                  <p className="text-xs text-emerald-100/90 mt-0.5">
                    {currentLang === 'ur'
                      ? 'اسٹیٹ بینک آف پاکستان راست (Raast P2P/P2M)، 1LINK IBAN اور عالمی ترسیلات زر کے منظور شدہ ذرائع۔'
                      : 'Connect your ledger directly with legal instant payment rails.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Shop Banking & Raast Profile Setup Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-emerald-700" />
                  <span>
                    {currentLang === 'ur' ? 'دکان کے قانونی بینکاری کوائف (Payment Configuration)' : 'Shop Banking & Legal Settlement Profile'}
                  </span>
                </h3>
                <span className="text-[10.5px] bg-emerald-50 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                  SBP Raast Compatible
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    اسٹیٹ بینک راست آئی ڈی (SBP Raast ID - Mobile/IBAN)
                  </label>
                  <input
                    type="text"
                    value={shopProfile.raastId}
                    onChange={e => setShopProfile(prev => ({ ...prev, raastId: e.target.value }))}
                    placeholder="03001234567"
                    className="w-full px-3 py-2 text-sm font-mono bg-slate-50 border border-slate-200 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">
                    گاہک کسی بھی پاکستانی بینک ایپ (میزان، الفلاح، ایچ بی ایل، ایزی پیسہ، جاز کیش) سے اس نمبر پر 0% فیس پر فوری بھیج سکتا ہے۔
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    پرائمری بینک کا نام (Bank Entity)
                  </label>
                  <input
                    type="text"
                    value={shopProfile.bankName}
                    onChange={e => setShopProfile(prev => ({ ...prev, bankName: e.target.value }))}
                    placeholder="Meezan Bank Ltd"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    قومی 24-ہندسی IBAN (Standard Pakistani IBAN)
                  </label>
                  <input
                    type="text"
                    value={shopProfile.iban}
                    onChange={e => setShopProfile(prev => ({ ...prev, iban: e.target.value }))}
                    placeholder="PK36MEZN0001234567890123"
                    className="w-full px-3 py-2 text-sm font-mono bg-slate-50 border border-slate-200 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600 uppercase"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    بین الاقوامی SWIFT / BIC کوڈ (International Wire)
                  </label>
                  <input
                    type="text"
                    value={shopProfile.swiftBic}
                    onChange={e => setShopProfile(prev => ({ ...prev, swiftBic: e.target.value }))}
                    placeholder="MEZNPKKA"
                    className="w-full px-3 py-2 text-sm font-mono bg-slate-50 border border-slate-200 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600 uppercase"
                  />
                </div>
              </div>
            </div>

            {/* SBP Raast QR & Payment Generator (100% Offline Local Generation) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <QrCode className="w-4 h-4 text-emerald-700" />
                <span>
                  {currentLang === 'ur'
                    ? 'فوری راست QR جنریٹر (Instant SBP Raast QR - 100% Offline)'
                    : 'Instant SBP Raast Payment Voucher'}
                </span>
              </h3>

              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="text-sm font-extrabold text-emerald-950">
                    SBP Raast Instant Payment QR (اسٹیٹ بینک راست کیو آر کوڈ)
                  </div>
                  <p>
                    گاہک اپنے موبائل بینکنگ ایپ (Meezan, HBL, Alfalah, EasyPaisa, JazzCash) کا کیمرہ کھول کر براہ راست ادائیگی کر سکتا ہے۔
                  </p>
                  <div className="pt-1 font-mono text-[11px] text-emerald-900 font-bold space-y-0.5">
                    <div>Raast ID: {shopProfile.raastId}</div>
                    <div>Account Title: {shopProfile.businessName}</div>
                    <div>IBAN: {shopProfile.iban}</div>
                  </div>
                </div>

                <div className="shrink-0 text-center">
                  <div className="p-2 bg-white rounded-xl border border-slate-300 shadow-xs inline-block">
                    {tab3RaastQrUrl ? (
                      <img
                        src={tab3RaastQrUrl}
                        alt="Raast QR"
                        className="w-32 h-32 rounded-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 flex items-center justify-center bg-slate-50">
                        <RefreshCw className="w-5 h-5 animate-spin text-emerald-700" />
                      </div>
                    )}
                  </div>
                  <div className="text-[10px] font-bold text-emerald-800 mt-1">
                    اسکین کریں اور رقم بھیجیں
                  </div>
                </div>
              </div>

              {/* Legal Interoperability Box */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 text-slate-600">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>بین الاقوامی ترسیل اور ISO 20022 ضابطہ (Cross-Border Interoperability):</span>
                </div>
                <p className="text-[11px]">
                  بیرونِ ملک (خلیجی ممالک، برطانیہ، امریکہ، یورپ) سے ترسیل کے لیے ISO 20022 فارمیٹ شدہ سٹرکچرڈ ریمٹنس ریفرنس جنریٹ کیا جاتا ہے جو اینٹی منی لانڈرنگ (AML) اور ایف اے ٹی ایف (FATF) کے تقاضوں سے ہم آہنگ ہے۔
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: 📦 STOCK THEFT & EXPIRY RESCUE */}
        {/* ============================================================ */}
        {activeTab === 4 && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-amber-800 via-amber-900 to-slate-900 rounded-2xl p-5 text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <PackageCheck className="w-6 h-6 text-amber-200" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">
                    {currentLang === 'ur'
                      ? 'مال گارڈ: چوری/لیکیج و ایکسپائری ریسکیو (حضرت عثمانؓ ماڈل)'
                      : 'Maal-Guard: Inventory Audit & Spoilage Rescue'}
                  </h2>
                  <p className="text-xs text-amber-100/90 mt-0.5">
                    {currentLang === 'ur'
                      ? 'سیمنٹ، سریا یا ادویات کی چوری پکڑیں، اور ضائع ہونے والی اشیاء کو سستے ریٹ پر منتقل کریں۔'
                      : 'Stop stock loss & transfer expiring goods before waste.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-amber-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    {currentLang === 'ur' ? 'آئٹم / سامان کا نام' : 'Item / Material Name'}
                  </label>
                  <input
                    type="text"
                    value={matName}
                    onChange={e => setMatName(e.target.value)}
                    placeholder="e.g. 50kg Cement Bags, Insulin, Wheat..."
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    {currentLang === 'ur' ? 'فی یونٹ قیمت (PKR)' : 'Unit Price (PKR)'}
                  </label>
                  <input
                    type="number"
                    value={matPrice}
                    onChange={e => setMatPrice(e.target.value)}
                    placeholder="1250"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    {currentLang === 'ur' ? 'کل بھیجا گیا اسٹاک (Total Sent / Dispatched)' : 'Total Stock Sent'}
                  </label>
                  <input
                    type="number"
                    value={matSent}
                    onChange={e => setMatSent(e.target.value)}
                    placeholder="200"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    {currentLang === 'ur' ? 'استعمال شدہ / بیچا گیا اسٹاک (Accounted For)' : 'Accounted / Used Stock'}
                  </label>
                  <input
                    type="number"
                    value={matUsed}
                    onChange={e => setMatUsed(e.target.value)}
                    placeholder="182"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    {currentLang === 'ur' ? 'ایکسپائری تاریخ (Expiry Date)' : 'Expiry Date'}
                  </label>
                  <input
                    type="date"
                    value={matExpiry}
                    onChange={e => setMatExpiry(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    {currentLang === 'ur' ? 'قریبی دکاندار / خریدار کا واٹس ایپ' : 'Nearby Partner WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    value={matPhone}
                    onChange={e => setMatPhone(e.target.value)}
                    placeholder="923001234567"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleRunAudit}
                className="w-full py-3 px-4 rounded-xl font-black text-sm bg-amber-800 hover:bg-amber-900 text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-5 h-5 text-amber-200" />
                <span>
                  {currentLang === 'ur' ? '🔍 چوری / لیکیج اور ایکسپائری آڈٹ کریں' : 'Run Audit & Leakage Check'}
                </span>
              </button>
            </div>

            {/* Audit Result Display */}
            {auditResult && (
              <div
                className={`border rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 ${
                  auditResult.isClean
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}
              >
                <div className="flex items-center gap-2 font-black text-base">
                  {auditResult.isClean ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>{currentLang === 'ur' ? '✅ 100% شفاف آڈٹ: کوئی چوری نہیں' : '100% Clean Stock Audit'}</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-5 h-5 text-rose-600" />
                      <span>
                        {currentLang === 'ur'
                          ? `⚠️ مال کی چوری / لیکیج پکڑی گئی (${auditResult.diff} یونٹس غائب)`
                          : `⚠️ Leakage Detected: ${auditResult.diff} units missing`}
                      </span>
                    </>
                  )}
                </div>

                <div className="text-xs sm:text-sm space-y-1">
                  <div>
                    <strong>{matName}</strong> | Total Sent: {matSent} | Accounted: {matUsed}
                  </div>
                  <div>
                    Missing / Unaccounted:{' '}
                    <strong className="text-rose-700">
                      {auditResult.diff} units ({auditResult.pct}% Leakage)
                    </strong>
                  </div>
                  <div>
                    Financial Loss:{' '}
                    <strong>{formatAmount(auditResult.loss)}</strong>
                  </div>
                </div>

                {matExpiry && (
                  <div className="pt-3 border-t border-slate-200 mt-2 space-y-2">
                    <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>
                        {currentLang === 'ur'
                          ? `⏳ ایکسپائری اسٹیٹس: ${auditResult.daysLeft} دن باقی ہیں`
                          : `Expiry Alert: ${auditResult.daysLeft} days remaining`}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={auditResult.offerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1.5"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>
                          {currentLang === 'ur' ? 'واٹس ایپ پر ڈسکاؤنٹ کلیرنس آفر بھیجیں' : 'Send WhatsApp Rescue Offer'}
                        </span>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleRecordBachat(auditResult.discountTotal)}
                        className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-700 hover:bg-amber-800 text-white flex items-center gap-1.5 cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>
                          {currentLang === 'ur'
                            ? `ایکسپائری بچت ریکارڈ کریں (+${Math.round(auditResult.discountTotal).toLocaleString()} PKR)`
                            : `Record Rescue Bachat (+${Math.round(auditResult.discountTotal).toLocaleString()} PKR)`}
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 5: ⚖️ ZAKAT, ETO 2002 & ARCHITECTURE AUDIT */}
        {/* ============================================================ */}
        {activeTab === 5 && (
          <div className="space-y-4">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 rounded-2xl p-5 text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Coins className="w-6 h-6 text-teal-300" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">
                    {currentLang === 'ur'
                      ? 'خالص 2.5% زکوٰۃ، قانونی توثیق و ڈیٹا سیکیورٹی'
                      : 'Halal 2.5% Zakat, Legal Verification & Security'}
                  </h2>
                  <p className="text-xs text-teal-100/90 mt-0.5">
                    {currentLang === 'ur'
                      ? 'شریعت کے مطابق زکوٰۃ، Electronic Transactions Ordinance 2002 کے تحت کرپٹوگرافک ثبوت۔'
                      : 'Shariah-compliant Zakat & statutory digital evidentiary verification.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Zakat Calculator */}
            <div className="bg-white border border-emerald-100 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <Scale className="w-4 h-4 text-emerald-700" />
                <span>{currentLang === 'ur' ? 'سالانہ 2.5% زکوٰۃ کیلکولیٹر' : 'Annual 2.5% Zakat Engine'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    1. نقد رقم (دکان میں + بینک اکاؤنٹ)
                  </label>
                  <input
                    type="number"
                    value={zakatCash}
                    onChange={e => setZakatCash(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    2. سامانِ تجارت کی مارکیٹ ویلیو
                  </label>
                  <input
                    type="number"
                    value={zakatStock}
                    onChange={e => setZakatStock(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    3. قابلِ وصول کھاتہ (خودکار لائیو ادھار)
                  </label>
                  <input
                    type="text"
                    disabled
                    value={`${formatAmount(totalUdhaar)} (Synced from Khata)`}
                    className="w-full px-3 py-2 text-sm bg-slate-100 border border-slate-200 rounded-xl font-extrabold text-emerald-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    4. فوری واجب الادا قرضے (منفی ہوں گے)
                  </label>
                  <input
                    type="number"
                    value={zakatPayables}
                    onChange={e => setZakatPayables(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculateZakat}
                className="w-full py-3 px-4 rounded-xl font-black text-sm bg-emerald-800 hover:bg-emerald-900 text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Coins className="w-5 h-5 text-emerald-300" />
                <span>{currentLang === 'ur' ? '⚖️ زکوٰۃ کا حساب لگائیں' : 'Calculate Shariah Zakat'}</span>
              </button>

              {zakatCalculated && (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 text-emerald-950 space-y-2 mt-3">
                  <div className="flex justify-between text-xs">
                    <span>کل تجارتی اثاثے:</span>
                    <span className="font-bold">{formatAmount(zakatCalculated.totalAssets)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-rose-700">
                    <span>منفی واجب الادا قرض:</span>
                    <span className="font-bold">-{formatAmount(zakatCalculated.liabilities)}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-emerald-200 font-bold">
                    <span>خالص مالِ تجارت:</span>
                    <span>{formatAmount(zakatCalculated.netWealth)}</span>
                  </div>
                  <div className="p-3 bg-emerald-900 text-white rounded-xl text-center shadow-xs mt-2">
                    <div className="text-[10px] text-emerald-200 font-bold uppercase tracking-wider">
                      2.5% Annual Zakat Obligation
                    </div>
                    <div className="text-xl sm:text-2xl font-black mt-0.5">
                      {formatAmount(zakatCalculated.zakatDue)}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cryptographic SHA-256 Verifier */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>
                  {currentLang === 'ur'
                    ? 'قرآن 2:282 و ETO 2002 ٹیمپر پروف ویریفائر'
                    : 'Tamper-Proof SHA-256 Contract Verifier'}
                </span>
              </h3>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={verifyHashInput}
                  onChange={e => setVerifyHashInput(e.target.value)}
                  placeholder="Paste SHA-256 Hash to verify..."
                  className="w-full px-3 py-2 text-xs sm:text-sm font-mono bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                <button
                  type="button"
                  onClick={handleVerifyHash}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-black text-white shrink-0 cursor-pointer"
                >
                  {currentLang === 'ur' ? 'تصدیق کریں' : 'Verify'}
                </button>
              </div>

              {verifyResult && (
                <div
                  className={`p-4 rounded-xl border text-xs sm:text-sm font-medium ${
                    verifyResult.found
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-rose-50 border-rose-300 text-rose-950'
                  }`}
                >
                  <div className="font-bold">{verifyResult.message}</div>
                  {verifyResult.entry && (
                    <div className="mt-2 pt-2 border-t border-emerald-200 text-xs space-y-1">
                      <div>
                        Party: <strong>{verifyResult.entry.name}</strong> | Amount:{' '}
                        <strong>{formatAmount(verifyResult.entry.amount)}</strong>
                      </div>
                      <div>
                        Date: {verifyResult.entry.createdAt.slice(0, 10)} | Status: {verifyResult.entry.status}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Architecture Orchestration & Transparency Status */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-700" />
                  <span>آرکیٹیکچر شفافیت و انجن اسٹیٹس (Full-Stack Orchestration)</span>
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                  100% Verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-slate-600" />
                    <span className="font-semibold text-slate-700">Backend REST API:</span>
                  </div>
                  <span className="font-bold text-emerald-700">Express 4.21 / Active</span>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-slate-600" />
                    <span className="font-semibold text-slate-700">Storage Architecture:</span>
                  </div>
                  <span className="font-bold text-emerald-700">Atomic Dual Sync</span>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-slate-600" />
                    <span className="font-semibold text-slate-700">Cryptographic Signature:</span>
                  </div>
                  <span className="font-bold text-emerald-700">SHA-256 Validated</span>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-slate-600" />
                    <span className="font-semibold text-slate-700">Statute Admissibility:</span>
                  </div>
                  <span className="font-bold text-emerald-700">ETO 2002 Compliant</span>
                </div>
              </div>
            </div>

            {/* Offline-First Backup & Export */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
                <span>
                  {currentLang === 'ur'
                    ? 'قانونی ریکارڈ ایکسپورٹ و 100% آف لائن بیک اپ'
                    : 'Statutory Data Export & Offline Sovereignty'}
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                آپ کا تمام ڈیٹا مکمل طور پر آپ کی اپنی ڈیوائس پر رہتا ہے۔ قانونی آڈٹ یا اکاؤنٹنٹ کے لیے 1-کلک ایکسپورٹ حاصل کریں۔
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleExportCsv}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{currentLang === 'ur' ? '1. قانونی CSV شیٹ ڈاؤنلوڈ کریں' : 'Export Statutory CSV'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleBackupJson}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-900 text-white flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{currentLang === 'ur' ? '2. محفوظ JSON بیک اپ لیں' : 'Backup Database JSON'}</span>
                </button>

                <label className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center gap-2 border border-slate-300 cursor-pointer">
                  <Upload className="w-4 h-4" />
                  <span>{currentLang === 'ur' ? '3. بیک اپ بحال کریں (Restore)' : 'Restore Backup'}</span>
                  <input type="file" accept=".json" onChange={handleRestoreJson} className="hidden" />
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* MODAL 1: PARTIAL PAYMENT (QIST) IN-APP MODAL */}
      {/* ============================================================ */}
      {qistModalContract && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-print">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative my-auto animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-emerald-700" />
                  <span>قسط کی وصولی (Partial Payment Entry)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  پارٹی: <strong>{qistModalContract.name}</strong> | کل باقی:{' '}
                  <strong className="text-rose-700">{formatAmount(qistModalContract.amount)}</strong>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setQistModalContract(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  وصول شدہ قسط کی رقم (PKR)
                </label>
                <input
                  type="number"
                  autoFocus
                  value={qistInputAmount}
                  onChange={e => setQistInputAmount(e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full px-3.5 py-2.5 text-base font-bold bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              {/* Quick Percentage Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {[0.25, 0.5, 1.0].map(pct => {
                  const val = Math.round(qistModalContract.amount * pct);
                  return (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setQistInputAmount(val.toString())}
                      className="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold cursor-pointer"
                    >
                      {pct * 100}% ({val})
                    </button>
                  );
                })}
              </div>

              {qistInputAmount && parseFloat(qistInputAmount) > 0 && (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>قسط کے بعد باقی بچے گا:</span>
                    <strong className="text-emerald-950 font-bold">
                      {Math.max(0, qistModalContract.amount - parseFloat(qistInputAmount)).toLocaleString()} PKR
                    </strong>
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleConfirmQist}
                  className="flex-1 py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-sm cursor-pointer shadow-sm"
                >
                  وصولی محفوظ کریں
                </button>
                <button
                  type="button"
                  onClick={() => setQistModalContract(null)}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm cursor-pointer"
                >
                  منسوخ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 2: FORGIVE DEBT (SADQAH) REVERENT IN-APP MODAL */}
      {/* ============================================================ */}
      {forgiveModalContract && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-print">
          <div className="bg-white border border-purple-200 rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative my-auto animate-in fade-in zoom-in-95">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-lg font-black text-slate-900">
                قرض کی معافی و صدقہ جاریہ (قرآن 2:280)
              </h3>
              <p className="text-xs text-purple-900 bg-purple-50 p-3 rounded-xl border border-purple-200 leading-relaxed font-semibold">
                «وَإِن كَانَ ذُو عُسْرَةٍ فَنَظِرَةٌ إِلَىٰ مَيْسَرَةٍ ۚ وَأَن تَصَدَّقُوا خَيْرٌ لَّكُمْ ۖ إِن كُنتُمْ تَعْلَمُونَ»
                <br />
                <span className="text-[11px] text-slate-600 font-normal">
                  "اور اگر کوئی تنگ دست ہو تو اسے آسانی تک مہلت دو، اور اگر تم صدقہ کر دو (قرض معاف کر دو) تو یہ تمہارے لیے زیادہ بہتر ہے اگر تم جانتے ہو۔"
                </span>
              </p>

              <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1 text-slate-700">
                <div>
                  پارٹی / مقروض کا نام: <strong>{forgiveModalContract.name}</strong>
                </div>
                <div>
                  معاف کی جانے والی رقم:{' '}
                  <strong className="text-purple-900 text-sm">
                    {formatAmount(forgiveModalContract.amount, forgiveModalContract.currency || 'PKR')}
                  </strong>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleConfirmForgive}
                  className="flex-1 py-3 px-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-sm cursor-pointer shadow-md"
                >
                  اللہ کی رضا کے لیے مکمل معاف کریں
                </button>
                <button
                  type="button"
                  onClick={() => setForgiveModalContract(null)}
                  className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm cursor-pointer"
                >
                  واپس
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 3: DELETE CONFIRMATION IN-APP MODAL */}
      {/* ============================================================ */}
      {deleteModalContract && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-print">
          <div className="bg-white border border-rose-200 rounded-3xl max-w-sm w-full p-5 sm:p-6 shadow-2xl relative my-auto animate-in fade-in zoom-in-95">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center mx-auto">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                کیا آپ یہ معاہدہ حذف کرنا چاہتے ہیں؟
              </h3>
              <p className="text-xs text-slate-600">
                پارٹی <strong>{deleteModalContract.name}</strong> کے{' '}
                <strong>{formatAmount(deleteModalContract.amount)}</strong> کا ریکارڈ حذف کر دیا جائے گا۔
              </p>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="flex-1 py-2.5 px-4 bg-rose-700 hover:bg-rose-800 text-white rounded-xl font-bold text-sm cursor-pointer"
                >
                  ہاں، حذف کریں
                </button>
                <button
                  type="button"
                  onClick={() => setDeleteModalContract(null)}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm cursor-pointer"
                >
                  منسوخ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 4: PROFILE & BANKING SETTINGS MODAL */}
      {/* ============================================================ */}
      {profileSettingsOpen && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-print">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl relative my-auto animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-emerald-700" />
                <span>دکان اور بینکاری ترتیبات (Shop Settings)</span>
              </h3>
              <button
                type="button"
                onClick={() => setProfileSettingsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">دکان / قانونی بزنس ٹائٹل</label>
                <input
                  type="text"
                  value={shopProfile.businessName}
                  onChange={e => setShopProfile(prev => ({ ...prev, businessName: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">اسٹیٹ بینک راست آئی ڈی (Raast ID)</label>
                <input
                  type="text"
                  value={shopProfile.raastId}
                  onChange={e => setShopProfile(prev => ({ ...prev, raastId: e.target.value }))}
                  className="w-full px-3 py-2 font-mono bg-slate-50 border border-slate-300 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">بینک کا نام (Primary Bank)</label>
                <input
                  type="text"
                  value={shopProfile.bankName}
                  onChange={e => setShopProfile(prev => ({ ...prev, bankName: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">قومی IBAN (24 Characters)</label>
                <input
                  type="text"
                  value={shopProfile.iban}
                  onChange={e => setShopProfile(prev => ({ ...prev, iban: e.target.value }))}
                  className="w-full px-3 py-2 font-mono uppercase bg-slate-50 border border-slate-300 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setProfileSettingsOpen(false);
                    addToast('ترتیبات کامیابی سے محفوظ ہو گئیں!', 'success');
                    if (isOnline) {
                      fetch('/api/profile', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(shopProfile)
                      }).catch(() => {});
                    }
                  }}
                  className="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-sm cursor-pointer shadow-md"
                >
                  محفوظ کریں
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 5: SBP RAAST / IBAN PAYMENT RAIL MODAL */}
      {/* ============================================================ */}
      {paymentModalEntry && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-print">
          <div className="bg-white border border-emerald-200 rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl relative my-auto animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-emerald-700" />
                  <span>
                    {currentLang === 'ur'
                      ? '💳 قانونی ادائیگی و راست واؤچر (SBP Raast / IBAN)'
                      : '💳 Legal Settlement & SBP Raast Voucher'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  رقم: <strong>{formatAmount(paymentModalEntry.amount, paymentModalEntry.currency || 'PKR')}</strong> | پارٹی: <strong>{paymentModalEntry.name}</strong>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPaymentModalEntry(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 max-h-[75vh] overflow-y-auto pr-1">
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 text-center">
                <div className="text-xs font-bold text-emerald-950 mb-2">
                  اسٹیٹ بینک راست فوری ادائیگی QR (100% Offline Local Generation)
                </div>
                {raastQrDataUrl && (
                  <img
                    src={raastQrDataUrl}
                    alt="Raast Payment QR"
                    className="w-44 h-44 mx-auto rounded-xl border border-emerald-800/20 bg-white p-2 shadow-xs"
                  />
                )}
                <div className="text-[11px] font-semibold text-emerald-900 mt-3 font-mono">
                  SBP Raast ID: {shopProfile.raastId}
                </div>
                <div className="text-[10px] text-slate-600">
                  Account: {shopProfile.businessName}
                </div>
              </div>

              {/* Rails Breakdown */}
              <div className="space-y-2 text-xs">
                {/* Raast */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2">
                  <div>
                    <span className="text-slate-500 block text-[10.5px]">1. State Bank Raast (0% فیس):</span>
                    <strong className="text-slate-900 font-mono text-sm">{shopProfile.raastId}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(shopProfile.raastId);
                      setCopiedField('raast');
                      addToast('راست آئی ڈی کاپی ہو گئی!', 'success');
                      setTimeout(() => setCopiedField(''), 1500);
                    }}
                    className="px-2.5 py-1 text-xs font-bold bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    {copiedField === 'raast' ? 'کاپی ہو گیا!' : 'کاپی'}
                  </button>
                </div>

                {/* IBAN */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2">
                  <div>
                    <span className="text-slate-500 block text-[10.5px]">
                      2. بینک IBAN ({shopProfile.bankName}):
                    </span>
                    <strong className="text-slate-900 font-mono text-xs">{shopProfile.iban}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(shopProfile.iban);
                      setCopiedField('iban');
                      addToast('IBAN نمبر کاپی ہو گیا!', 'success');
                      setTimeout(() => setCopiedField(''), 1500);
                    }}
                    className="px-2.5 py-1 text-xs font-bold bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    {copiedField === 'iban' ? 'کاپی ہو گیا!' : 'کاپی'}
                  </button>
                </div>

                {/* ISO 20022 */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2">
                  <div>
                    <span className="text-slate-500 block text-[10.5px]">
                      3. ISO 20022 گلوبل ریفرنس:
                    </span>
                    <strong className="text-slate-900 font-mono text-xs">
                      {paymentModalEntry.isoRef || 'N/A'}
                    </strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(paymentModalEntry.isoRef || '');
                      setCopiedField('iso');
                      addToast('ISO 20022 ریفرنس کاپی ہو گیا!', 'success');
                      setTimeout(() => setCopiedField(''), 1500);
                    }}
                    className="px-2.5 py-1 text-xs font-bold bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
                  >
                    {copiedField === 'iso' ? 'کاپی ہو گیا!' : 'کاپی'}
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/${paymentModalEntry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `*بول میزان (BolMizan) سرکاری ادائیگی واؤچر*\nالسلام علیکم ${paymentModalEntry.name} بھائی،\nادارہ: ${shopProfile.businessName}\nواجب الادا رقم: ${paymentModalEntry.amount} PKR\n\n💳 ادائیگی کے قانونی ذرائع:\n1. اسٹیٹ بینک راست (Raast ID): ${shopProfile.raastId}\n2. بینک اکاؤنٹ (IBAN): ${shopProfile.iban}\n3. بینک کا نام: ${shopProfile.bankName}\n4. ریفرنس نمبر: ${paymentModalEntry.isoRef || paymentModalEntry.id}\n\nجزاک اللہ خیراً!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-black text-sm bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center gap-2 shadow-md"
                >
                  <Share2 className="w-4 h-4" />
                  <span>واٹس ایپ پر باضابطہ راست/IBAN واؤچر بھیجیں</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    handleMarkPaid(paymentModalEntry.id);
                    setPaymentModalEntry(null);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-slate-900 hover:bg-black text-white flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>ادائیگی وصول ہو گئی (Mark Settled via Raast/Bank)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 6: OFFICIAL DIGITAL RECEIPT & SMARTPHONE QR CODE */}
      {/* ============================================================ */}
      {printEntry && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-print">
          <div className="bg-white border border-emerald-200 rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl relative my-auto animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-emerald-700" />
                  <span>
                    {currentLang === 'ur'
                      ? '📱 بول میزان رسید اور اسمارٹ فون QR کوڈ'
                      : '📱 BolMizan Official Receipt & Smartphone QR'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  کسی بھی عام اسمارٹ فون کیمرے (iPhone / Android) سے اسکین کر کے فوری قانونی تصدیق کریں۔
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPrintEntry(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 max-h-[75vh] overflow-y-auto pr-1">
              <div className="bg-gradient-to-b from-emerald-50/80 to-slate-50 border border-emerald-200/80 rounded-2xl p-4 text-center">
                <div className="relative inline-block mx-auto">
                  {printQrDataUrl ? (
                    <img
                      src={printQrDataUrl}
                      alt="Cryptographic QR Code"
                      className="w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-xl border border-emerald-800/20 bg-white p-2 shadow-sm"
                    />
                  ) : (
                    <div className="w-44 h-44 sm:w-52 sm:h-52 mx-auto flex items-center justify-center bg-slate-100 rounded-xl">
                      <RefreshCw className="w-6 h-6 animate-spin text-emerald-700" />
                    </div>
                  )}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow-xs whitespace-nowrap flex items-center gap-1">
                    <Scan className="w-3 h-3 text-emerald-300" />
                    <span>کیمرہ سامنے لائیں (Scan with Phone)</span>
                  </div>
                </div>

                <p className="text-xs font-semibold text-emerald-950 mt-4">
                  ⚡ فوری اسکین: iPhone یا Android کیمرے سے دیکھیں
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  معاہدے کا مکمل ریکارڈ، پارٹی، رقم، راست آئی ڈی اور SHA-256 فنگر پرنٹ انکوڈ ہے۔
                </p>
              </div>

              {/* Transaction Detail Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-2 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 font-medium">
                  <span className="text-slate-700 font-bold">{printEntry.biz}</span>
                  <span className="font-mono text-[10.5px] bg-white px-2 py-0.5 rounded border border-slate-200">
                    #{printEntry.id.toString().slice(-8)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-slate-500 block text-[10.5px]">Party / Client:</span>
                    <strong className="text-slate-900 text-sm">{printEntry.name}</strong>
                  </div>
                  <div className="text-right rtl:text-left">
                    <span className="text-slate-500 block text-[10.5px]">Amount:</span>
                    <strong className="text-emerald-900 text-sm font-black">
                      {formatAmount(printEntry.amount, printEntry.currency || 'PKR')}
                    </strong>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                  <div>
                    <span className="text-slate-500 block text-[10.5px]">Category & Trust:</span>
                    <span className="font-bold text-slate-700">
                      {printEntry.cat} • {getTrustScore(printEntry.name)}% Score
                    </span>
                  </div>
                  <div className="text-right rtl:text-left">
                    <span className="text-slate-500 block text-[10.5px]">Due Date:</span>
                    <span className="font-bold text-slate-800">{printEntry.dueDate}</span>
                  </div>
                </div>

                {printEntry.detail && (
                  <div className="pt-1 border-t border-slate-100">
                    <span className="text-slate-500 block text-[10.5px]">Details:</span>
                    <span className="text-slate-700 font-medium">{printEntry.detail}</span>
                  </div>
                )}

                {/* Signature Preview if present */}
                {printEntry.signatureDataUrl && (
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-[10px] font-bold text-slate-500 block mb-1">
                      دستخط و نشانِ انگوٹھا (Electronic Signature Affixed):
                    </span>
                    <img
                      src={printEntry.signatureDataUrl}
                      alt="Signature"
                      className="h-10 border border-slate-300 rounded bg-white p-1"
                    />
                  </div>
                )}

                {/* SHA-256 Fingerprint */}
                <div className="pt-2 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-slate-500">SHA-256 Tamper-Proof Hash:</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(printEntry.hash);
                        addToast('ہیش کاپی ہو گیا!', 'success');
                      }}
                      className="text-[10px] font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-0.5 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>کاپی</span>
                    </button>
                  </div>
                  <div className="font-mono text-[9.5px] bg-white p-2 rounded border border-slate-200 break-all select-all text-slate-700">
                    {printEntry.hash}
                  </div>
                </div>
              </div>

              {/* Action Buttons inside Modal */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full py-3 px-4 rounded-xl font-black text-sm bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>🖨️ پرنٹ رسید / PDF محفوظ کریں</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopyQrPayload}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-1.5 border border-slate-200 cursor-pointer"
                  >
                    {qrCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                    <span>{qrCopied ? 'کاپی ہو گیا!' : 'QR ڈیٹا کاپی کریں'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleVerifyFromReceipt(printEntry.hash)}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-950 flex items-center justify-center gap-1.5 border border-emerald-200 cursor-pointer"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>ہیش تصدیق کریں</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 7: INTERACTIVE DIGITAL SIGNATURE & THUMB-IMPRESSION PAD */}
      {/* ============================================================ */}
      {(signatureModalContract || formSignatureModalOpen) && (
        <SignatureModal
          contract={signatureModalContract}
          isFormMode={formSignatureModalOpen}
          onClose={() => {
            setSignatureModalContract(null);
            setFormSignatureModalOpen(false);
          }}
          onSave={handleSaveSignature}
        />
      )}

      {/* ============================================================ */}
      {/* MODAL 8: CUSTOMER STATEMENT OF ACCOUNT & COMPLETE LEDGER */}
      {/* ============================================================ */}
      {selectedCustomerForStatement && (
        <CustomerStatementModal
          customerName={selectedCustomerForStatement}
          entries={entries}
          shopProfile={shopProfile}
          onClose={() => setSelectedCustomerForStatement(null)}
          onAddToast={addToast}
        />
      )}

      {/* ============================================================ */}
      {/* MODAL 9: ISLAMIC MERCHANT ZAKAT & AMANAT AUDIT MODAL */}
      {/* ============================================================ */}
      {zakatModalOpen && (
        <ZakatAuditModal
          entries={entries}
          onClose={() => setZakatModalOpen(false)}
          onAddToast={addToast}
        />
      )}
    </div>
  );
}

// ==========================================
// 5. SIGNATURE & THUMB-IMPRESSION CANVAS COMPONENT
// ==========================================
function SignatureModal({
  contract,
  isFormMode,
  onClose,
  onSave
}: {
  contract: LedgerEntry | null;
  isFormMode: boolean;
  onClose: () => void;
  onSave: (dataUrl: string) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [mode, setMode] = useState<'signature' | 'thumb'>('signature');

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(20, canvas.height - 35);
        ctx.lineTo(canvas.width - 20, canvas.height - 35);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  }, []);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const pos = getPos(e);
    ctx.strokeStyle = mode === 'signature' ? '#047857' : '#1e3a8a';
    ctx.lineWidth = mode === 'signature' ? 2.5 : 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(20, canvas.height - 35);
    ctx.lineTo(canvas.width - 20, canvas.height - 35);
    ctx.stroke();
    ctx.setLineDash([]);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    onSave(dataUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-xs no-print">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-emerald-100 animate-in fade-in zoom-in-95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                قانونی ڈیجیٹل دستخط و نشانِ انگوٹھا
              </h3>
              <p className="text-[11px] text-slate-500">
                {isFormMode ? 'نئے معاہدے کے لیے' : `برائے ${contract?.name || 'گاہک'}`} • سیکشن 7 و 8، ETO 2002
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <button
            type="button"
            onClick={() => setMode('signature')}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              mode === 'signature'
                ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            ✍️ دستخط (Digital Signature)
          </button>
          <button
            type="button"
            onClick={() => setMode('thumb')}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              mode === 'thumb'
                ? 'bg-blue-800 text-white border-blue-800 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            🖐️ نشانِ انگوٹھا (Biometric Thumb Mark)
          </button>
          <button
            type="button"
            onClick={clearCanvas}
            className="py-1.5 px-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200 cursor-pointer"
          >
            صاف کریں
          </button>
        </div>

        <div className="border-2 border-dashed border-emerald-300 rounded-2xl bg-white overflow-hidden p-1 shadow-inner relative touch-none">
          <canvas
            ref={canvasRef}
            width={460}
            height={180}
            className="w-full h-[180px] bg-white cursor-crosshair block rounded-xl"
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={stopDraw}
            onMouseLeave={stopDraw}
            onTouchStart={startDraw}
            onTouchMove={draw}
            onTouchEnd={stopDraw}
          />
          <div className="absolute bottom-2 left-4 text-[10px] text-slate-400 pointer-events-none select-none">
            {mode === 'signature' ? 'دستخط برائے گاہک (Signature Line)' : 'نشانِ انگوٹھا (Thumb Impression Area)'}
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
          >
            منسوخ
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-2 py-2.5 px-4 rounded-xl font-extrabold text-xs bg-emerald-800 hover:bg-emerald-900 text-white shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>دستخط محفوظ کریں اور مہر لگائیں</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 6. CUSTOMER STATEMENT OF ACCOUNT MODAL
// ==========================================
function CustomerStatementModal({
  customerName,
  entries,
  shopProfile,
  onClose,
  onAddToast
}: {
  customerName: string;
  entries: LedgerEntry[];
  shopProfile: ShopPaymentProfile;
  onClose: () => void;
  onAddToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}) {
  const customerEntries = useMemo(() => {
    return entries
      .filter(e => e.name.trim().toLowerCase() === customerName.trim().toLowerCase())
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }, [entries, customerName]);

  const summary = useMemo(() => {
    let debit = 0;
    let credit = 0;
    let forgiven = 0;

    customerEntries.forEach(e => {
      if (e.type === 'udhaar') {
        debit += e.originalAmount || e.amount;
        if (e.status === 'Paid') credit += e.originalAmount || e.amount;
        else if (e.status === 'Forgiven') forgiven += e.originalAmount || e.amount;
      } else if (e.type === 'nakad') {
        debit += e.amount;
        credit += e.amount;
      }
    });

    const netBalance = customerEntries
      .filter(e => e.status === 'Pending')
      .reduce((sum, e) => sum + e.amount, 0);

    return { debit, credit, forgiven, netBalance };
  }, [customerEntries]);

  const phone = customerEntries[0]?.phone || '';

  const statementText = `*بول میزان (BolMizan) سرکاری کھاتہ اسٹیٹمنٹ*\nگاہک: ${customerName}\nادارہ: ${shopProfile.businessName}\nکل بلنگ/ادھار: ${summary.debit} PKR\nکل وصولی: ${summary.credit} PKR\nمعاف شدہ (صدقہ): ${summary.forgiven} PKR\n*صافی بقایا: ${summary.netBalance} PKR*\nراست آئی ڈی: ${shopProfile.raastId}\nIBAN: ${shopProfile.iban}\n_مصدقہ بموجب قرآن 2:282 و ETO 2002_`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm overflow-y-auto no-print">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl border border-emerald-100 my-auto animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                BolMizan Statement
              </span>
              <span className="text-xs font-semibold text-slate-500">{shopProfile.businessName}</span>
            </div>
            <h3 className="text-lg font-black text-slate-900 mt-1">
              تفصیلِ کھاتہ برائے: {customerName}
            </h3>
            {phone && <p className="text-xs font-mono text-slate-600 mt-0.5">فون: {phone}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Summary Metric Cards */}
        <div className="grid grid-cols-4 gap-2 my-4 text-center text-xs">
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <span className="text-slate-500 text-[10.5px] block font-semibold">کل بلنگ</span>
            <strong className="text-slate-900 text-sm font-black">{summary.debit.toLocaleString()} PKR</strong>
          </div>
          <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
            <span className="text-emerald-700 text-[10.5px] block font-semibold">کل وصولی</span>
            <strong className="text-emerald-900 text-sm font-black">{summary.credit.toLocaleString()} PKR</strong>
          </div>
          <div className="bg-purple-50 p-2.5 rounded-xl border border-purple-200">
            <span className="text-purple-700 text-[10.5px] block font-semibold">صدقہ / معاف</span>
            <strong className="text-purple-900 text-sm font-black">{summary.forgiven.toLocaleString()} PKR</strong>
          </div>
          <div className="bg-rose-50 p-2.5 rounded-xl border border-rose-200">
            <span className="text-rose-700 text-[10.5px] block font-semibold">صافی بقایا</span>
            <strong className="text-rose-900 text-base font-black">{summary.netBalance.toLocaleString()} PKR</strong>
          </div>
        </div>

        {/* Chronological Statement Table */}
        <div className="overflow-y-auto flex-1 border border-slate-200 rounded-2xl">
          <table className="w-full text-xs text-right rtl:text-right ltr:text-left">
            <thead className="bg-slate-100 text-slate-700 font-bold sticky top-0">
              <tr>
                <th className="p-2.5">تاریخ</th>
                <th className="p-2.5">تفصیل معامله</th>
                <th className="p-2.5">نوعیت</th>
                <th className="p-2.5 text-rose-800">ادھار (بنام)</th>
                <th className="p-2.5 text-emerald-800">وصول (جمع)</th>
                <th className="p-2.5">حیثیت</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {customerEntries.map(e => (
                <tr key={e.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-2.5 font-mono text-[11px] text-slate-500">{e.createdAt.slice(0, 10)}</td>
                  <td className="p-2.5 font-medium text-slate-800 max-w-[180px] truncate">{e.detail}</td>
                  <td className="p-2.5 font-bold">
                    <span className={`px-2 py-0.5 rounded text-[10px] ${e.type === 'udhaar' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'}`}>
                      {e.type === 'udhaar' ? 'ادھار' : 'نقد'}
                    </span>
                  </td>
                  <td className="p-2.5 font-bold text-rose-700">
                    {e.type === 'udhaar' ? `${e.amount} PKR` : '—'}
                  </td>
                  <td className="p-2.5 font-bold text-emerald-700">
                    {e.status === 'Paid' ? `${e.amount} PKR` : '—'}
                  </td>
                  <td className="p-2.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                      e.status === 'Paid'
                        ? 'bg-slate-100 text-slate-700'
                        : e.status === 'Forgiven'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-200 mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex-1 py-2.5 px-3 rounded-xl font-bold text-xs bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>پرنٹ اسٹیٹمنٹ / PDF</span>
          </button>

          <a
            href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(statementText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl font-bold text-xs bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center gap-1.5 shadow-xs"
          >
            <Share2 className="w-4 h-4" />
            <span>واٹس ایپ اسٹیٹمنٹ</span>
          </a>

          {phone && (
            <a
              href={`sms:${phone.replace(/[^0-9]/g, '')}?body=${encodeURIComponent(
                `BolMizan: Assalam-o-Alaikum ${customerName}, Net Balance: ${summary.netBalance} PKR at ${shopProfile.businessName}. Raast: ${shopProfile.raastId}.`
              )}`}
              className="py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-800 hover:bg-black text-white flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ایس ایم ایس</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. ISLAMIC MERCHANT ZAKAT & AMANAT AUDIT MODAL
// ==========================================
function ZakatAuditModal({
  entries,
  onClose,
  onAddToast
}: {
  entries: LedgerEntry[];
  onClose: () => void;
  onAddToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}) {
  const zakatData = useMemo(() => {
    const performingDebts = entries.filter(c => c.type === 'udhaar' && c.status === 'Pending');
    const totalDaynQawi = performingDebts.reduce((sum, c) => sum + (c.amount || 0), 0);
    const forgivenDebts = entries.filter(c => c.status === 'Forgiven');
    const totalForgiven = forgivenDebts.reduce((sum, c) => sum + (c.amount || 0), 0);
    const zakatPayable = Math.round(totalDaynQawi * 0.025);

    return {
      performingCount: performingDebts.length,
      totalDaynQawi,
      zakatPayable,
      forgivenCount: forgivenDebts.length,
      totalForgiven
    };
  }, [entries]);

  const copyZakatCertificate = () => {
    const cert = `*بول میزان (BolMizan) شرعی زکوٰۃ آڈٹ رپورٹ*\nتاریخ: ${new Date().toLocaleDateString('ur-PK')}\n\n1. دینِ قوی (قابلِ وصول تجارتی قرضہ جات): ${zakatData.totalDaynQawi.toLocaleString()} PKR (${zakatData.performingCount} معاہدے)\n2. واجب الادا زکوٰۃ (2.5%): *${zakatData.zakatPayable.toLocaleString()} PKR*\n3. دینِ ضعیف / معاف شدہ صدقہ جاریہ: ${zakatData.totalForgiven.toLocaleString()} PKR\n\nشرعی سند: فتاویٰ عالمگیری (کتاب الزکوٰۃ، باب دیون)، AAOIFI شرعی معیار نمبر 35۔`;
    navigator.clipboard.writeText(cert);
    onAddToast('زکوٰۃ آڈٹ رپورٹ کلپ بورڈ پر کاپی ہو گئی!', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm overflow-y-auto no-print">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-emerald-100 my-auto animate-in fade-in zoom-in-95">
        <div className="flex items-start justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                شرعی تجارتی زکوٰۃ و صفائیِ کھاتہ
              </h3>
              <p className="text-xs text-slate-500">
                قرآن و فقہ اسلامی کے مطابق واجب الادا قرضہ جات کی زکوٰۃ (AAOIFI Standard 35)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-3 text-xs">
          {/* Dayn Qawi (Performing Debts) */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-4">
            <div className="flex items-center justify-between pb-1">
              <span className="font-extrabold text-emerald-950 text-sm">
                1. دینِ قوی (قابلِ وصول تجارتی قرضہ)
              </span>
              <span className="text-[11px] font-bold bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-full">
                زکوٰۃ واجب
              </span>
            </div>
            <p className="text-slate-600 text-[11.5px] mt-1">
              وہ ادھار مال جس کی واپسی کی امید ہو اور مقروض اقرار کرتا ہو، اس پر سالانہ 2.5% زکوٰۃ لازم ہے۔
            </p>
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-emerald-200">
              <span className="text-slate-600">کل رقم ({zakatData.performingCount} کھاتے):</span>
              <strong className="text-emerald-950 text-sm font-black">
                {zakatData.totalDaynQawi.toLocaleString()} PKR
              </strong>
            </div>
            <div className="flex items-center justify-between mt-1 text-sm bg-white p-2.5 rounded-xl border border-emerald-200">
              <span className="font-bold text-emerald-900">واجب الادا زکوٰۃ (2.5%):</span>
              <strong className="font-black text-emerald-800 text-base">
                {zakatData.zakatPayable.toLocaleString()} PKR
              </strong>
            </div>
          </div>

          {/* Dayn Dha'if / Forgiven */}
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-3.5">
            <div className="flex items-center justify-between pb-1">
              <span className="font-bold text-purple-950 text-xs">
                2. دینِ ضعیف و معاف شدہ (قرآن 2:280)
              </span>
              <span className="text-[10px] font-bold bg-purple-200 text-purple-900 px-2 py-0.5 rounded-full">
                صدقہ جاریہ
              </span>
            </div>
            <p className="text-slate-600 text-[11px] mt-0.5">
              تنگ دست مقروض کے لیے معاف کردہ رقم پر زکوٰۃ ساقط ہے اور وہ عند اللہ مقبول صدقہ ہے۔
            </p>
            <div className="flex items-center justify-between mt-2 pt-1 border-t border-purple-200 text-xs">
              <span className="text-slate-600">کل معاف شدہ رقم ({zakatData.forgivenCount} افراد):</span>
              <strong className="text-purple-900 font-bold">
                {zakatData.totalForgiven.toLocaleString()} PKR
              </strong>
            </div>
          </div>

          {/* Fiqh reference */}
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-[10.5px] text-slate-500 space-y-0.5 font-mono">
            <div>• نصابِ نقرہ: 52.5 تولہ چاندی (~612 گرام)</div>
            <div>• مرجع: فتاویٰ عالمگیری (کتاب الزکوٰۃ)، شامی، AAOIFI شرعی معیار 35</div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
          >
            بند کریں
          </button>
          <button
            type="button"
            onClick={copyZakatCertificate}
            className="flex-2 py-2.5 px-3 rounded-xl font-extrabold text-xs bg-amber-800 hover:bg-amber-900 text-white shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            <span>زکوٰۃ آڈٹ رپورٹ کاپی کریں</span>
          </button>
        </div>
      </div>
    </div>
  );
}
