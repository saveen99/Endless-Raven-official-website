import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";

export default function AdminReviews() {
  const [data, setData] = useState([]);
  const [activeRow, setActiveRow] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const initialRowState = {
    name: "",
    mail: "",
    stars: "",
    content: "",
    project: "",
    img: "",
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/review/get-reviews");
        const data = await res.json();
        if (res.ok) {
          setData(data.reviews);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setActiveRow({ ...activeRow, [e.target.id]: e.target.value.trim() });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setActiveRow(initialRowState);
  };

  setTimeout(() => {
    setSuccess("");
    setError("");
  }, 10000);

  const handleAddNew = async (e) => {
    e.preventDefault();
    if (Object.keys(activeRow).length === 0) {
      return;
    }
    if ("_id" in activeRow) {
      return setError("this review already added");
    }
    try {
      const res = await fetch("/api/review/add-new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(activeRow),
      });
      const data2 = await res.json();
      if (data2.success == false) {
        setLoading(false);
        return setError(data2.message);
      } else {
        setLoading(false);
        setSuccess(data2.message);
        setError(null);
        data.push(activeRow);
        handleClear(e);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (Object.keys(activeRow).length === 0) {
      return;
    }
    if (!("_id" in activeRow)) {
      return setError("You cant update this review");
    }
    try {
      const res = await fetch(`/api/review/update/${activeRow._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(activeRow),
      });
      const data2 = await res.json();
      if (data2.success == false) {
        setLoading(false);
        return setError(data2.message);
      } else {
        setLoading(false);
        setSuccess("updated successfully");
        setError(null);
        const index = data.findIndex((obj) => obj._id === activeRow._id);
        if (index !== -1) {
          setData((prevData) =>
            prevData.map((obj, i) => (i === index ? { ...obj, ...data2 } : obj))
          );
        }
        handleClear(e);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (Object.keys(activeRow).length === 0) {
      return;
    }
    if (!("_id" in activeRow)) {
      return setError("You cant delete this review");
    }
    try {
      const res = await fetch(`/api/review/delete/${activeRow._id}`, {
        method: "DELETE",
      });
      const data2 = await res.json();
      if (data2.success == false) {
        setLoading(false);
        return setError(data2.message);
      } else {
        const newData = data.filter((obj) => obj._id !== activeRow._id);
        setData(newData);
        setLoading(false);
        setSuccess("deleted successfully");
        setError(null);
        handleClear(e);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // console.logs(activeRow);

  return (
    <div className="p-8 w-full mx-auto">
      <h1 className="text-3xl font-semibold text-slate-200 text-center mt-4 mb-8">
        Reviews
      </h1>
      <h2 className="text-xl text-slate-300 mb-2">View All Reviews</h2>
      <Table className="mb-8">
        <Table.Head>
          <Table.HeadCell>name</Table.HeadCell>
          <Table.HeadCell>mail</Table.HeadCell>
          <Table.HeadCell>stars</Table.HeadCell>
          <Table.HeadCell>content</Table.HeadCell>
          <Table.HeadCell>project</Table.HeadCell>
          <Table.HeadCell>img</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data &&
            data.map((data1, index) => {
              return (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-slate-200 cursor-pointer"
                  key={index}
                  onClick={() => setActiveRow(data1)}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {data1.name}
                  </Table.Cell>
                  <Table.Cell> {data1.mail}</Table.Cell>
                  <Table.Cell> {data1.stars}</Table.Cell>
                  <Table.Cell>{data1.content}</Table.Cell>
                  <Table.Cell>{data1.project}</Table.Cell>
                  <Table.Cell>{data1.img}</Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
      <h2 className="text-xl text-slate-300 mb-4 mt-12 font-semibold">
        Add / Edite Projects
      </h2>
      <form
        action=""
        className={`flex flex-col gap-4 max-w-3xl text-slate-800 ${
          loading && "opacity-80"
        }`}
      >
        <input
          type="text"
          placeholder="name"
          id="name"
          value={activeRow.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="mail"
          id="mail"
          value={activeRow.mail}
          onChange={handleChange}
          required
        />
        <textarea
          id="content"
          placeholder="content"
          className="rounded-lg"
          value={activeRow.content}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="number"
          id="stars"
          placeholder="stars"
          value={activeRow.stars}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="project"
          placeholder="project"
          value={activeRow.project}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="img"
          placeholder="img"
          value={activeRow.img}
          onChange={handleChange}
          required
        />
        <div className="flex gap-2 justify-end">
          <button
            onClick={handleClear}
            className="bg-slate-500 px-4 py-2 rounded-lg w-40 my-6 hover:bg-slate-400 font-semibold"
          >
            Clear
          </button>
          <button
            onClick={handleAddNew}
            className="bg-green-500 px-4 py-2 rounded-lg w-40 my-6 hover:bg-green-400 font-semibold "
          >
            Add Review
          </button>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 px-4 py-2 rounded-lg w-40 my-6 hover:bg-blue-400 font-semibold"
          >
            Update Review
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 px-4 py-2 rounded-lg w-40 my-6 hover:bg-red-400 font-semibold"
          >
            Delete Review
          </button>
        </div>
        {error && <span className="text-red-500">{error}</span>}
        {success && <span className="text-green-500">{success}</span>}
      </form>
    </div>
  );
}
