import React from "react";
import Cart from './Cart'
import NavBar from './Navbar';

class App extends React.Component {
    constructor () {
      super();
      this.state = {
          products : [
              {
                  price: 14999,
                  title: "Watch",
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                  id: 1
              },
              {
                  price: 65999,
                  title: "Mobile Phone",
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
                  id: 2
              },
              {
                  price: 1299,
                  title:"Charger",
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1603539550859-3a559eb00687?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                  id: 3
              },
              {
                  price: 49999,
                  title: "Laptop",
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
                  id: 4
              },
              {
                  price: 1599,
                  title: "Earphone",
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1632200004922-bc18602c79fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                  id: 5
              }
          ]
      }
      // Bind this value to increaseQuantity inside the constructor
      // this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (product) => {
      // console.log(product);
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1

      this.setState({
          products: products
      })
  }
  handleDecreaseQuantity = (product) => {
      // console.log(product);
      const {products} = this.state;
      const index = products.indexOf(product);
      
      if(products[index].qty <= 0){
          return
      }
      
      products[index].qty -= 1


      this.setState({
          products: products
      })
  }

  handleDeleteProduct = (id) => {
      const {products} = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products: items
      })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0

    products.forEach((product) => {
      count += product.qty
    });

    return count
  }

  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;

    // eslint-disable-next-line array-callback-return
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  }

  render () {
    const {products} = this.state
    return (
      <div className="App">
        <NavBar 
          count = {this.getCartCount()}
        />
        <Cart 
          products={products} 
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity} 
          onDeleteProduct={this.handleDeleteProduct} 
          />
          <div style={ {fontSize: 20, padding: 10} }>
            Total : {this.getCartTotal()}
          </div>
      </div>
    );
  }
}

export default App;
