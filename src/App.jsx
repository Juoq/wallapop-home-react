import CategoryList from './components/CategoryList'
import HeadingWithSearch from './components/HeadingWithSearch'
import ProductList from './components/ProductList'
import { HomeUI } from './ui/Display'

function App() {
  return (
    <HomeUI>
      <HeadingWithSearch />
      <CategoryList />
      <ProductList title="La tecnología que necesitas" type="technology" />
      <ProductList title="Vuelta a la rutina" type="routine" />
    </HomeUI>
  )
}

export default App
