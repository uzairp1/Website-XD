
    // Initialize AOS library
    document.addEventListener("DOMContentLoaded", function () {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
        })
    });


    const btnBanking = document.getElementById('btn-banking');
    const btnAccelerators = document.getElementById('btn-accelerators');
    const bankingSolutions = document.getElementById('banking-solutions');
    const digitalAccelerators = document.getElementById('digital-accelerators');

    btnBanking.addEventListener('click', () => {
        bankingSolutions.style.display = 'flex';
        digitalAccelerators.style.display = 'none';
        btnBanking.classList.remove('inactive');
        btnAccelerators.classList.add('inactive');
    });

    btnAccelerators.addEventListener('click', () => {
        bankingSolutions.style.display = 'none';
        digitalAccelerators.style.display = 'flex';
        btnAccelerators.classList.remove('inactive');
        btnBanking.classList.add('inactive');
    });

    
