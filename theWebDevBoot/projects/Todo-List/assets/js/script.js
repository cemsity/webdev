// check of todos by clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("complete")
});

// click on x to delete todo
$("ul").on("click", "span", function(event) {
   $(this).parent().fadeOut(300, function(){
      $(this).remove();
   });
   event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
   if(event.which === 13){
      var todoText = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-trash'></span></i> "+todoText+"</li>")
   }
});
$(".fa-plus").on("click", function(){
   $("input[type='text']").fadeToggle();
});
