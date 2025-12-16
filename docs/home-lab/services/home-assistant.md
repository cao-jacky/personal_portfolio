# Home Assistant

Home Assistant is a service that I have running in the background without any active input from me. I have my smart lights, home security cameras, and IoT sensors connected to my Home Assistant instance; and everything “just works”.

I was previously running Home Assistant on one of my Raspberry Pi 5s through a Docker container, i.e., the Home Assistant Container[^1]. It worked great, I could run other Docker containers alongside it for other services, but one of the major drawbacks is that add-ons are not supported by this installation method. So, when I upgraded my Home Lab setup to a Mini PC, it was one of my goals to get Home Assistant Operating System (HAOS) running.

When upgrading, I wanted to migrate my existing containerised services, thus, I needed to deploy HAOS through a virtual machine, more specifically, a kernel-based virtual machine (KVM). I followed a great tutorial[^2] got it up and running, and migrated my data from my Raspberry Pi. I would say the whole experience was pretty much effortless.

Home Assistant is currently the only service I have which is running as a virtual machine, everything else is containerised. The VM does not use that many resources, and is able to auto-update itself just fine. When the need arises, I can deploy other services like this if their containerised versions do not have feature parity with an operating system-based implementation.

## References

[^1]: [https://www.home-assistant.io/installation/raspberrypi-other](https://www.home-assistant.io/installation/raspberrypi-other){:target="_blank"}
[^2]: [https://blog.vilhelm.nu/2023/03/installing-home-assistant-os-in-a-vm/](https://blog.vilhelm.nu/2023/03/installing-home-assistant-os-in-a-vm/){:target="_blank"}