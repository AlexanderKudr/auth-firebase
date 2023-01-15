import * as dotenv from "dotenv";
dotenv.config();

export const apiKey = process.env.VITE_API_KEY;
export const authDomain = process.env.VITE_AUTH_DOMAIN;
export const projectId = process.env.VITE_PROJECT_ID;
export const storageBucket = process.env.STORAGE_BUCKET;
export const messagingSenderId = process.env.MESSAGING_SENDER_ID;
export const appId = process.env.VITE_APP_ID;
export const measurementId = process.env.VITE_MEASUREMENT_ID;
