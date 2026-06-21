// Ik wil hierbij toevoegen dat ik een paar online websites heb gebruikt tijdens het maken
// van dit ts bestand i.v.m dat ik best slecht ben met typescript maar het toch wou toeveogen.
// Als er AI is gebruikt voor een deel zal dat erbij staan.

// Project data
var projects = [
    { title: "Portfolio website", desc: "Mijn eigen portfolio website gebouwd met HTML en CSS.", icon: "🖥️", tags: ["HTML", "CSS"] },
    { title: "Recepten app", desc: "Een simpele webapp om recepten te bekijken en op te slaan.", icon: "📱", tags: ["JavaScript", "HTML"] },
    { title: "Login pagina", desc: "Een oefening met formulieren en basisvalidatie.", icon: "🔐", tags: ["HTML", "CSS"] }
];
// ---- FUNCTIES ----
function toonProjecten() {
    var grid = document.getElementById('project-grid');
    if (!grid)
        return;
    grid.innerHTML = projects.map(function (p) { return "\n        <article class=\"Project-card\">\n            <div class=\"Project-image\" style=\"font-size:40px;padding:40px 20px;\">".concat(p.icon, "</div>\n            <h2>").concat(p.title, "</h2>\n            <p>").concat(p.desc, "</p>\n            <div>").concat(p.tags.map(function (t) { return "<span class=\"Project-tag\">".concat(t, "</span>"); }).join(''), "</div>\n            <button class=\"like\" data-title=\"").concat(p.title, "\" style=\"background:none;border:2px solid #c59c84;border-radius:50%;width:40px;height:40px;cursor:pointer;font-size:20px;margin-top:10px;\">\u2661</button>\n        </article>\n    "); }).join('');
    // m.b.v AI.
    document.querySelectorAll('.like').forEach(function (b) {
        b.addEventListener('click', function () {
            var btn = this;
            btn.textContent = btn.textContent === '♡' ? '❤️' : '♡';
            btn.style.transform = 'scale(1.3)';
            setTimeout(function () { return btn.style.transform = 'scale(1)'; }, 300);
            alert("\u2764\uFE0F Je vindt \"".concat(btn.dataset.title, "\" leuk!"));
        });
    });
}
function telBezoeker() {
    var bezoeken = Number(localStorage.getItem('bezoeken') || '0') + 1;
    localStorage.setItem('bezoeken', String(bezoeken));
    console.log("\uD83D\uDC4B Bezoek #".concat(bezoeken));
    var footer = document.querySelector('.Footer-copy');
    if (footer)
        footer.textContent += " | Bezoek #".concat(bezoeken);
}
function actieveLink() {
    var pagina = window.location.pathname.split('/').pop() || 'homepagina.html';
    document.querySelectorAll('.Nav a, .Footer-nav a').forEach(function (link) {
        if (link.getAttribute('href') === pagina)
            link.classList.add('active');
    });
}
actieveLink();
telBezoeker();
toonProjecten();
