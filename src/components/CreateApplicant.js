import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateApplicant = () => {
  return (
    <div>
      <h2>Add a New Applicant</h2>
      <Form>
        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column sm="2">First Name</Form.Label>
          <Col sm="9">
            <Form.Control type="firstName" placeholder="Enter first name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column sm="2">Last Name</Form.Label>
          <Col sm="9">
            <Form.Control type="lastName" placeholder="Enter last name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column md="2">Occupation</Form.Label>
          <Col sm="9">
            <Form.Control type="occupation" placeholder="Enter occupation" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column sm="2">SSN</Form.Label>
          <Col sm="9">
            <Form.Control type="ssn" placeholder="Enter ssn" />
          </Col>
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateApplicant;
