$(function() {
  var $chapterList = $(document.createElement('ul'));
  
  $('.chapter').each(function(i, chapterTitle){
    var $chapterTitle = $(chapterTitle);
    
    var $indexItem = $(document.createElement('li'));
    $chapterList.append($indexItem);
    
    var $link = $(document.createElement('a'));
    $link.html( $chapterTitle.html() );
    $link.attr('href', '#'+ $chapterTitle.attr('id'));    
    $indexItem.append($link);
  });
  
  $('#chapter_index #list').append($chapterList);  
});