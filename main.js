// ============================================================
// 📌 在这里填写你的笔记数据
// ============================================================

const notesData = [
    {
        id: 1,
        icon: "📘",
        title: "HTML & CSS 基础",
        date: "2026-07-10",
        desc: "HTML5语义化标签、CSS Flexbox/Grid布局、响应式设计核心知识。",
        pdf: "Notes/SIC.pdf"   // 🔁 替换为你的PDF文件名
    },
    {
        id: 2,
        icon: "⚡",
        title: "JavaScript 核心",
        date: "2026-07-15",
        desc: "ES6+ 语法、DOM 操作、事件处理、异步编程 (Promise/async)。",
        pdf: "Notes/LLM.pdf"
    }
];

// ============================================================
// 🖥️ 渲染笔记卡片
// ============================================================

function renderNotes() {
    const grid = document.getElementById('notesGrid');
    if (!grid) return;

    if (notesData.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px 0;color:#718096;">
                <p style="font-size:1.2rem;">📭 暂无笔记，请添加 <code>notesData</code> 数据</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = notesData.map(note => `
        <div class="note-card">
            <div class="icon">${note.icon}</div>
            <h3>${note.title}</h3>
            <div class="date">📅 ${note.date}</div>
            <p class="desc">${note.desc}</p>
            <a href="${note.pdf}" class="btn" target="_blank">📄 查看 PDF</a>
        </div>
    `).join('');
}

// ============================================================
// 🚀 页面加载后渲染
// ============================================================

document.addEventListener('DOMContentLoaded', renderNotes);