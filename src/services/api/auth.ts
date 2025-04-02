import axios, {AxiosResponse} from "axios";
import {baseUrl, emailVerifyUrl, loginUrl, registerUrl, tokenRefreshUrl, tokenVerifyUrl} from "./urls";
import {deleteCookie, getCookie, setCookie} from "../../utils/auth";

export const apiInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    }
})

export async function register(email: string, username: string, password: string): Promise<AxiosResponse> {
    const result = await apiInstance.post(registerUrl, {
        username: username,
        email: email,
        password: password,
        password2: password,
    })

    console.log("Registration response: ")
    console.log(result)


    return result
}

export async function isValidToken() {
    return await apiInstance.post(tokenVerifyUrl, {
        token: getCookie("token"),
    })
}

export async function refreshToken() {
    const refresh = getCookie("refresh")
    const result = await apiInstance.post(tokenRefreshUrl, {
        refresh: refresh,
    })

    setCookie("token", result.data.access, 1)
    apiInstance.defaults.headers.common.Authorization = `Bearer ${result.data.access}`

    return result
}

export async function logout() {
    deleteCookie("token")
    deleteCookie("refresh")
    apiInstance.defaults.headers.common.Authorization = undefined
}

export async function login(username: string, password: string): Promise<AxiosResponse> {
    const result = await apiInstance.post(loginUrl, {
        username: username,
        password: password,
    })

    console.log("Login response: ")
    console.log(result)

    return result
}

export async function verifyEmail(token: string): Promise<AxiosResponse> {
    return await apiInstance.get(emailVerifyUrl + "?token=" + token)
}