console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

  $('#guess-number-form').on('submit', function(event) {
    event.preventDefault();
    var checkNum = 'http://localhost:3000/pickanumber?' + $(this).serialize();
    $.ajax({
      method: 'GET',
      url: checkNum,
      success: onSuccess,
      error: onError,
      complete: console.log('Done')
    })
  });

  $('#target-number-form').on('submit', function(event) {
    event.preventDefault();
    var changeNum = 'http://localhost:3000/pick-a-number?' + $(this).serialize();
    $.ajax({
      method: 'POST',
      url: changeNum,
      success: onChangeNumSuccess,
      error: onError,
      complete: console.log('Change done')
    })
  });

});

function onSuccess(data) {
  $('#high-low-correct').text(data);
}

function onChangeNumSuccess(data) {
  console.log(data);
}

function onError(xhr, status, errorThrown) {
  console.log('Error');
}