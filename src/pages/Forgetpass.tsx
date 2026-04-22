import React, { useState } from "react";
import { Heading } from "../components/Heading";
import API from "../lib/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Email {
  email: string;
}

export const Forgetpass = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData: Email = {
      email,
    };
    try {
      const res = await API.post<any>("/auth/generatetoken", formData);
      localStorage.setItem("emailToken", res.data.emailToken);
      navigate("/changepass");
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
              <Heading headingText="Enter email"></Heading>
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
            <td align="center" colSpan={2}>
              <button
                onClick={handleSubmit}
                className="border cursor-pointer rounded-sm p-1.5 bg-blue-300 text-center hover:text-amber-50"
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
