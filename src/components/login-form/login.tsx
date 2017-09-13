import * as React from 'react'
import { Field, SubmitHandler} from 'redux-form'
import * as styles from './login.css'
const {reduxForm} = require('redux-form')

interface Props {
  handleSubmit?: SubmitHandler
  onSubmit?: any
}
@reduxForm({form: 'login'})
export default class MyForm extends React.Component<Props, null> {
  render(){
    const {handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="login">Login</label>
          <Field name="login" component="input" type="text" />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    )
  }
}