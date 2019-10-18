import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './client/Home';
import ModeloNivelPesquisa from './client/pages/modelos/niveis/Search';
import ModeloNivelEdit from './client/pages/modelos/niveis/Edit';
import './App.css';
import "./assets/css/bootstrap.min.css";


export default () => (
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={ModeloNivelPesquisa} />
      {/* <Route path="/modelos/niveis" component={ModeloNivelPesquisa} /> */}
      <Route exact path="/modelos/niveis/edit/:id" component={ModeloNivelEdit} />
      <Route exact path="/modelos/niveis/novo" component={ModeloNivelEdit} />
      
    </Switch>
);
