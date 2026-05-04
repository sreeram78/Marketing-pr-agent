const BASE = "http://localhost:5000/api";

export async function fetchPRs() {
  return fetch(`${BASE}/prs`).then(res => res.json());
}

export async function fetchVariance() {
  return fetch(`${BASE}/finance/variance`).then(res => res.json());
}

export async function fetchForecast() {
  return fetch(`${BASE}/finance/forecast`).then(res => res.json());
}