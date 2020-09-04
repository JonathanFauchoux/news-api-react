import React from 'react'

export default function ListNews (props){
  const dataNews = props.dataNews
  return(
    <div className="ListNews">
      <div className="articlesBoard">
        {dataNews.map( (d, i) => (
          <a className="articles" key={i} target="_blank" href={d.url} rel="noopener noreferrer">
            <img  src={(d.urlToImage)? d.urlToImage : "https://get.wallhere.com/photo/illustration-simple-background-minimalism-artwork-text-logo-circle-JavaScript-brand-reactJS-Facebook-symbol-computer-wallpaper-font-11095.png"} alt="images articles" />
            <div className="articles_content">
              <p className="source">{d.source.name}</p>
              <h5>{d.title}</h5>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}