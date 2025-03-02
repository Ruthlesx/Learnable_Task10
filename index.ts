//Define the TodoItem interface

interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
} 

//Implement TodoList class

class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
    
    
    //Adds a new todo item
    addTodo(task: string, dueDate: Date): void {
        this.todos.push({
            id: this.nextId++,
            task,
            completed: false,
            dueDate,

        })
    } 

    //Completes Todo Item

    completeTodo(id: number): void  {
        const todo =this.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = true;
        } else {
            console.error(`Todo with ID ${id} not found`)
        }
    }

    //Removes a todo item

    removeTodo(id: number): void  {
        this.todos = this.todos.filter((t) => t.id !== id);
    }


    //Returns all Todo item

    listTodos(): TodoItem[] {
        return this.todos;
    } 

    //Filter todos by completed status
    filterTodos( completed: boolean): TodoItem[] {
        return this.todos.filter((t) => t.completed === completed);
    } 

    //updates task of a todo item
    updateTodo(id: number, newTask: string): void {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.task = newTask;
        } else {
            console.error(`Todo with ID ${id} not found`)
        }
    } 

    //clears completed todos

    clearCompletedTodos(): void {
        this.todos = this.todos.filter((t) => !t.completed)
    }

}


//Examples
const myTodos = new TodoList();
myTodos.addTodo("Learn TypeScript", new Date("2025-03-01"));
myTodos.addTodo("Build a project", new Date("2025-04-01"));
myTodos.completeTodo(1);
myTodos.updateTodo(2, "Deploy the project");
myTodos.removeTodo(1);
console.log(myTodos.listTodos());