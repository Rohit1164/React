import BMI from "../assets/BMI.png";
import Tode from "../assets/todo.png";
import Button from "../Button";
import Timer from "../assets/timer.png";
import Color from "../assets/color.png";
import Theame from "../assets/theame.png";
import Calculator from "../assets/calculator.png";
import { NavLink } from "react-router-dom";

function MiniProject() {
  const cards = [
    {
      id: 1,
      name: "BMI",
      image: BMI,
    },
    {
      id: 2,
      name: "todo",
      image: Tode,
    },
    {
      id: 3,
      name: "timer",
      image: Timer,
    },
    {
      id: 4,
      name: "color",
      image: Color,
    },
    {
      id: 5,
      name: "Calculator",
      image: Calculator,
    },
    {
      id: 6,
      name: "theme switer",
      image: Theame,
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-12 px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-auto text-center transition transform hover:scale-105 duration-400 dark:shadow-blue-500 shadow-2xl"
            >
              <img
                src={card.image}
                alt={card.name}
                className="h-40 w-40 object-contain mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold font-mono mb-2 text-gray-800 dark:text-white">
                {card.name}
              </h2>
              <Button>
                <NavLink to={`/mini-project-details/${card.id}`}>View</NavLink>
              </Button>
            </div>
          ))}
          <Button>VIEW All</Button>
        </div>
      </div>
    </>
  );
}

export default MiniProject;
