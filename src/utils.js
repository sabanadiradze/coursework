import axios from "axios";

export async function loginStatus() {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return false;
  }

  try {
    const response = await axios.post(
      "http://localhost:3000/verifyToken",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.status === 200;
  } catch (error) {
    console.error("Token validation failed:", error);
    return false;
  }
}

export function handleLogout() {
  console.log("Logging out");
  localStorage.removeItem("authToken");
  location.reload();
}
