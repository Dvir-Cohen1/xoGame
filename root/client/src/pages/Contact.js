import React from "react";
import Button from "../components/common/Button";
import { style } from "../assets/css/styles";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const Contact = () => {
  return (
    <div>
      <p className="text-3xl my-10">
        <span className="bg-gray-400 rounded-full px-2.5 py-1 mr-3">
          <ConnectWithoutContactIcon />
        </span>
        Contact Us
      </p>
      <form className="flex flex-col">
        <div className="flex flex-col mb-5">
          <p htmlFor="name">Full Name</p>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="form-input px-4 py-3 rounded-md text-gray-500"
          />
        </div>
        <div className="flex flex-col mb-5">
          <p htmlFor="email">Email</p>
          <input
            type="email"
            id="email"
            placeholder="John@Doe.com"
            className="form-input px-4 py-3 rounded-md text-gray-500"
          />
        </div>
        <div className="flex flex-col mb-5">
          <p htmlFor="message">Message</p>
          <textarea
            className="form-input px-4 py-3 rounded-md text-gray-500"
            id="message"
            placeholder="John@Doe.com"
          ></textarea>
        </div>
        <Button className={`${style.mainButton} ${style.mainTransition}`}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
