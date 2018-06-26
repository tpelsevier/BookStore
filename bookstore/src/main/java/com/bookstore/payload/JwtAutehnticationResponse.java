package com.bookstore.payload;

public class JwtAutehnticationResponse {
    private String accessToken;
    private String tokenType = "Bearer";

    public JwtAutehnticationResponse(String accessToken){
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
}
