import thanks from "../assets/tnx.png";

function Footer() {
  return (
    <div className="lg:h-[145px] w-full bg-gray-300 dark:bg-green-950 text-black dark:text-white">
      <hr />
      <div className="lg:h-[90vh] md:h-[90vh] h-[120%] w-full sticky top-1 bg-gray-300 dark:bg-green-950 text-black dark:text-white">
        <div className="grid justify-center items-center">
          <img
            className="h-80 w-80 lg:ml-52 md:m-32 ml-0"
            src={thanks}
            alt="thanks"
          />
          <h1 className="lg:text-7xl md:text-5xl text-3xl text-center lg:-mt-14 md:-mt-64 -mt-4 font-bold">
            Thank You, For Visiting
          </h1>
        </div>
      </div>
      <div className="bg-gray-300 dark:bg-green-950 text-black dark:text-white">
        <hr />
        <div className="lg:flex grid justify-evenly lg:pt-10">
          <div className="flex justify-evenly gap-10 pt-6 text-2xl">
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div className="flex justify-evenly p-6 gap-6 text-2xl ">
            <p>@BuildByRohit 2025</p>
            <p>|</p>
            <p>DESIGNED BY @BuildByRohit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
