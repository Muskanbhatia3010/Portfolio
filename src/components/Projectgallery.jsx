import { useState, useEffect } from 'react';
import { restBase } from '../utilities/Utilities';
import FeaturedImage from './FeaturedImage';
import Skill from './Skill';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
    <article className='scroll-cards' id='projects'>
      <h2>My Projects</h2>
      <p>Swipe or drag below to see a small selection of projects I've worked on.</p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        loop={true}
        slidesPerView={'auto'}
        // navigation
        pagination={{ clickable: true }}
      >
        {restData.filter(project => project.id !== featuredProjectId) .map(project => (
          <SwiperSlide key={project.id}>
            <div onClick={() => navigate(`/projects/${project.id}`)}>
              <div className='container'>
                {project.featured_media !== 0 && project._embedded && (
                  <FeaturedImage featuredImageObject={project._embedded['wp:featuredmedia'][0]} />
                )}
              </div>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default ProjectGallery;
