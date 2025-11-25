import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('main_page')}
        </Page>
    );
};

export default MainPage;
