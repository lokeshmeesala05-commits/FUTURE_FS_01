/* =============================================
   Portfolio — JavaScript
   ============================================= */

// ——————————— Portfolio Data ———————————
const DATA = {
  personal: {
    name: "Meesala Lokesh",
    initials: "ML",
    role: "Aspiring Full Stack Developer",
    tagline: "A passionate 2nd year B.Tech CSE student who loves building web applications and solving problems through code. Always eager to learn, create, and contribute to real-world projects.",
    email: "lokeshmeesala05@gmail.com",
    phone: "",
    location: "Visakhapatnam, Andhra Pradesh",
    resumeLink: "resume.html",
    github: "https://github.com/lokeshmeesala05-commits",
    linkedin: "https://www.linkedin.com/in/lokesh-meesala-612766330",
    codechef: "https://www.codechef.com/users/lokeshmeesala",
    leetcode: "https://leetcode.com/u/lokesh_meesala_05",
  },

  typewriterWords: [
    "CSE Student @ VIIT",
    "Aspiring Full Stack Developer",
    "Competitive Programmer",
    "React.js Learner",
    "Problem Solver",
  ],

  about: {
    summary: "I'm Meesala Lokesh, a 2nd year B.Tech Computer Science student at Vignan's Institute of Information Technology, Visakhapatnam. I'm passionate about full stack web development and competitive programming. I enjoy building projects that solve real problems and constantly push myself to learn new technologies and frameworks.",
    goals: "My goal is to become a skilled Full Stack Developer and contribute to impactful software products. I'm currently focused on strengthening my DSA fundamentals, mastering the MERN stack, and building projects that make a difference. I also aim to contribute to open-source and land a great internship!",
  },

  skills: [
    {
      category: "Programming",
      icon: "💻",
      description: "Core languages I code in",
      items: [
        { name: "C", icon: "🔧", level: 80 },
        { name: "Java", icon: "☕", level: 75 },
        { name: "Python", icon: "🐍", level: 72 },
        { name: "JavaScript (ES6+)", icon: "⚡", level: 78 },
      ],
    },
    {
      category: "Frontend",
      icon: "🎨",
      description: "Building beautiful UIs",
      items: [
        { name: "HTML5", icon: "📄", level: 88 },
        { name: "CSS3", icon: "🎨", level: 82 },
        { name: "React.js", icon: "⚛️", level: 5 },
      ],
    },
    {
      category: "Backend & Database",
      icon: "⚙️",
      description: "Server-side & data storage",
      items: [
        { name: "Node.js", icon: "🟢", level: 72 },
        { name: "Express.js", icon: "🚂", level: 70 },
        { name: "Supabase", icon: "⚡", level: 68 },
        { name: "MySQL", icon: "🐬", level: 72 },
        { name: "Git / GitHub", icon: "🔀", level: 78 },
      ],
    },
  ],

  projects: [
    {
      title: "CRM Pro — Full-Stack Application",
      description: "A production-ready Customer Relationship Management system featuring real-time authentication, lead management, and contact pipelines. Built with Node.js, React, and Supabase for high scalability.",
      tags: ["React.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS"],
      github: "https://github.com/lokeshmeesala05-commits/FUTURE_FS_02",
      live: "https://future-fs-02-h9a4yc1bu-lokeshmeesala05-commits-projects.vercel.app/",
      color: "linear-gradient(135deg, #6366f1, #a855f7)",
      image: "img/crm_project.png",
      icon: "💼",
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, professional, and fully responsive personal portfolio website. It showcases technical skills, projects, and achievements with a sleek dark-themed design and smooth animations.",
      tags: ["HTML5", "CSS3", "JavaScript", "FontAwesome"],
      github: "https://github.com/lokeshmeesala05-commits/FUTURE_FS_01",
      live: "https://lokeshmeesala05-commits.github.io/FUTURE_FS_01/",
      color: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
      image: "img/portfolio_project.png",
      icon: "💎",
    },
    {
      title: "PRABHU TAILORS Website",
      description: "A professional, modern, and mobile-friendly landing page for a local tailoring and clothing store. Features glassmorphism, scroll-triggered animations, and integrated contact options via Call and WhatsApp.",
      tags: ["HTML5", "CSS3", "JavaScript", "FontAwesome", "Google Fonts"],
      github: "https://github.com/lokeshmeesala05-commits/FUTURE_FS_03.git",
      live: "https://future-fs-03-six-nu.vercel.app/",
      color: "linear-gradient(135deg, #1e3a8a, #d4af37)",
      image: "img/tailoring_project.png",
      icon: "✂️",
    },
  ],

  education: [
    {
      date: "2024 — Present",
      title: "B.Tech — Computer Science & Engineering",
      company: "Vignan's Institute of Information Technology, Visakhapatnam",
      description: "Currently studying in 2nd year CSE.",
    },
    {
      date: "2022 — 2024",
      title: "Intermediate (MPC)",
      company: "SR Junior College, Gajuwaka",
      description: "Completed intermediate education in the MPC group with 96.8%.",
    },
    {
      date: "2021 — 2022",
      title: "Secondary School Certificate (SSC)",
      company: "Zilla Parishad High School, Islampeta",
      description: "Completed secondary education with 89%.",
    },
  ],

  academics: [
    {
      date: "B.Tech — 3rd Semester",
      title: "SGPA: 9.21",
      company: "Vignan's Institute of Information Technology",
      description: "",
    },
    {
      date: "B.Tech — 2nd Semester",
      title: "SGPA: 9.60",
      company: "Vignan's Institute of Information Technology",
      description: "",
    },
    {
      date: "B.Tech — 1st Semester",
      title: "SGPA: 9.41",
      company: "Vignan's Institute of Information Technology",
      description: "",
    },
  ],

  coding: [
    {
      date: "Present",
      title: "CodeChef",
      link: "https://www.codechef.com/users/lokeshmeesala",
      company: "Competitive Programming",
      description: "Active participant in coding contests, consistently solving complex algorithmic challenges.",
    },
    {
      date: "Present",
      title: "LeetCode",
      link: "https://leetcode.com/u/lokesh_meesala_05",
      company: "Data Structures & Algorithms",
      description: "Regularly practicing DSA problems to strengthen problem-solving logic and interview preparation.",
    },
  ],

  certificates: [
    { name: "HTML5", icon: "📄", file: "html.jpeg" },
    { name: "CSS3", icon: "🎨", file: "css.jpeg" },
    { name: "JavaScript Basic", icon: "⚡", file: "js1.jpeg" },
    { name: "JavaScript Advanced", icon: "🚀", file: "js2.jpeg" },
    { name: "Java Programming", icon: "☕", file: "java.jpeg" },
    { name: "Python Programming", icon: "🐍", file: "python.jpeg" },
    { name: "DBMS (SQL)", icon: "🐬", file: "dbms(sql).jpeg" },
    { name: "C Programming", icon: "🔧", file: "c.jpeg" },
  ],

  achievements: [
    { name: "Ignite Bootcamp — Wadhwani Foundation", icon: "🚀", file: "bootcamp_certificate.png", description: "Successfully completed the 'Idea to Plan' bootcamp, gaining skills in ideation, prototyping, and business modeling." },
    { name: "Yes+ Program", icon: "🌟", file: "yes+.jpeg", description: "Youth Empowerment and Skills Workshop" },
  ],

  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ],
};

