import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = ({children, token, cart}: any) => {

  return (
    <Navbar className="flex justify-between" bg="dark" variant="dark">
      <div className="flex items-center">
        <Navbar.Brand className="ml-4" href="/">Virtual Velocity</Navbar.Brand>
        <Nav>
          <div className="flex gap-4">
            <a
              className="text-white no-underline"
              href="/#home-top"
            >
              Home
            </a>
            <Link
              className="text-white no-underline"
              to="/products"
            >
              Products
            </Link>
            <a
              className="text-white no-underline"
              href="/#contactTop"
            >
              Contact
            </a>
            {token && (
              <>
                <Link
                  className="text-white no-underline"
                  to="/account"
                >
                  Account
                </Link>
                <Link
                  className="text-white no-underline"
                  to="/cart"
                >
                  Cart ({cart.products.length})
                </Link>
              </>
            )}
            {!token && (
              <Link
                className="text-white no-underline"
                to="/register"
              >
                Register
              </Link>
            )}
          </div>
        </Nav>
      </div>
      <div className="mr-4">
        {children}
      </div>
    </Navbar>
  );
}

export default Navigation;
