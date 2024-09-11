export interface AccessTokenReponse {
    access_token?: string;
    expires_in?: string;
    token_type?: string;
}

/**
 * Pass in response body from generateToken() to get the token in string form
 * @param response 
 * @returns 
 */
export default function extractToken(accessTokenBody : AccessTokenReponse) : string {
    
    if(!accessTokenBody) {
        throw new Error('Token reponse in incorrect format');
    }

    if(!accessTokenBody.access_token) {
        throw new Error('Access token nto provided in token response body');
    }

    return accessTokenBody.access_token;
}