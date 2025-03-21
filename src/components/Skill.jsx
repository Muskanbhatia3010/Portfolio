import React, { useEffect, useState } from 'react';
import { restBase } from '../utilities/Utilities';

const Skill = ({ skillId }) => {
  const [skillName, setSkillName] = useState('');
  const skillRestPath = restBase + 'skill/' + skillId + '?_embed';

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const response = await fetch(skillRestPath);
        if (response.ok) {
          const data = await response.json();
          setSkillName(data.acf?.skill_name);
        }
      } catch (error) {
        console.error('Error fetching skill:', error);
      }
    };

    fetchSkill();
  }, [skillId]);

  return <span>{skillName}</span>;
};

export default Skill;
