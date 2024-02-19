<h1 align="center"> Telegram PayBot </h1>
<p align="center">
<img src="https://img.shields.io/badge/Node-v18.12.1-blue"/>
<img src="https://img.shields.io/badge/Status%3A-Concluded-green"/>
</p>

Bot for Telegram to create payment links using Mercado Pago API

## Use

1. Download the source code [https://github.com/Factor013/PayBot_telegram/releases].
2. Extract the file to a folder.
3. Access (https://telegram.me/BotFather)
4. Start a conversation.
5. Run /newbot.
6. Choose the bot name according to the BotFather guidelines.
7. Copy your bot token.
8. Open the extracted project folder.
9. Edit the index.js file
10. Add your Token in - const TOKEN = 'SEU TOKEN Do BOT';
11. Now go to (https://www.mercadopago.com.br/mlb/account/credentials)
12. Access your account or create one.
13. Create an application and activate production credentials.
14. Copy your Access Token and replace it in the line - access_token: 'SEU ACESS_TOKEN MERCADO PAGO'.
15. Copy your Client ID and replace in the line - client_id: 'SEU CLIENT ID'.
16. Copy your Client Secret and replace it in the line - client_secret: 'SEU CLIENT SECRET'.
17. Save the file.
18. Open terminal or cmd.
19. Run a - npm install.
20. Run a - node index.js
21. Open Telegram and start a conversation with your bot.


## Obs:
The generated payment link expires in 30 minutes from the moment it is generated.<br>
Do not share your bot token or Mercado-Pago credentials.
