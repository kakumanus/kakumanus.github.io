# [sujankakumanu.com](https://sujankakumanu.com)

Personal portfolio and professional showcase built with **Astro**, **Vue.js**, and **CSS**. This site is designed to be a high-performance, minimalist hub for my software engineering projects and academic background.

[Image of Astro Island Architecture]

## 🚀 Tech Stack

* **Framework:** [Astro](https://astro.build/)
* **Hybrid Components:** 
  * **Static UI:** Built with standard HTML/Astro components for instant loading.
  * **Interactive UI:** Built with [Vue.js 3](https://vuejs.org/) to handle state-driven interactions. Shout-out to my software engineering experience at JPMC!
* **Styling:** Custom CSS with a focus on typography and responsive grid layouts.
* **Deployment:** GitHub Actions to GitHub Pages.
* **Fonts:** IBM Plex Serif, IBM Plex Mono, and Inter.

## 📂 Project Structure.

Most of the code lives in the `/portfolio` subdirectory.

```text
/portfolio
├── src/
│   ├── assets/       # Images used in the website
│   ├── components/   
│   │   ├── layout/   # Layout related components (header, footer)
│   │   ├── sections/ # High level sections of the website
│   │   └── ui/       # Any components that exist within sections
│   ├── layouts/      # Base Astro layout, global styling
│   └── pages/        # Main routing (index.astro)
├── astro.config.mjs  # Configured with base: '/portfolio'
└── package.json      # Dependencies and build scripts
