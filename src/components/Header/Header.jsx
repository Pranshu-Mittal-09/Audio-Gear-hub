import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { SlMenu } from "react-icons/sl";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showcart, setShowcart] = useState(false);
  const [showsearch, setShowsearch] = useState(false);
  const { cartCount } = useContext(Context);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="mobileItems">
            <SlMenu onClick={showSiderbar} />
            {sidebar && <Sidebar active={setSidebar} />}
          </div>

          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Category</li>
          </ul>

          <div className="center" onClick={() => navigate("/")}>
            Audio-Gear HUB
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowsearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowcart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showcart && <Cart setShowcart={setShowcart} />}
      {showsearch && <Search setShowsearch={setShowsearch} />}
    </>
  );
};

export default Header;
