const bar=document.getElementById('bar');
const nav =document.getElementById('navbar');
if(bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add("active");
    })         
}

if(close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })         
}



// cart
function applyCoupon() {
    const couponCode = document.getElementById("coupon-code").value;
    const subtotal = 80; // Example value
    let discount = 0;
  
    if (couponCode === "SAVE10") {
      discount = 10; // $10 off
    } else if (couponCode === "SAVE20") {
      discount = 20; // $20 off
    } else {
      alert("Invalid coupon code");
      return;
    }
  
    document.getElementById("discount").innerText = discount;
    const total = subtotal - discount;
    document.getElementById("total").innerText = total;
  }

  

//   contact

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate form submission (could be an API call here)
    console.log('Message submitted:', { name, email, message });
  
    // Show success message
    document.getElementById('success-message').classList.remove('hidden');
  
    // Reset the form
    document.getElementById('message-form').reset();
  });
  