import store from '../store/store'
import {observer} from 'mobx-react'
import Page from './page'

class Apple extends React.Component {

    componentDidMount() {
      store.loadNews('apple', this.props.articles)
    }
  
    render() {
      return (
        <Page topic={'apple'} getter={'appleNews'}/>
      )
    }
    
  }
  Apple.getInitialProps = async (ctx) => {
    const res = await fetch('http://newsapi.org/v2/everything?q=apple&from=2020-07-14&to=2020-07-14&sortBy=popularity&apiKey=2f1dc78a270a4093a91117c50b0b0356')
    const json = await res.json()
    return { articles: json.articles }
  }

  export default observer(Apple)