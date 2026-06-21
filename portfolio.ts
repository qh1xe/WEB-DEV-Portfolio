// Ik wil hierbij toevoegen dat ik een paar online websites heb gebruikt tijdens het maken
// van dit ts bestand i.v.m dat ik best slecht ben met typescript maar het toch wou toeveogen.
// Als er AI is gebruikt voor een deel zal dat erbij

// Project data
const projects = [
    { title: "Portfolio website", desc: "Mijn eigen portfolio website gebouwd met HTML en CSS.", icon: "🖥️", tags: ["HTML", "CSS"] },
    { title: "Recepten app", desc: "Een simpele webapp om recepten te bekijken en op te slaan.", icon: "📱", tags: ["JavaScript", "HTML"] },
    { title: "Login pagina", desc: "Een oefening met formulieren en basisvalidatie.", icon: "🔐", tags: ["HTML", "CSS"] }
];

// ---- FUNCTIES ----

function toonProjecten() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;
    
    grid.innerHTML = projects.map(p => `
        <article class="Project-card">
            <div class="Project-image" style="font-size:40px;padding:40px 20px;">${p.icon}</div>
            <h2>${p.title}</h2>
            <p>${p.desc}</p>
            <div>${p.tags.map(t => `<span class="Project-tag">${t}</span>`).join('')}</div>
            <button class="like" data-title="${p.title}" style="background:none;border:2px solid #c59c84;border-radius:50%;width:40px;height:40px;cursor:pointer;font-size:20px;margin-top:10px;">♡</button>
        </article>
    `).join('');

    // m.b.v AI.
    document.querySelectorAll('.like').forEach(b => {
        b.addEventListener('click', function() {
            const btn = this as HTMLButtonElement;
            btn.textContent = btn.textContent === '♡' ? '❤️' : '♡';
            btn.style.transform = 'scale(1.3)';
            setTimeout(() => btn.style.transform = 'scale(1)', 300);
            alert(`❤️ Je vindt "${btn.dataset.title}" leuk!`);
        });
    });
}

function telBezoeker() {
    let bezoeken = Number(localStorage.getItem('bezoeken') || '0') + 1;
    localStorage.setItem('bezoeken', String(bezoeken));
    console.log(`👋 Bezoek #${bezoeken}`);
    
    const footer = document.querySelector('.Footer-copy');
    if (footer) footer.textContent += ` | Bezoek #${bezoeken}`;
}

function actieveLink() {
    const pagina = window.location.pathname.split('/').pop() || 'homepagina.html';
    document.querySelectorAll('.Nav a, .Footer-nav a').forEach(link => {
        if (link.getAttribute('href') === pagina) link.classList.add('active');
    });
}


actieveLink();
telBezoeker();
toonProjecten();