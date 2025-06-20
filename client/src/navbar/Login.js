import React, {useState} from "react";
//import { Link } from "react-router-dom";

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:8081/students/create/',{
      method: 'post',
      body: JSON.stringify({name,email,password}),
      headers: {
        'Content-Type': "application/json",
        // "Accept": "application/json"
      },
    });
    result = await result.json();
    localStorage.setItem("user",JSON.stringify(result));
  }
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
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your details
                      </p>
                      <form onSubmit={collectData}>
                      <div className="form-floating form-outline  mb-4">
                          <input
                            type="text"
                            // name="name"
                            className="form-control"
                            // id="floatingInput"
                            placeholder=""
                            value={name}
                            onChange={e => setName(e.target.value)}
                          />
                          <label htmlFor="">
                            <b style={{ color: "black" }}>Name</b>
                          </label>
                        </div>
                        <div className="form-floating form-outline  mb-4">
                          <input
                            type="email"
                            // name="email"
                            className="form-control"
                            // id="floatingInput"
                            placeholder=""
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                          <label htmlFor="">
                            <b style={{ color: "black" }}>Email</b>
                          </label>
                        </div>
                        <div className="form-floating form-outline form-white mb-4">
                          <input
                            type="text"
                            className="form-control"
                            // name="password"
                            // id="floatingPassword"
                            placeholder=""
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                          />
                          <label htmlFor="">
                            <b style={{ color: "black" }}>Password</b>
                          </label>
                        </div>

                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Login
                        </button>
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
