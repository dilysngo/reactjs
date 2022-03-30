import axios from 'axios';

const botToken = process.env.BOT_TOKEN;
const groupChatId = process.env.BOT_ID;
const projectName = process.env.PROJECT_NAME;

export const sendToTelegram = (value) => {
  try {
    const text = `${projectName}: ${value}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${groupChatId}&text=${text}`;
    return axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

export default sendToTelegram;
