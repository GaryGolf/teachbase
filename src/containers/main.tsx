import * as React from 'react'
import { bindActionCreators, Dispatch, Action } from 'redux'
const {connect} = require('react-redux')
import Actions from '../constants/actions'

import LoginForm from '../components/login-form'
import LangSelector from '../components/lang-selector'
import * as styles from './main.css'
import * as json from '../constants/lang.json'

interface Props {
  lang?: string
  dispatch?: Dispatch<any>
}
interface State {
  lang: string
}

const sleep = async ms => new Promise(async resolve=>await setTimeout(()=>resolve('Ok'),ms))

@connect(
  state => ({
    lang: state.common.lang
  })
)
export default class Main extends React.Component <Props, State> {

  constructor(props:Props){
    super(props)

    this.state = {lang: json.rus}
    this.handleLanguageChange = this.handleLanguageChange.bind(this)
  }

  async handleLanguageChange(lang:string){
    this.props.dispatch({type: Actions.SLEEP})
    await sleep(2000)
    this.props.dispatch({type: Actions.CHANGE_LANGUADE, payload:lang})
  }
  
  submitHandler = async values => {
    await sleep(1500)
    console.log(values)
  }

  render(){
    
    return (
      <div className={styles.container}>
          <h4>{json[this.props.lang].login.title}</h4>
          <LoginForm 
            lang={this.props.lang}
            onSubmit={this.submitHandler}/>
          <div>
            <LangSelector
              lang={this.props.lang}
              onChange={this.handleLanguageChange}
            />
          </div>
      </div>
    )
  }
}
