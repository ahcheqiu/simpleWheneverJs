# simpleWheneverJs
A javascript class that allows you to watch a value.

# usage
<pre><code>
//MUST pass in a function with return a boolean value or can be cast to a boolean value.
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
