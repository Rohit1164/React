import thanks from "../assets/tnx.png";

function Footer() {
  return (
    <div>
      <hr className=" h-1 border-0 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-700 dark:via-white dark:to-gray-700" />

      <div className="grid justify-center items-center bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
        <img
          className="h-80 w-80 lg:ml-52 md:m-32 ml-0"
          src={thanks}
          alt="thanks"
        />
        <h1 className="lg:text-7xl md:text-5xl text-3xl text-center md:-mt-64 -mt-4 font-bold bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
          Thank You, For Visiting
        </h1>
      </div>
    </div>
  );
}

export default Footer;
