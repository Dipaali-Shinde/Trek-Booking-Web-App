import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditTrek() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [trek, settrek] = useState({
    name: "",
    location: "",
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

  useEffect(() => {
    loadtrek();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/update/${id}`, trek);
    navigate("/home");
  };

  const loadtrek = async () => {
    const result = await axios.get(`http://localhost:8080/api/showtreks/${id}`);
    console.log(result.data);
    settrek(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 ">Edit Trek</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Update Title
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
                Update Location
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
              <label htmlFor="textnox" className="form-label">
                Update Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Image Url"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                update Date
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Url"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Update timing
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Url"
                name="timing"
                value={timing}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <h6>Update DayWise Scheduale </h6>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                update day1
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Url"
                name="day1"
                value={day1}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Update day2
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Url"
                name="day2"
                value={day2}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <h6>update info</h6>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Update par1
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Url"
                name="par1"
                value={par1}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Update par2
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Url"
                name="par2"
                value={par2}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Update par3
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Url"
                name="par3"
                value={par3}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Update par4
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Url"
                name="par4"
                value={par4}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="textnox" className="form-label">
                Update par5
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Image Url"
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
