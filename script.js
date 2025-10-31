let reservations = JSON.parse(localStorage.getItem('reservations') || '[]');

function updateList() {
  const list = document.getElementById('list');
  list.innerHTML = "";
  reservations.forEach((r, i) => {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${r.username}`;
    list.appendChild(li);
  });
  localStorage.setItem('reservations', JSON.stringify(reservations));
}

function reserve() {
  const username = document.getElementById('username').value.trim();
  if (username === "") return alert("ユーザー名を入力してください！");
  if (reservations.some(r => r.username === username)) {
    return alert("すでに予約されています！");
  }
  reservations.push({ username });
  updateList();
}

function cancel() {
  const username = document.getElementById('username').value.trim();
  reservations = reservations.filter(r => r.username !== username);
  updateList();
}

updateList();
