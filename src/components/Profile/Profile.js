import React from "react";
import ME from "../../assets/dp.png";
import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const profile = () => {
  return (
    <section id="profile">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="profile__me">
          <div className="w-1/2">
            <img src={ME} alt="Profile Image" />
          </div>
        </div>
        <div className="user__data">
          <div>
            <FaUserCircle className="profile_icons" />
            <small className="text-light-nav">Name</small>
          </div>

          <div>
            <FaPhone className="profile_icons" />
            <small className="text-light-nav">Phone Number</small>
          </div>

          <div>
            <FaMailBulk className="profile_icons" />
            <small className="text-light-nav">Email</small>
          </div>
          <div>
            <button>Edit profile</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default profile;
