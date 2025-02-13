<script>
function showSection(sectionId) {
  let sections = document.querySelectorAll('.section-container');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("*").dblclick(function(){
    $(this).effect( "fade in", { times:5 }, 300 );
  });
});
</script>
