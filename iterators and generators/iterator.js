function takeNext(arr) {
    var i = -1;
  
    return function next() {
      if (i < arr.length-1) {
        i++;
        return arr[i];
      } else {
        return "mister there is not any elemtns left";
      }
    };
  }
  

  // next way to do it in very simpler way 
  var arr = [1, 2, 3, 4];
  var next = takeNext(arr);
  console.log(next());
  console.log(next());
  console.log(next());
  console.log(next());
  console.log(next());
  console.log(next());
  

  function takeNext(arr) {
    var i = 0;
    return {
      next: () => {
        if(i < arr.length) return {done: false, value: arr[i++] }
        return {done: true, value: undefined}
      }
    }
  }
  
  var arr = [1, 2, 3, 4];
  var next = takeNext(arr);
  console.log(next.next());
  console.log(next.next());
  console.log(next.next());
  console.log(next.next());
  console.log(next.next());
  console.log(next.next());
  