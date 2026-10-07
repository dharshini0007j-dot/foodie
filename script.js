/* =========================================================
   NPRCET STUDENT HUB
   script.js
   ========================================================= */


/* =========================================================
   1. SAMPLE WEBSITE DATA
   ========================================================= */

/* ---------- ANNOUNCEMENTS ---------- */

const announcements = [
    {
        title: "Internal Assessment Examination",
        description:
            "Students are requested to check the examination schedule and prepare accordingly.",
        date: "07 Oct 2026",
        type: "Academic"
    },
    {
        title: "Internship Registration Open",
        description:
            "Students interested in internships can register through the Training and Placement Cell.",
        date: "06 Oct 2026",
        type: "Internship"
    },
    {
        title: "Department Technical Workshop",
        description:
            "A technical workshop on emerging technologies will be conducted for engineering students.",
        date: "05 Oct 2026",
        type: "Workshop"
    },
    {
        title: "Student Achievement Update",
        description:
            "Congratulations to our students for participating in various technical competitions.",
        date: "03 Oct 2026",
        type: "Achievement"
    },
    {
        title: "Library Resource Update",
        description:
            "New reference materials and learning resources are now available in the library.",
        date: "01 Oct 2026",
        type: "General"
    },
    {
        title: "Placement Preparation Session",
        description:
            "A placement preparation session covering aptitude and technical interview skills will be conducted.",
        date: "28 Sep 2026",
        type: "Placement"
    }
];


/* ---------- STUDY MATERIALS ---------- */

const studyMaterials = [

    /* EEE */

    {
        department: "EEE",
        subject: "Electrical Machines",
        semester: "Semester 5",
        type: "Notes"
    },

    {
        department: "EEE",
        subject: "Power Systems",
        semester: "Semester 5",
        type: "Notes"
    },

    {
        department: "EEE",
        subject: "Control Systems",
        semester: "Semester 5",
        type: "Question Bank"
    },

    {
        department: "EEE",
        subject: "Power Electronics",
        semester: "Semester 5",
        type: "Study Material"
    },

    {
        department: "EEE",
        subject: "Digital Electronics",
        semester: "Semester 3",
        type: "Notes"
    },

    {
        department: "EEE",
        subject: "Measurements and Instrumentation",
        semester: "Semester 5",
        type: "Notes"
    },

    {
        department: "EEE",
        subject: "Microcontrollers",
        semester: "Semester 6",
        type: "Study Material"
    },

    {
        department: "EEE",
        subject: "Renewable Energy Systems",
        semester: "Semester 6",
        type: "Notes"
    },

    /* CSE */

    {
        department: "CSE",
        subject: "Data Structures",
        semester: "Semester 3",
        type: "Notes"
    },

    {
        department: "CSE",
        subject: "Database Management Systems",
        semester: "Semester 4",
        type: "Question Bank"
    },

    {
        department: "CSE",
        subject: "Computer Networks",
        semester: "Semester 5",
        type: "Study Material"
    },

    /* ECE */

    {
        department: "ECE",
        subject: "Digital Signal Processing",
        semester: "Semester 5",
        type: "Notes"
    },

    {
        department: "ECE",
        subject: "Communication Systems",
        semester: "Semester 5",
        type: "Study Material"
    },

    /* Mechanical */

    {
        department: "Mechanical",
        subject: "Thermodynamics",
        semester: "Semester 3",
        type: "Notes"
    },

    {
        department: "Mechanical",
        subject: "Manufacturing Technology",
        semester: "Semester 5",
        type: "Question Bank"
    },

    /* Civil */

    {
        department: "Civil",
        subject: "Structural Analysis",
        semester: "Semester 5",
        type: "Notes"
    },

    {
        department: "Civil",
        subject: "Environmental Engineering",
        semester: "Semester 5",
        type: "Study Material"
    },

    /* General */

    {
        department: "General",
        subject: "Engineering Mathematics",
        semester: "Common",
        type: "Notes"
    },

    {
        department: "General",
        subject: "Engineering Physics",
        semester: "Common",
        type: "Notes"
    }
];


/* ---------- EVENTS ---------- */

