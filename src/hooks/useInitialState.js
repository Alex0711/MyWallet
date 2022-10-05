import { useState } from 'react';

const initialState = {
  user: {},
  menuIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  return {
    state,
    toggleMenu,
  };
};

export default useInitialState;
