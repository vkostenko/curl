var options = {
    "--abstract-unix-socket": {
        "title": "--abstract-unix-socket &lt;path>",
        "text": "<div class=\"short_info\">Connect via abstract Unix domain socket<\/div><p>Protocol: HTTP<p>Connect through an abstract Unix domain socket, instead of using the network.Note: netstat shows the path of an abstract socket prefixed with '@', howeverthe <path> argument should not have this leading character.<p>Added in 7.53.0",
        "isBool": false
    },
    "--anyauth": {
        "title": "--anyauth",
        "text": "<div class=\"short_info\">Pick any authentication method<\/div><p>Protocol: HTTP<p>Tells curl to figure out authentication method by itself, and use the mostsecure one the remote site claims to support. This is done by first doing arequest and checking the response-headers, thus possibly inducing an extranetwork round-trip. This is used instead of setting a specific authenticationmethod, which you can do with --basic, --digest, --ntlm, and --negotiate.<p>Using --anyauth is not recommended if you do uploads from stdin, since it mayrequire data to be sent twice and then the client must be able to rewind. Ifthe need should arise when uploading from stdin, the upload operation willfail.<p>Used together with --user.",
        "isBool": true,
        "see": [
            "--proxy-anyauth",
            "--basic",
            "--digest"
        ]
    },
    "-a": {
        "use": "--append"
    },
    "--append": {
        "title": "-a, --append",
        "text": "<div class=\"short_info\">Append to target file when uploading<\/div><p>Protocol: FTP SFTP<p>When used in an upload, this makes curl append to the target file instead ofoverwriting it. If the remote file doesn't exist, it will be created.  Notethat this flag is ignored by some SFTP servers (including OpenSSH).",
        "isBool": true
    },
    "--basic": {
        "title": "--basic",
        "text": "<div class=\"short_info\">Use HTTP Basic Authentication<\/div><p>Protocol: HTTP<p>Tells curl to use HTTP Basic authentication with the remote host. This is thedefault and this option is usually pointless, unless you use it to override apreviously set option that sets a different authentication method (such as--ntlm, --digest, or --negotiate).<p>Used together with --user.",
        "isBool": true,
        "see": [
            "--proxy-basic"
        ]
    },
    "--cacert": {
        "title": "--cacert &lt;file>",
        "text": "<div class=\"short_info\">CA certificate to verify peer against<\/div><p>Protocol: TLS<p>Tells curl to use the specified certificate file to verify the peer. The filemay contain multiple CA certificates. The certificate(s) must be in PEMformat. Normally curl is built to use a default file for this, so this optionis typically used to alter that default file.<p>curl recognizes the environment variable named 'CURL_CA_BUNDLE' if it isset, and uses the given path as a path to a CA cert bundle. This optionoverrides that variable.<p>The windows version of curl will automatically look for a CA certs file named\\'curl-ca-bundle.crt\\', either in the same directory as curl.exe, or in theCurrent Working Directory, or in any folder along your PATH.<p>If curl is built against the NSS SSL library, the NSS PEM PKCS#11 module(libnsspem.so) needs to be available for this option to work properly.<p>(iOS and macOS only) If curl is built against Secure Transport, then thisoption is supported for backward compatibility with other SSL engines, but itshould not be set. If the option is not set, then curl will use thecertificates in the system and user Keychain to verify the peer, which is thepreferred method of verifying the peer's certificate chain.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--capath": {
        "title": "--capath &lt;dir>",
        "text": "<div class=\"short_info\">CA directory to verify peer against<\/div><p>Protocol: TLS<p>Tells curl to use the specified certificate directory to verify thepeer. Multiple paths can be provided by separating them with \":\" (e.g.\\&\"path1:path2:path3\"). The certificates must be in PEM format, and if curl isbuilt against OpenSSL, the directory must have been processed using thec_rehash utility supplied with OpenSSL. Using --capath can allowOpenSSL-powered curl to make SSL-connections much more efficiently than using--cacert if the --cacert file contains many CA certificates.<p>If this option is set, the default capath value will be ignored, and if it isused several times, the last one will be used.",
        "isBool": false
    },
    "--cert-status": {
        "title": "--cert-status",
        "text": "<div class=\"short_info\">Verify the status of the server certificate<\/div><p>Protocol: TLS<p>Tells curl to verify the status of the server certificate by using theCertificate Status Request (aka. OCSP stapling) TLS extension.<p>If this option is enabled and the server sends an invalid (e.g. expired)response, if the response suggests that the server certificate has been revoked,or no response at all is received, the verification fails.<p>This is currently only implemented in the OpenSSL, GnuTLS and NSS backends.<p>Added in 7.41.0",
        "isBool": true
    },
    "--cert-type": {
        "title": "--cert-type &lt;type>",
        "text": "<div class=\"short_info\">Certificate file type (DER\/PEM\/ENG)<\/div><p>Protocol: TLS<p>Tells curl what certificate type the provided certificate is in. PEM, DER andENG are recognized types.  If not specified, PEM is assumed.<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "see": [
            "--cert",
            "--key",
            "--key-type"
        ]
    },
    "-E": {
        "use": "--cert"
    },
    "--cert": {
        "title": "-E, --cert &lt;certificate[",
        "text": "<div class=\"short_info\">Client certificate file and password<\/div><p>Protocol: TLS<p>Tells curl to use the specified client certificate file when getting a filewith HTTPS, FTPS or another SSL-based protocol. The certificate must be inPKCS#12 format if using Secure Transport, or PEM format if using any otherengine.  If the optional password isn't specified, it will be queried for onthe terminal. Note that this option assumes a \\&\"certificate\" file that is theprivate key and the client certificate concatenated! See --cert and --key tospecify them independently.<p>If curl is built against the NSS SSL library then this option can tellcurl the nickname of the certificate to use within the NSS database definedby the environment variable SSL_DIR (or by default \/etc\/pki\/nssdb). If theNSS PEM PKCS#11 module (libnsspem.so) is available then PEM files may beloaded. If you want to use a file from the current directory, please precedeit with \".\/\" prefix, in order to avoid confusion with a nickname.  If thenickname contains \":\", it needs to be preceded by \"\\\\\" so that it is notrecognized as password delimiter.  If the nickname contains \"\\\\\", it needs tobe escaped as \"\\\\\\\\\" so that it is not recognized as an escape character.<p>(iOS and macOS only) If curl is built against Secure Transport, then thecertificate string can either be the name of a certificate\/private key in thesystem or user keychain, or the path to a PKCS#12-encoded certificate andprivate key. If you want to use a file from the current directory, pleaseprecede it with \".\/\" prefix, in order to avoid confusion with a nickname.<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "see": [
            "--cert-type",
            "--key",
            "--key-type"
        ]
    },
    "--ciphers": {
        "title": "--ciphers &lt;list of ciphers>",
        "text": "<div class=\"short_info\">SSL ciphers to use<\/div><p>Protocol: TLS<p>Specifies which ciphers to use in the connection. The list of ciphers mustspecify valid ciphers. Read up on SSL cipher list details on this URL:<p> https:\/\/curl.haxx.se\/docs\/ssl-ciphers.html<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--compressed-ssh": {
        "title": "--compressed-ssh",
        "text": "<div class=\"short_info\">Enable SSH compression<\/div><p>Protocol: SCP SFTP<p>Enables built-in SSH compression.This is a request, not an order; the server may or may not do it.<p>Added in 7.56.0",
        "isBool": true
    },
    "--compressed": {
        "title": "--compressed",
        "text": "<div class=\"short_info\">Request compressed response<\/div><p>Protocol: HTTP<p>Request a compressed response using one of the algorithms curl supports, andsave the uncompressed document.  If this option is used and the server sendsan unsupported encoding, curl will report an error.",
        "isBool": true
    },
    "-K": {
        "use": "--config"
    },
    "--config": {
        "title": "-K, --config &lt;file>",
        "text": "<div class=\"short_info\">Read config from a file<\/div><p>Specify a text file to read curl arguments from. The command line argumentsfound in the text file will be used as if they were provided on the commandline.<p>Options and their parameters must be specified on the same line in the file,separated by whitespace, colon, or the equals sign. Long option names canoptionally be given in the config file without the initial double dashes andif so, the colon or equals characters can be used as separators. If the optionis specified with one or two dashes, there can be no colon or equals characterbetween the option and its parameter.<p>If the parameter is to contain whitespace, the parameter must be enclosedwithin quotes. Within double quotes, the following escape sequences areavailable: \\\\\\\\, \\\\\", \\\\t, \\\\n, \\\\r and \\\\v. A backslash preceding any otherletter is ignored. If the first column of a config line is a '#' character,the rest of the line will be treated as a comment. Only write one option perphysical line in the config file.<p>Specify the filename to --config as '-' to make curl read the file from stdin.<p>Note that to be able to specify a URL in the config file, you need to specifyit using the --url option, and not by simply writing the URL on its ownline. So, it could look similar to this:<p>url = \"https:\/\/curl.haxx.se\/docs\/\"<p>When curl is invoked, it (unless --disable is used) checks for a defaultconfig file and uses it if found. The default config file is checked for inthe following places in this order:<p>1) curl tries to find the \"home dir\": It first checks for the CURL_HOME andthen the HOME environment variables. Failing that, it uses getpwuid() onUnix-like systems (which returns the home dir given the current user in yoursystem). On Windows, it then checks for the APPDATA variable, or as a lastresort the '%USERPROFILE%\\\\Application Data'.<p>2) On windows, if there is no _curlrc file in the home dir, it checks for onein the same dir the curl executable is placed. On Unix-like systems, it willsimply try to load .curlrc from the determined home dir.<p>.nf#",
        "isBool": false
    },
    "--connect-timeout": {
        "title": "--connect-timeout &lt;seconds>",
        "text": "<div class=\"short_info\">Maximum time allowed for connection<\/div><p>Maximum time in seconds that you allow curl's connection to take.  This onlylimits the connection phase, so if curl connects within the given period itwill continue - if not it will exit.  Since version 7.32.0, this optionaccepts decimal values.<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "see": [
            "--max-time"
        ]
    },
    "--connect-to": {
        "title": "--connect-to &lt;HOST1",
        "text": "<div class=\"short_info\">Connect to host<\/div><p>For a request to the given HOST1:PORT1 pair, connect to HOST2:PORT2 instead.This option is suitable to direct requests at a specific server, e.g. at aspecific cluster node in a cluster of servers. This option is only used toestablish the network connection. It does NOT affect the hostname\/port that isused for TLS\/SSL (e.g. SNI, certificate verification) or for the applicationprotocols. \"HOST1\" and \"PORT1\" may be the empty string, meaning \"anyhost\/port\". \"HOST2\" and \"PORT2\" may also be the empty string, meaning \"use therequest's original host\/port\".<p>A \"host\" specified to this option is compared as a string, so it needs tomatch the name used in request URL. It can be either numerical such as\"127.0.0.1\" or the full host name such as \"example.org\".<p>This option can be used many times to add many connect rules.<p>Added in 7.49.0",
        "isBool": false,
        "see": [
            "--resolve",
            "--header"
        ]
    },
    "-C": {
        "use": "--continue-at"
    },
    "--continue-at": {
        "title": "-C, --continue-at &lt;offset>",
        "text": "<div class=\"short_info\">Resumed transfer offset<\/div><p>Continue\/Resume a previous file transfer at the given offset. The given offsetis the exact number of bytes that will be skipped, counting from the beginningof the source file before it is transferred to the destination.  If used withuploads, the FTP server command SIZE will not be used by curl.<p>Use \"-C -\" to tell curl to automatically find out where\/how to resume thetransfer. It then uses the given output\/input files to figure that out.<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "see": [
            "--range"
        ]
    },
    "-c": {
        "use": "--cookie-jar"
    },
    "--cookie-jar": {
        "title": "-c, --cookie-jar &lt;filename>",
        "text": "<div class=\"short_info\">Write cookies to <filename> after operation<\/div><p>Protocol: HTTP<p>Specify to which file you want curl to write all cookies after a completedoperation. Curl writes all cookies from its in-memory cookie storage to thegiven file at the end of operations. If no cookies are known, no data will bewritten. The file will be written using the Netscape cookie file format. Ifyou set the file name to a single dash, \"-\", the cookies will be written tostdout.<p>This command line option will activate the cookie engine that makes curlrecord and use cookies. Another way to activate it is to use the --cookieoption.<p>If the cookie jar can't be created or written to, the whole curl operationwon't fail or even report an error clearly. Using --verbose will get a warningdisplayed, but that is the only visible feedback you get about this possiblylethal situation.<p>If this option is used several times, the last specified file name will beused.",
        "isBool": false
    },
    "-b": {
        "use": "--cookie"
    },
    "--cookie": {
        "title": "-b, --cookie &lt;data>",
        "text": "<div class=\"short_info\">Send cookies from string\/file<\/div><p>Protocol: HTTP<p>Pass the data to the HTTP server in the Cookie header. It is supposedlythe data previously received from the server in a \"Set-Cookie:\" line.  Thedata should be in the format \"NAME1=VALUE1; NAME2=VALUE2\".<p>If no '=' symbol is used in the argument, it is instead treated as a filenameto read previously stored cookie from. This option also activates the cookieengine which will make curl record incoming cookies, which may be handy ifyou're using this in combination with the --location option or do multiple URLtransfers on the same invoke.<p>The file format of the file to read cookies from should be plain HTTP headers(Set-Cookie style) or the Netscape\/Mozilla cookie file format.<p>The file specified with --cookie is only used as input. No cookies will bewritten to the file. To store cookies, use the --cookie-jar option.<p>Exercise caution if you are using this option and multiple transfers mayoccur.  If you use the NAME1=VALUE1; format, or in a file use the Set-Cookieformat and don't specify a domain, then the cookie is sent for any domain(even after redirects are followed) and cannot be modified by a server-setcookie. If the cookie engine is enabled and a server sets a cookie of the samename then both will be sent on a future transfer to that server, likely notwhat you intended.  To address these issues set a domain in Set-Cookie (doingthat will include sub domains) or use the Netscape format.<p>If this option is used several times, the last one will be used.<p>Users very often want to both read cookies from a file and write updatedcookies back to a file, so using both --cookie and --cookie-jar in the samecommand line is common.",
        "isBool": false
    },
    "--create-dirs": {
        "title": "--create-dirs",
        "text": "<div class=\"short_info\">Create necessary local directory hierarchy<\/div><p>When used in conjunction with the --output option, curl will create thenecessary local directory hierarchy as needed. This option creates the dirsmentioned with the --output option, nothing else. If the --output file nameuses no dir or if the dirs it mentions already exist, no dir will be created.<p>To create remote directories when using FTP or SFTP, try --ftp-create-dirs.",
        "isBool": true
    },
    "--crlf": {
        "title": "--crlf",
        "text": "<div class=\"short_info\">Convert LF to CRLF in upload<\/div><p>Protocol: FTP SMTP<p>Convert LF to CRLF in upload. Useful for MVS (OS\/390).<p>(SMTP added in 7.40.0)",
        "isBool": true
    },
    "--crlfile": {
        "title": "--crlfile &lt;file>",
        "text": "<div class=\"short_info\">Get a CRL list in PEM format from the given file<\/div><p>Protocol: TLS<p>Provide a file using PEM format with a Certificate Revocation List that mayspecify peer certificates that are to be considered revoked.<p>If this option is used several times, the last one will be used.<p>Added in 7.19.7",
        "isBool": false
    },
    "--data-ascii": {
        "title": "--data-ascii &lt;data>",
        "text": "<div class=\"short_info\">HTTP POST ASCII data<\/div><p>Protocol: HTTP<p>This is just an alias for --data.",
        "isBool": false
    },
    "--data-binary": {
        "title": "--data-binary &lt;data>",
        "text": "<div class=\"short_info\">HTTP POST binary data<\/div><p>Protocol: HTTP<p>This posts data exactly as specified with no extra processing whatsoever.<p>If you start the data with the letter @, the rest should be a filename.  Datais posted in a similar manner as --data does, except that newlines andcarriage returns are preserved and conversions are never done.<p>If this option is used several times, the ones following the first will appenddata as described in --data.",
        "isBool": false
    },
    "--data-raw": {
        "title": "--data-raw &lt;data>",
        "text": "<div class=\"short_info\">HTTP POST data, '@' allowed<\/div><p>Protocol: HTTP<p>This posts data similarly to --data but without the specialinterpretation of the @ character.<p>Added in 7.43.0",
        "isBool": false,
        "see": [
            "--data"
        ]
    },
    "--data-urlencode": {
        "title": "--data-urlencode &lt;data>",
        "text": "<div class=\"short_info\">HTTP POST data url encoded<\/div><p>Protocol: HTTP<p>This posts data, similar to the other --data options with the exceptionthat this performs URL-encoding.<p>To be CGI-compliant, the <data> part should begin with a \\fIname\\fP followedby a separator and a content specification. The <data> part can be passed tocurl using one of the following syntaxes:.RS.IP \"content\"This will make curl URL-encode the content and pass that on. Just be carefulso that the content doesn't contain any = or @ symbols, as that will then makethe syntax match one of the other cases below!.IP \"=content\"This will make curl URL-encode the content and pass that on. The preceding =symbol is not included in the data..IP \"name=content\"This will make curl URL-encode the content part and pass that on. Note thatthe name part is expected to be URL-encoded already..IP \"@filename\"This will make curl load data from the given file (including any newlines),URL-encode that data and pass it on in the POST..IP \"name@filename\"This will make curl load data from the given file (including any newlines),URL-encode that data and pass it on in the POST. The name part gets an equalsign appended, resulting in \\fIname=urlencoded-file-content\\fP. Note that thename is expected to be URL-encoded already..RE<p>Added in 7.18.0",
        "isBool": false,
        "see": [
            "--data",
            "--data-raw"
        ]
    },
    "-d": {
        "use": "--data"
    },
    "--data": {
        "title": "-d, --data &lt;data>",
        "text": "<div class=\"short_info\">HTTP POST data<\/div><p>Protocol: HTTP<p>Sends the specified data in a POST request to the HTTP server, in the same waythat a browser does when a user has filled in an HTML form and presses thesubmit button. This will cause curl to pass the data to the server using thecontent-type application\/x-www-form-urlencoded.  Compare to --form.<p>--data-raw is almost the same but does not have a special interpretation ofthe @ character. To post data purely binary, you should instead use the--data-binary option.  To URL-encode the value of a form field you may use--data-urlencode.<p>If any of these options is used more than once on the same command line, thedata pieces specified will be merged together with a separating&-symbol. Thus, using '-d name=daniel -d skill=lousy' would generate a postchunk that looks like \\&'name=daniel&skill=lousy'.<p>If you start the data with the letter @, the rest should be a file name toread the data from, or - if you want curl to read the data fromstdin. Multiple files can also be specified. Posting data from a file named'foobar' would thus be done with --data @foobar. When --data is told to readfrom a file like that, carriage returns and newlines will be stripped out. Ifyou don't want the @ character to have a special interpretation use --data-rawinstead.",
        "isBool": false,
        "see": [
            "--data-binary",
            "--data-urlencode",
            "--data-raw"
        ],
        "overrides": [
            "--form",
            "--head",
            "--upload"
        ]
    },
    "--delegation": {
        "title": "--delegation &lt;LEVEL>",
        "text": "<div class=\"short_info\">GSS-API delegation permission<\/div><p>Protocol: GSS\/kerberos<p>Set LEVEL to tell the server what it is allowed to delegate when itcomes to user credentials..RS.IP \"none\"Don't allow any delegation..IP \"policy\"Delegates if and only if the OK-AS-DELEGATE flag is set in the Kerberosservice ticket, which is a matter of realm policy..IP \"always\"Unconditionally allow the server to delegate..RE",
        "isBool": false
    },
    "--digest": {
        "title": "--digest",
        "text": "<div class=\"short_info\">Use HTTP Digest Authentication<\/div><p>Protocol: HTTP<p>Enables HTTP Digest authentication. This is an authentication scheme thatprevents the password from being sent over the wire in clear text. Use this incombination with the normal --user option to set user name and password.<p>If this option is used several times, only the first one is used.",
        "isBool": true,
        "see": [
            "--user",
            "--proxy-digest",
            "--anyauth"
        ],
        "overrides": [
            "--basic",
            "--ntlm",
            "--negotiate"
        ]
    },
    "--disable-eprt": {
        "title": "--disable-eprt",
        "text": "<div class=\"short_info\">Inhibit using EPRT or LPRT<\/div><p>Protocol: FTP<p>Tell curl to disable the use of the EPRT and LPRT commands when doing activeFTP transfers. Curl will normally always first attempt to use EPRT, then LPRTbefore using PORT, but with this option, it will use PORT right away. EPRT andLPRT are extensions to the original FTP protocol, and may not work on allservers, but they enable more functionality in a better way than thetraditional PORT command.<p>--eprt can be used to explicitly enable EPRT again and --no-eprt is an aliasfor --disable-eprt.<p>If the server is accessed using IPv6, this option will have no effect as EPRTis necessary then.<p>Disabling EPRT only changes the active behavior. If you want to switch topassive mode you need to not use --ftp-port or force it with --ftp-pasv.",
        "isBool": true
    },
    "--disable-epsv": {
        "title": "--disable-epsv",
        "text": "<div class=\"short_info\">Inhibit using EPSV<\/div><p>Protocol: FTP<p>(FTP) Tell curl to disable the use of the EPSV command when doing passive FTPtransfers. Curl will normally always first attempt to use EPSV before PASV,but with this option, it will not try using EPSV.<p>--epsv can be used to explicitly enable EPSV again and --no-epsv is an aliasfor --disable-epsv.<p>If the server is an IPv6 host, this option will have no effect as EPSV isnecessary then.<p>Disabling EPSV only changes the passive behavior. If you want to switch toactive mode you need to use --ftp-port.",
        "isBool": true
    },
    "-q": {
        "use": "--disable"
    },
    "--disable": {
        "title": "-q, --disable",
        "text": "<div class=\"short_info\">Disable .curlrc<\/div><p>If used as the first parameter on the command line, the \\fIcurlrc\\fP configfile will not be read and used. See the --config for details on the defaultconfig file search path.",
        "isBool": true
    },
    "--dns-interface": {
        "title": "--dns-interface &lt;interface>",
        "text": "<div class=\"short_info\">Interface to use for DNS requests<\/div><p>Protocol: DNS<p>Tell curl to send outgoing DNS requests through <interface>. This option is acounterpart to --interface (which does not affect DNS). The supplied stringmust be an interface name (not an address).<p>Added in 7.33.0",
        "isBool": false,
        "see": [
            "--dns-ipv4-addr",
            "--dns-ipv6-addr"
        ]
    },
    "--dns-ipv4-addr": {
        "title": "--dns-ipv4-addr &lt;address>",
        "text": "<div class=\"short_info\">IPv4 address to use for DNS requests<\/div><p>Protocol: DNS<p>Tell curl to bind to <ip-address> when making IPv4 DNS requests, so thatthe DNS requests originate from this address. The argument should be asingle IPv4 address.<p>Added in 7.33.0",
        "isBool": false,
        "see": [
            "--dns-interface",
            "--dns-ipv6-addr"
        ]
    },
    "--dns-ipv6-addr": {
        "title": "--dns-ipv6-addr &lt;address>",
        "text": "<div class=\"short_info\">IPv6 address to use for DNS requests<\/div><p>Protocol: DNS<p>Tell curl to bind to <ip-address> when making IPv6 DNS requests, so thatthe DNS requests originate from this address. The argument should be asingle IPv6 address.<p>Added in 7.33.0",
        "isBool": false,
        "see": [
            "--dns-interface",
            "--dns-ipv4-addr"
        ]
    },
    "--dns-servers": {
        "title": "--dns-servers &lt;addresses>",
        "text": "<div class=\"short_info\">DNS server addrs to use<\/div><p>Set the list of DNS servers to be used instead of the system default.The list of IP addresses should be separated with commas. Port numbersmay also optionally be given as \\fI:<port-number>\\fP after each IPaddress.<p>Added in 7.33.0",
        "isBool": false
    },
    "-D": {
        "use": "--dump-header"
    },
    "--dump-header": {
        "title": "-D, --dump-header &lt;filename>",
        "text": "<div class=\"short_info\">Write the received headers to <filename><\/div><p>Protocol: HTTP FTP<p>Write the received protocol headers to the specified file.<p>This option is handy to use when you want to store the headers that an HTTPsite sends to you. Cookies from the headers could then be read in a secondcurl invocation by using the --cookie option! The --cookie-jar option is abetter way to store cookies.<p>When used in FTP, the FTP server response lines are considered being \"headers\"and thus are saved there.<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "see": [
            "--output"
        ]
    },
    "--egd-file": {
        "title": "--egd-file &lt;file>",
        "text": "<div class=\"short_info\">EGD socket path for random data<\/div><p>Protocol: TLS<p>Specify the path name to the Entropy Gathering Daemon socket. The socket isused to seed the random engine for SSL connections.",
        "isBool": false,
        "see": [
            "--random-file"
        ]
    },
    "--engine": {
        "title": "--engine &lt;name>",
        "text": "<div class=\"short_info\">Crypto engine to use<\/div><p>Protocol: TLS<p>Select the OpenSSL crypto engine to use for cipher operations. Use --enginelist to print a list of build-time supported engines. Note that not all (ornone) of the engines may be available at run-time.",
        "isBool": false
    },
    "--expect100-timeout": {
        "title": "--expect100-timeout &lt;seconds>",
        "text": "<div class=\"short_info\">How long to wait for 100-continue<\/div><p>Protocol: HTTP<p>Maximum time in seconds that you allow curl to wait for a 100-continueresponse when curl emits an Expects: 100-continue header in its request. Bydefault curl will wait one second. This option accepts decimal values! Whencurl stops waiting, it will continue as if the response has been received.<p>Added in 7.47.0",
        "isBool": false,
        "see": [
            "--connect-timeout"
        ]
    },
    "--fail-early": {
        "title": "--fail-early",
        "text": "<div class=\"short_info\">Fail on first transfer error, do not continue<\/div><p>Fail and exit on the first detected transfer error.<p>When curl is used to do multiple transfers on the command line, it willattempt to operate on each given URL, one by one. By default, it will ignoreerrors if there are more URLs given and the last URL's success will determinethe error code curl returns. So early failures will be \"hidden\" by subsequentsuccessful transfers.<p>Using this option, curl will instead return an error on the first transferthat fails, independent of the amount of URLs that are given on the commandline. This way, no transfer failures go undetected by scripts and similar.<p>This option is global and does not need to be specified for each use of --next.<p>This option does not imply --fail, which causes transfers to fail due to theserver's HTTP status code. You can combine the two options, however note --failis not global and is therefore contained by --next.<p>Added in 7.52.0",
        "isBool": true
    },
    "-f": {
        "use": "--fail"
    },
    "--fail": {
        "title": "-f, --fail",
        "text": "<div class=\"short_info\">Fail silently (no output at all) on HTTP errors<\/div><p>Protocol: HTTP<p>Fail silently (no output at all) on server errors. This is mostly done tobetter enable scripts etc to better deal with failed attempts. In normal caseswhen an HTTP server fails to deliver a document, it returns an HTML documentstating so (which often also describes why and more). This flag will preventcurl from outputting that and return error 22.<p>This method is not fail-safe and there are occasions where non-successfulresponse codes will slip through, especially when authentication is involved(response codes 401 and 407).",
        "isBool": true
    },
    "--false-start": {
        "title": "--false-start",
        "text": "<div class=\"short_info\">Enable TLS False Start<\/div><p>Protocol: TLS<p>Tells curl to use false start during the TLS handshake. False start is a modewhere a TLS client will start sending application data before verifying theserver's Finished message, thus saving a round trip when performing a fullhandshake.<p>This is currently only implemented in the NSS and Secure Transport (on iOS 7.0or later, or OS X 10.9 or later) backends.<p>Added in 7.42.0",
        "isBool": true
    },
    "--form-string": {
        "title": "--form-string &lt;name=string>",
        "text": "<div class=\"short_info\">Specify multipart MIME data<\/div><p>Protocol: HTTP SMTP IMAP<p>Similar to --form except that the value string for the named parameter is usedliterally. Leading \\&'@' and \\&'<' characters, and the \\&';type=' string inthe value have no special meaning. Use this in preference to --form ifthere's any possibility that the string value may accidentally trigger the\\&'@' or \\&'<' features of --form.",
        "isBool": false,
        "see": [
            "--form"
        ]
    },
    "-F": {
        "use": "--form"
    },
    "--form": {
        "title": "-F, --form &lt;name=content>",
        "text": "<div class=\"short_info\">Specify multipart MIME data<\/div><p>Protocol: HTTP SMTP IMAP<p>For HTTP protocol family, this lets curl emulate a filled-in form in which auser has pressed the submit button. This causes curl to POST data using theContent-Type multipart\/form-data according to RFC 2388.<p>For SMTP and IMAP protocols, this is the mean to compose a multipart mailmessage to transmit.<p>This enables uploading of binaryfiles etc. To force the 'content' part to be a file, prefix the file name withan @ sign. To just get the content part from a file, prefix the file name withthe symbol <. The difference between @ and < is then that @ makes a file getattached in the post as a file upload, while the < makes a text field and justget the contents for that text field from a file.<p>Example: to send an image to an HTTP server, where \\&'profile' is the name ofthe form-field to which portrait.jpg will be the input:<p> curl -F profile=@portrait.jpg https:\/\/example.com\/upload.cgi<p>To read content from stdin instead of a file, use - as the filename. This goesfor both @ and < constructs. If stdin is not attached to a regular file, it isbuffered first to determine its size and allow a possible resend. Defining apart's data from a named non-regular file (such as a named pipe or similar) isunfortunately not subject to buffering and will be effectively read attransmission time; since the full size is unknown before the transfer starts,data is sent as chunks by HTTP and rejected by IMAP.<p>You can also tell curl what Content-Type to use by using 'type=', in a mannersimilar to:<p> curl -F \"web=@index.html;type=text\/html\" example.com<p>or<p> curl -F \"name=daniel;type=text\/foo\" example.com<p>You can also explicitly change the name field of a file upload part by settingfilename=, like this:<p> curl -F \"file=@localfile;filename=nameinpost\" example.com<p>If filename\/path contains ',' or ';', it must be quoted by double-quotes like:<p> curl -F \"file=@\\\\\"localfile\\\\\";filename=\\\\\"nameinpost\\\\\"\" example.com<p>or<p> curl -F 'file=@\"localfile\";filename=\"nameinpost\"' example.com<p>Note that if a filename\/path is quoted by double-quotes, any double-quoteor backslash within the filename must be escaped by backslash.<p>You can add custom headers to the field by setting headers=, like<p>  curl -F \"submit=OK;headers=\\\\\"X-submit-type: OK\\\\\"\" example.com<p>or<p>  curl -F \"submit=OK;headers=@headerfile\" example.com<p>The headers= keyword may appear more that once and above notes about quotingapply. When headers are read from a file, Empty lines and lines startingwith '#' are comments and ignored; each header can be folded by splittingbetween two words and starting the continuation line with a space; embeddedcarriage-returns and trailing spaces are stripped.Here is an example of a header file contents:<p>  # This file contain two headers..br  X-header-1: this is a header<p>  # The following header is folded..br  X-header-2: this is.br   another header<p>To support sending multipart mail messages, the syntax is extended as follows:.br- name can be omitted: the equal sign is the first character of the argument,.br- if data starts with '(', this signals to start a new multipart: it can befollowed by a content type specification..br- a multipart can be terminated with a '=)' argument.<p>Example: the following command sends an SMTP mime e-mail consisting in aninline part in two alternative formats: plain text and HTML. It attaches atext file:<p> curl -F '=(;type=multipart\/alternative' \\\\.br         -F '=plain text message' \\\\.br         -F '= <body>HTML message<\/body>;type=text\/html' \\\\.br      -F '=)' -F '=@textfile.txt' ...  smtp:\/\/example.com<p>Data can be encoded for transfer using encoder=. Available encodings are\\fIbinary\\fP and \\fI8bit\\fP that do nothing else than adding the correspondingContent-Transfer-Encoding header, \\fI7bit\\fP that only rejects 8-bit characterswith a transfer error, \\fIquoted-printable\\fP and \\fIbase64\\fP that encodesdata according to the corresponding schemes, limiting lines length to76 characters.<p>Example: send multipart mail with a quoted-printable text message and abase64 attached file:<p> curl -F '=text message;encoder=quoted-printable' \\\\.br      -F '=@localfile;encoder=base64' ... smtp:\/\/example.com<p>See further examples and details in the MANUAL.<p>This option can be used multiple times.",
        "isBool": false,
        "overrides": [
            "--data",
            "--head",
            "--upload"
        ]
    },
    "--ftp-account": {
        "title": "--ftp-account &lt;data>",
        "text": "<div class=\"short_info\">Account data string<\/div><p>Protocol: FTP<p>When an FTP server asks for \"account data\" after user name and password hasbeen provided, this data is sent off using the ACCT command.<p>If this option is used several times, the last one will be used.<p>Added in 7.13.0",
        "isBool": false
    },
    "--ftp-alternative-to-user": {
        "title": "--ftp-alternative-to-user &lt;command>",
        "text": "<div class=\"short_info\">String to replace USER [name]<\/div><p>Protocol: FTP<p>If authenticating with the USER and PASS commands fails, send this command.When connecting to Tumbleweed's Secure Transport server over FTPS using aclient certificate, using \"SITE AUTH\" will tell the server to retrieve theusername from the certificate.<p>Added in 7.15.5",
        "isBool": false
    },
    "--ftp-create-dirs": {
        "title": "--ftp-create-dirs",
        "text": "<div class=\"short_info\">Create the remote dirs if not present<\/div><p>Protocol: FTP SFTP<p>When an FTP or SFTP URL\/operation uses a path that doesn't currently exist onthe server, the standard behavior of curl is to fail. Using this option, curlwill instead attempt to create missing directories.",
        "isBool": true,
        "see": [
            "--create-dirs"
        ]
    },
    "--ftp-method": {
        "title": "--ftp-method &lt;method>",
        "text": "<div class=\"short_info\">Control CWD usage<\/div><p>Protocol: FTP<p>Control what method curl should use to reach a file on an FTP(S)server. The method argument should be one of the following alternatives:.RS.IP multicwdcurl does a single CWD operation for each path part in the given URL. For deephierarchies this means very many commands. This is how RFC 1738 says it shouldbe done. This is the default but the slowest behavior..IP nocwdcurl does no CWD at all. curl will do SIZE, RETR, STOR etc and give a fullpath to the server for all these commands. This is the fastest behavior..IP singlecwdcurl does one CWD with the full target directory and then operates on the file\\&\"normally\" (like in the multicwd case). This is somewhat more standardscompliant than 'nocwd' but without the full penalty of 'multicwd'..RE<p>Added in 7.15.1",
        "isBool": false
    },
    "--ftp-pasv": {
        "title": "--ftp-pasv",
        "text": "<div class=\"short_info\">Use PASV\/EPSV instead of PORT<\/div><p>Protocol: FTP<p>Use passive mode for the data connection. Passive is the internal defaultbehavior, but using this option can be used to override a previous --ftp-portoption.<p>If this option is used several times, only the first one is used. Undoing anenforced passive really isn't doable but you must then instead enforce thecorrect --ftp-port again.<p>Passive mode means that curl will try the EPSV command first and then PASV,unless --disable-epsv is used.<p>Added in 7.11.0",
        "isBool": true,
        "see": [
            "--disable-epsv"
        ]
    },
    "-P": {
        "use": "--ftp-port"
    },
    "--ftp-port": {
        "title": "-P, --ftp-port &lt;address>",
        "text": "<div class=\"short_info\">Use PORT instead of PASV<\/div><p>Protocol: FTP<p>Reverses the default initiator\/listener roles when connecting with FTP. Thisoption makes curl use active mode. curl then tells the server to connect backto the client's specified address and port, while passive mode asks the serverto setup an IP address and port for it to connect to. <address> should be oneof:.RS.IP interfacei.e \"eth0\" to specify which interface's IP address you want to use (Unix only).IP \"IP address\"i.e \"192.168.10.1\" to specify the exact IP address.IP \"host name\"i.e \"my.host.domain\" to specify the machine.IP \"-\"make curl pick the same IP address that is already used for the controlconnection.RE<p>If this option is used several times, the last one will be used. Disable theuse of PORT with --ftp-pasv. Disable the attempt to use the EPRT commandinstead of PORT by using --disable-eprt. EPRT is really PORT++.<p>Since 7.19.5, you can append \\&\":[start]-[end]\\&\" to the right of the address,to tell curl what TCP port range to use. That means you specify a port range,from a lower to a higher number. A single number works as well, but do notethat it increases the risk of failure since the port may not be available.",
        "isBool": false,
        "see": [
            "--ftp-pasv",
            "--disable-eprt"
        ]
    },
    "--ftp-pret": {
        "title": "--ftp-pret",
        "text": "<div class=\"short_info\">Send PRET before PASV<\/div><p>Protocol: FTP<p>Tell curl to send a PRET command before PASV (and EPSV). Certain FTP servers,mainly drftpd, require this non-standard command for directory listings aswell as up and downloads in PASV mode.<p>Added in 7.20.0",
        "isBool": true
    },
    "--ftp-skip-pasv-ip": {
        "title": "--ftp-skip-pasv-ip",
        "text": "<div class=\"short_info\">Skip the IP address for PASV<\/div><p>Protocol: FTP<p>Tell curl to not use the IP address the server suggests in its responseto curl's PASV command when curl connects the data connection. Instead curlwill re-use the same IP address it already uses for the controlconnection.<p>This option has no effect if PORT, EPRT or EPSV is used instead of PASV.<p>Added in 7.14.2",
        "isBool": true,
        "see": [
            "--ftp-pasv"
        ]
    },
    "--ftp-ssl-ccc-mode": {
        "title": "--ftp-ssl-ccc-mode &lt;active\/passive>",
        "text": "<div class=\"short_info\">Set CCC mode<\/div><p>Protocol: FTP<p>Sets the CCC mode. The passive mode will not initiate the shutdown, butinstead wait for the server to do it, and will not reply to the shutdown fromthe server. The active mode initiates the shutdown and waits for a reply fromthe server.<p>Added in 7.16.2",
        "isBool": false,
        "see": [
            "--ftp-ssl-ccc"
        ]
    },
    "--ftp-ssl-ccc": {
        "title": "--ftp-ssl-ccc",
        "text": "<div class=\"short_info\">Send CCC after authenticating<\/div><p>Protocol: FTP<p>Use CCC (Clear Command Channel) Shuts down the SSL\/TLS layer afterauthenticating. The rest of the control channel communication will beunencrypted. This allows NAT routers to follow the FTP transaction. Thedefault mode is passive.<p>Added in 7.16.1",
        "isBool": true,
        "see": [
            "--ssl",
            "--ftp-ssl-ccc-mode"
        ]
    },
    "--ftp-ssl-control": {
        "title": "--ftp-ssl-control",
        "text": "<div class=\"short_info\">Require SSL\/TLS for FTP login, clear for transfer<\/div><p>Protocol: FTP<p>Require SSL\/TLS for the FTP login, clear for transfer.  Allows secureauthentication, but non-encrypted data transfers for efficiency.  Fails thetransfer if the server doesn't support SSL\/TLS.<p>Added in 7.16.0",
        "isBool": true
    },
    "-G": {
        "use": "--get"
    },
    "--get": {
        "title": "-G, --get",
        "text": "<div class=\"short_info\">Put the post data in the URL and use GET<\/div><p>When used, this option will make all data specified with --data, --data-binaryor --data-urlencode to be used in an HTTP GET request instead of the POSTrequest that otherwise would be used. The data will be appended to the URLwith a '?' separator.<p>If used in combination with --head, the POST data will instead be appended tothe URL with a HEAD request.<p>If this option is used several times, only the first one is used. This isbecause undoing a GET doesn't make sense, but you should then instead enforcethe alternative method you prefer.",
        "isBool": true
    },
    "-g": {
        "use": "--globoff"
    },
    "--globoff": {
        "title": "-g, --globoff",
        "text": "<div class=\"short_info\">Disable URL sequences and ranges using {} and []<\/div><p>This option switches off the \"URL globbing parser\". When you set this option,you can specify URLs that contain the letters {}[] without having them beinginterpreted by curl itself. Note that these letters are not normal legal URLcontents but they should be encoded according to the URI standard.",
        "isBool": true
    },
    "-I": {
        "use": "--head"
    },
    "--head": {
        "title": "-I, --head",
        "text": "<div class=\"short_info\">Show document info only<\/div><p>Protocol: HTTP FTP FILE<p>Fetch the headers only! HTTP-servers feature the command HEAD which this usesto get nothing but the header of a document. When used on an FTP or FILE file,curl displays the file size and last modification time only.",
        "isBool": true
    },
    "-H": {
        "use": "--header"
    },
    "--header": {
        "title": "-H, --header &lt;header\/@file>",
        "text": "<div class=\"short_info\">Pass custom header(s) to server<\/div><p>Protocol: HTTP<p>Extra header to include in the request when sending HTTP to a server. You mayspecify any number of extra headers. Note that if you should add a customheader that has the same name as one of the internal ones curl would use, yourexternally set header will be used instead of the internal one. This allowsyou to make even trickier stuff than curl would normally do. You should notreplace internally set headers without knowing perfectly well what you'redoing. Remove an internal header by giving a replacement without content onthe right side of the colon, as in: -H \\&\"Host:\". If you send the customheader with no-value then its header must be terminated with a semicolon, suchas \\-H \\&\"X-Custom-Header;\" to send \"X-Custom-Header:\".<p>curl will make sure that each header you add\/replace is sent with the properend-of-line marker, you should thus \\fBnot\\fP add that as a part of the headercontent: do not add newlines or carriage returns, they will only mess things upfor you.<p>Starting in 7.55.0, this option can take an argument in @filename style, whichthen adds a header for each line in the input file. Using @- will make curlread the header file from stdin.<p>See also the --user-agent and --referer options.<p>Starting in 7.37.0, you need --proxy-header to send custom headers intendedfor a proxy.<p>Example:<p> curl -H \"X-First-Name: Joe\" http:\/\/example.com\/<p>\\fBWARNING\\fP: headers set with this option will be set in all requests - evenafter redirects are followed, like when told with --location. This can lead tothe header being sent to other hosts than the original host, so sensitiveheaders should be used with caution combined with following redirects.<p>This option can be used multiple times to add\/replace\/remove multiple headers.",
        "isBool": false
    },
    "-h": {
        "use": "--help"
    },
    "--help": {
        "title": "-h, --help",
        "text": "<div class=\"short_info\">This help text<\/div><p>Usage help. This lists all current command line options with a shortdescription.",
        "isBool": true
    },
    "--hostpubmd5": {
        "title": "--hostpubmd5 &lt;md5>",
        "text": "<div class=\"short_info\">Acceptable MD5 hash of the host public key<\/div><p>Protocol: SFTP SCP<p>Pass a string containing 32 hexadecimal digits. The string shouldbe the 128 bit MD5 checksum of the remote host's public key, curl will refusethe connection with the host unless the md5sums match.<p>Added in 7.17.1",
        "isBool": false
    },
    "-0": {
        "use": "--http1.0"
    },
    "--http1.0": {
        "title": "-0, --http1.0",
        "text": "<div class=\"short_info\">Use HTTP 1.0<\/div><p>Protocol: HTTP<p>Tells curl to use HTTP version 1.0 instead of using its internally preferredHTTP version.",
        "isBool": true,
        "overrides": [
            "--http1.1",
            "--http2"
        ]
    },
    "--http1.1": {
        "title": "--http1.1",
        "text": "<div class=\"short_info\">Use HTTP 1.1<\/div><p>Protocol: HTTP<p>Tells curl to use HTTP version 1.1.<p>Added in 7.33.0",
        "isBool": true,
        "overrides": [
            "--http1.0",
            "--http2"
        ]
    },
    "--http2-prior-knowledge": {
        "title": "--http2-prior-knowledge",
        "text": "<div class=\"short_info\">Use HTTP 2 without HTTP\/1.1 Upgrade<\/div><p>Protocol: HTTP<p>Tells curl to issue its non-TLS HTTP requests using HTTP\/2 without HTTP\/1.1Upgrade. It requires prior knowledge that the server supports HTTP\/2 straightaway. HTTPS requests will still do HTTP\/2 the standard way with negotiatedprotocol version in the TLS handshake.<p>Added in 7.49.0",
        "isBool": true,
        "overrides": [
            "--http1.1",
            "--http1.0",
            "--http2"
        ]
    },
    "--http2": {
        "title": "--http2",
        "text": "<div class=\"short_info\">Use HTTP 2<\/div><p>Protocol: HTTP<p>Tells curl to use HTTP version 2.<p>Added in 7.33.0",
        "isBool": true,
        "see": [
            "--no-alpn"
        ],
        "overrides": [
            "--http1.1",
            "--http1.0",
            "--http2-prior-knowledge"
        ]
    },
    "--ignore-content-length": {
        "title": "--ignore-content-length",
        "text": "<div class=\"short_info\">Ignore the size of the remote resource<\/div><p>Protocol: FTP HTTP<p>For HTTP, Ignore the Content-Length header. This is particularly useful forservers running Apache 1.x, which will report incorrect Content-Length forfiles larger than 2 gigabytes.<p>For FTP (since 7.46.0), skip the RETR command to figure out the size beforedownloading a file.",
        "isBool": true
    },
    "-i": {
        "use": "--include"
    },
    "--include": {
        "title": "-i, --include",
        "text": "<div class=\"short_info\">Include protocol response headers in the output<\/div><p>Include the HTTP response headers in the output. The HTTP response headers caninclude things like server name, cookies, date of the document, HTTP versionand more...<p>To view the request headers, consider the --verbose option.",
        "isBool": true,
        "see": [
            "--verbose"
        ]
    },
    "-k": {
        "use": "--insecure"
    },
    "--insecure": {
        "title": "-k, --insecure",
        "text": "<div class=\"short_info\">Allow insecure server connections when using SSL<\/div><p>Protocol: TLS<p>By default, every SSL connection curl makes is verified to be secure. Thisoption allows curl to proceed and operate even for server connectionsotherwise considered insecure.<p>The server connection is verified by making sure the server's certificatecontains the right name and verifies successfully using the cert store.<p>See this online resource for further details: https:\/\/curl.haxx.se\/docs\/sslcerts.html",
        "isBool": true,
        "see": [
            "--proxy-insecure",
            "--cacert"
        ]
    },
    "--interface": {
        "title": "--interface &lt;name>",
        "text": "<div class=\"short_info\">Use network INTERFACE (or address)<\/div><p>Perform an operation using a specified interface. You can enter interfacename, IP address or host name. An example could look like:<p> curl --interface eth0:1 https:\/\/www.example.com\/<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "see": [
            "--dns-interface"
        ]
    },
    "-4": {
        "use": "--ipv4"
    },
    "--ipv4": {
        "title": "-4, --ipv4",
        "text": "<div class=\"short_info\">Resolve names to IPv4 addresses<\/div><p>This option tells curl to resolve names to IPv4 addresses only, and not forexample try IPv6.",
        "isBool": true,
        "see": [
            "--http1.1",
            "--http2"
        ],
        "overrides": [
            "--ipv6"
        ]
    },
    "-6": {
        "use": "--ipv6"
    },
    "--ipv6": {
        "title": "-6, --ipv6",
        "text": "<div class=\"short_info\">Resolve names to IPv6 addresses<\/div><p>This option tells curl to resolve names to IPv6 addresses only, and not forexample try IPv4.",
        "isBool": true,
        "see": [
            "--http1.1",
            "--http2"
        ],
        "overrides": [
            "--ipv6"
        ]
    },
    "-j": {
        "use": "--junk-session-cookies"
    },
    "--junk-session-cookies": {
        "title": "-j, --junk-session-cookies",
        "text": "<div class=\"short_info\">Ignore session cookies read from file<\/div><p>Protocol: HTTP<p>When curl is told to read cookies from a given file, this option will make itdiscard all \"session cookies\". This will basically have the same effect as ifa new session is started. Typical browsers always discard session cookies whenthey're closed down.",
        "isBool": true,
        "see": [
            "--cookie",
            "--cookie-jar"
        ]
    },
    "--keepalive-time": {
        "title": "--keepalive-time &lt;seconds>",
        "text": "<div class=\"short_info\">Interval time for keepalive probes<\/div><p>This option sets the time a connection needs to remain idle before sendingkeepalive probes and the time between individual keepalive probes. It iscurrently effective on operating systems offering the TCP_KEEPIDLE andTCP_KEEPINTVL socket options (meaning Linux, recent AIX, HP-UX and more). Thisoption has no effect if --no-keepalive is used.<p>If this option is used several times, the last one will be used. Ifunspecified, the option defaults to 60 seconds.<p>Added in 7.18.0",
        "isBool": false
    },
    "--key-type": {
        "title": "--key-type &lt;type>",
        "text": "<div class=\"short_info\">Private key file type (DER\/PEM\/ENG)<\/div><p>Protocol: TLS<p>Private key file type. Specify which type your --key provided private keyis. DER, PEM, and ENG are supported. If not specified, PEM is assumed.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--key": {
        "title": "--key &lt;key>",
        "text": "<div class=\"short_info\">Private key file name<\/div><p>Protocol: TLS SSH<p>Private key file name. Allows you to provide your private key in this separatefile. For SSH, if not specified, curl tries the following candidates in order:'~\/.ssh\/id_rsa', '~\/.ssh\/id_dsa', '.\/id_rsa', '.\/id_dsa'.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--krb": {
        "title": "--krb &lt;level>",
        "text": "<div class=\"short_info\">Enable Kerberos with security <level><\/div><p>Protocol: FTP<p>Enable Kerberos authentication and use. The level must be entered and shouldbe one of 'clear', 'safe', 'confidential', or 'private'. Should you use alevel that is not one of these, 'private' will instead be used.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--libcurl": {
        "title": "--libcurl &lt;file>",
        "text": "<div class=\"short_info\">Dump libcurl equivalent code of this command line<\/div><p>Append this option to any ordinary curl command line, and you will get alibcurl-using C source code written to the file that does the equivalentof what your command-line operation does!<p>If this option is used several times, the last given file name will beused.<p>Added in 7.16.1",
        "isBool": false
    },
    "--limit-rate": {
        "title": "--limit-rate &lt;speed>",
        "text": "<div class=\"short_info\">Limit transfer speed to RATE<\/div><p>Specify the maximum transfer rate you want curl to use - for both downloadsand uploads. This feature is useful if you have a limited pipe and you'd likeyour transfer not to use your entire bandwidth. To make it slower than itotherwise would be.<p>The given speed is measured in bytes\/second, unless a suffix is appended.Appending 'k' or 'K' will count the number as kilobytes, 'm' or M' makes itmegabytes, while 'g' or 'G' makes it gigabytes. Examples: 200K, 3m and 1G.<p>If you also use the --speed-limit option, that option will take precedence andmight cripple the rate-limiting slightly, to help keeping the speed-limitlogic working.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "-l": {
        "use": "--list-only"
    },
    "--list-only": {
        "title": "-l, --list-only",
        "text": "<div class=\"short_info\">List only mode<\/div><p>Protocol: FTP POP3<p>(FTP)When listing an FTP directory, this switch forces a name-only view. This isespecially useful if the user wants to machine-parse the contents of an FTPdirectory since the normal directory view doesn't use a standard look orformat. When used like this, the option causes a NLST command to be sent tothe server instead of LIST.<p>Note: Some FTP servers list only files in their response to NLST; they do notinclude sub-directories and symbolic links.<p>(POP3)When retrieving a specific email from POP3, this switch forces a LIST commandto be performed instead of RETR. This is particularly useful if the user wantsto see if a specific message id exists on the server and what size it is.<p>Note: When combined with --request, this option can be used to send an UIDLcommand instead, so the user may use the email's unique identifier rather thanit's message id to make the request.<p>Added in 7.21.5",
        "isBool": true
    },
    "--local-port": {
        "title": "--local-port &lt;num\/range>",
        "text": "<div class=\"short_info\">Force use of RANGE for local port numbers<\/div><p>Set a preferred single number or range (FROM-TO) of local port numbers to usefor the connection(s).  Note that port numbers by nature are a scarce resourcethat will be busy at times so setting this range to something too narrow mightcause unnecessary connection setup failures.<p>Added in 7.15.2",
        "isBool": false
    },
    "--location-trusted": {
        "title": "--location-trusted",
        "text": "<div class=\"short_info\">Like --location, and send auth to other hosts<\/div><p>Protocol: HTTP<p>Like --location, but will allow sending the name + password to all hosts thatthe site may redirect to. This may or may not introduce a security breach ifthe site redirects you to a site to which you'll send your authentication info(which is plaintext in the case of HTTP Basic authentication).",
        "isBool": true,
        "see": [
            "--user"
        ]
    },
    "-L": {
        "use": "--location"
    },
    "--location": {
        "title": "-L, --location",
        "text": "<div class=\"short_info\">Follow redirects<\/div><p>Protocol: HTTP<p>If the server reports that the requested page has moved to a differentlocation (indicated with a Location: header and a 3XX response code), thisoption will make curl redo the request on the new place. If used together with--include or --head, headers from all requested pages will be shown. Whenauthentication is used, curl only sends its credentials to the initialhost. If a redirect takes curl to a different host, it won't be able tointercept the user+password. See also --location-trusted on how to changethis. You can limit the amount of redirects to follow by using the--max-redirs option.<p>When curl follows a redirect and the request is not a plain GET (for examplePOST or PUT), it will do the following request with a GET if the HTTP responsewas 301, 302, or 303. If the response code was any other 3xx code, curl willre-send the following request using the same unmodified method.<p>You can tell curl to not change the non-GET request method to GET after a 30xresponse by using the dedicated options for that: --post301, --post302 and--post303.",
        "isBool": true
    },
    "--login-options": {
        "title": "--login-options &lt;options>",
        "text": "<div class=\"short_info\">Server login options<\/div><p>Protocol: IMAP POP3 SMTP<p>Specify the login options to use during server authentication.<p>You can use the login options to specify protocol specific options that maybe used during authentication. At present only IMAP, POP3 and SMTP supportlogin options. For more information about the login options please seeRFC 2384, RFC 5092 and IETF draft draft-earhart-url-smtp-00.txt<p>If this option is used several times, the last one will be used.<p>Added in 7.34.0",
        "isBool": false
    },
    "--mail-auth": {
        "title": "--mail-auth &lt;address>",
        "text": "<div class=\"short_info\">Originator address of the original email<\/div><p>Protocol: SMTP<p>Specify a single address. This will be used to specify the authenticationaddress (identity) of a submitted message that is being relayed to anotherserver.<p>Added in 7.25.0",
        "isBool": false,
        "see": [
            "--mail-rcpt",
            "--mail-from"
        ]
    },
    "--mail-from": {
        "title": "--mail-from &lt;address>",
        "text": "<div class=\"short_info\">Mail from this address<\/div><p>Protocol: SMTP<p>Specify a single address that the given mail should get sent from.<p>Added in 7.20.0",
        "isBool": false,
        "see": [
            "--mail-rcpt",
            "--mail-auth"
        ]
    },
    "--mail-rcpt": {
        "title": "--mail-rcpt &lt;address>",
        "text": "<div class=\"short_info\">Mail from this address<\/div><p>Protocol: SMTP<p>Specify a single address, user name or mailing list name. Repeat thisoption several times to send to multiple recipients.<p>When performing a mail transfer, the recipient should specify a valid emailaddress to send the mail to.<p>When performing an address verification (VRFY command), the recipient should bespecified as the user name or user name and domain (as per Section 3.5 ofRFC5321). (Added in 7.34.0)<p>When performing a mailing list expand (EXPN command), the recipient should bespecified using the mailing list name, such as \"Friends\" or \"London-Office\".(Added in 7.34.0)<p>Added in 7.20.0",
        "isBool": false
    },
    "-M": {
        "use": "--manual"
    },
    "--manual": {
        "title": "-M, --manual",
        "text": "<div class=\"short_info\">Display the full manual<\/div><p>Manual. Display the huge help text.",
        "isBool": true
    },
    "--max-filesize": {
        "title": "--max-filesize &lt;bytes>",
        "text": "<div class=\"short_info\">Maximum file size to download<\/div><p>Specify the maximum size (in bytes) of a file to download. If the filerequested is larger than this value, the transfer will not start and curl willreturn with exit code 63.<p>\\fBNOTE:\\fP The file size is not always known prior to download, and for suchfiles this option has no effect even if the file transfer ends up being largerthan this given limit. This concerns both FTP and HTTP transfers.",
        "isBool": false,
        "see": [
            "--limit-rate"
        ]
    },
    "--max-redirs": {
        "title": "--max-redirs &lt;num>",
        "text": "<div class=\"short_info\">Maximum number of redirects allowed<\/div><p>Protocol: HTTP<p>Set maximum number of redirection-followings allowed. When --location is used,is used to prevent curl from following redirections \\&\"in absurdum\". Bydefault, the limit is set to 50 redirections. Set this option to -1 to make itunlimited.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "-m": {
        "use": "--max-time"
    },
    "--max-time": {
        "title": "-m, --max-time &lt;time>",
        "text": "<div class=\"short_info\">Maximum time allowed for the transfer<\/div><p>Maximum time in seconds that you allow the whole operation to take.  This isuseful for preventing your batch jobs from hanging for hours due to slownetworks or links going down.  Since 7.32.0, this option accepts decimalvalues, but the actual timeout will decrease in accuracy as the specifiedtimeout increases in decimal precision.<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "see": [
            "--connect-timeout"
        ]
    },
    "--metalink": {
        "title": "--metalink",
        "text": "<div class=\"short_info\">Process given URLs as metalink XML file<\/div><p>This option can tell curl to parse and process a given URI as Metalink file(both version 3 and 4 (RFC 5854) are supported) and make use of the mirrorslisted within for failover if there are errors (such as the file or server notbeing available). It will also verify the hash of the file after the downloadcompletes. The Metalink file itself is downloaded and processed in memory andnot stored in the local file system.<p>Example to use a remote Metalink file:<p> curl --metalink http:\/\/www.example.com\/example.metalink<p>To use a Metalink file in the local file system, use FILE protocol (file:\/\/):<p> curl --metalink file:\/\/example.metalink<p>Please note that if FILE protocol is disabled, there is no way to use a localMetalink file at the time of this writing. Also note that if --metalink and--include are used together, --include will be ignored. This is becauseincluding headers in the response will break Metalink parser and if theheaders are included in the file described in Metalink file, hash check willfail.<p>Added in 7.27.0",
        "isBool": true
    },
    "--negotiate": {
        "title": "--negotiate",
        "text": "<div class=\"short_info\">Use HTTP Negotiate (SPNEGO) authentication<\/div><p>Protocol: HTTP<p>Enables Negotiate (SPNEGO) authentication.<p>This option requires a library built with GSS-API or SSPI support. Use--version to see if your curl supports GSS-API\/SSPI or SPNEGO.<p>When using this option, you must also provide a fake --user option to activatethe authentication code properly. Sending a '-u :' is enough as the user nameand password from the --user option aren't actually used.<p>If this option is used several times, only the first one is used.",
        "isBool": true,
        "see": [
            "--basic",
            "--ntlm",
            "--anyauth",
            "--proxy-negotiate"
        ]
    },
    "--netrc-file": {
        "title": "--netrc-file &lt;filename>",
        "text": "<div class=\"short_info\">Specify FILE for netrc<\/div><p>This option is similar to --netrc, except that you provide the path (absoluteor relative) to the netrc file that Curl should use.  You can only specify onenetrc file per invocation. If several --netrc-file options are provided,the last one will be used.<p>It will abide by --netrc-optional if specified.<p>Added in 7.21.5",
        "isBool": false,
        "overrides": [
            "--netrc"
        ]
    },
    "--netrc-optional": {
        "title": "--netrc-optional",
        "text": "<div class=\"short_info\">Use either .netrc or URL<\/div><p>Very similar to --netrc, but this option makes the .netrc usage \\fBoptional\\fPand not mandatory as the --netrc option does.",
        "isBool": true,
        "see": [
            "--netrc-file"
        ],
        "overrides": [
            "--netrc"
        ]
    },
    "-n": {
        "use": "--netrc"
    },
    "--netrc": {
        "title": "-n, --netrc",
        "text": "<div class=\"short_info\">Must read .netrc for user name and password<\/div><p>Makes curl scan the \\fI.netrc\\fP (\\fI_netrc\\fP on Windows) file in the user'shome directory for login name and password. This is typically used for FTP onUnix. If used with HTTP, curl will enable user authentication. See\\fInetrc(5)\\fP \\fIftp(1)\\fP for details on the file format. Curl will notcomplain if that file doesn't have the right permissions (it should not beeither world- or group-readable). The environment variable \"HOME\" is used tofind the home directory.<p>A quick and very simple example of how to setup a \\fI.netrc\\fP to allow curlto FTP to the machine host.domain.com with user name \\&'myself' and password\\&'secret' should look similar to:<p>.B \"machine host.domain.com login myself password secret\"",
        "isBool": true
    },
    "-": {
        "use": "--next"
    },
    "--next": {
        "title": "-, --next",
        "text": "<div class=\"short_info\">Make next URL use its separate set of options<\/div><p>Tells curl to use a separate operation for the following URL and associatedoptions. This allows you to send several URL requests, each with their ownspecific options, for example, such as different user names or custom requestsfor each.<p>--next will reset all local options and only global ones will have theirvalues survive over to the operation following the --next instruction. Globaloptions include --verbose, --trace, --trace-ascii and --fail-early.<p>For example, you can do both a GET and a POST in a single command line:<p> curl www1.example.com --next -d postthis www2.example.com<p>Added in 7.36.0",
        "isBool": true
    },
    "--no-alpn": {
        "title": "--no-alpn",
        "text": "<div class=\"short_info\">Disable the ALPN TLS extension<\/div><p>Protocol: HTTPS<p>Disable the ALPN TLS extension. ALPN is enabled by default if libcurl was builtwith an SSL library that supports ALPN. ALPN is used by a libcurl that supportsHTTP\/2 to negotiate HTTP\/2 support with the server during https sessions.<p>Added in 7.36.0",
        "isBool": true,
        "see": [
            "--no-npn",
            "--http2"
        ]
    },
    "-N": {
        "use": "--no-buffer"
    },
    "--no-buffer": {
        "title": "-N, --no-buffer",
        "text": "<div class=\"short_info\">Disable buffering of the output stream<\/div><p>Disables the buffering of the output stream. In normal work situations, curlwill use a standard buffered output stream that will have the effect that itwill output the data in chunks, not necessarily exactly when the data arrives.Using this option will disable that buffering.<p>Note that this is the negated option name documented. You can thus use--buffer to enforce the buffering.",
        "isBool": true
    },
    "--no-keepalive": {
        "title": "--no-keepalive",
        "text": "<div class=\"short_info\">Disable TCP keepalive on the connection<\/div><p>Disables the use of keepalive messages on the TCP connection. curl otherwiseenables them by default.<p>Note that this is the negated option name documented. You can thus use--keepalive to enforce keepalive.",
        "isBool": true
    },
    "--no-npn": {
        "title": "--no-npn",
        "text": "<div class=\"short_info\">Disable the NPN TLS extension<\/div><p>Protocol: HTTPS<p>Disable the NPN TLS extension. NPN is enabled by default if libcurl was builtwith an SSL library that supports NPN. NPN is used by a libcurl that supportsHTTP\/2 to negotiate HTTP\/2 support with the server during https sessions.<p>Added in 7.36.0",
        "isBool": true,
        "see": [
            "--no-alpn",
            "--http2"
        ]
    },
    "--no-sessionid": {
        "title": "--no-sessionid",
        "text": "<div class=\"short_info\">Disable SSL session-ID reusing<\/div><p>Protocol: TLS<p>Disable curl's use of SSL session-ID caching.  By default all transfers aredone using the cache. Note that while nothing should ever get hurt byattempting to reuse SSL session-IDs, there seem to be broken SSLimplementations in the wild that may require you to disable this in order foryou to succeed.<p>Note that this is the negated option name documented. You can thus use--sessionid to enforce session-ID caching.<p>Added in 7.16.0",
        "isBool": true
    },
    "--noproxy": {
        "title": "--noproxy &lt;no-proxy-list>",
        "text": "<div class=\"short_info\">List of hosts which do not use proxy<\/div><p>Comma-separated list of hosts which do not use a proxy, if one is specified.The only wildcard is a single * character, which matches all hosts, andeffectively disables the proxy. Each name in this list is matched as eithera domain which contains the hostname, or the hostname itself. For example,local.com would match local.com, local.com:80, and www.local.com, but notwww.notlocal.com.<p>Since 7.53.0, This option overrides the environment variables that disable theproxy. If there's an environment variable disabling a proxy, you can setnoproxy list to \\&\"\" to override it.<p>Added in 7.19.4",
        "isBool": false
    },
    "--ntlm-wb": {
        "title": "--ntlm-wb",
        "text": "<div class=\"short_info\">Use HTTP NTLM authentication with winbind<\/div><p>Protocol: HTTP<p>Enables NTLM much in the style --ntlm does, but hand over the authenticationto the separate binary ntlmauth application that is executed when needed.",
        "isBool": true,
        "see": [
            "--ntlm",
            "--proxy-ntlm"
        ]
    },
    "--ntlm": {
        "title": "--ntlm",
        "text": "<div class=\"short_info\">Use HTTP NTLM authentication<\/div><p>Protocol: HTTP<p>Enables NTLM authentication. The NTLM authentication method was designed byMicrosoft and is used by IIS web servers. It is a proprietary protocol,reverse-engineered by clever people and implemented in curl based on theirefforts. This kind of behavior should not be endorsed, you should encourageeveryone who uses NTLM to switch to a public and documented authenticationmethod instead, such as Digest.<p>If you want to enable NTLM for your proxy authentication, then use--proxy-ntlm.<p>If this option is used several times, only the first one is used.",
        "isBool": true,
        "see": [
            "--proxy-ntlm"
        ],
        "overrides": [
            "--basic",
            "--negotiated",
            "--digest",
            "--anyauth"
        ]
    },
    "--oauth2-bearer": {
        "title": "--oauth2-bearer &lt;token>",
        "text": "<div class=\"short_info\">OAuth 2 Bearer Token<\/div><p>Protocol: IMAP POP3 SMTP<p>Specify the Bearer Token for OAUTH 2.0 server authentication. The Bearer Tokenis used in conjunction with the user name which can be specified as part ofthe --url or --user options.<p>The Bearer Token and user name are formatted according to RFC 6750.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "-o": {
        "use": "--output"
    },
    "--output": {
        "title": "-o, --output &lt;file>",
        "text": "<div class=\"short_info\">Write to file instead of stdout<\/div><p>Write output to <file> instead of stdout. If you are using {} or [] to fetchmultiple documents, you can use '#' followed by a number in the <file>specifier. That variable will be replaced with the current string for the URLbeing fetched. Like in:<p> curl http:\/\/{one,two}.example.com -o \"file_#1.txt\"<p>or use several variables like:<p> curl http:\/\/{site,host}.host[1-5].com -o \"#1_#2\"<p>You may use this option as many times as the number of URLs you have. Forexample, if you specify two URLs on the same command line, you can use it likethis:<p>  curl -o aa example.com -o bb example.net<p>and the order of the -o options and the URLs doesn't matter, just that thefirst -o is for the first URL and so on, so the above command line can also bewritten as<p>  curl example.com example.net -o aa -o bb<p>See also the --create-dirs option to create the local directoriesdynamically. Specifying the output as '-' (a single dash) will force theoutput to be done to stdout.",
        "isBool": false,
        "see": [
            "--remote-name",
            "--remote-name-all",
            "--remote-header-name"
        ]
    },
    "--pass": {
        "title": "--pass &lt;phrase>",
        "text": "<div class=\"short_info\">Pass phrase for the private key<\/div><p>Protocol: SSH TLS<p>Passphrase for the private key<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--path-as-is": {
        "title": "--path-as-is",
        "text": "<div class=\"short_info\">Do not squash .. sequences in URL path<\/div><p>Tell curl to not handle sequences of \/..\/ or \/.\/ in the given URLpath. Normally curl will squash or merge them according to standards but withthis option set you tell it not to do that.<p>Added in 7.42.0",
        "isBool": true
    },
    "--pinnedpubkey": {
        "title": "--pinnedpubkey &lt;hashes>",
        "text": "<div class=\"short_info\">FILE\/HASHES Public key to verify peer against<\/div><p>Protocol: TLS<p>Tells curl to use the specified public key file (or hashes) to verify thepeer. This can be a path to a file which contains a single public key in PEMor DER format, or any number of base64 encoded sha256 hashes preceded by\\'sha256\/\/\\' and separated by \\';\\'<p>When negotiating a TLS or SSL connection, the server sends a certificateindicating its identity. A public key is extracted from this certificate andif it does not exactly match the public key provided to this option, curl willabort the connection before sending or receiving any data.<p>PEM\/DER support:  7.39.0: OpenSSL, GnuTLS and GSKit  7.43.0: NSS and wolfSSL\/CyaSSL  7.47.0: mbedtls  7.49.0: PolarSSLsha256 support:  7.44.0: OpenSSL, GnuTLS, NSS and wolfSSL\/CyaSSL.  7.47.0: mbedtls  7.49.0: PolarSSLOther SSL backends not supported.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--post301": {
        "title": "--post301",
        "text": "<div class=\"short_info\">Do not switch to GET after following a 301<\/div><p>Protocol: HTTP<p>Tells curl to respect RFC 7231\/6.4.2 and not convert POST requests into GETrequests when following a 301 redirection. The non-RFC behaviour is ubiquitousin web browsers, so curl does the conversion by default to maintainconsistency. However, a server may require a POST to remain a POST after sucha redirection. This option is meaningful only when using --location.<p>Added in 7.17.1",
        "isBool": true,
        "see": [
            "--post302",
            "--post303",
            "--location"
        ]
    },
    "--post302": {
        "title": "--post302",
        "text": "<div class=\"short_info\">Do not switch to GET after following a 302<\/div><p>Protocol: HTTP<p>Tells curl to respect RFC 7231\/6.4.3 and not convert POST requests into GETrequests when following a 302 redirection. The non-RFC behaviour is ubiquitousin web browsers, so curl does the conversion by default to maintainconsistency. However, a server may require a POST to remain a POST after sucha redirection. This option is meaningful only when using --location.<p>Added in 7.19.1",
        "isBool": true,
        "see": [
            "--post301",
            "--post303",
            "--location"
        ]
    },
    "--post303": {
        "title": "--post303",
        "text": "<div class=\"short_info\">Do not switch to GET after following a 303<\/div><p>Protocol: HTTP<p>Tells curl to respect RFC 7231\/6.4.4 and not convert POST requests into GETrequests when following a 303 redirection. The non-RFC behaviour is ubiquitousin web browsers, so curl does the conversion by default to maintainconsistency. However, a server may require a POST to remain a POST after sucha redirection. This option is meaningful only when using --location.<p>Added in 7.26.0",
        "isBool": true,
        "see": [
            "--post302",
            "--post301",
            "--location"
        ]
    },
    "--preproxy": {
        "title": "--preproxy [protocol",
        "text": "<div class=\"short_info\">Use this proxy first<\/div><p>Use the specified SOCKS proxy before connecting to an HTTP or HTTPS --proxy. Insuch a case curl first connects to the SOCKS proxy and then connects (throughSOCKS) to the HTTP or HTTPS proxy. Hence pre proxy.<p>The pre proxy string should be specified with a protocol:\/\/ prefix to specifyalternative proxy protocols. Use socks4:\/\/, socks4a:\/\/, socks5:\/\/ orsocks5h:\/\/ to request the specific SOCKS version to be used. No protocolspecified will make curl default to SOCKS4.<p>If the port number is not specified in the proxy string, it is assumed to be1080.<p>User and password that might be provided in the proxy string are URL decodedby curl. This allows you to pass in special characters such as @ by using %40or pass in a colon with %3a.<p>If this option is used several times, the last one will be used.<p>Added in 7.52.0",
        "isBool": false
    },
    "-#": {
        "use": "--progress-bar"
    },
    "--progress-bar": {
        "title": "-#, --progress-bar",
        "text": "<div class=\"short_info\">Display transfer progress as a bar<\/div><p>Make curl display transfer progress as a simple progress bar instead of thestandard, more informational, meter.<p>This progress bar draws a single line of '#' characters across the screen andshows a percentage if the transfer size is known. For transfers without aknown size, it will instead output one '#' character for every 1024 bytestransferred.",
        "isBool": true
    },
    "--proto-default": {
        "title": "--proto-default &lt;protocol>",
        "text": "<div class=\"short_info\">Use PROTOCOL for any URL missing a scheme<\/div><p>Tells curl to use \\fIprotocol\\fP for any URL missing a scheme name.<p>Example:<p> curl --proto-default https ftp.mozilla.org<p>An unknown or unsupported protocol causes error\\fICURLE_UNSUPPORTED_PROTOCOL\\fP (1).<p>This option does not change the default proxy protocol (http).<p>Without this option curl would make a guess based on the host, see --url fordetails.<p>Added in 7.45.0",
        "isBool": false
    },
    "--proto-redir": {
        "title": "--proto-redir &lt;protocols>",
        "text": "<div class=\"short_info\">Enable\/disable PROTOCOLS on redirect<\/div><p>Tells curl to limit what protocols it may use on redirect. Protocols denied by--proto are not overridden by this option. See --proto for how protocols arerepresented.<p>Example, allow only HTTP and HTTPS on redirect:<p> curl --proto-redir -all,http,https http:\/\/example.com<p>By default curl will allow all protocols on redirect except several disabledfor security reasons: Since 7.19.4 FILE and SCP are disabled, and since 7.40.0SMB and SMBS are also disabled. Specifying \\fIall\\fP or \\fI+all\\fP enables allprotocols on redirect, including those disabled for security.<p>Added in 7.20.2",
        "isBool": false
    },
    "--proto": {
        "title": "--proto &lt;protocols>",
        "text": "<div class=\"short_info\">Enable\/disable PROTOCOLS<\/div><p>Tells curl to limit what protocols it may use in the transfer. Protocols areevaluated left to right, are comma separated, and are each a protocol name or'all', optionally prefixed by zero or more modifiers. Available modifiers are:.RS.TP 3.B +Permit this protocol in addition to protocols already permitted (this isthe default if no modifier is used)..TP.B -Deny this protocol, removing it from the list of protocols already permitted..TP.B =Permit only this protocol (ignoring the list already permitted), thoughsubject to later modification by subsequent entries in the comma separatedlist..RE.IPFor example:.RS.TP 15.B --proto -ftpsuses the default protocols, but disables ftps.TP.B  --proto -all,https,+httponly enables http and https.TP.B --proto =http,httpsalso only enables http and https.RE<p>Unknown protocols produce a warning. This allows scripts to safely rely onbeing able to disable potentially dangerous protocols, without relying uponsupport for that protocol being built into curl to avoid an error.<p>This option can be used multiple times, in which case the effect is the sameas concatenating the protocols into one instance of the option.<p>Added in 7.20.2",
        "isBool": false,
        "see": [
            "--proto-redir",
            "--proto-default"
        ]
    },
    "--proxy-anyauth": {
        "title": "--proxy-anyauth",
        "text": "<div class=\"short_info\">Pick any proxy authentication method<\/div><p>Tells curl to pick a suitable authentication method when communicating withthe given HTTP proxy. This might cause an extra request\/response round-trip.<p>Added in 7.13.2",
        "isBool": true,
        "see": [
            "--proxy",
            "--proxy-basic",
            "--proxy-digest"
        ]
    },
    "--proxy-basic": {
        "title": "--proxy-basic",
        "text": "<div class=\"short_info\">Use Basic authentication on the proxy<\/div><p>Tells curl to use HTTP Basic authentication when communicating with the givenproxy. Use --basic for enabling HTTP Basic with a remote host. Basic is thedefault authentication method curl uses with proxies.",
        "isBool": true,
        "see": [
            "--proxy",
            "--proxy-anyauth",
            "--proxy-digest"
        ]
    },
    "--proxy-cacert": {
        "title": "--proxy-cacert &lt;file>",
        "text": "<div class=\"short_info\">CA certificate to verify peer against for proxy<\/div><p>Same as --cacert but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false,
        "see": [
            "--proxy-capath",
            "--cacert",
            "--capath",
            "--proxy"
        ]
    },
    "--proxy-capath": {
        "title": "--proxy-capath &lt;dir>",
        "text": "<div class=\"short_info\">CA directory to verify peer against for proxy<\/div><p>Same as --capath but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false,
        "see": [
            "--proxy-cacert",
            "--proxy",
            "--capath"
        ]
    },
    "--proxy-cert-type": {
        "title": "--proxy-cert-type &lt;type>",
        "text": "<div class=\"short_info\">Client certificate type for HTTS proxy<\/div><p>Same as --cert-type but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false
    },
    "--proxy-cert": {
        "title": "--proxy-cert &lt;cert[",
        "text": "<div class=\"short_info\">Set client certificate for proxy<\/div><p>Same as --cert but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false
    },
    "--proxy-ciphers": {
        "title": "--proxy-ciphers &lt;list>",
        "text": "<div class=\"short_info\">SSL ciphers to use for proxy<\/div><p>Same as --ciphers but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false
    },
    "--proxy-crlfile": {
        "title": "--proxy-crlfile &lt;file>",
        "text": "<div class=\"short_info\">Set a CRL list for proxy<\/div><p>Same as --crlfile but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false
    },
    "--proxy-digest": {
        "title": "--proxy-digest",
        "text": "<div class=\"short_info\">Use Digest authentication on the proxy<\/div><p>Tells curl to use HTTP Digest authentication when communicating with the givenproxy. Use --digest for enabling HTTP Digest with a remote host.",
        "isBool": true,
        "see": [
            "--proxy",
            "--proxy-anyauth",
            "--proxy-basic"
        ]
    },
    "--proxy-header": {
        "title": "--proxy-header &lt;header\/@file>",
        "text": "<div class=\"short_info\">Pass custom header(s) to proxy<\/div><p>Protocol: HTTP<p>Extra header to include in the request when sending HTTP to a proxy. You mayspecify any number of extra headers. This is the equivalent option to --headerbut is for proxy communication only like in CONNECT requests when you want aseparate header sent to the proxy to what is sent to the actual remote host.<p>curl will make sure that each header you add\/replace is sent with the properend-of-line marker, you should thus \\fBnot\\fP add that as a part of the headercontent: do not add newlines or carriage returns, they will only mess thingsup for you.<p>Headers specified with this option will not be included in requests that curlknows will not be sent to a proxy.<p>Starting in 7.55.0, this option can take an argument in @filename style, whichthen adds a header for each line in the input file. Using @- will make curlread the header file from stdin.<p>This option can be used multiple times to add\/replace\/remove multiple headers.<p>Added in 7.37.0",
        "isBool": false
    },
    "--proxy-insecure": {
        "title": "--proxy-insecure",
        "text": "<div class=\"short_info\">Do HTTPS proxy connections without verifying the proxy<\/div><p>Same as --insecure but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": true
    },
    "--proxy-key-type": {
        "title": "--proxy-key-type &lt;type>",
        "text": "<div class=\"short_info\">Private key file type for proxy<\/div><p>Same as --key-type but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false
    },
    "--proxy-key": {
        "title": "--proxy-key &lt;key>",
        "text": "<div class=\"short_info\">Private key for HTTPS proxy<\/div><p>Same as --key but used in HTTPS proxy context.",
        "isBool": false
    },
    "--proxy-negotiate": {
        "title": "--proxy-negotiate",
        "text": "<div class=\"short_info\">Use HTTP Negotiate (SPNEGO) authentication on the proxy<\/div><p>Tells curl to use HTTP Negotiate (SPNEGO) authentication when communicatingwith the given proxy. Use --negotiate for enabling HTTP Negotiate (SPNEGO)with a remote host.<p>Added in 7.17.1",
        "isBool": true,
        "see": [
            "--proxy-anyauth",
            "--proxy-basic"
        ]
    },
    "--proxy-ntlm": {
        "title": "--proxy-ntlm",
        "text": "<div class=\"short_info\">Use NTLM authentication on the proxy<\/div><p>Tells curl to use HTTP NTLM authentication when communicating with the givenproxy. Use --ntlm for enabling NTLM with a remote host.",
        "isBool": true,
        "see": [
            "--proxy-negotiate",
            "--proxy-anyauth"
        ]
    },
    "--proxy-pass": {
        "title": "--proxy-pass &lt;phrase>",
        "text": "<div class=\"short_info\">Pass phrase for the private key for HTTPS proxy<\/div><p>Same as --pass but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false
    },
    "--proxy-service-name": {
        "title": "--proxy-service-name &lt;name>",
        "text": "<div class=\"short_info\">SPNEGO proxy service name<\/div><p>This option allows you to change the service name for proxy negotiation.<p>Added in 7.43.0",
        "isBool": false
    },
    "--proxy-ssl-allow-beast": {
        "title": "--proxy-ssl-allow-beast",
        "text": "<div class=\"short_info\">Allow security flaw for interop for HTTPS proxy<\/div><p>Same as --ssl-allow-beast but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": true
    },
    "--proxy-tlsauthtype": {
        "title": "--proxy-tlsauthtype &lt;type>",
        "text": "<div class=\"short_info\">TLS authentication type for HTTPS proxy<\/div><p>Same as --tlsauthtype but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false
    },
    "--proxy-tlspassword": {
        "title": "--proxy-tlspassword &lt;string>",
        "text": "<div class=\"short_info\">TLS password for HTTPS proxy<\/div><p>Same as --tlspassword but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false
    },
    "--proxy-tlsuser": {
        "title": "--proxy-tlsuser &lt;name>",
        "text": "<div class=\"short_info\">TLS username for HTTPS proxy<\/div><p>Same as --tlsuser but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": false
    },
    "--proxy-tlsv1": {
        "title": "--proxy-tlsv1",
        "text": "<div class=\"short_info\">Use TLSv1 for HTTPS proxy<\/div><p>Same as --tlsv1 but used in HTTPS proxy context.<p>Added in 7.52.0",
        "isBool": true
    },
    "-U": {
        "use": "--proxy-user"
    },
    "--proxy-user": {
        "title": "-U, --proxy-user &lt;user",
        "text": "<div class=\"short_info\">Proxy user and password<\/div><p>Specify the user name and password to use for proxy authentication.<p>If you use a Windows SSPI-enabled curl binary and do either Negotiate or NTLMauthentication then you can tell curl to select the user name and passwordfrom your environment by specifying a single colon with this option: \"-U :\".<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "-x": {
        "use": "--proxy"
    },
    "--proxy": {
        "title": "-x, --proxy [protocol",
        "text": "<div class=\"short_info\">Use this proxy<\/div><p>Use the specified proxy.<p>The proxy string can be specified with a protocol:\/\/ prefix. No protocolspecified or http:\/\/ will be treated as HTTP proxy. Use socks4:\/\/, socks4a:\/\/,socks5:\/\/ or socks5h:\/\/ to request a specific SOCKS version to be used.(The protocol support was added in curl 7.21.7)<p>HTTPS proxy support via https:\/\/ protocol prefix was added in 7.52.0 forOpenSSL, GnuTLS and NSS.<p>Unrecognized and unsupported proxy protocols cause an error since 7.52.0.Prior versions may ignore the protocol and use http:\/\/ instead.<p>If the port number is not specified in the proxy string, it is assumed to be1080.<p>This option overrides existing environment variables that set the proxy touse. If there's an environment variable setting a proxy, you can set proxy to\\&\"\" to override it.<p>All operations that are performed over an HTTP proxy will transparently beconverted to HTTP. It means that certain protocol specific operations mightnot be available. This is not the case if you can tunnel through the proxy, asone with the --proxytunnel option.<p>User and password that might be provided in the proxy string are URL decodedby curl. This allows you to pass in special characters such as @ by using %40or pass in a colon with %3a.<p>The proxy host can be specified the exact same way as the proxy environmentvariables, including the protocol prefix (http:\/\/) and the embedded user +password.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--proxy1.0": {
        "title": "--proxy1.0 &lt;host[",
        "text": "<div class=\"short_info\">Use HTTP\/1.0 proxy on given port<\/div><p>Use the specified HTTP 1.0 proxy. If the port number is not specified, it isassumed at port 1080.<p>The only difference between this and the HTTP proxy option --proxy, is thatattempts to use CONNECT through the proxy will specify an HTTP 1.0 protocolinstead of the default HTTP 1.1.",
        "isBool": false
    },
    "-p": {
        "use": "--proxytunnel"
    },
    "--proxytunnel": {
        "title": "-p, --proxytunnel",
        "text": "<div class=\"short_info\">Operate through a HTTP proxy tunnel (using CONNECT)<\/div><p>When an HTTP proxy is used --proxy, this option will cause non-HTTP protocolsto attempt to tunnel through the proxy instead of merely using it to doHTTP-like operations. The tunnel approach is made with the HTTP proxy CONNECTrequest and requires that the proxy allows direct connect to the remote portnumber curl wants to tunnel through to.<p>To suppress proxy CONNECT response headers when curl is set to output headersuse --suppress-connect-headers.",
        "isBool": true,
        "see": [
            "--proxy"
        ]
    },
    "--pubkey": {
        "title": "--pubkey &lt;key>",
        "text": "<div class=\"short_info\">SSH Public key file name<\/div><p>Protocol: SFTP SCP<p>Public key file name. Allows you to provide your public key in this separatefile.<p>If this option is used several times, the last one will be used.<p>(As of 7.39.0, curl attempts to automatically extract the public key from theprivate key file, so passing this option is generally not required. Note thatthis public key extraction requires libcurl to be linked against a copy oflibssh2 1.2.8 or higher that is itself linked against OpenSSL.)",
        "isBool": false
    },
    "-Q": {
        "use": "--quote"
    },
    "--quote": {
        "title": "-Q, --quote",
        "text": "<div class=\"short_info\">Send command(s) to server before transfer<\/div><p>Protocol: FTP SFTP<p>Send an arbitrary command to the remote FTP or SFTP server. Quote commands aresent BEFORE the transfer takes place (just after the initial PWD command in anFTP transfer, to be exact). To make commands take place after a successfultransfer, prefix them with a dash '-'.  To make commands be sent after curlhas changed the working directory, just before the transfer command(s), prefixthe command with a '+' (this is only supported for FTP). You may specify anynumber of commands.<p>If the server returns failure for one of the commands, the entire operationwill be aborted. You must send syntactically correct FTP commands as RFC 959defines to FTP servers, or one of the commands listed below to SFTP servers.<p>This option can be used multiple times. When speaking to an FTP server, prefixthe command with an asterisk (*) to make curl continue even if the commandfails as by default curl will stop at first failure.<p>SFTP is a binary protocol. Unlike for FTP, curl interprets SFTP quote commandsitself before sending them to the server.  File names may be quotedshell-style to embed spaces or special characters.  Following is the list ofall supported SFTP quote commands:.RS.IP \"chgrp group file\"The chgrp command sets the group ID of the file named by the file operand tothe group ID specified by the group operand. The group operand is a decimalinteger group ID..IP \"chmod mode file\"The chmod command modifies the file mode bits of the specified file. Themode operand is an octal integer mode number..IP \"chown user file\"The chown command sets the owner of the file named by the file operand to theuser ID specified by the user operand. The user operand is a decimalinteger user ID..IP \"ln source_file target_file\"The ln and symlink commands create a symbolic link at the target_file locationpointing to the source_file location..IP \"mkdir directory_name\"The mkdir command creates the directory named by the directory_name operand..IP \"pwd\"The pwd command returns the absolute pathname of the current working directory..IP \"rename source target\"The rename command renames the file or directory named by the sourceoperand to the destination path named by the target operand..IP \"rm file\"The rm command removes the file specified by the file operand..IP \"rmdir directory\"The rmdir command removes the directory entry specified by the directoryoperand, provided it is empty..IP \"symlink source_file target_file\"See ln..RE",
        "isBool": true
    },
    "--random-file": {
        "title": "--random-file &lt;file>",
        "text": "<div class=\"short_info\">File for reading random data from<\/div><p>Specify the path name to file containing what will be considered as randomdata. The data may be used to seed the random engine for SSL connections.  Seealso the --egd-file option.",
        "isBool": false
    },
    "-r": {
        "use": "--range"
    },
    "--range": {
        "title": "-r, --range &lt;range>",
        "text": "<div class=\"short_info\">Retrieve only the bytes within RANGE<\/div><p>Protocol: HTTP FTP SFTP FILE<p>Retrieve a byte range (i.e a partial document) from a HTTP\/1.1, FTP or SFTPserver or a local FILE. Ranges can be specified in a number of ways..RS.TP 10.B 0-499specifies the first 500 bytes.TP.B 500-999specifies the second 500 bytes.TP.B -500specifies the last 500 bytes.TP.B 9500-specifies the bytes from offset 9500 and forward.TP.B 0-0,-1specifies the first and last byte only(*)(HTTP).TP.B 100-199,500-599specifies two separate 100-byte ranges(*) (HTTP).RE.IP(*) = NOTE that this will cause the server to reply with a multipartresponse!<p>Only digit characters (0-9) are valid in the 'start' and 'stop' fields of the\\&'start-stop' range syntax. If a non-digit character is given in the range,the server's response will be unspecified, depending on the server'sconfiguration.<p>You should also be aware that many HTTP\/1.1 servers do not have this featureenabled, so that when you attempt to get a range, you'll instead get the wholedocument.<p>FTP and SFTP range downloads only support the simple 'start-stop' syntax(optionally with one of the numbers omitted). FTP use depends on the extendedFTP command SIZE.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--raw": {
        "title": "--raw",
        "text": "<div class=\"short_info\">Do HTTP \"raw\"; no transfer decoding<\/div><p>Protocol: HTTP<p>When used, it disables all internal HTTP decoding of content or transferencodings and instead makes them passed on unaltered, raw.<p>Added in 7.16.2",
        "isBool": true
    },
    "-e": {
        "use": "--referer"
    },
    "--referer": {
        "title": "-e, --referer &lt;URL>",
        "text": "<div class=\"short_info\">Referrer URL<\/div><p>Protocol: HTTP<p>Sends the \"Referrer Page\" information to the HTTP server. This can also be setwith the --header flag of course.  When used with --location you can append\";auto\" to the --referer URL to make curl automatically set the previous URLwhen it follows a Location: header. The \\&\";auto\" string can be used alone,even if you don't set an initial --referer.<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "see": [
            "--user-agent",
            "--header"
        ]
    },
    "-J": {
        "use": "--remote-header-name"
    },
    "--remote-header-name": {
        "title": "-J, --remote-header-name",
        "text": "<div class=\"short_info\">Use the header-provided filename<\/div><p>Protocol: HTTP<p>This option tells the --remote-name option to use the server-specifiedContent-Disposition filename instead of extracting a filename from the URL.<p>If the server specifies a file name and a file with that name already existsin the current working directory it will not be overwritten and an error willoccur. If the server doesn't specify a file name then this option has noeffect.<p>There's no attempt to decode %-sequences (yet) in the provided file name, sothis option may provide you with rather unexpected file names.<p>\\fBWARNING\\fP: Exercise judicious use of this option, especially on Windows. Arogue server could send you the name of a DLL or other file that could possiblybe loaded automatically by Windows or some third party software.",
        "isBool": true
    },
    "--remote-name-all": {
        "title": "--remote-name-all",
        "text": "<div class=\"short_info\">Use the remote file name for all URLs<\/div><p>This option changes the default action for all given URLs to be dealt with asif --remote-name were used for each one. So if you want to disable that for aspecific URL after --remote-name-all has been used, you must use \"-o -\" or--no-remote-name.<p>Added in 7.19.0",
        "isBool": true
    },
    "-O": {
        "use": "--remote-name"
    },
    "--remote-name": {
        "title": "-O, --remote-name",
        "text": "<div class=\"short_info\">Write output to a file named as the remote file<\/div><p>Write output to a local file named like the remote file we get. (Only the filepart of the remote file is used, the path is cut off.)<p>The file will be saved in the current working directory. If you want the filesaved in a different directory, make sure you change the current workingdirectory before invoking curl with this option.<p>The remote file name to use for saving is extracted from the given URL,nothing else, and if it already exists it will be overwritten. If you want theserver to be able to choose the file name refer to --remote-header-name whichcan be used in addition to this option. If the server chooses a file name andthat name already exists it will not be overwritten.<p>There is no URL decoding done on the file name. If it has %20 or other URLencoded parts of the name, they will end up as-is as file name.<p>You may use this option as many times as the number of URLs you have.",
        "isBool": true
    },
    "-R": {
        "use": "--remote-time"
    },
    "--remote-time": {
        "title": "-R, --remote-time",
        "text": "<div class=\"short_info\">Set the remote file's time on the local output<\/div><p>When used, this will make curl attempt to figure out the timestamp of theremote file, and if that is available make the local file get that sametimestamp.",
        "isBool": true
    },
    "--request-target": {
        "title": "--request-target",
        "text": "<div class=\"short_info\">Specify the target for this request<\/div><p>Protocol: HTTP<p>Tells curl to use an alternative \"target\" (path) instead of using the path asprovided in the URL. Particularly useful when wanting to issue HTTP requestswithout leading slash or other data that doesn't follow the regular URLpattern, like \"OPTIONS *\".<p>Added in 7.55.0",
        "isBool": true
    },
    "-X": {
        "use": "--request"
    },
    "--request": {
        "title": "-X, --request &lt;command>",
        "text": "<div class=\"short_info\">Specify request command to use<\/div><p>(HTTP) Specifies a custom request method to use when communicating with theHTTP server.  The specified request method will be used instead of the methodotherwise used (which defaults to GET). Read the HTTP 1.1 specification fordetails and explanations. Common additional HTTP requests include PUT andDELETE, but related technologies like WebDAV offers PROPFIND, COPY, MOVE andmore.<p>Normally you don't need this option. All sorts of GET, HEAD, POST and PUTrequests are rather invoked by using dedicated command line options.<p>This option only changes the actual word used in the HTTP request, it does notalter the way curl behaves. So for example if you want to make a proper HEADrequest, using -X HEAD will not suffice. You need to use the --head option.<p>The method string you set with --request will be used for all requests, whichif you for example use --location may cause unintended side-effects when curldoesn't change request method according to the HTTP 30x response codes - andsimilar.<p>(FTP)Specifies a custom FTP command to use instead of LIST when doing file listswith FTP.<p>(POP3)Specifies a custom POP3 command to use instead of LIST or RETR. (Added in7.26.0)<p>(IMAP)Specifies a custom IMAP command to use instead of LIST. (Added in 7.30.0)<p>(SMTP)Specifies a custom SMTP command to use instead of HELP or VRFY. (Added in 7.34.0)<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--resolve": {
        "title": "--resolve &lt;host",
        "text": "<div class=\"short_info\">Resolve the host+port to this address<\/div><p>Provide a custom address for a specific host and port pair. Using this, youcan make the curl requests(s) use a specified address and prevent theotherwise normally resolved address to be used. Consider it a sort of\/etc\/hosts alternative provided on the command line. The port number should bethe number used for the specific protocol the host will be used for. It meansyou need several entries if you want to provide address for the same host butdifferent ports.<p>The provided address set by this option will be used even if --ipv4 or --ipv6is set to make curl use another IP version.<p>This option can be used many times to add many host names to resolve.<p>Added in 7.21.3",
        "isBool": false
    },
    "--retry-connrefused": {
        "title": "--retry-connrefused",
        "text": "<div class=\"short_info\">Retry on connection refused (use with --retry)<\/div><p>In addition to the other conditions, consider ECONNREFUSED as a transienterror too for --retry. This option is used together with --retry.<p>Added in 7.52.0",
        "isBool": true
    },
    "--retry-delay": {
        "title": "--retry-delay &lt;seconds>",
        "text": "<div class=\"short_info\">Wait time between retries<\/div><p>Make curl sleep this amount of time before each retry when a transfer hasfailed with a transient error (it changes the default backoff time algorithmbetween retries). This option is only interesting if --retry is alsoused. Setting this delay to zero will make curl use the default backoff time.<p>If this option is used several times, the last one will be used.<p>Added in 7.12.3",
        "isBool": false
    },
    "--retry-max-time": {
        "title": "--retry-max-time &lt;seconds>",
        "text": "<div class=\"short_info\">Retry only within this period<\/div><p>The retry timer is reset before the first transfer attempt. Retries will bedone as usual (see --retry) as long as the timer hasn't reached this givenlimit. Notice that if the timer hasn't reached the limit, the request will bemade and while performing, it may take longer than this given time period. Tolimit a single request\\'s maximum time, use --max-time.  Set this option tozero to not timeout retries.<p>If this option is used several times, the last one will be used.<p>Added in 7.12.3",
        "isBool": false
    },
    "--retry": {
        "title": "--retry &lt;num>",
        "text": "<div class=\"short_info\">Retry request if transient problems occur<\/div><p>If a transient error is returned when curl tries to perform a transfer, itwill retry this number of times before giving up. Setting the number to 0makes curl do no retries (which is the default). Transient error means either:a timeout, an FTP 4xx response code or an HTTP 5xx response code.<p>When curl is about to retry a transfer, it will first wait one second and thenfor all forthcoming retries it will double the waiting time until it reaches10 minutes which then will be the delay between the rest of the retries.  Byusing --retry-delay you disable this exponential backoff algorithm. See also--retry-max-time to limit the total time allowed for retries.<p>If this option is used several times, the last one will be used.<p>Added in 7.12.3",
        "isBool": false
    },
    "--sasl-ir": {
        "title": "--sasl-ir",
        "text": "<div class=\"short_info\">Enable initial response in SASL authentication<\/div><p>Enable initial response in SASL authentication.<p>Added in 7.31.0",
        "isBool": true
    },
    "--service-name": {
        "title": "--service-name &lt;name>",
        "text": "<div class=\"short_info\">SPNEGO service name<\/div><p>This option allows you to change the service name for SPNEGO.<p>Examples: --negotiate --service-name sockd would use sockd\/server-name.<p>Added in 7.43.0",
        "isBool": false
    },
    "-S": {
        "use": "--show-error"
    },
    "--show-error": {
        "title": "-S, --show-error",
        "text": "<div class=\"short_info\">Show error even when -s is used<\/div><p>When used with --silent, it makes curl show an error message if it fails.",
        "isBool": true
    },
    "-s": {
        "use": "--silent"
    },
    "--silent": {
        "title": "-s, --silent",
        "text": "<div class=\"short_info\">Silent mode<\/div><p>Silent or quiet mode. Don't show progress meter or error messages.  Makes Curlmute. It will still output the data you ask for, potentially even to theterminal\/stdout unless you redirect it.<p>Use --show-error in addition to this option to disable progress meter butstill show error messages.",
        "isBool": true,
        "see": [
            "--verbose",
            "--stderr"
        ]
    },
    "--socks4": {
        "title": "--socks4 &lt;host[",
        "text": "<div class=\"short_info\">SOCKS4 proxy on given host + port<\/div><p>Use the specified SOCKS4 proxy. If the port number is not specified, it isassumed at port 1080.<p>This option overrides any previous use of --proxy, as they are mutuallyexclusive.<p>Since 7.21.7, this option is superfluous since you can specify a socks4 proxywith --proxy using a socks4:\/\/ protocol prefix.<p>Since 7.52.0, --preproxy can be used to specify a SOCKS proxy at the same time--proxy is used with an HTTP\/HTTPS proxy. In such a case curl first connects tothe SOCKS proxy and then connects (through SOCKS) to the HTTP or HTTPS proxy.<p>If this option is used several times, the last one will be used.<p>Added in 7.15.2",
        "isBool": false
    },
    "--socks4a": {
        "title": "--socks4a &lt;host[",
        "text": "<div class=\"short_info\">SOCKS4a proxy on given host + port<\/div><p>Use the specified SOCKS4a proxy. If the port number is not specified, it isassumed at port 1080.<p>This option overrides any previous use of --proxy, as they are mutuallyexclusive.<p>Since 7.21.7, this option is superfluous since you can specify a socks4a proxywith --proxy using a socks4a:\/\/ protocol prefix.<p>Since 7.52.0, --preproxy can be used to specify a SOCKS proxy at the same time--proxy is used with an HTTP\/HTTPS proxy. In such a case curl first connects tothe SOCKS proxy and then connects (through SOCKS) to the HTTP or HTTPS proxy.<p>If this option is used several times, the last one will be used.<p>Added in 7.18.0",
        "isBool": false
    },
    "--socks5-basic": {
        "title": "--socks5-basic",
        "text": "<div class=\"short_info\">Enable username\/password auth for SOCKS5 proxies<\/div><p>Tells curl to use username\/password authentication when connecting to a SOCKS5proxy.  The username\/password authentication is enabled by default.  Use--socks5-gssapi to force GSS-API authentication to SOCKS5 proxies.<p>Added in 7.55.0",
        "isBool": true
    },
    "--socks5-gssapi-nec": {
        "title": "--socks5-gssapi-nec",
        "text": "<div class=\"short_info\">Compatibility with NEC SOCKS5 server<\/div><p>As part of the GSS-API negotiation a protection mode is negotiated. RFC 1961says in section 4.3\/4.4 it should be protected, but the NEC referenceimplementation does not.  The option --socks5-gssapi-nec allows theunprotected exchange of the protection mode negotiation.<p>Added in 7.19.4",
        "isBool": true
    },
    "--socks5-gssapi-service": {
        "title": "--socks5-gssapi-service &lt;name>",
        "text": "<div class=\"short_info\">SOCKS5 proxy service name for GSS-API<\/div><p>The default service name for a socks server is rcmd\/server-fqdn. This optionallows you to change it.<p>Examples: --socks5 proxy-name --socks5-gssapi-service sockd would usesockd\/proxy-name --socks5 proxy-name --socks5-gssapi-service sockd\/real-namewould use sockd\/real-name for cases where the proxy-name does not match theprincipal name.<p>Added in 7.19.4",
        "isBool": false
    },
    "--socks5-gssapi": {
        "title": "--socks5-gssapi",
        "text": "<div class=\"short_info\">Enable GSS-API auth for SOCKS5 proxies<\/div><p>Tells curl to use GSS-API authentication when connecting to a SOCKS5 proxy.The GSS-API authentication is enabled by default (if curl is compiled withGSS-API support).  Use --socks5-basic to force username\/password authenticationto SOCKS5 proxies.<p>Added in 7.55.0",
        "isBool": true
    },
    "--socks5-hostname": {
        "title": "--socks5-hostname &lt;host[",
        "text": "<div class=\"short_info\">SOCKS5 proxy, pass host name to proxy<\/div><p>Use the specified SOCKS5 proxy (and let the proxy resolve the host name). Ifthe port number is not specified, it is assumed at port 1080.<p>This option overrides any previous use of --proxy, as they are mutuallyexclusive.<p>Since 7.21.7, this option is superfluous since you can specify a socks5hostname proxy with --proxy using a socks5h:\/\/ protocol prefix.<p>Since 7.52.0, --preproxy can be used to specify a SOCKS proxy at the same time--proxy is used with an HTTP\/HTTPS proxy. In such a case curl first connects tothe SOCKS proxy and then connects (through SOCKS) to the HTTP or HTTPS proxy.<p>If this option is used several times, the last one will be used.<p>Added in 7.18.0",
        "isBool": false
    },
    "--socks5": {
        "title": "--socks5 &lt;host[",
        "text": "<div class=\"short_info\">SOCKS5 proxy on given host + port<\/div><p>Use the specified SOCKS5 proxy - but resolve the host name locally. If theport number is not specified, it is assumed at port 1080.<p>This option overrides any previous use of --proxy, as they are mutuallyexclusive.<p>Since 7.21.7, this option is superfluous since you can specify a socks5 proxywith --proxy using a socks5:\/\/ protocol prefix.<p>Since 7.52.0, --preproxy can be used to specify a SOCKS proxy at the same time--proxy is used with an HTTP\/HTTPS proxy. In such a case curl first connects tothe SOCKS proxy and then connects (through SOCKS) to the HTTP or HTTPS proxy.<p>If this option is used several times, the last one will be used.<p>This option (as well as --socks4) does not work with IPV6, FTPS or LDAP.<p>Added in 7.18.0",
        "isBool": false
    },
    "-Y": {
        "use": "--speed-limit"
    },
    "--speed-limit": {
        "title": "-Y, --speed-limit &lt;speed>",
        "text": "<div class=\"short_info\">Stop transfers slower than this<\/div><p>If a download is slower than this given speed (in bytes per second) forspeed-time seconds it gets aborted. speed-time is set with --speed-time and is30 if not set.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "-y": {
        "use": "--speed-time"
    },
    "--speed-time": {
        "title": "-y, --speed-time &lt;seconds>",
        "text": "<div class=\"short_info\">Trigger 'speed-limit' abort after this time<\/div><p>If a download is slower than speed-limit bytes per second during a speed-timeperiod, the download gets aborted. If speed-time is used, the defaultspeed-limit will be 1 unless set with --speed-limit.<p>This option controls transfers and thus will not affect slow connects etc. Ifthis is a concern for you, try the --connect-timeout option.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--ssl-allow-beast": {
        "title": "--ssl-allow-beast",
        "text": "<div class=\"short_info\">Allow security flaw to improve interop<\/div><p>This option tells curl to not work around a security flaw in the SSL3 andTLS1.0 protocols known as BEAST.  If this option isn't used, the SSL layer mayuse workarounds known to cause interoperability problems with some older SSLimplementations. WARNING: this option loosens the SSL security, and by usingthis flag you ask for exactly that.<p>Added in 7.25.0",
        "isBool": true
    },
    "--ssl-no-revoke": {
        "title": "--ssl-no-revoke",
        "text": "<div class=\"short_info\">Disable cert revocation checks (WinSSL)<\/div><p>(WinSSL) This option tells curl to disable certificate revocation checks.WARNING: this option loosens the SSL security, and by using this flag you askfor exactly that.<p>Added in 7.44.0",
        "isBool": true
    },
    "--ssl-reqd": {
        "title": "--ssl-reqd",
        "text": "<div class=\"short_info\">Require SSL\/TLS<\/div><p>Protocol: FTP IMAP POP3 SMTP<p>Require SSL\/TLS for the connection.  Terminates the connection if the serverdoesn't support SSL\/TLS.<p>This option was formerly known as --ftp-ssl-reqd.<p>Added in 7.20.0",
        "isBool": true
    },
    "--ssl": {
        "title": "--ssl",
        "text": "<div class=\"short_info\">Try SSL\/TLS<\/div><p>Protocol: FTP IMAP POP3 SMTP<p>Try to use SSL\/TLS for the connection.  Reverts to a non-secure connection ifthe server doesn't support SSL\/TLS.  See also --ftp-ssl-control and --ssl-reqdfor different levels of encryption required.<p>This option was formerly known as --ftp-ssl (Added in 7.11.0). That optionname can still be used but will be removed in a future version.<p>Added in 7.20.0",
        "isBool": true
    },
    "-2": {
        "use": "--sslv2"
    },
    "--sslv2": {
        "title": "-2, --sslv2",
        "text": "<div class=\"short_info\">Use SSLv2<\/div><p>Protocol: SSL<p>Forces curl to use SSL version 2 when negotiating with a remote SSLserver. Sometimes curl is built without SSLv2 support. SSLv2 is widelyconsidered insecure (see RFC 6176).",
        "isBool": true,
        "see": [
            "--http1.1",
            "--http2"
        ],
        "overrides": [
            "--sslv3",
            "--tlsv1",
            "--tlsv1.1",
            "--tlsv1.2"
        ]
    },
    "-3": {
        "use": "--sslv3"
    },
    "--sslv3": {
        "title": "-3, --sslv3",
        "text": "<div class=\"short_info\">Use SSLv3<\/div><p>Protocol: SSL<p>Forces curl to use SSL version 3 when negotiating with a remote SSLserver. Sometimes curl is built without SSLv3 support. SSLv3 is widelyconsidered insecure (see RFC 7568).",
        "isBool": true,
        "see": [
            "--http1.1",
            "--http2"
        ],
        "overrides": [
            "--sslv2",
            "--tlsv1",
            "--tlsv1.1",
            "--tlsv1.2"
        ]
    },
    "--stderr": {
        "title": "--stderr",
        "text": "<div class=\"short_info\">Where to redirect stderr<\/div><p>Redirect all writes to stderr to the specified file instead. If the file nameis a plain '-', it is instead written to stdout.<p>If this option is used several times, the last one will be used.",
        "isBool": true,
        "see": [
            "--verbose",
            "--silent"
        ]
    },
    "--suppress-connect-headers": {
        "title": "--suppress-connect-headers",
        "text": "<div class=\"short_info\">Suppress proxy CONNECT response headers<\/div><p>When --proxytunnel is used and a CONNECT request is made don't output proxyCONNECT response headers. This option is meant to be used with --dump-header or--include which are used to show protocol headers in the output. It has noeffect on debug options such as --verbose or --trace, or any statistics.",
        "isBool": true,
        "see": [
            "--dump-header",
            "--include",
            "--proxytunnel"
        ]
    },
    "--tcp-fastopen": {
        "title": "--tcp-fastopen",
        "text": "<div class=\"short_info\">Use TCP Fast Open<\/div><p>Enable use of TCP Fast Open (RFC7413).<p>Added in 7.49.0",
        "isBool": true
    },
    "--tcp-nodelay": {
        "title": "--tcp-nodelay",
        "text": "<div class=\"short_info\">Use the TCP_NODELAY option<\/div><p>Turn on the TCP_NODELAY option. See the \\fIcurl_easy_setopt(3)\\fP man page fordetails about this option.<p>Since 7.50.2, curl sets this option by default and you need to explicitlyswitch it off if you don't want it on.<p>Added in 7.11.2",
        "isBool": true
    },
    "-t": {
        "use": "--telnet-option"
    },
    "--telnet-option": {
        "title": "-t, --telnet-option &lt;opt=val>",
        "text": "<div class=\"short_info\">Set telnet option<\/div><p>Pass options to the telnet protocol. Supported options are:<p>TTYPE=<term> Sets the terminal type.<p>XDISPLOC=<X display> Sets the X display location.<p>NEW_ENV=<var,val> Sets an environment variable.",
        "isBool": false
    },
    "--tftp-blksize": {
        "title": "--tftp-blksize &lt;value>",
        "text": "<div class=\"short_info\">Set TFTP BLKSIZE option<\/div><p>Protocol: TFTP<p>Set TFTP BLKSIZE option (must be >512). This is the block size that curl willtry to use when transferring data to or from a TFTP server. By default 512bytes will be used.<p>If this option is used several times, the last one will be used.<p>Added in 7.20.0",
        "isBool": false
    },
    "--tftp-no-options": {
        "title": "--tftp-no-options",
        "text": "<div class=\"short_info\">Do not send any TFTP options<\/div><p>Protocol: TFTP<p>Tells curl not to send TFTP options requests.<p>This option improves interop with some legacy servers that do not acknowledgeor properly implement TFTP options. When this option is used --tftp-blksize isignored.<p>Added in 7.48.0",
        "isBool": true
    },
    "-z": {
        "use": "--time-cond"
    },
    "--time-cond": {
        "title": "-z, --time-cond &lt;time>",
        "text": "<div class=\"short_info\">Transfer based on a time condition<\/div><p>Protocol: HTTP FTP<p>Request a file that has been modified later than the given time and date, orone that has been modified before that time. The <date expression> can be allsorts of date strings or if it doesn't match any internal ones, it is taken asa filename and tries to get the modification date (mtime) from <file>instead. See the \\fIcurl_getdate(3)\\fP man pages for date expression details.<p>Start the date expression with a dash (-) to make it request for a documentthat is older than the given date\/time, default is a document that is newerthan the specified date\/time.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--tls-max": {
        "title": "--tls-max &lt;VERSION>",
        "text": "<div class=\"short_info\">Use TLSv1.0 or greater<\/div><p>Protocol: SSL<p>VERSION defines maximum supported TLS version. A minimum is definedby arguments tlsv1.0 or tlsv1.1 or tlsv1.2.<p>.RS.IP \"default\"Use up to recommended TLS version..IP \"1.0\"Use up to TLSv1.0..IP \"1.1\"Use up to TLSv1.1..IP \"1.2\"Use up to TLSv1.2..IP \"1.3\"Use up to TLSv1.3..RE<p>Added in 7.54.0",
        "isBool": false,
        "see": [
            "--tlsv1.0",
            "--tlsv1.1",
            "--tlsv1.2"
        ]
    },
    "--tlsauthtype": {
        "title": "--tlsauthtype &lt;type>",
        "text": "<div class=\"short_info\">TLS authentication type<\/div><p>Set TLS authentication type. Currently, the only supported option is \"SRP\",for TLS-SRP (RFC 5054). If --tlsuser and --tlspassword are specified but--tlsauthtype is not, then this option defaults to \"SRP\".<p>Added in 7.21.4",
        "isBool": false
    },
    "--tlspassword": {
        "title": "--tlspassword",
        "text": "<div class=\"short_info\">TLS password<\/div><p>Set password for use with the TLS authentication method specified with--tlsauthtype. Requires that --tlsuser also be set.<p>Added in 7.21.4",
        "isBool": true
    },
    "--tlsuser": {
        "title": "--tlsuser &lt;name>",
        "text": "<div class=\"short_info\">TLS user name<\/div><p>Set username for use with the TLS authentication method specified with--tlsauthtype. Requires that --tlspassword also is set.<p>Added in 7.21.4",
        "isBool": false
    },
    "--tlsv1.0": {
        "title": "--tlsv1.0",
        "text": "<div class=\"short_info\">Use TLSv1.0<\/div><p>Protocol: TLS<p>Forces curl to use TLS version 1.0 when connecting to a remote TLS server.<p>Added in 7.34.0",
        "isBool": true
    },
    "--tlsv1.1": {
        "title": "--tlsv1.1",
        "text": "<div class=\"short_info\">Use TLSv1.1<\/div><p>Protocol: TLS<p>Forces curl to use TLS version 1.1 when connecting to a remote TLS server.<p>Added in 7.34.0",
        "isBool": true
    },
    "--tlsv1.2": {
        "title": "--tlsv1.2",
        "text": "<div class=\"short_info\">Use TLSv1.2<\/div><p>Protocol: TLS<p>Forces curl to use TLS version 1.2 when connecting to a remote TLS server.<p>Added in 7.34.0",
        "isBool": true
    },
    "--tlsv1.3": {
        "title": "--tlsv1.3",
        "text": "<div class=\"short_info\">Use TLSv1.3<\/div><p>Protocol: TLS<p>Forces curl to use TLS version 1.3 when connecting to a remote TLS server.<p>Note that TLS 1.3 is only supported by a subset of TLS backends. At the timeof this writing, they are BoringSSL, NSS, and Secure Transport (on iOS 11 orlater, and macOS 10.13 or later).<p>Added in 7.52.0",
        "isBool": true
    },
    "-1": {
        "use": "--tlsv1"
    },
    "--tlsv1": {
        "title": "-1, --tlsv1",
        "text": "<div class=\"short_info\">Use TLSv1.0 or greater<\/div><p>Protocol: SSL<p>Tells curl to use TLS version 1.x when negotiating with a remote TLSserver. That means TLS version 1.0, 1.1 or 1.2.",
        "isBool": true,
        "see": [
            "--http1.1",
            "--http2"
        ],
        "overrides": [
            "--tlsv1.1",
            "--tlsv1.2",
            "--tlsv1.3"
        ]
    },
    "--tr-encoding": {
        "title": "--tr-encoding",
        "text": "<div class=\"short_info\">Request compressed transfer encoding<\/div><p>Protocol: HTTP<p>Request a compressed Transfer-Encoding response using one of the algorithmscurl supports, and uncompress the data while receiving it.<p>Added in 7.21.6",
        "isBool": true
    },
    "--trace-ascii": {
        "title": "--trace-ascii &lt;file>",
        "text": "<div class=\"short_info\">Like --trace, but without hex output<\/div><p>Enables a full trace dump of all incoming and outgoing data, includingdescriptive information, to the given output file. Use \"-\" as filename to havethe output sent to stdout.<p>This is very similar to --trace, but leaves out the hex part and only showsthe ASCII part of the dump. It makes smaller output that might be easier toread for untrained humans.<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "overrides": [
            "--trace",
            "--verbose"
        ]
    },
    "--trace-time": {
        "title": "--trace-time",
        "text": "<div class=\"short_info\">Add time stamps to trace\/verbose output<\/div><p>Prepends a time stamp to each trace or verbose line that curl displays.<p>Added in 7.14.0",
        "isBool": true
    },
    "--trace": {
        "title": "--trace &lt;file>",
        "text": "<div class=\"short_info\">Write a debug trace to FILE<\/div><p>Enables a full trace dump of all incoming and outgoing data, includingdescriptive information, to the given output file. Use \"-\" as filename to havethe output sent to stdout. Use \"%\" as filename to have the output sent tostderr.<p>If this option is used several times, the last one will be used.",
        "isBool": false,
        "overrides": [
            "--verbose",
            "--trace-ascii"
        ]
    },
    "--unix-socket": {
        "title": "--unix-socket &lt;path>",
        "text": "<div class=\"short_info\">Connect through this Unix domain socket<\/div><p>Protocol: HTTP<p>Connect through this Unix domain socket, instead of using the network.<p>Added in 7.40.0",
        "isBool": false
    },
    "-T": {
        "use": "--upload-file"
    },
    "--upload-file": {
        "title": "-T, --upload-file &lt;file>",
        "text": "<div class=\"short_info\">Transfer local FILE to destination<\/div><p>This transfers the specified local file to the remote URL. If there is no filepart in the specified URL, curl will append the local file name. NOTE that youmust use a trailing \/ on the last directory to really prove to Curl that thereis no file name or curl will think that your last directory name is the remotefile name to use. That will most likely cause the upload operation to fail. Ifthis is used on an HTTP(S) server, the PUT command will be used.<p>Use the file name \"-\" (a single dash) to use stdin instead of a given file.Alternately, the file name \".\" (a single period) may be specified insteadof \"-\" to use stdin in non-blocking mode to allow reading server outputwhile stdin is being uploaded.<p>You can specify one --upload-file for each URL on the command line. Each--upload-file + URL pair specifies what to upload and to where. curl alsosupports \"globbing\" of the --upload-file argument, meaning that you can uploadmultiple files to a single URL by using the same URL globbing style supportedin the URL, like this:<p> curl --upload-file \"{file1,file2}\" http:\/\/www.example.com<p>or even<p> curl -T \"img[1-1000].png\" ftp:\/\/ftp.example.com\/upload\/<p>When uploading to an SMTP server: the uploaded data is assumed to be RFC 5322formatted. It has to feature the necessary set of headers and mail bodyformatted correctly by the user as curl will not transcode nor encode itfurther in any way.",
        "isBool": false
    },
    "--url": {
        "title": "--url &lt;url>",
        "text": "<div class=\"short_info\">URL to work with<\/div><p>Specify a URL to fetch. This option is mostly handy when you want to specifyURL(s) in a config file.<p>If the given URL is missing a scheme name (such as \"http:\/\/\" or \"ftp:\/\/\" etc)then curl will make a guess based on the host. If the outermost sub-domainname matches DICT, FTP, IMAP, LDAP, POP3 or SMTP then that protocol will beused, otherwise HTTP will be used. Since 7.45.0 guessing can be disabled bysetting a default protocol, see --proto-default for details.<p>This option may be used any number of times. To control where this URL iswritten, use the --output or the --remote-name options.",
        "isBool": false
    },
    "-B": {
        "use": "--use-ascii"
    },
    "--use-ascii": {
        "title": "-B, --use-ascii",
        "text": "<div class=\"short_info\">Use ASCII\/text transfer<\/div><p>Protocol: FTP LDAP<p>Enable ASCII transfer. For FTP, this can also be enforced by using a URL thatends with \";type=A\". This option causes data sent to stdout to be in text modefor win32 systems.",
        "isBool": true
    },
    "-A": {
        "use": "--user-agent"
    },
    "--user-agent": {
        "title": "-A, --user-agent &lt;name>",
        "text": "<div class=\"short_info\">Send User-Agent <name> to server<\/div><p>Protocol: HTTP<p>Specify the User-Agent string to send to the HTTP server. To encode blanks inthe string, surround the string with single quote marks. This can also be setwith the --header option of course.<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "-u": {
        "use": "--user"
    },
    "--user": {
        "title": "-u, --user &lt;user",
        "text": "<div class=\"short_info\">Server user and password<\/div><p>Specify the user name and password to use for server authentication. Overrides--netrc and --netrc-optional.<p>If you simply specify the user name, curl will prompt for a password.<p>The user name and passwords are split up on the first colon, which makes itimpossible to use a colon in the user name with this option. The password can,still.<p>When using Kerberos V5 with a Windows based server you should include theWindows domain name in the user name, in order for the server to successfullyobtain a Kerberos Ticket. If you don't then the initial authenticationhandshake may fail.<p>When using NTLM, the user name can be specified simply as the user name,without the domain, if there is a single domain and forest in your setupfor example.<p>To specify the domain name use either Down-Level Logon Name or UPN (UserPrincipal Name) formats. For example, EXAMPLE\\\\user and user@example.comrespectively.<p>If you use a Windows SSPI-enabled curl binary and perform Kerberos V5,Negotiate, NTLM or Digest authentication then you can tell curl to selectthe user name and password from your environment by specifying a single colonwith this option: \"-u :\".<p>If this option is used several times, the last one will be used.",
        "isBool": false
    },
    "-v": {
        "use": "--verbose"
    },
    "--verbose": {
        "title": "-v, --verbose",
        "text": "<div class=\"short_info\">Make the operation more talkative<\/div><p>Makes curl verbose during the operation. Useful for debugging and seeingwhat's going on \"under the hood\". A line starting with '>' means \"header data\"sent by curl, '<' means \"header data\" received by curl that is hidden innormal cases, and a line starting with '*' means additional info provided bycurl.<p>If you only want HTTP headers in the output, --include might be the optionyou're looking for.<p>If you think this option still doesn't give you enough details, consider using--trace or --trace-ascii instead.<p>Use --silent to make curl really quiet.",
        "isBool": true,
        "see": [
            "--include"
        ],
        "overrides": [
            "--trace",
            "--trace-ascii"
        ]
    },
    "-V": {
        "use": "--version"
    },
    "--version": {
        "title": "-V, --version",
        "text": "<div class=\"short_info\">Show version number and quit<\/div><p>Displays information about curl and the libcurl version it uses.<p>The first line includes the full version of curl, libcurl and other 3rd partylibraries linked with the executable.<p>The second line (starts with \"Protocols:\") shows all protocols that libcurlreports to support.<p>The third line (starts with \"Features:\") shows specific features libcurlreports to offer. Available features include:.RS.IP \"IPv6\"You can use IPv6 with this..IP \"krb4\"Krb4 for FTP is supported..IP \"SSL\"SSL versions of various protocols are supported, such as HTTPS, FTPS, POP3Sand so on..IP \"libz\"Automatic decompression of compressed files over HTTP is supported..IP \"NTLM\"NTLM authentication is supported..IP \"Debug\"This curl uses a libcurl built with Debug. This enables more error-trackingand memory debugging etc. For curl-developers only!.IP \"AsynchDNS\"This curl uses asynchronous name resolves. Asynchronous name resolves can bedone using either the c-ares or the threaded resolver backends..IP \"SPNEGO\"SPNEGO authentication is supported..IP \"Largefile\"This curl supports transfers of large files, files larger than 2GB..IP \"IDN\"This curl supports IDN - international domain names..IP \"GSS-API\"GSS-API is supported..IP \"SSPI\"SSPI is supported..IP \"TLS-SRP\"SRP (Secure Remote Password) authentication is supported for TLS..IP \"HTTP2\"HTTP\/2 support has been built-in..IP \"UnixSockets\"Unix sockets support is provided..IP \"HTTPS-proxy\"This curl is built to support HTTPS proxy..IP \"Metalink\"This curl supports Metalink (both version 3 and 4 (RFC 5854)), whichdescribes mirrors and hashes.  curl will use mirrors for failover ifthere are errors (such as the file or server not being available)..IP \"PSL\"PSL is short for Public Suffix List and means that this curl has been builtwith knowledge about \"public suffixes\"..RE",
        "isBool": true
    },
    "-w": {
        "use": "--write-out"
    },
    "--write-out": {
        "title": "-w, --write-out &lt;format>",
        "text": "<div class=\"short_info\">Use output FORMAT after completion<\/div><p>Make curl display information on stdout after a completed transfer. The formatis a string that may contain plain text mixed with any number ofvariables. The format can be specified as a literal \"string\", or you can havecurl read the format from a file with \"@filename\" and to tell curl to read theformat from stdin you write \"@-\".<p>The variables present in the output format will be substituted by the value ortext that curl thinks fit, as described below. All variables are specified as%{variable_name} and to output a normal % you just write them as %%. You canoutput a newline by using \\\\n, a carriage return with \\\\r and a tab space with\\\\t.<p>.B NOTE:The %-symbol is a special symbol in the win32-environment, where alloccurrences of % must be doubled when using this option.<p>The variables available are:.RS.TP 15.B content_typeThe Content-Type of the requested document, if there was any..TP.B filename_effectiveThe ultimate filename that curl writes out to. This is only meaningful if curlis told to write to a file with the --remote-name or --outputoption. It's most useful in combination with the --remote-header-nameoption. (Added in 7.26.0).TP.B ftp_entry_pathThe initial path curl ended up in when logging on to the remote FTPserver. (Added in 7.15.4).TP.B http_codeThe numerical response code that was found in the last retrieved HTTP(S) orFTP(s) transfer. In 7.18.2 the alias \\fBresponse_code\\fP was added to show thesame info..TP.B http_connectThe numerical code that was found in the last response (from a proxy) to acurl CONNECT request. (Added in 7.12.4).TP.B http_versionThe http version that was effectively used. (Added in 7.50.0).TP.B local_ipThe IP address of the local end of the most recently done connection - can beeither IPv4 or IPv6 (Added in 7.29.0).TP.B local_portThe local port number of the most recently done connection (Added in 7.29.0).TP.B num_connectsNumber of new connects made in the recent transfer. (Added in 7.12.3).TP.B num_redirectsNumber of redirects that were followed in the request. (Added in 7.12.3).TP.B proxy_ssl_verify_resultThe result of the HTTPS proxy's SSL peer certificate verification that wasrequested. 0 means the verification was successful. (Added in 7.52.0).TP.B redirect_urlWhen an HTTP request was made without --location to follow redirects (or when--max-redir is met), this variable will show the actual URL a redirect\\fIwould\\fP have gone to. (Added in 7.18.2).TP.B remote_ipThe remote IP address of the most recently done connection - can be eitherIPv4 or IPv6 (Added in 7.29.0).TP.B remote_portThe remote port number of the most recently done connection (Added in 7.29.0).TP.B schemeThe URL scheme (sometimes called protocol) that was effectively used (Added in 7.52.0).TP.B size_downloadThe total amount of bytes that were downloaded..TP.B size_headerThe total amount of bytes of the downloaded headers..TP.B size_requestThe total amount of bytes that were sent in the HTTP request..TP.B size_uploadThe total amount of bytes that were uploaded..TP.B speed_downloadThe average download speed that curl measured for the complete download. Bytesper second..TP.B speed_uploadThe average upload speed that curl measured for the complete upload. Bytes persecond..TP.B ssl_verify_resultThe result of the SSL peer certificate verification that was requested. 0means the verification was successful. (Added in 7.19.0).TP.B time_appconnectThe time, in seconds, it took from the start until the SSL\/SSH\/etcconnect\/handshake to the remote host was completed. (Added in 7.19.0).TP.B time_connectThe time, in seconds, it took from the start until the TCP connect to theremote host (or proxy) was completed..TP.B time_namelookupThe time, in seconds, it took from the start until the name resolving wascompleted..TP.B time_pretransferThe time, in seconds, it took from the start until the file transfer was justabout to begin. This includes all pre-transfer commands and negotiations thatare specific to the particular protocol(s) involved..TP.B time_redirectThe time, in seconds, it took for all redirection steps including name lookup,connect, pretransfer and transfer before the final transaction wasstarted. time_redirect shows the complete execution time for multipleredirections. (Added in 7.12.3).TP.B time_starttransferThe time, in seconds, it took from the start until the first byte was justabout to be transferred. This includes time_pretransfer and also the time theserver needed to calculate the result..TP.B time_totalThe total time, in seconds, that the full operation lasted..TP.B url_effectiveThe URL that was fetched last. This is most meaningful if you've told curlto follow location: headers..RE.IPIf this option is used several times, the last one will be used.",
        "isBool": false
    },
    "--xattr": {
        "title": "--xattr",
        "text": "<div class=\"short_info\">Store metadata in extended file attributes<\/div><p>When saving output to a file, this option tells curl to store certain filemetadata in extended file attributes. Currently, the URL is stored in thexdg.origin.url attribute and, for HTTP, the content type is stored inthe mime_type attribute. If the file system does not support extendedattributes, a warning is issued.",
        "isBool": true
    }
};