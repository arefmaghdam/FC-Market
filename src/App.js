import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Product from "./pages/Product";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/product/:id" Component={Product} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
