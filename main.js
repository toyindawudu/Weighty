 // Initiate the variables
 let lbsValue = document.getElementById('lbsInput');
 let stoneValue = document.getElementById('lbsInput');
 let kilogramValue = document.getElementById('lbsInput');
 let gramValue = document.getElementById('lbsInput');

 // Add your eventlistners
 lbsValue.addEventListener('input', function(item){
   let lbs = item.target.value;
   document.getElementById('ounceOutput').innerHTML = lbs * 16
 });

 stoneValue.addEventListener('input', function(item){
   let stone = item.target.value;
   document.getElementById('stoneOutput').innerHTML = stone / 14
 });

 kilogramValue.addEventListener('input', function(item){
  let kilogram = item.target.value;
  document.getElementById('kilogramOutput').innerHTML = kilogram / 2.205
});

gramValue.addEventListener('input', function(item){
  let gram = item.target.value;
  document.getElementById('gramOutput').innerHTML = gram / 454
});
