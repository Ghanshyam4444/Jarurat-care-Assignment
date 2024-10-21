import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const SeeFullDetail = () => {
  const params = useParams();
  const [curService, setcurService] = useState("");
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
        setcurService(data);
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
      <div
        className="admin_user_detail_container "
        style={{ marginTop: "100px" }}
      >
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
            </tr>
          </thead>
          <tbody>
            <tr className="column" style={{ backgroundColor: "#e9ecef" }}>
              <td className="col">{curService._id}</td>
              <td className="col">{curService.service}</td>
              <td className="col">{curService.price}</td>
              <td className="col">{curService.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
};

export default SeeFullDetail;
