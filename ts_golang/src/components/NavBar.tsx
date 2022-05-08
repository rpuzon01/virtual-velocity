import { Link } from "react-router-dom";
import "./"

const NavBar = () => {
	return (
		<nav>
			<Link to="/" className="nav-link">
				<h2>Virtual Traders</h2>
			</Link>
			sippin on lean yuh
			<Link to="/products">Products</Link>
		</nav>
	)
}

export default NavBar;