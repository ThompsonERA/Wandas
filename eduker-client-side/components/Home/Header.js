import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import links from "../../data/linkData";
import useAuth from "../../hooks/useAuth";
import useSticky from "../../hooks/useSticky";
import { searchText } from "../../redux/features/coursesSlice";
import { useRouter } from "next/router";
import LoginData from "../../data/LoginMenuData";
import Sidebar from "../common/SideBar";
import Logo from "../../public/assets/img/logo/r&n-2.png";

const Header = () => {
  // sticky
  const { headerSticky } = useSticky();
  // user
  const { user, logout } = useAuth();
  // searchValue
  const [searchValue, setSearchValue] = useState("");
  // dispatch
  const dispatch = useDispatch();
  // router
  const router = useRouter();
  // handle sidebar show
  const [show, setShow] = useState(false);
  // handle close
  const handleClose = () => setShow(false);
  // handle sidebar show
  const handleShow = () => setShow(true);
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
    } else {
      dispatch(searchText(searchValue));
      router.push("/search-courses");
    }
  };
  return (
    <>
      <header>
        <div className="header__area">
          <div
            className={
              headerSticky ? "header__bottom header__sticky" : "header__bottom"
            }
            id="header-sticky"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-3">
                  <div className="logo d-flex ">
                    <Link href="/">
                      <a>
                        <img style={{borderRadius: "60%"}} src="/assets/img/logo/logo-4.png" alt="Logo" />
                      </a>
                    </Link>
                    <span className="title col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                      Ruth & Naomi
                    </span>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        {!user?.email &&
                          links.map((link) => {
                            return (
                              <li
                                key={link.id}
                                className={link.submenu ? `has-dropdown` : ""}
                              >
                                <Link href={`${link.url}`}>
                                  <a>{link.name}</a>
                                </Link>
                                <ul className={link.submenu ? `submenu` : ""}>
                                  {link?.submenu?.map((sub_menu, index) => {
                                    return (
                                      <li key={sub_menu.id}>
                                        <Link href={`${sub_menu.url}`}>
                                          <a>{sub_menu.name}</a>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          })}

                        {user?.email &&
                          LoginData.map((link) => {
                            return (
                              <li
                                key={link.id}
                                className={link.submenu ? `has-dropdown` : ""}
                              >
                                <Link href={`${link.url}`}>
                                  <a>{link.name}</a>
                                </Link>
                                <ul className={link.submenu ? `submenu` : ""}>
                                  {link?.submenu?.map((sub_menu, index) => {
                                    return (
                                      <li key={sub_menu.id}>
                                        <Link href={`${sub_menu.url}`}>
                                          <a>{sub_menu.name}</a>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          })}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center">
                    <div className=" header__top-right d-flex justify-content-end align-items-center">
                      {/* <div className="header__login">
                                          {
                                             user?.email ? <a onClick={logout} style={{ cursor: 'pointer' }}>
                                                <svg viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M5.99995 6.83333C7.61078 6.83333 8.91662 5.5275 8.91662 3.91667C8.91662 2.30584 7.61078 1 5.99995 1C4.38912 1 3.08328 2.30584 3.08328 3.91667C3.08328 5.5275 4.38912 6.83333 5.99995 6.83333Z" stroke="#031220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                   <path d="M11.0108 12.6667C11.0108 10.4092 8.76497 8.58333 5.99997 8.58333C3.23497 8.58333 0.989136 10.4092 0.989136 12.6667" stroke="#031220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg> Logout
                                             </a> : <Link href="/sign-in">
                                                <a >
                                                   <svg viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M5.99995 6.83333C7.61078 6.83333 8.91662 5.5275 8.91662 3.91667C8.91662 2.30584 7.61078 1 5.99995 1C4.38912 1 3.08328 2.30584 3.08328 3.91667C3.08328 5.5275 4.38912 6.83333 5.99995 6.83333Z" stroke="#031220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                      <path d="M11.0108 12.6667C11.0108 10.4092 8.76497 8.58333 5.99997 8.58333C3.23497 8.58333 0.989136 10.4092 0.989136 12.6667" stroke="#031220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                   </svg> Login
                                                </a>
                                             </Link>
                                          }

                                       </div> */}
                      <div className="header__btn ml-20">
                        <Link href="/contact">
                          <a className="header-btn">contact us</a>
                        </Link>
                      </div>
                    </div>
                    <div className="header__hamburger ml-50 d-xl-none">
                      <button
                        type="button"
                        onClick={handleShow}
                        className="hamurger-btn"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
