const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'get',
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  