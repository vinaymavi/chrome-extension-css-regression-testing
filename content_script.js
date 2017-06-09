/**
 * This file will interact with page and will perform given actions.
 * # Listen all post message events.
 * # Will read and modify we page.
 */

window.addEventListener("message", (event)=> {
    checkEvent(event);
});
/**
 * Check and convert data to JSON object.
 * @param event {Event} post message event object.
 */
const CAN_ACCESS_FROM = "CSS_REG_WEB_PAGE";
const FROM = "CSS_REG_EXT";
const TYPE_HAND_SHAKE = "HAND_SHAKE";
const TYPE_MOCK_DATA = "MOCK_DATA";
const TYPE_CAPTURE_SCREEN_SHOTS = "CAPTURE_SCREEN_SHOTS";
function checkEvent(event) {
    var data;
    if ((event.origin === "http://localhost:8080" || event.origin === "https://css-reg.appspot.com")) {
        try {
            data = JSON.parse(event.data);
            if (data.from === CAN_ACCESS_FROM) {
                console.log("FROM_EXTENSION");
                processEventData(data);
            }
        } catch (e) {
            console.error(e);
        }
    }
}
/**
 *
 * @param data {Object} JSON object of event data.
 */
function processEventData(data) {
    console.log(data);
    switch (data.type) {
        case TYPE_HAND_SHAKE:
            sendHandShakeResp();
            break;
        case TYPE_MOCK_DATA:
            runtimeSendMessage(data);
            break;
        case TYPE_CAPTURE_SCREEN_SHOTS:
            runtimeSendMessage(data);
            break;
        default:
            console.log("Not a valid type");
    }
}

function sendHandShakeResp() {
    var data = {
        'from': FROM,
        'type': TYPE_HAND_SHAKE,
        'msg': 'YES_IAM_HERE'
    };
    sendPostMessage(JSON.stringify(data));
}
function sendPostMessage(dataStr) {
    window.postMessage(dataStr, '*');
}

function runtimeSendMessage(data){
    chrome.runtime.sendMessage(null, JSON.stringify(data));
}

chrome.runtime.onMessage.addListener((msg, sender, resp)=> {
    console.log(msg);
    console.log(sender);
    console.log(resp);
    return;
});