function makeFullScreen() {
    const homeSection = document.getElementById('home');
    const otherSections = document.querySelectorAll('.content');

    homeSection.style.height = '100vh';
    homeSection.style.transition = 'height 0.5s'; // Optional: Add a smooth transition effect

    otherSections.forEach(section => {
        if (section !== homeSection) {
            section.style.display = 'none';
        }
    });

    // Reset other sections after a delay (e.g., 2 seconds)
    setTimeout(() => {
        otherSections.forEach(section => {
            section.style.display = 'block';
        });
        homeSection.style.height = ''; // Reset height to auto
    }, 2000);
}
