const options = [{ price: '$10.00 USD' }, { price: '$18.00 USD' }, { price: '$24.00 USD' }];
document.addEventListener('DOMContentLoaded', function () {
    const pricingOptions = document.querySelectorAll('.pricing-option');
    const radioInputs = document.querySelectorAll('.radio-input');
    const totalPrice = document.getElementById('totalPrice');
    const formControls = document.querySelector('.form-controls');
    function updateSelection(index) {
        pricingOptions.forEach((o, i) => o.classList.toggle('selected', i === index));
        radioInputs.forEach((r, i) => r.checked = i === index);
        totalPrice.textContent = `Total : ${options[index].price}`;
        formControls.style.display = index === 1 ? 'flex' : 'none';
    }
    pricingOptions.forEach((o, i) => o.addEventListener('click', () => updateSelection(i)));
    radioInputs.forEach((r, i) => r.addEventListener('change', () => updateSelection(i)));
    updateSelection(1);
});