import React from "react";
import Menu from "../asset/menu.svg";
import Exit from "../asset/exit.svg";
function Navbar() {
  // navbar structure
  //
  // <header>
  //     <a href="" className="logo">company name</a>
  //     <nav>
  //         <ul>
  //             <li><a href=""></a></li>
  //             <li><a href=""></a></li>
  //             <li><a href=""></a></li>
  //         </ul>
  //     </nav>
  // </header>
  //

  return (
    <div className="forest-hero">
      <div className="wrapper no-padding">
        <header>
          <a href="" className="logo">
            company name
          </a>
          <nav>
            <img src={Menu} alt="open menu" className="menu" id="menu-btn" />
            <ul className="nav" id="nav">
              <li className="exit" id="exit-btn">
                <a href="">
                  <img src={Exit} alt="exit" />
                </a>
              </li>

              <li>
                <a href="">Cabins</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="" className="res">
                  Reservation
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
