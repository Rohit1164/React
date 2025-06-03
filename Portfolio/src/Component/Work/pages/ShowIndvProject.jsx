import { NavLink, useParams } from "react-router-dom";
import BMI from "../../assets/BMI.png";
import Tode from "../../assets/todo.png";
import Timer from "../../assets/timer.png";
import Color from "../../assets/color.png";
import Calculator from "../../assets/calculator.png";
import Theame from "../../assets/theame.png";
import Button from "../../Button";

const cards = [
  {
    id: 1,
    name: "BMI",
    image: BMI,
    text: "The BMI (Body Mass Index) Calculator is a simple health tool that allows users to input their height and weight, then calculates their BMI to determine if they are underweight, normal, overweight, or obese based on standard BMI categories",
    featurs: [
      "Real-time BMI calculation",
      "Underweight",
      "Normal",
      "Overweight",
    ],
    githubLink: "https://github.com/username/task-manager-app",
    Technology: ["HTML", "CSS", "JavaScript", "Tailwindcss"],
  },
  {
    id: 2,
    name: "Todo",
    image: Tode,
    text: "The ToDo App is a simple productivity tool designed to help users manage their daily tasks. It allows users to add, delete, and mark tasks as completed. The intuitive UI and responsive design ensure a seamless user experience across all devices.",
    featurs: [
      "Add new tasks with a title",
      "Mark tasks as completed or incomplete",
      "Delete tasks",
      "Real-time task updates without page reload",
    ],
    githubLink: "https://github.com/username/task-manager-app",
    Technology: ["HTML", "CSS", "JavaScript", "Tailwindcss"],
  },
  {
    id: 3,
    name: "Timer",
    image: Timer,
    text: "The Timer project is a simple web application that allows users to start, stop, and reset a countdown or stopwatch. It's ideal for productivity, workouts, or time-based tasks. The interface is user-friendly, with real-time updates and responsive design.",
    featurs: [
      "Start, pause, and reset buttons",
      "Real-time countdown or stopwatch",
      "Alerts or visual feedback when time is up",
      "Responsive UI for mobile and desktop",
    ],
    githubLink: "https://github.com/username/task-manager-app",
    Technology: ["HTML", "CSS", "JavaScript", "Tailwindcss"],
  },
  {
    id: 4,
    name: "Color",
    image: Color,
    text: "The Color Generator is a simple yet powerful web-based tool that allows users to generate random colors or input their own color codes to see corresponding color shades and tints. This project helps users explore color palettes for use in web design, UI/UX, and digital art. It also provides HEX, RGB, and HSL values to assist developers and designers with implementation.",
    featurs: [
      "Generate random colors with a single click.",
      "Input custom HEX or RGB values to generate a palette.",
      "Copy color codes to clipboard with ease.",
      "Responsive and interactive UI.",
      "Light/dark theme compatibility.",
    ],
    githubLink: "https://github.com/username/task-manager-app",
    Technology: ["HTML", "CSS", "JavaScript", "Tailwindcss"],
  },
  {
    id: 5,
    name: "Calculator",
    image: Calculator,
    text: "A simple and responsive calculator web application that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The UI is designed to be clean and minimal, providing users with an intuitive experience. The app includes keyboard support and error handling (e.g., divide-by-zero).",
    featurs: [
      "Real-time display updates",
      "Keyboard and button input support",
      "Clear (C) and backspace functionality",
      "Responsive layout for mobile and desktop",
      "Error message handling for invalid expressions",
    ],
    githubLink: "https://github.com/username/task-manager-app",
    Technology: ["HTML", "CSS", "JavaScript", "Tailwindcss"],
  },
  {
    id: 6,
    name: "Theme switer",
    image: Theame,
    text: "The Theme Switcher project allows users to toggle between light and dark modes in a web application. It enhances user experience by respecting personal visual preferences or system settings, and improves accessibility in varying lighting conditions.",
    featurs: [
      "Toggle switch to change theme (light/dark)",
      "Auto-detects system theme preference",
      "Theme preference persists across sessions",
      "Clean and minimal UI",
    ],
    githubLink: "https://github.com/username/task-manager-app",
    Technology: ["HTML", "CSS", "JavaScript", "Tailwindcss"],
  },
];

function MiniProjectDetails() {
  const { id } = useParams();
  const project = cards.find((card) => card.id === parseInt(id));

  if (!project)
    return <div className="p-4 text-red-500">Project Not Found</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white grid items-center justify-center p-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <img
          src={project.image}
          alt={project.name}
          className="h-40 w-40 object-contain mx-auto mb-4"
        />
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="text-gray-700 dark:text-gray-300">{project.text}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
            <div className="flex flex-wrap gap-3">
              {project.Technology.map((tech) => (
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
            <h2 className="text-2xl font-semibold mb-2">Features : </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {project.featurs.map((user) => (
                <li key={user}>{user}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Source Code</Button>
          </a>
        </div>
      </div>
      <Button>
        <NavLink to={"/mini-projects"}>Go Back</NavLink>
      </Button>
    </div>
  );
}

export default MiniProjectDetails;
