/*
Цикл внутри цикла
*/
for(var i = 0; i < 3; i++){
    console.log(i);
    for(var j = 10; j < 13; j++){
        console.log(j);
    }
}
// Cоздай фигуру треугольника с помощью звездочки
/*
*
**
***
****
*****
*/

var result = '';
var length = 6;
for(var i = 0; i < 1; i++){
    for(var j = 0; j < length; j++ ){
        result += '*';
        console.log(result);
    };
    
};
