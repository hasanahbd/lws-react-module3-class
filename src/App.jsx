import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import { useReducer } from 'react';
import TaskReducer from './reducers/TaskReducer.js';

export default function TaskApp() {
  const [tasks, TaskDispatch] = useReducer(TaskReducer, initialTasks);
  function handleAddTask(text) {
    TaskDispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    TaskDispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    TaskDispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
