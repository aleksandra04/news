import Link from 'next/link'
import store from '../store/store'
import {observer} from 'mobx-react'
import Moment from 'react-moment'

const Page = observer(({topic, getter}) => {

    const buttons = store.allTopics.filter(el => el !== topic)
    const news = store[getter]
    
    return (
        <div className='page'>     
            <div className='buttons'>
                <Link href={'/'}>
                    <a className='button-page'>home</a>
                </Link>
                {buttons.map(topic => (
                    <Link href={`/${topic}`} key={topic}>
                        <a className='button-page'>{topic}</a>
                    </Link>
                ))}
            </div>
            {news && news.map((item, id) => (
                <div key={item.title + id} className='article'>
                    <img src={item.urlToImage ? item.urlToImage : '/news.jpg'} className='img'></img>
                    <div className='article-info'>
                        <div className='article-text'>
                            <p className='time'>
                                <Moment format="YYYY MM DD HH:mm">
                                    {item.publishedAt}
                                </Moment>
                            </p>
                            <p className='article-title'>{item.title}</p>
                            {item.description && <p className='article-description'>{item.description}</p>}
                            <span><a href={item.url} className='more'>read more...</a></span>
                        </div>
                        <div className='article-about'>
                            <span className='source'>{item.source.name}</span>
                            <span>{item.author}</span>
                        </div>
                    </div>
                </div>
            ))}
            <style jsx>{`
            .page {
                padding: 20px;
                width: 70vw;
                max-width: 1150px;
                margin: 0 auto;
                box-shadow: 0px 0px 40px rgba(98, 120, 128, 0.15);
                border-radius: 5px;
                font-family: arial;
            }
            .buttons {
                display: flex;
                margin-bottom: 30px
            }
            .button-page {
                width: 120px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background-color: #71c8de;
                border-radius: 3px;
                margin-right: 10px;
                color: white;
                text-decoration: none;
                transition: 0.2s;
            }
            .button-page:hover {
                background-color: #6c95a6;
            }
            .article {
                padding: 10px 0;
                border-bottom: 1px solid #BFC9CE;
                display: flex;
            }
            .article-title {
                font-weight: 600;
                margin: 0;
                padding: 10px 0;
            }
            .article-info {
                padding: 20px 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%
            }
            .article-description {
                margin: 0;
                padding: 10px 0;
                heigth: 300px
            }
            .article-about {
                display: flex;
                margin: 0 0  0 auto;
                color: gray;
                font-size: 14px
            }
            .source {
                margin-right: 10px;
            }
            .more {
                color: #71c8de;
                transition: 0.2s
            }
            .more:hover {
                color: #6c95a6;
            }
            .time {
                color: gray;
                font-size: 14px
            }
            .img {
                width: 30%;
                object-fit: cover;
            }
            @media (max-width: 1000px) {
                .page {
                    width: 90vw;
                }
            }
            @media (max-width: 768px) {
                .article {
                    flex-direction: column
                }
                .article-info {
                    padding: 20px 0;
                }
                .img {
                    width: 100%;
                }
            }
            @media (max-width: 425px) {
                .article-about {
                    flex-direction: column;
                    align-items: flex-end;
                }
            }
          `}</style>
    </div>
    )
})
export default Page