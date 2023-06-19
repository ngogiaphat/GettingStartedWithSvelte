type Todo = {
	id: number,
	text: string,
	completed: boolean,
};
let todos: Todo[] = [
	{
		id: Date.now(),
		text: 'Learn how forms work',
		completed: false,
	},
];
export function getTodo(){
	return todos;
}
export function addTodo(text: string){
	const todo: Todo = {
		id: Date.now(),
		text,
		completed: false,
	};
	todos.push(todo);
	return todos;
}
export function removeTodo(id: number){
	todos = todos.filter((todo) => todo.id !== id);
	return todos;
}
export function clearTodos(){
	todos = []
}