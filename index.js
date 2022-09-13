var text = `{
    "firstName": "john",
    "lastName": "deo",
    "age": 30
}`;

var obj = JSON.parse(text);
console.table(obj);

var obj2 = {
    "firstName": "john",
    "lastName": "deo",
    "age": 30
};

var person = JSON.stringify(obj2);
console.log(person)

function getvalue(){
    
    var val = document.getElementsByName('firstName')[0].value;
    var length = val.length;
    if(length > 6){
        alert('name too long')
        return false
    }else{
        if(val == ''){
            alert('form can not be empty');
            return false;
        }
        else{
            alert('value is ' + val)
        }
    }

    
}