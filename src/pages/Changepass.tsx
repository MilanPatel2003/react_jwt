import React, { useState } from 'react'
import { Heading } from '../components/Heading';
import { useSearchParams } from 'react-router-dom';

interface ChangePassword {
    emailToken: string,
  newPassword:string
}

export const Changepass = () => {
    const [newPassword,setNewPassword] = useState("")

    const handleSubmit = () => {

    }

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
                  setNewPassword(e.target.value);
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
  )
}
