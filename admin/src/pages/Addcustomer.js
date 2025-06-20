import React, {useState} from "react";
import { Mails, FileLock2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
const Addcustomer = () => {

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
       
      navigate("/Managecus");
    }).catch((err) => console.log(err));
  }
  return (
    <div className="container mt-5">
      <h3>
        <Link to="/Customers">
          <ArrowLeft size={36} />
        </Link>
      </h3>
      <h1 className="mt-5 mb-5">Add Customers</h1>
      <form onSubmit={submitForm}>
        <div className="row">
          <div className="col">
            <div className="form-floating mt-3">
              <input type="text" onChange={inputHandler} required placeholder="" name="name" id="name" autoComplete="off" className="form-control" />
              <label htmlFor="name">
                <b>Enter Name</b>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating mt-3">
              <input type="email" onChange={inputHandler} required placeholder="" name="email" id="email" autoComplete="off" className="form-control" />
              <label htmlFor="email">
                <b>
                  <Mails size={20} color="#2e4ad6" /> Enter Gmail
                </b>
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating mt-3">
              <input type="password" onChange={inputHandler} required placeholder="" name="password" id="password" autoComplete="off" className="form-control" />
              <label htmlFor="password">
                <b>
                  <FileLock2 size={20} color="#004ad6" /> Enter Password
                </b>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary btn-xl mt-3" type="submit">
              Add
            </button>
            <button className="btn btn-danger btn-lx mt-3 ms-3" type="reset">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addcustomer;
