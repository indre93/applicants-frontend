import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// This component will display a confirmation modal before actually removing the applicant.
// Modal will only be displayed if the hook state of the parent component - Applicant component - is set to true. Triggered when Delete button is clicked on.
const ConfirmationModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to remove {`${props.fullname}`}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.confirmed}>
          Yes
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
