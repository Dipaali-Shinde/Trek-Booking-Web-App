import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fort from "../images/fort.jpg";

export default function AddTrek() {
  let navigate = useNavigate();

  const [trek, settrek] = useState({
    name: "",
    location: "",
    source: "",
    distance: "",
    price: "",
    imgUrl: "",
    imgUrl1: "",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
    date: "",
    timing: "",
    day1: "",
    day2: "",
    par1: "",
    par2: "",
    par3: "",
    par4: "",
    par5: "",
  });

  const {
    name,
    location,
    source,
    distance,
    price,
    imgUrl,
    imgUrl1,
    imgUrl2,
    imgUrl3,
    imgUrl4,
    date,
    timing,
    day1,
    day2,
    par1,
    par2,
    par3,
    par4,
    par5,
  } = trek;

  const onInputChange = (e) => {
    settrek({ ...trek, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/addtrek", trek);
    navigate("/home/:id");
  };

  const sty2 = {
    background: "#87ceeb",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
  };
  //border rounded p-4 mt-2 shadow
  return (
    <div className="container" style={sty2}>
      <div className="row">
        <div className="col-md-6 offset-md-3 ">
          <h2 className="text-center m-4 ">Edit Trek</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Add Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Title"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Location" className="form-label">
                Add Location
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Location"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Location" className="form-label">
                Add Source Location
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Location"
                name="source"
                value={source}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Location" className="form-label">
                Add distance
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Location"
                name="distance"
                value={distance}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add Date
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add timing
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Timing"
                name="timing"
                value={timing}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <h6>Add DayWise Scheduale </h6>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add day1
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Day 1"
                name="day1"
                value={day1}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add day2
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="day 2"
                name="day2"
                value={day2}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <h6>Add info</h6>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add par1
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="par1"
                value={par1}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add par2
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="par2"
                value={par2}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add par3
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="par3"
                value={par3}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add par4
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="par4"
                value={par4}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Add par5
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="
                "
                name="par5"
                value={par5}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Image imgUrl
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Image Url"
                name="imgUrl"
                value={imgUrl}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Image imgUrl1
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Image Url"
                name="imgUrl1"
                value={imgUrl1}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Image imgUrl2
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Image Url"
                name="imgUrl2"
                value={imgUrl2}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Image imgUrl3
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Image Url"
                name="imgUrl3"
                value={imgUrl3}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Image imgUrl4
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Image Url"
                name="imgUrl4"
                value={imgUrl4}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
