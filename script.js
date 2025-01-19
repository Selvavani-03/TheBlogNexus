
// Navbar Active Highlight
document.querySelectorAll('.menu a').forEach((menuLink) => {
    menuLink.addEventListener('click', (e) => {
      document.querySelectorAll('.menu a').forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  
  // Search Functionality
  document.querySelector('.search > button:nth-child(2)').addEventListener('click', () => {
    const searchInput = document.querySelector('.searching').value.trim();
    if (searchInput) {
      alert(`Searching for: ${searchInput}`);
    } else {
      alert('Please enter a search term.');
    }
  });
  
  // Note Submission
  document.querySelector('.note button').addEventListener('click', () => {
    const noteContent = document.querySelector('.note textarea').value.trim();
    if (noteContent) {
      alert('Note saved successfully!');
      document.querySelector('.note textarea').value = ''; // Clear the textarea
    } else {
      alert('Please write something in the note.');
    }
  });
  
  // Text Editor Toolbar
  const editor = document.querySelector('#editor');
  document.querySelectorAll('.tool-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const command = button.getAttribute('data-command');
      if (command === 'createlink') {
        const url = prompt('Enter the link: ', 'https://');
        document.execCommand(command, false, url);
      } else {
        document.execCommand(command, false, null);
      }
    });
  });
  
  // Contact Form Validation
  document.querySelector('.contact-form button').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#fname').value.trim();
    const email = document.querySelector('#emailid').value.trim();
    const phone = document.querySelector('#contacts').value.trim();
    const message = document.querySelector('.contact-form textarea').value.trim();
  
    if (!name || !email || !phone || !message) {
      alert('Please fill all the fields.');
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
  
    alert('Your message has been sent successfully!');
    document.querySelector('.contact-form').reset();
  });
  


