import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UpdateApplicant = () => {
  const { id } = useParams();
  const [applicant, setApplicant] = React.useState({
    firstName: "", lastName: "", occupation: "", ssn: ""
  });
  const [isPending, setIsPending] = React.useState(false);
  const history = useHistory();

  // Use useEffect to update state based on changes made to the input field.
  React.useEffect(() => {
    fetch(`http://localhost:8000/applicants/${id}`)
      .then(resp => resp.json())
      .then(data => {
        setApplicant(data);
      });
  }, [id]);

  const handleChange = (e) => {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
  };

  // preventDefault to prevent page reload.
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    fetch(`http://localhost:8000/applicants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicant)
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div>
      <h2>Edit Applicant</h2>
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

        {!isPending && (
          <React.Fragment>
            <Button variant="dark" type="submit">
              Update Applicant
            </Button>

            <Link to="/">
              <Button variant="danger">Cancel</Button>
            </Link>
          </React.Fragment>
        )}

        {/* Add conditional to render the type of button based on isPending state */}
        {/* if not pending display both submit and cancel button */}
        {/* if pending display disabled button */}
        {isPending && (
          <Button disabled variant="dark" type="submit">
            Updating Applicant...
          </Button>
        )}
      </Form>
    </div>
  );
};

export default UpdateApplicant;
