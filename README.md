# Pharmacy-Management-Application

### Installation Guidlines

#### STEP 1

 ```sh
   git clone https://github.com/payalpatra/Pharmacy-Management-Application.git
   ```

#### STEP 2
###### (Make sure to run this in the root directory and also in the frontend directory) 

 ```sh
   npm install
   ```
   
#### STEP 3
###### ( run this in the frontend directory) 

 ```sh
   npm run build
   ```
   
#### STEP 4
######  [Grab Your Publishable key and Secret key from your stripe dashboard https://dashboard.stripe.com/test/apikeys](https://dashboard.stripe.com/test/apikeys)

#### STEP 5
###### (Replace the existing stripe key with your own Publishable key )
##### Path - (frontend/src/screens/CartScreen)

   ![2021-06-03 (3)](https://user-images.githubusercontent.com/67522406/120692609-a160a900-c4c5-11eb-9737-a1a72f38e4dc.png)



#### STEP 6
###### (Create .env file in the root directory with the following Variables) 

  ```sh
  PORT=5000
  NODE_ENV= production
  SECRET_KEY = 
   ```
   
#### STEP 7
###### (Make sure to run this in the root directory to import products data into Database) 

 ```sh
   npm run data:import
   ```

* ##### Starting the development server
###### (Make sure to run this in the root directory)
```sh
 npm start
   ```
   
## Want To Test Payment Method ??
#### [You can use stripe test cards](https://stripe.com/docs/testing#cards)

* CARD - 4242424242424242
* DATE - Any Future Date
* CVC - Any 3 Digit Number

   
## Snapshots
![Home Screen](https://user-images.githubusercontent.com/67522406/120694041-5f386700-c4c7-11eb-8d49-3c7669f6eee3.png)
![Product Screen](https://user-images.githubusercontent.com/67522406/120694052-619ac100-c4c7-11eb-8db2-21264b479c65.png)
![Specific Product Screen](https://user-images.githubusercontent.com/67522406/120694064-65c6de80-c4c7-11eb-8c33-7ffd7a702a95.png)
![specific product screen 2](https://user-images.githubusercontent.com/67522406/120694073-6790a200-c4c7-11eb-9dae-6232d524b660.png)
![Cart Screen](https://user-images.githubusercontent.com/67522406/120694105-70817380-c4c7-11eb-93cf-45dfbbadde20.png)
![About Us](https://user-images.githubusercontent.com/67522406/120694117-737c6400-c4c7-11eb-8dc2-07a51dd4c62e.png)
![Contact Screen](https://user-images.githubusercontent.com/67522406/120694123-75debe00-c4c7-11eb-85bf-62666fc2564d.png)
![Payment](https://user-images.githubusercontent.com/67522406/120694154-7d9e6280-c4c7-11eb-9e06-2199bf3919f9.png)

### Give this a ✨ if you like it 😊
## Author
### Payal Patra
#### Let's Connect 🚀

<a href="https://linkedin.com/in/payalpatra105" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="payalpatra105" height="30" width="40" /></a>
<a href="https://github.com/payalpatra" target="blank"><img align="center" src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="payalpatra105" height="30" width="40" /></a>
<a href="https://instagram.com/p_iconic_" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="p_iconic_" height="30" width="40" /></a>




   
