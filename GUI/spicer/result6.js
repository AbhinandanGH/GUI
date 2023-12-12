function handleButtonClick(value) {
    if (value === 'Not OK') {
      const email = prompt("Enter Email Address:");
      if (email) {
        sendEmail(email);
      } else {
        alert("Please enter an email address to send the notification.");
      }
    } else {
      alert(`User clicked "${value}"`);
    }
  }
  
  function sendEmail(email) {
    // Simulating an AJAX request to a server-side script (e.g., using Node.js or PHP)
    // Here, you'd send a request to the server to handle the email sending process
    // Replace the below section with your actual server-side logic for sending emails
    // Example using fetch to a server endpoint (replace with actual endpoint):
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
    .then(response => {
      if (response.ok) {
        alert('Email notification sent successfully!');
      } else {
        throw new Error('Failed to send email notification.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send email notification. Please try again.');
    });
  }
  