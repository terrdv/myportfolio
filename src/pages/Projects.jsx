import ProjectsList from '../components/ProjectsList'
import '../css/Projects.css'

function Projects() {
    // Sample project data - you can replace this with your actual projects
    const projects = [
        {
            image: "/images/val.webp",
            title: "VCT Match Predictor",
            description: "A full-stack VCT match predictor built with React and Flask. Predictions use a random forest classification model trained on historical data.",
            url: "https://github.com/terrdv/VCT-Outcome-Predictor-Website",
            languages: [
                { name: "React", color: "#61dafb" },
                { name: "JavaScript", color: "#f7df1e" }, 
                { name: "CSS", color: "#1572b6" },
                { name: "HTML", color: "#e34f26" },
                { name: "Python", color: "#3776ab" },
                { name: "Flask", color: "#000000" }
            ]
        },
        {
            image: "/images/careerOS.png",
            title: "careerOS",
            description: "A full-stack JavaScript application with user authentication, resume analysis, mock interviews, and skill-based job recommendations. Powered by AWS Bedrock and built during the UBC CIC GenAI Summer Hackathon 2025",
            url: "https://github.com/terrdv/GenAI_CIC_Hackathon_CareerOS",
            languages: [
                { name: "React", color: "#61dafb" },
                { name: "JavaScript", color: "#f7df1e" },
                { name: "Node.js", color: "#339933" },
                { name: "Supabase", color: "#4db33d" },
                { name: "AWS", color: "#ff9900" },
                { name: "Express", color: "#000000" }
            ]
        },
        {
            image: "/images/eaea.webp",
            title: "Better Reviews",
            description: "Chrome extension that uses OpenAI API to analyze reviews of Amazon products and provide a summary of the product.",
            url: "https://github.com/terrdv/better_reviews",
            languages: [
                { name: "JavaScript", color: "#f7df1e" }, 
                { name: "CSS", color: "#1572b6" },
                { name: "HTML", color: "#e34f26" },
                { name: "OpenAI API", color: "#412991" }
            ]
        },
        {
            image: "/images/pp.webp",
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React. Features smooth navigation, project showcase, and clean design.",
            url: "https://github.com/terrdv/myportfolio",
            languages: [
                { name: "React", color: "#61dafb" },
                { name: "JavaScript", color: "#f7df1e" }, 
                { name: "CSS", color: "#1572b6" },
                { name: "HTML", color: "#e34f26" }
            ]
        }
    ]

    return (
        <div className="projects-page">
            <h1>My Projects</h1>
            <p className="projects-intro">
                Here are some of the projects I've worked on!
            </p>
            <ProjectsList projects={projects} />
        </div>
    )
}

export default Projects
