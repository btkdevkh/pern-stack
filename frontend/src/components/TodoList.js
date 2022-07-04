import useTodoContext from '../hooks/useTodoContext';
import Todo from './Todo';

export default function TodoList() {
  const { todos } = useTodoContext();

  return (
    <table className='table table-responsive align-middle text-center'>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Description</th>
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.length > 0 && todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  )
}