// ——————————— Theme Manager ———————————
const ThemeManager = (() => {
  const STORAGE_KEY = "portfolio-theme";

  function get() {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  }

  function set(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateIcon(theme);
  }

  function updateIcon(theme) {
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function toggle() {
    set(get() === "dark" ? "light" : "dark");
  }

  function init() {
    set(get());
  }

  return { init, toggle };
})();

// ——————————— Typewriter ———————————
class Typewriter {
  constructor(el, words, opts = {}) {
    this.el = el;
    this.words = words;
    this.typeSpeed = opts.typeSpeed || 80;
    this.deleteSpeed = opts.deleteSpeed || 50;
    this.pauseTime = opts.pauseTime || 2000;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const current = this.words[this.wordIndex];
    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.el.textContent = current.substring(0, this.charIndex);

    let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === current.length) {
      delay = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      delay = 400;
    }

    setTimeout(() => this.tick(), delay);
  }
}

// ——————————— Scroll Reveal ———————————
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Animate skill bars within the revealed element
          const bars = entry.target.querySelectorAll(".skill-bar-fill");
          bars.forEach((bar) => {
            const level = bar.getAttribute("data-level");
            bar.style.width = level + "%";
          });
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ——————————— Active nav highlighting ———————————
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.3, rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'))}px 0px 0px 0px` }
  );

  sections.forEach((s) => observer.observe(s));
}

