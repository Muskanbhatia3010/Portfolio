import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import FeaturedImage from './FeaturedImage'
import Skill from './Skill'
import '../assets/styles/component/_projectgallery.scss'

const ProjectGallery = () => {
    const restPath = restBase + 'projects?_embed' 
    const [restData, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
            }
        }
        fetchData()
    }, [restPath])
    return (     
      <section className='scroll-cards' id='projects'>
      {restData.map(project => (
        <article key={project.id}>
          {project.featured_media !== 0 && project._embedded && (
            <FeaturedImage featuredImageObject={project._embedded['wp:featuredmedia'][0]} />
          )}
          <h2>{project.title.rendered}</h2>
          <div className="project-skills">
            {project.acf.skill &&
            // project.acf.skill.map((skillId, index, arr) => (
            //     <span key={skillId} className="skill-item">
            //       <Skill skillId={skillId} />
            //       {index !== arr.length - 1 ? ', ' : ''}
            //     </span>
            project.acf.skill.map(skillId => (
                <Skill key={skillId} skillId={skillId} />
                
            ))}
        </div>

      </article>
      ))}
    </section>       
    )
}

export default ProjectGallery