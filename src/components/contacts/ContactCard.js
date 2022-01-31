import React from "react";

const ContactCard = (props) => {
  const { id, name, email,address,phone,gender } = props.contact;
  return (
    <div className="item">
      <div >
        <div><span>{name}</span>---<span>{email}</span>---<span>{address}</span>---<span>{phone}</span>---<span>{gender}</span></div>
       
      </div>
    </div>
  );
};

export default ContactCard;
