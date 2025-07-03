const options = [ { price: '$10.00 USD' }, { price: '$18.00 USD' }, { price: '$24.00 USD' } ];
    document.addEventListener('DOMContentLoaded', function() {
      const pricingOptions = document.querySelectorAll('.pricing-option');
      const radioInputs = document.querySelectorAll('.radio-input');
      const totalPrice = document.getElementById('totalPrice');
      function updateSelection(selectedIndex) {
        pricingOptions.forEach((option, index) => {
          const formControls = option.querySelector('.form-controls');
          const isSelected = index === selectedIndex;
          option.classList.toggle('selected', isSelected);
          if (formControls) formControls.style.display = isSelected ? 'flex' : 'none';
        });
        radioInputs.forEach((radio, index) => { radio.checked = index === selectedIndex; });
        totalPrice.textContent = `Total : ${options[selectedIndex].price}`;
      }
      pricingOptions.forEach((option, index) => option.addEventListener('click', () => updateSelection(index)));
      radioInputs.forEach((radio, index) => radio.addEventListener('change', () => updateSelection(index)));
      updateSelection(1);
    });
