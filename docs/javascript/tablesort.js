document$.subscribe(function() {
  var tables = document.querySelectorAll(
    "article table:not([class]):not(.advent_of_code_table table)"
  );
  tables.forEach(function(table) {
    new Tablesort(table);
  });
});