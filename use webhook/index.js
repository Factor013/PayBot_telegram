const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const MercadoPago = require('mercadopago');

const url = 'https://<PUBLIC-URL>';
const TOKEN = 'SEU TOKEN Do BOT';


const bot = new TelegramBot(TOKEN);
bot.setWebHook(`${url}/bot${TOKEN}`);

const app = express();
app.use(express.json());

app.post(`/bot${TOKEN}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

MercadoPago.configure({
  access_token: 'SEU ACESS_TOKEN MERCADO PAGO',
  client_id: 'SEU CLIENT ID',
  client_secret: 'SEU CLIENT SECRET'
});

async function PayCreate(userId) {

    let dateEx = new Date(Date.now() - 3 * 60 * 60 * 1000)
    dateEx.setMinutes(dateEx.getMinutes() + 30)
    dateEx = dateEx.toISOString();
    dateEx = dateEx.replace('Z', '-04:00')
    //seta data de expiracao para 30 min da data atual

  
    const payment = {
      external_reference: userId.toString(),
      transaction_amount: 0.01,
      description: userId.toString(),
      payment_method_id: 'pix',
      date_of_expiration: dateEx,
      payer: {
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        identification: {
          type: 'CPF',
          number: '19119119100',
        },
      }
    };
    await MercadoPago.payment.create(payment).then((data) => {
      const paymentLink = data.body.point_of_interaction.transaction_data.ticket_url
      //console.log(data.body)
      bot.sendMessage(userId,'🤖  • Olá, tudo bem?\n\nClique no link para realizar o pagamento via PIX ou QRCode: \n\n'
                               + paymentLink +
                               ' \n\nPara voltar ao menu clique aqui 👉 /start'+
                            '\n\n❗️Após o pagamento, clique em STATUS DE PAGAMENTO para receber o LINK de Acesso\n\n');                          
    }).catch((error) => {
      console.log(error);
    });
  }


  async function PayStatus(userId) {
  
    const searchParams = {
      description: userId,
      status: 'approved'
    };
  
    MercadoPago.payment.search({ qs: searchParams }).then((payments) => {
      var resultado = payments.body.results
    
      if (resultado != '') {
  
            bot.sendMessage(userId,'Obrigado pela sua compra.\n\n'+
                                    '𝗦𝗘𝗨 𝗟𝗜𝗡𝗞 𝗗𝗘 𝗔𝗖𝗘𝗦𝗦𝗢:\n\n'+
                                '🔗 LINK DE ACESSO  🔗\n\n'+
                                'Para voltar ao menu clique aqui 👉 /start');

      }else { 
        bot.sendMessage(userId, 'Pagamento ainda nao Aprovado');
      }
      
    }).catch((error) => {
      console.log(error);
    });
  }

bot.on('message', (message) => {
    const chatId = message.chat.id;
    const text = message.text
  if(text != null){
  
    const replyMarkup = {
      inline_keyboard: [
        [
          {
            text: '💲 LINK DE PAGAMENTO 💲',
            callback_data: '/link'
          }
        ],
        [
          {
            text: '⏳ STATUS DE PAGAMENTO ⌛',
            callback_data: '/status'
          }
        ]
      ]
    };
  
    bot.sendMessage(chatId, '🤖 ATENDIMENTO 🤖', { reply_markup: replyMarkup });
  }
  });
  
  bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const userId = query.from.id;
    if (query.data === '/link') {
      PayCreate(userId);
    } if (query.data === '/status') {
      PayStatus(userId);
    }
  
  });
  bot.on('message', (msg) => { });
  
  app.listen(3000, () => {
    console.log('Servidor inicializado na porta 3000');
  });
