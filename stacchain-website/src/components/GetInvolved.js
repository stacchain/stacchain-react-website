// src/components/GetInvolved.jsx

import React from "react";
import { FaHandsHelping, FaGithub, FaSlack } from "react-icons/fa";

const GetInvolved = ({ className }) => {
  return (
    <section
      id="get-involved"
      className={`bg-white px-4 py-10 scroll-mt-16 ${className}`}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Container for the content */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            {/* Section Header */}
            <h2 className="flex items-center text-4xl font-extrabold mb-8 text-black">
              <FaHandsHelping className="mr-3 text-green-400" />
              Get Involved
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              We invite developers, blockchain enthusiasts, designers, and other
              passionate individuals to contribute to our platform. Your
              participation can help us enhance the functionality and security
              of our ecosystem.
            </p>

            {/* Merkle Extension Explanation */}
            <h3 className="flex items-center text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaHandsHelping className="mr-2 text-green-400" />
              Merkle Extension for STAC Geospatial Metadata
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Our Merkle extension ensures data integrity and provenance for
              geospatial datasets by leveraging blockchain technology. This
              extension allows for efficient verification of data authenticity
              and tamper-proof storage, enhancing the reliability of STAC
              catalogs.
            </p>

            {/* stac-merkle-cli Tool Explanation */}
            <h3 className="flex items-center text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaHandsHelping className="mr-2 text-green-400" />
              stac-merkle-cli Tool
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              The{" "}
              <code className="font-mono bg-gray-200 px-1 rounded">
                stac-merkle-cli
              </code>{" "}
              is a command-line tool designed to populate STAC catalogs with
              essential information. It streamlines the process of integrating
              geospatial data into our platform, ensuring consistency and
              reliability across all datasets.
            </p>

            {/* Contributor Types */}
            <h3 className="flex items-center text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaHandsHelping className="mr-2 text-green-400" />
              Who We’re Looking For
            </h3>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 mb-6">
              <li>
                <strong>Blockchain Developers:</strong> Skilled in smart
                contracts and blockchain architecture to enhance our Merkle
                extensions.
              </li>
              <li>
                <strong>Geospatial Data Specialists:</strong> Experts in STAC
                specifications and geospatial data management.
              </li>
              <li>
                <strong>UI/UX Designers:</strong> To create intuitive and
                user-friendly interfaces for our tools and platform.
              </li>
              <li>
                <strong>DevOps Engineers:</strong> For managing infrastructure,
                deployments, and ensuring scalability.
              </li>
              <li>
                <strong>Documentation Writers:</strong> To maintain
                comprehensive guides and documentation for our tools.
              </li>
              <li>
                <strong>Community Managers:</strong> To engage with contributors
                and manage our community channels.
              </li>
            </ul>
          </div>

          {/* Sidebar Column (Optional) */}
          {/* If you have any images or additional information, you can include them here */}
          {/* <div className="lg:w-1/3 mt-10 lg:mt-0">
            <img src={yourImage} alt="Get Involved" className="w-full h-auto rounded-md shadow-md" />
          </div> */}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-10">
          <a
            href="https://github.com/stacchain" // Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://slack.com/stacchain" // Replace with your actual Slack invite link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            <FaSlack className="mr-2" />
            Slack
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
