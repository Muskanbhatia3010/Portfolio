import { useState, useEffect } from 'react';
import { restBase } from '../utilities/Utilities';
import FeaturedImage from './FeaturedImage';
import Skill from './Skill';
import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import '../assets/styles/component/_projectgallery.scss';

const ProjectGallery = () => {
  const restPath = restBase + 'projects?_embed';
  const [restData, setData] = useState([]);
  const navigate = useNavigate();
  const featuredProjectId = 87;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <section className='project-gallery' id='projects'>
      <h2>My Projects</h2>
        <div className='project-grid'>
          {restData.filter(project => project.id !== featuredProjectId) .map(project => (
            <div className='project-card' key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
                    {project.featured_media !== 0 && project._embedded && (
                      <FeaturedImage featuredImageObject={project._embedded['wp:featuredmedia'][0]} />
                    )}
                <div className='content'>
                  <h3>{project.title.rendered}</h3>
                  <div className="project-skills">
                    {project.acf.skill &&
                      project.acf.skill.slice(0,3).map(skillId => (
                        <Skill key={skillId} skillId={skillId} />
                      ))}
                  </div>
                </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default ProjectGallery;
