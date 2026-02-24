const API_BASE = "http://localhost:8000";

/* ---------------- GET ---------------- */
export const fetchBackendMessage = async () => {
  const response = await fetch(`${API_BASE}/`);
  return response.json();
};

/* ---------------- AUTH ---------------- */
export const loginUser = async (data: any) => {
  const response = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const registerUser = async (data: any) => {
  const response = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

/* ---------------- REPORT ---------------- */
export const generateReport = async (data: any) => {
  const response = await fetch(`${API_BASE}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};