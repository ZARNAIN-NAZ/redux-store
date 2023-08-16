import React from 'react' //rafce
import Products from '../components/Products'
const Home = () => {
  return (
    <div>
        <h2 className='heading'>
Welcome to redux toolkit store
        </h2>
        <section>
           <h3>Products</h3> 
           <Products/>
        </section>
    </div>
  )
}

export default Home