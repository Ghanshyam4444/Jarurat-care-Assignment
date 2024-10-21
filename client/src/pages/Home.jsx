import React, { useState } from "react";
import "./home.css";
export const Home = () => {
  const [setserviceData, setsetserviceData] = useState({
    service: "",
    description: "",
    price: null,
  });
  const send_message = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/data/addservice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(setserviceData),
        }
      );
      if (response.ok) {
        console.log("no error");
        setsetserviceData({ service: "", description: "", price: "" });
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
    setsetserviceData({ ...setserviceData, [name]: value });
  };
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
                Add a Service
              </h3>
            </div>
            <form onSubmit={send_message} className="mt-4">
              <div className="mb-3">
                <label
                  htmlFor="service"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Service Name (min 3 letter)
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  onChange={handleChange}
                  value={setserviceData.service}
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
                  value={setserviceData.price}
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
                  Description (min 10 letter)
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
                  value={setserviceData.description}
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
