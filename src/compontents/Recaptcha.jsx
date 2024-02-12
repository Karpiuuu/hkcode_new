import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = ({ onChange }) => {
    const RECAPTCHA_SITE_KEY = '6LdIk3ApAAAAAE6ljh7ouljJG-mZZtkgX_QJbQ1A';

    return (
        <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={onChange}
        />
    );
};

export default Recaptcha;