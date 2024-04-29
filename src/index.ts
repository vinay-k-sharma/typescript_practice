type Task = {
  title : string,
  completed : boolean,
  created_at : Date
}

const list  = document.querySelector<HTMLUListElement>('#list')

const form  = document.getElementById('form') as HTMLFormElement | null

const input = document.querySelector<HTMLInputElement>('#input')

const tasks : Task[] = loadTask()
tasks.forEach(addList)
form?.addEventListener('submit',e => {
  e.preventDefault()

  if(input?.value=='' || input?.value==null) return

  const task: Task = {
    title: input.value,
    completed: true,
    created_at : new Date()
  }
  tasks.push(task)
  save()
  addList(task)
  input.value=''
})

function addList(task: Task){
      const item = document.createElement('li')
      const label = document.createElement('label')
      const checkbox = document.createElement('input')
      checkbox.type='checkbox'
      checkbox.addEventListener('change',() => {
        task.completed = checkbox.checked
        save()
      })
      checkbox.checked=task.completed
      label.append(checkbox,task.title)
      item.append(label)
      list?.append(item)
}
function save() {
  localStorage.setItem('task',JSON.stringify(tasks))
}
function loadTask() : Task[] {
const taskJson = localStorage.getItem('task')
if(taskJson== null) return []
return JSON.parse(taskJson)
}