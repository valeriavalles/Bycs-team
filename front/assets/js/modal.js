$('.nav-link').on('click', function(){
    var $this_link = $(this)
  
    console.log($this_link)
    $('.nav-link').removeClass('active-link')
    $(this).addClass('active-link')
  
  })
  
    console.log('dsadas')