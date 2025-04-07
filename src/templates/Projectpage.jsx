import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { restBase } from '../utilities/Utilities';
import FeaturedImage from '../components/FeaturedImage';

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`${restBase}projects/${id}?_embed`);
      const data = await res.json();
      setProject(data);
    };

    fetchProject();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="project-page">
      <h1>{project.title.rendered}</h1>
      {project._embedded?.['wp:featuredmedia'] && (
        <FeaturedImage featuredImageObject={project._embedded['wp:featuredmedia'][0]} />
      )}
      <p>{project.acf?.shortdescription}</p>
      <a href={project.acf?.link} target="_blank" rel="noopener noreferrer">Live Project</a>
    </div>
  );
};

export default ProjectPage;
