/**
 * Функция отвечает на вопросы, например, серверная она или нет
 * @param {string} question
 * @returns {string}
 */
function getAnswer(question){
  switch (question){
    case "Is server side?":
      return "yes";
    case "Is client side?":
      return "no";
    default:
      return "I do not understand. May be you you ask about my side?"
  }
}

module.exports = getAnswer;