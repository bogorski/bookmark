import "./App.scss";
import HeaderComponent from "./components/HeaderComponent";
import InfoComponent from "./components/InfoComponent";
import FeaturesComponent from "./components/FeaturesComponent";
import DownloadComponent from "./components/DownloadComponent";
import QuestionsComponent from "./components/QuestionsComponent";
import FooterComponent from "./components/FooterComponent";
import ContactComponent from "./components/ContactComponent";
import ModalEasySharing from "./components/ModalEasySharing";
import HamburgerMenu from "./components/HamburgerMenu";
import { Container, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

function App() {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [hovered, setHovered] = useState(false);
	const [isVisible, setIsVisible] = useState(true);

	const handleCloseMenu = () => {
		setShowMenu(false);
		setIsVisible(true);
	};
	const handleShowMenu = () => {
		setShowMenu(true);
		setIsVisible(false);
	};
	const handleCloseModal = () => setShowModal(false);
	const handleShowModal = () => setShowModal(true);
	const handleShowModalMouseOver = () => {
		if (!showModal && !hovered) {
			handleShowModal();
		}
		setHovered(true);
	};
	useEffect(() => {
		setTimeout(() => {
			handleShowModal();
		}, 30000);
	}, []);
	return (
		<Container className="App">
			<ModalEasySharing show={showModal} handleClose={handleCloseModal} />
			<HamburgerMenu showMenu={showMenu} handleCloseMenu={handleCloseMenu} />
			<Col sm={12} className="px-md-80">
				<HeaderComponent
					handleShowModal={handleShowModalMouseOver}
					handleShowMenu={handleShowMenu}
					isVisible={isVisible}
				/>
				<InfoComponent />
				<FeaturesComponent />
				<DownloadComponent />
				<QuestionsComponent />
			</Col>
			<Col sm={12} className="pt-md-54">
				<ContactComponent />
				<FooterComponent />
			</Col>
		</Container>
	);
}

export default App;
