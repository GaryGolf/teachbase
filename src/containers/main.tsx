import * as React from 'react'
import { bindActionCreators, Dispatch, Action } from 'redux'
const {connect} = require('react-redux')
import Actions from '../constants/actions'

import LoginForm from '../components/login-form'
import * as styles from './main.css'

interface Props {}
interface State {}
@connect(
  state => ({}),
  dispatch => ({})
)
export default class Main extends React.Component <Props, State> {

  submitHandler = values => {
    console.log(values)
  }

  render(){
    return (
      <div className={styles.container}>
          <h4>Please login</h4>
          <LoginForm onSubmit={this.submitHandler}/>
      </div>
    )
  }
}