const robotData = [{
        id: 'R001',
        name: 'Scout-1',
        type: 'Scout',
        status: 'active',
        battery: 85,
        location: { lat: 40.7128, lng: -74.0060 },
        currentTask: 'Patrol Route A',
        uptime: '48h 32m',
        temperature: 35.2,
        speed: 5.4,
        load: 0,
        nextMaintenance: '2024-12-25',
        path: [],
        errorLogs: []
    },
    {
        id: 'R002',
        name: 'Cargo-1',
        type: 'Transport',
        status: 'active',
        battery: 72,
        location: { lat: 40.7135, lng: -74.0070 },
        currentTask: 'Delivering to Warehouse B',
        uptime: '36h 15m',
        temperature: 38.5,
        speed: 3.2,
        load: 85,
        nextMaintenance: '2024-12-28',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R003',
        name: 'Maint-1',
        type: 'Maintenance',
        status: 'inactive',
        battery: 15,
        location: { lat: 40.7140, lng: -74.0065 },
        currentTask: 'Charging',
        uptime: '12h 45m',
        temperature: 32.1,
        speed: 0,
        load: 20,
        nextMaintenance: '2024-12-30',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R004',
        name: 'Security-1',
        type: 'Security',
        status: 'active',
        battery: 95,
        location: { lat: 40.7125, lng: -74.0055 },
        currentTask: 'Perimeter Check',
        uptime: '8h 20m',
        temperature: 34.8,
        speed: 4.8,
        load: 0,
        nextMaintenance: '2025-01-05',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R005',
        name: 'Clean-1',
        type: 'Cleaning',
        status: 'active',
        battery: 68,
        location: { lat: 40.7132, lng: -74.0058 },
        currentTask: 'Floor Maintenance',
        uptime: '24h 10m',
        temperature: 33.5,
        speed: 2.1,
        load: 45,
        nextMaintenance: '2024-12-27',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R006',
        name: 'Inspect-1',
        type: 'Inspector',
        status: 'maintenance',
        battery: 45,
        location: { lat: 40.7130, lng: -74.0063 },
        currentTask: 'Software Update',
        uptime: '5h 30m',
        temperature: 36.2,
        speed: 0,
        load: 0,
        nextMaintenance: '2024-12-26',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R007',
        name: 'Rescue-1',
        type: 'Emergency',
        status: 'standby',
        battery: 100,
        location: { lat: 40.7126, lng: -74.0067 },
        currentTask: 'Ready for Deployment',
        uptime: '2h 15m',
        temperature: 31.8,
        speed: 0,
        load: 0,
        nextMaintenance: '2025-01-10',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R008',
        name: 'Assemble-1',
        type: 'Assembly',
        status: 'active',
        battery: 85,
        location: { lat: 40.7119, lng: -74.0072 },
        currentTask: 'Component Assembly',
        uptime: '14h 30m',
        temperature: 32.0,
        speed: 1.8,
        load: 50,
        nextMaintenance: '2025-01-05',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R009',
        name: 'Pack-1',
        type: 'Packaging',
        status: 'inactive',
        battery: 60,
        location: { lat: 40.7120, lng: -74.0062 },
        currentTask: 'Packaging Products',
        uptime: '12h 15m',
        temperature: 31.3,
        speed: 2.2,
        load: 40,
        nextMaintenance: '2024-12-28',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R010',
        name: 'Transport-2',
        type: 'Transport',
        status: 'active',
        battery: 95,
        location: { lat: 40.7115, lng: -74.0075 },
        currentTask: 'Cargo Movement',
        uptime: '18h 10m',
        temperature: 30.7,
        speed: 3.8,
        load: 100,
        nextMaintenance: '2025-01-10',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R011',
        name: 'Sort-1',
        type: 'Sorting',
        status: 'active',
        battery: 70,
        location: { lat: 40.7112, lng: -74.0068 },
        currentTask: 'Sorting Packages',
        uptime: '22h 40m',
        temperature: 32.5,
        speed: 1.4,
        load: 35,
        nextMaintenance: '2024-12-22',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R012',
        name: 'Clean-4',
        type: 'Cleaning',
        status: 'active',
        battery: 80,
        location: { lat: 40.7109, lng: -74.0071 },
        currentTask: 'Floor Sweeping',
        uptime: '17h 50m',
        temperature: 30.9,
        speed: 2.0,
        load: 45,
        nextMaintenance: '2024-12-24',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R013',
        name: 'Scan-1',
        type: 'Scanning',
        status: 'inactive',
        battery: 55,
        location: { lat: 40.7106, lng: -74.0073 },
        currentTask: 'Scanning Documents',
        uptime: '9h 25m',
        temperature: 33.2,
        speed: 0,
        load: 10,
        nextMaintenance: '2025-01-15',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R014',
        name: 'Inspect-3',
        type: 'Inspector',
        status: 'active',
        battery: 50,
        location: { lat: 40.7118, lng: -74.0064 },
        currentTask: 'Inspection',
        uptime: '8h 55m',
        temperature: 34.4,
        speed: 0,
        load: 0,
        nextMaintenance: '2024-12-26',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R015',
        name: 'Rescue-3',
        type: 'Emergency',
        status: 'standby',
        battery: 100,
        location: { lat: 40.7104, lng: -74.0069 },
        currentTask: 'Emergency Standby',
        uptime: '1h 30m',
        temperature: 32.1,
        speed: 0,
        load: 0,
        nextMaintenance: '2025-01-12',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R016',
        name: 'Lift-1',
        type: 'Lifting',
        status: 'active',
        battery: 85,
        location: { lat: 40.7110, lng: -74.0074 },
        currentTask: 'Lifting Heavy Objects',
        uptime: '20h 40m',
        temperature: 35.0,
        speed: 1.2,
        load: 150,
        nextMaintenance: '2025-01-05',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    },
    {
        id: 'R017',
        name: 'Sort-2',
        type: 'Sorting',
        status: 'active',
        battery: 90,
        location: { lat: 40.7102, lng: -74.0070 },
        currentTask: 'Sorting Items',
        uptime: '11h 45m',
        temperature: 33.8,
        speed: 1.7,
        load: 25,
        nextMaintenance: '2024-12-30',
        path: [],
        image: '/api/placeholder/150/150',
        errorLogs: []
    }
];

