import { Row, Col, Button, Nav, Image, Offcanvas } from "react-bootstrap";
import "./HamburgerMenu.scss";
import LogoBookmarkHamburger from "../assets/svg/logo-bookmark-hamburger.svg";
import IconTwitter from "../assets/svg/icon-twitter.svg";
import IconFacebook from "../assets/svg/icon-facebook.svg";
import IconClose from "../assets/svg/icon-close.svg";
function HamburgerMenu({ showMenu, handleCloseMenu }) {
	return (
		<Offcanvas show={showMenu} placement="top" className="HamburgerMenu">
			<Offcanvas.Header className="mx-auto py-20">
				<Offcanvas.Title>
					<Image
						className="pe-90"
						src={LogoBookmarkHamburger}
						alt="Bookmark Logo"
					></Image>
					<Image
						src={IconClose}
						alt="Close Icon"
						onClick={handleCloseMenu}
					></Image>
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Row>
					<Col sm={12}>
						<Nav className="align-items-center flex-column py-5 text-center">
							<Nav.Link className="" href="#features" onClick={handleCloseMenu}>
								FEATURES
							</Nav.Link>
							<Nav.Link className="" href="#pricing" onClick={handleCloseMenu}>
								PRICING
							</Nav.Link>
							<Nav.Link className="" href="#contact" onClick={handleCloseMenu}>
								CONTACT
							</Nav.Link>
							<Button variant="" className="mt-15">
								LOGIN
							</Button>
						</Nav>
					</Col>
					<Col sm={12} className="text-center pt-120 ">
						<Image
							className="pe-25 "
							src={IconFacebook}
							alt="Facebook icon"
						></Image>
						<Image className="" src={IconTwitter} alt="Twitter icon"></Image>
					</Col>
				</Row>
			</Offcanvas.Body>
		</Offcanvas>
	);
}
export default HamburgerMenu;
