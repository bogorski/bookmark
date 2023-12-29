import LogoChrome from "../assets/svg/logo-chrome.svg";
import LogoFirefox from "../assets/svg/logo-firefox.svg";
import LogoOpera from "../assets/svg/logo-opera.svg";
import DownloadCard from "./DownloadCard";
import { Container, Row, Col } from "react-bootstrap";
import "./DownloadComponent.scss";

function DownloadComponent() {
	return (
		<Container className="DownloadComponent py-md-50 text-center">
			<Row>
				<Col md={12}>
					<Row>
						<Col md={12} className="d-none d-md-block">
							<h3>Download the extension</h3>
							<p className="pt-md-10">
								We've got more browsers in the pipeline. Please do let us know
								if
								<br />
								you've got a favourite you'd like us to prioritize.
							</p>
						</Col>
						<Col sm={12} className="d-block d-md-none pt-91 ">
							<h5>Download the extension</h5>
							<p className="pt-5">
								We've got more browsers in the pipeline. <br />
								Please do let us know if you've got a <br />
								favourite you'd like us to prioritize.
							</p>
						</Col>
					</Row>
				</Col>
				<Col md={12}>
					<Row className="py-20 py-md-18 px-md-76 browserList">
						<Col sm={12} md={4} className="align-self-md-start pb-27 pb-md-0 ">
							<DownloadCard
								src={LogoChrome}
								browser={"Chrome"}
								version={"62"}
							></DownloadCard>
						</Col>
						<Col sm={12} md={4} className="align-self-md-center pb-27 pb-md-0">
							<DownloadCard
								src={LogoFirefox}
								browser={"Firefox"}
								version={"55"}
							></DownloadCard>
						</Col>
						<Col sm={12} md={4} className="align-self-md-end">
							<DownloadCard
								src={LogoOpera}
								browser={"Opera"}
								version={"46"}
							></DownloadCard>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default DownloadComponent;
