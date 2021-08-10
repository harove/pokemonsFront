import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutAction } from "../../store/login/actions";
import "./navbar.css";

const Menu = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.login.isLogin);

  return <nav className="container navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div className="container">
	{/* <Link className="navbar-brand" to="/">
	  <img src="./../../frutas.PNG" alt="logo" width="60px" />
	</Link> */}
	<button
	  className="navbar-toggler"
	  type="button"
	  data-bs-toggle="collapse"
	  data-bs-target="#navbarSupportedContent"
	  aria-controls="navbarSupportedContent"
	  aria-expanded="false"
	  aria-label="Toggle navigation"
	>
	  <span className="navbar-toggler-icon" />
	</button>
	<div className="collapse navbar-collapse" id="navbarSupportedContent">
	  <ul className="navbar-nav ">
		<li className="nav-item">
		  <NavLink
			exact
			activeClassName="selected"
			className="nav-link"
			to="/"
		  >
			Home
		  </NavLink>
		</li>
		<li className="nav-item">
		  <NavLink
			exact
			activeClassName="selected"
			className="nav-link"
			to="/pokemon"
		  >
			Pokemones
		  </NavLink>
		</li>
		<li className="nav-item">
		  <NavLink
			exact
			activeClassName="selected"
			className="nav-link"
			to="/login"
		  >
			Login
		  </NavLink>
		</li>
		{isLogin && (
		  <li className="nav-item">
			<button
			  className="btn btn-danger"
			  onClick={(e) => dispatch(logoutAction())}
			>
			  Logout
			</button>
		  </li>
		)}
	  </ul>
	</div>
  </div>
</nav>

};

export default Menu;
