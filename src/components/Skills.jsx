import { FaPython, FaJava, FaHtml5, FaCss3, FaDatabase,FaPhp, FaJsSquare,} from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import {  SiMysql } from 'react-icons/si';
import dsImage from '../assets/ds.png'; // Data Structures image
import algorithmsImage from '../assets/Algorthims.png'; // Algorithms image
import nodeImage from '../assets/node.png'; // Node.js image
import exImage from '../assets/ex.png'; // Express.js image
import vsCodeImage from '../assets/vs.png'; // VS Code image

import oopImage from '../assets/oop.png'; // Object Oriented Programming image


const skills = [
  { id: 1, name: "Java", icon: <FaJava size={40} />, proficiency: 80 },
  { id: 2, name: "Python", icon: <FaPython size={40} />, proficiency: 70 },
  { id: 4, name: "Data Structures", icon: <img src={dsImage} alt="Data Structures" className="w-10 h-10" />, proficiency: 85 },
  { id: 5, name: "Algorithms", icon: <img src={algorithmsImage} alt="Algorithms" className="w-10 h-10" />, proficiency: 80 },
  { id: 6, name: "HTML/CSS", icon: [<FaHtml5 key="html" size={40} />, <FaCss3 key="css" size={40} />], proficiency: 85 },
  { id: 7, name: "JavaScript", icon: <FaJsSquare size={40} />, proficiency: 80 },
  { id: 8, name: "MySQL", icon: <SiMysql size={40} />, proficiency: 75 },
  { id: 9, name: "SQL", icon: <FaDatabase size={40} />, proficiency: 80 },
  { id: 10, name: "React", icon: <DiReact size={40} />, proficiency: 70 },
  { id: 14, name: "Object Oriented Programming", icon: <img src={oopImage} alt="OOP" className="w-10 h-10" />, proficiency: 80 },
  { id: 15, name: "Node.js", icon: <img src={nodeImage} alt="Node.js" className="w-10 h-10" />, proficiency: 75 },
  { id: 16, name: "Express.js", icon: <img src={exImage} alt="Express.js" className="w-10 h-10" />, proficiency: 70 },
  { id: 17, name: "VS Code", icon: <img src={vsCodeImage} alt="VS Code" className="w-10 h-10" />, proficiency: 85 },
  
];

const Skills = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4 flex space-x-2 justify-center">
                {Array.isArray(skill.icon) ? skill.icon.map((icon, idx) => (
                  <div key={idx}>{icon}</div>
                )) : (
                  <div>{skill.icon}</div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-300  dark:bg-gray-600 rounded-full h-2.5 relative">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full" 
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{`${skill.proficiency}%`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
