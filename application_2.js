function bubble_sort(array) {
  var changed;
  var n = array.length - 1;
  do {
    changed = false;
    for (var i = 0; i < n; i++)
    {
      if (array[i] > array[i + 1])
      {
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          changed = true;
      }
    }
    n--;
  } while (changed);
  return array; 
}

vector = [5, 3, 2, 4, 7, 1, 0, 6];

console.log(bubble_sort(vector));
