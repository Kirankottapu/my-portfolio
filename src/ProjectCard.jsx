import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CertificateModal = ({ certificate, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex justify-center items-center">
      <div className="relative max-w-4xl w-full px-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-4 text-white text-3xl font-bold hover:text-red-500"
        >
          &times;
        </button>
        <img
          src={certificate}
          alt="Certificate"
          className="w-full max-h-[90vh] object-contain rounded-lg border border-white"
        />
      </div>
    </div>,
    document.body // 👈 Mounts it to the root body
  );
};

const ProjectCard = ({ title, image, description, tech, github, live, certificate }) => {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <>
      <div className="relative group rounded-xl overflow-hidden shadow-xl border border-gray-800 max-w-md w-full mx-auto transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="p-4 bg-black text-white">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-300 mb-3">{description}</p>

          {tech && (
            <p className="text-xs text-gray-400 mb-3">
              <span className="font-semibold text-white">Tech:</span> {tech}
            </p>
          )}

          <div className="flex flex-wrap gap-4 items-center mt-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                GitHub
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline text-sm"
              >
                Live Demo
              </a>
            )}
            {certificate && (
              <button
                onClick={() => setShowCertificate(true)}
                className="text-yellow-400 hover:underline text-sm"
              >
                View Certificate
              </button>
            )}
          </div>
        </div>
      </div>

      {showCertificate && (
        <CertificateModal
          certificate={certificate}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
