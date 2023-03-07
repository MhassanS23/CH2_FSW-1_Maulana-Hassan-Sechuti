function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  // result.sort(
  //   (a, b) => 
  //   console.log(b)
  //   );
  // result.sort(
  //   (a, b) => 
  //   console.log((a.year) - (b.year))
  //   );
  // result.sort(
  //   (a, b) => 
  //   console.log(a)
  //   );

    result.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
  console.log(result)

  // Tulis code-mu disini

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
