const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show_sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide_sidebar-btn');

// Shows Sidebar on small devices
const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

// Hide Sidebar on small devices
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display =  'inline-block';
    hideSidebarBtn.style.display = 'none';
}


showSidebarBtn.addEventListener ('click', showSidebar);
hideSidebarBtn.addEventListener ('click', hideSidebar);