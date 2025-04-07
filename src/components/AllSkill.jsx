import React, { useState, useEffect } from 'react';
import { restBase } from '../utilities/Utilities';
import Skill from './Skill';
import '../assets/styles/component/_allskill.scss';

const AllSkills = () => {
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    const fetchAllSkills = async () => {
      try {
        const response = await fetch(restBase + 'skill?per_page=100&_embed');
        if (response.ok) {
          const data = await response.json();
          setAllSkills(data);
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchAllSkills();
  }, []);

  return (
    <div className="all-skills">
      {allSkills.map(skill => (
        <div key={skill.id} className="skill-item">
          <Skill skillId={skill.id} showIcon={true} />
        </div>
      ))}
    </div>
  );
};

export default AllSkills;
