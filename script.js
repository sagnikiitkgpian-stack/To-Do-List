let text;
let html;
let counter = 0;

document.querySelector('.add').addEventListener('click', ()=>
{
    text = document.querySelector('#inputBox').value;
    if(!text)
        alert('Empty!');
    else
    {
        html = 
        `
            <div class = "task task${++counter}">
                <span class="taskText">  ${text}  </span>
                <button class="clear" data-counter = ${counter}> 
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>

            <div class = "separator separator${counter}"> </div>

        `;
        document.querySelector('.taskDiv').innerHTML += html;
    }
});


document.querySelector('.taskDiv').addEventListener('click', (event) => {
    if (event.target.classList.contains('clear')) {
        console.log('no');
        const taskNum = event.target.dataset.counter;
        document.querySelector(`.task${taskNum}`).remove();
        document.querySelector(`.separator${taskNum}`).remove();
    }
    else if(event.target.classList.contains('taskText')) {
        event.target.classList.toggle('strike');
    }
});
