import * as msal from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "80ddcf29-3e47-4bae-9282-d9338060a5a5",
    authority:
      "https://login.microsoftonline.com/fc392005-78b3-4dc1-9257-ffbcff443b61",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case msal.LogLevel.Error:
            console.error(message);
            return;
          case msal.LogLevel.Info:
            // console.info(message);
            return;
          case msal.LogLevel.Verbose:
            console.debug(message);
            return;
          case msal.LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const protectedResources = {
  todolistApi: {
    endpoint: "https://graph.microsoft.com/v1.0/me",
    scopes: {
      read: ["api://cc30dbee-cc7a-421e-845c-80c1ee92db0b/Todolist.Read"],
      write: ["api://cc30dbee-cc7a-421e-845c-80c1ee92db0b/Todolist.ReadWrite"],
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};

export const myMSALObj = new msal.PublicClientApplication(msalConfig);
