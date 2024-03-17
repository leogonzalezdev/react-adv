import ProductCard from "../components"

const product = {
  id: '1',
  title: 'Card name'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {/* <ProductCard product={product} >
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons/>
        </ProductCard> */}
        {/* <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title title='cafe' />
          <ProductCard.Buttons />
        </ProductCard> */}

        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title title='hola mundo'/>
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage