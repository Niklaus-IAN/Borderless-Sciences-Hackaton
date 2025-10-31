// import { API_BASE_URL } from "@/lib/config";

export const fetcher = async (path: string, options?: RequestInit) => {
  const res = await fetch(`https://borderlessagent-bor-agent.up.railway.app${path}`, options);
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status}`);
  }
  return res.json();
};
