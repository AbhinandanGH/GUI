# First Piece Inspection GUI System

## Overview

This GUI system is designed to facilitate the first piece inspection process in the standard room. It utilizes HTML, CSS, and JavaScript for the user interface, Excel sheets for data storage, and the SMTP protocol to send alert messages to the team leader.

## Features

- User-friendly GUI for entering inspection data.
- Excel sheets used as a data storage backend.
- Integration with the SMTP protocol for alert messages.
- Efficient tracking of first piece inspection results.

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, etc.).
- Excel software for data management.
- Internet connectivity for SMTP email alerts.

## Installation and Setup

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/first-piece-inspection.git
    ```

2. Open the `index.html` file in a web browser to access the GUI.

3. Ensure that Excel is installed and configured for data storage.

4. Set up SMTP configuration for email alerts in the `smtp-config.js` file.

## Usage

1. Open the `Register.html` file in a web browser.
2. Fill in the required information for first piece inspection.
3. Submit the form to store data in the Excel sheets.
4. Click on the NEXT Button to import the ecxel file and check weather the part is OK or NO
5. Email alerts will be sent to the team leader using the configured SMTP server if part is NOT-OK.

## Configuration

### SMTP Configuration

Edit the `Mail.html` file to include your SMTP server details:
configure the SMTP and add your ServiceID and TemplateID.

```javascript
<script>
   function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "serviceID";
  const templateID = "templateID";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

    
}

  </script>

