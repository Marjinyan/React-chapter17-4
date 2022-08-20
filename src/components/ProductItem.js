const ProductItem = ({item,text}) => {
    let startIndex = item.indexOf(text)
    let begin = item.substring(0, startIndex)
    let filled = item.substring(startIndex, startIndex+text.length)
    let end = item.substring(startIndex+text.length)
    return <div className="item">
        <h4>
            <span>{begin}</span>
            <span className="highlight">{filled}</span>
            <span>{end}</span>
        </h4>
    </div>
}
export default ProductItem