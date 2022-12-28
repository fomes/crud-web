import { Button } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

export const columns = [
  {
    name: "First Name",
    selector: (row: any) => row.firstName,
    sortable: true,
    width: "10%",
  },
  {
    name: "Last Name",
    selector: (row: any) => row.lastName,
    sortable: true,
    width: "10%",
  },
  {
    name: "Gender",
    selector: (row: any) => row.gender,
    sortable: true,
    width: "8%",
  },
  {
    name: "Address",
    selector: (row: any) => row.address.address,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row: any) => row.birthDate,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: any) => (
      <>
        <Button variant="primary">
          <BsFillPencilFill size={14} />
          Edit
        </Button>
        <Button variant="danger">
          <FaTrashAlt size={14} />
          Delete
        </Button>
      </>
    ),
  },
];
