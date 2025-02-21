import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Config from "../config/";
import { Student } from "../models/Student";

const AddStudentForm = () => {
  const [studentInfo, setStudentInfo] = useState<Student>({
    StudentId: 0,
    FirstName: "",
    LastName: "",
    School: "",
  });

  const navigate = useNavigate();

  const addStudent = async (event: React.FormEvent) => {
    event.preventDefault(); 

    try {
      const response = await fetch(`${Config.API_BASE_URL}students/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          FirstName: studentInfo.FirstName,
          LastName: studentInfo.LastName,
          School: studentInfo.School,
        }),
      });

      const data = await response.json();
      console.log("Success:", data);

      
      navigate("/list", { state: { refresh: true } });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="panel panel-default">
      <form onSubmit={addStudent}>
        <h3>Add Student</h3>

        <div className="form-group">
          <label>First Name:</label>
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
            value={studentInfo.FirstName}
            onChange={(event) =>
              setStudentInfo({ ...studentInfo, FirstName: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            value={studentInfo.LastName}
            onChange={(event) =>
              setStudentInfo({ ...studentInfo, LastName: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>School:</label>
          <input
            className="form-control"
            type="text"
            placeholder="School"
            value={studentInfo.School}
            onChange={(event) =>
              setStudentInfo({ ...studentInfo, School: event.target.value })
            }
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
