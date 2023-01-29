const baseUrl = 'https://crudcrud.com/api/06c54258206b41e5ada127d0fd2d724a/tasks';

const mapTasks = (({ _id, ...rest }) => tasks.map((task) => ({ ...rest, id: _id })));

export const getTasksList = () => fetch(baseUrl).then((response) => response.json()).then((tasks) => tasks.map((task) => mapTasks(task)));

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});
export const updateTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
