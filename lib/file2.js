function sum (n){
    var count = 0;
    var sum = 0;
    for (var i=1; i <= n; i++) { 
        if (i % 5 == 0 && i % 7 != 0) {count++, sum += i}
         
    }
   return 'Кількість дільників '+ count +' та їхня сума '+ sum;
}
console.log(sum (40));