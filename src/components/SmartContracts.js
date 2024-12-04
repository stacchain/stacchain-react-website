import React from "react";
import {
  FaLock,
  FaCoins,
  FaShieldAlt,
  FaCode,
  FaBullseye,
  // FaGlobe,
  // FaHandsHelping,
} from "react-icons/fa";
import CodeBlock from "./CodeBlock";

const solidityCode = `/// @notice Purchase an access code for the STAC collection
/// @return accessCode The generated access code
function purchaseAccessCode() external payable returns (string memory) {
    require(msg.value == accessPrice, "Incorrect payment amount");
    require(!hasPurchased[msg.sender], "Access already purchased");

    // Generate a unique access code
    string memory accessCode = _generateAccessCode(msg.sender);

    // Hash and store the access code
    accessRecords[msg.sender] = AccessData({
        hashedCode: keccak256(abi.encodePacked(accessCode)),
        expiryTime: block.timestamp + defaultValidityPeriod
    });
    hasPurchased[msg.sender] = true;

    // Emit event to notify external systems
    emit AccessCodeGenerated(msg.sender, accessRecords[msg.sender].expiryTime);

    return accessCode;
}`;

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
            <h2 className="flex items-center text-2xl sm:text-4xl font-extrabold mb-8 text-black">
              <FaBullseye className="mr-3 text-green-400" />
              Smart Contracts
            </h2>
            <p className="ttxt-md sm:text-lg leading-relaxed mb-8">
              Enabling Secure Access and Economic Incentives
            </p>

            {/* Smart Contracts Overview */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaCode className="mr-2 text-green-400" />
              Smart Contracts Overview
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              Smart contracts are self-executing agreements with the terms
              directly written into code. In{" "}
              <span className="font-bold">stacchain</span>, they play a pivotal
              role in automating transactions, enforcing agreements, and
              providing economic incentives for data providers and users.
            </p>

            {/* Understanding Smart Contracts */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaLock className="mr-2 text-green-400" />
              Understanding Smart Contracts
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              A smart contract is a program that runs on the blockchain,
              automatically executing predefined actions when certain conditions
              are met. This eliminates the need for intermediaries, reduces
              costs, and increases efficiency.
            </p>
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              In the context of <span className="font-bold">stacchain</span>,
              smart contracts facilitate secure data transactions, manage
              permissions, and distribute rewards to data contributors.
            </p>

            {/* Economic Incentives */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaCoins className="mr-2 text-green-400" />
              Economic Incentives
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-4">
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
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              This system incentivizes high-quality data contributions and
              ensures a fair distribution of rewards.
            </p>

            {/* Secure Access Control */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaShieldAlt className="mr-2 text-green-400" />
              Secure Access Control
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-4">
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
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              These mechanisms enhance security and build trust between data
              providers and users.
            </p>

            {/* Technical Implementation */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaCode className="mr-2 text-green-400" />
              Technical Implementation
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-4">
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
            <p className="text-md sm:text-lg leading-relaxed mb-6">
              This approach ensures compatibility, security, and scalability.
            </p>
          </div>

          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-4 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-400 hover:bg-gray-300 transition-colors duration-300 shadow">
                Smart Contracts in stacchain
              </h3>
              <CodeBlock code={solidityCode} />
              <br />
              <p className="text-md leading-relaxed mb-4">
                This Solidity code demonstrates how users can securely purchase
                access codes for a STAC collection using blockchain technology.
                It ensures secure payments, generates unique user-specific
                codes, and prevents duplicate purchases by tying each code to
                the user’s wallet address.
              </p>
              <p className="text-md leading-relaxed mb-4">
                The contract emits events such as{" "}
                <code>AccessCodeGenerated</code> and{" "}
                <code>AccessCodeRevoked</code> to notify external systems about
                purchases and revocations. These events facilitate seamless
                integration with APIs, databases, or other external tools to
                track and validate access.
              </p>
              <p className="text-md leading-relaxed mb-4">
                It also supports time-limited validity for access codes,
                balancing user convenience and security. The actual codes are
                not stored on-chain; instead, only their cryptographic hashes
                are stored for validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartContractsSection;
