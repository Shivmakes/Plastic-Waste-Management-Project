document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic form submission handling, you can customize this part
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;

        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    });
});
// Function to simulate finding nearby recycling centers
function findRecyclingCenters() {
    const map = document.getElementById("map");
    map.innerHTML = "<h3>Loading nearby recycling centers...</h3>";

    setTimeout(() => {
        map.innerHTML = `
            <ul>
                <li>Green Recycling Center - 1.2 km away</li>
                <li>Eco-Friendly Hub - 2.5 km away</li>
                <li>Plastic Reuse Facility - 3.8 km away</li>
            </ul>
        `;
    }, 2000); // Simulates loading data
}

