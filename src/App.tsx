import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Nav from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FiltersContext from "./context/FiltersContext";
import { ChakraBaseProvider, theme as chakraTheme } from "@chakra-ui/react";

const App = () => {
  return (
    <FiltersContext>
      <ChakraBaseProvider theme={chakraTheme}>
        <Nav />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
        <Footer />
      </ChakraBaseProvider>
    </FiltersContext>
  );
};

export default App;
