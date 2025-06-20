import React, {useState,useEffect} from "react";
import { ClipboardEdit, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios';
const Managecus = () => {

  const [users, setUsers] = useState([]) 
  
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get('http://localhost:8081/students/')
      setUsers(response.data)
    }
    fetchData();
    // .then(users => setUsers(users.data))
    //  .catch(err => console.log(err)) 
  }, [])

    const deleteUser = async(userId) =>{
      await axios.delete(`http://localhost:8081/students/delete/${userId}`)
      .then((response)=> {
        // console.log(response.data);
        // window.location.reload();
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId))
        toast.success(response.data.msg, {position: "top-right"})
      }).catch((err) => {console.log(err)});
    }
  return (
    <>
      <div className="container mt-5 mb-5">
        <h3>
          <Link to="/Customers">
            <ArrowLeft size={36} />
          </Link>
        </h3>
        <h2 className="mt-5 mb-4">Manage Customers</h2>

          <button ><h6><Link to="/Addcustomer" className="link-underline-light">Add customer</Link></h6></button>
          
          
        <table className="table table-hover table-bordered border-primary mt-5 ">
          <thead>
            <tr>
              <th scope="col" align="center">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {
              users.map((user, index) => {
               return (
               <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                <span>
                  <Link to={`/Edit/`+user._id }><ClipboardEdit color="#11ee36" /></Link>
                </span>
              </td>
              <td><span>
                  <button className="btn btn-light" onClick={()=> deleteUser(user._id)}><Trash2 color="#ee115e" /></button>
                </span></td>
                </tr>
               )
              })
            }
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Managecus;
