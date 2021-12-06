import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWE1YmU4MWE5YmRhMTBiNTY0YTY0ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODc3MjA2NSwiZXhwIjoxNjM5MDMxMjY1fQ.zU6V7BG5wuFbXR7XdbtMLNlFn1pYvVdFVsv4M75-u2A";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
  });
