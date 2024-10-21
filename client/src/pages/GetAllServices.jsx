import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const GetAllServices = () => {
  const [ServicesData, setServicesData] = useState([]);
  const getServicesData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/data/getAllServices",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setServicesData(data);
      } else {
        console.log("some error is coming");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://localhost:5000/api/data/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        getServicesData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServicesData();
  }, []);
  return (
    <>
      <div className="mt-5 admin_user_detail_container text-dark">
        <table
          className="table table-bordered table-hover text-center"
          style={{
            backgroundColor: "#f8f9fa",
            color: "#333",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#007bff", color: "#fff" }}>
            <tr className="rows">
              <th className="col">_id</th>
              <th className="col">Service Name</th>
              <th className="col">Price</th>
              <th className="col">Description</th>
              <th className="col">see full detail</th>
              <th className="col">Edit</th>
              <th className="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {ServicesData.map((curService, index) => (
              <tr
                className="column"
                key={index}
                style={index % 2 === 0 ? { backgroundColor: "#e9ecef" } : {}}
              >
                <td className="col">{curService._id}</td>
                <td className="col">{curService.service}</td>
                <td className="col">{curService.price}</td>
                <td className="col">
                  {curService.description.substring(0, 70)}....
                </td>
                <td className="col">
                  <Link
                    className="text-decoration-none text-dark"
                    to={`${curService._id}/seemore`}
                  >
                    <button
                      className="btn btn-sm btn-primary"
                      style={{ fontWeight: "bold" }}
                    >
                      see more
                    </button>
                  </Link>
                </td>
                <td className="col">
                  <Link
                    className="text-decoration-none text-dark"
                    to={`${curService._id}/edit`}
                  >
                    <button
                      className="btn btn-sm btn-warning"
                      style={{ fontWeight: "bold" }}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td className="col">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteUser(curService._id)}
                    style={{ fontWeight: "bold" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetAllServices;
