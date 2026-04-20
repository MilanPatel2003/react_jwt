import { useState } from "react";
import { Heading } from "../components/Heading";
import API from "../lib/api";
import toast from "react-hot-toast";
interface SignUpBody {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
};
export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData:SignUpBody = {
      first_name:firstName,
      last_name:lastName,
      user_name:userName,
      email:email,
      password:password
        }
        console.log(formData);
        
    try {
      const res = await API.post<any>("/auth/signup",formData)
    
      localStorage.setItem("token","")
      console.log(res);
        toast.success(res.data.message)
   

    } catch (error: any) {
      const msg = error?.response?.data?.message || "server error";
      toast.error(msg);
    }

  };

  return (
    <div className="flex items-center justify-center bg-gray-50 p-4">
      <form>
        <table>
          <tr>
            <td colSpan={2}>
              {" "}
              <Heading headingText="Register"></Heading>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Firstname:</label>
            </td>
            <td>
              <input
                className="border p-1 m-2"
                type="text"
                name="fname"
                id=""
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Lastname:</label>
            </td>
            <td>
              <input
                className="border p-1 m-2"
                type="text"
                name="lname"
                id=""
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Username :</label>
            </td>
            <td>
              <input
                className="border p-1 m-2"
                type="text"
                name="uname"
                id=""
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Email :</label>
            </td>
            <td>
              <input
                className="border p-1 m-2"
                type="text"
                name="email"
                id=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Password :</label>
            </td>
            <td>
              <input
                className="border p-1 m-2"
                type="text"
                name="pass"
                id=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Confirm Password :</label>
            </td>
            <td>
              <input
                className="border p-1 m-2"
                type="text"
                name="cpass"
                id=""
                 onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td align="center" colSpan={2}>
              <button
                onClick={handleSubmit}
                className="border cursor-pointer rounded-sm p-1.5 bg-blue-300 text-center hover:text-amber-50"
              >
                Register
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
