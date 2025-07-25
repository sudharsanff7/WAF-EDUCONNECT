// DOM Elements
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.auth-buttons');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const switchModalLinks = document.querySelectorAll('.switch-modal');
const userTypeButtons = document.querySelectorAll('.user-type');
const tutorsSlider = document.querySelector('.tutors-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const projectsGrid = document.querySelector('.projects-grid');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    authButtons.classList.toggle('active');
});

// Modal functionality
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

loginBtn.addEventListener('click', () => openModal(loginModal));
signupBtn.addEventListener('click', () => openModal(signupModal));

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        closeModal(modal);
    });
});

switchModalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const currentModal = link.closest('.modal');
        const targetModalId = link.getAttribute('data-modal');
        const targetModal = document.getElementById(targetModalId);
        
        closeModal(currentModal);
        setTimeout(() => {
            openModal(targetModal);
        }, 300);
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// User type toggle in signup
userTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
        userTypeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Data for tutors and projects
const subjects = [
    'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'English Literature', 'History', 'Geography', 'Economics', 'Business Studies',
    'Psychology', 'Sociology', 'Art & Design', 'Music', 'Physical Education',
    'Engineering', 'Medicine', 'Law', 'Philosophy', 'Political Science',
    'Statistics', 'Data Science', 'Machine Learning', 'Web Development', 'Mobile App Development',
    'Graphic Design', 'Animation', 'Film Studies', 'Photography', 'Architecture',
    'Environmental Science', 'Astronomy', 'Geology', 'Anthropology', 'Linguistics',
    'Foreign Languages', 'Creative Writing', 'Journalism', 'Marketing', 'Finance',
    'Accounting', 'Human Resources', 'Nutrition', 'Sports Science', 'Veterinary Science',
    'Dentistry', 'Pharmacy', 'Nursing', 'Physiotherapy', 'Occupational Therapy'
];

const projectTitles = [
    'Machine Learning Research', 'Web Development Portfolio', 'Renewable Energy Solutions',
    'Mobile App for Health Tracking', 'E-commerce Platform Development',
    'Virtual Reality Educational Tool', 'Blockchain-based Voting System',
    'Smart Home Automation Project', 'Natural Language Processing Research',
    'Cybersecurity Risk Assessment Tool', 'Sustainable Urban Planning Model',
    'Genetic Algorithm Optimization', 'Cloud-based Collaboration Platform',
    'Augmented Reality Museum Guide', 'Autonomous Drone Navigation System',
    'Biometric Authentication System', 'Financial Market Prediction Model',
    'Social Media Analytics Dashboard', 'Telemedicine Platform Development',
    'Quantum Computing Simulation', 'Robotics Process Automation',
    'Digital Marketing Campaign Analysis', 'Supply Chain Optimization Model',
    'Game Development with Unity', 'IoT-based Environmental Monitoring',
    'Facial Recognition Security System', '3D Printing Medical Prosthetics',
    'Cryptocurrency Trading Algorithm', 'Personalized Learning Platform',
    'Speech Recognition Assistant', 'Sentiment Analysis for Customer Feedback',
    'Waste Management Optimization', 'Traffic Flow Prediction System',
    'Recommendation Engine Development', 'Virtual Try-On Technology',
    'Predictive Maintenance System', 'Fraud Detection Algorithm',
    'Automated Essay Grading System', 'Chatbot for Student Support',
    'Gesture Recognition Interface', 'Precision Agriculture System',
    'Epidemic Spread Simulation', 'Algorithmic Music Composition',
    'Automated Code Review Tool', 'Ethical Hacking Framework',
    'Disaster Response Coordination System', 'Accessibility Tools for Disabilities',
    'Sustainable Fashion Supply Chain', 'Mental Health Support Platform',
    'Biodiversity Monitoring System'
];

const projectDescriptions = [
    'A collaborative project on implementing advanced algorithms for real-world applications',
    'Building innovative solutions with modern technologies and best practices',
    'Designing sustainable systems for practical applications and future scalability',
    'Developing user-friendly interfaces with focus on accessibility and performance',
    'Researching cutting-edge approaches to solve complex problems efficiently',
    'Creating interactive experiences that engage users and provide valuable insights',
    'Optimizing existing systems to improve performance and reduce resource usage',
    'Implementing secure frameworks that protect sensitive data and user privacy',
    'Analyzing large datasets to extract meaningful patterns and actionable insights',
    'Constructing robust architectures that can scale with growing demands'
];

