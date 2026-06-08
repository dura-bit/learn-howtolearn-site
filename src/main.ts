import './style.css';

// ============================================
// Types
// ============================================

interface ResourceLink {
  label: string;
  url: string;
  type: 'video' | 'article' | 'community' | 'tool';
}

interface ApiGroup {
  title: string;
  required: boolean;
  links: ResourceLink[];
}

interface TaskItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  paidExtra?: string;
  links?: ResourceLink[];
  apiGroups?: ApiGroup[];
  videoDuration?: string;
}

interface Section {
  id: string;
  level: string;
  title: string;
  description: string;
  icon: string;
  tasks: TaskItem[];
}

interface Level2Resource {
  icon: string;
  title: string;
  desc: string;
  url: string;
}

// ============================================
// Data：國考學習大本營
// ============================================

const LEVEL_0: Section = {
  id: 'level-0',
  level: 'LEVEL 0',
  title: '備考地圖與基礎架構',
  description: '先建立你的備考全局觀、讀書節奏與申論題基本答題骨架，避免一開始就用錯力。',
  icon: '🛠️',
  tasks: [
    {
  id: 'exam-map',
  title: '建立你的國考上榜地圖',
  subtitle: '先知道自己要怎麼走，才不會一直原地努力',
  description: '盤點考科、考試期程、每日可用時間與目前程度，建立一份清楚可執行的備考路線圖。',
  videoDuration: '05:00',
  links: [
    {
      label: '📌 直播前必看 ５ 分鐘｜請點我',
      url: 'https://youtu.be/pN3oKnhkFPQ',
      type: 'video',
    },
  ],
},
    {
  id: 'essay-structure-basic',
  title: '申論題基本架構：破題、爭點、涵攝、結論',
  subtitle: '申論題不是想到什麼寫什麼，而是用架構穩定輸出',
  description: '建立申論題的基本答題骨架，理解如何從題目抓出考點，並用清楚層次寫出可被閱卷者理解的答案。',
  videoDuration: '05:00',
  links: [
    {
      label: '📌 直播前必看 ５ 分鐘｜請點我',
      url: 'https://youtu.be/LRgBggrZ1M4',
      type: 'video',
    },
  ],
},
    {
      id: 'study-rhythm',
      title: '建立每日讀書節奏與複習循環',
      description: '把「讀新進度、複習舊內容、練習申論題」放進固定週期，讓備考變成可累積的系統。',
    },
    {
      id: 'mistake-review',
      title: '錯題與弱點回收機制',
      description: '建立錯題紀錄、常錯考點與答題盲點清單，讓每一次失誤都能轉化成下一次得分。',
    },
  ],
};

const LEVEL_1: Section = {
  id: 'level-1',
  level: 'LEVEL 1',
  title: '申論題高分實戰模板',
  description: '進入正式申論訓練，透過模板化、拆題、考點整理與輸出練習，建立穩定拿分能力。',
  icon: '🚀',
  tasks: [
    {
      id: 'knowledge-organizer',
      title: '申論題知識整理器',
      subtitle: '⭐ 新手優先：先把素材庫建立起來',
      description: '將法條、概念、案例、時事與老師補充整理成可快速取用的答題素材庫，減少考前找不到資料的焦慮。',
      paidExtra: '適合用在行政法、憲法、民法、刑法、公共政策等需要大量概念整合的科目。',
      links: [],
    },
    {
      id: 'issue-spotting',
      title: '考點辨識與拆題訓練',
      subtitle: '看懂題目，才寫得出高分答案',
      description: '練習從題幹中抓出爭點、關鍵字與命題方向，避免明明讀過卻寫偏題。',
      paidExtra: '每一題都要先拆題再作答，讓你的答案更貼近閱卷老師想看的重點。',
    },
    {
      id: 'answer-template',
      title: '高分答題模板輸出訓練',
      subtitle: '把腦中知識變成卷面分數',
      description: '使用固定段落與標題層次，把「我知道」轉換成「閱卷者看得懂、願意給分」的答案。',
      links: [],
    },
    {
      id: 'current-affairs',
      title: '時事申論素材整理系統',
      subtitle: '把新聞與政策轉成考場可用素材',
      description: '針對時事、政策、重大判決與社會議題，整理成背景、爭點、正反論述與可引用金句。',
    },
    {
      id: 'correction-system',
      title: '申論批改與修正系統',
      subtitle: '真正進步，來自改答案而不是只看答案',
      description: '建立自我批改表，檢查是否有破題不清、架構混亂、涵攝不足、結論薄弱等問題。',
      paidExtra: '每次練題後保留修正版，累積自己的高分答案資料庫。',
    },
  ],
};

