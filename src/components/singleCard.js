const SingleCard = ({blog, deleteHandle}) => {
    return ( 
        <div class="card" style={{width: '18rem',height: '36rem'}}>
                    <img src={blog.src} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{blog.title}</h5>
                        <p class="card-text">{blog.author}</p>
                        <a href="#" class="btn btn-danger" onClick={() => deleteHandle(blog.id)}>Delete Book</a>
                    </div>
                </div> 
     );
}
 
export default SingleCard;