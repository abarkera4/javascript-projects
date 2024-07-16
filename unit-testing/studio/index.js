
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(num) {
        let messages = [
            { condition: num % 2 === 0 && num % 3 !== 0 && num % 5 !== 0, message: 'Launch!' },
            { condition: num % 2 !== 0 && num % 3 === 0 && num % 5 !== 0, message: 'Code!' },
            { condition: num % 2 !== 0 && num % 3 !== 0 && num % 5 === 0, message: 'Rocks!' },
            { condition: num % 2 === 0 && num % 3 === 0 && num % 5 !== 0, message: 'LaunchCode!' },
            { condition: num % 2 !== 0 && num % 3 === 0 && num % 5 === 0, message: 'Code Rocks!' },
            { condition: num % 2 === 0 && num % 3 !== 0 && num % 5 === 0, message: 'Launch Rocks! (CRASH!!!!)' },
            { condition: num % 2 === 0 && num % 3 === 0 && num % 5 === 0, message: 'LaunchCode Rocks!' }
        ];

        for (let item of messages) {
            if (item.condition) {
                return item.message
            }
        }
        return "Rutabagas! That doesn't work."
    }
}

module.exports = launchcode;