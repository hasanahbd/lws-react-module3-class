import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import TaskReducer from './reducers/TaskReducer.js';
import {  useImmerReducer } from 'use-immer';

export default function TaskApp() {
  const [tasks, taskDispatch] = useImmerReducer(TaskReducer, initialTasks);
  function handleAddTask(text) {
    taskDispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    taskDispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    taskDispatch({
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
