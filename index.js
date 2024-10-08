#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

// Function to create the component files
const createComponent = (componentPath) => {
    const componentDir = path.join(process.cwd(), componentPath);
    const componentName = path.basename(componentPath);
    const jsxFile = path.join(componentDir, `${componentName}.jsx`);
    const cssFile = path.join(componentDir, `${componentName}.css`);

    // Check if the directory already exists
    if (fs.existsSync(componentDir)) {
        console.log(`Component ${componentName} already exists in ${componentDir}!`);
        return;
    }

    // Create the folder structure for the component
    fs.mkdirsSync(componentDir);

    // Create the .jsx file with a template
    const jsxTemplate = `
        import './${componentName}.css';
        import React from 'react';

        function ${componentName}() {
            return (
                <div className="${componentName}">
                    {/* Add your JSX here */}
                </div>
            );
        }

        export default ${componentName};
    `;
    fs.writeFileSync(jsxFile, jsxTemplate.trim());

    // Create an empty .css file
    const cssTemplate = `
        .${componentName} {
            /* Add your styles here */
        }
    `;
    fs.writeFileSync(cssFile, cssTemplate.trim());

    console.log(`Component ${componentName} generated successfully in ${componentDir}!`);
};

// Get the component path from command line arguments
const componentPath = process.argv[2];

if (!componentPath) {
    console.error('Please provide a component path or name!');
    process.exit(1);
}

createComponent(componentPath);
