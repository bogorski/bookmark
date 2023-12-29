import LogoBookmark from "../assets/svg/logo-bookmark.svg";
import IconHamburger from "../assets/svg/icon-hamburger.svg";
import { Container, Row, Col, Image, Button, Nav } from "react-bootstrap";
import "./HeaderComponent.scss";

function HeaderComponent({ handleShowModal, handleShowMenu, isVisible }) {
	return (
		<Container
			className="HeaderComponent py-md-30 px-md-22 py-24"
			onMouseOver={handleShowModal}
		>
			<Row className="align-items-md-center">
				<Col sm={6} md={4}>
					<Image
						className="ps-12 ps-md-5"
						src={LogoBookmark}
						alt="Bookmark Logo"
					></Image>
				</Col>
				<Col md={8} className="d-none d-md-block">
					<Nav className="justify-content-md-end align-items-md-center">
						<Nav.Link className="me-md-8" href="#features">
							FEATURES
						</Nav.Link>
						<Nav.Link className="me-md-8" href="#pricing">
							PRICING
						</Nav.Link>
						<Nav.Link className="me-md-20" href="#contact">
							CONTACT
						</Nav.Link>
						<Button variant="secondary" className="shadow">
							LOGIN
						</Button>
					</Nav>
				</Col>
				<Col sm={6} className="d-block d-md-none text-end">
					{isVisible && (
						<Image
							className="pe-13"
							onClick={handleShowMenu}
							src={IconHamburger}
							alt="Hamburger Icon"
						></Image>
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default HeaderComponent;
