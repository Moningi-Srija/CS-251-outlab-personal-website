document.getElementById('submitbtn').onclick=function()
{    
    let checkboxes = document.getElementsByClassName('form-check-input');
       
    var selected_id_list = [];

    for(el of checkboxes)
    {
        if(el.checked == true){
            selected_id_list.push(el.getAttribute('id'));
        }             
    }

    if(selected_id_list.length!=0)
    {
        if(confirm("These are the selected options: \n" + selected_id_list + "\nClick ok if you want to continue\nelse click cancel to make any changes"))
        {
            for(el of selected_id_list)
            {
                document.getElementById(el.concat("-abt")).style.display = "block";
            }
        }
    }

        else
        {
            alert("Please select any checkbox to know more")
        }
}

