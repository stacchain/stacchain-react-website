import React from "react";
import {
  FaLock,
  FaCoins,
  FaShieldAlt,
  FaCode,
  FaBullseye,
  FaGlobe,
  FaHandsHelping,
} from "react-icons/fa";
import smartContractsDiagram from "../assets/merkle-trees-and-proofs.png"; // Ensure the path is correct

const SmartContractsSection = ({ className }) => {
  return (
    <section
      id="smart-contracts"
      className={`bg-gray-200 px-4 py-10 scroll-mt-16 ${className}`}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Container for the content */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            {/* Section Header */}
            <h2 className="flex items-center text-4xl font-extrabold mb-8 text-black">
              <FaBullseye className="mr-3 text-green-400" />
              Smart Contracts
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Enabling Secure Access and Economic Incentives
            </p>

            {/* Smart Contracts Overview */}
            <h3 className="flex items-center text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaCode className="mr-2 text-green-400" />
              Smart Contracts Overview
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Smart contracts are self-executing agreements with the terms
              directly written into code. In{" "}
              <span className="font-bold">stacchain</span>, they play a pivotal
              role in automating transactions, enforcing agreements, and
              providing economic incentives for data providers and users.
            </p>

            {/* Understanding Smart Contracts */}
            <h3 className="flex items-center text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaLock className="mr-2 text-green-400" />
              Understanding Smart Contracts
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              A smart contract is a program that runs on the blockchain,
              automatically executing predefined actions when certain conditions
              are met. This eliminates the need for intermediaries, reduces
              costs, and increases efficiency.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In the context of <span className="font-bold">stacchain</span>,
              smart contracts facilitate secure data transactions, manage
              permissions, and distribute rewards to data contributors.
            </p>

            {/* Economic Incentives */}
            <h3 className="flex items-center text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaCoins className="mr-2 text-green-400" />
              Economic Incentives
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              By integrating smart contracts,{" "}
              <span className="font-bold">stacchain</span> creates a token-based
              economy where data providers are rewarded for their contributions.
              Here's how it works:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Tokenization:</strong> Data providers receive tokens in
                exchange for their geospatial data.
              </li>
              <li>
                <strong>Microtransactions:</strong> Users pay tokens to access
                or utilize specific data, enabling flexible pricing models.
              </li>
              <li>
                <strong>Automatic Settlement:</strong> Smart contracts ensure
                that payments are automatically transferred to the data
                providers upon data access.
              </li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              This system incentivizes high-quality data contributions and
              ensures a fair distribution of rewards.
            </p>

            {/* Secure Access Control */}
            <h3 className="flex items-center text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaShieldAlt className="mr-2 text-green-400" />
              Secure Access Control
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Smart contracts also manage access control, ensuring that only
              authorized users can access certain data. Features include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Permission Management:</strong> Define who can access
                specific datasets based on predefined rules.
              </li>
              <li>
                <strong>Immutable Records:</strong> All access transactions are
                recorded on the blockchain, providing transparency and
                auditability.
              </li>
              <li>
                <strong>Data Encryption:</strong> Protect sensitive data through
                encryption, with keys managed by smart contracts.
              </li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              These mechanisms enhance security and build trust between data
              providers and users.
            </p>

            {/* Technical Implementation */}
            <h3 className="flex items-center text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaCode className="mr-2 text-green-400" />
              Technical Implementation
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              The smart contracts in{" "}
              <span className="font-bold">stacchain</span> are developed using
              industry-standard practices and technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Blockchain Platform:</strong> Built on
                Ethereum-compatible platforms supporting smart contract
                functionality.
              </li>
              <li>
                <strong>Programming Language:</strong> Implemented using
                Solidity, a widely-used language for smart contracts.
              </li>
              <li>
                <strong>Security Audits:</strong> Regular code reviews and
                audits to ensure robustness and prevent vulnerabilities.
              </li>
            </ul>
            <p className="text-lg leading-relaxed mb-6">
              This approach ensures compatibility, security, and scalability.
            </p>
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            {/* Diagram or Additional Information */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="flex items-center text-2xl font-bold mb-4 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
                <FaGlobe className="mr-2 text-green-400" />
                Smart Contracts Diagram
              </h3>
              <img
                src={smartContractsDiagram}
                alt="Smart Contracts Diagram"
                className="w-full h-auto mb-4 rounded-md"
              />
              <p className="text-lg leading-relaxed">
                This diagram illustrates how smart contracts automate
                transactions and enforce agreements between data providers and
                consumers within the stacchain ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-6 rounded-md shadow-md mt-10">
          <h3 className="flex items-center text-2xl font-bold mb-4 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
            <FaHandsHelping className="mr-2 text-green-400" />
            Get Involved
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            We invite developers and blockchain enthusiasts to contribute to our
            platform. Your participation can help us enhance the functionality
            and security of our ecosystem.
          </p>
          <a
            href="https://github.com/stacchain"
            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default SmartContractsSection;
