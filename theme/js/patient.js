// patient.js

// Function to handle notifications
function showPatientNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success';
    notification.innerHTML = `<strong>Notification:</strong> ${message}`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Listen for custom events to display notifications
document.addEventListener('patientNotification', function (event) {
    showPatientNotification(event.detail.message);
});
