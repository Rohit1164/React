import BMI from "../assets/BMI.png";
import Tode from "../assets/todo.png";
import Timer from "../assets/timer.png";
import Color from "../assets/color.png";
import Theame from "../assets/theame.png";
import Calculator from "../assets/calculator.png";
function MiniProject() {
  return (
    <>
      <hr />
      <div className="box-content lg:h-[200%]  md:h-[280%] h-[480%] w-[100%] pl-1 z sticky top-1 bg-pink-400">
        <div className="grid h-[80%]  lg:grid-cols-3 justify-center items-center md:grid-cols-2 grid-cols-1 pl-12 p-20 px-0">
          <div className="grid h-80 w-80 md:ml-8 m-16">
            <img className="h-60 w-60" src={Tode} alt="tode" />
            <h2 className="text-4xl font-bold text-green-950 font-mono">
              Todo
            </h2>
            <p className="text-xl text-green-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              rerum, inventore eius maxime quia corporis obcaecati optio velit
              illum dolorem?
            </p>
            <button className="text-xl font-bold h-10 w-32 m-3 ml-20 bg-green-950 text-pink-400 rounded-md">
              VIEW
            </button>
          </div>
          <div className="grid h-80 w-80 md:ml-8 m-16 mt-32">
            <img className="h-60 w-60" src={BMI} alt="BMI" />
            <h2 className="text-4xl font-bold text-green-950 font-mono">BMI</h2>
            <p className="text-xl text-green-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              rerum, inventore eius maxime quia corporis obcaecati optio velit
              illum dolorem?
            </p>
            <button className="text-xl font-bold h-10 w-32 m-3 ml-20 bg-green-950 text-pink-400 rounded-md">
              VIEW
            </button>
          </div>
          <div className="grid h-80 w-80 md:ml-8 m-16 mt-32">
            <img className="h-60 w-60" src={Calculator} alt="Calculator" />
            <h2 className="text-4xl font-bold text-green-950 font-mono">
              Calculator
            </h2>
            <p className="text-xl text-green-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              rerum, inventore eius maxime quia corporis obcaecati optio velit
              illum dolorem?
            </p>
            <button className="text-xl font-bold h-10 w-32 m-3 ml-20 bg-green-950 text-pink-400 rounded-md">
              VIEW
            </button>
          </div>
          <div className="grid h-80 w-80 md:ml-8 m-16 mt-32">
            <img className="h-60 w-60" src={Theame} alt="theame" />
            <h2 className="text-4xl font-bold text-green-950 font-mono">
              Theame switcher
            </h2>
            <p className="text-xl text-green-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              rerum, inventore eius maxime quia corporis obcaecati optio velit
              illum dolorem?
            </p>
            <button className="text-xl font-bold h-10 w-32 m-3 ml-20 bg-green-950  text-pink-400 rounded-md">
              VIEW
            </button>
          </div>
          <div className="grid h-80 w-80 md:ml-8 m-16 mt-32">
            <img className="h-60 w-60" src={Timer} alt="timer" />
            <h2 className="text-4xl font-bold text-green-950 font-mono">
              Timer
            </h2>
            <p className="text-xl text-green-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              rerum, inventore eius maxime quia corporis obcaecati optio velit
              illum dolorem?
            </p>
            <button className="text-xl font-bold h-10 w-32 m-3 ml-20 bg-green-950  text-pink-400 rounded-md">
              VIEW
            </button>
          </div>
          <div className="grid h-80 w-80 md:ml-8 m-16 mt-32">
            <img className="h-60 w-60" src={Color} alt="color" />
            <h2 className="text-4xl font-bold text-green-950 font-mono">
              Auto Color Changer
            </h2>
            <p className="text-xl text-green-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              rerum, inventore eius maxime quia corporis obcaecati optio velit
              illum dolorem?
            </p>
            <button className="text-xl font-bold h-10 w-32 m-3 ml-20 bg-green-950 text-pink-400 rounded-md">
              VIEW
            </button>
          </div>
        </div>
        <button
          className="md:text-2xl text-xl font-bold h-16 w-52 lg:ml-[45%] lg:mt-32   md:ml-72 md:mt-52
      mt-[540px] ml-36 bg-green-950  text-pink-400 rounded-md"
        >
          VIEW All
        </button>
      </div>
    </>
  );
}

export default MiniProject;
