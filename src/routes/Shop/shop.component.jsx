import ProductCard from '../../components/product-card/product-card.component';
import { Productscontext } from '../../context/product.context';
import { useContext } from 'react';
import './shop.styles.scss'
const Shop=()=>{

    const {product} = useContext(Productscontext);

    return(
        <div className='product-container'>
            {product.map((prod)=>(
                <ProductCard id={prod.id} product={prod}></ProductCard>
            ))}
        </div>
    )
}


export default Shop;