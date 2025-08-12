// כפתור שמשנה את צבע הרקע של הדף
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('changeBgBtn');
  let colors = ['#f8f9fa', '#fff3cd', '#d1f7c4', '#cce5ff'];
  let index = 0;

  btn.addEventListener('click', function () {
    index = (index + 1) % colors.length;
    document.body.style.backgroundColor = colors[index];
    console.log('צבע הרקע שונה ל-', colors[index]);
  });
});