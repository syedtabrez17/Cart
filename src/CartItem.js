import React from 'react';

class CartItem extends React.Component {
    // We can use arrow function as value of this in arrow function return the instance of the class.
    // increaseQuantity = () => {
    //     // this.state.qty += 1
    //     // console.log('this', this)
    //     // console.log('this.state', this.state);
    //     // setState form 1
    //     // this is known as shallow merging 
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // });

    //     // setState form 2
    //     // if prevState required use this state
    //     this.setState((prevState) => {
    //         return {
    //             qty : prevState.qty + 1
    //         }
    //     });
    // }

    // decreaseQuantity = () => {
    //     this.setState((prevState) => {
    //         if (prevState.qty <= 0){
    //             return
    //         }
    //         return {
    //             qty : prevState.qty - 1
    //         }
    //     });
    // }

    render () {
        const {price, title, qty} = this.props.product;
        // console.log(this.props)
        const {product, 
                onIncreaseQuantity, 
                onDecreaseQuantity, 
                onDeleteProduct
            } = this.props;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                            alt='increase' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                            // one way to increase is to Bind this to the increaseQuantity function
                            // onClick={this.increaseQuantity.bind(this)}
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                            onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/3405/3405244.png' 
                            onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;