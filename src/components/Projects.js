import projects from "../static/projects.json"

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="title-header">
                <h3 className='mb-10'>━━ Projects</h3>
            </div>
            
            <div className="project-cards-container">
                {projects && projects.map(({ title, description, tags, image, link }) => (
			    <ProjectCard
                    title={title}
                    description={description}
                    tags = {tags}
                    image={image}
                    link={link}
                    key={title}
                />
            ))}
            </div>
        </div>
    )
}

const ProjectCard = ({ title, description, tags, image, link }) => {
    console.log(process.env.PUBLIC_URL + image)
    return (<div className="project-card">
        <h4 className="mb-4">{title}</h4>
        <p className="mb-4">{description}</p>

      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
        </div>
        
        <div className="project-image">
            {image && <img src={process.env.PUBLIC_URL + image} alt={title} />}
        </div>
        {link && <a href={link} target="blank">
            <button className="view-project-btn">View project</button>
        </a>}
        
    </div>
    )
}

export default Projects;