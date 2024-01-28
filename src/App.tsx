import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from './redux/productsSlice'
import { AppDispatch, RootState } from './redux/store'
import ProductItem from './components/product/product'

function App() {
  const dispatch: AppDispatch = useDispatch()
  const products = useSelector((state: RootState) => state.products.products)
  const status = useSelector((state: RootState) => state.products.status)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllProducts())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading data</div>;
  }

  return (
    <div className='wrapper'>
      <h1>Products</h1>
      <ul className='products'>
        {products.map((product) => (
          <ProductItem {...product} key={product.productId} />
        ))}
      </ul>
    </div>
  )
}

export default App
