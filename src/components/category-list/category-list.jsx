import './category-list.styles.scss'
import CategoryItem from '../category/category-item';


const CategoryList = ({categories}) => {
    return(
        <div className='categories-container'>
            {categories.map(({title,id,imageUrl}) => (
                <CategoryItem key={id} title={title} imageUrl={imageUrl}></CategoryItem>
            ))}
        </div>
    )


}


export default CategoryList;