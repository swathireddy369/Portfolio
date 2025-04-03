// import { siReact, siHtml5, siC, siCplusplus, siPython, siPhp, siCss3, siJavascript, siMysql, siFlask, siStreamlit, siAngular, siExpress, siNodedotjs, siMongodb, siGit, siBitbucket, siJenkins, siDocker, siPowerbi, siHaskell, siGithub, siVuedotjs, siLoopback,siNextdotjs,siNestjs } from 'simple-icons/icons'
// import React from 'react'
// import { Cloud, renderSimpleIcon } from 'react-icon-cloud'


// const tagCanvasOptions = {
//   outlineColour: 'transparent',
//   imageMode: "both",
//   shape: 'hcylinder',
//   lock: 'x',
//   imagePosition: "top",
//   initial: [0, -0.1],
//   fadeIn: 3000,
//   zoom: 0.9,
//   wheelZoom: false,
//   pinchZoom: true,
//   shuffleTags: true,
//   frontSelect: true,
//   textHeight: 18,
//   reverse: true,
//   depth: 0.5,
//   maxSpeed: 0.04,
//   minSpeed: 0.02
// }

// const iconData = [
//   { name: 'HTML5', icon: siHtml5 },
//   { name: 'React', icon: siReact },
//   { name: 'C', icon: siC },
//   { name: 'C++', icon: siCplusplus },
//   { name: 'Python', icon: siPython },
//   { name: 'Php', icon: siPhp },
//   { name: 'CSS3', icon: siCss3 },
//   { name: 'JavaScript', icon: siJavascript },
//   { name: 'MySql', icon: siMysql },
//   { name: 'Flask', icon: siFlask },
//   { name: 'Streamlit', icon: siStreamlit },
//   { name: 'Angular', icon: siAngular },
//   { name: 'Express', icon: siExpress },
//   { name: 'Node.JS', icon: siNodedotjs },
//   { name: 'MongoDB', icon: siMongodb },
//   { name: 'Git', icon: siGit },
//   { name: 'GitHub', icon: siGithub },
//   { name: 'Jenkins', icon: siJenkins },
//   { name: 'Docker', icon: siDocker },
//   { name: 'BitBucket', icon: siBitbucket },
//   { name: 'PowerBI', icon: siPowerbi },
//   { name: 'Haskell', icon: siHaskell },
//   { name: 'Vue.js', icon: siVuedotjs },
//   { name: 'LoopBack', icon: siLoopback },
//   { name: 'Next.js', icon: siNextdotjs },
//   { name: 'NestJS', icon: siNestjs },


// ];

// const icons = iconData.map(({ name, icon }) => (
//   <div key={name}>
//     {renderSimpleIcon({
//       icon,
//       size: 150,
//       aProps: {
//         onClick: (e) => e.preventDefault()
//       }

//     })}
//     {name}
//   </div>


// ));

// const IconCloud = () => {

//   return (
//     <Cloud options={tagCanvasOptions}  >
//       {icons}
//     </Cloud>
//   );
// }

// export default IconCloud;



import React from 'react';
import './Componente.css';

import { Cloud } from 'react-icon-cloud';
import { siReact, siHtml5, siCss3, siJavascript, siMysql, siAngular, siExpress, siNodedotjs, siMongodb, siGit, siDocker, siGithub ,siPostgresql,siAntdesign} from 'simple-icons'


const tagCanvasOptions = {
  outlineColour: 'transparent',
  imageMode: "both",
  shape: 'hcylinder',
  lock: 'x',
  imagePosition: "top",
  initial: [0, -0.1],
  fadeIn: 3000,
  zoom: 0.9,
  wheelZoom: false,
  pinchZoom: true,
  shuffleTags: true,
  frontSelect: true,
  textHeight: 18,
  reverse: true,
  depth: 0.5,
  maxSpeed: 0.04,
  minSpeed: 0.02
};

const iconData = [
  { name: 'HTML5', icon: siHtml5 },
  { name: 'React', icon: siReact },
  { name: 'CSS3', icon: siCss3 },
  { name: 'JavaScript', icon: siJavascript },
  {name: 'Antd', icon: siAntdesign},
  // { name: 'C', icon: siC },
  // { name: 'C++', icon: siCplusplus },
  // { name: 'Python', icon: siPython },
  // { name: 'Php', icon: siPhp },
 
  // { name: 'Flask', icon: siFlask },
  // { name: 'Streamlit', icon: siStreamlit },
  { name: 'Angular', icon: siAngular },
  { name: 'Express', icon: siExpress },
  { name: 'Node.JS', icon: siNodedotjs },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
  // { name: 'Jenkins', icon: siJenkins },
  { name: 'Docker', icon: siDocker },
  // { name: 'BitBucket', icon: siBitbucket },
  // { name: 'PowerBI', icon: siPowerbi },
  // { name: 'Haskell', icon: siHaskell },
  // { name: 'Java', icon: siJava },
  // { name: 'SpringBoot', icon: siSpringBoot},
  { name: 'postgresql', icon: siPostgresql },
  { name: 'MySql', icon: siMysql },

];

const icons = iconData.map(({ name, icon }) => (
  <a
    key={name}
    href="#"
    onClick={(e) => e.preventDefault()}
    className="icon-with-label"
    title={name}
    style={{ color: icon.hex }} 
  >
    <img
      src={`data:image/svg+xml;utf8,${encodeURIComponent(icon.svg)}`}
      alt={name}
      className="icon-image"
    />
    <span className="icon-label">{name}</span>
  </a>
));

const IconCloud = () => {
  return (
    <Cloud options={tagCanvasOptions}>
      {icons}
    </Cloud>
  );
}

export default IconCloud;
