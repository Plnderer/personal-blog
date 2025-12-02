document.addEventListener('DOMContentLoaded', () => {
    console.log('Blog loaded successfully!');

    // Add simple entrance animation for posts
    const posts = document.querySelectorAll('.post-card');
    posts.forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        post.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});
