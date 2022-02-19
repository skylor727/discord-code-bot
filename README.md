# **Discord JavaScript Code Bot**
A bot that can take a block of JavaScript Code and return the output
## Screenshots
![Running A Function](https://i.imgur.com/gAqDERm.png)
![Outputting a String](https://i.imgur.com/iwIhnus.png)
![Error handling for infinite loop](https://i.imgur.com/b0wCTom.png)
![Help Function](https://i.imgur.com/zrLYtYh.png)
## Technologies Used
   - NodeJS
   - Javascript
## Getting Started
1. Fork The Repo & Clone the repo on your machine
2. Log in to the [Discord Website](https://discord.com/login?redirect_to=%2Fdevelopers)
3. Navigate to the [Application page](https://discord.com/developers/applications)
4. Click on the "New Application" Button  
![New Application Button](https://discordpy.readthedocs.io/en/stable/_images/discord_create_app_button.png)  
5. Give the application a name and click "Create".  
![Create Button](https://discordpy.readthedocs.io/en/stable/_images/discord_create_app_form.png)  
6. Create a Bot User by navigating to the "Bot" tab and clicking "Add Bot"  
![Add bot](https://discordpy.readthedocs.io/en/stable/_images/discord_create_bot_user.png)  
7. Click "Yes, do it!" to continue   
## Inviting your bot
1. From the applications page click on your bot application
2. Click "Bot" on the left hand side
3. Under "Token" Click "Click to Reveal Token" and copy this for later
4. Click "OAuth2" on the left hand side and select URL Generator
5. Under "SCOPES" select "bot"
6. Under "BOT PERMISSIONS" select "Send Messages"
7. Copy the generated url and paste it into your browser
8. Choose the servers you want to invite the bot to  
## Setting up your bot
1. You will need to have Node installed on your machine
1. Head to the directory that you have cloned the repo into
2. Open the workspace in your code editor of choice
3. Run NPM init
4. Create a .env file
5. Inside the .env file add CLIENT_TOKEN= and then paste the token you copied earlier
6. In terminal type node index.js
7. You're good to go! Type !help to see how to use the bot

