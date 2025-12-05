function calculateArea() {
    // Get the radius from the user
    let radius = prompt("Enter the radius of the circle:");

    // Convert radius to a number
    radius = Number(radius);

    // Check for invalid input
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number!");
        return;
    }

    // Calculate area
    let ans = 3.14 * radius * radius;

    // Display result to the user
    alert("The area of the circle is: " + ans);

    return ans;
}

calculateArea();
