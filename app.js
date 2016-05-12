$(document).on('ready', function(){
  $('li .details').hide()
  $('li.course').on('click', function(){
    $(this).find(".details").slideToggle(1000);
  })
  $('form#new_course').on('submit', function(event){
    event.preventDefault()
    var courseName = $(this).find("#course_name").val()
    var courseDetails = $(this).find("#course_details").val()
    $("ul.courses").append(courseToListItem(courseName, courseDetails))
    // $(this).reset()
    $(this).find("#course_name").val("")
    $(this).find("#course_details").val("")
    // $(this).trigger('reset')
  })
})

function courseToListItem(courseName, courseDetails) {
  return `<li class="course">
        ${courseName}
        <div class='details'>
          ${courseDetails}
        </div>
      </li>`
}
