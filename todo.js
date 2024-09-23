$(document).ready(function(){

    $('#add').on('click',function(event){
        event.preventDefault();
        console.log("clicked"+$('#ip').val())
        if($('#ip').val().trim() != ""){
            $('#list').append(`<div class="list-item" >
            <p>${$('#ip').val()}</p> 
            <div class="buttons">
                <button class="done"><i class="fa-solid fa-check"></i></button>
                <button class="delete"><i class="fa-solid fa-trash"></i></button>
                
                
            </div>
        </div>`);
        }
        
        $('#ip').val('');
        
    })

    $('#list').on('click', '.done', function(event) {
        event.preventDefault();

        let value = $(this).closest('.list-item').find('p').css('text-decoration-line');

        let n = value==='line-through' ? 'none' : 'line-through' ;

        $(this).closest('.list-item').find('p').css('text-decoration-line',n)
        
    })

    $('#list').on('click', '.delete', function(event) {
        event.preventDefault();

        $(this).closest('.list-item').remove();
        
    })


   
    


})

