/* global idb */

const DB_NAME = 'TodoDB';
const DB_VERSION = 1;
const STORE_TASKS = 'tasks';

let dbPromise;

function $(id) {
  return document.getElementById(id);
}

function setMessage(message) {
  $("message").textContent = message;
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function monthName(monthNumber) {
  const names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return names[monthNumber - 1] ?? String(monthNumber);
}

function buildSelectOptions() {
  // Day: 1..31
  for (let day = 1; day <= 31; day++) {
    const opt = document.createElement('option');
    opt.value = String(day);
    opt.textContent = pad2(day);
    $('day').appendChild(opt);
  }

  // Month: 1..12
  for (let month = 1; month <= 12; month++) {
    const opt = document.createElement('option');
    opt.value = String(month);
    opt.textContent = monthName(month);
    $('month').appendChild(opt);
  }

  // Year: current..current+10
  const now = new Date();
  const startYear = now.getFullYear();
  const endYear = startYear + 10;
  for (let year = startYear; year <= endYear; year++) {
    const opt = document.createElement('option');
    opt.value = String(year);
    opt.textContent = String(year);
    $('year').appendChild(opt);
  }

  // Default selections = today
  $('day').value = String(now.getDate());
  $('month').value = String(now.getMonth() + 1);
  $('year').value = String(now.getFullYear());
}

function initDb() {
  dbPromise = idb.open(DB_NAME, DB_VERSION, (upgradeDB) => {
    if (!upgradeDB.objectStoreNames.contains(STORE_TASKS)) {
      const store = upgradeDB.createObjectStore(STORE_TASKS, {
        keyPath: 'id',
        autoIncrement: true
      });
      store.createIndex('createdAt', 'createdAt');
      store.createIndex('dueAt', 'dueAt');
    }
  });
}

function readFormTask() {
  const title = $('title').value.trim();
  const hours = Number($('hours').value);
  const mins = Number($('mins').value);
  const day = Number($('day').value);
  const month = Number($('month').value);
  const year = Number($('year').value);

  if (!title) {
    throw new Error('Task title is required');
  }
  if (!Number.isFinite(hours) || hours < 0) {
    throw new Error('Hours must be 0 or more');
  }
  if (!Number.isFinite(mins) || mins < 0 || mins > 59) {
    throw new Error('Mins must be between 0 and 59');
  }

  // Use local time.
  const dueAt = new Date(year, month - 1, day, hours, mins, 0, 0).getTime();

  return {
    title,
    hours,
    mins,
    day,
    month,
    year,
    dueAt,
    createdAt: Date.now()
  };
}

async function addTask(task) {
  const db = await dbPromise;
  const tx = db.transaction(STORE_TASKS, 'readwrite');
  await tx.objectStore(STORE_TASKS).add(task);
  await tx.complete;
}

async function getAllTasks() {
  const db = await dbPromise;
  const tx = db.transaction(STORE_TASKS, 'readonly');
  const tasks = await tx.objectStore(STORE_TASKS).getAll();
  await tx.complete;
  return tasks;
}

async function deleteTaskById(id) {
  const db = await dbPromise;
  const tx = db.transaction(STORE_TASKS, 'readwrite');
  await tx.objectStore(STORE_TASKS).delete(id);
  await tx.complete;
}

function renderTasks(tasks) {
  const list = $('taskList');
  list.innerHTML = '';

  if (!tasks.length) {
    const li = document.createElement('li');
    li.textContent = 'No tasks yet.';
    list.appendChild(li);
    return;
  }

  // Simple ordering: newest first.
  tasks.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));

  for (const task of tasks) {
    const due = new Date(task.dueAt);
    const li = document.createElement('li');
    li.className = 'todoItem';

    const text = document.createElement('span');
    text.className = 'todoText';
    text.textContent = `${task.title} — ${pad2(due.getDate())}/${pad2(
      due.getMonth() + 1
    )}/${due.getFullYear()} ${pad2(due.getHours())}:${pad2(due.getMinutes())}`;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Delete';
    btn.addEventListener('click', async () => {
      try {
        if (typeof task.id !== 'number') {
          throw new Error('Cannot delete: missing id');
        }
        await deleteTaskById(task.id);
        setMessage('Deleted.');
        await refreshList();
      } catch (err) {
        setMessage(err instanceof Error ? err.message : String(err));
      }
    });

    li.appendChild(text);
    li.appendChild(btn);
    list.appendChild(li);
  }
}

async function refreshList() {
  const tasks = await getAllTasks();
  renderTasks(tasks);
}

async function onSubmit(event) {
  event.preventDefault();

  try {
    const task = readFormTask();
    await addTask(task);
    setMessage('Saved.');

    // Clear title only (keep date/time selections).
    $('title').value = '';
    $('title').focus();

    await refreshList();
  } catch (err) {
    setMessage(err instanceof Error ? err.message : String(err));
  }
}

async function start() {
  buildSelectOptions();
  initDb();

  try {
    await dbPromise;
    setMessage('');
    await refreshList();
  } catch (err) {
    setMessage(err instanceof Error ? err.message : String(err));
  }

  $('taskForm').addEventListener('submit', onSubmit);
}

document.addEventListener('DOMContentLoaded', () => {
  // Fire-and-forget; errors are handled inside start().
  void start();
});
