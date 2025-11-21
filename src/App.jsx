import React from 'react'
import './styles.css'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import ExperienceList from './components/ExperienceList.jsx'
import SkillsList from './components/SkillsList.jsx'
import ProjectsList from './components/ProjectsList.jsx'
import { profile, skills, experience, projects, education } from './data/resumeData.js'

export default function App() {
  return (
    <div className="app">
      <Header profile={profile} />

      <Section title="Summary">
        <p>{profile.summary}</p>
      </Section>

      <Section title="Experience">
        <ExperienceList items={experience} />
      </Section>

      <Section title="Projects">
        <ProjectsList projects={projects} />
      </Section>

      <Section title="Skills">
        <SkillsList title="Core" items={skills.core} />
        <SkillsList title="Tools" items={skills.tools} />
      </Section>

      <Section title="Education">
        {education.map((edu) => (
          <div key={edu.school} className="education-item">
            <div className="education-degree">{edu.degree}</div>
            <div className="education-school">{edu.school}</div>
            <div className="education-period">{edu.period}</div>
          </div>
        ))}
      </Section>
    </div>
  )
}
