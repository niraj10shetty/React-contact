import React, { useState } from "react";

const CreateProfile = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const state = {
    name: name,
    email: email,
    address:address,
    phone:phone,
    gender:gender
  };

  const add = (e) => {
    e.preventDefault();
    console.log(state);
    if (name === "" || email === "") {
      alert("all the fields are mandatory!");
      return;
    }
    props.addContactHandler(state);
    console.log("bvc");
    setName("");
    setEmail("");
    setGender("");
    setAddress("");
    setPhone("");

  };

  return (
    <div>
      <div>
        <h2>Add Contact</h2>
        <form onSubmit={add}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="phone number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div>
            <label>Gender</label>
            {/* <input
              type="select"
              name="gender"
              placeholder="gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            /> */}
            <select onChange={(e) => setGender(e.target.value)} name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
