// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('predictionForm');
    const submitBtn = form.querySelector('.submit-btn');
    const inputs = form.querySelectorAll('input');

    // Enhanced Input Validation
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.checkValidity()) {
                input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            } else {
                input.style.borderColor = '#ef4444';
            }
        });
    });

    // Form Submission Handling
    form.addEventListener('submit', (e) => {
        // Simple client-side validation check
        const hour = document.getElementById('hour').value;
        if (hour < 0 || hour > 23) {
            alert("Please enter a valid hour (0-23)");
            e.preventDefault();
            return;
        }

        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span>Processing...</span>
            <i data-lucide="loader-2" class="animate-spin"></i>
        `;
        lucide.createIcons(); // Re-initialize for the new icon
        
        // The form will continue to submit naturally (multi-page Flask app)
        // No e.preventDefault() here unless we were doing AJAX
    });

    // Add subtle hover effect logic if needed
    // (Most effects are handled via CSS)
});

// Custom styles for spin animation (if not in CSS)
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .animate-spin {
        animation: spin 1s linear infinite;
    }
`;
document.head.appendChild(style);