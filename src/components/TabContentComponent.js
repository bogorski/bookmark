import "./TabContentComponent.scss";
import "../App.scss";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
function TabContentComponent({ heading, text, textMobile, src, alt }) {
	return (
		<Container className="TabContentComponent pt-45 pt-md-0">
			<Row>
				<Col md={6} className="d-md-flex justify-content-md-end ">
					<Image
						className="px-5 px-md-1 ilustrationTabImg "
						src={src}
						alt={alt}
					></Image>
				</Col>
				<Col md={6} className="pt-2 pt-md-0 ps-md-70 ">
					<Row>
						<Col md={12} className="d-none d-md-block">
							<h3 className="pt-md-40">{heading}</h3>
							<p className="pt-md-10 pb-md-9">{text}</p>
						</Col>
						<Col sm={12} className="d-block d-md-none text-center pt-51">
							<h5 className="pb-5">{heading}</h5>
							<p className="">{textMobile}</p>
						</Col>
						<Col md={12} className="d-none d-md-block">
							<Button variant="primary" className="btnMoreInfo shadow">
								More info
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}
export default TabContentComponent;
