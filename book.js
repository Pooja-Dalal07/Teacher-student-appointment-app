document.getElementById('appointment-form').addEventListener('submit',function(event) {
    event.preventDefault();
    const studentName = document.getElementById('student-name').value;
    const teacherName = document.getElementById('teacher-name').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;


    const appointment = {
        studentName,
        teacherName,
        appointmentDate,
        appointmentTime

    };


    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointments);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    document.getElementById('appointment-form').reset();
    alert('appointment booked successfully ');
});
   

document.getElementById('book-appointment-button').addEventListener('click', async () => {
    const email = document.getElementById('appointment-email').value;
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
    const teacherName = document.getElementById('teacher-name').value;
    const studentName = document.getElementById('student-name').value;

    try{
        await db.collection('appointments').add({
            email: email,
            appointmentDate: date,
            appointmentTime: time,
            teacherName: teacherName,
            studentName: studentName,
            status:'pending'
        });

        document.getElementById('booking-message').innerText = 'Appointment booked successfully';
    }catch(error) {
        console.error('Error booking appointment:',error);

        document.getElementById('booking-message').innerText = 'Error:${error.message}';
    }
    });

    function sendEmail() {
        const userEmail = document.getElementById('emailInput').value;

        fetch('/send-email',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:userEmail}),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:',error);
        });
    }


