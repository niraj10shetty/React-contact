import React from "react";
import style from "./contacts.module.css";
const ContactCard = (props) => {
  const { id, name, email, address, phone, gender } = props.contact;
  return (
    <div className="item">
      <div className={style.card}>
        {/* <div><span>{name}</span>---<span>{email}</span>---<span>{address}</span>---<span>{phone}</span>---<span>{gender}</span></div> */}
        <td className={style.td}>
          <div className={style.card_content}>{name}</div>
        </td>
        <td className={style.td}>
          <div>{email}</div>
        </td>
        <td className={style.td}>
          <div>{phone}</div>
        </td>
        <td className={style.td}>
          <div>{gender}</div>
        </td>
        <td className={style.td}>
          <div></div>
        </td>
      </div>
    </div>
  );
};

export default ContactCard;
