/* eslint-disable prefer-const */
import SuperTokens from "supertokens-node";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import Session from "supertokens-node/recipe/session";

SuperTokens.init({
    appInfo: {
        apiDomain: "...",
        appName: "...",
        websiteDomain: "..."
    },
    supertokens: { 
        connectionURI: "...",
     },
    recipeList: [
        ThirdPartyEmailPassword.init({
            override: {
                apis: (originalImplementation) => {
                    return {
                        ...originalImplementation,

                        // override the email password sign up API
                        emailPasswordSignUpPOST: async function(input) {
                            if (originalImplementation.emailPasswordSignUpPOST === undefined) {
                                throw Error("Should never come here");
                            }

                            // TODO: some pre sign up logic

                            let response = await originalImplementation.emailPasswordSignUpPOST(input);

                            if (response.status === "OK") {
                                // TODO: some post sign up logic
                            }

                            return response;
                        },

                        // override the email password sign in API
                        emailPasswordSignInPOST: async function(input) {
                            if (originalImplementation.emailPasswordSignInPOST === undefined) {
                                throw Error("Should never come here");
                            }

                            // TODO: some pre sign in logic

                            let response = await originalImplementation.emailPasswordSignInPOST(input);

                            if (response.status === "OK") {
                                // TODO: some post sign in logic
                            }

                            return response;
                        },

                        // override the thirdparty sign in / up API
                        thirdPartySignInUpPOST: async function(input) {
                            if (originalImplementation.thirdPartySignInUpPOST === undefined) {
                                throw Error("Should never come here");
                            }

                            // TODO: Some pre sign in / up logic

                            let response = await originalImplementation.thirdPartySignInUpPOST(input);

                            if (response.status === "OK") {
                                if (response.createdNewUser) {
                                    // TODO: some post sign up logic
                                } else {
                                    // TODO: some post sign in logic
                                }
                            }

                            return response;
                        }
                    }
                }
            }
        }),
        Session.init({ /* ... */ })
    ]
});