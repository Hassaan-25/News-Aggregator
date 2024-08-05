import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
// import PreferencesPage from "./pages/PreferencesPage";
import FiltersContext from "./context/FiltersContext";
import { ChakraBaseProvider, theme as chakraTheme } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraBaseProvider theme={chakraTheme}>
      <FiltersContext>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/preferences" element={<PreferencesPage />} /> */}
          </Routes>
        </Router>
      </FiltersContext>
    </ChakraBaseProvider>
  );
};

export default App;
