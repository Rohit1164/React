import React, { useState, useEffect } from "react";
import { deleteData, getApiData } from "../service/FetchApiData";
import Form from "./Form";
import ErrorImg from "../assets/notFound.png";

function ShowData() {
  const [data, setData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const res = await getApiData();
      setData(res.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading-circle"></div>;
  }

  if (error) {
    return (
      <div className="Error">
        <img src={ErrorImg} alt="Page not found" />
      </div>
    );
  }

  const handleDelete = async (id) => {
    try {
      const response = await deleteData(id);
      if (response.status === 200) {
        const filteredData = data.filter((item) => item.id !== id);
        setData(filteredData);
      }
    } catch (error) {
      setError(true);
    }
  };

  const handleEdit = (curEle) => {
    setDataUpdate(curEle);
  };

  return (
    <div className="min-h-screen bg-[#1a202c] text-white p-2">
      <Form
        data={data}
        setData={setData}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
      <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-white pb-4">
        {data.map((curEle) => {
          const { id, title, body } = curEle;
          return (
            <li
              key={id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform relative"
            >
              <div className="p-10">
                <p className="text-lg font-semibold">Title: {title}</p>
                <p className="text-gray-400 pb-8">Body: {body}</p>
                <div className="flex">
                  <button
                    className="bg-gray-800 rounded-md shadow-lg h-10 mt-8 w-24 absolute bottom-4"
                    onClick={() => handleEdit(curEle)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-gray-800 rounded-md shadow-lg h-10 mt-8 ml-40 w-24 absolute bottom-4"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ShowData;
