document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const branch = document.getElementById('branch').value;
        const section = document.getElementById('section').value;
        const year = document.getElementById('year').value;

        // Check if the selected options match the available data
        if (branch === 'CSD' && section === 'B' && year === '2') {
            alert('Form submitted successfully!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Data for the selected options is not available.');
        }
    });
});
