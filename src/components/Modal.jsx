// import { Button, Modal } from "antd";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Hire++
      </Button>

      <Modal className="modal" show={show} onHide={handleClose}>
        <div className="body">
          <div className="logo-modal">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF" />
              <path
                d="M38 27.0801V28.0001C37.9988 30.1565 37.3005 32.2548 36.0093 33.9819C34.7182 35.7091 32.9033 36.9726 30.8354 37.584C28.7674 38.1954 26.5573 38.122 24.5345 37.3747C22.5117 36.6274 20.7847 35.2462 19.611 33.4372C18.4373 31.6281 17.8798 29.4882 18.0217 27.3364C18.1636 25.1847 18.9972 23.1364 20.3983 21.4972C21.7994 19.8579 23.6928 18.7155 25.7962 18.2403C27.8996 17.765 30.1003 17.9824 32.07 18.8601M38 20.0001L28 30.0101L25 27.0101"
                stroke="#039855"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="4"
                y="4"
                width="48"
                height="48"
                rx="24"
                stroke="#ECFDF3"
                stroke-width="8"
              />
            </svg>
          </div>
          <div className="body-text">
            <p className="bulk-hire_bulk_modal_heading">Successfully Uploaded</p>
          </div>
          <div className="body-sub-text">
            <p className="hire_bulk_modal_pragraph">
              Your request is successfully accepted. We are processing your
              resumes under the hood. Please visit “View JD” screen.
            </p>
          </div>
        </div>
        <Button className="bulk_hire_modal_button_done" variant="   mb-3" onClick={handleClose}>
          Done
        </Button>
      </Modal>
    </div>
  );
}

export default Modals;
