import axios from "axios";
import {
	BASE_URL,
	CREATE_USERS_ENDPOINT,
	LOGIN_ENDPOINT,
	REGISTRATION_ENDPOINT,
	REGISTRATION_TO_APPROVE_ENDPOINT,
	USER_REGISTRATION_ENDPOINT,
	RESEARCH_ENDPOINT,
	WORKSHOPCALL_ENDPOINT,
	WORKSHOP_ENDPOINT,
} from "../../config";
import SessionManagement from "../session/SessionManagement";

// request interceptor to add the auth token header to requests
axios.interceptors.request.use(
	(config) =>
	{
		const localData = JSON.parse(SessionManagement.GetSession());

		if (!localData) return config;

		const accessToken = localData.token;

		if (accessToken)
		{
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	(error) =>
	{
		Promise.reject(error);
	},
);

axios.interceptors.response.use(
	(response) => response,
	(error) =>
	{
		// debugger;
		const originalRequest = error.config;

		// skip login 401
		if (originalRequest.url.includes('api/v1/auth'))
		{
			return Promise.reject(error);
		}

		const localData = JSON.parse(SessionManagement.GetSession());

		if (!localData) return Promise.reject(error.data ? error.data : error);

		const { refreshToken } = localData;

		if (
			refreshToken
            && error.response.status === 401
            && !originalRequest._retry
		)
		{
			originalRequest._retry = true;

			return axios
				.post(`${BASE_URL}v1/auth/refresh-token`, { refreshToken })
				.then((res) =>
				{
					if (res.status === 200)
					{
						const tokenObj = {
							token        : res.data.data.token,
							refreshToken : res.data.data.refreshToken.token,
						};

						SessionManagement.SetSession(tokenObj);

						console.info("Access token refreshed!");

						return axios(originalRequest);
					}

					console.log("api call 401");

					return null;
				}).catch(() =>
				{
					window.location.replace('/login');
				});
		}

		return Promise.reject(error);
	},
);

const communicationService = {
	login	: (body, onSuccess, onError) => axios.post(LOGIN_ENDPOINT, body)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	registrationCreate	: (body, onSuccess, onError) => axios.post(REGISTRATION_ENDPOINT, body)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	registrationGet	: (body, onSuccess, onError) => axios
		.get(REGISTRATION_ENDPOINT)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	workshopCallGet	: (body, onSuccess, onError) => axios
		.get(WORKSHOPCALL_ENDPOINT)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	registrationGetToBeApproved	: (body, onSuccess, onError) => axios
		.get(REGISTRATION_TO_APPROVE_ENDPOINT)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	registrationApprove	: (body, onSuccess, onError) => axios.put(REGISTRATION_ENDPOINT, body)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),

	createUser : (body, onSuccess, onError) => axios
		.post(`${CREATE_USERS_ENDPOINT}user`, body)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	createReviewer : (body, onSuccess, onError) => axios
		.post(`${CREATE_USERS_ENDPOINT}reviewer`, body)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	createEditor : (body, onSuccess, onError) => axios
		.post(`${CREATE_USERS_ENDPOINT}editor`, body)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	createAdmin : (body, onSuccess, onError) => axios
		.post(`${CREATE_USERS_ENDPOINT}admin`, body),

	registerUser : (body, onSuccess, onError) => axios.post(USER_REGISTRATION_ENDPOINT, body, {
		headers : {
			'Content-Type' : 'multipart/form-data',
		} })
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),

	researchUpload : (body, onSuccess, onError) => axios.post(
		RESEARCH_ENDPOINT, body, {
			headers : {
				'Content-Type' : 'multipart/form-data',
			} },
	)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),

	getResearch : (body, onSuccess, onError) => axios.get(
		RESEARCH_ENDPOINT, body,
	)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	approveResearch : (body, onSuccess, onError) => axios.put(
		RESEARCH_ENDPOINT, body,
	)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
	rejectResearch : (body, onSuccess, onError) => axios.delete(
		`${RESEARCH_ENDPOINT}?id=${body}`, null,
	)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),

	workshopUpload : (body, onSuccess, onError) => axios.post(
		WORKSHOP_ENDPOINT, body, {
			headers : {
				'Content-Type' : 'multipart/form-data',
			} },
	)
		.then((response) => onSuccess(response))
		.catch((error) => onError(error.response ?? error.request ?? error)),
};

export default communicationService;
