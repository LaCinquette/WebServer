/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { ClientService } from 'src/client/client.service';
import supertokens from "supertokens-node";
import Session from 'supertokens-node/recipe/session';
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword';

import { ConfigInjectionToken, AuthModuleConfig } from "../config.interface";

@Injectable()
export class SupertokensService {
    constructor(
        @Inject(ConfigInjectionToken) private config: AuthModuleConfig,
        private clientService: ClientService
    ) {
        supertokens.init({
            appInfo: config.appInfo,
            supertokens: {
                connectionURI: config.connectionURI,
                apiKey: config.apiKey,
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
                                        let formFields = input.formFields
                                        let user = response.user
                                        
                                        // console.log(user.id)
                                        // console.log(formFields)

                                        clientService.create({
                                            clientId: user.id,
                                            password: formFields.find(x => x.id == 'password').value,
                                            name: formFields.find(x => x.id == 'name').value,
                                            email: formFields.find(x => x.id == 'email').value,
                                            company: formFields.find(x => x.id == 'company').value,
                                        })
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
                    },
                    signUpFeature: {
                        formFields: [{
                            id: "name"
                        }, {
                            id: "company",
                            optional: true
                        }]
                    },
                    providers: [
                        // We have provided you with development keys which you can use for testsing.
                        // IMPORTANT: Please replace them with your own OAuth keys for production use.
                        ThirdPartyEmailPassword.Google({
                            clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                            clientSecret: "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"
                        }),
                        ThirdPartyEmailPassword.Github({
                            clientId: "467101b197249757c71f",
                            clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd"
                        }),
                        ThirdPartyEmailPassword.Apple({
                          clientId: "4398792-io.supertokens.example.service",
                          clientSecret: {
                              keyId: "7M48Y4RYDL",
                              privateKey:
                                  "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                              teamId: "YWQCXGJRJL",
                          },
                        }),
                        // ThirdPartyEmailPassword.Facebook({
                        //    clientSecret: "FACEBOOK_CLIENT_SECRET",
                        //    clientId: "FACEBOOK_CLIENT_ID"
                        // })
                    ]
                }),
              Session.init({
                errorHandlers: {
                    onUnauthorised: async (message, request, response) => {
                        response.original.redirect('/client/auth');
                    },
                },
                override: {
                    functions: (originalImplementation) => {
                        return {
                            ...originalImplementation,
                            createNewSession: async function (input) {
                                let userId = input.userId;

                                if (userId == 'aa6fc714-3920-4fca-ac66-6e0e3ec4bf19') {
                                    let role = "admin";

                                    input.accessTokenPayload = {
                                        ...input.accessTokenPayload,
                                        role
                                    };
                                }
                                else{
                                    let role = "client";

                                    input.accessTokenPayload = {
                                        ...input.accessTokenPayload,
                                        role
                                    };
                                }

                                return originalImplementation.createNewSession(input);
                            },
                        };
                    },
                },
              }),
            ]
        });
    }
}