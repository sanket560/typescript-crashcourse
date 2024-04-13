// interface
interface UserInterface {
  readonly id: number;
  username: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  username: "sanket",
};

// user1.id = 5

interface Mathfunction {
  (x: number, y: number): number;
}

const add: Mathfunction = (x: number, y: number): number => x + y;
const sub: Mathfunction = (x: number, y: number): number => x - y;
const multiply: Mathfunction = (x: number, y: number): number => x * y;