const LEVEL_2: Section = {
  id: 'level-2',
  level: 'LEVEL 2',
  title: '心智轉化與上榜加速',
  description: '當方法建立後，接下來要處理的是持續力、穩定度與考前輸出狀態。',
  icon: '💎',
  tasks: [
    {
  id: 'mindset-reset',
  title: '考前焦慮與自我懷疑重建',
  description: '辨識「我是不是考不上」背後的內在小聲音，將焦慮轉化成可執行的讀書行動。',
  videoDuration: '40:00',
  links: [
    {
      label: '🚀 差 0.2 分落榜後，他沒有放棄｜請點我',
      url: 'https://youtu.be/NcBQNbVptsw',
      type: 'video',
    },
  ],
},
    {
      id: 'exam-sprint',
      title: '考前 30 天衝刺節奏',
      description: '建立考前複習、練題、背誦與作息安排，讓最後一個月不是崩潰，而是穩定輸出。',
    },
    {
      id: 'weekly-review',
      title: '每週讀書復盤與進度修正',
      description: '用每週一次的回顧，確認哪些科目有推進、哪些題型卡住、下週要優先解決什麼。',
    },
  ],
};

const LEVEL_2_RESOURCES: Level2Resource[] = [
  {
    icon: '📖',
    title: '申論自學筆記系統',
    desc: '用一套固定格式整理法條、考點、架構、口訣與延伸題型。',
    url: '#',
  },
  {
    icon: '🧭',
    title: '2026 上榜計畫資源盤點',
    desc: '盤點時間、能力、資源與目前弱點，建立自己的上榜計畫。',
    url: '#',
  },
];

const SECTIONS: Section[] = [LEVEL_0, LEVEL_1, LEVEL_2];

// ============================================
// LocalStorage
// ============================================

const STORAGE_PROGRESS = 'yushi-exam-progress';
const STORAGE_THEME = 'yushi-exam-theme';
const STORAGE_TIMER = 'yushi-exam-timer';
const STORAGE_INTRO_WATCHED = 'yushi-exam-intro-watched';

function loadProgress(): Set<string> {
  try {
    const data = localStorage.getItem(STORAGE_PROGRESS);
    if (data) return new Set(JSON.parse(data));
  } catch {
    // ignore
  }
  return new Set();
}

function saveProgress(completed: Set<string>): void {
  localStorage.setItem(STORAGE_PROGRESS, JSON.stringify([...completed]));
}

// ============================================
// Theme
// ============================================

function loadTheme(): string {
  return localStorage.getItem(STORAGE_THEME) || document.documentElement.getAttribute('data-theme') || 'dark';
}

function applyTheme(theme: string): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_THEME, theme);

  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');

  if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
  if (label) label.textContent = theme === 'dark' ? '深色模式' : '淺色模式';
}

function setupThemeToggle(): void {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ============================================
// Learning Timer
// ============================================

function loadTimerSeconds(): number {
  try {
    return parseInt(localStorage.getItem(STORAGE_TIMER) || '0', 10);
  } catch {
    return 0;
  }
}

function saveTimerSeconds(seconds: number): void {
  localStorage.setItem(STORAGE_TIMER, String(seconds));
}

function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
}

function startTimer(): void {
  let seconds = loadTimerSeconds();
  const display = document.getElementById('timer-display');

  if (display) display.textContent = formatTime(seconds);

  setInterval(() => {
    seconds += 1;
    saveTimerSeconds(seconds);
    if (display) display.textContent = formatTime(seconds);
  }, 1000);
}

// ============================================
// Progress
// ============================================

let completedTasks = loadProgress();

function getAllTaskIds(): string[] {
  return SECTIONS.flatMap(section => section.tasks.map(task => task.id));
}

