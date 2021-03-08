import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateApplicant = () => {
  const [applicant, setApplicant] = React.useState({
    firstName: "", lastName: "", occupation: "", ssn: ""
  });
  const [isPending, setIsPending] = React.useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
  };

  // preventDefault to avoid reloading the page.
  // When creating new applicant json-server will automatically create a unique id.
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    fetch("http://localhost:8000/applicants/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicant)
    }).then(() => {
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
              value={applicant.firstName}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">Last Name</Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="lastName"
              value={applicant.lastName}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column md="2">Occupation</Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="occupation"
              value={applicant.occupation}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">SSN</Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="ssn"
              value={applicant.ssn}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        {/* Add conditional to render the type of button based on isPending state */}
        {/* if not pending display both submit and cancel button */}
        {/* if pending display disabled button */}
        {!isPending && (
          <React.Fragment>
            <Button variant="dark" type="submit">
              Add Applicant
            </Button>

            <Link to="/">
              <Button variant="danger">Cancel</Button>
            </Link>
          </React.Fragment>
        )}

        {isPending && (
          <Button disabled variant="dark" type="submit">
            Adding Applicant...
          </Button>
        )}
      </Form>
    </div>
  );
};

export default CreateApplicant;
