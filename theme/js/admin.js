// admin.js

// Function to handle new appointments
function createNewAppointment(patientName, appointmentDate, appointmentTime) {
    // Simulate creating a new appointment
    const message = `New appointment scheduled for ${patientName} on ${appointmentDate} at ${appointmentTime}`;

    // Dispatch custom events to doctor and patient pages
    const newAppointmentEvent = new CustomEvent('newAppointment', {
        detail: { message: message }
    });
    document.dispatchEvent(newAppointmentEvent);

    const patientNotificationEvent = new CustomEvent('patientNotification', {
        detail: { message: message }
    });
    document.dispatchEvent(patientNotificationEvent);

    alert(message);
}

// Function to handle emergency consultation requests
function handleEmergencyConsultation(patientName, emergencyDetails) {
    // Simulate handling an emergency consultation request
    const message = `Emergency consultation requested for ${patientName}: ${emergencyDetails}`;

    // Dispatch custom event to doctor page
    const emergencyCaseEvent = new CustomEvent('emergencyCase', {
        detail: { message: message }
    });
    document.dispatchEvent(emergencyCaseEvent);

    // Notify other patients about the emergency
    alert('This is an emergency case. Please wait patiently.');
}

// Listen for appointment confirmation events
document.addEventListener('confirmAppointment', function (event) {
    createNewAppointment(event.detail.patientName, event.detail.appointmentDate, event.detail.appointmentTime);
});

// Listen for emergency consultation events
document.addEventListener('emergencyConsultation', function (event) {
    handleEmergencyConsultation(event.detail.patientName, event.detail.emergencyDetails);
});
