## Frequently Asked Questions (FAQs)


### What is DiSARM?
The Disease Surveillance and Risk Monitoring platform (DiSARM) is a spatial intelligence tool, built to enable disease control programs to deliver more effective field campaigns. More information is available on the project’s website. Find out more at disarm.io

### What do I need to run DiSARM?

*Mobile Phones*
- Operating System must be Android or IOS
- Browser must be Google Chrome from version 40 upwards

*Computers*
- Browser must be Google Chrome from version from version 40 upwards

**NOTE** Although other browsers my work, we recommend using google chrome as Chrome is fully supported. Other functions may not work well on other browsers.
     

### How do I reload and/or update the application?

DiSARM is designed to run offline in a robust way that protects your data. In general, you can try reloading any page that looks like it's stuck loading (click the reload button on your browser). If you're editing a form, you may lose your entry unless you save first by completing the form. If DISARM is online, it will check to see if there's a new version available. If there is, it will download and update in the background, letting you know when it's ready. Sometimes (due to a slow connection or other issue), the update doesn't work. If things get stuck on a desktop browser, you can try a "force reload", which is `ctrl+shift+r` on Windows (`cmd+shift+r` on Mac). This will try to re-download the required application files and start up again. Your data (except unsaved forms) will not be removed.

### How do I log-in?

Once the login page has been displayed insert your username in the username textfield and the password in the password labeled textfield. If it is required to change the API URL click on the button labeled `EDIT API URL` found on the bottom left corner of the login page. A text field with a URL will be unveiled and this should be edited to be the correct API URL provided by your application administrator. Click on the red button labeled `LOGIN`. The login button becomes red (activated) which means it can be used to log in once login details have been entered in the text fields. If the login details are wrong you will be shown a message in red saying “User with this login or password is not found”. Once you are logged in you will see a menu of the parts or modules of the application that you are allowed to access. The permission to access modules is given by the application administrator in the admin configuration editor section.

### How do I log-out?

