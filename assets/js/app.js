import '../scss/app.scss'



var myP = new pageElement("#container",{x:200,opacity:0},{x:0, opacity:1},1,'Back.easeOut');
myP.transition('on');

$('#reverse').on('click', function(){  myP.transition('off')  });