const events = [
    {
        day: "12",
        month: "OCT",
        title: "Technical Symposium",
        venue: "NPRCET Campus",
        description:
            "Students can participate in technical events, paper presentations and project demonstrations."
    },

    {
        day: "18",
        month: "OCT",
        title: "Project Expo",
        venue: "Innovation Hall",
        description:
            "Showcase innovative engineering projects and ideas to faculty members and students."
    },

    {
        day: "25",
        month: "OCT",
        title: "Career Development Session",
        venue: "Seminar Hall",
        description:
            "Learn about career opportunities, resume preparation and interview skills."
    },

    {
        day: "02",
        month: "NOV",
        title: "Coding & Technology Workshop",
        venue: "Computer Lab",
        description:
            "Hands-on workshop covering modern programming and technology concepts."
    },

    {
        day: "10",
        month: "NOV",
        title: "Innovation Challenge",
        venue: "Innovation Centre",
        description:
            "Students can present creative solutions for real-world engineering problems."
    },

    {
        day: "20",
        month: "NOV",
        title: "Sports Meet",
        venue: "College Ground",
        description:
            "Annual sports activities for students across departments."
    }
];


/* ---------- ACHIEVEMENTS ---------- */

const achievements = [
    {
        student: "Student Achievement",
        department: "EEE",
        achievement: "Hackathon Winner",
        year: "2026"
    },

    {
        student: "Engineering Team",
        department: "CSE",
        achievement: "Symposium Winner",
        year: "2026"
    },

    {
        student: "Student Participant",
        department: "ECE",
        achievement: "Certification",
        year: "2026"
    },

    {
        student: "Innovation Team",
        department: "EEE",
        achievement: "Innovation Project",
        year: "2026"
    },

    {
        student: "Student Presenter",
        department: "Mechanical",
        achievement: "Paper Presentation",
        year: "2026"
    },

    {
        student: "College Sports Team",
        department: "General",
        achievement: "Sports Achievement",
        year: "2026"
    }
];


/* =========================================================
   2. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeAnnouncements();
    initializeMaterials();
    initializeEvents();
    initializeAchievements();

    initializeMobileMenu();
    initializeTheme();
    initializeSearch();

    initializeAttendance();

    initializeBackToTop();

    initializeSmoothNavigation();

    updateCopyrightYear();
});


/* =========================================================
   3. ANNOUNCEMENTS
========================================================= */

function initializeAnnouncements() {

    const container =
        document.getElementById("announcementContainer");

    const searchInput =
        document.getElementById("announcementSearch");

    if (!container) return;

    function displayAnnouncements(searchText = "") {

        const search = searchText.toLowerCase().trim();

        const filtered = announcements.filter(item => {

            return (
                item.title.toLowerCase().includes(search) ||
                item.description.toLowerCase().includes(search) ||
                item.type.toLowerCase().includes(search) ||
                item.date.toLowerCase().includes(search)
            );

        });

        container.innerHTML = "";

        if (filtered.length === 0) {

            container.innerHTML = `
                <div class="no-results" style="display:block;">
                    <i class="fa-solid fa-circle-info"></i>
                    <p>No announcements found.</p>
                </div>
            `;

            return;
        }

        filtered.forEach(item => {

            const card = document.createElement("article");

            card.className = "announcement-card fade-in";

            card.innerHTML = `
                <div class="announcement-meta">
                    <span class="announcement-badge">
                        ${item.type}
                    </span>

                    <span class="announcement-date">
                        ${item.date}
                    </span>
                </div>

                <h3>${item.title}</h3>

                <p>
                    ${item.description}
                </p>
            `;

            container.appendChild(card);
        });
    }

    displayAnnouncements();

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            displayAnnouncements(searchInput.value);

        });
    }
}


/* =========================================================
   4. STUDY MATERIALS
========================================================= */

