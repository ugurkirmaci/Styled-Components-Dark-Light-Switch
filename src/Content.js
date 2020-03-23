import React, { useContext } from 'react';
import Context from './context';

const Content = () => {
    const { state } = useContext(Context);

    return <h2>{`Switch to ${state.isDark ? "light" : "dark"} mode`}</h2>;
};

export default Content;