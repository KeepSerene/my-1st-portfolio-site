const projects = [
  {
    title: "VoxNavi",
    imageSrc: "/projects/vox-navi-home.png",
    liveLink: "https://vox-navi.vercel.app/",
    githubLink:
      "https://github.com/KeepSerene/vox-navi-ai-interview-prep-next-app",
    description:
      "Practice interviews with an AI voice assistant. Get personalized feedback and improve your skills.",
  },
  {
    title: "WeatherVue",
    imageSrc: "/projects/weather-vue-app.png",
    liveLink: "https://climate-click.netlify.app/",
    githubLink: "https://github.com/KeepSerene/WeatherVue_App",
    description:
      "Responsive weather application using HTML, CSS, JavaScript, OpenWeatherMap API.",
  },
  {
    title: "NoteKeeper (CRUD)",
    imageSrc: "/projects/note-keeper-app.png",
    liveLink: "https://note-sphere.netlify.app/",
    githubLink: "https://github.com/KeepSerene/CRUD-NoteKeeper-JS",
    description:
      "Responsive note-keeping app with CRUD operations and localStorage.",
  },
  {
    title: "Cadence",
    imageSrc: "/projects/cadence-app.png",
    liveLink: "https://cadence-theta.vercel.app/",
    githubLink: "https://github.com/KeepSerene/music-player-js",
    description:
      "Responsive music player with play, pause, shuffle, and repeat features.",
  },
  {
    title: "SynthVani",
    imageSrc: "/projects/synth-vani.png",
    liveLink: "https://synth-vani.vercel.app/",
    githubLink: "https://github.com/KeepSerene/synth-vani-ai-chat-site",
    description:
      "SynthVani is a modern, responsive AI chat application powered by Google's Gemini API.",
  },
  {
    title: "ZenKaryaX",
    imageSrc: "/projects/zen-karya-x.png",
    liveLink: "https://zen-karya-x.vercel.app/",
    githubLink:
      "https://github.com/KeepSerene/zen-karya-ai-task-todo-site/tree/main",
    description:
      "Streamline your workflow with AI-powered task management. Create projects, set due dates, and generate task lists automatically.",
  },
  {
    title: "InstantNXT",
    imageSrc: "/projects/instant-nxt.png",
    liveLink: "https://instant-nxt.vercel.app/",
    githubLink:
      "https://github.com/KeepSerene/instant-nxt-real-time-chat-app-next15",
    description:
      "Real-time chat application with NextJS, Convex database, and Shancn/UI.",
  },
  {
    title: "ReactMate",
    imageSrc: "/projects/react-mate.png",
    liveLink: "https://react-mate-seven.vercel.app/",
    githubLink: "https://github.com/KeepSerene/react-mate",
    description: "Responsive chess game application with React.js and Vite.",
  },
  {
    title: "BlockView",
    imageSrc: "/projects/block-view.png",
    liveLink: "https://block-view-delta.vercel.app/",
    githubLink: "https://github.com/KeepSerene/crypto-screener-react-site",
    description:
      "Track cryptocurrency prices, trends, and market data in real-time. Built using React.js with Vite, Lodash, and Recharts.",
  },
  {
    title: "MarkView Pro",
    imageSrc: "/projects/mark-view-pro.png",
    liveLink: "https://mark-view-pro.vercel.app/",
    githubLink:
      "https://github.com/KeepSerene/in-browser-markdown-editor-fem-react",
    description:
      "A responsive Markdown editor with live previews, custom themes, autosave, and document management. Built for accessibility and local storage security.",
  },
  {
    title: "PhraseFox",
    imageSrc: "/projects/phrase-fox.png",
    liveLink: "https://phrase-fox-alpha.vercel.app/",
    githubLink: "https://github.com/KeepSerene/dictionary-web-app-react",
    description:
      "A modern dictionary app offering word definitions, synonyms, antonyms, phonetics, and audio playback with theme and font customization.",
  },
  {
    title: "GeoTracker",
    imageSrc: "/projects/geo-tracker-home.png",
    liveLink: "https://geo-tracker-kappa.vercel.app/",
    githubLink: "https://github.com/KeepSerene/ip-address-tracker-fem",
    description:
      "A React app to track IPs and domains, display geolocation on maps, and provide details like city, timezone, and ISP with API rate limiting.",
  },
  {
    title: "NestBudget",
    imageSrc: "/projects/nest-budget-app.png",
    liveLink: "https://nest-budget-two.vercel.app/",
    githubLink: "https://github.com/KeepSerene/nest-budget",
    description:
      "Responsive home budgeting app using React.js and localStorage.",
  },
  {
    title: "DevHire Hub",
    imageSrc: "/projects/dev-hire-hub.png",
    liveLink: "https://dev-hire-hub.vercel.app/",
    githubLink: "https://github.com/KeepSerene/dev-hire-hub-react-site",
    description: "Responsive job board application with full CRUD operations.",
  },
  {
    title: "EnigmaticEnigma",
    imageSrc: "/projects/enigma-python-app.png",
    githubLink: "https://github.com/KeepSerene/enigmatic-enigma",
    description:
      "Enigma machine simulator in Python using Pygame and OOP principles.",
  },
];

export default function renderProjects() {
  const generateProjectsHTML = (projects) => {
    const projectsWrapperEl = document.querySelector("[data-projects-wrapper]");

    projects.forEach((project, index) => {
      const projectHTMLStr = `
              <section class="projects__card">
                  <div class="projects__img-wrapper">
                    <img
                      src="${project.imageSrc}"
                      alt="Project ${index + 1}"
                      loading="lazy"
                      class="projects__img"
                    />
      
                    ${
                      project.liveLink
                        ? `<a
                      href="${project.liveLink}"
                      target="_blank"
                      class="projects__btn btn"
                      title="Visit site"
                    >
                      <i
                        class="ri-arrow-right-up-line"
                        aria-label="Click to visit the live site"
                      ></i>
                    </a>`
                        : ""
                    }
                  </div>
      
                  <div class="projects__content">
                    <h3 class="projects__subtitle">${
                      project.liveLink ? "Website" : "Python App"
                    }</h3>
      
                    <h2 class="projects__title">${project.title}</h2>
      
                    <p class="projects__description">
                      ${project.description}
                    </p>
                  </div>
      
                  <div class="projects__action-btns">
                    <a
                      href=${project.githubLink}
                      target="_blank"
                      class="projects__link"
                    >
                      <i class="ri-github-line" aria-label="Click to view code"></i>
                      View Code
                    </a>
                  </div>
                </section>
              `;

      projectsWrapperEl.insertAdjacentHTML("beforeend", projectHTMLStr);
    });
  };

  generateProjectsHTML(projects);
}
