document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add login validation logic here
    // For simplicity, let's assume login is successful and proceed to registration page
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registrationContainer").style.display = "block";
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value;
    var enrollmentNumber = document.getElementById("enrollmentNumber").value;
    var studentId = document.getElementById("studentId").value;
    var department = document.getElementById("department").value;
    var semester = document.getElementById("semester").value;
    var dob = document.getElementById("dob").value;
    var batchYear = document.getElementById("batchYear").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Display student name and move to payment page
    document.getElementById("studentName").value = fullName;
    document.getElementById("totalAmount").value = "50"; // Assuming fixed amount for registration
    document.getElementById("registrationContainer").style.display = "none";
    document.getElementById("paymentContainer").style.display = "block";
});

document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var transactionId = document.getElementById("transactionId").value;
    // Process payment and complete registration here
    alert("Payment Successful! Registration Completed.");
});