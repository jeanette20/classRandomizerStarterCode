$(document).ready(function(){

var students = ["Jeanette", "Julio", "Brittany", "Wilder", "Ashley"];
var student_chosen = students[Math.floor(Math.random()*students.length)];

$("#studentButton").click(function() {
  $("#studentDisplay").html(student_chosen + " " + "has been selected");
});

var teachers = ["Julia", "Zach", "Alyxe", "Justin", "Aaron"];
var teacher_chosen = teachers[Math.floor(Math.random()*teachers.length)];

$("#teacherButton").click(function() {
  $("#teacherDisplay").html(teacher_chosen + " " + "has been selected");
});

});