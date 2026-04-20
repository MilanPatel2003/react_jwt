import { useState } from "react";
import { Heading } from "../components/Heading";
import API from "../lib/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface SignInBody {
  email: string;
  password: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const formData: SignInBody = { email, password };

    try {
      const res = await API.post<any>("/auth/signin", formData);
      toast.success(res.data.message);
      localStorage.setItem("token",res.data.accessToken)
            navigate("/")

    } catch (error: any) {
      const msg = error?.response?.data?.message || "server error";
      toast.error(msg);
      
    }
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-50 p-4">
        <form>
          <table>
            <tr>
              <td colSpan={2}>
                {" "}
                <Heading headingText="Login"></Heading>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Email:</label>
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="border p-1 m-2"
                  type="text"
                  name="pass"
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td align="center" colSpan={2}>
                <button
                  onClick={handleLogin}
                  className="border cursor-pointer rounded-sm p-1.5 bg-blue-300 text-center hover:text-amber-50"
                >
                  Login
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
}
