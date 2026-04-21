import { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import API from "../lib/api";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

interface SignInBody {
  email: string;
  password: string;
   captchaText: string,
      captchaId: number,
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [captchaText, setCaptchText] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");
  const [captchaId, setCaptchaId] = useState(0);
  const navigate = useNavigate();

  const generateCaptcha = async () => {
    try {

      const res = await API.get("/auth/captcha");
      setCaptchaImage(res.data.captcha);
      setCaptchaId(res.data.captchaId);
    } catch (error: any) {
      const msg = error?.response?.data?.message || "server error";
      console.log(msg);
    }
  };
  useEffect(() => {
    generateCaptcha();
  }, []);

  const refreshCaptcha =async () => {
        try {

      const res = await API.post("/auth/captcha/delete",{captchaId});
      console.log(res.data.message)
   
    } catch (error: any) {
      const msg = error?.response?.data?.message || "server error";
      console.log(msg);
    }
    generateCaptcha();  
  };


  const handleLogin = async (e: any) => {
    e.preventDefault();
    const formData: SignInBody = { email, password , captchaText: captchaText,
      captchaId: captchaId,};

    try {
      const res = await API.post<any>("/auth/signin", formData);
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.accessToken);
      window.location.href = "/";
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
              <td colSpan={2}>
                <span className="underline cursor-pointer text-right text-[10px] hover:text-blue-600"><Link to={"/forgetpass"}>
                  forgot password? click here{" "}
                </Link></span>
              </td>
            </tr>
               <tr>
            <td>
              <img src={captchaImage} alt="captcha"></img>
            </td>
            <td>
              <input
                className="border p-1 m-2"
                type="text"
                name="captcha"
                id=""
                onChange={(e) => {
                  setCaptchText(e.target.value);
                }}
              />{" "}
             
            </td>
             <td>
                {" "}
                <span onClick={refreshCaptcha} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 20 4 C 15.054545 4 11 8.0545455 11 13 L 11 35.585938 L 5.7070312 30.292969 L 4.2929688 31.707031 L 12 39.414062 L 19.707031 31.707031 L 18.292969 30.292969 L 13 35.585938 L 13 13 C 13 12.759091 13.01313 12.521884 13.037109 12.287109 C 13.396795 8.7654918 16.386364 6 20 6 L 30 6 L 30.5 6 L 30.5 4 L 30 4 L 20 4 z M 38 10.585938 L 30.292969 18.292969 L 31.707031 19.707031 L 37 14.414062 L 37 37 C 37 40.613636 34.234508 43.603205 30.712891 43.962891 C 30.478116 43.98687 30.240909 44 30 44 L 20 44 L 19.5 44 L 19.5 46 L 20 46 L 30 46 C 30.309091 46 30.614657 45.984029 30.916016 45.953125 C 35.436391 45.489569 39 41.636364 39 37 L 39 14.414062 L 44.292969 19.707031 L 45.707031 18.292969 L 38 10.585938 z"></path>
                  </svg>
                </span>{" "}
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
