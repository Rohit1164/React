import developerImg from "../assets/imortent.jpg";
import resumeFile from "../assets/resume.pdf";
import Button from "../Button";

const skills = [
  { name: "HTML&CSS", percent: 95 },
  { name: "JavaScript", percent: 80 },
  { name: "MongoDB", percent: 80 },
  { name: "Express.js", percent: 85 },
  { name: "React.js", percent: 90 },
  { name: "Node.js", percent: 85 },
  { name: "Tailwind CSS", percent: 95 },
];

const frameworks = ["Tailwind CSS", "Bootstrap", "Material UI", "DaisyUI"];
const languages = ["C", "C++", "Java", "Python", "TypeScript"];

function About() {
  return (
    <div className="px-20 py-10 bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white tracking-tight">
          About Me
        </h2>
        <div className="mt-2 mx-auto h-1 w-24 bg-gray-900 dark:bg-white rounded-full"></div>
      </div>
      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Developer Image */}
        <img
          src={developerImg}
          alt="Developer"
          className="rounded-2xl shadow-lg w-full object-cover max-h-[900px]"
        />

        {/* Content */}
        <div>
          <p className="mb-6 text-lg leading-relaxed">
            I’m a passionate <strong>MERN Stack Developer</strong> focused on
            building full-stack applications with seamless front-end and
            back-end integration. With a love for clean code and responsive UI,
            I aim to deliver user-friendly and performant solutions.
          </p>

          {/* Skills */}
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-3 bg-gray-900 dark:bg-white rounded-full"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Frameworks */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-2">Styled Frameworks</h4>
            <ul className="flex flex-wrap gap-3">
              {frameworks.map((fw) => (
                <li
                  key={fw}
                  className="bg-blue-100 dark:bg-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {fw}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="mt-4">
            <h4 className="text-xl font-semibold mb-2">
              Programming Languages
            </h4>
            <ul className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className="bg-green-100 dark:bg-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>

          {/* Resume Button */}
          <Button>
            <a href={resumeFile} download>
              Download Resume
            </a>
          </Button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default About;
