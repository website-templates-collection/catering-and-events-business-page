    function sadhyaCount() {
      // const input = document.querySelector('input[placeholder="1"]');
      const input = document.querySelector('#sadhyaCount');
      const value = parseInt(input.value) || 1;
      console.log("Onam Sadhya quantity:", value);
      const summarySadhyaCount = document.querySelector('#summarySadhyaCount');
      summarySadhyaCount.textContent = value; // Assuming each order is for 5 people
      // You can add more logic here to update the order summary or total price
    }
    function addToOrderSadhya(element,event) {
      const input = document.querySelector('#sadhyaCount');
      const value = parseInt(input.value) || 1;
      console.log("Added to order: Onam Sadhya quantity:", value);
      const summarySadhyaCount = document.querySelector('#summarySadhyaCount');
      summarySadhyaCount.textContent = value;
      // Here you can implement logic to add the item to the order summary
      if(value < 1) {
        alert("Please enter a valid quantity (1 or more).");
        return;
      }else {
        alert("Added to order: Onam Sadhya quantity: " + value + " people");
        const btnTitle = element.querySelector('.btn-title');
        if(btnTitle) {
          btnTitle.textContent = "Added to Order";
        }
        element.classList.add('selected'); // Add a class to indicate the button has been clicked
      }
    }
    function addToOrderPalada(element,event) {
      const input = document.querySelector('#paladaCount');
      const value = parseInt(input.value) || 1;
      console.log("Added to order: Palada Payasam quantity:", value);
      const summaryPaladaCount = document.querySelector('#summaryPaladaCount');
      summaryPaladaCount.textContent = value + 'Ltrs';
      // Here you can implement logic to add the item to the order summary
      if(value < 1) {
        alert("Please enter a valid quantity (1 or more).");
        return;
      }else {
        alert("Added to order: Palada Payasam quantity: " + value + " Ltrs");
        const btnTitle = element.querySelector('.btn-title');
        if(btnTitle) {
          btnTitle.textContent = "Added to Order";
        }
        element.classList.add('selected'); // Add a class to indicate the button has been clicked
      }
    }
    function addToOrderParipp(element,event) {
      const input = document.querySelector('#parippCount');
      const value = parseInt(input.value) || 1;
      const summaryParippCount = document.querySelector('#summaryParippCount');
      summaryParippCount.textContent = value + 'Ltrs';
      // Here you can implement logic to add the item to the order summary
      if(value < 1) {
        alert("Please enter a valid quantity (1 or more).");
        return;
      }else {
        alert("Added to order: Paripp Payasam quantity: " + value + " Ltrs");
        const btnTitle = element.querySelector('.btn-title');
        if(btnTitle) {
          btnTitle.textContent = "Added to Order";
        }
        element.classList.add('selected'); // Add a class to indicate the button has been clicked
      }
    }
