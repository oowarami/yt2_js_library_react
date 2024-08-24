import React from 'react'
import './scss/Skills.scss';
import html from '../assets/images/skills/html.svg'
import css3 from '../assets/images/skills/css3.svg'
import cPlusPlus from '../assets/images/skills/c++.svg'
import js from '../assets/images/skills/javascript.svg'
import sass from '../assets/images/skills/sass.svg'
import figma from '../assets/images/skills/figma.svg'
import git from '../assets/images/skills/git.svg'
import bootstrap from '../assets/images/skills/bootstrap.svg'
import react from '../assets/images/skills/react.svg'
import mySql from '../assets/images/skills/mysql.svg'
import nodeJs from '../assets/images/skills/nodeJS.svg'
import mongoDb from '../assets/images/skills/mongoDb.svg'
import ts from '../assets/images/skills/typescript.svg'
import angielski from '../assets/images/skills/angielski.svg'
import hiszpanski from '../assets/images/skills/hiszpanski.svg'
import c from '../assets/images/skills/c.svg'

const Skills = () => {
	return (
		<>
			<div className="skills">
					<div className="skillsDiv">
						<h2>SKILLS</h2>
					</div>
					<div className="usingNow">
						<div className="usingNowDiv">
							<h4 className="usingNowText">USING NOW:</h4>
						</div>
							<div className="row1">
								<div className="card">
									<img src={html} alt="html"/>
									<span>HTML</span>
								</div>
								<div className="card">
									<img src={css3} alt="css3"/>
									<span>CSS3</span>
								</div>
								<div className="card">
									<img src={sass} alt="sass"/>
									<span>SASS</span>
								</div>
								<div className="card">
									<img src={js} alt="Javascript"/>
									<span>JAVASCRIPT</span>
								</div>
							</div>
							<div className="row2">
								<div className="card">
									<img src={react} alt="React"/>
									<span>REACT</span>
								</div>
								<div className="card">
									<img src={bootstrap} alt="Bootstrap"/>
									<span>BOOTSTRAP</span>
								</div>
								<div className="card">
									<img src={git} alt="Git"/>
									<span>GIT</span>
								</div>
								<div className="card">
									<img src={figma} alt="Figma"/>
									<span>FIGMA</span>
								</div>
							</div>

							<div className="learning">
								<div className="learningDiv">
									<h4 className="learningText">LEARNING:</h4>
								</div>
								<div className="row1">
									<div className="card">
										<img src={nodeJs} alt="NodeJS"/>
										<span>NODEJS</span>
									</div>
									<div className="card">
										<img src={mySql} alt="MySql"/>
										<span>MYSQL</span>
									</div>
									<div className="card">
										<img src={mongoDb} alt="MongoDB"/>
										<span>MONGODB</span>
									</div>
									<div className="card">
										<img src={ts} alt="Typescript"/>
										<span>TYPESCRIPT</span>
									</div>
							</div>

							<div className="otherSkills">
								<div className="otherDiv">
									<h4 className="otherText">OTHER SKILLS:</h4>
								</div>
									<div className="row1">
										<div className="card">
											<img src={angielski} alt="ANGIELSKI C1/C2"/>
											<span>ANGIELSKI <br/> C1/C2</span>
										</div>
										<div className="card">
											<img src={hiszpanski} alt="HISZPAŃSKI B1/B2"/>
											<span>HISZPAŃSKI <br/> B1/B2</span>
										</div>
										<div className="card">
											<img src={cPlusPlus} alt="C++"/>
											<span>C++</span>
										</div>
										<div className="card">
											<img src={c} alt="C"/>
											<span>C</span>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
		</>
	)
}

export default Skills