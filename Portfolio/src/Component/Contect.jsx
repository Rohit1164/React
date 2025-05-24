function Contect() {
  return (
    <div className="lg:h-[90vh] h-full w-full bg-pink-400">
      <h1 className="text-7xl pt-16 font-bold text-center text-green-950">
        Contect me
      </h1>
      <div className="grid justify-center items-center gap-3 pt-10">
        <input
          className="h-16 w-96 border-none shadow-green-950 shadow-2xl  rounded-md p-4 text-xl"
          type="text"
        />
        <textarea
          className="w-96 h-60 rounded-md mt-8 mb-8 p-4 text-xl shadow-green-950 shadow-2xl border-none"
          name=""
          id=""
        ></textarea>
        <button className="bg-green-950 w-96 h-16 text-white text-2xl rounded-md font-bold border-none">
          Send Masssage on Gmail{" "}
        </button>
      </div>
    </div>
  );
}

export default Contect;
