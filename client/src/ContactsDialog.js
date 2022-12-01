import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Box,
  NativeSelect,
  FormControl,
  InputLabel,
  DialogTitle,
} from "@mui/material";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetch("api/countries")
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      });
    console.log(countries);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    fetch("api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        country: country,
        city: city,
        address: address,
      }),
    }).then(response => response.json());
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Contact
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact</DialogTitle>
        <DialogContent>
          <FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={e => setName(e.target.value)}
            />
            <InputLabel
              variant="standard"
              htmlFor="country-select"
              sx={{
                visibility: "hidden",
              }}
            >
              Country
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "Country",
                id: "country-select",
              }}
              variant="filled"
              onChange={e => setCountry(e.target.value)}
            >
              {countries.map(country => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </NativeSelect>
            <TextField
              autoFocus
              margin="dense"
              id="city"
              label="City"
              type="text"
              fullWidth
              variant="standard"
              onChange={e => setCity(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Address"
              type="text"
              fullWidth
              variant="standard"
              onChange={e => setAddress(e.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
