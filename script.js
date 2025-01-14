
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartTotal();
    showNotification(name);
    localStorage.setItem('cart', JSON.stringify(cart)); 
}


function updateCartTotal() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').innerText = totalItems; 
}


let currentNotification = null;

function showNotification(itemName) {
    if (currentNotification) {
        currentNotification.remove(); 
    }

    currentNotification = document.createElement('div');
    currentNotification.className = 'notification';
    currentNotification.innerText = `${itemName} has been added to your cart!`;
    document.body.appendChild(currentNotification);
    
    setTimeout(() => {
        currentNotification.remove();
        currentNotification = null; 
    }, 2000);
}

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(name, price);
    });
});
   
    function displayCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        const totalPriceContainer = document.getElementById('total-price');
        let totalPrice = 0;
       
        cartItemsContainer.innerHTML = '';

        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            const subtotal = item.price * item.quantity;
            totalPrice += subtotal;

            row.innerHTML = `
                <td><img src="images/${item.name.toLowerCase().replace(/ /g, '')}.jpg" alt="${item.name}" width="70"></td>
                <td>${item.name}</td>
                <td>RM ${item.price}</td>
                <td>
                     <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </td>
                <td>RM ${subtotal.toFixed(2)}</td>
                <td><button class="remove-button" onclick="removeItem(${index})">x</button></td>
            `;
            cartItemsContainer.appendChild(row);
        });

      
        totalPriceContainer.innerText = totalPrice.toFixed(2);
    }

  
    function updateQuantity(index, change) {
        if (change === 1) {
            cart[index].quantity += 1; 
        } else if (change === -1 && cart[index].quantity > 1) {
            cart[index].quantity -= 1; 
        }
        localStorage.setItem('cart', JSON.stringify(cart)); 
        displayCartItems(); 
    }

    
    function removeItem(index) {
        cart.splice(index, 1); 
        localStorage.setItem('cart', JSON.stringify(cart)); 
        displayCartItems(); 
    }
    

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before checking out.");
    } else { 
        alert("Proceeding to checkout...");
    }
}
   
document.addEventListener('DOMContentLoaded', () => {
    updateCartTotal(); 
    displayCartItems(); 
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }

 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you for your feedback!");
    return true; 
}

let modalProductName = '';
let modalProductPrice = 0;


function openModal(name, price, description, image) {
    modalProductName = name;
    modalProductPrice = price;

    document.getElementById('modal-product-name').innerText = name;
    document.getElementById('modal-product-price').innerText = `RM ${price.toFixed(2)}`;
    document.getElementById('modal-product-description').innerText = description;
    document.getElementById('modal-product-image').src = image;

    document.getElementById('product-modal').style.display = 'block';
}


function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        closeModal(); 
    }
}

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
