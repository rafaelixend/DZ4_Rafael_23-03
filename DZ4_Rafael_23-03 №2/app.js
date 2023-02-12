var result = {};
var user = ['name', 'John', 'lastname', 'Black', 'age', '23'];


for (var i=0;i< user.length; i+=2){
    result[user[i]] = user[i+1]
}
console.log(result)