import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = (footer) => {
  return (
    <footer className="my-5 text-slate-400">
      <div className="mb-3">
        <span className="mx-3">
          <Link href="">
            <EmailIcon />
          </Link>
        </span>
        <span className="mx-3">
          <Link>
            <GitHubIcon />
          </Link>
        </span>
      </div>
      <p>All rights reserved © Dvir Cohen</p>
    </footer>
  );
};

export default Footer;
