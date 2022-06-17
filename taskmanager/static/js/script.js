// sidenav initialisation
document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

// datepicker initialisation
  document.addEventListener('DOMContentLoaded', function() {
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });
  });

// select initialisation
document.addEventListener('DOMContentLoaded', function() {
  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);
});

// collapsible initialisation
document.addEventListener('DOMContentLoaded', function() {
  let collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);
});