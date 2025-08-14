import { useState } from "react";
import "./App.css";

export default function MyForm() {
  const [formData, setformdata] = useState({
    name: "",
    phone: "",
    age: "",
    isEmploye: false,
    salary: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const visible =
    formData.name &&
    formData.age &&
    formData.phone &&
    formData.isEmploye &&
    formData.salary;
  return (
    <form
      className="MyForm1"
      onSubmit={(event) => {
        event.preventDefault();

        if (formData.age < 0 || formData.age > 100) {
          setErrorMessage("Wrong Age");
          return;
        }
        if (formData.phone.length > 10) {
          setErrorMessage("Wrong Number");
          return;
        }
        setErrorMessage("");
        alert("Send succisfuly");
      }}
    >
      <h1>Requesting a Loan</h1>
      <hr style={{ width: "100%" }} />
      <label>
        Name <br />
        <input
          placeholder="Your Name"
          name="fullName"
          type="text"
          value={formData.name}
          onChange={(e) => {
            setformdata({ ...formData, name: e.target.value });
          }}
        />
      </label>

      <label>
        Phone Number <br />
        <input
          placeholder="Your phone Number"
          type="text"
          value={formData.phone}
          onChange={(e) => {
            setformdata({ ...formData, phone: e.target.value });
          }}
        />
      </label>
      <label>
        Age: <br />
        <input
          placeholder="Your Age"
          type="text"
          value={formData.age}
          onChange={(e) => {
            setformdata({ ...formData, age: e.target.value });
          }}
        />
      </label>

      <label>
        Are You An Employe?
        <br />{" "}
        <input
          type="CheckBox"
          checked={formData.isEmploye}
          onChange={(e) => {
            setformdata({ ...formData, isEmploye: e.target.checked });
          }}
        />
      </label>
      <label>
        Salary <br />
        <select
          name="SalaryAmount"
          value={formData.salary}
          onChange={(e) => {
            setformdata({ ...formData, salary: e.target.value });
          }}
          style={{ width: "100%", height: "25px", fontSize: "medium" }}
        >
          <option value="">--- Pick Salary ---</option>
          <option value="above5000">Above $5000</option>
          <option value="between2000to5000">Between $2000 to $5000</option>
          <option value="lessthan2000">Less than $2000</option>
        </select>
      </label>
      <label>
        {errorMessage && (
          <div
            style={{
              backgroundColor: "#ffdddd",
              color: "red",
              padding: "10px",
              textAlign: "center",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            {errorMessage}
          </div>
        )}
        <button
          type="submit"
          disabled={!visible}
          style={{
            padding: "10px",
            fontSize: "20px",
          }}
        >
          Submit
        </button>
      </label>
    </form>
  );
}
