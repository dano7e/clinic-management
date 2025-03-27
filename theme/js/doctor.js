// doctor.js

// Function to handle notifications
function showDoctorNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-info';
    notification.innerHTML = `<strong>Notification:</strong> ${message}`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Listen for custom events to display notifications
document.addEventListener('newAppointment', function (event) {
    showDoctorNotification(event.detail.message);
});

document.addEventListener('emergencyCase', function (event) {
    showDoctorNotification(event.detail.message);
});
