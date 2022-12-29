import React from "react";
import { Button } from "react-bootstrap";
import styles from "./ModalAddPerson.module.css";

export default function ModalEditPerson({
  show = false,
  handleCloseEditModal,
  handleConfirmEdit,
  handleFirstName,
  handleLastName,
  handleGender,
  handleAddress,
  handleBirth,
  firstName,
  lastName,
  gender,
  address,
  birth,
}: any) {
  return (
    <>
      {show && (
        <div className={styles.container}>
          <h2>Edit Person</h2> <span onClick={handleCloseEditModal}>x</span>
          <input
            value={firstName}
            type="text"
            placeholder="First Name"
            onChange={handleFirstName}
          />
          <input
            value={lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleLastName}
          />
          <input
            value={gender}
            type="text"
            placeholder="Gender"
            onChange={handleGender}
          />
          <input
            value={address}
            type="text"
            placeholder="Address"
            onChange={handleAddress}
          />
          <input
            value={birth}
            type="text"
            placeholder="Date of Birth"
            onChange={handleBirth}
          />
          <Button variant="success" onClick={handleConfirmEdit}>
            Save
          </Button>
        </div>
      )}
    </>
  );
}
