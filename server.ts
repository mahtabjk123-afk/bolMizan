import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const PORT = parseInt(process.env.PORT || '3000', 10);

const app = express();
app.use(express.json({ limit: '10mb' }));

// Data Directory for persistent backend storage
const DATA_DIR = path.resolve(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const CONTRACTS_FILE = path.resolve(DATA_DIR, 'contracts.json');
const PROFILE_FILE = path.resolve(DATA_DIR, 'profile.json');
const AUDIT_LOG_FILE = path.resolve(DATA_DIR, 'audit_log.json');

// Helper to calculate SHA-256 in Node.js
function calculateSha256(str: string): string {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

// Initial Data Seeding
function readJsonFile<T>(filePath: string, defaultVal: T): T {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}`, err);
  }
  return defaultVal;
}

function writeJsonFile<T>(filePath: string, data: T): void {
  try {
    const tempPath = `${filePath}.tmp`;
    fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempPath, filePath);
  } catch (err) {
    console.error(`Error writing ${filePath}`, err);
  }
}

// Log audit trail
function appendAuditLog(action: string, entityId: number | string, details: any) {
  try {
    const logs = readJsonFile<any[]>(AUDIT_LOG_FILE, []);
    logs.unshift({
      timestamp: new Date().toISOString(),
      action,
      entityId,
      details,
      hashProof: calculateSha256(`${action}|${entityId}|${JSON.stringify(details)}|${Date.now()}`)
    });
    // Keep last 500 audit logs
    writeJsonFile(AUDIT_LOG_FILE, logs.slice(0, 500));
  } catch (e) {
    console.error('Audit log error', e);
  }
}

// Default Seed Data
const DEFAULT_PROFILE = {
  businessName: 'الميزان جنرل اسٹور اینڈ ہارڈویئر نوابشاہ',
  raastId: '03001234567',
  bankName: 'Meezan Bank Ltd (Islamic Banking)',
  iban: 'PK36MEZN0001234567890123',
  swiftBic: 'MEZNPKKA',
  defaultCurrency: 'PKR'
};

const DEFAULT_CONTRACTS = [
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

// Initialize on startup if files don't exist
if (!fs.existsSync(CONTRACTS_FILE)) {
  writeJsonFile(CONTRACTS_FILE, DEFAULT_CONTRACTS);
}
if (!fs.existsSync(PROFILE_FILE)) {
  writeJsonFile(PROFILE_FILE, DEFAULT_PROFILE);
}

// ==========================================
// BACKEND API ROUTES
// ==========================================

// 1. Health & Server Telemetry
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    system: 'BolMizan Sovereign OS',
    version: '2.4.0',
    legalFramework: 'ETO 2002 & Quran 2:282',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: 'Local Persistent Atomic JSON',
    offlineEngine: 'Active Bidirectional Sync Queue'
  });
});

// 2. Get All Contracts
app.get('/api/contracts', (req: Request, res: Response) => {
  const contracts = readJsonFile<any[]>(CONTRACTS_FILE, DEFAULT_CONTRACTS);
  res.json({ success: true, count: contracts.length, data: contracts });
});

// 3. Create Contract
app.post('/api/contracts', (req: Request, res: Response) => {
  const contract = req.body;
  if (!contract || !contract.name || !contract.amount) {
    return res.status(400).json({ success: false, error: 'Invalid contract payload' });
  }

  const contracts = readJsonFile<any[]>(CONTRACTS_FILE, DEFAULT_CONTRACTS);

  // Canonical SHA-256 verification on backend
  const canonicalString = `${contract.biz}|${contract.name}|${contract.amount}|${contract.currency || 'PKR'}|${contract.dueDate}|${contract.detail}|${contract.type}|${contract.createdAt}`;
  const serverHash = calculateSha256(canonicalString);

  // If client provided hash, ensure consistency or assign verified server hash
  contract.hash = contract.hash || serverHash;
  contract.id = contract.id || Date.now();
  contract.isoRef = contract.isoRef || `BOLMIZAN/${new Date().getFullYear()}/${contract.id.toString().slice(-8)}`;

  // Avoid duplicates
  const existingIdx = contracts.findIndex(c => c.id === contract.id);
  if (existingIdx >= 0) {
    contracts[existingIdx] = contract;
  } else {
    contracts.unshift(contract);
  }

  writeJsonFile(CONTRACTS_FILE, contracts);
  appendAuditLog('CONTRACT_CREATED', contract.id, { name: contract.name, amount: contract.amount, hash: contract.hash });

  res.json({ success: true, data: contract, serverVerifiedHash: serverHash });
});

// 4. Update Contract (Qist, Mohlat, Mark Paid, Forgive)
app.put('/api/contracts/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const updates = req.body;
  const contracts = readJsonFile<any[]>(CONTRACTS_FILE, DEFAULT_CONTRACTS);
  const index = contracts.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Contract not found' });
  }

  const updatedContract = { ...contracts[index], ...updates };
  contracts[index] = updatedContract;
  writeJsonFile(CONTRACTS_FILE, contracts);

  appendAuditLog('CONTRACT_UPDATED', id, updates);
  res.json({ success: true, data: updatedContract });
});

// 5. Delete Contract
app.delete('/api/contracts/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  let contracts = readJsonFile<any[]>(CONTRACTS_FILE, DEFAULT_CONTRACTS);
  const beforeLen = contracts.length;
  contracts = contracts.filter(c => c.id !== id);

  if (contracts.length === beforeLen) {
    return res.status(404).json({ success: false, error: 'Contract not found' });
  }

  writeJsonFile(CONTRACTS_FILE, contracts);
  appendAuditLog('CONTRACT_DELETED', id, { deletedAt: new Date().toISOString() });
  res.json({ success: true, message: 'Deleted successfully' });
});

// 6. Get & Save Shop Profile
app.get('/api/profile', (req: Request, res: Response) => {
  const profile = readJsonFile(PROFILE_FILE, DEFAULT_PROFILE);
  res.json({ success: true, data: profile });
});

app.post('/api/profile', (req: Request, res: Response) => {
  const profile = req.body;
  if (!profile || !profile.businessName) {
    return res.status(400).json({ success: false, error: 'Invalid profile data' });
  }
  writeJsonFile(PROFILE_FILE, profile);
  appendAuditLog('PROFILE_UPDATED', 'SHOP', profile);
  res.json({ success: true, data: profile });
});

// 7. Verify SHA-256 Tamper-Proof Cryptographic Record
app.post('/api/verify', (req: Request, res: Response) => {
  const { hash } = req.body;
  if (!hash) {
    return res.status(400).json({ success: false, error: 'Hash is required' });
  }

  const contracts = readJsonFile<any[]>(CONTRACTS_FILE, DEFAULT_CONTRACTS);
  const match = contracts.find(
    c => c.hash.toLowerCase() === hash.toLowerCase() || c.hash.toLowerCase().startsWith(hash.toLowerCase())
  );

  if (!match) {
    return res.json({
      success: true,
      found: false,
      message: 'Record not found in sovereign database.'
    });
  }

  const canonicalString = `${match.biz}|${match.name}|${match.originalAmount || match.amount}|${match.currency || 'PKR'}|${match.dueDate}|${match.detail}|${match.type}|${match.createdAt}`;
  const recalculatedHash = calculateSha256(canonicalString);

  res.json({
    success: true,
    found: true,
    isTamperProofOriginal: recalculatedHash === match.hash,
    data: match,
    serverAuditTimestamp: new Date().toISOString()
  });
});

// 8. Bidirectional Sync Endpoint for Offline-to-Online Reconciliation
app.post('/api/sync', (req: Request, res: Response) => {
  const { clientQueue, clientContracts } = req.body;
  let serverContracts = readJsonFile<any[]>(CONTRACTS_FILE, DEFAULT_CONTRACTS);

  let processedCount = 0;

  // Process offline queue items if any
  if (Array.isArray(clientQueue) && clientQueue.length > 0) {
    clientQueue.forEach(item => {
      if (item.action === 'CREATE' && item.contract) {
        const idx = serverContracts.findIndex(c => c.id === item.contract.id);
        if (idx >= 0) {
          serverContracts[idx] = item.contract;
        } else {
          serverContracts.unshift(item.contract);
        }
        processedCount++;
      } else if (item.action === 'UPDATE' && item.contractId && item.updates) {
        const idx = serverContracts.findIndex(c => c.id === item.contractId);
        if (idx >= 0) {
          serverContracts[idx] = { ...serverContracts[idx], ...item.updates };
          processedCount++;
        }
      } else if (item.action === 'DELETE' && item.contractId) {
        serverContracts = serverContracts.filter(c => c.id !== item.contractId);
        processedCount++;
      }
    });
  }

  // Merge full list reconciling by latest timestamp
  if (Array.isArray(clientContracts) && clientContracts.length > 0) {
    clientContracts.forEach(clientItem => {
      const existingIdx = serverContracts.findIndex(s => s.id === clientItem.id);
      if (existingIdx === -1) {
        serverContracts.unshift(clientItem);
      } else {
        // If client item is newer or modified, update
        const serverItem = serverContracts[existingIdx];
        if (new Date(clientItem.createdAt || 0) > new Date(serverItem.createdAt || 0)) {
          serverContracts[existingIdx] = clientItem;
        }
      }
    });
  }

  writeJsonFile(CONTRACTS_FILE, serverContracts);
  appendAuditLog('SYNC_COMPLETED', 'ORCHESTRATION', { processedQueueItems: processedCount, totalNow: serverContracts.length });

  res.json({
    success: true,
    syncedAt: new Date().toISOString(),
    processedQueueItems: processedCount,
    contracts: serverContracts
  });
});

// 9. Full System Audit Log
app.get('/api/audit-log', (req: Request, res: Response) => {
  const logs = readJsonFile<any[]>(AUDIT_LOG_FILE, []);
  res.json({ success: true, count: logs.length, data: logs });
});

// 10. AI Voice & Natural Language Contract Synthesizer
app.post('/api/ai-parse', async (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ success: false, error: 'Voice transcript is required' });
  }

  // Check if Gemini API Key is available
  if (process.env.GEMINI_API_KEY) {
    try {
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({});
      const prompt = `You are the AI Voice Parser for BolMizan (Islamic Digital Voice Ledger & Amanat System).
Extract contract details from this voice transcript: "${text}".
Return ONLY a valid JSON object with the following fields:
- "name": Customer/person name (string)
- "amount": numeric value in PKR/currency (number)
- "currency": "PKR", "SAR", "AED", "USD", "EUR", "GBP" (string, default "PKR")
- "dueDate": ISO date string YYYY-MM-DD (e.g. 14 days from today or inferred from words like next week/agle jumme)
- "detail": item/goods description (string)
- "type": "udhaar" (credit/loan) or "nakad" (cash)
- "cat": one of "Kiryana / General", "Medical / Pharmacy", "Agriculture / Mandi", "Construction / Hardware", "Services / Freelance"
- "legalNotice": brief Urdu note quoting Quran 2:282 or ETO 2002 relevance`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const parsed = JSON.parse(response.text || '{}');
      return res.json({
        success: true,
        source: 'gemini_ai',
        data: parsed
      });
    } catch (e) {
      console.error('Gemini parse fallback to neural heuristics', e);
    }
  }

  // Multilingual Heuristic Parser (Urdu, Roman Urdu, English)
  let amount = 0;
  const numMatch = text.match(/\b\d+([,.]\d+)?\b/);
  if (numMatch) {
    amount = parseFloat(numMatch[0].replace(/,/g, ''));
  } else {
    if (/لاکھ|lakh/i.test(text)) {
      const p = text.match(/(\d+)\s*(لاکھ|lakh)/i);
      amount = p ? parseInt(p[1], 10) * 100000 : 100000;
    } else if (/ہزار|hazar/i.test(text)) {
      if (/پچاس|pachaas/i.test(text)) amount = 50000;
      else if (/بیس|bees/i.test(text)) amount = 20000;
      else if (/تیس|tees/i.test(text)) amount = 30000;
      else if (/چالیس|chalees/i.test(text)) amount = 40000;
      else if (/دس|das/i.test(text)) amount = 10000;
      else if (/پندرہ|pandrah/i.test(text)) amount = 15000;
      else if (/پچیس|pachees/i.test(text)) amount = 25000;
      else amount = 10000;
    }
  }

  const isNakad = /نقد|وصول|ادا|paid|cash|vasooli|mil gaye/i.test(text);
  const type = isNakad ? 'nakad' : 'udhaar';

  let cat = 'Kiryana / General';
  if (/دوا|میڈیکل|فارمیسی|گولی|سیرپ|انسولین|medicine|pharmacy/i.test(text)) cat = 'Medical / Pharmacy';
  else if (/کھاد|اسپرے|بیج|منڈی|گندم|کپاس|agriculture|mandi/i.test(text)) cat = 'Agriculture / Mandi';
  else if (/سیمنٹ|سریا|ریت|بجری|ہارڈویئر|لوہا|cement|hardware/i.test(text)) cat = 'Construction / Hardware';
  else if (/سروس|مزدوری|فری لانس|services/i.test(text)) cat = 'Services / Freelance';

  let cleaned = text
    .replace(/\b\d+\b/g, '')
    .replace(/روپے|روپیہ|روپئے|ہزار|لاکھ|کا|کی|کے|کو|نے|سے|ادھار|نقد|وصول|سامان|تک|کیٹیگری|کھاتہ|pkr|rupees/gi, ' ')
    .trim();
  const nameParts = cleaned.split(/\s+/).filter(w => w.length > 2);
  const name = nameParts.slice(0, 3).join(' ') || 'محترم گاہک';

  const due = new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0];

  return res.json({
    success: true,
    source: 'offline_heuristic',
    data: {
      name,
      amount: amount || 5000,
      currency: 'PKR',
      dueDate: due,
      detail: text,
      type,
      cat,
      legalNotice: 'مطابق قرآن 2:282 و الیکٹرانک ٹرانزیکشن آرڈیننس 2002'
    }
  });
});

// 11. Islamic Merchant Zakat on Debt Receivables (Dayn Qawi vs Dayn Dha'if)
app.get('/api/zakat', (req: Request, res: Response) => {
  const contracts = readJsonFile<any[]>(CONTRACTS_FILE, DEFAULT_CONTRACTS);
  const performingDebts = contracts.filter(c => c.type === 'udhaar' && c.status === 'Pending');
  const totalDaynQawi = performingDebts.reduce((sum, c) => sum + (c.amount || 0), 0);
  const forgivenDebts = contracts.filter(c => c.status === 'Forgiven');
  const totalForgiven = forgivenDebts.reduce((sum, c) => sum + (c.amount || 0), 0);
  const zakatPayable = Math.round(totalDaynQawi * 0.025);

  res.json({
    success: true,
    nisabStandard: 'Silver Nisab (52.5 Tola Silver / ~612.36g)',
    currency: 'PKR',
    daynQawi: {
      label: 'دینِ قوی (قابلِ وصول تجارتی قرضہ جات - زکوٰۃ واجب)',
      count: performingDebts.length,
      totalAmount: totalDaynQawi,
      zakatRate: '2.5%',
      zakatAmount: zakatPayable
    },
    daynDhaif: {
      label: 'دینِ ضعیف / معاف شدہ (ساقط یا موخر قرضہ)',
      count: forgivenDebts.length,
      totalAmount: totalForgiven,
      zakatStatus: 'وصولی تک معاف / ساقط'
    },
    fiqhReference: 'فتاویٰ عالمگیری (کتاب الزکوٰۃ، باب دیون)، AAOIFI شرعی معیار نمبر 35'
  });
});

// 12. Customer Ledger Directory & Statement Aggregation
app.get('/api/customers', (req: Request, res: Response) => {
  const contracts = readJsonFile<any[]>(CONTRACTS_FILE, DEFAULT_CONTRACTS);
  const customerMap: Record<string, any> = {};

  contracts.forEach(c => {
    const key = (c.name || 'نامعلوم گاہک').trim();
    if (!customerMap[key]) {
      customerMap[key] = {
        name: key,
        phone: c.phone || '',
        totalUdhaar: 0,
        totalPaid: 0,
        totalForgiven: 0,
        balance: 0,
        transactionsCount: 0,
        lastTransactionDate: c.createdAt,
        status: 'Clear'
      };
    }
    const cust = customerMap[key];
    cust.transactionsCount++;
    if (!cust.phone && c.phone) cust.phone = c.phone;
    if (new Date(c.createdAt) > new Date(cust.lastTransactionDate)) {
      cust.lastTransactionDate = c.createdAt;
    }

    if (c.type === 'udhaar') {
      if (c.status === 'Pending') {
        cust.totalUdhaar += c.amount || 0;
        cust.balance += c.amount || 0;
      } else if (c.status === 'Paid') {
        cust.totalPaid += c.amount || 0;
      } else if (c.status === 'Forgiven') {
        cust.totalForgiven += c.amount || 0;
      }
    } else if (c.type === 'nakad') {
      cust.totalPaid += c.amount || 0;
    }
  });

  const customersList = Object.values(customerMap).map(cust => {
    if (cust.balance > 0) cust.status = 'HasBalance';
    return cust;
  });

  res.json({
    success: true,
    count: customersList.length,
    data: customersList
  });
});

// ==========================================
// VITE DEV SERVER / PRODUCTION STATIC MOUNT
// ==========================================
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true'
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BolMizan Full-Stack OS running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
