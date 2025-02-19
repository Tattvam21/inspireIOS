// index-script.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the document to handle clicks
    document.addEventListener('click', function(event) {
        // Check if the clicked element has the class 'event-card'
        if (event.target.closest('.event-card')) {
            // Prevent the default action (e.g., following a link)
            event.preventDefault();
            // Log a message to the console
            console.log('Event card clicked');
        }
    });
});
