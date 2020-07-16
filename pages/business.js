import store from '../store/store'
import {observer} from 'mobx-react'
import Link from 'next/link'
import Page from './page'

class Business extends React.Component {

    componentDidMount() {
      store.loadNews('business', this.props.articles)
    }
  
    render() {
    
      return (
          <Page topic={'business'} getter={'businessNews'}/>
      )
    }
    
  }
  Business.getInitialProps = async (ctx) => {
    const res = await fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2f1dc78a270a4093a91117c50b0b0356')
    const json = await res.json()
    return { articles: json.articles }
  }

  export default observer(Business)