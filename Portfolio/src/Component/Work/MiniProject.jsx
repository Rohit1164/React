import BMI from "../assets/BMI.png";
import Tode from "../assets/todo.png";
import Button from "../Button";
import Timer from "../assets/timer.png";
import Color from "../assets/color.png";
import Theame from "../assets/theame.png";
import Calculator from "../assets/calculator.png";
function MiniProject() {
  const cards = [
    {
      name: "BMI",
      image: BMI,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Anim",
    },
    {
      name: "todo",
      image: Tode,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Anim",
    },
    {
      name: "timer",
      image: Timer,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Anim",
    },
    {
      name: "color",
      image: Color,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Anim",
    },
    {
      name: "Calculator",
      image: Calculator,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Anim",
    },
    {
      name: "theme switer",
      image: Theame,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Anim",
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-12 px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {cards.map((card) => (
            <div
              key={card.name}
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
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {card.text}
              </p>
              <Button>View</Button>
            </div>
          ))}
          <Button>VIEW All</Button>
        </div>
      </div>
    </>
  );
}

export default MiniProject;
