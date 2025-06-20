import React, { useEffect, useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
const Shopping = ({ cart }) => {
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);
  // const handleDelete = (id) => {
  //   const _CART = CART.filter((item) => item.id !== id);
  //   setCART(_CART);
  // };
  return (
    <>
      <div className="container mt-5 mb-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                <h5>
                  <b>ProdcutImage</b>
                </h5>
              </th>
              <th>
                <h5>
                  <b>ProductName</b>
                </h5>
              </th>
              <th>
                <h5>
                  <b>Price</b>
                </h5>
              </th>
              <th>
                <h5>
                  <b>Quantity</b>
                </h5>
              </th>
              {/* <th>
                <h5>
                  <b>Remove</b>
                </h5>
              </th> */}
              <th>
                <h5>
                  <b>Buy</b>
                </h5>
              </th>
            </tr>
          </thead>
          {CART?.map((cartItem, cartIndex) => {
            return (
              <tbody>
                <tr>
                  <td>
                    <img src={cartItem.url} width={100} alt="products" />
                  </td>
                  <td>
                    <span>
                      <b>{cartItem.pname}</b>
                    </span>
                  </td>
                  <td>
                    <span>
                      <b>Rs </b>
                      <b style={{ color: "red" }}>
                        {cartItem.price * cartItem.quantity}
                      </b>
                      <b> /-</b>
                    </span>
                  </td>
                  <td>
                    <button
                      className="me-2"
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartIndex === index
                            ? { ...item, quantity: item.quantity + 1 }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      <PlusCircle color="#25d322" />
                    </button>
                    <span>
                      <b>{cartItem.quantity}</b>
                    </span>
                    <button
                      className="ms-2"
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                          return cartIndex === index
                            ? {
                                ...item,
                                quantity:
                                  item.quantity > 0 ? item.quantity - 1 : 0,
                              }
                            : item;
                        });
                        setCART(_CART);
                      }}
                    >
                      <MinusCircle color="#25d322" />
                    </button>
                  </td>
                  {/* <td>
                    <button
                      className="btn btn-light"
                      onClick={() => handleDelete(cartItem.id)}
                    >
                      <Trash2 color="#e10909" />
                    </button>
                  </td> */}
                  <td>
                    <div>
                      {/* <Trash2 color="#e10909" />
                      <b className="me-2 ms-1"> / </b> */}
                      <button
                        className="btn btn-outline-success btn-xl"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions"
                      >
                        <b>BUY</b>
                      </button>
                      <div
                        className="offcanvas offcanvas-start"
                        data-bs-scroll="true"
                        tabIndex={-1}
                        id="offcanvasWithBothOptions"
                        aria-labelledby="offcanvasWithBothOptionsLabel"
                      >
                        <div className="offcanvas-header">
                          <h5
                            className="offcanvas-title"
                            id="offcanvasWithBothOptionsLabel"
                          >
                            <b>PAYMENT</b>
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          />
                        </div>
                        <div className="offcanvas-body">
                          <h5>
                            <b>Product Name :- </b>
                            <b>{cartItem.pname}</b>
                          </h5>
                          <h5 className="mb-5">
                            <b>Total Payment :- </b>
                            <b>Rs </b>
                            <b style={{ color: "red" }}>
                              {cartItem.price * cartItem.quantity}
                            </b>
                            <b>/-</b>
                          </h5>
                          <form>
                            <div className="codform">
                              <label className="form-label ">
                                <b>First Name</b>
                              </label>
                              <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter First Name"
                              />

                              <label className="form-label ">
                                <b>Last Name</b>
                              </label>
                              <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter Last Name"
                              />

                              <label className="form-label">
                                <b>Email</b>
                              </label>
                              <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Enter Email"
                              />

                              <label className="form-label">
                                <b>Mobile No</b>
                              </label>
                              <input
                                type="number"
                                className="form-control mb-3"
                                placeholder="Enter Mobile Number"
                              />

                              <label className="form-label">
                                <b>Address</b>
                              </label>
                              <textarea className="form-control mb-3"></textarea>

                              <div className="form-check mb-4 ">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault2"
                                >
                                  <b>Cash On Delivery</b>
                                </label>
                              </div>

                              <div className="d-grid ">
                                <button className="btn btn-outline-success ">
                                  <b>Shop Now</b>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
          <tr>
            <td colspan="4">
              <h4 align="center">
                Total:
                <b> Rs </b>
                <b style={{ color: "red" }}>
                  {CART.map((item) => item.price * item.quantity).reduce(
                    (total, value) => total + value,
                    0
                  )}
                </b>
                <b>/-</b>
              </h4>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Shopping;
