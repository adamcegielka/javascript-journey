## Execute file:

- macOS

```javascript
node ./Course_4/Examples/firstFile.js
```

- windows

```javascript
node .\Course_4\Examples\firstFile.js
```

## Execute by F5

- `Run -> Start Debugging` <kbd>F5</kbd> or `Run Without Debugging` <kbd>CTRL</kbd> + <kbd>F5</kbd>
- `.vscode -> launch.json`:

```javascript
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Basics",
            "skipFiles": [
                "<node_internals>/**"
            ],
            // "program": "${workspaceFolder}\\folder_name\\file_name.js" // for windows
            "program": "${workspaceFolder}/folder_name/file_name.js" // for macOS
        }
    ]
}
```
