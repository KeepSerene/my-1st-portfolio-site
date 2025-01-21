const projects = [
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
    title: "BreezeTalk",
    imageSrc: "/projects/breeze-talk-chat-app.png",
    liveLink: "https://breeze-talk-chat-react.web.app/",
    githubLink:
      "https://github.com/KeepSerene/breeze-talk-react-firebase-chat-app",
    description:
      "Real-time desktop chat application with React, Firebase, and Zustand.",
  },
  {
    title: "ReactMate",
    imageSrc: "/projects/react-mate.png",
    liveLink: "https://react-mate-seven.vercel.app/",
    githubLink: "https://github.com/KeepSerene/react-mate",
    description: "Responsive chess game application with React.js and Vite.",
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
