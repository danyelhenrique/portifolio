import React, { useState } from "react";

import UserConfingModal from "../Modals/UserConfig";

import "./styles.css";

import avatar from "../../assets/images/avatar.jpg";

function Aside() {
  const [modal, setModal] = useState(true);
  function openModal() {
    setModal(!modal);
  }

  return (
    <>
      <aside className="aside-container">
        <div className="aside-tag">
          <button type="button" onClick={openModal}>
            <img src={avatar} alt="avatar" />
          </button>
        </div>
        <form>
          <input placeholder="Seach" />
          <button type="submit">ICON</button>
        </form>
        <nav className="aside-nav">
          <ul>
            <li>
              <div className="icon">></div>

              <div className="aside-btn">
                <button onClick={e => console.log(e)}>
                  <span>React</span>
                  <div className="border top" />
                  <div className="border bottom" />
                  <div className="border left" />
                  <div className="border right" />
                </button>
              </div>
            </li>
            <li>
              <div className="icon">></div>
              <div className="aside-btn">
                <button onClick={e => console.log(e)}>
                  <span>Node JS</span>

                  <div className="border top" />
                  <div className="border bottom" />
                  <div className="border left" />
                  <div className="border right" />
                </button>
              </div>
            </li>
            <li>
              <div className="icon">></div>
              <div className="aside-btn">
                <button onClick={e => console.log(e)}>
                  <span>React Native</span>

                  <div className="border top" />
                  <div className="border bottom" />
                  <div className="border left" />
                  <div className="border right" />
                </button>
              </div>
            </li>
            <li>
              <div className="icon">></div>
              <div className="aside-btn">
                <button onClick={e => console.log(e)}>
                  <span>GraghpQl</span>

                  <div className="border top" />
                  <div className="border bottom" />
                  <div className="border left" />
                  <div className="border right" />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
      <UserConfingModal />
    </>
  );
}

export default Aside;