function updateProgressUI(): void {
  const allIds = getAllTaskIds();
  const total = allIds.length;
  const done = allIds.filter(id => completedTasks.has(id)).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  const bar = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');

  if (bar) bar.style.width = `${pct}%`;
  if (text) text.textContent = `${done} / ${total} 已完成`;

  document.querySelectorAll('.nav-item[data-task-id]').forEach(el => {
    const id = el.getAttribute('data-task-id');
    if (!id) return;

    el.classList.toggle('completed', completedTasks.has(id));

    const check = el.querySelector('.nav-check');
    if (check) check.textContent = completedTasks.has(id) ? '✓' : '';
  });

  document.querySelectorAll('.task-card[data-task-id]').forEach(el => {
    const id = el.getAttribute('data-task-id');
    if (!id) return;

    el.classList.toggle('completed', completedTasks.has(id));

    const checkbox = el.querySelector('.task-checkbox');
    if (checkbox) {
      checkbox.classList.toggle('checked', completedTasks.has(id));
      checkbox.textContent = completedTasks.has(id) ? '✓' : '';
    }
  });
}

function toggleTask(taskId: string): void {
  if (completedTasks.has(taskId)) {
    completedTasks.delete(taskId);
  } else {
    completedTasks.add(taskId);
  }

  saveProgress(completedTasks);
  updateProgressUI();
}

// ============================================
// Render Helpers
// ============================================

function renderLink(link: ResourceLink): string {
  return `<a class="resource-link ${link.type}" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`;
}

function renderApiGroups(groups: ApiGroup[]): string {
  return groups.map(group => `
    <div class="api-group">
      <div class="api-group-title ${group.required ? 'required' : 'optional'}">${group.title}</div>
      <div class="resource-links">${group.links.map(renderLink).join('')}</div>
    </div>
  `).join('');
}

// ============================================
// Sidebar
// ============================================

function renderSidebarNav(): void {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;

  let html = `
    <div class="nav-item" data-scroll-to="site-intro">
      <span class="nav-check" style="border:none;">📌</span>
      <span>學習站使用說明</span>
    </div>
    <div class="nav-item" data-scroll-to="product-intro">
      <span class="nav-check" style="border:none;">🎓</span>
      <span>課程與訓練介紹</span>
    </div>
  `;

  for (const section of SECTIONS) {
    html += `<div class="nav-section-title">${section.icon} ${section.level} — ${section.title}</div>`;

    for (const task of section.tasks) {
      const done = completedTasks.has(task.id);

      html += `
        <div class="nav-item ${done ? 'completed' : ''}" data-task-id="${task.id}" data-section="${section.id}">
          <span class="nav-check">${done ? '✓' : ''}</span>
          <span>${task.title}</span>
        </div>
      `;
    }

    if (section.id === 'level-2') {
      for (let i = 0; i < LEVEL_2_RESOURCES.length; i += 1) {
        const resource = LEVEL_2_RESOURCES[i];

        html += `
          <div class="nav-item" data-scroll-to="level2-res-${i}">
            <span class="nav-check" style="border:none;">${resource.icon}</span>
            <span>${resource.title}</span>
          </div>
        `;
      }
    }
  }

  nav.innerHTML = html;

  nav.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const scrollTo = item.getAttribute('data-scroll-to');
      const taskId = item.getAttribute('data-task-id');
      const sectionId = item.getAttribute('data-section');

      let target: Element | null = null;

      if (scrollTo) {
        target = document.getElementById(scrollTo);
      } else if (taskId) {
        target = document.querySelector(`.task-card[data-task-id="${taskId}"]`);
      } else if (sectionId) {
        target = document.getElementById(sectionId);
      }

      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      document.getElementById('sidebar')?.classList.remove('open');
      document.getElementById('sidebar-overlay')?.classList.remove('open');
    });
  });
}

// ============================================
// Main Content
// ============================================

