const hello = document.querySelector('.hi h1');


function handleClickTitle() {
    hello.style.color = 'blue';
}
function handleMouseEnter() {
    hello.innerText = 'Mouse is endered';
}
function handleMouseLeave() {
    hello.innerText = 'Mouse is leave';
}
function handleWindowResize() {
    document.body.style.backgroundColor='tomato';
}
function handleWindowCopy() {
    alert('copier');
}
function handleWindowOffline() {
    alert('wifi is not connected');
}

function handleWindowOnline() {
    alert('all gooood');
}

hello.addEventListener('click', handleClickTitle);
hello.addEventListener('mouseenter', handleMouseEnter);
hello.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);

window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);