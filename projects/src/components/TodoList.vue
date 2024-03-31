<template>
  <div class="todo-list">
    <h1>TodoList</h1>

    <div class="input-section">
      <input
        type="text"
        placeholder="Enter task"
        @keyup.enter="addTask"
        v-model="newTask"
      />
      <button @click.prevent="addTask">Add</button>
    </div>

    <div>
      <ul v-for="(task, index) in taskList" :key="index" class="task-item">
        <li>{{ task }}</li>
        <button @click.prevent="removeTask(index)" class="remove-button">Remove</button>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newTask = ref("");
const taskList = ref([]);

function addTask() {
  if (newTask.value.trim() !== "") {
    taskList.value.push(newTask.value);
    newTask.value = "";
  }
}

function removeTask(index) {
  taskList.value.splice(index, 1);
}
</script>

<style scoped>
.todo-list {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-section {
  margin-bottom: 10px;
}

.input-section input[type="text"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-section button {
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.input-section button:hover {
  background-color: #0056b3;
}

.task-item {
  margin-bottom: 8px;
}

.remove-button {
  padding: 4px 8px;
  border: none;
  background-color: #dc3545;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #c82333;
}
</style>
