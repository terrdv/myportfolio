import '../css/ProjectCard.css'
import LanguageTag from './LanguageTag'

function ProjectCard({ project }) {
    const { image, title, description, languages } = project

    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-languages">
                    {languages.map((lang, index) => (
                        <LanguageTag 
                            key={index}
                            language={lang.name} 
                            color={lang.color} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
