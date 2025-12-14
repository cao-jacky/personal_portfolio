# Infrastructure

## Hardware

## Networking

My Home Lab is connected to the Internet through an Ethernet connection to a 5G modem. My house is old enough to not have any type of Cat-5 cabling to allow for Ethernet networking, and this is the best solution, other than paying for satellite connectivity[^1].

To allow myself to connect to my services from outside my local network, I settled on using Tailscale[^2], i.e., a zero trust identity-based platform to allow me to connect devices to each other. I was thinking about self-hosting Wireguard, but I just have not got around to testing and deploying it yet. Plus, I do not trust myself to not accidentally expose my local network to the world.

I have briefly looked at Cloudflare Tunnel as well, but given that I just use Tailscale to connect to my services, and I do not use any devices where I cannot install it on, I do not feel the need to expose my services online and use Cloudflare Tunnel.

## Software

## Footnotes and references

[^1]: Also, for something like Starlink, it would cost me ~€50/month for a potentially 135-305 Mbps connection, whereas, at most, I currently pay up to €27 for a consistent 450 Mbps 5G/4G LTE link — my 5G router has a direct line-of-sight with the cellular tower. I think my 5G is a better deal.
[^2]: [https://tailscale.com/](https://tailscale.com/){:target="_blank"}