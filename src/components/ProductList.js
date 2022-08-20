import ProductItem from './ProductItem'

const ProductList = ({products, text}) => {
    return <div className="list">
        {
            products.map((elm,i) => <ProductItem text={text} item={elm} key={i} /> )
        }
    </div>
}
export default ProductList