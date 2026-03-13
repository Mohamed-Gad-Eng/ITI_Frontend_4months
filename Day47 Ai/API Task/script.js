const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const themeToggle = document.getElementById("themeToggle");

// Conversation history to send to the backend
const conversation = [
  {
    role: "system",
    content: "You are a helpful AI assistant.",
  },
];

function appendMessage({ text, sender = "bot", isThinking = false }) {
  const row = document.createElement("div");
  row.className = `message-row ${sender}`;

  const avatar = document.createElement("div");
  avatar.className = `avatar ${sender}`;
  avatar.textContent = sender === "user" ? "🙂" : "🤖";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";

  if (isThinking) {
    const typing = document.createElement("div");
    typing.className = "typing-indicator";
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("span");
      dot.className = "typing-dot";
      typing.appendChild(dot);
    }
    bubble.appendChild(typing);
  } else {
    bubble.textContent = text;
  }

  const meta = document.createElement("div");
  meta.className = "message-meta";
  const roleLabel = document.createElement("span");
  roleLabel.textContent = sender === "user" ? "You" : "AI";
  const timeLabel = document.createElement("span");
  timeLabel.textContent = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  meta.appendChild(roleLabel);
  meta.appendChild(timeLabel);

  bubble.appendChild(meta);

  row.appendChild(sender === "user" ? bubble : avatar);
  row.appendChild(sender === "user" ? avatar : bubble);

  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  return row;
}

function setLoading(isLoading) {
  sendButton.disabled = isLoading;
  sendButton.innerHTML = isLoading ? "Thinking…" : "<span>Send</span>";
}

async function sendToServer(userText, thinkingRow) {
  conversation.push({ role: "user", content: userText });

  try {
    const response = await fetch("http://localhost:3001/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: conversation }),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();
    const aiText = data.message || "The server returned an empty response.";

    conversation.push({ role: "assistant", content: aiText });

    const bubble = thinkingRow.querySelector(".message-bubble");
    bubble.innerHTML = "";
    bubble.textContent = aiText;

    const meta = document.createElement("div");
    meta.className = "message-meta";
    const roleLabel = document.createElement("span");
    roleLabel.textContent = "AI";
    const timeLabel = document.createElement("span");
    timeLabel.textContent = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    meta.appendChild(roleLabel);
    meta.appendChild(timeLabel);
    bubble.appendChild(meta);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (error) {
    console.error(error);
    const bubble = thinkingRow.querySelector(".message-bubble");
    bubble.innerHTML = "";
    bubble.textContent =
      "Sorry, I couldn’t reach the server. Please make sure it’s running and try again.";

    const meta = document.createElement("div");
    meta.className = "message-meta";
    const roleLabel = document.createElement("span");
    roleLabel.textContent = "AI";
    const timeLabel = document.createElement("span");
    timeLabel.textContent = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    meta.appendChild(roleLabel);
    meta.appendChild(timeLabel);
    bubble.appendChild(meta);
  } finally {
    setLoading(false);
  }
}

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;

  appendMessage({ text, sender: "user" });
  userInput.value = "";
  autoResizeTextarea();

  setLoading(true);
  const thinkingRow = appendMessage({ text: "", sender: "bot", isThinking: true });

  await sendToServer(text, thinkingRow);
});

function autoResizeTextarea() {
  userInput.style.height = "auto";
  userInput.style.height = `${Math.min(userInput.scrollHeight, 96)}px`;
}

userInput.addEventListener("input", autoResizeTextarea);

function loadTheme() {
  const stored = localStorage.getItem("chat-theme");
  if (stored === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

function toggleTheme() {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("chat-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("chat-theme", "light");
  }
}

loadTheme();

themeToggle.addEventListener("click", toggleTheme);

appendMessage({
  text: "Welcome! I’m your AI chat assistant. Ask me anything to get started.",
  sender: "bot",
});
