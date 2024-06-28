function NewsItem({title, description, src, url}) {
 
  return (
   <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxwidth:"345px"}}>
   <img src={src} style ={{height :"100px",width:"100px"}}className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">{title.slice(0,50)}</h5>
     <p className="card-text">{description?description.slice(0,90):"News description"}</p>
     <a href={url} className="btn btn-primary">Read More</a>
   </div>
  </div>
  )
}

export default NewsItem