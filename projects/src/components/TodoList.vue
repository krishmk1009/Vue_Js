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

<template>
  <div>
    <h1>TodoList</h1>

    <div>
      <!-- Removed : before v-for -->
      <input
        type="text"
        placeholder="enter task"
        @keyup.enter="addTask"
        v-model="newTask"
      />
      <button @click.prevent="addTask">Add</button>
    </div>

    <div>
      <!-- Removed : before v-for and added :key="index" -->
      <ul v-for="(task, index) in taskList" :key="index">
        <li>{{ task }}</li>
        <button @click.prevent="removeTask(index)">Remove</button>
      </ul>
    </div>
  </div>
</template>
