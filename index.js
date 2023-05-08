const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Bob) {
    cats.push(Bob);
  }

  function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
  }

  function appendCat(Milo) {
    return [...cats, Milo];
  }
  function prependCat(Otis) {
    return [Otis, ...cats];
  }
  function removeLastCat() {
    
    let newCats = cats.slice();
    
    newCats.pop();
    
    return newCats;
  }
  function removeFirstCat() {
    return cats.slice(1);
  }