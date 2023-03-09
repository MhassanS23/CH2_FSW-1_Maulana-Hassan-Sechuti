function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  // result.sort((a, b) =>  parseFloat(b.year) - parseFloat(a.year));
  // Tulis code-mu disini
  let swapp;
    do {
        swapp = false;
        for (let i = 0; i < result.length - 1; i++) {
            if (result[i].year < result[i + 1].year) {
                let temp = result[i];
                result[i] = result[i + 1];
                result[i + 1] = temp;
                swapp = true;
            }
        }
    } while (swapp);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
