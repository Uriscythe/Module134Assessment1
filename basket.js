//stored externally to apply for whole program

//Creates a variable that uses local storage to see current orders.
        let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || {};
        //Allows quantites to be increases but not decreased at cart
        function addToShoppingCart(laptopName, laptopPrice) {
            if (shoppingCart[laptopName]) {
                shoppingCart[laptopName].quantity += 1;
                shoppingCart[laptopName].totalPrice += laptopPrice;
            } else {
                shoppingCart[laptopName] = {
                    quantity: 1,
                    totalPrice: laptopPrice
                };
            }
            //Sets new value for basket
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
            updateShoppingCartDisplay();
        }
        // This function updates the basket menu based on current values of order
        function updateShoppingCartDisplay() {
            const shoppingCartList = document.getElementById("shoppingCart");
            shoppingCartList.innerHTML = '';
            // Creates the variable that stores grand total cannot be a constant as the value changes
            let totalShoppingCart = 0;
            //laptop refer to any given product
            for (let laptop in shoppingCart) {
                const shoppingCartListItem = document.createElement('li');
                //Uses HTML to display the total amount ordered and the total cost for any given product
                shoppingCartListItem.innerText = `${laptop} - Quantity: ${shoppingCart[laptop].quantity} - Total Price: £${shoppingCart[laptop].totalPrice.toFixed(2)}`;
                shoppingCartList.appendChild(shoppingCartListItem);
                //adds shoopping cart values together and incremtns this to current total price
                totalShoppingCart += shoppingCart[laptop].totalPrice;
            }
            //This does the same for total shopping cart and displays it in HTML
            document.getElementById("totalShoppingCart").innerText = `Buy Now :£${totalShoppingCart.toFixed(2)}`;
        }
      
      updateShoppingCartDisplay();