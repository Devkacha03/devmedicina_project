import React from "react";
import { ClipboardEdit, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
const Managepro = () => {
  return (
    <>
      <div className="container mt-5">
        <h3>
          <Link to="/Product">
            <ArrowLeft size={36} />
          </Link>
        </h3>
        <h2 className="mt-5">Manage Product</h2>

        <table className="table table-hover table-bordered border-primary mt-5 ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">P.image</th>
              <th scope="col">P.name</th>
              <th scope="col">P.price</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>

              <td>
                <span>
                  <ClipboardEdit color="#11ee36" />

                  <b>EDIT</b>
                </span>
                <b> / </b>
                <span>
                  <Trash2 color="#ee115e" />
                  <b>DELETE</b>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Managepro;
