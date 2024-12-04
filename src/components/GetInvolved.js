// src/components/GetInvolved.jsx

import React from "react";
import {
  FaHandsHelping,
  FaGithub,
  FaSlack,
  FaTools,
  FaCode,
  FaShieldAlt,
} from "react-icons/fa";

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
            <h2 className="flex items-center text-2xl sm:text-4xl font-extrabold mb-8 text-black">
              <FaHandsHelping className="mr-3 text-green-400" />
              Get Involved
            </h2>
            <p className="text-md sm:text-lg leading-relaxed mb-8">
              We invite developers, blockchain enthusiasts, designers, and other
              passionate individuals to contribute to our platform. Your
              participation can help us enhance the functionality and security
              of our ecosystem.
            </p>

            {/* STAC Merkle Tree CLI Tool Explanation */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaTools className="mr-2 text-green-400" />
              STAC Merkle Tree CLI Tool
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              The{" "}
              <code className="font-mono bg-gray-200 px-1 rounded">
                stac-merkle-tree-cli
              </code>{" "}
              is a Command-Line Interface (CLI) tool designed to compute and add
              Merkle Tree information to your SpatioTemporal Asset Catalog
              (STAC) directory structure. This tool ensures metadata integrity
              for your STAC Items, Collections, and Catalogs by encoding them in
              a Merkle tree via hashing.
            </p>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              By integrating this tool into your workflow, you can:
            </p>
            <ul className="list-disc list-inside text-md sm:text-lgg leading-relaxed space-y-2 mb-6">
              <li>
                <strong>Automate Integrity Checks:</strong> Streamline the
                process of verifying metadata integrity across your STAC
                catalog.
              </li>
              <li>
                <strong>Enhance Security:</strong> Protect your geospatial data
                from unauthorized modifications.
              </li>
              <li>
                <strong>Simplify Maintenance:</strong> Easily update and manage
                Merkle information across complex catalog structures.
              </li>
            </ul>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              For detailed documentation and usage instructions, visit the{" "}
              <a
                href="https://github.com/stacchain/stac-merkle-tree-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline"
              >
                stac-merkle-tree-cli GitHub repository
              </a>
              .
            </p>

            {/* Merkle Tree STAC Extension Explanation */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaCode className="mr-2 text-green-400" />
              Merkle Tree STAC Extension
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              The{" "}
              <code className="font-mono bg-gray-200 px-1 rounded">
                Merkle Tree STAC Extension
              </code>{" "}
              ensures metadata integrity for STAC Items, Collections, and
              Catalogs by encoding them in a Merkle tree via hashing. This
              extension allows you to verify that your STAC objects have not
              been tampered with, maintaining the reliability and consistency of
              your geospatial data.
            </p>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              By implementing this extension, you can:
            </p>
            <ul className="list-disc list-inside text-md sm:text-lg leading-relaxed space-y-2 mb-6">
              <li>
                <strong>Verify Data Authenticity:</strong> Confirm that your
                geospatial data remains unaltered.
              </li>
              <li>
                <strong>Ensure Provenance:</strong> Track the origin and history
                of your STAC objects with confidence.
              </li>
              <li>
                <strong>Integrate with Blockchain:</strong> Leverage blockchain
                technology to enhance data integrity and security.
              </li>
            </ul>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              For detailed specifications and implementation guidelines, visit
              the{" "}
              <a
                href="https://github.com/stacchain/merkle-tree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline"
              >
                Merkle Tree STAC Extension GitHub repository
              </a>
              .
            </p>

            {/* Smart Contracts Section */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaShieldAlt className="mr-2 text-green-400" />
              stacchain - Smart Contract examples
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              The{" "}
              <code className="font-mono bg-gray-200 px-1 rounded">
                stacchain Smart Contracts
              </code>{" "}
              enable secure and automated transactions for geospatial data. By
              leveraging these contracts, users can purchase access codes for
              geospatial collections, and ensure data integrity using blockchain
              technology.
            </p>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              These contracts:
            </p>
            <ul className="list-disc list-inside text-md sm:text-lg leading-relaxed space-y-2 mb-6">
              <li>
                Provide user-specific, time-limited access codes for secure
                geospatial data access.
              </li>
              <li>
                Emit events for integration with external APIs or databases.
              </li>
              <li>
                Support admin features like price updates and access revocation.
              </li>
            </ul>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              Explore the{" "}
              <a
                href="https://github.com/stacchain/stacchain-smart-contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline"
              >
                stacchain Smart Contracts GitHub repository
              </a>{" "}
              to contribute or learn more.
            </p>

            {/* Contributor Types */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaHandsHelping className="mr-2 text-green-400" />
              Who We’re Looking For
            </h3>
            <ul className="list-disc list-inside text-md sm:text-lg leading-relaxed space-y-2 mb-6">
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

          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-4 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
                Merkle Tree STAC Example
              </h3>
              <p className="text-md sm:text-lg leading-relaxed mb-4">
                This is an example of a STAC Collection enhanced with the Merkle
                Tree STAC Extension. The Merkle fields ensure metadata integrity
                and provide a mechanism to verify object hashes.
              </p>
              <pre className="bg-gray-900 text-sm sm:text-md text-white p-4 rounded-md overflow-x-auto shadow-md">
                <code className="language-json">
                  {`{
  "type": "Collection",
  "stac_version": "1.1.0",
  "id": "collection1",
  "description": "example",
  "extent": {},
  "links": [],
  "stac_extensions": [
    "https://stacchain.github.io/merkle-tree/v1.0.0/schema.json"
  ],
  "merkle:object_hash": "fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321",
  "merkle:root": "0987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba",
  "merkle:hash_method": {
    "function": "sha256",
    "fields": ["*"],
    "ordering": "ascending",
    "description": "Computed by excluding Merkle fields and including merkle:object_hash values in ascending order to build the Merkle tree."
  }
}`}
                </code>
              </pre>
              <p className="text-md sm:text-lg leading-relaxed mt-4">
                Learn more about the extension by visiting the{" "}
                <a
                  href="https://github.com/stacchain/merkle-tree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline"
                >
                  Merkle Tree STAC Extension repository
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-10">
          <a
            href="https://github.com/stacchain" // Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
            aria-label="Join our GitHub repository"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://slack.com/stacchain" // Replace with your actual Slack invite link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
            aria-label="Join our Slack channel"
          >
            <FaSlack className="mr-2" />
            Slack
          </a>
          <a
            href="https://github.com/stacchain/stac-merkle-tree-cli" // Link to the CLI tool
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
            aria-label="Visit the STAC Merkle CLI Tool repository"
          >
            <FaTools className="mr-2" />
            STAC Merkle Tree CLI
          </a>
          <a
            href="https://github.com/stacchain/merkle-tree" // Link to the Merkle Tree STAC Extension
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition-colors duration-300"
            aria-label="Visit the Merkle Tree STAC Extension repository"
          >
            <FaCode className="mr-2" />
            Merkle Tree STAC Extension
          </a>
          <a
            href="https://github.com/stacchain/stacchain-smart-contracts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
            aria-label="Visit the STAC Smart Contracts repository"
          >
            <FaCode className="mr-2" />
            stacchain Smart Contracts
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
