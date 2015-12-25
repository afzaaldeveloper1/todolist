 var myDataRef = new Firebase('https://popping-heat-1392.firebaseio.com/');
 $('#ToDoInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var todo = $('#ToDoInput').val();
          myDataRef.push({name: name, todo: todo});
          $('#ToDoInput').val('');
        }
      });