// Global variables
let map;
let mapStyle = 'standard';
let showPaths = true;
let showGeofence = true;
const robotMarkers = new Map();
const robotPaths = new Map();
let charts = {};

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', () => {
        document.body.setAttribute('data-theme',
            themeToggle.checked ? 'dark' : 'light');
        updateMapStyle();
    });
}

// Map Initialization and Controls
function initializeMap() {
    map = L.map('robotMap').setView([40.7128, -74.0060], 13);
    updateMapStyle();

    // Map control event listeners
    document.getElementById('togglePaths').addEventListener('click', togglePaths);
    document.getElementById('toggleGeofence').addEventListener('click', toggleGeofence);
    document.getElementById('mapStyle').addEventListener('change', (e) => {
        mapStyle = e.target.value;
        updateMapStyle();
    });
}

function updateMapStyle() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    const styles = {
        standard: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        satellite: 'https://server.arcgisonline.com/ArcGIS/rest/stable/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        night: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
    };

    // Remove existing tile layer
    map.eachLayer((layer) => {
        if (layer instanceof L.TileLayer) {
            map.removeLayer(layer);
        }
    });

    // Add new tile layer
    L.tileLayer(styles[isDark ? 'night' : mapStyle], {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

// Robot Tracking and Visualization
function updateRobotMarkers() {
    robotData.forEach(robot => {
        let marker = robotMarkers.get(robot.id);

        if (!marker) {
            marker = L.marker([robot.location.lat, robot.location.lng])
                .bindPopup(createRobotPopup(robot))
                .addTo(map);
            robotMarkers.set(robot.id, marker);
        } else {
            marker.setLatLng([robot.location.lat, robot.location.lng]);
            marker.getPopup().setContent(createRobotPopup(robot));
        }

        updateRobotPath(robot);
    });
}

function updateRobotPath(robot) {
    if (!showPaths) return;

    robot.path.push([robot.location.lat, robot.location.lng]);
    if (robot.path.length > 20) robot.path.shift();

    let pathLine = robotPaths.get(robot.id);
    if (pathLine) {
        map.removeLayer(pathLine);
    }

    pathLine = L.polyline(robot.path, {
        color: getStatusColor(robot.status),
        weight: 2,
        opacity: 0.7
    }).addTo(map);
    robotPaths.set(robot.id, pathLine);
}

// Charts and Analytics
function initializeCharts() {
    // Efficiency Chart
    const efficiencyCtx = document.getElementById('efficiencyChart').getContext('2d');
    charts.efficiency = new Chart(efficiencyCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Fleet Efficiency',
                data: [],
                borderColor: '#3498db',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Task Completion Chart
    const taskCtx = document.getElementById('taskCompletionChart').getContext('2d');
    charts.tasks = new Chart(taskCtx, {
        type: 'bar',
        data: {
            labels: ['Patrol', 'Delivery', 'Maintenance'],
            datasets: [{
                label: 'Tasks Completed',
                data: [0, 0, 0],
                backgroundColor: ['#2ecc71', '#3498db', '#e74c3c']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Task Scheduler
function initializeTaskScheduler() {
    const scheduleBtn = document.getElementById('scheduleTask');
    scheduleBtn.addEventListener('click', scheduleNewTask);

    // Populate robot select
    const robotSelect = document.getElementById('robotSelect');
    robotData.forEach(robot => {
        const option = document.createElement('option');
        option.value = robot.id;
        option.textContent = robot.name;
        robotSelect.appendChild(option);
    });
}

function scheduleNewTask() {
    const robotId = document.getElementById('robotSelect').value;
    const taskType = document.getElementById('taskType').value;
    const taskTime = document.getElementById('taskTime').value;

    if (!robotId || !taskType || !taskTime) {
        createAlert('Please fill all task fields', 'warning');
        return;
    }

    // Add task to scheduled tasks
    const taskElement = document.createElement('div');
    taskElement.className = 'scheduled-task';
    taskElement.innerHTML = `
        <span>${robotData.find(r => r.id === robotId).name}</span>
        <span>${taskType}</span>
        <span>${new Date(taskTime).toLocaleString()}</span>
        <button onclick="this.parentElement.remove()">Cancel</button>
    `;
    document.getElementById('scheduledTasks').appendChild(taskElement);
}

// Alert System
function createAlert(message, type = 'info') {
    const alertsList = document.getElementById('alertsList');
    const alert = document.createElement('div');
    alert.className = `alert-item alert-${type}`;
    alert.innerHTML = `
        <span class="alert-time">${new Date().toLocaleTimeString()}</span>
        <span class="alert-message">${message}</span>
    `;
    alertsList.insertBefore(alert, alertsList.firstChild);

    // Remove old alerts
    if (alertsList.children.length > 50) {
        alertsList.removeChild(alertsList.lastChild);
    }
}

// Robot Card Updates
function updateRobotCards() {
    const container = document.getElementById('robotCards');
    container.innerHTML = ''; // Clear existing cards

    const searchTerm = document.getElementById('robotSearch').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;

    robotData
        .filter(robot => {
            const matchesSearch = robot.name.toLowerCase().includes(searchTerm);
            const matchesStatus = statusFilter === 'all' || robot.status === statusFilter;
            return matchesSearch && matchesStatus;
        })
        .forEach(robot => {
            const card = document.getElementById('robotCardTemplate')
                .content.cloneNode(true);

            // Update card content
            card.querySelector('.robot-name').textContent = robot.name;
            card.querySelector('.robot-status').textContent = robot.status.toUpperCase();
            card.querySelector('.temperature').textContent = `${robot.temperature}°C`;
            card.querySelector('.speed').textContent = `${robot.speed} m/s`;
            card.querySelector('.load').textContent = `${robot.load}%`;

            // Battery indicator
            const batteryLevel = card.querySelector('.battery-level');
            batteryLevel.style.width = `${robot.battery}%`;
            batteryLevel.style.backgroundColor = getBatteryColor(robot.battery);

            // Add event listeners to control buttons
            card.querySelector('.start-stop').addEventListener('click',
                () => toggleRobotOperation(robot.id));
            card.querySelector('.emergency-stop').addEventListener('click',
                () => emergencyStop(robot.id));
            card.querySelector('.view-details').addEventListener('click',
                () => showRobotDetails(robot.id));

            container.appendChild(card);
        });
}

// Robot Control Functions
function toggleRobotOperation(robotId) {
    const robot = robotData.find(r => r.id === robotId);
    robot.status = robot.status === 'active' ? 'inactive' : 'active';
    updateRobotCards();
    createAlert(`${robot.name} ${robot.status === 'active' ? 'started' : 'stopped'}`);
}

function emergencyStop(robotId) {
    const robot = robotData.find(r => r.id === robotId);
    robot.status = 'inactive';
    robot.currentTask = 'Emergency Stop';
    updateRobotCards();
    createAlert(`Emergency stop triggered for ${robot.name}`, 'error');
}

// Simulation and Updates
function simulateRobotMovement() {
    robotData.forEach(robot => {
        if (robot.status === 'active') {
            // Simulate movement
            robot.location.lat += (Math.random() - 0.5) * 0.001;
            robot.location.lng += (Math.random() - 0.5) * 0.001;

            // Simulate sensor data changes
            robot.temperature = Math.max(20, Math.min(50,
                robot.temperature + (Math.random() - 0.5) * 2));
            robot.speed = Math.max(0, Math.min(10,
                robot.speed + (Math.random() - 0.5)));
            robot.battery = Math.max(0, robot.battery - Math.random() * 0.1);
        }
    });
}

// Utility Functions
function getStatusColor(status) {
    const colors = {
        active: '#2ecc71',
        inactive: '#e74c3c',
        maintenance: '#f1c40f'
    };
    return colors[status] || '#95a5a6';
}

function getBatteryColor(level) {
    if (level > 70) return '#2ecc71';
    if (level > 30) return '#f1c40f';
    return '#e74c3c';
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeMap();
    initializeCharts();
    initializeTaskScheduler();
    updateRobotCards();

    // Start real-time updates
    setInterval(() => {
        simulateRobotMovement();
        updateRobotMarkers();
        updateRobotCards();
        updateCharts();
    }, 1000);

    // Generate random alerts
    setInterval(() => {
        if (Math.random() < 0.3) {
            const alertTypes = ['info', 'warning', 'error'];
            const messages = [
                'Low battery warning',
                'Task completed successfully',
                'Connection unstable',
                'Maintenance required soon',
                'Obstacle detected'
            ];
            createAlert(
                messages[Math.floor(Math.random() * messages.length)],
                alertTypes[Math.floor(Math.random() * alertTypes.length)]
            );
        }
    }, 5000);
});
document.addEventListener('DOMContentLoaded', () => {
    // Lighting effect tracking
    const lightingElements = document.querySelectorAll('.lighting-effect');

    lightingElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / element.clientWidth) * 100;
            const y = ((e.clientY - rect.top) / element.clientHeight) * 100;

            element.style.setProperty('--mouse-x', `${x}%`);
            element.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // Particle system
    const createParticles = (container, count = 10) => {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(particle);
        }
    };

    document.querySelectorAll('.particle-container').forEach(container => {
        createParticles(container);
    });

    // Value counter animation
    const animateValue = (element) => {
        const start = parseInt(element.dataset.start || 0);
        const end = parseInt(element.dataset.end || 0);
        const duration = 1000;
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current + (element.textContent.includes('%') ? '%' : '');

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    // Initialize counters
    document.querySelectorAll('.stat-value').forEach(value => {
        animateValue(value);
    });

    // Touch ripple effect
    document.querySelectorAll('.touch-ripple').forEach(element => {
        element.addEventListener('touchstart', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;

            element.style.setProperty('--touch-x', `${x}px`);
            element.style.setProperty('--touch-y', `${y}px`);
            element.classList.add('rippling');
        });

        element.addEventListener('touchend', () => {
            element.classList.remove('rippling');
        });
    });

    // Connection lines
    const updateConnectionLines = () => {
        const map = document.getElementById('robotMap');
        if (!map) return;

        const locations = JSON.parse(map.dataset.locations || '[]');
        const linesContainer = map.querySelector('.connection-lines');
        linesContainer.innerHTML = '';

        locations.forEach((loc, i) => {
            if (i < locations.length - 1) {
                const line = document.createElement('div');
                line.className = 'connection-line';
                const angle = Math.atan2(
                    locations[i + 1].y - loc.y,
                    locations[i + 1].x - loc.x
                ) * 180 / Math.PI;
                const length = Math.sqrt(
                    Math.pow(locations[i + 1].x - loc.x, 2) +
                    Math.pow(locations[i + 1].y - loc.y, 2)
                );

                line.style.width = `${length}px`;
                line.style.left = `${loc.x}px`;
                line.style.top = `${loc.y}px`;
                line.style.transform = `rotate(${angle}deg)`;

                linesContainer.appendChild(line);
            }
        });
    };

    // Initialize connection lines
    updateConnectionLines();

    // Expandable alerts
    document.querySelectorAll('.alert-item').forEach(alert => {
        alert.addEventListener('click', () => {
            alert.classList.toggle('expanded');
        });
    });

    // Battery level animation
    document.querySelectorAll('.battery-indicator').forEach(battery => {
        const level = battery.querySelector('.battery-level');
        const percentage = battery.dataset.percentage;
        level.style.width = `${percentage}%`;

        if (percentage < 20) {
            battery.classList.add('critical');
        }
    });
});

// Intersection Observer for animation triggers
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stat-box, .robot-card, .alert-item').forEach(el => {
        observer.observe(el);
    });
};

observeElements();
