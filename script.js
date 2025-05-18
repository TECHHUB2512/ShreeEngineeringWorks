
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
    "https://media.wired.com/photos/59371bdcbef1fc4e58f947fc/3:2/w_2560%2Cc_limit/walmart-advanced-vehicle-experience-wave-concept-truck.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHrZSaaf_m_EeH8IpZWDQ39HnzJAWhISoCw&s",
    "https://5.imimg.com/data5/SELLER/Default/2021/9/WB/ES/GW/27295013/tata-t-11-ultra-truck-500x500.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDTGiFktkLLIHFTPLouVxuUmonGMjE1Ii0w&s",
    "https://truckcdn.cardekho.com/in/tata/407-gold-sfc/tata-407-gold-sfc-15836.jpg?impolicy=resize&imwidth"
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
    }, 1000); // match transition duration
  }, 5000); // change every 5 seconds