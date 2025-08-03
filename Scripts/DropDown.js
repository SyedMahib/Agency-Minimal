const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    function toggleSub(id) {
      const submenu = document.getElementById(`submenu-${id}`);
      const icon = document.getElementById(`icon-${id}`);
      submenu.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    }
