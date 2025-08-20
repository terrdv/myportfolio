import '../css/ProjectsList.css'
import ProjectCard from './ProjectCard'

function ProjectsList({ projects }) {
    return (
        <div className="projects-list">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default ProjectsList
