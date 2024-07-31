function displayAppointments() {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    let tableBody = document.getElementById('appointments-list');
    tableBody.innerHTML = ''.
  
    appointments.forEach((appointment,index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${appointment.studentName}</td>
        <td>${appointment.teacherName}</td>
        <td>${appointment.appointmentDate}</td>
        <td>${appointment.appointmentTime}</td
        <td>${appointment.status}</td>
        <td>
            <button onclick="approveAppointment(${index})">Approve</button>
            <button onclick="deleteAppointment(${index})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
}
  function approveAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments[index].status = 'Approved';
    localStorage.setItem('appointments',JSON.stringify(appointments));
    displayAppointments();
  }
  function deleteAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.splice(index, 1);
    localStorage.setItem('appointments',JSON.stringify(appointments));
    displayAppointments();
  }


  // displayAppointments();
  
       