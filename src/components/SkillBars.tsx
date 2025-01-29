import React from "react";
import SkillBar from "./SkillBar"

type Skill = {
    skillName: string;
    level: number;
}

export default function SkillBars(skills: Skill[]) {
    return skills.map((skill, index) => (
        <SkillBar
            titleText={skill.skillName}
            contentsText={skill.level + '%'}
            width={skill.level}
        />
    ))
}