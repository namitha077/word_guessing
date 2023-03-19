
<script>
const array1 = ['one', 'two', 'three'];
const array2 = [1, 4, 9, 16];
const reversed = array1.reverse();
console.log('reversed:', reversed);
console.log('sorted:',array1.sort());
array1.push('four');
console.log('push:',array1);
const result = array1.filter(word => word.length > 4);
console.log(result);
const map1 = array2.map(x => x * 2);
console.log(map1);
console.log('pop:',array1.pop())
const firstElement = array2.shift();
console.log('shift',firstElement);
console.log('unshift',array2.unshift(4, 5));
console.log(array2)
</script>