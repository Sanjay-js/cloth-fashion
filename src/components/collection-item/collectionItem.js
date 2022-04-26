import { CustomButton } from '../custom-button/customButton'
import {addToCartAction} from '../../actions/addToCartAction'
import {useDispatch,useSelector} from 'react-redux';
import './collectionItem.scss'

export const CollectionItem = ({item})=>{
  
    const {id,name,price,imageUrl} = item
    const dispatch = useDispatch();
    const handdleAddtoCart = (e)=>{
        e.preventDefault();

        dispatch(addToCartAction(item))

            // itemCart.map((items,ind)=>{
            //     return items.id===item.id ?  console.log("matched") :  console.log("not macted")
       
            // });
        
    }

    return(
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage:`url(${imageUrl})`}}
            />
            <div className="collection-footer">
                <span className="name" >{name}</span>
                <span  className="price">{price}</span>
            </div>
            <CustomButton className="custom-button" onClick={handdleAddtoCart}  btnLabelText="Add to Cart"/>

        </div>
    )
}