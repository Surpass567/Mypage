// ============================================================
// 📌 在这里填写你的笔记数据
// ============================================================

const notesData = [
    {
        id: 1,
        icon: "🧠",
        title: "智能计算系统",
        date: "2026-07-10",
        desc: "智能计算系统概述、AI芯片基础、深度学习计算框架、硬件加速原理",
        pdf: "Notes/SIC.pdf"
    },
    {
        id: 2,
        icon: "🤖",
        title: "大模型先导课",
        date: "2026-07-15",
        desc: "大语言模型发展历程",
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