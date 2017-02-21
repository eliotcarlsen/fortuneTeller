$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var totalLuck = 0
    $("input:checkbox[name=luck]:checked").each(function(){
      totalLuck += parseInt($(this).val());
    });
    console.log(totalLuck);
    $("input:checkbox[name=unluck]:checked").each(function(){
      totalLuck += parseInt($(this).val());
    });
    console.log(totalLuck);

    if (totalLuck > 0){
      alert("you've got some luck!")
    } else if (totalLuck === 0){
      alert("at least you're not unlucky");
    } else {
      alert("careful out there, you might meet your final destination.");
    };
  });
});
