---
icon: lucide/database-backup
---

# Backups

3-2-1, blast-off?! No! 3-2-1, and-your-data-has-less-risk-of-catastrophic-loss-and-improved-recoverability! But what is it? I had hard time figuring it out, mainly just how to configure it for my own Home Lab.

> 3-2-1 backup strategy: **three** copies of your data, **two** different types of storage media, and at least **one** copy off-site.

It is as simple as that! The difficult part is making sure the backups are automated, and the data is actually recoverable.

1. **Three copies of data**: this includes the original data and two backup copies of that data.

    My original data is the data that is stored and generated on my Home Lab; and my two copies are backed up to Backblaze and Filen on S3 endpoints through restic which is itself orchestrated using backrest[^1].

2. **Two types of storage media**: I fulfil this by having my data locally on my Home Lab and in the cloud with Backblaze and Filen.
3. (At least) **one copy off-site**: I fulfil this twice with backing up to Backblaze and Filen.

The key to my backup strategy is backrest, it is such a powerful and great tool, and managing my backups is a breeze. Yes, I could just write shell scripts and execute them as regular cron jobs, but why go through the effort, when I could have a tool that does it for me and also helps me understand failures.

As a side note, maybe it is worth mentioning that there will always be some associated costs with maintaining a 3-2-1 backup strategy, there is no going around this. Whether it is paying for some form of cloud storage, or if you are lucky enough to have a second NAS to store data at your parents', then perhaps there is the cost of the drives or the electricity. A calculation needs to be done as to what you can afford and how much do you value your data in relation to this cost.

I am comfortable paying €6 per month for Backblaze object storage and €89 per year for Filen encrypted cloud storage knowing that my photos, documents, passwords, and other data will be backed up safely.

## References

[^1]: [https://github.com/garethgeorge/backrest](https://github.com/garethgeorge/backrest){:target="_blank"}