const projectTags = [
    ['AI', 'Python', 'Data Science'],
    ['HTML/CSS', 'JavaScript', 'React'],
    ['Engineering', 'Sustainability', 'Design'],
    ['Mobile', 'UI/UX', 'Swift'],
    ['Backend', 'Frontend', 'Database'],
    ['VR/AR', 'Unity', 'Education'],
    ['Blockchain', 'Security', 'Voting'],
    ['IoT', 'Automation', 'Raspberry Pi'],
    ['NLP', 'Machine Learning', 'Python'],
    ['Security', 'Risk Assessment', 'Compliance'],
    ['Urban Planning', 'Sustainability', 'GIS'],
    ['Algorithms', 'Optimization', 'Java'],
    ['Cloud', 'AWS', 'Collaboration'],
    ['AR', 'Museums', 'Cultural Heritage'],
    ['Drones', 'Computer Vision', 'Navigation'],
    ['Biometrics', 'Security', 'Authentication'],
    ['Finance', 'Prediction', 'Time Series'],
    ['Analytics', 'Social Media', 'Visualization'],
    ['Healthcare', 'Telemedicine', 'Web'],
    ['Quantum', 'Simulation', 'Computing'],
    ['Robotics', 'Automation', 'Workflow'],
    ['Marketing', 'Analytics', 'Campaigns'],
    ['Supply Chain', 'Optimization', 'Logistics'],
    ['Game Dev', 'Unity', '3D Modeling'],
    ['IoT', 'Environment', 'Sensors']
];

const projectImages = [
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
];

// Generate random tutors
function generateTutors(count) {
    // Clear existing tutors
    tutorsSlider.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const gender = Math.random() > 0.5 ? 'men' : 'women';
        const randomId = Math.floor(Math.random() * 99) + 1;
        const randomSubjectIndex = Math.floor(Math.random() * subjects.length);
        const rating = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3.0 and 5.0
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        const tutorCard = document.createElement('div');
        tutorCard.className = 'tutor-card';
        
        let starsHTML = '';
        for (let j = 0; j < 5; j++) {
            if (j < fullStars) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else if (j === fullStars && hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }
        
        const prefix = Math.random() > 0.7 ? 'Dr.' : (Math.random() > 0.5 ? 'Prof.' : '');
        const firstName = gender === 'men' ? 
            ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles'][Math.floor(Math.random() * 10)] :
            ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen'][Math.floor(Math.random() * 10)];
        
        const lastName = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 
                        'Wilson', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White'][Math.floor(Math.random() * 20)];
        
        const fullName = prefix ? `${prefix} ${firstName} ${lastName}` : `${firstName} ${lastName}`;
        
        tutorCard.innerHTML = `
            <div class="tutor-image">
                <img src="https://randomuser.me/api/portraits/${gender}/${randomId}.jpg" alt="Tutor">
            </div>
            <h3>${fullName}</h3>
            <p class="tutor-subject">${subjects[randomSubjectIndex]}</p>
            <div class="tutor-rating">
                ${starsHTML}
                <span>${rating}</span>
            </div>
            <button class="view-profile-btn">View Profile</button>
        `;
        
        tutorsSlider.appendChild(tutorCard);
    }
}

// Generate random projects
function generateProjects(count) {
    // Clear existing projects
    projectsGrid.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const randomTitleIndex = i % projectTitles.length;
        const randomDescIndex = Math.floor(Math.random() * projectDescriptions.length);
        const randomTagsIndex = i % projectTags.length;
        const randomImageIndex = i % projectImages.length;
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        let tagsHTML = '';
        projectTags[randomTagsIndex].forEach(tag => {
            tagsHTML += `<span>${tag}</span>`;
        });
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${projectImages[randomImageIndex]}" alt="Project">
            </div>
            <div class="project-info">
                <h3>${projectTitles[randomTitleIndex]}</h3>
                <p>${projectDescriptions[randomDescIndex]}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    }
}

// Tutors slider functionality
let sliderPosition = 0;
const cardWidth = 330; // card width + gap

nextBtn.addEventListener('click', () => {
    const maxPosition = tutorsSlider.scrollWidth - tutorsSlider.clientWidth;
    sliderPosition = Math.min(sliderPosition + cardWidth, maxPosition);
    tutorsSlider.scroll({
        left: sliderPosition,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    sliderPosition = Math.max(sliderPosition - cardWidth, 0);
    tutorsSlider.scroll({
        left: sliderPosition,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            authButtons.classList.remove('active');
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Form validation
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add login form validation and submission logic here
        alert('Login functionality would be implemented with backend integration');
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Add signup form validation and submission logic here
        alert('Signup functionality would be implemented with backend integration');
    });
}

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Initialize the page with animations and generate tutors and projects
window.addEventListener('load', () => {
    // Add initial animations
    document.body.classList.add('loaded');
    
    // Generate 50 tutors and 100 projects
    generateTutors(50);
    generateProjects(100);
    
    // Observe elements for animation after they're generated
    setTimeout(() => {
        const animateElements = document.querySelectorAll('.feature-card, .tutor-card, .project-card, .testimonial');
        animateElements.forEach(element => {
            observer.observe(element);
        });
    }, 100);
    
    // Simulate loading state for demo purposes
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 300);
});