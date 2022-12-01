import "./App.css";
import Contacts from "./Contacts";
import ContactsDialog from "./ContactsDialog.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div className="container">
      <ThemeProvider theme={darkTheme}>
        <div className="btnsContainer">
          <ContactsDialog />
          <DarkModeToggle
            mode={mode}
            dark="Theme"
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={mode => {
              setMode(mode);
            }}
          />
        </div>
        <Contacts />
      </ThemeProvider>
    </div>
  );
}

export default App;
