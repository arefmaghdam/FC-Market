import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import store from "./redux/srore";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" Component={Home} exact />
              <Route path="/product/:id" Component={Product} />
              <Route path="/cart/:id?" Component={Cart} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
