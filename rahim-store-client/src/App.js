import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import AddProduct from './Components/AddProductPage/AddProduct/AddProduct';
import Update from './Components/UpdatePage/Update/Update';
import Delete from './Components/DeleteProduct/Delete/Delete';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/add-products">
          <AddProduct />
        </Route>
        <Route path="/update-products">
          <Update />
        </Route>
        <Route path="/delete-products">
          <Delete />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h3>Page Not Found</h3>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
