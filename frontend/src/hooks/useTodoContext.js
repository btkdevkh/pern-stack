import { useContext } from 'react';
import todoContext from '../context/todo/todoContext';

const useTodoContext = () => {
  const context = useContext(todoContext);

  if(!context) throw Error('useTodoContext must be use in TodoStateProvider');

  return context;
}

export default useTodoContext;
