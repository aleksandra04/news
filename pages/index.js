import React from 'react'
import store from '../store/store'
import {observer} from 'mobx-react'
import Link from 'next/link'

class Main extends React.Component {

  render() {
    return (
      <div className='main'>
        <header className='header'>news</header>
        <div className='buttons-container'>
          {store.allTopics && store.allTopics.map(topic => (
              <Link href={`/${topic}`} key={topic} >
                <a id={topic} className='button'>{topic}</a>
              </Link>
          ))}
        </div>
        <style jsx>{`
          .main {
            width: 95vw;
            height: 95vh;
            margin: auto;
            padding-top: 100px;
            border-radius: 5px;
            box-shadow: 0px 0px 40px rgba(98, 120, 128, 0.15);
            text-align:center;
            font-family: Arial;
          }
          .buttons-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin: 30px auto;
          }
          .button {
            text-decoration: none;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 40px rgba(98, 120, 128, 0.15);
            width: 200px;
            margin-bottom: 20px;
            font-size: 15px;
            text-transform: uppercase;
            color: gray;
            transition: 0.2s
          }
          .button:hover {
            transform: scale(1.1)
          }
          .header {
             text-transform: uppercase;
             font-size: 40px;
          }`
          
        }</style>
      </div>
    )
  }
  
}

export default observer(Main)
