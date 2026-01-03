export function About() {
  return (
    <section className="mb-16">
      {/* Header Section with Photo */}
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 md:p-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Photo */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
              <img
                src="/assets/blog/authors/sarah.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                I'm a software engineer passionate about novel applications of machine learning, data science, and AI. 
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Currently at Capital One working on ML infrastructure services. 
              </p>
              <p className="text-lg leading-relaxed mb-6">
                In my free time, I'm a big Bay Area and Northwestern sports fan and enjoy the intersection of numbers and sports.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/sarah-fazio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.637h3.554v1.36c.426-.658 1.189-1.592 2.894-1.592 2.114 0 3.693 1.381 3.693 4.352v5.517zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.704 0-.948.768-1.704 1.959-1.704 1.188 0 1.914.756 1.939 1.704 0 .946-.751 1.704-1.983 1.704zm1.581 11.02H3.819V9.815h3.099v10.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/sarahfazio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
                  title="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 md:p-12">
        <h3 className="text-3xl font-bold mb-8">Resume</h3>

        {/* Experience */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-6">Experience</h4>
          <div className="space-y-8">
            {/* Capital One Group */}
            <div>
              <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-6 mb-4">
                <h5 className="text-lg font-bold">Capital One</h5>
                <p className="text-gray-600 dark:text-gray-400 text-xs uppercase tracking-wide">Multiple Internships & Full-Time</p>
              </div>
              <div className="space-y-4 ml-6">
                <div>
                  <h6 className="font-semibold text-base">Associate Software Engineer</h6>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">February 2025 - Present</p>
                  <ul className="text-sm leading-relaxed space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Engineered ML infrastructure services enabling resiliency, reliability, and high performance of a platform that handles hundreds of millions of transactions per day.</li>
                    <li>• Maintained backend APIs written in Golang and contributed to early-stage Java SDK development for client integration.</li>
                    <li>• Supported release engineering and operational reliability by monitoring production health and enforcing strict SLAs.</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold text-base">Software Engineering Intern, Card Tech</h6>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">June 2024 - August 2024</p>
                  <ul className="text-sm leading-relaxed space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Created feedback loop API in Python for correcting credit card transaction misclassifications.</li>
                    <li>• Engineered DynamoDB solution for storing misclassified transactions through AWS Lambda.</li>
                    <li>• Led implementation of event-driven Lambda functions with 90% code coverage.</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold text-base">Software Engineering Intern, Enterprise Data ML</h6>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">June 2023 - August 2023</p>
                  <ul className="text-sm leading-relaxed space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Spearheaded backend development of chat discussion thread feature for 15,000+ monthly users.</li>
                    <li>• Utilized GraphQL and DynamoDB for optimal performance, data management, and scalability.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research & Other Positions */}
            <div className="space-y-4">
              <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-6">
                <h6 className="font-semibold text-base">Machine Learning Research Assistant</h6>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Kellogg School of Management | October 2022 - June 2023</p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">Utilized text mining and natural language processing techniques in R for finance research project under faculty supervision.</p>
              </div>
              <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-6">
                <h6 className="font-semibold text-base">Data Science Research Intern</h6>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">NYU Center for Data Science | June 2022 - August 2022</p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">Analyzed Chicago Police Department ticket data using R, identifying over 3% error rate and $1 million+ in revenue impact. Cleaned and processed 30 million+ rows of data.</p>
              </div>
              <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-6">
                <h6 className="font-semibold text-base">Software Engineering Intern</h6>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">CDK Global | June 2022 - August 2022</p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">Led development of Spring Boot API for GitHub repository automation. Integrated GitHub Actions workflow to run Terraform scripts and create AWS components.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-6">Skills</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Python",
              "Java",
              "Go",
              "SQL",
              "AWS",
              "Git",
              "GraphQL",
              "DynamoDB",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-6">Education</h4>
          <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-6">
            <h5 className="text-lg font-bold mb-4">Northwestern University</h5>
            <div className="space-y-4">
              <div>
                <h6 className="font-semibold text-base">Master of Science in Computer Science</h6>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">2024</p>
                <ul className="text-sm leading-relaxed space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Machine learning, artificial intelligence, data science, scalable software architecture</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold text-base">Bachelor of Science in Industrial Engineering</h6>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">2024 | Concentration in Data Science & Engineering</p>
                <ul className="text-sm leading-relaxed space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Statistics, optimization, analytics, stochastic processes</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
                <h6 className="font-semibold text-base">President, Northwestern Sports Analytics Club</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="text-2xl font-bold mb-6">Certifications</h4>
          <div className="border-l-4 border-gray-400 dark:border-gray-600 pl-6">
            <h5 className="text-xl font-semibold">AWS Certified Solutions Architect - Associate</h5>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Amazon Web Services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}