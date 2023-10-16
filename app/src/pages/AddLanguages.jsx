import Layout from "../components/Layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddLanguages({ addDiv }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState([
    {
      languageName: "",
      founder: "",
      year: "",
      difficulty: "easy",
    },
  ]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    //console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log(formData);
    addDiv(formData);
    navigate("/");
    // <Redirect to="/" />;
  };
  return (
    <Layout>
      <div className="container">
        <h2>Add a New Programming Language</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="languageName">Language Name:</label>
            <input
              type="text"
              id="languageName"
              name="languageName"
              value={formData.languageName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="founder">Founder:</label>
            <input
              type="text"
              id="Founder"
              name="founder"
              value={formData.founder}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="select-input" id="add-select">
              Difficulty Level:
            </label>
            <select
              id="select-input"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="easy">Easy</option>
              <option value="normal">Normal</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="buttondiv">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
export default AddLanguages;
