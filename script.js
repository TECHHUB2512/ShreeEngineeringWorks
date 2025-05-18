
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


//  image slider
  const images = [
    "https://images.unsplash.com/photo-1590080877777-cb6a0f1b7f61?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581091012184-7c73c6dc54bc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618221089261-cd3f52d4b4c2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1567532939604-b6a02b8e0a6d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1608315398420-bd4e05a60230?auto=format&fit=crop&w=800&q=80"
  ];

  let current = 0;
  const img1 = document.getElementById('image1');
  const img2 = document.getElementById('image2');

  setInterval(() => {
    const next = (current + 1) % images.length;
    img2.src = images[next];
    img2.classList.add('opacity-100');
    img1.classList.remove('opacity-100');
    img1.classList.add('opacity-0');

    setTimeout(() => {
      img1.src = images[next];
      img1.classList.add('opacity-100');
      img1.classList.remove('opacity-0');
      img2.classList.remove('opacity-100');
      img2.classList.add('opacity-0');
      current = next;
    }, 1000);
  }, 5000); // Change every 5 seconds
