 var myDataRef = new Firebase('https://popping-heat-1392.firebaseio.com/');
 $('#ToDoInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#ToDoInput').val();
          myDataRef.set('User ' + name + ' says ' + text);
          $('#ToDoInput').val('');
        }
      });