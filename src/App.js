import React, { useState } from "react";
import { Home } from "./Component/Home/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {UserList} from "./Component/Home/userList/UserList.jsx";
import {Tapbar} from "./Component/Tapbar/tapbar";
import {User} from "./Component/Page/User";
import { NewUser } from "./Component/newUser/NewUser";
import {ProductList} from "./Component/ProductList/ProductList";
import{Product} from "./Component/Product/product";
function App() {
  return(
    <Router>
      <Home/>
       <Switch>
        <Route exact path="/">
        <Tapbar/>
        </Route>
        <Route path="/users">
        <UserList/>
        </Route>
        <Route path="/user/:userId">
        <User/>
        </Route>
        <Route path="/newUser/">
        <NewUser/>
        </Route>
        <Route path="/products">
        <ProductList/>
        </Route>
        <Route path="/product/:productId">
        <Product/>
        </Route>
        <Route path="/newproduct/">
        <NewUser/>
        </Route>
       </Switch>
    </Router>
  );
}

export default App;
