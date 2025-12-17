# Pi-hole

I initially installed Pi-hole to block ads on my local network, but quickly found another useful feature of this service: the ability to use it as a local DNS resolver. Prior to this, I was accessing my Home Lab services through their `ip:port` addresses. It worked fine, but then I had to remember specific port value, and it got confusing. Furthermore, my password manager did not properly recognise between the different `ip:port` combinations and would show me all my passwords for the IP. A final caveat, was that the services could only be accessed through HTTP which was a problem for self-hosting Vaultwarden/Bitwarden (the password manager) since to secure the connection using SSL, a certificate could not be generated for an IP address[^1].

Instead, what I settled on was using my domain, `jacky.sh`, and assigning subdomains to more easily access and reference services, to fix my password manager to show the correct passwords, and to allow for secure HTTPS connections to the services. Pi-hole helped with this through its local DNS feature, and I couple this with Tailscale, Nginx Proxy Manager and Cloudflare.

To illustrate how these four services work together, the general steps for accessing one of my other named services is the following, e.g., Vaultwarden.

1. Ensure that a connection to the Tailscale tailnet.
2. Load the URL to the service, e.g., `https://passwords.jacky.sh`.
3. The domain name is resolved via Cloudflare's authoritative DNS[^2].
4. Cloudflare returns a Tailscale IP for the Home Lab[^3].
5. The DNS query is handled by the Home Lab's Pi-hole instance.
6. The domain name is resolved using the Pi-hole's local DNS records.
7. The request is forwarded to the Home Lab's Nginx Proxy Manager.
8. Nginx Proxy Manager reverse-proxies the request to the correct destination[^4], i.e., the appropriate backend service.
9. The service processes the request and returns the response to the client.

And, voilà, I can successfully access my Home Lab services through a URL on an HTTPS connection!

## Footnotes

[^1]: Yes, there are ways to certify an IP and generate SSL certificates for it, but I deemed it to be too much of a hassle and settled for the “traditional” route.
[^2]: I am using Cloudflare to manage my domains' DNS, in general.
[^3]: I have set an A record to wildcare match any subdomain and point it to my Home Lab Tailscale IP.
[^4]: The destinations set in my proxy hosts items are the aforementioned `ip:port` combinations.
