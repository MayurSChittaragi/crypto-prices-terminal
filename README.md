### crypto-prices-terminal

# Project Based on NodeJS along with API integration

This is a NodeJs Application which is made to interact through terminal which helps you in getting the latest prices of any crypto-currency.

## It is name as ***```coindex```*** in the terminal.

Coindex uses coinlayer API to fetch the prices.
Coindex requires you to go the the website and get your own API Key which is available for ***FREE!!!***

Coindex also allows you to change the currency for your reference. As it will be furthur explained below.

## NPM Modules used are :
   1. Axios
   2. Inquiry
   3. Commander
   4. Colors
   5. Configstore


## How to Install this program.

- Do  ```npm i``` in the root folder of the project.
- Do  ```npm link``` to add coindex into your global node_modules
- Your Coindex is all set!

## How to Use

- Coindex has two sets of commands.
1. key: -

      There are three operations on API_KEY, 
      * set
      * show
      * remove

2. check

      Check has only one operation defined, that is ```price```. Thus, this checks the price of any crypto coins given.

      This has two options

      * ```--coin``` ```<name_of_coins>```
      
         This is used to specify which coins details are to be fetched. The default value is BTC, ETH, XRP

      * ```---cur <type_of_currency>``` 
         
         This is used to specify the currency in which the current worth of each of these crypto coins are to be displayed.



