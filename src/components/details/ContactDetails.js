import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import style from "./contactDetails.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
const ContactDetails = (props) => {
  const location = useLocation();
  const user = location.state;
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);

  const showDeleteHandler = () => {
    setShowDelete(!showDelete);
    console.log(showDelete);
  };

  const DeleteContent = () => {
    const deleteHandler = () => {
      props.deleteHandler(user.id);
      navigate("/");
    };
    return (
      <div>
        <nav>
          <ul>
            <div className={style.delete_cancel}>
              <li onClick={deleteHandler}>delete</li>
              <li onClick={() => setShowDelete(false)}>cancel</li>
            </div>
          </ul>
        </nav>
      </div>
    );
  };

  const editHandler = () => {
    navigate("/edit", { state: user });
  };
  return (
    <div className={style.container}>
      <div className={style.upper}>
        <div className={style.basic_detail}>
          <span>
            <Link to="/">
              <AiOutlineArrowLeft />
            </Link>
          </span>
          <div className={style.name_box}>
            <div className="img">
              <img src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/V8BNOaftJmYAp2p_Gru2GDD5qNFKgOOLwCLcDEAEiGQoBQRD___________8BGKevgvj______wE/s272-p-k-rw-no/photo.jpg"></img>
            </div>
            <div className={style.name}>{user.name}</div>
          </div>
        </div>

        <div className={style.edit}>
          {showDelete ? <DeleteContent /> : ""}
          <div className={style.icon}>
            <BsThreeDotsVertical onClick={showDeleteHandler} />
          </div>
          <div>
            <button onClick={editHandler}>Edit</button>
          </div>
        </div>
      </div>

      <div className={style.details_container}>
        <div className={style.header}>contact details</div>
        <div className={style.div}>
          <div className={style.phone_icon}>
            <BsTelephone />
          </div>
          <div className={style.details}>
            <span>
              <a href="tel:+919901660291">{user.phone}</a>
            </span>
            <span>
              &nbsp;<small>• mobile</small>
            </span>
            <span>
              &nbsp;<small>• {user.gender}</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
