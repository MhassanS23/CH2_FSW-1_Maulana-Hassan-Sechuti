function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  result.sort((a, b) =>  parseFloat(b.year) - parseFloat(a.year));
  // Tulis code-mu disini

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
