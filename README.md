# applicationKey Azure Mobile App
You can set an application key for your Azure Mobile App like Azure Mobile Services.

### 1. Open Application Settings on Azure Mobile Application

![alt text][logo]
[logo]: https://github.com/thisisfatih/applicationKey/blob/master/appSettings.PNG "Logo Title Text 2"

### 2. Scroll down to *App Settings* Add these two lines.

| Definition    | Value         |
| ------------- |:-------------:|
| zumo-api-key | *TYPE YOUR API KEY* |
| MS_SkipVersionCheck    | True      |

![alt text][logo2]
[logo2]: https://github.com/thisisfatih/applicationKey/blob/master/lines.PNG "Logo Title Text 2"

### 3. Then click *Save*

### 4. Open *App Service Editor*

### 5. Create a file on your main folder *wwwroot*

![alt text][logo3]
[logo3]: https://github.com/thisisfatih/applicationKey/blob/master/wwwRoot.png "Logo Title Text 2"

### 6. Name your file as *validateApiKey.js*

Here is the file => [validateApiKey.js](/validateApiKey.js)

### 6. Update your API script as,

[sampleAPI.js](/sampleAPI.js) *AND*
[sampleAPI.json](/sampleAPI.json)

Do not forget to change permissions to "Anonymous"

### 6. Update your Table script as,

[sampleTable.js](/sampleTable.js) *AND*
[sampleTable.json](/sampleTable.json)

Do not forget to change permissions to "Anonymous"

### 7. Done!

Do not forget to add header while calling Azure Mobile/Web App.

![alt text9][logo]
[logo9]: https://github.com/thisisfatih/applicationKey/blob/master/client.PNG "Logo Title Text 2"

![alt text8][logo]
[logo8]: https://github.com/thisisfatih/applicationKey/blob/master/header.PNG "Logo Title Text 2"









