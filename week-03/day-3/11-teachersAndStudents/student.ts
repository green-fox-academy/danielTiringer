import { Teacher } from './teacher';

export class Student {
    public learn (): void {
        console.log('The student is learning something new!')
    }

    public question(teacher : Teacher): void {
        teacher.answer();
    }
}