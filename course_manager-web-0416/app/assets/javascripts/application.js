//= require jquery
//= require jquery_ujs
//= require turbolinks

$(document).on('ready', function(){
  $('li .details').hide()

  $('form#new_course').on('submit', function(event){
    event.preventDefault()
    var courseName = $(this).find("#course_name").val()
    var courseDetails = $(this).find("#course_details").val()
    var $li = $(courseToListItem(courseName, courseDetails))
    $li.appendTo("ul.courses").find('.details').hide()
    $(this).trigger('reset')
  })

  // $('li.course').on('click', function(){
  $('ul.courses').on('click', 'li.course', function(){
    $(this).find(".details").slideToggle();
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
