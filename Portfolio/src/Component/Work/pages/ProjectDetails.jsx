import Button from "../../Button";
import projectImage from "../../assets/wap.png";

const ProjectDetails = () => {
  const project = {
    title: "Task Manager App",
    description:
      "A productivity web application to manage daily tasks, set reminders, and track project progress. Designed for teams and individuals who value efficiency and organization.",
    image: projectImage,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demoLink: "https://demo-taskmanager.com",
    githubLink: "https://github.com/username/task-manager-app",
    usedBy: ["Developers", "Project Managers", "Students", "Startups"],
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl mb-6 w-full object-cover max-h-80"
        />

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Used By:</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {project.usedBy.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <Button>Live Demo</Button>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Source Code</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
