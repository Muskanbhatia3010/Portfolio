import React, { useEffect, useState } from 'react';
import { restBase } from '../utilities/Utilities';
import ACFImage from './ACFImage';

const Skill = ({ skillId, showIcon = false  }) => {
  const [skillData, setSkillData] = useState({ name: '', icon: null });
  const skillRestPath = restBase + 'skill/' + skillId + '?_embed';

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const response = await fetch(skillRestPath);
        if (response.ok) {
          const data = await response.json();
          const iconId = data.acf?.skill_icon || null;
          let icon = null;

          if (iconId) {
            const mediaResponse = await fetch(`${restBase}media/${iconId}`);
            if (mediaResponse.ok) {
              const mediaData = await mediaResponse.json();
              icon = { url: mediaData.source_url, alt: mediaData.alt_text };
            }
          }

          setSkillData({
            name: data.acf?.skill_name || '',
            icon,
          });
        }
      } catch (error) {
        console.error('Error fetching skill:', error);
      }
    };

    fetchSkill();
  }, [skillId]);

  return (
    <div className="skill">
      {showIcon && skillData.icon && <ACFImage image={skillData.icon} className="skill-icon" />}
      <p>{skillData.name}</p>
    </div>
  );
};

export default Skill;
