import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import IndexExpenses from '../Expenses/IndexExpenses'
// import Footer from '../Footer/Footer'
// import EditExpense from '../Expenses/EditExpense'
import HomePage from '../Home/HomePage'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <div className="back">
          <Header user={user} />
          {msgAlerts.map((msgAlert, index) => (
            <AutoDismissAlert
              key={index}
              heading={msgAlert.heading}
              variant={msgAlert.variant}
              message={msgAlert.message}
            />
          ))}
          <main className="container">
            <Route path='/sign-up' render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <Route path='/sign-in' render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <AuthenticatedRoute user={user} path='/sign-out' render={() => (
              <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
            )} />
            <AuthenticatedRoute user={user} path='/change-password' render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )} />
            <Route exact path='/' render={() => (
              <HomePage msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <AuthenticatedRoute user={user} path='/expenses' render={(expenseprops) => (
              <IndexExpenses msgAlert={this.msgAlert} user={user} expenseprops={expenseprops}/>
            )} />
          </main>
        </div>
      </Fragment>
    )
  }
}

export default App
