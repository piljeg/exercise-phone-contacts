import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    width: 110,
  },
  {
    field: "city",
    headerName: "City",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
  },
];

function Contacts() {
  const [rows, setRows] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    fetch("api/contacts")
      .then(response => response.json())
      .then(data => {
        setRows(data);
      });
    console.log(rows);
  }, []);

  return (
    <div className="dataGridContainer">
      <CssBaseline />
      <DataGrid
        className="data-grid"
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={newPage => setPageSize(newPage)}
        rowsPerPageOptions={[5, 10]}
        pagination
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

export default Contacts;
