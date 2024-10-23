import React, { useEffect, useState } from "react";
import { Dialog } from "../ui/Dialog";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { Button } from "../ui/Button";
import { Close } from "../ui/Close";
import { API_URL } from "../../../utils/config";
// import { format } from "mysql";

export const Absences = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [formData, setFormdata] = useState({
    id: "",
    date_from: "",
    date_to: "",
    valid_reason: "",
  });
  const [absenceID, setAbsenceID] = useState("");
  const [absences, setAbsences] = useState([]);
  // const [linkParams , set]

  useEffect(() => {
    fetchAbsences();
  }, []);
  const fetchAbsences = async () => {
    try {
      const response = await fetch(`${API_URL}/get-absences`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to get data");
      }
      const data = await response.json();
      setAbsences(data);
    } catch (error) {
      console.error("Something went wrong", error.message);
    }
  };
  const handleClick = () => {
    setFormdata({
      id: "",
      date_from: "",
      date_to: "",
      valid_reason: "",
    });
    setAbsenceID("");
    setOpenDialog(true);
  };
  const handleCloseClick = () => {
    setOpenDialog(false);
    setOpenDeleteDialog(false);
  };
  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setFormdata((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEditClick = (absence) => {
    setFormdata({
      id: absence.id,
      date_from: formattedDate(absence.date_from),
      date_to: formattedDate(absence.date_to),
      valid_reason: absence.valid_reason || "",
    });
    setAbsenceID(absence.id);
    setOpenDialog(true);
  };
  const handleDeleteClick = (absence) => {
    setFormdata({
      id: "",
      date_from: "",
      date_to: "",
      valid_reason: "",
    });
    setAbsenceID(absence.id);
    setOpenDeleteDialog(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = "";
    try {
      if (
        formData.id !== "" &&
        formData.date_from !== "" &&
        formData.date_to !== "" &&
        formData.valid_reason !== ""
      ) {
        response = await fetch(`${API_URL}/update-absence`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      } else if (absenceID) {
        response = await fetch(`${API_URL}/delete-absence/${absenceID}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({absenceID}),
        });
      } else {
        response = await fetch(`${API_URL}/add-absence`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }

      if (!response.ok) {
        throw new Error("Failed to connect to backend");
      }
      const data = await response.json();
      console.log("Success:", data);
      fetchAbsences();
      alert("success");

      // Close dialog
      handleCloseClick();
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  return (
    <>
      <div className="py-5 px-10">
        <h3 className="font-semibold text-2xl ">
          Manage Leave
          <button
            type="button"
            onClick={handleClick}
            className="float-end text-sm py-2 px-4 bg-primary rounded text-secondary"
          >
            Add New
          </button>
        </h3>
        <table className="w-full border border-primary mt-3 text-start">
          <thead>
            <tr>
            <th className="text-start p-2 border border-primary">
                Date Created
              </th>
              <th className="text-start p-2 border border-primary">
                Date from
              </th>
              <th className="text-start p-2 border border-primary">Date to</th>
              <th className="text-start p-2 border border-primary">
                Valid reason
              </th>
              <th className="text-start p-2 border border-primary">Tools</th>
            </tr>
          </thead>
          <tbody>
            {absences.map((row) => (
              // {console.log("data", row)}
              <tr key={row.id}>
                <td className="text-start p-2 border border-primary">
                  {new Date(row.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </td>
                <td className="text-start p-2 border border-primary">
                  {new Date(row.date_from).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="text-start p-2 border border-primary">
                  {new Date(row.date_to).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="text-start p-2 border border-primary">
                  {row.valid_reason}
                </td>
                <td className="text-start p-2 border border-primary">
                  <button
                    onClick={() => handleEditClick(row)}
                    className="text-green-500 me-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(row)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={openDialog}>
        <button onClick={handleCloseClick} type="button">
          <Close
            className={
              "text-red-500 z-10 absolute cursor-pointer top-2 right-2"
            }
          />
        </button>
        <h3 className="text-lg font-semibold mb-3">
          {absenceID ? "Update" : "Create"} your leave here
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-3">
            <label>Date from</label>
            <Input
              type="date"
              name="date_from" // Updated name to match formData
              value={formData.date_from}
              className="w-full border p-2 rounded-lg"
              onChange={handleChange} // Connected to handleChange
            />
          </div>
          <div className="w-full mb-3">
            <label>Date to</label>
            <Input
              type="date"
              name="date_to" // Updated name to match formData
              value={formData.date_to}
              className="w-full border p-2 rounded-lg"
              onChange={handleChange} // Connected to handleChange
            />
          </div>
          <div className="w-full mb-3">
            <label>Valid reason</label>
            <TextArea
              rows={"4"}
              name="valid_reason" // Updated name to match formData
              value={formData.valid_reason}
              className={"w-full border p-2 rounded-lg"}
              onChange={handleChange} // Connected to handleChange
            />
          </div>
          <div className="w-full mt-5 mb-2">
            <Button
              type={"submit"}
              name={"add_absences"}
              className={
                "w-full p-2 outline-none bg-primary rounded text-secondary"
              }
              text={absenceID ? "Update" : "Create"}
            />
          </div>
        </form>
      </Dialog>

      <Dialog open={openDeleteDialog}>
        <button onClick={handleCloseClick} type="button">
          <Close
            className={
              "text-red-500 z-10 absolute cursor-pointer top-2 right-2"
            }
          />
        </button>
        <h3 className="text-lg font-semibold mb-3 text-center">
          Are you sure , you want to delete this data?
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="w-full mt-5 mb-2 flex justify-center items-center">
            <Button
              type={"submit"}
              name={"add_absences"}
              className={
                "  py-2 px-4 outline-none bg-primary rounded text-secondary hover:text-white"
              }
              text={"Delete"}
            />
          </div>
        </form>
      </Dialog>
    </>
  );
};
