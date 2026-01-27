// Student Data
const data = [
    {
        rank: 1,
        Roll: "0245CSE031",
        name: "Anupam Kumari",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/anupam-kumari-8167aa3a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/anupamguptaji123-droid"
    },
    {
        rank: 1,
        Roll: "0245CDS043",
        name: "Riya Kumari",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/riya-singh-703142353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/riyasingh41996-ctrl"
    }
];

// Render Table
function renderTable(list) {
    const table = document.getElementById("dataTable");
    table.innerHTML = `
        <thead>
            <tr>
                <th>Rank</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>Point</th>
                <th>LinkedIn</th>
                <th>GitHub</th>
            </tr>
        </thead>
        <tbody>
            ${list.map(item => `
                <tr>
                    <td>${item.rank}</td>
                    <td>${item.Roll}</td>
                    <td>${item.name}</td>
                    <td>${item.Point}</td>
                    <td><a href="${item.linkedin}" target="_blank">LinkedIn</a></td>
                    <td><a href="${item.github}" target="_blank">GitHub</a></td>
                </tr>
            `).join("")}
        </tbody>
    `;
}

// Search Function
function searchData() {
    const value = document.getElementById("searchInput").value.toLowerCase();
    const filtered = data.filter(item =>
        item.Roll.toLowerCase().includes(value)
    );
    renderTable(filtered);
}

document.addEventListener("DOMContentLoaded", () => {

    renderTable(data);

    document.getElementById("searchInput")
        .addEventListener("input", searchData);

    // Welcome Voice
    const speech = new SpeechSynthesisUtterance(
        "Welcome to Ignite Club BOYS BugByte"
    );
    window.speechSynthesis.speak(speech);

    // Remove Welcome Screen
    setTimeout(() => {
        const welcome = document.getElementById("welcome-screen");
        if (welcome) {
            welcome.remove();
        }
    }, 1000);
});
