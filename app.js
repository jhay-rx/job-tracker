document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('#application-form')
    form.addEventListener('submit',(event)=>{
        event.preventDefault()
        const formData = new FormData(form)
        console.log(formData)    
    })
})