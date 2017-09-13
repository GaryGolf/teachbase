import * as React from 'react'
import * as styles from './lang-selector.css'
interface Props {
  lang: string
  onChange(lang:string):void
}
export default (props:Props) => {
  switch(props.lang) {
    case 'rus' :
      return <a href="#" className={styles.lang}
        onClick={e=>{e.preventDefault();props.onChange('eng')}}>English</a>
    case 'eng' :
      return <a href="#" className={styles.lang}
        onClick={e=>{e.preventDefault();props.onChange('rus')}}>Русский</a>
  }
}