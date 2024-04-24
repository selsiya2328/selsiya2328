function messageBtn() {
let fname = document.getElementById('fname');
console.log(fname.value);
let email = document.getElementById('email').value;
console.log(email);
let phone = document.getElementById('phone').value;
console.log(phone);



}

//  Food order Js
// JavaScript for form submission and validation
document.getElementById('order-form1').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;

    // Validate form inputs
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || food.trim() === '' || quantity <= 0) {
        alert('Please fill in all fields and provide a valid quantity.');
        return;
    }

    // Here you can add code to handle form submission, e.g., sending data to a server
    // For now, let's just display the order details in an alert
    const orderDetails = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        food: ${food}
        Quantity: ${quantity}
    `;
    alert('Order Details:\n' + orderDetails);
});