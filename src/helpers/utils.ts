export const fixString = () => {
    return "";
};

export const isString = (value: any) => {
    return typeof value === "string";
};
export const getTimeFormat = (time: number) => {
    const m = parseInt(`${time / 1000 / 60}`);
    const s = Math.floor(time / 1000) % 60;
    return `0${m}:${s < 10 ? `0${s}` : s}`;
};

export const formatTime = (time: number) => {
    const hours = parseInt(`${time / 3600}`);
    const minutes = parseInt(`${time / 60}`) % 60;
    const s = parseInt(`${time % 60}`);
    if (hours)
        return `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes
        }:${s < 10 ? `0${s}` : s}`;
    else
        return `${minutes < 10 ? `0${minutes}` : minutes}:${
            s < 10 ? `0${s}` : s
        }`;
};

export const capitalizeString = (text: string) => {
    const st = text?.charAt(0).toUpperCase() + text?.slice(1, text?.length);
    return st;
};
