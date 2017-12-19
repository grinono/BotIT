# BotIT
Chatbot dialog conversation builder and marketplace

<img width="1440" alt="schermafbeelding 2017-12-19 om 17 57 10" src="https://user-images.githubusercontent.com/4255206/34168988-3b00f236-e4e6-11e7-820a-a8425b3fea91.png">
<img width="1440" alt="schermafbeelding 2017-12-19 om 17 57 16" src="https://user-images.githubusercontent.com/4255206/34168989-3b1dd054-e4e6-11e7-8b66-8da41d683e00.png">
<img width="1440" alt="schermafbeelding 2017-12-19 om 17 57 25" src="https://user-images.githubusercontent.com/4255206/34168990-3b3b25be-e4e6-11e7-9241-64bc6ed55ebb.png">
<img width="1440" alt="schermafbeelding 2017-12-19 om 17 57 33" src="https://user-images.githubusercontent.com/4255206/34168991-3b57f806-e4e6-11e7-8cfa-a6a6a3f77813.png">

Just put a day into the this project. Idea to see if there is any interest in a dialog agnostic platform. That can be maintained as a microservice
But switch any AI platform should be just a change of a few minutes. 
If so i will put in effort to create this.

What.
- Seperate the Dialog elements from any of the AI platforms
- Create a marketplace for dialogs, So you can add inteligence to your own bot in seconds without any effort of creating intents, entities and awnsers
- Easy to use GUI / UI intuative. Only add code when GUI does not provivde interest
- webhooks for custom data intergration. 

Idea is to build with
- apolloData (graphQL API for client)
- NodeJS (server)
- React (client)
- Redux (state management)
- BotKit (bot integration)
- MongoDB (save logic, context etc)
- Express API

Itegrate with:
Chat(iframe) > Graphql subscription based > BOT Iframe to run on any page > https://ui.anchor.chat/
Wit.ai > no dialog management available
LUIS.ai > no dialog management available
Dialogflow > hard create a good overview of the Intents
Watson > good Dialog creation but locked to Watson
