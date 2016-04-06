# simpleWheneverJs
A javascript class that allows you to watch a value.
This is a simple version which means there are some restriction when using.

# API
## Whenever(callback)
  Please pass in a function with returning a boolean value. When you `change` value, this `callback` will be called. And it's return value will be translate to current status of the Whenever instance. (true for `Whenever.status` = 'resolve' and false for `Whenever.status` = 'reject').This call back will be `Whenever.judge`
## yes(callback,once)
  add `callback` to whenever, and will be execute whenever the `Whenever.judge` return true. If the `Whenever.status == 'resolve'`, `callback` will execute right away.If `once` equals true, this `callback` will execute only once.
## no(callback,once)
  similar to `yes` but will execute when `Whenever.judge` return false or `Whenever.status == 'reject'`.
## change(value)
  change Whenever value.This will call `Whenever.judge`, and execute yes functions or no functions according to the return value.
  
# usage
<pre><code>
var w = new Whenever(function(value){
  return value == 1;
});
w.yes(function(){
  console.log('yes once');
},true);
w.yes(function(){
  console.log('yesyes');
});
w.no(function(){
  console.log('no once');
},true);
w.no(function(){
  console.log('nono');
});
w.change(1);
//output: yesyes
//output: yes once
//explain: once functions will execute later
w.yes(function(){
  console.log('yesyesyes once');
},true);
//output: yesyesyes once
//explain: any functions add to yes will execute right away if matches value.
w.change(2);
//output: nono
//output: no once
//explain: once functions will execute later than forever one
w.change(1);
//output: yesyes
//explain: once functions will remove after execution
w.change(2);
//output: nono
w.no(function(){
  console.log('nonono once');
},true);
//output: nonono once
//explain: any functions add to no will execute right away if do not matches value.
w.change(1);
//output: yesyes
w.change(2);
//output: nono
</code></pre>
