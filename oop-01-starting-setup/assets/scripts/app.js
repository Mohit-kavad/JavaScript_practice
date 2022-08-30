class Product {
  title = "default";
  imageUrl;
  descreption;
  price;

  constructor(title, imageUrl, descreption, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.descreption = descreption;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];
  totalOutput;

  addProduct(product){
    this.items.push(product)
    this.totalOutput = `<h2>Total:\$${1}</h2>`
    console.log(this.totalOutput);
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total : \$${0}</h2>
      <button>Order Now!</button>
    `;

    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector('h2')
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    // need of same properties which mention in Product class which connecting with ProductItem
    this.product = product;
  }
  addToCart() {
    console.log("Adding Product to cart");
    console.log(this.product);
  }

  render() {
    const url = this.product.imageUrl;
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";

    /** this. product. imageUrl here this refer ProductItem
      and this. product refers from product which are which 
      are taking argument in constructor (product) function */
    prodEl.innerHTML = `         
    <img src = "${url}">   
          <div>
              <div class = "product-item__content">
                  <h2>${this.product.title}</h2>
                  <h3>$${this.product.price}</h3>
                  <p>${this.product.descreption}</p>
                  <button>Add to cart</button>
              </div>
          </div>
        `;
    const addCartBtn = prodEl.querySelector("button");
    addCartBtn.addEventListener("click", this.addToCart.bind(this));

    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A carpet",
      "https://4.imimg.com/data4/NY/BJ/MY-23905479/img_9382-1000x1000.jpg",
      "A carpet Which You might Like or Not",
      89.99
    ),
    new Product(
      "A Pillow",
      `https://images.unsplash.com/photo-1531877025030-f7696a50770f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
      "A soft pillow",
      19.99
    ),
    new Product(
      "T-shirt",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "white t-short",
      15.99
    ),
  ];

  constructor() {}

  render() {
  
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    
    return prodList
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodlistEl = productList.render();
    renderHook.append(cartEl);
    renderHook.append(prodlistEl)
  }
}

const shop = new Shop();
shop.render();