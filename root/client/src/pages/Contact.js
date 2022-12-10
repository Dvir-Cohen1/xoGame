import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "../components/Button";
import {style} from '../assets/css/styles'
const Contact = () => {
  return (
    <div>
      <p className="text-3xl my-10">Contact Us</p>
      <form className="flex flex-col">
        <div className="flex flex-col mb-5">
          <lable for="name">Full Name</lable>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="form-input px-4 py-3 rounded-md text-gray-500"
          />
        </div>
        <div className="flex flex-col mb-5">
          <lable for="email">Email</lable>
          <input
            type="email"
            id="email"
            placeholder="John@Doe.com"
            className="form-input px-4 py-3 rounded-md text-gray-500"
          />
        </div>
        <div className="flex flex-col mb-5">
          <lable for="message">Message</lable>
          <textarea
            className="form-input px-4 py-3 rounded-md text-gray-500"
            id="message"
            placeholder="John@Doe.com"
          ></textarea>
        </div>
        <Button className={`${style.mainButton}`}>Send</Button>
      </form>
    </div>
  );
};

export default Contact;
