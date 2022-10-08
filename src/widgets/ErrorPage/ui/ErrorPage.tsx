import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}
export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            {t('Произошла непредвиденная ошибка')}
            <button type="button" onClick={reloadPage}>
                {t('Обновить страницу')}
            </button>
        </div>
    );
};
