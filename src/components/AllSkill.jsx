import React, { useState, useEffect } from 'react';
import { restBase } from '../utilities/Utilities';
import Skill from './Skill';
import '../assets/styles/component/_allskill.scss';

const AllSkills = () => {
  const [allSkills, setAllSkills] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch categories from WordPress
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${restBase}skill-category?per_page=100`);
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.error('Error fetching skill categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch all skills
  useEffect(() => {
    const fetchAllSkills = async () => {
      try {
        const response = await fetch(`${restBase}skill?per_page=100&_embed`);
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
    <section className="all-skills-wrapper" id='skills'>
      <h2 className="all-skills-title">Skills</h2>
      {categories.map(category => {
        const skillsInCategory = allSkills.filter(skill =>
          skill['skill-category']?.includes(category.id)
        );

        if (skillsInCategory.length === 0) return null;

        return (
          <article key={category.id} className="category-block">
            <h3 className="category-title">{category.name}</h3>
            <div className="skills-grid">
              {skillsInCategory.map(skill => (
                <div key={skill.id} className="skill-item">
                  <Skill skillId={skill.id} showIcon={true} />
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default AllSkills;
