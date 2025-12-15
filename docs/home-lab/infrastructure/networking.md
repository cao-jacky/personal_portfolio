# Networking

My Home Lab is connected to the Internet through an Ethernet connection to a 5G modem. My house is old enough to not have any type of Cat-5 cabling to allow for Ethernet networking, and this is the best solution, other than paying for satellite connectivity[^1].

To allow myself to connect to my services from outside my local network, I settled on using Tailscale[^2], i.e., a zero trust identity-based platform to allow me to connect devices to each other. I was thinking about self-hosting Wireguard, and I know there is a simple way to deploy it[^3] or even an open source implementation of Tailscale[^4], but I just have not got around to testing and deploying it yet.

I have briefly looked at Cloudflare Tunnel[^5] as well, but given that I just use Tailscale to connect to my services, and I do not use any devices where I cannot install Tailscale on, I do not feel the need to expose my services online and use Cloudflare Tunnel.

## Footnotes and references

[^1]: Also, for something like Starlink, it would cost me ~€50/month for a potentially 135-305 Mbps connection, whereas, at most, I currently pay up to €27 for a consistent 450 Mbps 5G/4G LTE link. My 5G router has a direct line-of-sight with the cellular tower. I think my 5G package is a better deal.
[^2]: [https://tailscale.com/](https://tailscale.com/){:target="_blank"}
[^3]: [https://github.com/wg-easy/wg-easy](https://github.com/wg-easy/wg-easy){:target="_blank"}
[^4]: [https://github.com/juanfont/headscale](https://github.com/juanfont/headscale){:target="_blank"}
[^5]: [https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/){:target="_blank"}