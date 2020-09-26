import React from 'react';
import Indicator from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { SLoader } from './Loader.sc';

export const Loader: React.FC = () => {
    return (
        <SLoader>
            <Indicator type="ThreeDots" color="#E33371" height={80} width={80} />
        </SLoader>
    );
};
