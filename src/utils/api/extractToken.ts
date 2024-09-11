interface AccessTokenReponse {
    access_token?: string;
    expires_in?: string;
    token_type?: string;
}

/**
 * Pass in response body from generateToken() to get the token in string form
 * @param response 
 * @returns 
 */
export default function extractToken(response : any) : string {
    if(!response.data) {
        throw new Error('No data provided in token response')
    }

    const accessTokenBody : AccessTokenReponse = response.data as AccessTokenReponse;

    if(!accessTokenBody) {
        throw new Error('Token reponse in incorrect format');
    }

    if(!accessTokenBody.access_token) {
        throw new Error('Access token nto provided in token response body');
    }

    return accessTokenBody.access_token;
}