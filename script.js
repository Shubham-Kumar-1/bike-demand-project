function validateForm() {
    const hour = document.querySelector('input[name="hour"]').value;

    if (hour < 0 || hour > 23) {
        alert("Hour must be between 0 and 23");
        return false;
    }

    return true;
}