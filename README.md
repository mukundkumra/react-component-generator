# React Component Generator

A simple CLI tool for generating React components with a predefined folder structure and boilerplate code.

## Features

- Easily generate React components with a single command.
- Automatically creates the necessary folder structure.
- Generates .jsx and .css files with boilerplate code.

## Installation

You can either clone the git or install with npm:

1. Clone the repository:

   ```bash
   git clone https://github.com/mukundkumra/react-component-generator
   cd react-component-generator
   npm link
   ```

2. Install the package:

   ```bash
   npm i -g @mukundkumra/react-component-generator
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

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.