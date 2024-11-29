import React from "react";

const ProjectIntroduction = ({ className }) => {
  return (
    <section className={`px-4 py-10 ${className}`}>
      <div className="max-w-screen-xl mx-auto">
        {/* Container for the content */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            {/* Mission Statement */}
            <h2 className="group text-3xl font-bold mb-6 bg-green-400 text-white px-4 py-2 rounded-md border-3 border-gray-500 hover:bg-green-500 transition-colors duration-300">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-8">
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
            <h2 className="group text-3xl font-bold mb-6 bg-green-400 text-white px-4 py-2 rounded-md border-3 border-gray-500 hover:bg-green-500 transition-colors duration-300">
              Overview
            </h2>
            <p className="text-lg leading-relaxed mb-8">
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
            <h2 className="group text-3xl font-bold mb-6 bg-green-400 text-white px-4 py-2 rounded-md border-3 border-gray-500 hover:bg-green-500 transition-colors duration-300">
              Empowering Innovation and Collaboration
            </h2>
            <p className="text-lg leading-relaxed mb-8">
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
            <h2 className="group text-3xl font-bold mb-6 bg-green-400 text-white px-4 py-2 rounded-md border-3 border-gray-500 hover:bg-green-500 transition-colors duration-300">
              Economic Incentives and Sustainable Growth
            </h2>
            <p className="text-lg leading-relaxed mb-8">
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
            <h2 className="group text-3xl font-bold mb-6 bg-green-400 text-white px-4 py-2 rounded-md border-3 border-gray-500 hover:bg-green-500 transition-colors duration-300">
              A Vision for the Future
            </h2>
            <p className="text-lg leading-relaxed mb-8">
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
            <h2 className="group text-3xl font-bold mb-6 bg-green-400 text-white px-4 py-2 rounded-md border-3 border-gray-500 hover:bg-green-500 transition-colors duration-300">
              Dedication to Open Source
            </h2>
            <p className="text-lg leading-relaxed">
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
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                Understanding Merkle Trees
              </h3>
              <img
                src="path/to/merkle-tree-diagram.png"
                alt="Merkle Tree Diagram"
                className="w-full h-auto mb-4"
              />
              <p className="text-lg leading-relaxed">
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
