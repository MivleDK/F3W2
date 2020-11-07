# Flow3 Week 2 Day 2

## Security

**What is the advantage (if any) for a REST-based API of using JWT’s compared to session Cookies**
The JWT is a self contained token which has authetication information, expire time information, and other user defined claims. This makes the session stateless.

No cookies are required making it mobile friendly.

A single token can be used with multiple backends.

**What is the disadvantage (if any) with the implemented JWT-solution**
If the shared/fixed key is compromised, every single generated key is compromised.

**What will a client (Single Page WEB, Mobile App, etc.) have to do in order to use this API**
A client would need to make api requests and ensure configuration for local-storage on the final client (The user).
