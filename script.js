
    window.addEventListener('DOMContentLoaded', () => {
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => {
        item.style.animationPlayState = 'running';
      });

      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    });
