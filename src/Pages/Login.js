import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [inpval, setInpval] = useState({
    email: "",
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

    const getuserArr = localStorage.getItem("userdatakey");
    console.log(getuserArr);

    const { email, password } = inpval;
   
     if (email === "") {
      alert("email fild is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
   
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password lenght greater five");
    } else {

      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        console.log(userdata);
      }
     

    }
  };

  return (
    <div>
      <>
        <div className="container mt-3">
          <section>
            <div className="left_data mt-4">
              <h3 className="text-center col-lg-4">Sing In</h3>
              <Form>
                <Form.Group
                  className="mb-3 col-lg-4"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Enter email"
                  />
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
                  className="col-lg-2"
                  onClick={addData}
                  type="submit"
                >
                  Submit
                </Button>
                
              </Form>
              <p className="mt-3">
               
              </p>
            </div>
            <div className="right_data"></div>
          </section>
        </div>
      </>
    </div>
  );
};

export default Login;
