student_name_array=[];
function submit(){
    var name_1=document.getElementById("student_name_1").value;
    var name_2=document.getElementById("student_name_2").value;
    var name_3=document.getElementById("student_name_3").value;
    var name_4=document.getElementById("student_name_4").value;

    student_name_array.push(name_1);
    student_name_array.push(name_2);
    student_name_array.push(name_3);
    student_name_array.push(name_4);

    console.log(student_name_array);
 document.getElementById("display_name").innerHTML=student_name_array;
 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";
 }
 function sort(){
     student_name_array.sort();
     document.getElementById("display_name").innerHTML=student_name_array;
 }