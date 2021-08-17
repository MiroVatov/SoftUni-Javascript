function encodeAndDecodeMessages() {
    let getMainTag = document.getElementById('main');
    let divs = getMainTag.children;
    let encodeAndSendButton = divs[0].querySelector('button');
    let decodeAndSendButton = divs[1].querySelector('button');
    let inputMessage = divs[0].querySelector('textarea');
    let outputMessage = divs[1].querySelector('textarea');

    encodeAndSendButton.addEventListener('click', encodeAndSend);
    decodeAndSendButton.addEventListener('click', decodeAndRead)

    function encodeAndSend() {

        function encryptMessage(messageToEncode) {
            let newMsg = '';
            for (let i = 0; i < messageToEncode.length; i++) {
                let char = messageToEncode.charCodeAt(i);
                char = (char + 1);
                char = String.fromCharCode(char);
                newMsg += char;
            }
            return newMsg;
        }

        let messageToEncode = inputMessage.value;
        messageToEncode = encryptMessage(messageToEncode);
        outputMessage.value = messageToEncode;
        inputMessage.value = '';
    }

    function decodeAndRead() {

        function decodeMessage(messageToDecode) {
            let newMsg = '';
            for (let i = 0; i < messageToDecode.length; i++) {
                let char = messageToDecode.charCodeAt(i);
                char = (char - 1);
                char = String.fromCharCode(char);
                newMsg += char;
            }
            return newMsg;
        }
        let messageToDecode = outputMessage.value;
        messageToDecode = decodeMessage(messageToDecode);
        outputMessage.value = messageToDecode;
    }
}