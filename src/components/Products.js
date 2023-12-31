import React, { useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {add} from '../features/cartSlice';
import {fetchProducts} from '../features/productSlice';
import { STATUSES } from '../features/productSlice';


const Products = () => {
   const dispatch = useDispatch();
   const {data: products, status} = useSelector((state)=>state.product);

   // const [products ,setProducts] =useState([]);


   // const fetchProducts = async ()=>{
   //  const res = await fetch('https://fakestoreapi.com/products');
   //  const data = await res.json();
   //  setProducts(data);

   // }


   //eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(()=>{
      dispatch(fetchProducts());
      // fetchProducts();
      

   },[])

   
   const handleAdd = (product) =>{
      dispatch(add(product));
   }
 

   if (status === STATUSES.LOADING) {
      return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
      return <h2>Something went wrong!</h2>;
  }
  return (
    <div className='productsWrapper'>
    {
        products.map((product)=>(
           <div className='card' key={product.id}>
            <img src={product.image} alt='' />
            <h4> {product.title} </h4>
            <h5> {product.price} </h5>
            <button className='btn' onClick={()=>handleAdd(product)} > Add to Cart </button>
           </div>
        ))
    }

    </div>
  )
}

export default Products;