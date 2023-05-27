# Ecommerce

- User and Admin Registration: The ecommerce project includes user and admin registration functionality, allowing users and administrators to create their own accounts with unique credentials.
  _Admin Credentials can be provided on demand_

- User Cart and Stripe Payment: Users have the ability to add items to their cart and proceed to checkout, where they can make secure payments using the Stripe payment gateway, ensuring a smooth and reliable transaction process.

- Separate User and Admin Dashboards: Both users and admins have dedicated dashboards where they can manage their respective activities. Users can view their order history, update personal information, and manage their cart, while admins have access to order management, product/category management, and user management features.

- Order Status Management: After a successful payment, admins have the capability to mark orders as completed or set them in a processing state, enabling efficient order tracking and management.

- Product and Category Management: Admins have full control over the product catalog. They can create, delete, and update categories and products as needed, ensuring the inventory is accurately maintained.

- Product Filters on Homepage: The project includes product filters on the homepage, allowing users to easily navigate and search for specific products based on criteria such as category, price range, or other customizable filters, enhancing the overall user experience.

#### Admin Dashboard Page:

<p>
<img src="/img/ad1.png" alt="Admin Dashboard" width="300" height="200">
<img src="/img/ad2.png" alt="Admin Dashboard" width="300" height="200">
 </p>
 <p>
<img src="/img/ad3.png" alt="Admin Dashboard" width="300" height="200">
<img src="/img/ad4.png" alt="Admin Dashboard" width="300" height="200">
</p>

**This is an ongoing project, it will be tested with Jest, updation is coming soon.**

## Client App is Bootstrapped with

- react
- react-router-dom for page navigation
- axios for api requests
- bootstrap 5 cdn
- react-router-dom 6.8.2
- context api for state management
- MVC patterned folder structure
- custom hook

## Server App is Bootstrapped with

- bycrypt 5.1.0 for password hashing
- cors 2.8.5 for cross origin config
- jsonwebtoken 9.0.0 for authentication
- mongoose 7.0.1
- express 4.18.2
- sendgrid/mail 7.7.0 for password reset
- braintree 3.13.0 for payment

## Getting started

1. You need node installed globally on your local machine

```
$ git clone git@github.com:Afrin127329/full-stack-ecommerce.git
```

#### Server Configuration

1. You need node installed globally on your local machine
2. Add a .env file in the root directory to add these environment variables for checking all of the functionalities of the app:
   - MONGO_URL
   - JWT_SECRET
   - PORT = 8080
   - BRAINTREE_MERCHANT_ID
   - BRAINTREE_PUBLIC_KEY
   - BRAINTREE_PRIVATE_KEY

```
$ npm install
$ npm start
```

#### Client Configuration

- Add a .env file in the client directory to add these environment variables for running the app successfully:
  - REACT_APP_API = http://localhost:8080

```
$ cd client
$ npm install
$ npm start
```

## 🤝 Contributing

At this time, I regret to inform you that contributions are not being accepted. However, I warmly welcome you to submit any issues or feature requests you may have. Your valuable input will be greatly appreciated.

## 😃 Register on [Ecommerce](https://vivacious-rose-rabbit.cyclic.app/) and give it a try. Would love to have a feedback

## Authors

**Afrin Nahar**

- Github: [@Afrin127329](https://github.com/Afrin127329)
- LinkedIn: [Afrin Nahar](https://www.linkedin.com/in/afrin-nahar-b849ba1a9/)
- Twitter: [@AfrinNahar10](https://twitter.com/AfrinNahar10)

### Show your support

- Give a ⭐ if you like this project
