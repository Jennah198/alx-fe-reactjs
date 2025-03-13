import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(screen.getByText('Add Todo'));

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo item', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const toggleButton = screen.getAllByText('Toggle')[0];
    fireEvent.click(toggleButton);
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
