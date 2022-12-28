import React, { ChangeEventHandler, MouseEventHandler } from "react";
import styles from "./FilterComponent.module.css";

interface FilterComponentProps {
  filterText: string;
  onFilter: ChangeEventHandler<HTMLInputElement>;
  onClear: MouseEventHandler<HTMLButtonElement>;
}

export const FilterComponent = ({
  filterText,
  onFilter,
  onClear,
}: FilterComponentProps) => (
  <div className={styles.container}>
    <span>Search:</span>
    <input
      id="search"
      type="text"
      value={filterText}
      onChange={onFilter}
    />
  </div>
);

export default FilterComponent;
