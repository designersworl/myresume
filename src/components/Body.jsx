export default function Body() {
  return (
    <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      {/* About Section */}
      <section className="w-full p-4 sm:p-6 mb-4 sm:mb-6 bg-white rounded-lg shadow-lg border-2 border-transparent hover:border-purple-400 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-400 to-purple-500 transition-colors duration-300">
          About Me
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          I am an enthusiastic and dedicated aspiring web designer currently expanding my skill set in front-end and back-end development. I am passionate about creating intuitive, user-friendly websites and applications that deliver seamless user experiences.
        </p>
      </section>

      <div className="flex flex-col md:flex-row md:space-x-6">
        <section className="md:w-1/2 p-4 sm:p-6 bg-white rounded-lg shadow-lg border-2 border-transparent hover:border-blue-400 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 mb-4 md:mb-0">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-teal-400 to-blue-500 transition-colors duration-300">
            Education
          </h1>
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2 text-gray-700">
              Bachelor of Technology (B.Tech) in Electronics and Communication Engineering
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              <li className="hover:text-blue-500 transition-colors duration-300">
                Vikas College of Engineering and Technology, Vijayawada Nunna
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300">
                Graduated: May 2019
              </li>
              <li className="hover:text-blue-500 transition-colors duration-300">
                GPA: 80%
              </li>
            </ul>
          </div>

          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2 text-gray-700">Additional Courses</h2>
            <div className="mb-2 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-medium mb-1 text-gray-600">Basics of VLSI</h3>
              <ul className="list-disc list-inside ml-4 text-gray-500">
                <li className="hover:text-teal-500 transition-colors duration-300">
                  Maven Silicon (Post-Bachelor’s)
                </li>
                <li className="hover:text-teal-500 transition-colors duration-300">
                  Topics Covered: Introduction to VLSI Design, CMOS Fabrication Process, Logic Gates, Verilog HDL Basics
                </li>
              </ul>
            </div>
            <div className="mb-2 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-medium mb-1 text-gray-600">Python Workshop</h3>
              <ul className="list-disc list-inside ml-4 text-gray-500">
                <li className="hover:text-teal-500 transition-colors duration-300">
                  Vikas College of Engineering and Technology (Third Year)
                </li>
                <li className="hover:text-teal-500 transition-colors duration-300">
                  Topics Covered: Basics of Python Programming, Data Structures
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-1 text-gray-600">Web Development and Design</h3>
              <ul className="list-disc list-inside ml-4 text-gray-500">
                <li className="hover:text-teal-500 transition-colors duration-300">
                  Coursera (Self-Study)
                </li>
                <li className="hover:text-teal-500 transition-colors duration-300">
                  Languages Learned: HTML, CSS, JavaScript
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="md:w-1/2 flex flex-col space-y-4 mt-4 md:mt-0">
          <section className="flex-1 p-4 sm:p-6 bg-white rounded-lg shadow-lg border-2 border-transparent hover:border-teal-400 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-teal-400 to-green-500 transition-colors duration-300">Hobbies</h1>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              <li className="hover:text-green-500 transition-colors duration-300">Reading Books</li>
              <li className="hover:text-green-500 transition-colors duration-300">Building small applications</li>
              <li className="hover:text-green-500 transition-colors duration-300">Watching movies</li>
              <li className="hover:text-green-500 transition-colors duration-300">Cooking</li>
            </ul>
          </section>

          <section className="flex-1 p-4 sm:p-6 bg-white rounded-lg shadow-lg border-2 border-transparent hover:border-green-400 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-red-400 to-orange-500 transition-colors duration-300">Skills</h1>
            <ul className="list-disc list-inside ml-4 text-gray-600">
              <li className="hover:text-orange-500 transition-colors duration-300">Web Technologies: HTML, CSS, JavaScript, React.js</li>
              <li className="hover:text-orange-500 transition-colors duration-300">Development Tools: Git, VS Code</li>
              <li className="hover:text-orange-500 transition-colors duration-300">Responsive Design: Mobile-first approach, Bootstrap, Tailwind CSS</li>
              <li className="hover:text-orange-500 transition-colors duration-300">Soft Skills: Teamwork, Communication</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
