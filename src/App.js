import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Desktop from "./layout/desktop/Desktop";
import { selectTheme } from "./reducers/themeSlice";

function App() {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme}>
      <Desktop />
    </ThemeProvider>
  );
}

export default App;
