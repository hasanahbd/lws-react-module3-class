export default function TaskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      const task = action.task;
      return [
        tasks.map((t) => {
          if (t.id === task.id) {
            return task;
          } else {
            return t;
          }
        }),
      ];
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw new Error("Unhandled action type: ${action.type}");
    }
  }
  
}