Open the sidebar by using the sandwich button on the top right corner of the screen and click on the "Return to launcher" from the options presented. On the launcher page the user can then click the "log out” button that is below the list of instances to log out. 
**NOTE** if you log out while you are offline, you will not be able to use DiSARM again until you login (which you can only do if you're online).

### What's the User Page?

The first page you will see after clicking the “login” button is the User Page. It  lists the sections of the application you are allowed to access pre-selected by your application administrator. These sections are sometimes referred to as modules and a user who has full access will have

- IRS Monitor

- IRS Plan

- IRS Record

- Debug 

- Geodata 

**NOTE** Some application modules will have customized names and a higher or smaller number of modules based on the configuration of your application administrator. 

Below the list of modules there is some text showing your application version number. When clicked it displays the version number of your configuration and some more device information that includes your browser name, version, operating system and your device name. This information is useful for troubleshooting in case of bugs that are experienced only on your device.

### What's in the sidebar?

After logging into the DiSARM application, you can view your modules in the sidebar if not on the user page. To open the Sidebar, click the sandwich icon (three small horizontal lines icon) on the top left corner of the screen and the sidebar will slide out from the left edge of your screen. 

The SideBar will display the following information;

- Title given to you DiSARM application 

- Version of the DiSARM application being used

- Instance ID (also referred to as testing ID is set during log in so that testing data and settings are not saved with real data). It is not displayed in some instances

- Modules made available by your application administrator

- User Page navigation option

- Help option

- Logout option

The sidebar can be closed by clicking anywhere outside of the Sidebar area. 

### How do I reset the offline state?

In the unlikely event that the application stops working, please reload the application. If it is still not working there is a function to reset it by selecting the “Reset Offline” option under the DiSARM logo that is shown when there application is loading/opening.

**NOTE** Although you will be resetting the application offline, the application will not delete any data that you have already collected and saved to your device in the IRS Record module. 

After selecting the “reset offline” option you will be presented with a screen informing you “you will not lose any data, click the button labeled “reset offline mode”

The reset offline page can also be reached by editing the URL in the address bar. You have to change it to URL-given-to-access-disarm/reset.html

In other words you add /reset.html to the end of your URL. The first character there is a forward slash(/). In our public demo application it would be https://demo-app.disarm.io/reset.html

Once resetting offline is completed, you see a message stating “offline mode was reset successfully”. Click the “Restart Application” button to start using the application.

**NOTE** The “restart application” button will bring you back to the Login page which means resetting the application will log you out. Make sure to do it if you are not using the application offline (if you have network) to log back in as it is not possible to log in if you do not have network.

### How can I report if something is broken?

- During an active season you can send a WhatsApp message to the number stated in the help file of your DiSARM instance (not available in all instances).

- You can send an email to help@disarm.io.

- Create an issue on our github plartfrom found on this link: https://github.com/disarm-platform/user-requests-and-feedback 

### What do I do when I have lost/forgotten my username or password?

Contact the application administrator.

### Can I edit records after I've synced?

It is only possible to edit records before you sync. At the moment, after they are synced you will need to ask your application administrator if they have the possibility to do so. 

### Can I collect data without being logged in?

It is not possible yet to collect records without logging in. The application administrator needs to give a user read and write permissions to access certain parts of the application, in this case the IRS record module. 

### My application has stopped working. What should I do?

- Reloading the page often helps. 
Reloading the page is done by dragging from the top  of the screen to the bottom with your finger on your mobile phone. 

- Exiting the browser and opening it again also helps. For more information check the “reset offline” section of this document.  

- ‘Killing’ the application if running on a mobile device
Killing the application is done by pressing the overview button and then swipping left or right, depending on your device to stop open applications from running in the background.

### What do I do if my application is not opening/loading at all?

This is usually due to a network problem and can be solved in many ways:

- Switch from Wi-Fi to mobile data network

- If already on mobile data you can try turning on the data saver in the settings page. On Google Chrome you go to the three dot options button on the top right corner of the screen, go to settings, then go to data saver which is under the advanced tab on the settings page. After clicking on data saver there should be an on/off switch on the top left corner which will change state when touched between on and off. Turn it on and  reload DiSARM

- If the user has access to a Virtual Private Network, connecting through it helps too.  The VPN is useful for sending your network request like it is coming from a different location so that DiSARM loads in your country. 

- Domain Name Server (DNS) address 1.1.1.1 also helps in making DiSARM load up well. 

- Check the “reset offline” section on this document

### Where does my data get saved?

DiSARM application data is first stored on the data collectors device. No one else can see it unless they have physical access to the device. Once the user syncs their device, this data will be sent to the server where their DiSARM instance is set up to store data.
    
Users can choose to host the application on their server should they be worried about where the physical server that hosts their data is.

### What happens to old versions of a plan?

When saving the plan the user must not click on the update button next to the plan if they still want to see that specific version of the plan. When creating a new plan the user must give a new name to this plan and not update the existing on inorder to keep it saved in the database.  

### How can I view an existing plan?

The user can go to the “Planner Module”, click the “Options” icon, and select “Load Plan”. The application will display a list of names of the existing plans. Click on a plan to load it on the map for viewing.

### Who can see my data?

No one has access to the data aside from users who have permissions or rights to use the dashboard/monitor module. These permissions and rights are set up by the application administrator. 

### Does the application work offline?

The main part of the application designed to work offline is the data collection. Other parts of the application may work offline, however these are not fully functional.

### How much data does it use? 

DiSARM is designed to use the smallest possible amount of data. When possible, base files are only downloaded once. For the simplest use (access to the IRS Record module), we only need to download the application, which is less than 2 Mb.

### How accurate are the collected GPS coordnates? 

The GPS accuracy is recorded and synced with the form record, it is shown next to the GPS coordinates on the page that requires that you get your GPS location (data collector) and the accuracy is influenced by the device hardware.

### How do I use IRS Record?

To begin entering data into the DiSARM application:  

1. Select the appropriate module from the User Page or Sidebar. When you visit the data collection module you will be presented with a page that shows two icons on the top left; one is marked with a plus sign and the other with three vertical dots. The one marked with a plus is for adding new records while the one shows a list of options.

2. To add a new record, click the + sign in the top left corner and you can begin filling a form for the record you are collecting.

3. The meta data page, which is the first page of the record collection form, might be configured to be displayed or not displayed by your application administrator, but if it is shown it has fields that are optional. Some of them can be changed and some cannot be changed, this depends on the settings applied by your application administrator. The default set up of the meta data page displays the username of the logged in user, their user ID, a time stamp or record collection and the team name the user belongs to.

4. The next page is the location selection, and it generally has a button marked “get/update location” for getting GPS coordinates, drop down selections for choosing the area where the record is and an option to add a custom location.

5. To collect the GPS coordinates of your location you click on the “GET/UPDATE POINT LOCATION”

6. Then the next step is to select the location name from te list of locations. Most of the time the higher level (first location selection) is optional because the lower level locality is the part of the higher level one (it is an area inside the region). The name shown on the areas are the names given by the application administrator in the geodata. 

7. If the location you are looking for is not shown in the dropdown list given you can add a custom by clicking on the “Enter custom location” checkbox. A pop up message will ask you to confirm that you want to add a custom location and if you are sure you can click on “USE CUSTOM LOCATION”. The downside with adding a custom location is that it will not be shown on the dashboard.

8. To continue adding the custom location select the text field labeled “custom location’ and type the name of the location that you want to add if you did not find it on the location dropdown descibed on step 6 of this section. 

9. While adding the records (filling in the form) if you miss a required field or put in a invalid value errors will be shown at the top of the screen on any page of the form. 

10. When you click on the button you will be shown where the errors are. For example if the user forgot to get the GPS coordinates of the location, there would be an error message and some red text in the same line as the error message which when clicked will make the erratic part be displayed below the error messages for the user  to fix them instantly. 

11. To continue filling in the form use the buttons at the bottom to navigate through the pages of the form until you reach the last page which will have the navigation buttons labeled previous and complete. Once the form is filled in with required data standards the “complete” button will be activated. All it does is save the complete form to your device only. 

12. When you click it you will be brought back to the main page of the data Data Collection/IRS Record that is shown on the first step of this section. The difference is that it will display the list of records that you have collected. When you have finished collecting records, the next step would be to sync the records. Syncing in our context means sending the records to the main database so that they can be downloaded by users who have access to the dashboard to view spray campaign progress, for this reason you have to be connected to the internet to be able to sync.

13. If you click on a record before you have synced them you will be able to edit it. You can change any of the fields that you were able to input data into while collecting the record for the first time. So when you select one record you will be taken to the screen shown in step 3 only with the data already filled in on all pages but editable. Otherwise the next step is to either sync the records or export them so you can have them on your device as a json file. These two options can be displayed by clicking on the three vertical dots button that is found next to the button marked with a plus sign.

14. The option to sync or export the data is not active/usable unless you have records that need to be synced or exported. Once the records have been synced the applications pops up a message at the top of the screen stating how many records were synced. This helps in case the was a network problem while syncing you will know not all were uploaded. They will not be lost, the user just needs to sync the remaining records. 

15. You can filter through the records using one of the values from form fields from the data collector form. This field is selected or configured by your application administrator. This is used when you want to view a specific record. Viewing records can be done even after syncing. Instead of editing records, once they are synced you will only be able to view them. 

16. If the user wishes to have the records saved on an external json file on the mobile device; “export unsynced ” should be clicked. The app will instantly compile the json file and start the download. A notification will be shown in the notifications area at the top and a pop up at the bottom.

**NOTE** After syncing you will not be able to not be edit the records and you will not be able to export a json file of the records. If you want to get records you will be able to download them from the dashboard/monitor if you have permission to access it. It is still possible to view records by clicking on them.