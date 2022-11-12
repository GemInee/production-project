import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // Задержка для локального дев сервера, на проде убрать.
        setTimeout(() => resolve(import('./AboutPage')), 1500);
    }),
);
