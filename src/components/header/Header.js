import style from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={style.header}>
        <nav className={style.nav}>
          <div className={style.contact}>
            <img src="https://www.gstatic.com/images/branding/product/1x/contacts_48dp.png"></img>
            <span>Contacts</span>
          </div>

         
            <input className={style.input} type="text" name="search" placeholder="Search"></input>
         
          <div>
            <img
              src="https://admin.google.com/u/0/ac/images/logo.gif?uid=105374338632565604146&service=google_gsuite"
              height={"50px"}
              width={"100px"}
            ></img>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
