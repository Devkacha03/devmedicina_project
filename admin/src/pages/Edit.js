import React, {useState,useEffect} from "react";
import { Mails, FileLock2 } from "lucide-react";
import { Link, useParams,useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from 'axios';
import toast from "react-hot-toast";
const Edit = () => {

    const users = {
        name: "",
        email: "",
        password: ""
    }

    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(users);

    const inputChangeHandler = (e) => {

        const {name, value} = e.target;
        setUser({...user, [name]: value}); 
        console.log(user);
    } 

    useEffect (() => {

        axios.get(`http://localhost:8081/students/getone/${id}`)
        .then((response) => {
            setUser(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[id])

    const submitForm = async (e) => {
        e.preventDefault(); 
        await axios.put(`http://localhost:8081/students/update/${id}`, user)
        .then((response)=> {
          
          toast.success(response.data.msg, {position: "top-right"})
           
          navigate("/Managecus");
        }).catch((err) => console.log(err));
    }
  return (
    <>
      <div className="container mt-5">
      <h3>
        <Link to="/Managecus">
          <ArrowLeft size={36} />
        </Link>
      </h3>
      <h1 className="mt-5 mb-5">Edit Customers</h1>
      <form onSubmit={submitForm}>
        <div className="row">
          <div className="col">
          <label htmlFor="name">
                <b>Name</b>
              </label>
            <div className="form-floating mt-3">
                
              <input type="text" value={user.name} onChange={inputChangeHandler} required name="name" id="name" placeholder=""  className="form-control" />
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <label htmlFor="email" className="mt-4">
                <b>
                  <Mails size={20} color="#2e4ad6" /> Enter Gmail
                </b>
              </label>
            <div className="form-floating mt-3">
              <input type="email" value={user.email} onChange={inputChangeHandler} placeholder="" name="email" id="email" required className="form-control" />
             
            </div>
          </div>
          <div className="col">
          <label htmlFor="password" className="mt-4">
                <b>
                  <FileLock2 size={20} color="#004ad6" /> Enter Password
                </b>
              </label>
            <div className="form-floating mt-3">
              <input type="text" value={user.password} onChange={inputChangeHandler} placeholder="" name="password" id="password"  required className="form-control" />
             
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
    </>
  )
}

export default Edit
