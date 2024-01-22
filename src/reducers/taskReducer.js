export default function TaskReducer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
          id: action.id,
          text: action.text,
          done: false,
        });
        break;
    }
    case "changed": {
      const indexToFind = draft.findIndex((t) => t.id === action.task.id);
      draft[indexToFind]=action.task;
      break;
    }
    case "deleted": {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw new Error("Unhandled action type: ${action.type}");
    }
  }
  
}
