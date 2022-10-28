import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products : [
                {
                    price: 599,
                    title: "Watch",
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 15999,
                    title: "Mobile Phone",
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 299,
                    title:"Charger",
                    qty: 1,
                    img: '',
                    id: 3
                },
                {
                    price: 49999,
                    title: "Laptop",
                    qty: 1,
                    img: '',
                    id: 4
                },
                {
                    price: 899,
                    title: "Earphone",
                    qty: 1,
                    img: '',
                    id: 5
                }
            ]
        }
        // Bind this value to increaseQuantity inside the constructor
        // this.increaseQuantity.bind(this);
    }

    render () {
        const {products} = this.state;
        return (
            <div className='cart'>
            {/* <CartItem /> */}
            {products.map((product) => {
                return (
                <CartItem 
                    product={product} 
                    key={product.id} 
                />
                )
            })}
            </div>
        )
    }
}

export default Cart;