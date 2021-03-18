const tasks = [{
  _id: 0,
  title: 'Get up early!',
  description: 'Get up early description, Get up early description... Get up early description',
  completed: false
}, {
  _id: 1,
  title: 'Do exercise!',
  description: 'Do exercise description, Do exercise description... Do exercise description',
  completed: false
}, {
  _id: 2,
  title: 'To Work!',
  description: 'To Work description, To Work description... To Work description',
  completed: false
}, {
  _id: 3,
  title: 'Dev training!',
  description: 'Dev training description, Dev training description... Dev training description',
  completed: false
}];

const createTask = (id, newTask) => {
  const elementToAdd = {
    _id: id,
    ...newTask
  };
  tasks.push(elementToAdd);
  return elementToAdd;
};

export const tasksHandler = {
  getTasks: () => tasks,
  createTask: (newTask) => createTask(tasks.length, newTask)
}
