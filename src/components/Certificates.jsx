import { useState } from 'react';
import { Award, Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const Certificates = () => {
  // Group certificates by issuer
  const groupedCertificates = certificates.reduce((groups, cert) => {
    if (!groups[cert.issuer]) groups[cert.issuer] = [];
    groups[cert.issuer].push(cert);
    return groups;
  }, {});

  // State to track which issuer is expanded
  const [expandedIssuer, setExpandedIssuer] = useState(null);

  const toggleIssuer = (issuer) => {
    setExpandedIssuer(expandedIssuer === issuer ? null : issuer);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Certificates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Professional certifications and achievements that validate my expertise 
            and commitment to continuous learning.
          </p>
        </div>

        {/* Collapsible Issuers */}
        {Object.keys(groupedCertificates).map((issuer) => (
          <div key={issuer} className="mb-8 border-b border-gray-200 pb-4">
            {/* Issuer Header */}
            <button
              onClick={() => toggleIssuer(issuer)}
              className="w-full flex justify-between items-center text-left text-2xl font-bold text-red-500 hover:text-black transition-colors"
            >
              {issuer}
              {expandedIssuer === issuer ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>

            {/* Certificates Grid (visible only if expanded) */}
            {expandedIssuer === issuer && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {groupedCertificates[issuer].map((cert) => (
                  <div 
                    key={cert.id} 
                    className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-red-500 transition-all duration-300"
                  >
                    {/* Certificate Icon + Date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-red-500 text-white rounded-lg group-hover:bg-black transition-colors duration-300">
                        <Award size={24} />
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        {cert.date}
                      </div>
                    </div>

                    {/* Title + Issuer */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-black mb-2 group-hover:text-red-500 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600 font-medium">{cert.issuer}</p>
                      </div>

                      <p className="text-gray-600 text-sm">{cert.description}</p>

                      {cert.credentialId && (
                        <div className="text-xs text-gray-500 font-mono bg-gray-50 px-3 py-2 rounded">
                          ID: {cert.credentialId}
                        </div>
                      )}

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-red-50 group-hover:text-red-700 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Verify Button */}
                      {cert.verifyUrl && (
                        <a 
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full mt-4 flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:border-red-500 hover:text-red-500 transition-colors group-hover:border-red-500 group-hover:text-red-500"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm font-medium">Verify Certificate</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <Award size={20} className="text-red-500" />
            <span>Continuously expanding knowledge and earning new certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
