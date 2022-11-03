import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const Register = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    //  console.log(value,name)

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name , email, date, password } = inpval;

    if (name === "") {
      alert("name fild is requred");
    }else if (email === "") {
      alert("email fild is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (date === "") {
      alert("date field is requred");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password lenght greater five");
    } else {
      console.log("data added succesfully");

      localStorage.setItem("userdatakey", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section>
          <div className="left_data mt-4">
            <h3 className="text-center col-lg-4">Sing UP</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control onChange={getdata} name="date" type="date" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-4"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-1"
                onClick={addData}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account
              <span>
                <Link to="/login"> SingIn</Link>
              </span>
            </p>
          </div>
          <div className="right_data"></div>
        </section>
      </div>
    </>
  );
};

export default Register;
