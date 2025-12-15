# Software

The whole point of a Home Lab is to run services, which means, to run software. The backbone of this is the operating system.

I chose to install Ubuntu Server as my primary OS on my Mini PC. Why Ubuntu Server? Well, I wanted to run my Home Lab headless and did not need a graphical interface to interact with it. Plus, I have been using Ubuntu for my scientific computing, so it was already familiar to me. The alternatives could have been another Linux distro flavour like Debian or Proxmox[^1]. I did consider them, however, I do not have the need to run virtual machines, so I am happy with just standard Ubuntu Server.

To run my services and applications, I deploy them through Docker containers[^1] and then manage them using Portainer[^2]. It works incredibly well, and I am fairly happy with this software setup.

## Footnotes and references

[^1]: [https://www.proxmox.com/en/](https://www.proxmox.com/en/){:target="_blank"}
[^2]: Most of my services are deployed in a Docker container, there is maybe one or two services that I run either on the bare metal or I run through a virtual machine on the Mini PC.
[^3]: [https://www.portainer.io/](https://www.portainer.io/){:target="_blank"}