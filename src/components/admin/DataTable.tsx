import React from "react";
import { Table, Button } from "react-bootstrap";

interface DataTableProps {
  data: any[];
  columns: string[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  return (
    <Table striped bordered hover>
      <thead className="bg-primary text-white">
        <tr>
          {columns.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col} className="small">{row[col]}</td>
            ))}
            <td>
              <Button variant="outline-primary" size="sm">Edit</Button>{" "}
              <Button variant="outline-danger" size="sm">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
