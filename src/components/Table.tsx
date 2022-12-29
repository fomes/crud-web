import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import styles from "./Table.module.css";
import { ImPlus } from "react-icons/im";
import ModalAddPerson from "./ModalAddPerson";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import ModalConfirmDelete from "./ModalConfirmDelete";

export default function Table() {
  const [data, setData] = useState<any>([]);
  const [showModalAddPerson, setShowModalAddPerson] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterText, setFilterText] = React.useState("");
  const [idToDelete, setIdToDelete] = useState<number>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState("");

  const columns = [
    {
      name: "First Name",
      selector: (row: any) => row.firstName,
      sortable: true,
      width: "16%",
    },
    {
      name: "Last Name",
      selector: (row: any) => row.lastName,
      sortable: true,
      width: "16%",
    },
    {
      name: "Gender",
      selector: (row: any) => row.gender,
      sortable: true,
      width: "14%",
    },
    {
      name: "Address",
      selector: (row: any) => row.address.address || row.address,
      sortable: true,
      width: "16%",
    },
    {
      name: "Date of Birth",
      selector: (row: any) => row.birthDate,
      sortable: true,
      width: "10%",
    },
    {
      name: "Action",
      width: "28%",
      cell: (row: any) => (
        <>
          <Button
            variant="primary"
            onClick={handleOpenEditModal}
            style={{ marginLeft: "0" }}
          >
            <BsFillPencilFill size={14} />
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => handleOpenDeleteModal(row.id)}
          >
            <FaTrashAlt size={14} />
            Delete
          </Button>
        </>
      ),
    },
  ];

  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();

    setData(data.users);
  };

  const filteredItems = data.filter(
    (item: any) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const handleCloseAddModal = () => {
    setShowModalAddPerson(false);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleOpenAddModal = () => {
    setShowModalAddPerson(true);
  };

  const handleOpenDeleteModal = (id: number) => {
    setShowDeleteModal(true);
    setIdToDelete(id);
  };

  const handleConfirmAdd = () => {
    if (!firstName || !lastName || !gender || !address || !birth) {
      alert("Fill all the fields!");
    } else {
      const newPerson = {
        firstName,
        lastName,
        gender,
        address,
        birthDate: birth,
      };

      setData([...data, newPerson]);
      setShowModalAddPerson(false);
      setFirstName("");
      setLastName("");
      setGender("");
      setAddress("");
      setBirth("");

      alert(`${firstName} successfully added!`);
    }
  };

  const handleConfirmDelete = () => {
    const updateData = data.filter((item: any) => item.id !== idToDelete);
    setData(updateData);
    handleCloseDeleteModal();
  };

  const handleOpenEditModal = () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <>
        <ModalAddPerson
          show={showModalAddPerson}
          handleCloseModal={handleCloseAddModal}
          handleConfirmAdd={handleConfirmAdd}
          handleFirstName={(event: any) => setFirstName(event.target.value)}
          handleLastName={(event: any) => setLastName(event.target.value)}
          handleGender={(event: any) => setGender(event.target.value)}
          handleAddress={(event: any) => setAddress(event.target.value)}
          handleBirth={(event: any) => setBirth(event.target.value)}
        />

        <ModalConfirmDelete
          show={showDeleteModal}
          handleCloseDeleteModal={handleCloseDeleteModal}
          handleConfirmDelete={handleConfirmDelete}
        />

        <Button variant="success" onClick={handleOpenAddModal}>
          <ImPlus size={15} /> Add Person
        </Button>

        <div className={styles.dataTable}>
          <DataTable
            striped
            subHeader
            pagination
            columns={columns}
            data={filteredItems}
            defaultSortFieldId={1}
            subHeaderComponent={subHeaderComponent}
            paginationRowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </>
    </div>
  );
}
