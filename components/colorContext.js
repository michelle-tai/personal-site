import { createContext } from 'react';

const UIContext = createContext({
    colorify: '',
    setColorify: () => {},
});

export default UIContext;