function selectProduct(productName) {
  alert(`You selected: ${productName}`);
  document.getElementById('products').classList.add('hidden');
  document.getElementById('payment').classList.remove('hidden');
}

document.getElementById('payment-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  alert(`Thank you, ${name}! Your order will be shipped to ${address}.`);
  document.getElementById('payment').classList.add('hidden');
  document.getElementById('products').classList.remove('hidden');
});
