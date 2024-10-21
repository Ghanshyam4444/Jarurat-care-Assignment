import React, { useEffect, useState } from "react";
import "./home.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const EditServiceDetail = () => {
  const [ServiceData, setServiceData] = useState({
    service: "",
    description: "",
    price: null,
  });
  const params = useParams();
  const navigate = useNavigate();
  const EditServiceDetail = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/data/editService/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ServiceData),
        }
      );
      if (response.ok) {
        console.log("no error");
        setServiceData({ service: "", description: "", price: "" });
        navigate("/get_all_services");
      } else {
        console.log("some error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setServiceData({ ...ServiceData, [name]: value });
  };
  const getuserAllDetail = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/data/getService/${params.id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        console.log("hello");
        const data = await response.json();
        setServiceData(data);
      } else {
        console.log("some error is coming");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getuserAllDetail();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div
            className="col-lg-5 bg-dark text-white p-4"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <h3
                className="text-center"
                style={{
                  color: "#ffc107",
                  fontWeight: "bold",
                }}
              >
                Update Service
              </h3>
            </div>
            <form onSubmit={EditServiceDetail} className="mt-4">
              <div className="mb-3">
                <label
                  htmlFor="service"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Service Name (Min 3 letter)
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  onChange={handleChange}
                  value={ServiceData.service}
                  className="form-control"
                  style={{
                    backgroundColor: "#3a3b3c",
                    color: "#ffffff",
                    border: "none",
                  }}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="price"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Price in Rs
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  onChange={handleChange}
                  value={ServiceData.price}
                  className="form-control"
                  style={{
                    backgroundColor: "#3a3b3c",
                    color: "#ffffff",
                    border: "none",
                    WebkitAppearance: "none", // Chrome/Safari/Edge fix
                  }}
                  placeholder="Enter price"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="description"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  description (min 10 letters)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="form-control"
                  style={{
                    backgroundColor: "#3a3b3c",
                    color: "#ffffff",
                    border: "none",
                  }}
                  value={ServiceData.description}
                  onChange={handleChange}
                  placeholder="Type your description here..."
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <input
                  type="submit"
                  className="btn btn-warning"
                  style={{
                    fontWeight: "bold",
                    borderRadius: "5px",
                  }}
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditServiceDetail;
