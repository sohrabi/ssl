# Create SSL with openssl

First install `OpenSSL` and run following commands:

Set path to OpenSSL installtion folder in windows command line:
```
path %ProgramFiles%\OpenSSL-Win64\bin
```

Now create root trusted CA:
```
openssl req -x509 -sha256 -days 356 -nodes -newkey rsa:2048 -subj "/CN=MyRootCA/C=US/L=San Fransisco" -keyout rootCA.key -out rootCA.crt 
```

Create domain certificate:
```
openssl.exe genrsa -out server.key 2048

openssl.exe req -new -key server.key -out server.csr -config csr.conf

openssl.exe x509 -req -in server.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out server.crt -days 7300 -sha256 -extfile crt.conf
```
That's it.
Before installing certificate:

![Alt text](before.jpg?raw=true "Root Ca installed on Trusted area")

Now you need to install `rootCA.crt` in trusted certificate and close all browser instances.

![Alt text](installCertificate.jpg?raw=true "Root Ca installed on Trusted area")


Then just use `server.key` and `server.crt` in you'r server.

You can see the example in `index.js` file here.

After installing certificate:

![Alt text](before.jpg?raw=true "Root Ca installed on Trusted area")