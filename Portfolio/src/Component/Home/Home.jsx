import demo from "../assets/demo.jpg";
function Home() {
  return (
    <>
      <hr />
      <div id="home" className="grid text-center h-[100vh] bg-pink-400">
        <h1
          id="intro"
          className="lg:text-[150px] md:text-8xl text-6xl font-bold text-green-950 mt-32  "
        >
          HII I&apos;M ROHIT
        </h1>

        <img
          id="image"
          className="lg:h-96 lg:w-96 md:h-80 md:w-80 h-60 w-60 rounded-full md:ml-[40%] ml-[12%] -mt-[30px]  md:-mt-36 animate-none "
          src={demo}
          alt="demo"
        />

        <h1
          id="profetion"
          className="lg:text-[150px] md:text-8xl text-6xl font-bold text-green-950 md:-mt-40 -mt-[50px] animate-pulse"
        >
          WEB DEVELOPER
        </h1>
      </div>
    </>
  );
}

export default Home;
