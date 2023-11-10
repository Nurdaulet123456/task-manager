import React from "react";
import { AdminIcons, ClubIcons, HomeIcons, ImportIcons, NotificationIcons } from "../atoms/Icons";
import { Input } from "../atoms/Inputs/Inputs";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__inner-left">
              <div className="header__cub">
                <ClubIcons />
              </div>

              <div className="header__cub">
                <HomeIcons />
              </div>

              <Input search/>
            </div>

            <div className="header__inner-center">
              <img className="img header__gif" src="/gif/logo.gif" alt="" />
            </div>

            <div className="header__inner-right">
              <div className="header__cub">
                <ImportIcons />
              </div>

              <div className="header__cub">
                <NotificationIcons />
              </div>

              <div className="header__cub">
                <AdminIcons />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
