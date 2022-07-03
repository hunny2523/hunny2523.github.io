
import axios from "axios";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import {Form,FormGroup,Input,Label,Button} from "reactstrap"
import { authContext } from "../../context/authContext";

export default function Login() {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const {user, loading, error, dispatch } = useContext(authContext);


  const navigate=useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
    console.log(user)
  };

  return (
    <div className='container'>
        <div className='w-50 mx-auto mt-5'>
        <h1>Login</h1>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input  onChange={handleChange}  type="email" name="email" id="email" placeholder="Enter Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input  onChange={handleChange} type="password" name="password" id="password" placeholder="Enter password " />
        </FormGroup>
        <Button disabled={loading} onClick={handleClick} color="danger">Submit</Button>
        {error && <span>{error.message}</span>}
      </Form>
        </div>
    </div>
  )
}
