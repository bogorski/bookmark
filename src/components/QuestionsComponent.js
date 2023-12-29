import { Container, Row, Col, Accordion, Button, Card } from "react-bootstrap";
import "./QuestionsComponent.scss";

function QuestionsComponent() {
	const text = (
		<>
			Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
			<br />
			ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet
			<br />
			convallis ultricies. Mauris augue massa, ultricies non ligula.
			<br />
			Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
			<br />
			Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
		</>
	);
	const textMobile = (
		<>
			Vivamus luctus eros aliquet convallis
			<br />
			ultricies. Mauris augue massa,
			<br />
			ultricies non ligula. Suspendisse imperdiet.
			<br />
			Vivamus luctus eros aliquet convallis
			<br />
			ultricies. Mauris augue massa, ultricies non
			<br />
			ligula. Suspendisse imperdie tVivamus
			<br />
			luctus eros aliquet convallis ultricies.
			<br />
			Mauris augue massa, ultricies non ligula.
			<br />
			Suspendisse imperdiet.
		</>
	);
	return (
		<Container className="QuestionsComponent pt-70 pb-66 py-md-32">
			<Row>
				<Col md={12} className="text-center">
					<Row>
						<Col md={12} className="d-none d-md-block">
							<h3 className="">Frequently Asked Questions</h3>
							<p className="pt-md-10">
								Here are some of our FAQs. If you have any other questions
								<br />
								you'd like answered please feel free to email us.
							</p>
						</Col>
						<Col sm={12} className="d-block d-md-none">
							<h5 className="">
								Frequently Asked <br /> Questions
							</h5>
							<p className="pt-5">
								Here are some of our FAQs. If you have any <br />
								other questions you'd like answered please <br />
								feel free to email us.
							</p>
						</Col>
					</Row>
				</Col>
				<Col
					sm={{ span: 12, offset: 0 }}
					md={{ span: 8, offset: 2 }}
					className="py-17 ps-18 pe-4 px-md-76 py-md-25"
				>
					<Accordion className="">
						<Accordion.Item eventKey="0" className="">
							<Accordion.Header className="">
								What is Bookmark?
							</Accordion.Header>
							<Accordion.Body className="d-none d-md-block">
								{text}
							</Accordion.Body>
							<Accordion.Body className="d-block d-md-none">
								{textMobile}
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header className="">
								How can I request a new browser?
							</Accordion.Header>
							<Accordion.Body className="d-none d-md-block">
								{text}
							</Accordion.Body>
							<Accordion.Body className="d-block d-md-none">
								{textMobile}
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header className="">
								Is there a mobile app?
							</Accordion.Header>
							<Accordion.Body className="d-none d-md-block">
								{text}
							</Accordion.Body>
							<Accordion.Body className="d-block d-md-none">
								{textMobile}
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header className="">
								What about other Chromium browsers?
							</Accordion.Header>
							<Accordion.Body className="d-none d-md-block">
								{text}
							</Accordion.Body>
							<Accordion.Body className="d-block d-md-none">
								{textMobile}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
				<Col md={12} className="text-center py-11 py-md-7">
					<Button variant="primary" className="btnMoreInfo shadow">
						More info
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default QuestionsComponent;
