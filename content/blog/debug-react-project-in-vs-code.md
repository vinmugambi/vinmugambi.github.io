---
title: Debug a `Create React Project` project in VS code
tagline: One step debugging for React.js projects initiated with Create React App 
---

Among the first thing I do after starting a new JavaScript project is to configure it for debugging in VS code. [Create React App](https://create-react-app.dev/) is the most popular and [recommended](https://beta.reactjs.org/learn/start-a-new-react-project) way to install fresh react project. In this post I'll show you how I effectively debug React.js projects created using Create React App.

[The Create React App Website](https://create-react-app.dev/docs/setting-up-your-editor/#visual-studio-code) enlists this VS Code debugger config.

```json{}[.vscode/launch.json]
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

The problem with this config is that before launching the debugger you have start and react development server manually using `npm start`. We'll make this config start the development server automatically when you launch the debugger and stop the server when you finish debugging.

To achieve this we have to create a task to start the development server and another one to stop it and link it to our `launch.json`.
Create a `.vscode/tasks.json` file and copy this into it.

```json{}[.vscode/tasks.json]
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "start-dev-server",
      "command": "npm",
      "args": ["start"],
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "group": {
        "kind": "test",
        "isDefault": true
      },
      "isBackground": true,
      "problemMatcher": {
        "owner": "custom",
        "pattern": {
          "regexp": "^$"
        },
        "background": {
          "activeOnStart": true,
          "beginsPattern": "Starting development *", // Signals the begin of the task
          "endsPattern": "webpack compiled *" // Signals that the Dev server has started
        }
      }
    },
    {
      "label": "stop-dev-server",
      "command": "${input:terminate}",
      "type": "shell",
      "problemMatcher": []
    }
  ],
  "inputs": [
    {
      "id": "terminate",
      "type": "command",
      "command": "workbench.action.tasks.terminate",
      "args": "terminateAll"
    }
  ]
}
```

Then reference the tasks in your `launch.json`

```diff-json{}[.vscode/launch.json]
 {
   "version": "0.2.0",
   "configurations": [
     {
       "name": "Chrome",
       "type": "chrome",
       "request": "launch",
+      "preLaunchTask": "start-dev-server",
+      "postDebugTask": "stop-dev-server",
       "url": "http://localhost:3000",
       "webRoot": "${workspaceFolder}/src",
       "sourceMapPathOverrides": {
         "webpack:///src/*": "${webRoot}/*"
       }
     }
   ]
 }
```

There you go. Now you only have to launch the debugger and config takes care of the rest.