// ——————————— Navbar scroll effect ———————————
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });
}

// ——————————— Mobile Menu ———————————
function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    links.classList.toggle("open");
  });

  // Close menu on link click
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.classList.remove("active");
      links.classList.remove("open");
    });
  });
}

// ——————————— Contact Form ———————————
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      showFormStatus("Please fill in all fields.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFormStatus("Please enter a valid email address.", "error");
      return;
    }

    // Show loading state on button
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "⏳ Sending...";
    submitBtn.disabled = true;

    try {
      // 1. Create a free account at https://formspree.io/
      // 2. Create a new form and copy the endpoint URL they give you
      // 3. Paste it inside the quotes below:
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdprvlg";

      if (!FORMSPREE_ENDPOINT) {
        throw new Error("⚠️ Please add your Formspree URL in js/main.js to enable emails");
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        showFormStatus("Message sent successfully! I'll get back to you soon. 🎉", "success");
        form.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      showFormStatus(error.message.includes("Formspree URL") ? error.message : "Oops! There was a problem sending your message. Please try again.", "error");
    } finally {
      // Restore button state
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
      setTimeout(() => { if (status.className.includes("success")) status.className = "form-status"; }, 5000);
    }
  });

  function showFormStatus(msg, type) {
    status.textContent = msg;
    status.className = `form-status ${type}`;
  }
}

// ——————————— Render functions ———————————
function renderNavLinks() {
  const container = document.getElementById("navLinks");
  const linksHTML = DATA.navLinks
    .map((l) => `<a href="${l.href}">${l.label}</a>`)
    .join("");
  container.innerHTML =
    linksHTML +
    `<button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">🌙</button>`;
}

function renderAbout() {
  document.getElementById("aboutSummary").textContent = DATA.about.summary;
  document.getElementById("aboutGoals").textContent = DATA.about.goals;
}

