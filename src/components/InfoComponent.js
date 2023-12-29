import IllustrationHero from "../assets/svg/illustration-hero.svg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./InfoComponent.scss";
function InfoComponent() {
	return (
		<Container className="InfoComponent pb-65 py-0 py-md-35">
			<div className="roundedShapeRight"></div>
			<Row>
				<Col
					sm={12}
					md={6}
					order={{ sm: 2, md: 1 }}
					className="py-0 ps-0 py-md-40 ps-md-23 order-sm-2 order-md-1"
				>
					<Row>
						<Col md={12} className="d-none d-md-block">
							<h1 className="py-md-10">
								A Simple Bookmark <br />
								Manager
							</h1>
							<p>
								A clean and simple interface to organize your favourite <br />
								websites. Open a new browser tab and see your sites load <br />
								instantly. Try it for free.
							</p>
						</Col>
						<Col
							sm={12}
							className="d-block d-md-none text-center pt-36 pb-8 pe-2"
						>
							<h1 className="pb-5">
								A Simple Bookmark <br />
								Manager
							</h1>
							<p>
								A clean and simple interface to organize <br />
								your favourite websites. Open a new <br />
								browser tab and see your sites load <br />
								instantly. Try it for free.
							</p>
						</Col>
						<Col sm={12} className="px-16 px-md-8">
							<Button
								className="mx-10 mx-md-0 my-md-10 shadow"
								variant="primary"
							>
								Get it on Chrome
							</Button>
							<Button className="my-md-10 ms-md-7 shadow" variant="light">
								Get it on Firefox
							</Button>
						</Col>
					</Row>
				</Col>
				<Col sm={12} md={6} className="order-sm-1 order-md-2 pt-22 pt-md-0">
					<Image
						src={IllustrationHero}
						alt="Illustration hero"
						className="ilustrationImg"
					></Image>
				</Col>
			</Row>
		</Container>
	);
}

export default InfoComponent;
