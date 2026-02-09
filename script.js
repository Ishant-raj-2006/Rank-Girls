// Student Data
const data = [ {
        rank: 1,
        Roll: "0255CSE022",
        name: "Ikra",
        Point: 16+15,
        linkedin: "https://www.linkedin.com/in/ikra-choudhary-2757713aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Ikraera"
    },
    {
        rank: 1,
        Roll: "0245CYBS019",
        name: "Prince",
        Point: 20,
        linkedin: "https://www.linkedin.com/in/prince-kumar-04b443367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Prince-3103"
    },
    {
        rank: 1,
        Roll: "0255CDS020",
        name: "Nikhil kumar",
        Point: 20,
        linkedin: "https://linkedin.com/in/nikhil-kumar08",
        github: "https://github.com/nikhilkumar609"
    },
    {
        rank: 1,
        Roll: "0245CSE005",
        name: "Shayef Kabir",
        Point: 20,
        linkedin: "http://www.linkedin.com/in/shayef-kabir-b853b0372",
        github: "https://github.com/shayefkabir2005"
    }, 
    {
        rank: 1,
        Roll: "0255CYBS027",
        name: "Bhavishya ",
        Point: 20,
        linkedin: "https://in.linkedin.com/in/bhavishya-rajput-56a225399",
        github: "https://github.com/Deon-Wertz"
    },
    {
        rank: 1,
        Roll: "0255CDS015",
        name: "Muskan Bharti",
        Point: 20,
        linkedin: "https://www.linkedin.com/in/muskan-bharti-b9166a3a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/muskan-0228"
    }, 
    {
        rank: 1,
        Roll: "0255CSE036",
        name: "Priyanka Kumari",
        Point: 20,
        linkedin: "https://www.linkedin.com/in/priyanka-kumari-5354443a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Priyanka-798"
    },
    {
        rank: 1,
        Roll: "0255CSE031",
        name: "Anupam Kumari",
        Point: 20,
        linkedin: "https://www.linkedin.com/in/anupam-kumari-8167aa3a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/anupamguptaji123-droid"
    }, 
   {
        rank: 2,
        Roll: "0255CSE015",
        name: "Uma",
        Point: 19,
        linkedin: "https://www.linkedin.com/in/uma-bharti-2142923a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/uma1529-design"
    },
    
    {
        rank: 4,
        Roll: "0245CSE031",
        name: "Anoop Kumar",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/anup-kumar-642562395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/voexenz0"
    },
    
    {
        rank: 4,
        Roll: "0245CDS043",
        name: "Riya Kumari",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/riya-singh-703142353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/riyasingh41996-ctrl"
    },
   
    {
        rank: 4,
        Roll: "0255CDS025",
        name: "Satyam Kumar",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/satyam-kumar-5b5167384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        github: "https://github.com/satyamkmr18"
    },
   
    {
        rank: 4,
        Roll: "0255CSE001",
        name: "Harsh Gautam",
        Point: 10,
        linkedin: "https://www.linkedin.com/in/harsh-gautam-b340b13a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/harshgautam8"
    },
    
     {
        rank: 5,
        Roll: "0255CSE059",
        name: "Raj Maurya",
        Point: 6,
        linkedin: "https://www.linkedin.com/in/hacker-undefined-08838b385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/hacker44401"
    },
     
    {
        rank: 6,
        Roll: "0255CSE039",
        name: "Antriksh Arya",
        Point: 5,
        linkedin: "",
        github: "https://github.com/antriksharyagrd-a11y"
    },
    {
        rank: 6,
        Roll: "0255BBA068",
        name: "Prema Jaiswal",
        Point: 5,
        linkedin: "https://www.linkedin.com/in/prema-jaiswal-836658296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: ""
    },
     {
        rank: 7,
        Roll: "0255CDS026",
        name: "Nisha Bharti ",
        Point: 4,
        linkedin: "",
        github: "https://github.com/Nisha77-git"
    },
   
    
    {
        rank: 8,
        Roll: "0255CDS035",
        name: "Prachi Kumari",
        Point: 1,
        linkedin: "",
        github: ""
    },
    {
        rank: 8,
        Roll: "0255EEE004",
        name: "Tushar Jaiswal",
        Point: 1,
        linkedin: "",
        github: ""
    },
    {
        rank: 8,
        Roll: "0255CDS020",
        name: "Chikki Kumari",
        Point: 1,
        linkedin: "",
        github: ""
    },
   
];

// Link Validation Helper
function isValidLink(url) {
    return url && url.length > 0;
}

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
                    <td>
                        ${isValidLink(item.linkedin) ? `<a href="${item.linkedin}" target="_blank">LinkedIn</a>` : `<span class="disabled-link">LinkedIn</span>`}
                    </td>
                    <td>
                        ${isValidLink(item.github) ? `<a href="${item.github}" target="_blank">GitHub</a>` : `<span class="disabled-link">GitHub</span>`}
                    </td>
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

    // Initial Render
    renderTable(data);

    // Search Listener
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", searchData);
    }

    // Welcome Screen Interaction
    const enterBtn = document.getElementById("enterBtn");
    const welcomeScreen = document.getElementById("welcome-screen");

    if (enterBtn && welcomeScreen) {
        enterBtn.addEventListener("click", () => {
            // Play Voice
            const speech = new SpeechSynthesisUtterance("Welcome to Ignite Club BugByte");
            window.speechSynthesis.speak(speech);

            // Fade out animation
            welcomeScreen.style.transition = "opacity 0.5s ease";
            welcomeScreen.style.opacity = "0";

            // Remove from DOM after transition
            setTimeout(() => {
                welcomeScreen.remove();
            }, 500);
        });
    }
});
