import thanks from "../assets/tnx.png";

function Footer() {
  return (
    <div>
      <div className="grid justify-center items-center">
        <img
          className="h-80 w-80 lg:ml-52 md:m-32 ml-0"
          src={thanks}
          alt="thanks"
        />
        <h1 className="lg:text-7xl md:text-5xl text-3xl text-center md:-mt-64 -mt-4 font-bold text-gray-800">
          Thank You, For Visiting
        </h1>
      </div>
    </div>
  );
}

export default Footer;
