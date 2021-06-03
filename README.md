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
