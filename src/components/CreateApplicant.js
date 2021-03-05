import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

const CreateApplicant = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [ssn, setSSN] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  // preventDefault to avoid reloading the page.
  // When creating new applicant json-server will automatically create a unique id.
  const handleSubmit = (e) => {
    e.preventDefault();
    const applicant = { firstName, lastName, occupation, ssn };
    setIsPending(true);

    fetch("http://localhost:8000/applicants/", {
      method: "POST",
      // This tells the server the type of content being sent
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicant)
    }).then(() => {
      console.log("Applicant Added");
      setIsPending(false);
      // After POST request and applicant is added then navigate back to list of applicants.
      history.push("/");
    });
  };

  return (
    <div>
      <h2>Add a New Applicant</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm="2">First Name</Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">Last Name</Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md="2">Occupation</Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">SSN</Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="ssn"
              value={ssn}
              onChange={(e) => setSSN(e.target.value)}
            />
          </Col>
        </Form.Group>

        {/* Add conditional to render the type of button based on isPending state */}
        {/* if not pending display both submit and cancel button */}
        {/* if pending display disabled button */}
        {!isPending && (
          <React.Fragment>
            <Button variant="dark" type="submit">
              Submit
            </Button>

            <Link to="/">
              <Button variant="danger">Cancel</Button>
            </Link>
          </React.Fragment>
        )}

        {isPending && (
          <React.Fragment>
            <Button disabled variant="dark" type="submit">
              Adding Applicant...
            </Button>
          </React.Fragment>
        )}
      </Form>
    </div>
  );
};

export default CreateApplicant;
