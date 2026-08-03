const notesData = [
    {
        id: 1,
        icon: "🧠",
        title: "智能计算系统",
        date: "2026-08-03",
        desc: "更新至第四章",
        pdf: "Notes/SIC.pdf"
    },
    {
        id: 2,
        icon: "🤖",
        title: "大模型先导课",
        date: "2026-07-17",
        desc: "更新至第二章",
        pdf: "Notes/LLM.pdf"
    },
    {
        id: 3,
        icon: "🔬",
        title: "智能计算系统实验日志",
        date: "2026-07-22",
        desc: "更新至第二章",
        pdf: "Notes/EXP.pdf"
    }
];

const grid = document.getElementById('notesGrid');

notesData.forEach((note, index) => {
    const card = document.createElement('a');
    card.className = 'note-card';
    card.href = note.pdf;
    card.target = '_blank';
    card.style.animationDelay = `${index * 0.06}s`;

    card.innerHTML = `
        <div class="icon">${note.icon}</div>
        <h3>${note.title}</h3>
        <div class="meta">📅 ${note.date}</div>
        <p class="desc">${note.desc}</p>
    `;

    grid.appendChild(card);
});