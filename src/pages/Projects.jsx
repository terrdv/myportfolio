import ProjectsList from '../components/ProjectsList'
import '../css/Projects.css'

function Projects() {
    // Sample project data - you can replace this with your actual projects
    const projects = [
        {
            image: "/images/val.webp",
            title: "VCT Match Predictor",
            description: "A full-stack VCT match predictor built with React and Vite. Features smooth navigation, project showcase, and clean design.",
            url: "https://github.com/terrdv/VCT-Outcome-Predictor-Website",
            languages: [
                { name: "React", color: "red" },
                { name: "JavaScript", color: "green" }, 
                { name: "CSS", color: "#1572b6" },
                { name: "HTML", color: "#e34f26" },
                { name: "Python", color: "blue" },
                { name: "Flask", color: "grey" }
            ]
        },
        {
            image: "/images/careerOS.png",
            title: "careerOS",
            description: "A full-stack career management application with user authentication, resume analysis, mock interviews, and skill-based job recommendations.",
            url: "https://github.com/terrdv/GenAI_CIC_Hackathon_CareerOS",
            languages: [
                { name: "Node.js", color: "green" },
                { name: "Express", color: "black" },
                { name: "Supabase", color: "#4db33d" },
                { name: "React", color: "red" },
                { name: "AWS", color: "orange" }
            ]
        },
        {
            image: "/images/pp.webp",
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React and Vite. Features smooth navigation, project showcase, and clean design.",
            url: "https://github.com/terrdv/myportfolio",
            languages: [
                { name: "React", color: "red" },
                { name: "JavaScript", color: "green" }, 
                { name: "CSS", color: "#1572b6" },
                { name: "HTML", color: "#e34f26" }
            ]
        }
    ]

    return (
        <div className="projects-page">
            <h1>My Projects</h1>
            <p className="projects-intro">
                Here are some of the projects I've worked on. Each one represents different skills and technologies I've learned along the way.
            </p>
            <ProjectsList projects={projects} />
        </div>
    )
}

export default Projects
