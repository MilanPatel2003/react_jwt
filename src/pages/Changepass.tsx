import React, { useEffect, useState } from "react";
import { Heading } from "../components/Heading";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../lib/api";

interface ChangePassword {
  emailToken: string;
  newPassword: string;
}

export const Changepass = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisable,setIsDisable] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e:any) => {
    e.preventDefault() 
    if (newPassword != confirmPassword) {
      toast.error("confirm password should match with password!");
      return;
    }
    const emailToken = localStorage.getItem("emailToken") as string;

    const formData: ChangePassword = {
      emailToken,
      newPassword,
    };
    try {
      const res = await API.post("/auth/changepassword", formData);
      toast.success(res.data.message)
      setIsDisable(true)

      setTimeout(() => {
        navigate("/login")
      }, 2000);

      
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 p-4">
      <form>
        <table>
          <tr>
            <td colSpan={2}>
              {" "}
              <Heading headingText="Change password"></Heading>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">New Password:</label>
            </td>
            <td>
              <input
                className="border p-1 m-2"
                type="text"
                name="email"
                id=""
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Confirm Password:</label>
            </td>
            <td>
              <input
                className="border p-1 m-2"
                type="text"
                name="email"
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
                className={`border cursor-pointer rounded-sm p-1.5 bg-blue-300 text-center hover:text-amber-50 ${isDisable? "disabled opacity-25 ":"" }`}
              >
                Submit
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
