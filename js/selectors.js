  function paragraphSelector() {
   return $('p');
  }
  
  function lastImageSelector() {
    let arr = [$('img')];
    let lastImage = arr.pop();
    return arr.length;
  }