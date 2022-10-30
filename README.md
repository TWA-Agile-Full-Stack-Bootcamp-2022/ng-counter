# Angular step by step

## Requirement
* create an angular project, and do all practices in the project.
* one git commit one practice.

## Practices
1. As a User, I want to see a `+` button and a text `number: 0` aside the button, when I click the `+` button, then I can see the text `number: 1` instead of `number: 0`.
2. As a User, I want a new `-` button aside to text `number: 0`, when I click the `-` button, then I can see the text `number: -1` instead of `number: 0`.
3. As a User, I want `-` button disappear when the number in text is less than 0, and the `-` button appear again when the number is greater than or equals to 0.
4. As a User, I want `+` button disappear when the number in text is greater than 10, and the `+` button appear again when the  the number is less than or equals to 10.
5. As a User, I want background color of the text 'number: *' to be green ,when the number in text is less than 0.
6. As a User, I want background color of the text 'number: *' to be red, when the number in text is greater than 10.
7. As a User, I want background color of the text 'number: *' to be white, when the number in text is greater than 0 and less than or equals to 10.
8. As a User, I want a new `reset` button aside to `-` button, when I click the `reset` button, then I can see the text is `number: 0`.


## Tips 
### how to install angular CLI
-  `npm install -g @angular/cli`

### how to create angular project
- `ng new angular-counter`

### how to create a new component
- `ng generate component counter`

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Working on VScode, add .vscode/.settings.json
```json
{
  "editor.formatOnPaste": true,
  "editor.formatOnType": true, 
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "file", 
  "files.autoSave": "onFocusChange",
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
}
```
