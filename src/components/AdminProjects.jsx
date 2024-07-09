import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";

export default function AdminProjects() {
  const [data, setData] = useState([]);
  const [activeRow, setActiveRow] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const initialRowState = {
    name: "",
    type: "",
    description: "",
    photoUrl: "",
    link: "",
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects/get-all?type=all");
        const data = await res.json();
        if (res.ok) {
          setData(data.data);
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
      return setError("this project already added");
    }
    try {
      const res = await fetch("/api/projects/add-new", {
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
      return setError("You cant update this project");
    }
    try {
      const res = await fetch(`/api/projects/update/${activeRow._id}`, {
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
        console.log(data2)
        const index = data.findIndex((obj) => obj._id === activeRow._id);
        if (index !== -1) {
          setData((prevData) =>
            prevData.map((obj, i) =>
              i === index ? { ...obj, ...data2 } : obj
            )
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
      return setError("You cant delete this project");
    }
    try {
      const res = await fetch(`/api/projects/delete/${activeRow._id}`, {
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

  // console.log(activeRow);

  return (
    <div className="p-8 w-full mx-auto">
      <h1 className="text-3xl font-semibold text-slate-200 text-center mt-4 mb-8">
        Projects
      </h1>
      <h2 className="text-xl text-slate-300 mb-2">View All Projects</h2>
      <Table className="mb-8">
        <Table.Head>
          <Table.HeadCell>Project name</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>photoUrl</Table.HeadCell>
          <Table.HeadCell>Link</Table.HeadCell>
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
                  <Table.Cell> {data1.type}</Table.Cell>
                  <Table.Cell> {data1.description}</Table.Cell>
                  <Table.Cell>{data1.photoUrl}</Table.Cell>
                  <Table.Cell>{data1.link}</Table.Cell>
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
          placeholder="type"
          id="type"
          value={activeRow.type}
          onChange={handleChange}
          required
        />
        <textarea
          id="description"
          placeholder="description"
          className="rounded-lg"
          value={activeRow.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          id="photoUrl"
          placeholder="photoUrl"
          value={activeRow.photoUrl}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="link"
          placeholder="link"
          value={activeRow.link}
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
            Add Project
          </button>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 px-4 py-2 rounded-lg w-40 my-6 hover:bg-blue-400 font-semibold"
          >
            Update Project
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 px-4 py-2 rounded-lg w-40 my-6 hover:bg-red-400 font-semibold"
          >
            Delete Project
          </button>
        </div>
        {error && <span className="text-red-500">{error}</span>}
        {success && <span className="text-green-500">{success}</span>}
      </form>
    </div>
  );
}
