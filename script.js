function showEmployee() {
    let employee = {
        name: "Alice Johnson",
        id: "EMP001",
        designation: "Software Engineer",
        salary: 75000,
        skills: ["JavaScript", "React", "Node.js"]
    };

    let employeeJSON = JSON.stringify(employee);
    let parsedEmployee = JSON.parse(employeeJSON);

    document.getElementById("outputArea").innerHTML = `
    <h3>Employee Info</h3>
    <p><strong>Name:</strong> ${parsedEmployee.name}</p>
    <p><strong>ID:</strong> ${parsedEmployee.id}</p>
    <p><strong>Designation:</strong> ${parsedEmployee.designation}</p>
    <p><strong>Salary:</strong> $${parsedEmployee.salary}</p>
    <p><strong>Skills:</strong> ${parsedEmployee.skills.join(", ")}</p>
    `;
}

function showCart() {
    let cartJSON = JSON.stringify([
        { name: "Laptop", price: 800, quantity: 1, available: true },
        { name: "Headphones", price: 50, quantity: 2, available: true },
        { name: "Mouse", price: 25, quantity: 1, available: false }
    ]);

    let cart = JSON.parse(cartJSON);

    let totalValue = 0;
    for (let product of cart) {
        if (product.available) {
            totalValue += product.price * product.quantity;
        }
    }

    document.getElementById("outputArea").innerHTML = `
    <h3>Shopping Cart</h3>
    <p><strong>Total Cart Value:</strong> $${totalValue}</p>
    `;
}

function showLibrary() {
    let library = {
        Science: [
            { title: "Physics Fundamentals", author: "Isaac Newton", year: 1687, stock: 5, genre: "Physics" },
            { title: "Organic Chemistry", author: "Marie Curie", year: 1903, stock: 0, genre: "Chemistry" }
        ]
    };

    let libraryJSON = JSON.stringify(library);
    let parsedLibrary = JSON.parse(libraryJSON);

    let titles = parsedLibrary.Science
    .filter(book => book.stock > 0)
    .map(book => `<li>${book.title}</li>`)
    .join("");

    document.getElementById("outputArea").innerHTML = `
    <h3>In-Stock Books</h3>
    <ul>${titles}</ul>
    `;
}

let department = {
    faculty: [
        { name: "Dr. Smith", gender: "Male", place: "New York" },
        { name: "Dr. Jane", gender: "Female", place: "California" }
    ],
    students: [
        { name: "John Doe", reg_no: "STU101", CGPA: 8.5 },
        { name: "Mary Jane", reg_no: "STU102", CGPA: 9.1 }
    ]
};

let departmentJSON = JSON.stringify(department);
let parsedDept = JSON.parse(departmentJSON);

function showFaculty() {
    let html = "<h3>Faculty</h3><table><tr><th>Name</th><th>Gender</th><th>Place</th></tr>";
    for (let fac of parsedDept.faculty) {
        html += `<tr><td>${fac.name}</td><td>${fac.gender}</td><td>${fac.place}</td></tr>`;
    }
    html += "</table>";

    document.getElementById("outputArea").innerHTML = html;
}

function showStudents() {
    let html = "<h3>Students</h3><table><tr><th>Name</th><th>Reg No</th><th>CGPA</th></tr>";
    for (let stu of parsedDept.students) {
        html += `<tr><td>${stu.name}</td><td>${stu.reg_no}</td><td>${stu.CGPA}</td></tr>`;
    }
    html += "</table>";

    document.getElementById("outputArea").innerHTML = html;
}

function showStudentProfile() {
    let studentProfile = {
        name: "Ashlin Vins V S",
        id: "STU2025",
        enrolled_courses: ["Mathematics", "Physics", "Computer Science"],
        contact: {
            email: "ashlin.vins@example.com",
            phone: "1234567890"
        }
    };

    let studentJSON = JSON.stringify(studentProfile);
    let parsedStudent = JSON.parse(studentJSON);

    document.getElementById("outputArea").innerHTML = `
    <h3>Student Profile</h3>
    <p><strong>Name:</strong> ${parsedStudent.name}</p>
    <p><strong>ID:</strong> ${parsedStudent.id}</p>
    <p><strong>Enrolled Courses:</strong> ${parsedStudent.enrolled_courses.join(", ")}</p>
    <p><strong>Email:</strong> ${parsedStudent.contact.email}</p>
    <p><strong>Phone:</strong> ${parsedStudent.contact.phone}</p>
    `;
}
