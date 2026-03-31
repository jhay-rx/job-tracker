// event listener that waits for HTML document to be completely loaded and parsed
document.addEventListener('DOMContentLoaded', ()=>{

    // after HTML document is loaded and parsed get the form from html
    const form = document.querySelector('#application-form')

    // when submit button is clicked/pressed 
    form.addEventListener('submit',(event)=>{
        event.preventDefault()

        //store data from the form to a FormData obj
        const formData = new FormData(form)

        // this display the content of formData to the console
        console.log(formData)    
    })
})