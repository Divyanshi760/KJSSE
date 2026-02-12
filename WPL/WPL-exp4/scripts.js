let calculatedTotal = 0;
// Task 2: Display Book Details
function displayBookDetails() {
    let title = document.getElementById('inputTitle').value;
    let price = document.getElementById('inputPrice').value;
    document.getElementById('bookTitle').textContent = title;
    document.getElementById('bookPrice').textContent = price;
    document.getElementById('bookDetailsOutput').style.display = 'block';
}
// Task 3: Calculate Total Price
function calculateTotal() {
    let price = document.getElementById('inputUnitPrice').value;
    let quantity = document.getElementById('inputQuantity').value;
    let total = price * quantity;
    calculatedTotal = total;
    document.getElementById('unitPrice').textContent = price;
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('totalPrice').textContent = total;
    document.getElementById('totalOutput').style.display = 'block';
}
// Task 4: Apply Discount
function applyDiscount() {
    let totalAmount = calculatedTotal;
    let finalPrice;
    let discountMessage;
    
    if (totalAmount > 1000) {
        finalPrice = totalAmount - (totalAmount * 0.10);
        discountMessage = "10% discount applied";
    } else {
        finalPrice = totalAmount;
        discountMessage = "No discount";
    }
    document.getElementById('totalAmount').textContent = totalAmount;
    document.getElementById('discountInfo').textContent = discountMessage;
    document.getElementById('finalPrice').textContent = finalPrice;
    document.getElementById('discountOutput').style.display = 'block';
}
// Task 5: Category Selection
function navigateCategory() {
    let category = document.getElementById('categorySelect').value;
    let categoryDisplay;
    switch(category) {
        case "programming":
            categoryDisplay = "Programming Books";
            break;
        case "novel":
            categoryDisplay = "Novel Section";
            break;
        case "kids":
            categoryDisplay = "Kids Section";
            break;
    }
    document.getElementById('selectedCategory').textContent = category;
    document.getElementById('categoryMessage').textContent = categoryDisplay;
    document.getElementById('categoryOutput').style.display = 'block';
}
// Task 6
let books = ["HTML", "CSS", "JavaScript", "Python"];
function addBook() {
    let newBook = document.getElementById('newBookInput').value;
    books.push(newBook);
    document.getElementById('newBookInput').value = '';
    displayBooks();
}
function displayBooks() {
    let bookListUl = document.getElementById('bookListUl');
    bookListUl.innerHTML = ''; 
    for (let i = 0; i < books.length; i++) {
        let li = document.createElement('li');
        li.textContent = books[i];
        bookListUl.appendChild(li);
    }
}
window.onload = function() {
    displayBooks();
};

// Task 7
let cart = [];

function addToCart() {
    let bookName = document.getElementById('cartBookInput').value;
    if (bookName.trim() !== '') {
        cart.push(bookName);
        document.getElementById('cartBookInput').value = '';
        displayCart();
    }
}

function displayCart() {
    let cartListUl = document.getElementById('cartListUl');
    cartListUl.innerHTML = '';
    
    if (cart.length === 0) {
        let li = document.createElement('li');
        li.textContent = 'Cart is empty';
        li.style.fontStyle = 'italic';
        li.style.color = '#666';
        cartListUl.appendChild(li);
    } else {
        for (let i = 0; i < cart.length; i++) {
            let li = document.createElement('li');
            li.textContent = cart[i];
            cartListUl.appendChild(li);
        }
    }
    
    document.getElementById('cartDisplay').style.display = 'block';
}

// Task 8
function countCartItems() {
    let itemCount = cart.length;
    document.getElementById('cartCount').textContent = itemCount;
    document.getElementById('cartCountOutput').style.display = 'block';
}

// Task 9
function searchBook() {
    let searchTerm = document.getElementById('searchBookInput').value;
    let found = false;
    
    for (let i = 0; i < books.length; i++) {
        if (books[i].toLowerCase() === searchTerm.toLowerCase()) {
            found = true;
            break;
        }
    }
    
    if (found) {
        document.getElementById('searchResult').textContent = "✓ Book Available";
    } else {
        document.getElementById('searchResult').textContent = "✗ Out of Stock";
    }
    
    document.getElementById('searchResultOutput').style.display = 'block';
}

// Task 10
function calculateCheckoutTotal() {
    let cartPrices = [450, 300, 250];
    let total = 0;
    
    for (let i = 0; i < cartPrices.length; i++) {
        total += cartPrices[i];
    }
    
    document.getElementById('cartItems').textContent = cartPrices.join(', ₹');
    document.getElementById('totalBill').textContent = total;
    document.getElementById('checkoutOutput').style.display = 'block';
}
