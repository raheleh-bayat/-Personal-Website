import "./user.css";
import img from "../../img/pexels.jpg";
import {Link} from "react-router-dom";
import { useState } from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  SettingsPhone,
} from "@material-ui/icons";

export const User = () => {
  const [users, setUsers] =useState([]);
  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [phone, setPhone] =useState("");
  const [address, setAddress] =useState("");
  const [userId, setUserId] =useState(null);

  const selectUser = (id)=>{
    let item =users[id-1];
    setUsers(item.users)
    setName(item.name)
    setEmail(item.email)
    setPhone(item.phone)
    setAddress(item.address)
  }
  const updateUser = () => {
    let item ={name,phone,email,userId}
    console.warn("item",item);
  }
  return (
    <div className="user">
      <main className="mt-5 pt-3">
        <div className="userTitleContainer">
          <h1 className="userTitle fw-bold">Edit User </h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={img} alt="" className="userShowImg"></img>
              <div className="userShowTopTitle">
                <span className="userShowUsername">Raheleh Bayat </span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowButton">
              <span className="userShowTitle">Acount Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">rahelehbyt92</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">16.02.1992</span>
              </div>
              <span className="userShowTitle">Contact Details</span>

              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+0049 123 345 456</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">
                  raheleh.bayat.92@gmail.com
                </span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">berlin | Germany</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="rahelehbyt92"
                    className="userUpdateInput"
                    value={users}
                    onChange={(e) => {
                      setUsers(e.target.value);
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Raheleh Bayat
                    "
                    className="userUpdateInput"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="raheleh.bayat.92@gmail.com"
                    className="userUpdateInput"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+0049 123 345 456"
                    className="userUpdateInput"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="berlin | Germany"
                    className="userUpdateInput"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src={img} alt="" className="userUpdateImg" />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton" onClick={updateUser}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
