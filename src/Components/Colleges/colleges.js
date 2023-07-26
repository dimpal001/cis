import React, { useEffect, useState } from "react";
import axios from "axios";
import "./colleges.css";
import Home from "../Homepage/home";
import Loading from "../Loading/loading";
import { Link } from "react-router-dom";

const Colleges = () => {
  const [cname, setCname] = useState("");
  const [college, setCollege] = useState([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    axios.get("https://cis-api.onrender.com/api/colleges").then((res) => {
      setCollege(res.data);
      setLoading(true);
    });
  }, []);

  const inlineStyle = {
    border: '0.5px solid #0D1282',
  };

  return (
    <>
      <div className="container list_box">

        <div class="form-floating m-2">
          <input style={inlineStyle}
            type="email"
            className="form-control search rounded"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setCname(e.target.value)}
          />
          <label for="floatingInput">Search by College Name</label>
        </div>

        <div className="box rounded m-2">
          {loading ? (
            college.filter((item) =>{
              return cname.toLowerCase() === '' ? item : item.college_name.toLowerCase().includes(cname.toLowerCase())
            })
              .map((clg) => {
                const { _id, college_code, college_name, address, contact_number, email, principal, accreditation_status } = clg;
                return (
                  <>
                    <ul key={_id}>
                      <li className="border-bottom p-2"><Link to={`/colleges/${college_name}`}>{college_name}</Link></li>
                    </ul>
                  </>
                );
              })
          ) : (
            <Loading />
          )}
          
        </div>
      </div>
    </>
  );
};

export default Colleges;
