import { Button, Card, Image } from "react-bootstrap";
import Dots from "../assets/svg/bg-dots.svg";
import "./DownloadCard.scss";

function DownloadCard({ src, browser, version }) {
	return (
		<Card className="DownloadCard mx-md-auto shadow-lg">
			<Card.Img className="overlay" src={Dots} alt={"Dots"} />
			<Card.ImgOverlay>
				<Card.Img
					className="my-9 my-md-11"
					variant="top"
					src={src}
					alt={"Logo " + browser}
				/>
				<Card.Body>
					<Card.Title>{"Add to " + browser}</Card.Title>
					<Card.Text className="pb-29">
						{"Minimum version " + version}
					</Card.Text>
					<Button variant="primary" className="shadow">
						Add & Install Extension
					</Button>
				</Card.Body>
			</Card.ImgOverlay>
		</Card>
	);
}
export default DownloadCard;
