import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import numberWithCommas from '../../utils/ConvertNumber'
const ProductCard = props => {
    return (
        <div className='product-card'>
            <Link to={`/catelog/${props.id}`}>
                <div className='product-card__image'>
                    <img src ={props.img} alt="img"/>
                    <img src ={props.img2} alt="img" />
                </div>
                <h3 className="product-card__name">{props.title}</h3>
                <div className="product-card__price">
                        {numberWithCommas(props.price)}
                    <span className='product-card__price__old'>
                        <del>{numberWithCommas(399999)}đ</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                size='sm'
                icon="cart"
                color='#fff'
                animation={false}
                >
                Chọn mua
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.any,
    img: PropTypes.string,
    img2: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
}

export default ProductCard