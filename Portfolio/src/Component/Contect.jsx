function Contect() {
  return (
    <>
      <hr />
      <div className="lg:h-[90vh] h-full w-full bg-gray-300 dark:bg-green-950 text-black dark:text-white">
        <h1 className="text-7xl pt-16 font-bold text-center">Contect me</h1>
        <div className="grid justify-center items-center gap-3 pt-10">
          <input
            className="h-16 w-96 text-black border-none shadow-green-950 shadow-2xl  rounded-md p-4 text-xl"
            type="text"
            placeholder="Enter your e-mail"
          />
          <textarea
            className="w-96 h-60 rounded-md mt-8 mb-8 p-4 text-xl shadow-green-950 shadow-2xl border-none text-black"
            placeholder="Description..."
          ></textarea>
          <button className="bg-gray-300 dark:bg-green-950 text-black dark:text-white w-96 h-16  text-2xl rounded-md font-bold border-y-2 border-white">
            Send Masssage on Gmail
          </button>
        </div>
      </div>
    </>
  );
}

export default Contect;
