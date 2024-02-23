const _ = require('lodash');


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    

    const storedState = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (storedState) {
      emailInput.value = storedState.email || '';
      messageInput.value = storedState.message || '';
    }
    
    const saveStateThrottled = _.throttle(saveState, 500);
    
    form.addEventListener('input', function () {
      saveStateThrottled();
    });
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const currentState = {
        email: emailInput.value,
        message: messageInput.value
      };
      
      console.log(currentState);
      
      
      emailInput.value = '';
      messageInput.value = '';
      localStorage.removeItem('feedback-form-state');
    });
    
    function saveState() {
      const currentState = {
        email: emailInput.value,
        message: messageInput.value
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
  });
  