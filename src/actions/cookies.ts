"use server";

import { cookies } from "next/headers";

export const setCookieByKey = async (key: string, value: string) => {
    const cookieStore = await cookies();
    cookieStore.set(key, value);
};

export const getCookieByKey = async (key: string) => {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(key);
    return cookie ? cookie.value : null;
};

export const deleteCookieByKey = async (key: string) => {
    const cookieStore = await cookies();
    cookieStore.delete(key);
};

export const getAllCookies = async () => {
    const cookieStore = await cookies();
    const allCookies: Record<string, string> = {};
    cookieStore.getAll().forEach((cookie) => {
        allCookies[cookie.name] = cookie.value;
    });

    return allCookies;
};