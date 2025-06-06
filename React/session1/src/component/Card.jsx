export const Card = ({title,content,isTrending}) => {
    const blogStyle = {
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        backgroundColor: isTrending ? "green" : "yellow"
    }
    return (
        <>
        <div style={blogStyle}> 
            <h2>{title}</h2>
            <h3>{content}</h3>
        </div>
        </>
    )
}