import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

function Theme() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <DarkModeToggle
        mode={mode}
        dark="Theme"
        size="lg"
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
      <CssBaseline />
    </ThemeProvider>
  );
}

export default Theme;