function initializeMaterials() {

    const container =
        document.getElementById("materialsContainer");

    const searchInput =
        document.getElementById("materialSearch");

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    if (!container) return;

    let selectedDepartment = "All";

    function displayMaterials() {

        const search =
            searchInput ?
            searchInput.value.toLowerCase().trim() :
            "";

        const filtered = studyMaterials.filter(item => {

            const departmentMatch =
                selectedDepartment === "All" ||
                item.department === selectedDepartment;

            const searchMatch =
                item.subject.toLowerCase().includes(search) ||
                item.department.toLowerCase().includes(search) ||
                item.type.toLowerCase().includes(search) ||
                item.semester.toLowerCase().includes(search);

            return departmentMatch && searchMatch;
        });

        container.innerHTML = "";

        if (filtered.length === 0) {

            container.innerHTML = `
                <div class="no-results" style="display:block;">
                    <i class="fa-solid fa-book-open"></i>
                    <p>No study materials found.</p>
                </div>
            `;

            return;
        }

        filtered.forEach(item => {

            const card =
                document.createElement("article");

            card.className =
                "material-card fade-in";

            card.innerHTML = `

                <div class="card-icon">
                    <i class="fa-solid fa-book"></i>
                </div>

                <h3>${item.subject}</h3>

                <p>
                    ${item.department} Department
                </p>

                <div class="material-info">

                    <span class="material-tag">
                        ${item.semester}
                    </span>

                    <span class="material-tag">
                        ${item.type}
                    </span>

                </div>

                <div class="material-actions">

                    <!--
                        Replace # with your Google Drive,
                        PDF or other study-material link.
                    -->

                    <a href="#"
                       onclick="return false;">
                        <i class="fa-solid fa-eye"></i>
                        View
                    </a>

                    <a href="#"
                       onclick="return false;">
                        <i class="fa-solid fa-download"></i>
                        Download
                    </a>

                </div>
            `;

            container.appendChild(card);
        });
    }


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            selectedDepartment =
                button.dataset.department || "All";

            displayMaterials();

        });

    });


    if (searchInput) {

        searchInput.addEventListener("input", () => {
            displayMaterials();
        });

    }


    displayMaterials();
}


/* =========================================================
   5. EVENTS
========================================================= */

function initializeEvents() {

    const container =
        document.getElementById("eventsContainer");

    if (!container) return;

    container.innerHTML = "";

    events.forEach(event => {

        const card =
            document.createElement("article");

        card.className =
            "event-card fade-in";

        card.innerHTML = `

            <div class="event-date">
                <strong>${event.day}</strong>
                <span>${event.month}</span>
            </div>

            <h3>${event.title}</h3>

            <p>
                ${event.description}
            </p>

            <div class="event-venue">
                <i class="fa-solid fa-location-dot"></i>
                ${event.venue}
            </div>

            <a href="#"
               class="btn btn-primary"
               onclick="return false;">
                <i class="fa-solid fa-user-plus"></i>
                Register
            </a>
        `;

        container.appendChild(card);
    });
}


/* =========================================================
   6. ACHIEVEMENTS
========================================================= */

function initializeAchievements() {

    const container =
        document.getElementById("achievementsContainer");

    if (!container) return;

    container.innerHTML = "";

    achievements.forEach(item => {

        const card =
            document.createElement("article");

        card.className =
            "achievement-card fade-in";

        card.innerHTML = `

            <div class="achievement-icon">
                <i class="fa-solid fa-trophy"></i>
            </div>

            <h3>
                ${item.achievement}
            </h3>

            <p>
                ${item.department} Department
            </p>

            <div class="achievement-student">

                <strong>
                    ${item.student}
                </strong>

                <br>

                Academic Year:
                ${item.year}

            </div>
        `;

        container.appendChild(card);
    });
}


/* =========================================================
   7. MOBILE MENU
========================================================= */

function initializeMobileMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen =
            navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });


    /* Close menu after clicking a navigation link */

    const navLinks =
        navMenu.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        });

    });
}


/* =========================================================
   8. DARK / LIGHT MODE
========================================================= */

function initializeTheme() {

    const themeToggle =
        document.getElementById("themeToggle");

    if (!themeToggle) return;


    /* Read saved theme */

    let savedTheme = null;

    try {
        savedTheme =
            localStorage.getItem("nprcet-theme");
    } catch (error) {
        savedTheme = null;
    }


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const darkMode =
            document.body.classList.contains("dark-mode");

        themeToggle.innerHTML = darkMode
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

        try {

            localStorage.setItem(
                "nprcet-theme",
                darkMode ? "dark" : "light"
            );

        } catch (error) {

            console.log(
                "Theme preference could not be saved."
            );
        }

    });
}


