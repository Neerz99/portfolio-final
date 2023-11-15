document.querySelectorAll('.menuItems li a').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.checkbox').checked = false;
    });
});