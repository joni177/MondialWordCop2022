

    function printRandomNum(){

    printfunc = setInterval(() => {
        var newNum =  Math.floor(Math.random() * 10) + 1;
        document.getElementById('p_num').innerHTML = newNum
        var i_num = parseInt(document.getElementById('i_num').value);
        if ( i_num === newNum)
        {
            stop()
        }
    }, 1000);
}   


function stop(){

 clearTimeout(printfunc)
 alert('Printing is finished');
}




function setpolynomial( ){
     a = Math.floor(Math.random() * 10) + 1;
     b = Math.floor(Math.random() * 10) + 1;
     c = Math.floor(Math.random() * 10) + 1;
     polynomial = ( "" + a + "x + " + b + " = " +c + " , x = " )
    document.getElementById('polynomial').innerHTML = polynomial ;
}

function Check(){
    var x = ( c - b )/a;
    var UserAnswer = parseInt(document.getElementById('UserAnswer').value);
    if ( x === UserAnswer )
    {
        alert("good job");
    }
    else{
        document.getElementById('SystemAnswer1' ).innerHTML = "the answer is : x =" + x
        document.getElementById('SystemAnswer1' ).style.visibility = 'visible' ;
    }

}

var houses = [ [] ]

function win(e){
    var group1,group2,win ;

    id = e.srcElement.id;

    switch (id) {
        case '1': case '3':
            group1 = '1';
            group2 = '3';
            win = '2'
            break;
         case '4' : case '6' :
            group1 = '4';
            group2 = '6';
            win = '5'
            break;
         case '2' : case '5' :
            group1 = '2';
            group2 = '5';
            win = 'final1'
            break;
         case '7' : case '9' :
            group1 = '7';
            group2 = '9';
            win = '8'
            break;
         case '10' : case '12' :
            group1 = '10';
            group2 = '12';
            win = '11'
            break;
        case '8' : case '11' :
            group1 = '8';
            group2 = '11';
            win = 'final2'
            break;
        case 'final1' : case 'final2' :
            group1 = 'final1';
            group2 = 'final2';
            win = 'win'
            break;

        default:
            break;
    }

    document.getElementById(win).src = document.getElementById(id).src;

    if ( win == 'win' ){
        alert("game over");
    }
}
