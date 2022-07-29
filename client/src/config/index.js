// apiConfig url
export const SERVER_URL = 'http://localhost:5000/';
export const BASE_URL = 'http://localhost:5000/api/';

// Encryption secret key
export const SECRET_KEY = 'cbM2vLOTDUsdasdewaffsdf54s5d1f5e4sR';

// local storage identification
export const IDENTIFICATION_STORAGE = '548415148453168625468465686';

// API end-points
export const LOGIN_ENDPOINT = `${BASE_URL}v1/auth`;
export const REGISTRATION_ENDPOINT = `${BASE_URL}v1/registration`;
export const WORKSHOPCALL_ENDPOINT = `${BASE_URL}v1/workshopCall`;
export const REGISTRATION_TO_APPROVE_ENDPOINT = `${REGISTRATION_ENDPOINT}/edit`;
export const CREATE_USERS_ENDPOINT = `${BASE_URL}v1/user/create/`;
export const USER_REGISTRATION_ENDPOINT = `${BASE_URL}v1/user/create/user`;
export const RESEARCH_ENDPOINT = `${BASE_URL}v1/research`;
export const WORKSHOP_ENDPOINT = `${BASE_URL}v1/workshopPublish`;
