let tasks = []

document.getElementById('salvar').addEventListener('click', () => {
    const text = document.getElementById('input-task').value
    const container = document.getElementById('container')

    if(text.trim().length === 0){
        return;
    }

    tasks.push(text)
    localStorage.setItem("tasks", JSON.stringify(tasks))

    container.innerHTML += `<p>${text} <button onclick="excluir(this)" id="excluir">Excluir</button></p>`
})

function excluir(elem) {
    elem.parentNode.remove()
    const text = elem.parentNode.textContent.replace(' Excluir', '')
    const filter = tasks.filter(task => task != text)
    tasks = filter
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(filter)
}

function init(){
    const localTasks = JSON.parse(localStorage.getItem('tasks'))
    tasks = localTasks
    buildTasks()
}

function buildTasks(){
    const container = document.getElementById('container')
    if(!tasks){
        tasks = []
    }
    tasks.forEach(text => {
        container.innerHTML += `<p>${text} <button onclick="excluir(this)" id="excluir">Excluir</button></p>`
    }) 
}
init()