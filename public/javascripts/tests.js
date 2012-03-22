function basicTest(){
  clearConsole();
  var totTime = 0;
  var n = findN('basicTest'); // 100
  var high = 0;
  var low = 60000;

  // do ajax query x times
  for(var i=0;i<n;i=i+1){
    // start timer
    var beg = new Date().getTime();
    doAjaxReq('/tests/bool');

    var end = new Date().getTime();
    var time = end - beg;
    writeLine(time);
    totTime = totTime + time;
    if(time > high){high = time;}
    if(time < low ){low = time;}
    // todo: Generate list of times and do STD DEV calculations after
  }
  

  var avg = totTime / n;
  var variance = high - low;
  var sigma = 0;
  writeLine('Avg:  ' + avg);
  $('#average').html(avg);
  $('#high').html(high);
  $('#low').html(low);
  $('#variance').html(variance);
  $('#sigma').html(sigma);  // std deviation
}

function clearConsole(){
  $('#displayWindow').html('');
}

function writeLine(text){
  $('#testWindow').append('<br>' + text);
}

function doAjaxReq(url){
  $.ajaxSetup({ async: false });

  var jqxhr = $.ajax( url )
    .fail(function(){alert('something is wrong'); });
  
  return;
}

// TODO:  Calculate what the proper sample size should be for the 
// environment
function findN(test){
  return 100;
}
