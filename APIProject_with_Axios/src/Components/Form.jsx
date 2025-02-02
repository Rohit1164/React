import React, { useState, useEffect } from "react";
import { postData, updatePostData } from "../service/FetchApiData";

function Form({ data, setData, dataUpdate, setDataUpdate }) {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleonChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    dataUpdate &&
      setAddData({
        title: dataUpdate.title || "",
        body: dataUpdate.body || "",
      });
  }, [dataUpdate]);

  const addApiData = async () => {
    const res = await postData(addData);
    console.log("res", res);
    if (res.status === 201) {
      setData([...data, res.data]);
    }
    setAddData({ title: "", body: "" });
  };

  const updateApiData = async () => {
    try {
      const res = await updatePostData(dataUpdate.id, addData);
      console.log(res);

      if (res.status === 200) {
        setData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === dataUpdate.id ? res.data : curElem;
          });
        });
      }
      setAddData({ title: "", body: "" });
      setDataUpdate({});
    } catch (error) {
      console.log(error);
    }
  };

  const edit = Object.keys(dataUpdate).length === 0;

  const handleAddBtn = async (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addApiData();
    } else if (action === "Edit") {
      updateApiData();
    }
  };

  return (
    <form
      onSubmit={handleAddBtn}
      method=""
      action=""
      className="ml-[30%] w-[630px] bg-gray-900 mb-10 mt-4  p-4 rounded-md shadow-lg"
    >
      <div className="grid justify-center ">
        <input
          type="text"
          name="title"
          placeholder="Add Your Title"
          className="border-1 border-white rounded-md h-10 w-[450px] p-2 m-2"
          value={addData.title}
          onChange={handleonChange}
        />
        <textarea
          type="text"
          name="body"
          placeholder="Add Your Body"
          className="border-1 border-white rounded-md h-32 w-[450px] p-2 m-2"
          value={addData.body}
          onChange={handleonChange}
        />
        <button
          type="submit"
          className="bg-gray-800 rounded-md shadow-lg h-10 w-[450px] p-2 m-2"
          value={edit ? "Add" : "Edit"}
        >
          {edit ? "Add" : "Edit"}
        </button>
      </div>
    </form>
  );
}

export default Form;
