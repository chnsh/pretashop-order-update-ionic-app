# Ionic app to update Prestashop Order Status
#### Ready to be deployed on Android/iOS
This application is a ready Ionic/Phonegap application that can be deployed on an android/ios phone to ease prestashop order management

#### Why this application?

One of the great things about Prestashop is the Webservices that it extends and an app like this, that can be readily deployed
on a physical smartphone can greatly assist on-field staff and delivery person to update the status of an order on the road.

#### Instructions of use

Do the following to successfully setup this application:
- Enable Prestashop Webservices by following instructions on [this page](http://doc.prestashop.com/display/PS16/Using+the+PrestaShop+Web+Service).
- Place the __PSWebServiceLibrary.php__ using the link found on [this page](http://doc.prestashop.com/display/PS16/Using+the+PrestaShop+Web+Service) in the root directory.
- Update the files in the [Backend API](Backend API) with the correct store URL and API Key.
- Upload these files in the root directory of the Prestashop setup.
- Update the [app.js](www/js/app.js) with the store name and correct API endpoint URLS that were uploaded in the previous step.
- (Optional) Try [Ionic Serve](http://ionicframework.com/docs/guide/testing.html) feature to test in the browser if the app is configured correctly.
- Use [this link](http://ionicframework.com/docs/guide/publishing.html) to understand how to publish the app.


Download the zip: [Download](https://github.com/chintanshah24/pretashop-order-update-ionic-app/archive/master.zip)
