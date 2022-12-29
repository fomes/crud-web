import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./ModalAddPerson.module.css";

export default function ModalAddPerson({
  show = false,
  handleCloseModal,
  handleConfirmAdd,
  handleFirstName,
  handleLastName,
  handleGender,
  handleAddress,
  handleBirth,
}: any) {
  return (
    <>
      {show && (
        <div className={styles.container}>
          <h2>New Person</h2> <span onClick={handleCloseModal}>x</span>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleFirstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleLastName}
          />
          <input
            type="text"
            placeholder="Gender"
            onChange={handleGender}
          />
          <input
            type="text"
            placeholder="Address"
            onChange={handleAddress}
          />
          <input
            type="text"
            placeholder="Date of Birth"
            onChange={handleBirth}
          />
          <Button variant="success" onClick={handleConfirmAdd}>
            Add
          </Button>
        </div>
      )}
    </>
  );
}
