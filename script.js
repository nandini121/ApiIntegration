function authenticateUser() {
    const loginId = document.getElementById('login_id').value;
    const password = document.getElementById('password').value;
  
    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login_id: loginId,
        password: password,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Authentication failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Assuming the API returns a token in the response
      const bearerToken = data.token;
      
      // Save the token or use it for further API calls
      // You can also redirect the user to another page or perform additional actions
      alert(`Authentication successful!\nBearer Token: ${bearerToken}`);
    })
    .catch(error => {
      // Handle errors, e.g., display an error message to the user
      alert(`Authentication failed:\n${error.message}`);
    });
  }
  
