// ===============================
// Project Management Dashboard
// ===============================

console.log("JavaScript loaded!");


// ===============================
// NEW PROJECT BUTTONS
// ===============================

const newProjectButtons = document.querySelectorAll(
    ".new-project, .quick-create button:first-of-type"
);

console.log("New Project buttons found:", newProjectButtons.length);

newProjectButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        console.log("New Project button clicked!");

        const projectName = window.prompt(
            "Enter project name:"
        );

        if (projectName !== null && projectName.trim() !== "") {

            window.alert(
                "Project '" +
                projectName.trim() +
                "' created successfully!"
            );

        }

    });

});


// ===============================
// ADD TASK
// ===============================

const addTaskButtons = document.querySelectorAll(".add-task");

addTaskButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const taskName = window.prompt(
            "Enter task name:"
        );

        if (taskName !== null && taskName.trim() !== "") {

            const task = document.createElement("div");

            task.className = "task";

            task.innerHTML = `
                <strong>${taskName.trim()}</strong>
                <small>New Task</small>
                <footer>
                    👤 Unassigned
                    <span>Today</span>
                </footer>
            `;

            this.parentElement.insertBefore(
                task,
                this
            );

        }

    });

});


// ===============================
// NAVIGATION
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ===============================
// SEARCH
// ===============================

const searchInput =
    document.querySelector(".top-actions input");

if (searchInput) {

    searchInput.addEventListener("input", function() {

        const searchText =
            this.value.toLowerCase();

        const tasks =
            document.querySelectorAll(".task");

        tasks.forEach(function(task) {

            const title =
                task.querySelector("strong");

            if (!title) return;

            const taskName =
                title.innerText.toLowerCase();

            task.style.display =
                taskName.includes(searchText)
                    ? "block"
                    : "none";

        });

    });

}