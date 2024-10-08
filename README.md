# React Component Generator

A simple CLI tool for generating React components with a predefined folder structure and boilerplate code.

## Features

- Easily generate React components with a single command.
- Automatically creates the necessary folder structure.
- Generates .jsx and .css files with boilerplate code.

## Installation

1. Clone the repository or download the package.

   ```bash
   git clone https://github.com/mukundkumra/react-component-generator
   cd react-component-generator
   ```

2. Install the package:

   ```bash
   npm install
   ```

3. To link the package globally for easy command line usage, run:

   ```bash
   npm link
   ```

## Usage

To generate a React component, use the command:

```bash
gen <ComponentName>
```

### Examples

1. **Generate a simple component**:

   ```bash
   gen Home
   ```

   This will create the following structure:

   ```
   Home/
     ├── Home.jsx
     └── Home.css
   ```

2. **Generate a nested component**:

   ```bash
   gen Test/Home
   ```

   This will create the following structure:

   ```
   Test/
     └── Home/
         ├── Home.jsx
         └── Home.css
   ```

## Generated File Structure

### Home.jsx

```javascript
import './Home.css';
import React from 'react';

function Home() {
    return (
        <div className="Home">
            {/* Add your JSX here */}
        </div>
    );
}

export default Home;
```

### Home.css

```css
.Home {
    /* Add your styles here */
}
```

## Running Tests

To ensure the functionality of the package, run the tests using:

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.