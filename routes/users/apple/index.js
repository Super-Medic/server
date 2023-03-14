var express = require('express')
const mdbConn = require('../../db_connection/mariaDBConn')
var router = express.Router();
require("dotenv").config();
const AppleAuth = require("apple-auth");
const jwt = require("jsonwebtoken");

/**
 * Apple Callback URL
 */
router.post("/callbacks/sign_in_with_apple", (request, response) => {
    // const redirect = `intent://callback?${new URLSearchParams(
    //     request.body
    // ).toString()}#Intent;package=${
    //     process.env.ANDROID_PACKAGE_IDENTIFIER
    // };scheme=signinwithapple;end`;
    // const redirect = `intent://callback?${new URLSearchParams(
    //     request.body
    // ).toString()}`;
    
    // console.log(`Redirecting to ${redirect}`);

    // response.redirect(307, redirect);
});

router.post("/sign_in_with_apple", async (request, response) => {
    const auth = new AppleAuth({
        // use the bundle ID as client ID for native apps, else use the service ID for web-auth flows
        // https://forums.developer.apple.com/thread/118135
        client_id:
            request.query.useBundleId === "true"
            ? process.env.BUNDLE_ID
            : process.env.SERVICE_ID,
        team_id: process.env.TEAM_ID,
        redirect_uri:
          "https://mypd.kr:5000/user/apple/callbacks/sign_in_with_apple", // does not matter here, as this is already the callback that verifies the token after the redirection
        key_id: process.env.KEY_ID
        },
        process.env.KEY_CONTENTS.replace(/\|/g, "\n"),
        "text"
    );
    const accessToken = await auth.accessToken(request.query.code);
    const idToken = jwt.decode(accessToken.id_token);
    // const userID = idToken.sub;
    // `userEmail` and `userName` will only be provided for the initial authorization with your app
    const userEmail = idToken.email;
    // const userName = `${request.query.firstName} ${request.query.lastName}`;
    // 👷🏻‍♀️ TODO: Use the values provided create a new session for the user in your system
    // const sessionID = `NEW SESSION ID for ${userID} / ${userEmail} / ${userName}`;
    const sessionID = `NEW SESSION ID for ${userID}`;
    console.log(`sessionID = ${sessionID}`);
    response.json({ sessionId: sessionID });
});

module.exports = router;