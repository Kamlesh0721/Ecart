import { Brightness4, Brightness7 } from "@mui/icons-material";
import { AppBar, IconButton, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}
export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6">Sports Center</Typography>

        <IconButton onClick={handleThemeChange} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
