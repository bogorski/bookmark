import IllustrationTab1 from "../assets/svg/illustration-features-tab-1.svg";
import IllustrationTab2 from "../assets/svg/illustration-features-tab-2.svg";
import IllustrationTab3 from "../assets/svg/illustration-features-tab-3.svg";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import TabContentComponent from "./TabContentComponent";
import "./FeaturesComponent.scss";
function FeaturesComponent() {
	return (
		<Container id="features" className="FeaturesComponent pt-md-40 pb-md-27">
			<div className="roundedShapeLeft"></div>
			<Row>
				<Col md={12} className="text-md-center d-none d-md-block">
					<h3 className="pb-md-8">Features</h3>
					<p>
						Our aim is to make it quick and easy for you to access your
						<br />
						favourite websites. Your bookmarks sync between your devices
						<br />
						so you can access them on the go.
					</p>
				</Col>
				<Col sm={12} className="d-block d-md-none text-center pt-30">
					<h5 className="pb-4">Features</h5>
					<p>
						Our aim is to make it quick and easy for you <br />
						to access your favourite websites. Your <br />
						bookmarks sync between your devices so <br />
						you can access them on the go.
					</p>
				</Col>
				<Col sm={12} className="mt-12 py-md-25 mt-md-5">
					<Tabs
						defaultActiveKey="simple"
						transition={false}
						id="noanim-tab-example"
						className="justify-content-md-center"
					>
						<Tab
							eventKey="simple"
							title="Simple Bookmarking"
							className="pt-md-45"
						>
							<TabContentComponent
								heading={"Bookmark in one click"}
								text={`Organize your bookmarks however you like. Our
                                simple drag-and-drop interface gives you complete
                                control over how you manage your favourite sites.`}
								textMobile={`Organize your bookmarks however you like.
								Our simple drag-and-drop interface gives 
								you complete control over how you manage 
								your favourite sites.`}
								src={IllustrationTab1}
								alt={"Illustration features tab 1"}
							></TabContentComponent>
						</Tab>
						<Tab
							eventKey="speedy"
							title="Speedy Searching"
							className="pt-md-45"
						>
							<TabContentComponent
								heading={"Intelligent search"}
								text={`Our powerful search feature will help you find saved
                                sites in no time at all. No need to trawel through all of
                                your bookmarks.`}
								textMobile={`Our powerful search feature will help 
								you find saved sites in no time at all. 
								No need to trawel through all of
                                your bookmarks.`}
								src={IllustrationTab2}
								alt={"Illustration features tab 2"}
							></TabContentComponent>
						</Tab>
						<Tab eventKey="easy" title="Easy Sharing" className="pt-md-45">
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
						</Tab>
					</Tabs>
				</Col>
			</Row>
		</Container>
	);
}
export default FeaturesComponent;
