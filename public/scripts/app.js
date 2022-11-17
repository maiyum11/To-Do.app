/* SPA -- Client site */
(function(){
    function Start()
    {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll('.bth-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/tasks');
                }
            });
        }
    }
    window.addEventListener("load", Start);

  
})();