/* =========================================================
   9. GLOBAL SEARCH
========================================================= */

function initializeSearch() {

    const searchOpenBtn =
        document.getElementById("searchOpenBtn");

    const searchCloseBtn =
        document.getElementById("searchCloseBtn");

    const searchOverlay =
        document.getElementById("searchOverlay");

    const globalSearch =
        document.getElementById("globalSearch");

    const results =
        document.getElementById("globalSearchResults");

    const message =
        document.getElementById("globalSearchMessage");


    if (!searchOpenBtn ||
        !searchCloseBtn ||
        !searchOverlay ||
        !globalSearch) {
        return;
    }


    /* Open search */

    searchOpenBtn.addEventListener("click", () => {

        searchOverlay.classList.add("active");

        setTimeout(() => {
            globalSearch.focus();
        }, 100);

    });


    /* Close search */

    searchCloseBtn.addEventListener("click", closeSearch);


    /* Close by clicking background */

    searchOverlay.addEventListener("click", (event) => {

        if (event.target === searchOverlay) {
            closeSearch();
        }

    });


    /* ESC key */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeSearch();
        }

    });


    function closeSearch() {

        searchOverlay.classList.remove("active");

        globalSearch.value = "";

        if (results) {
            results.innerHTML = "";
        }

        if (message) {
            message.textContent = "";
        }
    }


    /* Search data */

    globalSearch.addEventListener("input", () => {

        const query =
            globalSearch.value.toLowerCase().trim();

        if (!results || !message) return;

        results.innerHTML = "";

        if (!query) {

            message.textContent =
                "Type something to search NPRCET Student Hub.";

            return;
        }


        const searchResults = [];


        /* Search announcements */

        announcements.forEach(item => {

            const text = `
                ${item.title}
                ${item.description}
                ${item.type}
            `.toLowerCase();

            if (text.includes(query)) {

                searchResults.push({
                    category: "Announcement",
                    title: item.title,
                    description: item.description
                });
            }
        });


        /* Search materials */

        studyMaterials.forEach(item => {

            const text = `
                ${item.subject}
                ${item.department}
                ${item.semester}
                ${item.type}
            `.toLowerCase();

            if (text.includes(query)) {

                searchResults.push({
                    category: "Study Material",
                    title: item.subject,
                    description:
                        `${item.department} • ${item.semester} • ${item.type}`
                });
            }
        });


        /* Search events */

        events.forEach(item => {

            const text = `
                ${item.title}
                ${item.venue}
                ${item.description}
            `.toLowerCase();

            if (text.includes(query)) {

                searchResults.push({
                    category: "Event",
                    title: item.title,
                    description: item.venue
                });
            }
        });


        /* Search achievements */

        achievements.forEach(item => {

            const text = `
                ${item.student}
                ${item.department}
                ${item.achievement}
                ${item.year}
            `.toLowerCase();

            if (text.includes(query)) {

                searchResults.push({
                    category: "Achievement",
                    title: item.achievement,
                    description:
                        `${item.student} • ${item.department}`
                });
            }
        });


        if (searchResults.length === 0) {

            message.textContent =
                "No search results found.";

            return;
        }


        message.textContent =
            `${searchResults.length} search result(s) found.`;


        searchResults.forEach(item => {

            const result =
                document.createElement("div");

            result.className = "global-result";

            result.innerHTML = `

                <strong>
                    ${item.title}
                </strong>

                <div>
                    ${item.description}
                </div>

                <small>
                    ${item.category}
                </small>
            `;

            results.appendChild(result);
        });

    });
}


/* =========================================================
   10. ATTENDANCE CALCULATOR
========================================================= */

