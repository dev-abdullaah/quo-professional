//***************************Sticky Header and Scroll to Top Button Start***************************

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Handle scroll events
window.onscroll = function () {
    // Show or hide the scroll to top button
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top function
scrollToTopBtn.onclick = function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll smoothly to the top
};
//***************************Sticky Header and Scroll to Top Button End***************************


//***************************Footer Year Start***************************
const currentYear = new Date().getFullYear(); // Get the current year
document.getElementById('year').textContent = currentYear; // Insert the year into the span with id="year"
//***************************Footer Year End***************************


//***************************Modal***************************
// Add event listeners for custom functionality if needed
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('quotation_modal');

    // Close modal when clicking outside of it
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            const bootstrapModal = bootstrap.Modal.getInstance(modal);
            bootstrapModal.hide();
        }
    });
});

function show_hidden_fields(type, val) {
    console.log(val);
    console.log(typeof (val));
    if (type == 1 && val == "LIMITED_COMPANY") {
        document.getElementById('company_no').style.display = 'block';
        document.getElementById('number-partners').style.display = 'none';
    }
    else if (type == 1 && val == "PARTNERSHIP") {
        document.getElementById('number-partners').style.display = 'block';
        document.getElementById('company_no').style.display = 'none';
    }
    else if (type == 1 && val != "LIMITED_COMPANY" || val == "PARTNERSHIP") {
        document.getElementById('company_no').style.display = 'none';
        document.getElementById('number-partners').style.display = 'none';
    }
    else if (type == 2 && val != "NONE") {
        document.getElementById('number-employees').style.display = 'block';
        document.getElementById('pension-enrolement').style.display = 'block';
    }
    else if (type == 2 && val == "NONE") {
        document.getElementById('number-employees').style.display = 'none';
        document.getElementById('pension-enrolement').style.display = 'none';
    }
    else if (type == 3 && val != "NONE") {
        document.getElementById('transactions-per-month').style.display = 'block';
    }
    else if (type == 3 && val == "NONE") {
        document.getElementById('transactions-per-month').style.display = 'none';
    }
}
//***************************Modal***************************


//***************************Range Calculation Starts***************************

function initializeRangeCalculator() {
    const rangeThumb = document.getElementById('range-thumb'),
        rangeNumber = document.getElementById('range-number'),
        rangeLine = document.getElementById('range-line'),
        rangeInput = document.getElementById('range-input');

    const employerMonthlySavingsInput = document.getElementById('employer-monthly-savings');
    const employerAnnualSavingsInput = document.getElementById('employer-annual-savings');
    const employeeMonthlySavingsInput = document.getElementById('employee-monthly-savings');
    const employeeAnnualSavingsInput = document.getElementById('employee-annual-savings');

    if (!rangeInput) return; // If range calculator not on this page, exit

    const rangeInputSlider = () => {
        const rangeValue = rangeInput.value;
        rangeNumber.textContent = '£' + rangeValue;

        const thumbPosition = (rangeValue / rangeInput.max),
            space = rangeInput.offsetWidth - rangeThumb.offsetWidth;

        rangeThumb.style.left = (thumbPosition * space) + 'px';
        rangeLine.style.width = ((rangeValue - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100 + '%';

        // Calculate savings dynamically
        const employerMonthlySavings = ((rangeValue * 13.8) / 100).toFixed(2);
        const employerAnnualSavings = (parseFloat(employerMonthlySavings) * 12).toFixed(2);

        const employeeMonthlySavings = ((rangeValue * 8) / 100).toFixed(2);
        const employeeAnnualSavings = (parseFloat(employeeMonthlySavings) * 12).toFixed(2);

        employerMonthlySavingsInput.value = '£' + employerMonthlySavings;
        employerAnnualSavingsInput.value = '£' + employerAnnualSavings;
        employeeMonthlySavingsInput.value = '£' + employeeMonthlySavings;
        employeeAnnualSavingsInput.value = '£' + employeeAnnualSavings;
    };

    rangeInput.addEventListener('input', rangeInputSlider);
    rangeInputSlider();
}
//***************************Range Calculation Ends***************************

//***************************Mobile Navbar Toggle***************************
document.addEventListener('DOMContentLoaded', function () {
    // Wait for SlickNav to initialize
    setTimeout(function () {
        // Get all navigation links in the mobile menu
        const mobileNavLinks = document.querySelectorAll('.slicknav_nav a');

        // Add click event to each navigation link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                // Find the SlickNav toggle button
                const toggleButton = document.querySelector('.slicknav_btn');
                if (toggleButton) {
                    // Check if the menu is currently open
                    if (!toggleButton.classList.contains('slicknav_hidden')) {
                        // Trigger a click on the toggle button to close the menu
                        toggleButton.click();
                    }
                }
            });
        });

        // Also handle the "Request a Quote" button
        const quoteButton = document.querySelector('.slicknav_nav .btn-default');
        if (quoteButton) {
            quoteButton.addEventListener('click', function () {
                const toggleButton = document.querySelector('.slicknav_btn');
                if (toggleButton && !toggleButton.classList.contains('slicknav_hidden')) {
                    toggleButton.click();
                }
            });
        }
    }, 500); // Give SlickNav time to initialize
});
//***************************Mobile Navbar Toggle***************************
