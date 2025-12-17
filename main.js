(function(){
  const app = document.getElementById("app");

  // Replace when live
  const KICKSTARTER_URL = "#";

  const sections = [
  { type: "image", src: "images/canva/01-hero.png", alt: "Hero" },
  { type: "image", src: "images/canva/02-problem.png", alt: "Problem" },
  { type: "image", src: "images/canva/03-meet.png", alt: "Meet PorchDrop" },

  // MOVE HOW IT WORKS HERE
  { type: "how", phone: "images/canva/07-how-phone.png" },

  { type: "image", src: "images/canva/04-delivery.png", alt: "Delivery is booming" },
  { type: "image", src: "images/canva/05-where.png", alt: "Where we are" },
  { type: "supporters", bg: "images/canva/06-tiers-bg.png" },
  { type: "testimonials" },
  { type: "image", src: "images/canva/09-join.png", alt: "Join the Movement" }
];


  const supporterTiers = [
    {
      title: "PorchDropper – $1.00 to $24.99",
      bullets: [
        "Support the PorchDrop mission at any amount from one dollar to twenty dollars",
        "Your name will appear on the PorchDroppers Wall as an early supporter"
      ]
    },
    {
      title: "Early Bird Classic – $25.00 (Limit 300)",
      bullets: [
        "One PorchDrop Classic",
        "Special early price for the first 300 backers"
      ]
    },
    {
      title: "PorchDrop Classic – $29.99",
      bullets: [
        "One PorchDrop Classic at full retail price"
      ]
    },
    {
      title: "Double Drop – $55.55",
      bullets: [
        "Two PorchDrop Classics",
        "Ideal for couples, roommates, or gifting a second to a friend"
      ]
    },
    {
      title: "Founders Circle – $500.00",
      bullets: [
        "Signed Founder’s Plaque",
        "20 percent discount on future PorchDrop products",
        "Your name added to the Founders Wall for permanent recognition",
        "Exclusive beta testing for new PorchDrop SKU's"
      ]
    }
  ];

  function makeImageSection(src, alt){
    const wrap = document.createElement("div");
    wrap.className = "wrap section";

    const card = document.createElement("div");
    card.className = "img-card";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt || "";

    card.appendChild(img);
    wrap.appendChild(card);
    return wrap;
  }

  function makeSupportersSection(bgSrc){
    const wrap = document.createElement("div");
    wrap.className = "wrap section";

    const shell = document.createElement("div");
    shell.className = "support-shell";

    // Background image area
    const bgWrap = document.createElement("div");
    bgWrap.className = "support-bg";

    const bgImg = document.createElement("img");
    bgImg.src = bgSrc;
    bgImg.alt = "Supporters background";
    bgWrap.appendChild(bgImg);

    // Overlay (desktop)
    const overlay = document.createElement("div");
    overlay.className = "support-overlay";

    const panel = document.createElement("div");
    panel.className = "support-panel";

    const head = document.createElement("h2");
    head.className = "support-head";
    head.innerHTML = `Be a Founding <span class="hi">Supporter</span>`;

    const sub = document.createElement("p");
    sub.className = "support-sub";
    sub.textContent = "Every homeowner deserves a better drop-off";

    panel.appendChild(head);
    panel.appendChild(sub);

    supporterTiers.forEach(t => {
      const card = document.createElement("div");
      card.className = "support-tier";

      const h = document.createElement("h4");
      h.textContent = t.title;

      const ul = document.createElement("ul");
      t.bullets.forEach(b => {
        const li = document.createElement("li");
        li.textContent = b;
        ul.appendChild(li);
      });

      card.appendChild(h);
      card.appendChild(ul);
      panel.appendChild(card);
    });

    overlay.appendChild(panel);
    bgWrap.appendChild(overlay);

    // Mobile fallback (stacked)
    const mobile = document.createElement("div");
    mobile.className = "support-mobile";
    mobile.innerHTML = `
      <h3>Be a Founding Supporter</h3>
      <p>Every homeowner deserves a better drop-off</p>
    `;

    supporterTiers.forEach(t => {
      const card = document.createElement("div");
      card.className = "support-tier";

      const h = document.createElement("h4");
      h.textContent = t.title;

      const ul = document.createElement("ul");
      t.bullets.forEach(b => {
        const li = document.createElement("li");
        li.textContent = b;
        ul.appendChild(li);
      });

      card.appendChild(h);
      card.appendChild(ul);
      mobile.appendChild(card);
    });

    // CTA (single button only)
    const cta = document.createElement("div");
    cta.className = "support-cta";

    const btn = document.createElement("a");
    btn.className = "btn";
    btn.href = KICKSTARTER_URL;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.textContent = "Support Manufacturing";

    const note = document.createElement("div");
    note.className = "small";
    note.textContent = "Replace KICKSTARTER_URL in main.js when your campaign is live.";

    cta.appendChild(btn);
    cta.appendChild(note);

    shell.appendChild(bgWrap);
    shell.appendChild(mobile);
    shell.appendChild(cta);

    wrap.appendChild(shell);
    return wrap;
  }

  function makeHowSection(phoneSrc){
    const wrap = document.createElement("div");
    wrap.className = "wrap section";

    const card = document.createElement("div");
    card.className = "how-card";

    const grid = document.createElement("div");
    grid.className = "how-grid";

    const left = document.createElement("div");
    left.className = "how-phone";
    const img = document.createElement("img");
    img.src = phoneSrc;
    img.alt = "PorchDrop on phone";
    left.appendChild(img);

    const right = document.createElement("div");

    const title = document.createElement("h2");
    title.className = "how-title";
    title.innerHTML = `How It <span>Works</span>`;
    right.appendChild(title);

    const steps = document.createElement("div");
    steps.className = "how-steps";

    const stepData = [
      { n: "1", html: `Delivery driver <span class="hi">places food</span> on PorchDrop` },
      { n: "2", html: `<span class="hi">Elevated</span>, stable surface keeps it clean` },
      { n: "3", html: `You retrieve your delivery the way it was meant <span class="hi">to be enjoyed</span>.` }
    ];

    stepData.forEach(s => {
      const row = document.createElement("div");
      row.className = "how-step";

      const bubble = document.createElement("div");
      bubble.className = "how-bubble";
      bubble.textContent = s.n;

      const text = document.createElement("div");
      text.className = "how-text";
      text.innerHTML = s.html;

      row.appendChild(bubble);
      row.appendChild(text);
      steps.appendChild(row);
    });

    right.appendChild(steps);

    const tagline = document.createElement("div");
    tagline.className = "how-tagline";
    tagline.innerHTML = `No <span class="hi">apps</span>. No <span class="hi">training</span>. No <span class="hi">hassle</span>.`;
    right.appendChild(tagline);

    grid.appendChild(left);
    grid.appendChild(right);

    card.appendChild(grid);
    wrap.appendChild(card);
    return wrap;
  }

  function makeTestimonialsSection(){
    const wrap = document.createElement("div");
    wrap.className = "wrap section";

    const band = document.createElement("div");
    band.className = "t-band";

    const header = document.createElement("div");
    header.className = "t-header";
    header.innerHTML = `Don't Just Take <span>Our</span> Word For It`;
    band.appendChild(header);

    const row = document.createElement("div");
    row.className = "t-row";

    const items = [
      { quote: "Finally! No more soggy takeout trays.", name: "Sarah H.", loc: "Miami, FL" },
      { quote: "It just makes deliveries better.", name: "Adam L.", loc: "Atlanta, GA" },
      { quote: "My groceries don't get swarmed by ants anymore.", name: "Jose C.", loc: "Scottsdale, AZ" }
    ];

    items.forEach(i => {
      const card = document.createElement("div");
      card.className = "t-card";

      const q = document.createElement("div");
      q.className = "t-quote";
      q.textContent = `“${i.quote}”`;

      const n = document.createElement("div");
      n.className = "t-name";
      n.textContent = i.name;

      const l = document.createElement("div");
      l.className = "t-loc";
      l.textContent = i.loc;

      card.appendChild(q);
      card.appendChild(n);
      card.appendChild(l);

      row.appendChild(card);
    });

    band.appendChild(row);
    wrap.appendChild(band);
    return wrap;
  }

  // Render loop
  sections.forEach(s => {
    if (s.type === "image") app.appendChild(makeImageSection(s.src, s.alt));
    if (s.type === "supporters") app.appendChild(makeSupportersSection(s.bg));
    if (s.type === "how") app.appendChild(makeHowSection(s.phone));
    if (s.type === "testimonials") app.appendChild(makeTestimonialsSection());
  });

})();
