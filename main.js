studentarray=[] ;
function submit() {
  var display_array=[] ;
  for (var i = 1; i <= 4 ; i++) {
      var student=document.getElementById("name_of_the_student_"+i).value ;
     console.log(student) ;
   studentarray.push(student) ;

  }
  console.log(studentarray) ;
  var length_studentarray=studentarray.length ;
  console.log(length_studentarray) ;
  for (var k = 0 ;k < length_studentarray; k++) {
  display_array.push("<h4>Name - "+studentarray[k]+"</h4>") ;  
  console.log(display_array) ; 
   
}
console.log(display_array) ;
document.getElementById("display_name_with_commas").innerHTML=display_array ;

var remove_commas=display_array.join(" ") ;
document.getElementById("display_name_without_commas").innerHTML=remove_commas ;
document.getElementById("submit_button").style.display="none" ;
document.getElementById("sort_button").style.display="inline-block" ;
}
function sorting() {
studentarray.sort() ;
console.log(studentarray) ;
var display_array_sorting=[] ;
var length_studentarray=studentarray.length ;
console.log(length_studentarray) ;
for (var k = 0 ;k < length_studentarray; k++) {
display_array_sorting.push("<h4>Name - "+studentarray[k]+"</h4>") ;  
console.log(display_array_sorting) ;
}
var remove_commas=display_array_sorting.join(" ") ;
document.getElementById("display_name_without_commas").innerHTML=remove_commas ;
}
