# Vaultwarden

A great alternative to paid password manager services, Vaultwarden is an unofficial Bitwarden compatible server. 

Over the past decade, I have used a variety of different services to fulfil this task. I was first using iCloud Keychain but when I got a Galaxy Z Fold5, it was impossible to use without having access to an iCloud-enabled device. So, I switched to Bitwarden which worked great across multiple platforms. I paid for an entire year and used it happily. However, I soon realised that I wanted more control of where my data was stored, both passwords and my email. I did some research and settled on migrating from Bitwarden and Fast Mail to Proton Unlimited and its suite of services.

I used their Proton Pass product to store my passwords in an encrypted fashion, and that did give some peace of mind. However, the one thing which bothered me was that I could not access my passwords whenever the Internet was down for whatever reason, e.g., when my 5G modem would freeze or lose connection. Sure, I could use my phone's cellular data, but then it is more convenient to copy a 32 character long alphanumeric and symbols password than to type it all out.

Therefore, I did some research on self-hosting options and settled on Vaultwarden. I could reuse the same official Bitwarden extensions for web browsers, smartphones, etc., and keep all my password data on my Home Lab. Of course, now I would be responsible for access and backups, but that is trivial. I have a Bitwarden backup container[^1] running to make encrypted backups of my Vaultwarden database, these backups are then uploaded to a Backblaze and Filen object store using restic storage (checkout [here](../backups.md) for more information about my Home Lab backup strategy).

In summary, it works! And I can rest a bit more easily knowing that my passwords are safe and in my control.

## References

[^1]: [https://github.com/shivpatel/bitwarden_rs-local-backup](https://github.com/shivpatel/bitwarden_rs-local-backup){:target="_blank"}