import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { restBase } from '../utilities/Utilities';
import ACFImage from '../components/ACFImage';
import Skill from '../components/Skill';
import '../assets/styles/component/_projectpage.scss'

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [carouselImage, setCarouselImage] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`${restBase}projects/${id}?_embed`);
      const data = await res.json();
      setProject(data);

      // Fetch first carousel image if available
      if (data.acf?.project_carousel_images?.length > 0) {
        const imageId = data.acf.project_carousel_images[0];
        const imageRes = await fetch(`${restBase}media/${imageId}`);
        if (imageRes.ok) {
          const imageData = await imageRes.json();
          setCarouselImage({
            url: imageData.source_url,
            alt: imageData.alt_text
          });
        }
      }
    };

    fetchProject();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <section className="project-page">
      <h2 className='Project-name'>{project.title.rendered}</h2>
     <div className="project-info">
        {carouselImage && <ACFImage className='Project-image' image={carouselImage} />}
      <div className='project-description'>
          <p>{project.acf?.shortdescription}</p>
    
          <div className="project-skills">
            {project.acf.skill && project.acf.skill.map(skillId => (
              <Skill key={skillId} skillId={skillId} />
            ))}
          </div>
      </div>
     </div>
      <h3 className='desctription-heading'>Overview</h3>
      <div className='project-text' dangerouslySetInnerHTML={{ __html: project.acf?.overview }}></div>
      <h3 className='desctription-heading'>Challenges</h3>
      <div className='project-text'  dangerouslySetInnerHTML={{ __html: project.acf?.challenges }}></div>
      <h3 className='desctription-heading'>Learning</h3>
      <div id='learning' dangerouslySetInnerHTML={{ __html: project.acf?.learning }}></div>

      <a href={project.acf?.link} target="_blank" rel="noopener noreferrer">Live Project</a>
    </section>
  );
};

export default ProjectPage;
