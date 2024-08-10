import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
// import PreferencesPage from "./pages/PreferencesPage";
import FiltersContext from "./context/FiltersContext";
import { ChakraBaseProvider, theme as chakraTheme } from "@chakra-ui/react";
import "react-dates/initialize";
import Nav from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <FiltersContext>
      <Nav />
      <ChakraBaseProvider theme={chakraTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/preferences" element={<PreferencesPage />} /> */}
          </Routes>
        </Router>
      </ChakraBaseProvider>
      <Footer />
    </FiltersContext>
  );
};

export default App;
