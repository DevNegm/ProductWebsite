import React, { useState } from "react";
import Link from "next/link";
import { FaGlobeAfrica } from "react-icons/fa";
import Head from "next/head";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <div className=" navbar">
        <div className=" firstContainer">
          <div className="content ">
            <Link href="/">
              <a className="logo" onClick={() => setToggle(false)}>
                LOGO
              </a>
            </Link>

            <div className="links">
              <Link href="#">
                <a className="icon " onClick={() => setToggle(false)}>
                  <FaGlobeAfrica />
                  <p className="lang ">EN</p>
                </a>
              </Link>
              <div className=" hamburger" onClick={toggleHandler}>
                <i class={toggle ? "fas fa-times" : "fas fa-bars"}></i>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle ? "navOpen" : "secondContainer"}>
          <ul className=" proLinks">
            <Link href="/product1">
              <a className="navLink " onClick={() => setToggle(false)}>
                FirstLink
              </a>
            </Link>
            <Link href="/product2">
              <a className="navLink " onClick={() => setToggle(false)}>
                SecondLink
              </a>
            </Link>
            <Link href="/product3">
              <a className="navLink " onClick={() => setToggle(false)}>
                ThirdLink
              </a>
            </Link>
            <Link href="/product4">
              <a className="navLink " onClick={() => setToggle(false)}>
                FourthLink
              </a>
            </Link>
            <Link href="/product5">
              <a className="navLink " onClick={() => setToggle(false)}>
                FifthLink
              </a>
            </Link>
            <Link href="/product6">
              <a className="navLink " onClick={() => setToggle(false)}>
                SixthLink
              </a>
            </Link>
            <Link href="/product7">
              <a className="navLink " onClick={() => setToggle(false)}>
                SeventhLink
              </a>
            </Link>
            <Link href="/product8">
              <a className="navLink " onClick={() => setToggle(false)}>
                EightsLink
              </a>
            </Link>
            <Link href="/product9">
              <a className="navLink " onClick={() => setToggle(false)}>
                NinthLink
              </a>
            </Link>
            <Link href="/product10">
              <a className="navLink " onClick={() => setToggle(false)}>
                TenthLink
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
