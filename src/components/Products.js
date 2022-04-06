import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/product/productActions';
import Product from '../components/Product';
import Pagination from '../components/Pagination';

const Products = ({sort, keyword}) => {

    const productReducer = useSelector(state => state.productReducer);
    const {products, error, loading} = productReducer;
    const dispatch = useDispatch();

    const [searchProducts, setSearchProducts] = useState([])
    const [page, setPage] = useState(1);
    
    const productsPerPage = 4;
    const lp = page * productsPerPage;
    const fp = lp - productsPerPage;
    const currentProducts = products.slice(fp, lp);

    useEffect(() =>{
        dispatch(fetchProducts(sort));
    },[dispatch,sort])

    const searchHandler = () =>{
        if(keyword !== ""){
            const newProductList = products.filter((product)=>{
              return Object.values(product).join(" ").toLowerCase().includes(keyword.toLowerCase());
            });
      
            setSearchProducts(newProductList);
        }
    }

    useEffect(() =>{
        if(keyword.length !== 0){
            searchHandler()
        }
    },[keyword])

    if(loading || error){
        return (
            loading ? <h2>Loading...</h2> : <h2>{error}</h2>
        )
    }

    return (
        <div className="pageBody">
            <div className="products">
                {keyword.length !== 0 ? searchProducts.map(product =><Product key={product.id} product={product}/>)
                    :currentProducts.map(product =><Product key={product.id} product={product}/>)}
            </div>
            <div>
                {keyword.length === 0 &&<Pagination totalProducts={products.length} page={page} setPage={setPage} productsPerPage={productsPerPage}/>}
            </div>
        </div>
    )
}

export default Products