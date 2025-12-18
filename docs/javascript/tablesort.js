document$.subscribe(function() {
  var tables = document.querySelectorAll(
    "article table:not([class]):not(.advent_of_code_table table)"
  );
  tables.forEach(function(table) {
    new Tablesort(table);
  });
});

document.querySelectorAll('.advent_of_code_table table th').forEach(function(th) {
  th.style.minWidth = 'unset';
});