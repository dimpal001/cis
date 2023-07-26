import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/loading";
const Home = () => {
  const [data, setData] = useState({ email: "", pass: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const submitForm = () => {
    if (data.pass == "dimpal" && data.email == "dimpal") {
      toast.success("Login successfull!", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
      setData({ email: "", pass: "" });
    } else if (data.pass == "" && data.email == "") {
      toast.warn("Fill email and password!", {
        position: "top-center",
        autoClose: 1500,
      });
    } else {
      toast.error("Invalid credentials!", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="row my-4">
        <div className="notice col-md-8 p-2">
          <div className="p-5 notice_board text-white bg-dark rounded-3">
            <h2>North Eastern Hill University, Shillong</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure
              amet, error debitis ex minima mollitia nulla repellat pariatur
              provident.
            </p>
          </div>
        </div>
        <div className=" col-md-4 p-2">
          <main className="form-signin form rounded">
            <div className="">
              <h1 className="h3 mb-3 fw-normal text-center ">College Login</h1>

              <div className="form-floating login_input">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  name="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  value={data.email}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating login_input">
                <input
                  type="password"
                  className="form-control "
                  name="pass"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={handleChange}
                  value={data.pass}
                />
                <label for="floatingPassword">Password</label>
              </div>

              <button
                className="w-100 btn btn-lg"
                type="submit"
                onClick={submitForm}
              >
                Sign in
              </button>
              <ToastContainer />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
