import IllustrationTab3 from "../assets/svg/illustration-features-tab-3.svg";
import { Container, Modal } from "react-bootstrap";
import TabContentComponent from "./TabContentComponent";
import "./ModalEasySharing.scss";
function ModalEasySharing({ show, handleClose }) {
	return (
		<Container className="Modal">
			<Modal show={show} onHide={handleClose} centered size="xl">
				<Modal.Header closeButton>
					<Modal.Title>Easy Sharing</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<TabContentComponent
						heading={"Share your bookmarks"}
						text={`Easily shate you bookmarks and collections with
                                others. Create a shareable link that you can send at
                                the click of a button.`}
						textMobile={`Easily shate you bookmarks and collections 
						with others. Create a shareable link 
						that you can send at the click of a button.`}
						src={IllustrationTab3}
						alt={"Illustration features tab 3"}
					></TabContentComponent>
				</Modal.Body>
			</Modal>
		</Container>
	);
}

export default ModalEasySharing;
