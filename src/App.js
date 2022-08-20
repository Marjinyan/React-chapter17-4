import { useState, useTransition } from 'react';
import ProductList from './components/ProductList'
import './App.css';

function generateProducts(){
  let temp = []
  for(let i = 0; i < 20000; i++){
    let x = Math.floor(Math.random() * 50000)
    temp.push(x+"product"+i)
  }
  return temp
}

function filterProducts(products,text){
  return products.filter(prod => prod.includes(text))
}

const products = generateProducts()

function App(){
  const [isPending, startTransition] = useTransition()
  const [filterText, setFilterText] = useState("")
  const [fillText, setFillText] = useState("")
  let filteredProducts = filterProducts(products, filterText)

  const handleFilter = event => {
    setFilterText(event.target.value)
    startTransition(() => setFillText(event.target.value))
  }
  return <>
    <input value={filterText} onChange={handleFilter}/>
    {isPending ? <h1>Loading...</h1> : null}
    <ProductList text={fillText} products={filteredProducts}/>
  </>
  }

export default App;
