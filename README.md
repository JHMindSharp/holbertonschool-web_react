
# TypeScript Project

This repository contains a series of tasks to learn and practice TypeScript.

## Project Structure

- **task_0**: Creating an interface for students and rendering a table in HTML using TypeScript.
- **task_1**: Building a `Teacher` interface and extending it with additional attributes.
- **task_2**: Creating the `Directors` interface extending the `Teacher` interface and working with object printing.
- **task_3**: Using ambient namespaces and importing types for CRUD operations.
- **task_4**: Extending `Teacher` interface and creating new classes with TypeScript features.
- **task_5**: Using branded types and working with nominal typing.
- **task_6 to task_10**: More advanced TypeScript tasks, including working with external libraries, namespaces, declaration merging, and class extensions.

## Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js** (version 10 or higher)
- **npm** (version 6 or higher)
- **TypeScript** (Globally installed: `npm install -g typescript`)
- **Webpack** and **Jest** installed via the project dependencies.

## Installation

To install the project dependencies, navigate to the project root folder and run:

```bash
npm install
```

This will install all necessary dependencies including TypeScript, Webpack, Jest, and other related tools.

## Running the Project

Each task is structured in its own directory (task_0, task_1, etc.). To run a specific task:

1. Navigate to the directory of the task you want to run. For example, for `task_0`, run:
   ```bash
   cd task_0
   ```

2. Compile the TypeScript files:
   ```bash
   npx tsc
   ```

3. Build the project with Webpack:
   ```bash
   npm run build
   ```

4. If the task includes a test script using Jest, you can run the tests with:
   ```bash
   npm run test
   ```

5. If you want to start a development server and see changes live (for tasks involving HTML/DOM manipulation):
   ```bash
   npm run start-dev
   ```

## Testing the Project

For each task, you can run the associated tests as follows:

1. Make sure you are in the task directory, for example:
   ```bash
   cd task_1
   ```

2. Run the tests:
   ```bash
   npm run test
   ```

Tests are written using Jest and should return results without errors if everything is implemented correctly.

## Linting

You can also check for TypeScript linting errors using ESLint:

```bash
npm run lint
```

This will check for code style and best practices according to the ESLint rules set in `.eslintrc.js`.

## License

This project is licensed under the ISC License. See the `LICENSE` file for more details.
