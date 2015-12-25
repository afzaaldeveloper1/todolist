 var myDataRef = new Firebase('https://popping-heat-1392.firebaseio.com/');
 $('#ToDoInput').keypress(function (e) {
     if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var todo = $('#ToDoInput').val();
        myDataRef.push({name: name, todo: todo});
        $('#ToDoInput').val('');
        }
     });
    myDataRef.on('child_added', function(snapshot) {
        var listItem = snapshot.val();
		displayToDoList(listItem.name, listItem.todo);
    });
    
    function displayToDoList(name, todo) {
        $('<div/>').text(todo).prepend($('<em/>').text(name+': ')).appendTo($('#listDiv'));
        $('#listDiv')[0].scrollTop = $('#listDiv')[0].scrollHeight;
      };