function initializeAttendance() {

    const form =
        document.getElementById("attendanceForm");

    const totalInput =
        document.getElementById("totalClasses");

    const attendedInput =
        document.getElementById("attendedClasses");

    const error =
        document.getElementById("attendanceError");

    const result =
        document.querySelector(".attendance-result");

    const percentage =
        document.getElementById("attendancePercentage");

    const status =
        document.getElementById("attendanceStatus");

    const required =
        document.getElementById("classesRequired");

    const resetButton =
        document.getElementById("resetAttendance");


    if (!form ||
        !totalInput ||
        !attendedInput) {
        return;
    }


    form.addEventListener("submit", (event) => {

        event.preventDefault();

        calculateAttendance();

    });


    function calculateAttendance() {

        const total =
            Number(totalInput.value);

        const attended =
            Number(attendedInput.value);


        /* Clear old error */

        if (error) {

            error.textContent = "";
            error.style.display = "none";

        }


        /* Validation */

        if (
            totalInput.value.trim() === "" ||
            attendedInput.value.trim() === ""
        ) {

            showError(
                "Please enter both total and attended classes."
            );

            return;
        }


        if (total <= 0) {

            showError(
                "Total classes must be greater than 0."
            );

            return;
        }


        if (attended < 0 || total < 0) {

            showError(
                "Classes cannot be negative."
            );

            return;
        }


        if (attended > total) {

            showError(
                "Attended classes cannot be greater than total classes."
            );

            return;
        }


        /* Attendance percentage */

        const attendance =
            (attended / total) * 100;


        if (percentage) {

            percentage.textContent =
                `${attendance.toFixed(2)}%`;

        }


        /* Attendance status */

        let statusText = "";
        let statusClass = "";


        if (attendance >= 90) {

            statusText =
                "Excellent Attendance";

            statusClass =
                "excellent";

        } else if (attendance >= 75) {

            statusText =
                "Good Attendance";

            statusClass =
                "good";

        } else {

            statusText =
                "Attendance Shortage";

            statusClass =
                "shortage";
        }


        if (status) {

            status.textContent =
                statusText;

            status.className =
                `status-box ${statusClass}`;
        }


        /*
            Calculate additional classes required
            to reach 75%.

            Formula:

            (attended + x)
            ---------------- >= 75%
            (total + x)

            x = ceil(
                (0.75 * total - attended) / 0.25
            )

            Example:

            Total = 40
            Attended = 28

            Current = 70%

            x = ceil((30 - 28) / 0.25)
              = ceil(8)
              = 8

            So 8 additional classes are needed.

            2 classes would give:
            30 / 42 = 71.43%

            Therefore 8 is mathematically correct.
        */

        let classesNeeded = 0;


        if (attendance < 75) {

            classesNeeded =
                Math.ceil(
                    (0.75 * total - attended) / 0.25
                );

            if (classesNeeded < 0) {
                classesNeeded = 0;
            }
        }


        if (required) {

            if (classesNeeded === 0) {

                required.textContent =
                    "You have already reached the required 75% attendance.";

            } else {

                required.textContent =
                    `You need to attend ${classesNeeded} more consecutive class(es) to reach 75%.`;
            }
        }


        if (result) {
            result.style.display = "block";
        }

    }


    function showError(messageText) {

        if (!error) return;

        error.textContent =
            messageText;

        error.style.display =
            "block";

        if (result) {
            result.style.display = "none";
        }
    }


    /* Reset calculator */

    if (resetButton) {

        resetButton.addEventListener("click", () => {

            form.reset();

            if (error) {

                error.textContent = "";
                error.style.display = "none";
            }

            if (result) {
                result.style.display = "none";
            }

        });
    }
}


/* =========================================================
   11. SMOOTH NAVIGATION
========================================================= */

function initializeSmoothNavigation() {

    const links =
        document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId === "#!"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });
}


/* =========================================================
   12. BACK TO TOP
========================================================= */

function initializeBackToTop() {

    const button =
        document.getElementById("backToTop");

    if (!button) return;


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");
        }

    });


    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


/* =========================================================
   13. CURRENT YEAR
========================================================= */

function updateCopyrightYear() {

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });
}


/* =========================================================
   14. CONSOLE MESSAGE
========================================================= */

console.log(
    "NPRCET Student Hub loaded successfully."
);