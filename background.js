/**
 * Background file of extension.
 *
 */
chrome.runtime.onMessage.addListener((msg, sender, resp)=> {
    /*TODO check condition for production environment.*/
    var message = JSON.parse(msg);
    process(message);
    return;
});
const FROM_WEB_PAGE = "CSS_REG_WEB_PAGE";
const FROM_EXT = "CSS_REG_EXT";
function process(message) {
    if (message.from === FROM_WEB_PAGE) {
        processWebPageMessage(message);
    } else if (message.from = FROM_EXT) {

    }
}

function processWebPageMessage(message) {
    switch (message.type) {
        case "MOCK_DATA":
            addMockData();
            break;
        default:
            console.log("Not Supported message type");
            console.log(message);
    }
}
function processExtensionMessage(message) {

}

function addMockData() {
    var mockData = new MockData();
    console.log(mockData.crateMockData());
}