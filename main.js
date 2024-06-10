$(document).ready(function () { 
    var taskForm = $("#task-form");
    var taskList = $("#task-list");

    taskForm.submit(function (event){
        event.preventDefault();

        var taskName = $("#tarefa").val();

        taskList.append("<li>" + taskName + "</li>");

        $("#tarefa").val("");
    });

    taskList.on("click", "li", function () {
        $(this).toggleClass("completed");
        });
    });