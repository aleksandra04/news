import store from '../store/store'
import {observer} from 'mobx-react'
import Page from './page'

class Techcrunch extends React.Component {

    componentDidMount() {
      store.loadNews('techcrunch', this.props.articles)
    }
  
    render() {   
      return (
        <Page topic={'techcrunch'} getter={'techcrunchNews'}/>
      )
    }
    
  }
  Techcrunch.getInitialProps = async (ctx) => {
    const res = await fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2f1dc78a270a4093a91117c50b0b0356')
    const json = await res.json()
    return { articles: json.articles }
  }

  export default observer(Techcrunch)

  