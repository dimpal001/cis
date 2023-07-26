import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/loading";
import "./collegeDetails.css";
import { fetchColleges } from "../College_API/get_data";

const CollegeDetails = () => {
  const { college_name } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    const getCollegeDetail = async () => {
      const collegesData = await fetchColleges();
      const selectedCollege = collegesData.find(
        (college) => college.college_name === college_name
      );
      setCollege(selectedCollege);
    };
    getCollegeDetail();
  }, [college_name]);

  if (!college) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <h1 className="college_details text-center">College Details</h1>
      <div className="container">
      <div className="container border rounded">
        <h2 className="text-center p-3">{college.college_name}</h2>
        <a href="/colleges" className="btn">Back</a>

        <table class="table table-striped">
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Code</td>
              <td>{college.college_code}</td>
            </tr>
            <tr>
              <td>College Name</td>
              <td>{college.college_name}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{college.address}</td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td>{college.contact_number}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{college.email}</td>
            </tr>
            <tr>
              <td>Principal</td>
              <td>{college.Principal}</td>
            </tr>
            <tr>
              <td>Accreditation Status</td>
              <td>{college.accreditation_status}</td>
            </tr>
            <tr>
              <td>Offered Course</td>
              <td>{college.courses[0].course_name}</td>
            </tr>
            <tr>
              <td>Affiliation Status</td>
              <td>{college.courses[0].affiliation_validity}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default CollegeDetails;
