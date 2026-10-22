import orbitImage from "../assets/projects/orbit.png";
import anibooImage from "../assets/projects/aniboo.png";
import moodboardImage from "../assets/projects/moodboard.png";
import { Languages } from "lucide-react";

const projects = [
    {
        id: 1,
        name: "Orbit",
        description: "Dashboard [...]",
        image: orbitImage,
        tags: ["html", "css", "javascript"],
        languages: [],
        status: "",
        demoUrl: "",
        repoUrl: "https://github.com/ranyanna/orbit-dashboard",
    },
    {
        id: 2,
        name: "Aniboo",
        description: "Aplicação de busca de anime que consome a API pública Jikan.",
        image: anibooImage,
        tags: ["api", "jikan", "css", "javascript"],
        languages: [],
        status: "",
        demoUrl: "",
        repoUrl: "https://github.com/ranyanna/anime-search",
    },
    {
        id: 3,
        name: "Moodboard",
        description: "Moodboard [...]",
        image: moodboardImage,
        tags: ["react"],
        languages: [],
        status: "em desenvolvimento",
        demoUrl: "",
        repoUrl: "https://github.com/ranyanna/moodboard-app",
    }
];

export default projects;