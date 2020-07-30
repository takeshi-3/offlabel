const Post = ({title, date, thumbnail, content}) => {
    return (
        <div className="container">
            <p>{date}</p> 
            <img src={thumbnail.url} />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Post;