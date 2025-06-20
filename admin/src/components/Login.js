import React, {useState} from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  
  const users = {
    name: "",
    email: "",
    password: ""
  }
  const [user, setUser] = useState(users);

  const navigate = useNavigate();
  const inputHandler = (e) => {
   
    const {name, value} = e.target;
    
     setUser({...user, [name]: value});
}
const submitForm = async (e) => {
  e.preventDefault(); 
  await axios.post("http://localhost:8081/students/create/", user)
  .then((response)=> {
    
    toast.success(response.data.msg, {position: "top-right"})
     
    navigate("/Dashboard");
  }).catch((err) => console.log(err));
}
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   const data = {
  //     name: name,
  //     email: email,
  //     password: password
  //   }
  //   axios.post('http://localhost:8081/students/create/', data)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
  return (
    <>
      <div className="container p-5">
        <section
          className="vh-100"
          style={{ backgroundColor: "#9A616D", borderRadius: "50px" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                        alt="login form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={submitForm}>
                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>
                          <div className="form-floating form-outline mb-4">
                            <input
                              type="text"
                              className="form-control"
                              required
                              id="name"
                              name="name"
                              placeholder=""
                              autoComplete="off"
                              onChange={inputHandler}
                              
                            />
                            <label htmlFor="">
                              <b>name</b>
                            </label>
                          </div>
                          <div className="form-floating form-outline mb-4">
                            <input
                              type="email"
                              className="form-control"
                              required
                              placeholder=""
                              id="email"
                              name="email"
                              autoComplete="off"
                              onChange={inputHandler}
                            />
                            <label htmlFor="floatingInput">
                              <b>Email</b>
                            </label>
                          </div>
                          <div className="form-floating form-outline mb-4">
                            <input
                              type="password"
                              className="form-control"
                              id="password" 
                              name="password"
                              required
                              placeholder=""
                              autoComplete="off"
                              onChange={inputHandler}
                            />
                            <label htmlFor="floatingPassword">
                              <b>Password</b>
                            </label>
                          </div>
                          {/* <Link to="/Dashboard"> */}
                          <div className=" d-grid gap-2 pt-1 mb-4">
                            <button
                              className="btn btn-outline-dark btn-lg"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                          {/* </Link> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
