function init() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

            const astronautCount = document.createElement('h2');
            
            const container = document.getElementById('container');
            astronautCount.textContent = `Total Number of Astronauts: ${data.length}`;
            document.body.insertBefore(astronautCount, container);

            data.forEach(astronaut => {
                let activeText = `Active: ${astronaut.active}`;
                if (astronaut.active) {
                    activeText = `<span style="color: green;">Active: ${astronaut.active}</span>`;
                }

                const astronautHTML = `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li>${activeText}</li>
                                <li>Skills: ${astronaut.skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>
                `;
                container.innerHTML += astronautHTML;
            });
        })
}
window.addEventListener('load', init);