function renderMainContent(): void {
  const app = document.getElementById('app');
  if (!app) return;

  let html = '';

  html += `
    <div class="brand-hero" id="site-intro">
      <div class="brand-hero-badge">🎯 快速上榜 × 成長轉變</div>
      <h1 class="brand-hero-title">羽試國考培育學院｜國考學習大本營</h1>
      <p class="brand-hero-subtitle">
        從備考策略、申論題架構到心智轉化，<br>
        建立屬於你的<strong>高效上榜系統</strong>
      </p>
      <p class="brand-hero-desc">
        這不是只叫你更努力，而是陪你把努力變成方法、節奏與分數。
      </p>

      <div class="brand-stats">
        <div class="stat-item">
          <div class="stat-icon">📚</div>
          <div class="stat-value">${getAllTaskIds().length} 個</div>
          <div class="stat-label">學習任務</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">✍️</div>
          <div class="stat-value">申論題</div>
          <div class="stat-label">核心訓練</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">🌱</div>
          <div class="stat-value">心智</div>
          <div class="stat-label">穩定成長</div>
        </div>
      </div>
    </div>
  `;

  html += `
    <div class="features-grid">
      <div class="feature-card">
        <span class="feature-icon">🧭</span>
        <h3>建立備考方向</h3>
        <p>先盤點目標、考科、時間與弱點，避免只是一直讀，卻不知道自己離上榜還差什麼。</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">✍️</span>
        <h3>訓練申論輸出</h3>
        <p>透過固定架構、拆題與答題模板，把腦中的知識轉換成卷面上的分數。</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🌱</span>
        <h3>穩住心智狀態</h3>
        <p>處理焦慮、拖延與自我懷疑，建立可以持續走下去的備考節奏。</p>
      </div>
    </div>
  `;

  html += `
    <div class="steps-flow">
      <div class="steps-flow-header">
        <div class="steps-flow-title">📋 一套從混亂備考到穩定上榜的完整系統</div>
      </div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>建立上榜戰略地圖</h4>
            <p>確認目標、科目、時間與弱點，建立可執行的讀書方向。</p>
          </div>
        </div>
        <div class="step-connector"></div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>訓練申論高分輸出</h4>
            <p>用模板、拆題與批改機制，建立穩定輸出能力。</p>
          </div>
        </div>
        <div class="step-connector"></div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>啟動心智與衝刺系統</h4>
            <p>透過復盤、修正與衝刺計畫，穩定走到考場。</p>
          </div>
        </div>
      </div>
    </div>
  `;

  html += `
    <div class="newbie-booster-card">
      <div class="booster-header">
        <span class="booster-badge">🔥 考生信心充能站</span>
        <h3 class="booster-title">你不是不夠努力，你只是需要一套更科學的學習方法</h3>
        <p class="booster-subtitle">
          當你有策略、有架構、有復盤機制，讀書就不再只是硬撐，而會開始變成可累積的上榜系統。
        </p>
      </div>
      <div class="booster-content-grid">
        <div class="booster-highlights">
          <div class="highlight-item">
            <span class="highlight-icon">🎯</span>
            <div class="highlight-text">
              <h4>從混亂變清楚</h4>
              <p>先建立備考地圖，知道每一科的定位、進度與弱點。</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="highlight-icon">✍️</span>
            <div class="highlight-text">
              <h4>從會讀變會寫</h4>
              <p>透過申論題模板，把知識轉換成卷面可得分的答案。</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="highlight-icon">🌱</span>
            <div class="highlight-text">
              <h4>從焦慮變穩定</h4>
              <p>用復盤與心智轉化，陪你在備考後期仍能穩住節奏。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  html += `
    <div class="info-banner">
      <div class="info-text">
        📢 這個學習站適合正在準備國考、想改善申論題、讀書容易卡關，或希望建立完整備考系統的你。<br>
        你可以依照左側導航逐步完成任務，完成後打勾，系統會自動記錄你的進度。
      </div>

      <div class="cta-actions">
        <a class="cta-btn primary"
           href="https://event.webinarjam.com/72ml11/register/v8n722t7"
           target="_blank"
           rel="noopener">
           🚀 立即預約免費上榜講座
        </a>
       <a class="cta-btn secondary"
           href="https://www.instagram.com/vegelady1314?igsh=MWJ3dmczY2t0MWM3Ng%3D%3D&utm_source=qr"
           target="_blank"
           rel="noopener">
           🟠 Vegelady 
        </a>
        <a class="cta-btn secondary"
           href="https://vegelady.com/story/"
           target="_blank"
           rel="noopener">
           📖 我的上榜故事
        </a>

        <a class="cta-btn secondary"
           href="https://www.facebook.com/share/14imkBgSJ7Y/?mibextid=wwXIfr"
           target="_blank"
           rel="noopener">
           📘 Facebook
        </a>

        <a class="cta-btn secondary"
           href="https://youtube.com/@vegelady1314?si=GzOU4XAhcXmx8gLH"
           target="_blank"
           rel="noopener">
           ▶️ YouTube
        </a>
      </div>
    </div>
  `;

  html += `
    <div class="tip-box">
      <div class="tip-title">💡 小提醒</div>
      完成的項目可以打勾，進度會自動儲存在你的瀏覽器。建議按照 Level 0 → Level 1 → Level 2 的順序進行。本站進度記錄於你的瀏覽器本機，建議固定使用同一台電腦觀看。
    </div>
  `;

  html += `
    <div class="product-intro" id="product-intro">
      <div class="product-intro-header">
        <h2>🎓 快速上榜 × 成長轉變訓練介紹</h2>
        <p class="product-intro-subtitle">不是只教你多讀一點，而是協助你建立能上榜的讀書與輸出系統。</p>
        <p class="product-intro-desc">這套訓練結合備考策略、申論題架構、時間管理、復盤機制與心智轉化，幫助考生從「努力但混亂」走向「穩定而有效」。</p>
        <p class="product-intro-desc">你會學到如何安排讀書節奏、如何拆解申論題、如何建立自己的答題模板，以及如何在焦慮和自我懷疑中重新穩住方向。</p>
      </div>

      <div class="product-templates">
        <h3>🛠️ 五大核心訓練模組</h3>
        <div class="template-showcase">
          <div class="template-item">
            <div class="template-icon">🧭</div>
            <h4>備考戰略地圖</h4>
            <p>盤點目標、考科、時間與弱點，設計你的個人上榜路線。</p>
          </div>
          <div class="template-item">
            <div class="template-icon">📚</div>
            <h4>知識整理系統</h4>
            <p>把法條、概念、案例與時事整理成可直接拿來答題的素材。</p>
          </div>
          <div class="template-item">
            <div class="template-icon">✍️</div>
            <h4>申論答題模板</h4>
            <p>建立破題、爭點、涵攝、結論的穩定輸出結構。</p>
          </div>
          <div class="template-item">
            <div class="template-icon">🔁</div>
            <h4>錯題復盤機制</h4>
            <p>把每一次寫錯、寫偏、寫不完整，都變成下一次進步的線索。</p>
          </div>
          <div class="template-item">
            <div class="template-icon">🧠</div>
            <h4>心智轉化訓練</h4>
            <p>處理備考焦慮、自我懷疑與拖延，建立穩定前進的內在狀態。</p>
          </div>
        </div>
      </div>
    </div>
  `;

  for (const section of SECTIONS) {
    html += `
      <hr class="section-divider" />
      <div class="section-heading" id="${section.id}">
        <span class="level-badge">${section.icon} ${section.level}</span>
        <h2>${section.title}</h2>
        <p class="section-desc">${section.description}</p>
      </div>
    `;

    for (const task of section.tasks) {
      const done = completedTasks.has(task.id);
      const linksHtml = task.links?.length
        ? `<div class="resource-links">${task.links.map(renderLink).join('')}</div>`
        : '';
      const apiHtml = task.apiGroups?.length ? renderApiGroups(task.apiGroups) : '';
      const subtitleHtml = task.subtitle ? `<div class="task-subtitle">${task.subtitle}</div>` : '';
      const paidExtraHtml = task.paidExtra
        ? `<div class="task-paid-extra"><span class="paid-extra-badge">✨ 上榜訓練重點</span>${task.paidExtra}</div>`
        : '';
      const durationHtml = task.videoDuration
        ? `<span class="task-duration-badge">⏱️ ${task.videoDuration}</span>`
        : '';

      html += `
        <div class="task-card ${done ? 'completed' : ''}" data-task-id="${task.id}">
          <div class="task-header">
            <div class="task-checkbox ${done ? 'checked' : ''}" data-task-id="${task.id}">${done ? '✓' : ''}</div>
            <div class="task-title">
              ${task.title}
              ${durationHtml}
            </div>
          </div>
          ${subtitleHtml}
          <div class="task-desc">${task.description}</div>
          ${paidExtraHtml}
          ${linksHtml}
          ${apiHtml}
        </div>
      `;
    }

    if (section.id === 'level-2') {
      html += `<div class="resource-card-list">`;

      for (let i = 0; i < LEVEL_2_RESOURCES.length; i += 1) {
        const resource = LEVEL_2_RESOURCES[i];

        html += `
          <a class="resource-card" id="level2-res-${i}" href="${resource.url}" target="_blank" rel="noopener">
            <span class="rc-icon">${resource.icon}</span>
            <div class="rc-info">
              <h4>${resource.title}</h4>
              <p>${resource.desc}</p>
            </div>
          </a>
        `;
      }

      html += `</div>`;
    }
  }

  html += `
    <hr class="section-divider" />
    <div class="footer-cta-area">
      <div class="cta-card community">
        <h3>🙋 想要更快進入狀態？</h3>
        <p>如果你正在準備國考，但覺得方向混亂、申論題卡關、讀書效率不穩，可以從這裡開始建立自己的備考系統。</p>
        <p class="community-highlight">💬 把讀書變成系統，把焦慮變成行動，把努力轉成分數。</p>
        <div class="cta-actions">
          <a class="cta-btn primary"
             href="https://event.webinarjam.com/72ml11/register/v8n722t7"
             target="_blank"
             rel="noopener">
             🚀 立即預約免費上榜講座
          </a>

          <a class="cta-btn secondary"
             href="https://vegelady.com/story/"
             target="_blank"
             rel="noopener">
             👩‍🏫 我的上榜故事
          </a>
        </div>
      </div>

        <div class="cta-card newsletter">
        <h3>📨 持續接收學習資源</h3>
        <p>後續若有國考備考、申論題、學習策略或心智轉化資源，可以透過官方頁面追蹤更新。</p>
        <a class="cta-btn primary" href="https://lin.ee/WzqLYzk" target="_blank" rel="noopener"> 💬 加入官方 LINE</a>
      </div>

      <div class="copyright-notice">
        © 2026 羽試國考培育學院｜覓蔬小姐。本站內容由本學院原創整理，僅供個人備考學習使用。未經授權，不得轉載、改作、重製，或作為商業課程、廣告素材與教學內容使用。
      </div>
    </div>
  `;

  app.innerHTML = html;

  app.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', event => {
      event.stopPropagation();
      const taskId = (checkbox as HTMLElement).getAttribute('data-task-id');
      if (taskId) toggleTask(taskId);
    });
  });
}

// ============================================
// Mobile Sidebar
// ============================================

function setupMobileSidebar(): void {
  const toggle = document.getElementById('mobile-nav-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (!toggle || !sidebar || !overlay) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}



// ============================================
// Intro Modal
// ============================================

function isFirstVisit(): boolean {
  return localStorage.getItem(STORAGE_INTRO_WATCHED) !== '1';
}

function showIntroModal(): void {
  const backdrop = document.createElement('div');
  backdrop.className = 'intro-modal-backdrop';
  backdrop.innerHTML = `
    <div class="intro-modal-card">
      <div class="intro-modal-header">
        <span class="intro-modal-emoji">🎯</span>
        <h2>歡迎來到國考學習大本營</h2>
        <p>這裡會陪你從備考策略、申論題架構到心智轉化，建立一套能持續累積的上榜系統。</p>
      </div>
      <div class="intro-modal-actions">
        <button class="intro-modal-btn primary" id="intro-watch-btn">開始學習</button>
        <button class="intro-modal-btn secondary" id="intro-skip-btn">稍後再看</button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);
  requestAnimationFrame(() => backdrop.classList.add('visible'));

  const close = () => {
    localStorage.setItem(STORAGE_INTRO_WATCHED, '1');
    backdrop.classList.remove('visible');
    setTimeout(() => backdrop.remove(), 300);
  };

  backdrop.querySelector('#intro-watch-btn')?.addEventListener('click', close);
  backdrop.querySelector('#intro-skip-btn')?.addEventListener('click', close);

  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) close();
  });
}

function checkFirstVisit(): void {
  if (isFirstVisit()) {
    setTimeout(showIntroModal, 800);
  }
}

// ============================================
// Init
// ============================================

function init(): void {
  applyTheme(loadTheme());
  setupThemeToggle();
  startTimer();
  renderSidebarNav();
  renderMainContent();
  updateProgressUI();
  setupMobileSidebar();
  checkFirstVisit();
}

document.addEventListener('DOMContentLoaded', init);