function renderSkills() {
  const container = document.getElementById("skillsGrid");
  container.innerHTML = DATA.skills
    .map(
      (cat) => `
    <div class="skill-category reveal">
      <div class="skill-category-header">
        <div class="skill-category-icon">${cat.icon}</div>
        <div>
          <h3>${cat.category}</h3>
          <p>${cat.description}</p>
        </div>
      </div>
      ${cat.items
          .map(
            (s) => `
        <div class="skill-item">
          <div class="skill-icon">${s.icon}</div>
          <div class="skill-info">
            <div class="skill-name-row">
              <span class="skill-name">${s.name}</span>
              <span class="skill-percent">${s.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-bar-fill" data-level="${s.level}"></div>
            </div>
          </div>
        </div>`
          )
          .join("")}
    </div>`
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projectsGrid");
  container.innerHTML = DATA.projects
    .map(
      (p) => `
    <div class="project-card reveal">
      <div class="project-image" style="background: ${p.image ? `url(${p.image}) center/cover` : p.color}">
        ${p.image ? '' : `<div class="project-icon">${p.icon}</div>`}
        <div class="project-overlay">
          <a href="${p.github}" target="_blank" rel="noopener" aria-label="GitHub">🔗</a>
          <a href="${p.live}" target="_blank" rel="noopener" aria-label="Live Demo">🌐</a>
        </div>
      </div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">
          ${p.tags.map((t) => `<span>${t}</span>`).join("")}
        </div>
      </div>
    </div>`
    )
    .join("");
}

function renderResume() {
  const eduContainer = document.getElementById("educationTimeline");
  const acadContainer = document.getElementById("academicTimeline");
  const codingContainer = document.getElementById("codingTimeline");

  if (eduContainer) {
    eduContainer.innerHTML = DATA.education
      .map(
        (e) => `
      <div class="timeline-item reveal">
        <div class="date">${e.date}</div>
        <h4>${e.title}</h4>
        <div class="company">${e.company}</div>
        ${e.description ? `<p>${e.description}</p>` : ''}
      </div>`
      )
      .join("");
  }

  if (acadContainer) {
    acadContainer.innerHTML = DATA.academics
      .map(
        (e) => `
      <div class="timeline-item reveal">
        <div class="date">${e.date}</div>
        <h4>${e.title}</h4>
        <div class="company">${e.company}</div>
        ${e.description ? `<p>${e.description}</p>` : ''}
      </div>`
      )
      .join("");
  }

  if (codingContainer) {
    codingContainer.innerHTML = DATA.coding
      .map(
        (e) => `
      <div class="timeline-item reveal">
        <div class="date">${e.date}</div>
        <h4>${e.link ? `<a href="${e.link}" target="_blank" rel="noopener" class="timeline-link">${e.title} 🔗</a>` : e.title}</h4>
        <div class="company">${e.company}</div>
        ${e.description ? `<p>${e.description}</p>` : ''}
      </div>`
      )
      .join("");
  }
}

function renderCertificates() {
  const skillContainer = document.getElementById("skillCertificatesGrid");
  const achContainer = document.getElementById("achievementCertificatesGrid");

  if (skillContainer) {
    skillContainer.innerHTML = DATA.certificates
      .map(
        (c) => `
      <div class="cert-card reveal">
        <div class="cert-icon">${c.icon}</div>
        <div class="cert-info">
          <h4>${c.name}</h4>
          <a href="certificates/${c.file}" target="_blank" class="cert-link">View Certificate ↗</a>
        </div>
      </div>`
      )
      .join("");
  }

  if (achContainer) {
    achContainer.innerHTML = DATA.achievements
      .map(
        (a) => `
      <div class="cert-card reveal">
        <div class="cert-icon">${a.icon}</div>
        <div class="cert-info">
          <h4>${a.name}</h4>
          <p>${a.description}</p>
          <a href="certificates/${a.file}" target="_blank" class="cert-link">View Certificate ↗</a>
        </div>
      </div>`
      )
      .join("");
  }
}

// ——————————— Initialize Everything ———————————
document.addEventListener("DOMContentLoaded", () => {
  // Render dynamic content
  renderNavLinks();
  renderAbout();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderResume();

  // Set personal info
  document.getElementById("heroName").textContent = DATA.personal.name;
  document.getElementById("contactEmail").textContent = DATA.personal.email;
  document.getElementById("contactEmail").href = `mailto:${DATA.personal.email}`;
  document.getElementById("contactPhone").textContent = DATA.personal.phone;
  document.getElementById("contactLocation").textContent = DATA.personal.location;

  // Initialize features
  ThemeManager.init();
  document.getElementById("themeToggle").addEventListener("click", ThemeManager.toggle);
  new Typewriter(document.getElementById("typewriterText"), DATA.typewriterWords);
  initScrollReveal();
  initActiveNav();
  initNavbarScroll();
  initMobileMenu();
  initContactForm();
});
