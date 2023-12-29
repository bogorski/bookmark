import React, { useState } from "react";
import LogoBookmarkWhite from "../assets/svg/logo-bookmark-white.svg";
import IconTwitter from "../assets/svg/icon-twitter.svg";
import IconTwitterRed from "../assets/svg/icon-twitter-red.svg";
import IconFacebook from "../assets/svg/icon-facebook.svg";
import IconFacebookRed from "../assets/svg/icon-facebook-red.svg";

import { Container, Nav, Navbar, Row, Col, Image } from "react-bootstrap";
import "./FooterComponent.scss";

function FooterComponent() {
	const [isHoveredFacebook, setIsHoveredFacebook] = useState(false);
	const [isHoveredTwitter, setIsHoveredTwitter] = useState(false);
	return (
		<Container className="bg-dark FooterComponent py-22 py-md-15">
			<Col sm={12} className="px-md-85">
				<Row className=" align-items-md-center">
					<Col sm={12} md={8}>
						<Nav className="align-items-md-center px-md-10 flex-sm-column flex-md-row">
							<Navbar.Brand className="pe-md-30">
								<Image src={LogoBookmarkWhite} alt="Bookmark Logo"></Image>
							</Navbar.Brand>

							<Nav.Link href="#features" className="pe-md-18 pt-24 py-md-0">
								FEATURES
							</Nav.Link>

							<Nav.Link href="#pricing" className="pe-md-18 pt-17 py-md-0">
								PRICING
							</Nav.Link>

							<Nav.Link href="#contact" className=" pt-17 py-md-0">
								CONTACT
							</Nav.Link>
						</Nav>
					</Col>
					<Col sm={12} md={4} className="pt-22 pt-md-0">
						<Nav className="justify-content-center justify-content-md-end  pt-md-0">
							<Nav.Link
								href="https://www.facebook.com"
								onMouseEnter={() => setIsHoveredFacebook(true)}
								onMouseLeave={() => setIsHoveredFacebook(false)}
							>
								<Image
									className={` ${
										isHoveredFacebook ? "hover-image" : "default-image"
									}`}
									src={isHoveredFacebook ? IconFacebookRed : IconFacebook}
									alt="Facebook icon"
								></Image>
							</Nav.Link>
							<Nav.Link
								className="ps-15"
								href="https://twitter.com"
								onMouseEnter={() => setIsHoveredTwitter(true)}
								onMouseLeave={() => setIsHoveredTwitter(false)}
							>
								<Image
									className={` ${
										isHoveredTwitter ? "hover-image" : "default-image"
									}`}
									src={isHoveredTwitter ? IconTwitterRed : IconTwitter}
									alt="Twitter icon"
								></Image>
							</Nav.Link>
						</Nav>
					</Col>
				</Row>
			</Col>
		</Container>
	);
}

export default FooterComponent;
