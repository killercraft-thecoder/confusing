/**
 * This will be loaded before starting the simulator.
 * If you wish to add custom javascript, 
 * ** make sure to add this line to pxt.json**
 * 
 *      "disableTargetTemplateFiles": true
 * 
 * otherwise MakeCode will override your changes.
 * 
 * To register a constrol simmessages, use addSimMessageHandler
 */

// Ensure custom.js is running before the game
window.addEventListener("load", function () {
    // Create message data
    const gitInfo = {
        commit: "abc123",   // Replace with actual commit hash
        version: "1.8.0",
        timestamp: Date.now()
    };

    // Convert to byte array for transmission
    function stringToUint8Array(str) {
        return new Uint8Array([...str].map(c => c.charCodeAt(0)));
    }

    const msgPacket = {
        type: "messagepacket",
        channel: "GIT",
        data: stringToUint8Array(JSON.stringify(gitInfo))
    };

    // Send message to the simulator
    window.postMessage(msgPacket, "*");
});
