/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoList } from './TodoList';

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
      const todoInstance = new ToDoList()
      const invalidValue: any = {
        invalidField: 'invalidValue'
      }
      todoInstance.add(invalidValue)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })
  })

  describe('Testing update', () => {
    test('Should update a task from the List',() => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const updatedTask = {
        title: 'updated_title',
        description: 'updated_description',
        targetDate: '01/01/2025',
        type: 'updated_type',
        priority: '2',
        subTasks: []
      }
      todoInstance.updateTask(0, updatedTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([updatedTask])
    })

      test('Should not update a task in the list, due to invalid index',() => {
        const todoInstance = new ToDoList()
        todoInstance.add(anyTask)
        const updatedTask = {
          title: 'updated_title',
          description: 'updated_description',
          targetDate: '01/01/2025',
          type: 'updated_type',
          priority: '2',
          subTasks: []
        }
        todoInstance.updateTask(1, updatedTask)
        const tasks = todoInstance.getTasks()
        expect(tasks).toEqual([anyTask])
    })
  })

  describe('Testing remove', () => {
    test('should remove a task from the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      todoInstance.removeTask(0)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })

    test('should not be able to remove a task from the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      todoInstance.removeTask(1)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })
  })
});
