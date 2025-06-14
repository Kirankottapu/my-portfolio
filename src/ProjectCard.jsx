import React from 'react';

const ProjectCard = ({ title, image, description, tech, github, live }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-xl border border-gray-800">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 text-xs text-blue-300 mt-4">
            {tech.map((t, i) => (
              <span key={i}>#{t}</span>
            ))}
          </div>
          <div className="flex gap-4 mt-4 text-sm">
            <a href={live} target="_blank" className="text-green-400 hover:underline">
              Live
            </a>
            <a href={github} target="_blank" className="text-blue-400 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;