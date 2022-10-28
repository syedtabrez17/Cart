import React from "react";
import Cart from './Cart'
import NavBar from './Navbar';

class App extends React.Component {
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
      </div>
    );
  }
}

export default App;
