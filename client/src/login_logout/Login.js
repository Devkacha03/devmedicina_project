import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
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
  
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const collectData = async (e) => {
  //   e.preventDefault();
  //   let result = await fetch('http://localhost:8081/students/create/',{
  //     method: 'post',
  //     body: JSON.stringify({name,email,password}),
  //     headers: {
  //       'Content-Type': "application/json",
       
  //     },
  //   });
  //   result = await result.json();
  //   localStorage.setItem("user",JSON.stringify(result));
  // }
  return (
    <>
      <div className="container ">
        <section className="vh-100 ">
          <div className="container py-5 h-100 p-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your details
                      </p>
                      <form  onSubmit={submitForm}>
                      <div className="form-floating form-outline  mb-4">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            // id="floatingInput"
                            placeholder=""
                            required
                            onChange={inputHandler}
                          />
                          <label htmlFor="">
                            <b style={{ color: "black" }}>Name</b>
                          </label>
                        </div>
                        <div className="form-floating form-outline  mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder=""
                            required
                            onChange={inputHandler}
                          />
                          <label htmlFor="">
                            <b style={{ color: "black" }}>Email</b>
                          </label>
                        </div>
                        <div className="form-floating form-outline form-white mb-4">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder=""
                            required
                            onChange={inputHandler}
                          />
                          <label htmlFor="">
                            <b style={{ color: "black" }}>Password</b>
                          </label>
                        </div>

                          <Link to="/Home">                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Register
                        </button>
                        </Link>

                      </form>
                    </div>
                    {/* <div>
                      <p className="mb-0">
                        Don't have an account?
                        <Link to="/Register" className="text-white-50 fw-bold">
                          Register
                        </Link>
                      </p>
                    </div> */}
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
