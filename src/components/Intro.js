import React from "react";
import {
  FaBullseye,
  FaGlobe,
  FaHandsHelping,
  FaCoins,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";
import merkletree from "../assets/merkle-trees-and-proofs.png"; // Ensure the path is correct

const ProjectIntroduction = ({ className }) => {
  return (
    <section
      id="project-introduction"
      className={`bg-white px-4 py-10 scroll-mt-16 ${className}`}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Main Header */}
        <h2 className="flex items-center text-2xl sm:text-4xl font-extrabold mb-8 text-black">
          <FaBullseye className="mr-3 text-green-400" />
          Introduction
        </h2>

        {/* Container for the content */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            {/* Our Mission */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-200 hover:bg-gray-200 transition-colors duration-300 shadow">
              <FaLightbulb className="mr-2 text-green-400" />
              Our Mission
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-8">
              Our mission at <span className="font-bold">stacchain</span> is to
              help revolutionize geospatial data management by ensuring data
              integrity and provenance through blockchain-based verification. We
              strive to facilitate data discovery and integrate economic
              incentives for secure data sharing and access. By empowering
              creative individuals and organizations to publish their work on
              the blockchain, we aim to enable efficient management, discovery,
              and monetization of geospatial information in a secure and
              transparent ecosystem.
            </p>

            {/* Overview */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-200 hover:bg-gray-200 transition-colors duration-300 shadow">
              <FaGlobe className="mr-2 text-green-400" />
              Overview
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-8">
              <span className="font-bold">stacchain</span> is a pioneering
              platform that aims to assist with bringing together the geospatial
              community into a unified, secure, and efficient ecosystem. By
              leveraging blockchain technology,{" "}
              <span className="font-bold">stacchain</span> ensures that every
              piece of geospatial data is immutable and verifiable, providing an
              unparalleled level of trust and transparency. This
              blockchain-based verification not only safeguards data integrity
              but also establishes a clear provenance, allowing users to trace
              the origin and history of the data they utilize.
            </p>

            {/* Empowering Innovation and Collaboration */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-200 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaHandsHelping className="mr-2 text-green-400" />
              Empowering Innovation and Collaboration
            </h3>
            <p className="text:md sm:text-lg leading-relaxed mb-8">
              At the heart of <span className="font-bold">stacchain</span> is
              the belief that accessible and reliable geospatial data can drive
              innovation and solve real-world problems. By enabling users to
              publish their work on the blockchain,{" "}
              <span className="font-bold">stacchain</span> fosters a
              collaborative environment where creative individuals and
              organizations can contribute to and benefit from a rich repository
              of geospatial information. Whether it's developing specialized
              datasets from open-source data or creating value-added services,{" "}
              <span className="font-bold">stacchain</span> provides the tools
              and infrastructure needed to catalyze innovation in fields such as
              urban planning, environmental monitoring, disaster response, and
              more.
            </p>

            {/* Economic Incentives and Sustainable Growth */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-200 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaCoins className="mr-2 text-green-400" />
              Economic Incentives and Sustainable Growth
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-8">
              <span className="font-bold">stacchain</span> integrates economic
              incentives into its ecosystem to promote secure data sharing and
              access. Data providers can monetize their contributions, ensuring
              that the creation and maintenance of high-quality geospatial data
              are both recognized and rewarded. This economic model encourages
              continuous participation and investment from the community,
              driving the sustainable growth of the platform. Users gain access
              to a diverse range of geospatial data, confident in its
              authenticity and integrity, while providers benefit from a fair
              compensation system that values their efforts.
            </p>

            {/* A Vision for the Future */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-200 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaLightbulb className="mr-2 text-green-400" />A Vision for the
              Future
            </h3>
            <p className="text:md sm:text-lg leading-relaxed mb-8">
              Our vision extends beyond building a platform—we aim to help
              reshape the geospatial landscape by making data more accessible,
              secure, and valuable for everyone. By uniting data creators and
              users under a transparent and decentralized framework,{" "}
              <span className="font-bold">stacchain</span> aspires to tackle
              global challenges with data-driven solutions. We believe that by
              empowering communities with the right tools and data, we can
              contribute to a more informed, responsive, and sustainable world.
            </p>

            {/* Dedication to Open Source */}
            <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-6 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-200 hover:bg-gray-300 transition-colors duration-300 shadow">
              <FaCode className="mr-2 text-green-400" />
              Dedication to Open Source
            </h3>
            <p className="text-md sm:text-lg leading-relaxed mb-8">
              At <span className="font-bold">stacchain</span>, we are deeply
              committed to the principles of open source. We believe that
              collaboration, transparency, and shared knowledge are the
              cornerstones of innovation. By open-sourcing our code and
              promoting open standards, we aim to foster an inclusive community
              where developers, researchers, and organizations can work together
              to enhance the platform and its capabilities. Our dedication to
              open source ensures that the tools and technologies we develop are
              accessible to all, promoting inclusivity and democratizing access
              to geospatial data management solutions.
            </p>
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            {/* Diagram or Additional Information */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="flex items-center text-xl sm:text-2xl font-bold mb-4 bg-gray-100 text-black px-3 py-1 rounded-md border-1 border-gray-200 hover:bg-gray-300 transition-colors duration-300 shadow">
                <FaCode className="mr-2 text-green-400" />
                Understanding Merkle Trees
              </h3>
              <img
                src={merkletree}
                alt="Merkle Tree Diagram"
                className="w-full h-auto mb-4 rounded-md"
              />
              <p className="text-md sm:text-lg leading-relaxed">
                Merkle trees are a fundamental component of blockchain
                technology, providing a way to efficiently verify data
                integrity. Each leaf node represents a block of data, and parent
                nodes are hashes of their respective child nodes. This structure
                allows for quick verification of any individual piece of data
                within the tree.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntroduction;
