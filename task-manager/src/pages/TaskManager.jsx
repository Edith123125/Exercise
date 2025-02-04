import React, { useState } from "react";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskManager;
