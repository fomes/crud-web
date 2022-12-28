import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { columns } from "../data/tableColumns";
import FilterComponent from "./FilterComponent";
import styles from "./Table.module.css";
import { ImPlus } from "react-icons/im";

export default function Table() {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = React.useState("");
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <>
        <Button variant="success">
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
