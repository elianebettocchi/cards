
// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners and handlers for both buttons
    document.getElementById('roll').addEventListener('click', function () {
        // Determine dice roll using Math.random()
        let rolledValue = Math.floor(Math.random() * 49)

        // Display the result of the roll
        //document.getElementById('message').textContent = `${rolledValue}`

        // Show different images for each dice roll
        document.getElementById('cards').src = `./cards/${rolledValue}.png`

    })

    addEventListener('click', function () {
        // Reset the rolls values to zeroes
        allRolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        // Update the scoreboard
        //updateScoreboard()
    })
})