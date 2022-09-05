class Product {
  // title = "default";
  // imageUrl;
  // descreption;
  // price;

  constructor(title, imageUrl, descreption, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.descreption = descreption;
    this.price = price;
  }
}

class ElementAttribute {
  name;
  value;
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  hookId;
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total:\$${this.totalAmount}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, currentItem) => prevValue + currentItem.price,
      0
    );

    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    console.log(updatedItems);
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  orderProducts() {
    console.log("Ordering....");
    console.log(this.items);
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    // const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total : \$${0}</h2>
      <button>Order Now!</button>
    `;
    const orderButton = cartEl.querySelector("button");
    orderButton.addEventListener("click", this.orderProducts.bind(this));
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    // need of same properties which mention in Product class which connected with ProductItem
    this.product = product;
    this.render();
  }

  addToCart() {
    // console.log("Adding Product to cart");
    // console.log(this.product);
    App.addProductToCatrt(this.product);
  }

  render() {
    const url = this.product.imageUrl;
    const prodEl = this.createRootElement("li", "product-item");
    // const prodEl = document.createElement("li");
    // prodEl.className = "product-item";

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
    // return prodEl;
  }
}

class ProductList extends Component {
  products = [];

  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
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
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, "prod-list");
    }
  }

  render() {
    const prodList = this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop {
  constructor() {
    this.render();
  }

  // cart;
  render() {
    this.cart = new ShoppingCart("app");
    const productList = new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCatrt(product) {
    this.cart.addProduct(product);
  }
}

App.init();
