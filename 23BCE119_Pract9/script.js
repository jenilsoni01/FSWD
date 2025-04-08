// Simulated user database
const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" }
  ];
  
  const loginForm = document.getElementById("loginForm");
  const dashboard = document.getElementById("dashboard");
  const userRoleSpan = document.getElementById("user-role");
  const adminSection = document.getElementById("admin-section");
  const userSection = document.getElementById("user-section");
  
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const user = users.find(
      u => u.username === username && u.password === password
    );
  
    if (user) {
      showDashboard(user.role);
    } else {
      alert("Invalid credentials!");
    }
  });
  
  function showDashboard(role) {
    loginForm.classList.add("hidden");
    dashboard.classList.remove("hidden");
    userRoleSpan.textContent = role;
  
    if (role === "admin") {
      adminSection.classList.remove("hidden");
    } else if (role === "user") {
      userSection.classList.remove("hidden");
    }
  }
  
  function logout() {
    loginForm.classList.remove("hidden");
    dashboard.classList.add("hidden");
    adminSection.classList.add("hidden");
    userSection.classList.add("hidden");
    loginForm.reset();
  }
  