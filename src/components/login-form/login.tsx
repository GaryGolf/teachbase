import * as React from 'react'
import { Field, SubmitHandler} from 'redux-form'
import * as styles from './login.css'
const {reduxForm} = require('redux-form')
import * as json from '../../constants/lang.json'

interface Props {
  lang: string
  handleSubmit?: SubmitHandler
  onSubmit?: any
}
@reduxForm({form: 'login'})
export default class MyForm extends React.Component<Props, null> {
  render(){
    const {handleSubmit} = this.props

    const lang = json[this.props.lang].login

    return (
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="login">{lang.login}</label>
          <Field name="login" component="input" type="text" />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">{lang.password}</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button className={styles.button} type="submit">{lang.submit}</button>
      </form>
    )
  }
}