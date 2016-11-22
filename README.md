# applicationKey Azure Mobile App
You can set an application key for your Azure Mobile App like Azure Mobile Services.

### 1. Open Application Settings on Azure Mobile Application

![alt text][logo]
[logo]: https://github.com/thisisfatih/applicationKey/blob/master/appSettings.PNG "1"

### 2. Scroll down to *App Settings* Add these two lines.

| Definition    | Value         |
| ------------- |:-------------:|
| zumo-api-key | *TYPE YOUR API KEY* |
| MS_SkipVersionCheck    | True      |

![alt text][logo2]
[logo2]: https://github.com/thisisfatih/applicationKey/blob/master/lines.PNG "2"

### 3. Then click *Save*

### 4. Open *App Service Editor*

### 5. Create a file on your main folder *wwwroot*

![alt text][logo3]
[logo3]: https://github.com/thisisfatih/applicationKey/blob/master/wwwRoot.png "3"

### 6. Name your file as *validateApiKey.js*

[validateApiKey.js](/validateApiKey.js)

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

**If you are using WindowsAzure.MobileServices
```
MobileServiceClient client = new MobileServiceClient(keys.mobileServiceAdress, keys.appSecret, new AppKeyHandler());
IMobileServiceTable<notifications> uTable = client.GetTable<notifications>();
await uTable.InsertAsync(n);
```

**If you are using Microsoft.Azure.Mobile.Client
```
MobileServiceClient client = new MobileServiceClient(keys.mobileServiceAdress, new AppKeyHandler());
                IMobileServiceTable<notifications> uTable = client.GetTable<notifications>();
                await uTable.InsertAsync(n);
```


```
public class AppKeyHandler : DelegatingHandler
    {
        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            request.Headers.Add("zumo-api-key", keys.mobileServiceKey);
            return base.SendAsync(request, cancellationToken);
        }
    }
```
![alt text][logo9]
[logo9]: https://github.com/thisisfatih/applicationKey/blob/master/client.PNG "4"

![alt text][logo8]
[logo8]: https://github.com/thisisfatih/applicationKey/blob/master/header.PNG "5"

ps. Feel free to ask questions via "Issues".

thisisfatih.







