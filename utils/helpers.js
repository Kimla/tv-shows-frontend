/* eslint-disable */
import { baseUrl } from './config';

export function makeUrlRelative(url) {
    return url.replace(baseUrl, '');
}

export function excerpt(string, maxLength = 200) {
    if (string.length > maxLength) {
        return `${string.substring(0, maxLength)}...`;
    }

    return string;
}

export function getBaseUrl(isDev) {
    return isDev ? 'http://localhost:3000' : baseUrl;
}

export function fixJsonPath(path) {
    path = path.replace(/\//g, '-_-');
    path = path.replace(/\\/g, '-_-');
    if (path.length > 4 && path.substr(path.length - 3) === '-_-') {
        path = path.substring(0, path.length - 3);
    }
    return path;
}
