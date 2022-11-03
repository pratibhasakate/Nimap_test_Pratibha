import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const User = () => {
    const [inpval, setInpval] = useState({
        name: "",
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
    
        const { name , password } = inpval;
    
        if (name === "") {
          alert("name fild is requred");
        
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
            <h3 className="text-center col-lg-4"></h3>
            <Form>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="UserName"
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
                className="col-lg-1"
                onClick={addData}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              {/* Already Have an Account */}
              <span>             
                <Link to="/UserNewPass">Change Password</Link>
              </span>
              
            </p>
          </div>
          <div className="right_data"></div>
        </section>
      </div>
   </>
  )
}

export default User
