import { useEffect, useState } from "react";
import { fetchBackendMessage } from "./api/api";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetchBackendMessage()
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Backend Message:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;