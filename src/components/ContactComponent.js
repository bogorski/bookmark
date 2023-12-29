import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import "./ContactComponent.scss";

function ContactComponent() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [joinedValue, setJoinedValue] = useState("35,000+");
	const handleSubmit = (event) => {
		event.preventDefault();
		if (email.trim() === "" || !isValidEmail(email)) {
			setError("Whoops, make sure it's an email");
		}
	};
	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
		setError("");
	};

	useEffect(() => {
		setTimeout(() => {
			setJoinedValue(0);
		}, 20000);
	}, []);

	return (
		<Container
			fluid
			id="contact"
			className="bg-primary ContactComponent pt-43 pb-md-46"
		>
			<Row className="">
				<Col sm={12} className="text-center">
					<Row>
						<Col md={12} className="d-none d-md-block">
							<p className=""> {joinedValue} ALREADY JOINED</p>
							<h3 className="pt-md-12">
								Stay up-to-date with what <br />
								we're doing
							</h3>
						</Col>
						<Col sm={12} className="d-block d-md-none">
							<p className=""> {joinedValue} ALREADY JOINED</p>
							<h3 className="pt-2">
								Stay up-to-date with what <br />
								we're doing
							</h3>
						</Col>
					</Row>
				</Col>
				<Col md={12} className="pt-md-16 d-none d-md-block">
					<Form onSubmit={handleSubmit} className={error ? "has-error" : ""}>
						<Stack
							direction="horizontal"
							className="align-items-md-start justify-content-md-center"
						>
							<Form.Group style={{ position: "relative" }}>
								<Form.Control
									value={email}
									onChange={handleEmailChange}
									placeholder="Enter your email address"
									isInvalid={!!error}
								/>
								<Form.Control.Feedback
									type="invalid"
									style={{ position: "absolute" }}
								>
									{error}
								</Form.Control.Feedback>
							</Form.Group>
							<Button
								className="shadow ms-md-10"
								variant="secondary"
								type="submit"
							>
								Contact Us
							</Button>
						</Stack>
					</Form>
				</Col>
				<Col sm={12} className="d-block d-md-none pt-10 pb-38">
					<Form onSubmit={handleSubmit} className={error ? "has-error" : ""}>
						<Stack
							direction="vertical"
							className="align-items-center justify-content-center"
						>
							<Form.Group
								className="shadow pb-10"
								style={{ position: "relative" }}
							>
								<Form.Control
									value={email}
									onChange={handleEmailChange}
									placeholder="Enter your email address"
									isInvalid={!!error}
								/>
								<Form.Control.Feedback type="invalid">
									{error}
								</Form.Control.Feedback>
							</Form.Group>
							<Button className="btnMobile " variant="secondary" type="submit">
								Contact Us
							</Button>
						</Stack>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default ContactComponent;
