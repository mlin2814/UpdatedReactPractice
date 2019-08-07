import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (
  <div>This from my dashboard</div>
);

const AddExpensePage = () => (
  <div>This from my add expense page</div>
);

const EditExpensePage = () => (
  <div>This from my Edit expense page</div>
);

const HelpPage = () => (
  <div>This from the Help page</div>
);

const NotFoundPage = () => (
  <div>404! - <Link to="/">Go Home</Link></div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Go Create</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Go Edit</NavLink>
    <NavLink to="/help" activeClassName="is-active">Get Help</NavLink>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))
