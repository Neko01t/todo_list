let elements = []
let idELE = 0
let idarry = [0]
let time = new Date()

document.addEventListener('DOMContentLoaded', e => {
    document.getElementById('textare').addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault()
            logAndPublish()

        }
    })
    const todo_list = document.querySelector('.texrex')
    document.getElementById('publish').addEventListener('click', logAndPublish);
    // document.getElementById('element_delete').addEventListener('click', deletetoo);
    function logAndPublish() {
        const value = document.getElementById('textare').value
        if (value.trim() === '') return;
        //debug and test logs
        elements.push(value)
        console.log(idELE)
        console.log(value)

        //create element that holds the text
        let div = document.createElement('div')
        div.id = idELE
        div.className = "Todo_element"

        //create delete button tht goes inside div
        let deletebtn = document.createElement('button')
        deletebtn.className = "element_delete"

        // Add the content of the todo
        let content = document.createElement('span');
        content.textContent = value;
        div.appendChild(content);

        //div block 
        let divsep = document.createElement('div')
        div.appendChild(divsep)

        //add checkbox
        let checkboz = document.createElement('input')
        checkboz.type = 'checkbox'
        checkboz.id = 'checkf'
        divsep.appendChild(checkboz)

        //set time 
        let divtime = document.getElementsByClassName('time')
        divtime.textContent = time.toLocaleDateString()

        // set valueinsde and append
        deletebtn.textContent = "x"
        divsep.appendChild(deletebtn)
        todo_list.appendChild(div)

        // increase id 
        idELE += 1

        //still not wotking things 
        todo_list.scrollTop = todo_list.scrollHeight;
        idarry.push(idELE)

        //reset the inside thingy
        document.getElementById('textare').value = '';

    }
    // console.log(idarry)
})

setInterval(() => {
    for (let i = 0; i < idarry.length; i++) {
        let tempgrab = document.getElementById(`${i}`)
        // console.log(tempgrab);
        tempgrab.lastChild.lastChild.addEventListener('click', () => {
            tempgrab.remove()
        })
    }

}, 1000);