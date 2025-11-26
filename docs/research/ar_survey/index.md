---
hide:
  - navigation
  - toc
---

# Mobile Augmented Reality: Frameworks and SDKs
The following table is taken from our survey paper, *"Mobile Augmented Reality: User Interfaces, Frameworks, and Intelligence"*, available from ACM Computing Surveys. This table is up to date as of 15th August 2022, if there are any updates required or suggestions of frameworks to include, please drop me an email at [ar_table@jacky.sh](mailto:ar_table@jacky.sh)

## Paper abstract
Mobile Augmented Reality (MAR) integrates computer-generated virtual objects with physical environments for mobile devices. MAR systems enable users to interact with MAR devices, such as smartphones and head-worn wearables, and perform seamless transitions from the physical world to a mixed world with digital entities. These MAR systems support user experiences using MAR devices to provide universal access to digital content. Over the past 20 years, several MAR systems have been developed, however, the studies and design of MAR frameworks have not yet been systematically reviewed from the perspective of user-centric design. This article presents the first effort of surveying existing MAR frameworks (count: 37) and further discuss the latest studies on MAR through a top-down approach: 1) MAR applications; 2) MAR visualisation techniques adaptive to user mobility and contexts; 3) systematic evaluation of MAR frameworks, including supported platforms and corresponding features such as tracking, feature extraction, and sensing capabilities; and 4) underlying machine learning approaches supporting intelligent operations within MAR systems. Finally, we summarise the development of emerging research fields and the current state-of-the-art, and discuss the important open challenges and possible theoretical and technical directions. This survey aims to benefit both researchers and MAR system developers alike.

## Comparisons of several available features in MAR frameworks and SDKs
| Framework/SDK | Android | Apple | Linux | Windows | HTML5 | Unity | Markers | NFT | Device | Plane | Hand | 2D & 3D Body | Facial | Point clouds | Anchors | Light estimation | Environment probes | Meshing | Collaboration | Occlusion | Raycasting | Pass-through video | Session management | Camera | LiDAR | IMU | GPS | Architecture | Price | Open source | General | Studio tool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| [A-Frame (1.3.0)](https://aframe.io/) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Online | Free | ✅ | ✅ | ❌ |
| [ALVAR (0.7.2*)](http://virtual.vtt.fi/virtual/proj2/multimedia/alvar/index.html) | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | Offline | Free | ❌ | ✅ | ❌ |
| [Amazon Sumerian (N/A)](https://aws.amazon.com/sumerian/)[^1] | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | Online | Paid | ❌ | ✅ | ✅ |
| [ApertusVR (0.9*)](http://apertusvr.org/) | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | Offline | Free | ✅ | ✅ | ❌ |
| [ARCore (1.32.0)](https://developers.google.com/ar) | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | Offline | Free | ✅ | ✅ | ❌ |
| [ARKit (6)](https://developer.apple.com/augmented-reality/arkit/) | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Offline | Free | ❌ | ✅ | ✅ |
| [ARMedia SDK (2.1.0*)](https://www.inglobetechnologies.com/augmented-reality-sdk/)[^2] | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | Offline | Paid | ❌ | ✅ | ❌ |
| [ARToolKit (5.4*)](https://github.com/artoolkit/ARToolKit5) | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Offline | Free | ✅ | ✅ | ❌ |
| [artoolkitX (1.0.6.1*)](http://www.artoolkitx.org/) | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Offline | Free | ✅ | ✅ | ❌ |
| [ArUco (3.1.12*)](https://github.com/tentone/aruco)[^3] | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Offline | Free | ✅ | ✅ | ❌ |
| [AR.js (3.4.0)](https://ar-js-org.github.io/AR.js-Docs/) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Online | Free | ✅ | ✅ | ❌ |
| [Augment (4.0.6*)](https://www.augment.com/) | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | Online | Paid | ❌ | ❌ | ✅ |
| [Augmented Pixels (N/A)](http://augmentedpixels.com/) | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | Offline | Paid | ❌ | ✅ | ❌ |
| [AugmentedPro (2.4.3*)](https://www.augmentedpro.com/) | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Offline | Paid | ❌ | ✅ | ✅ |
| [Banuba (1.4.2)](https://www.banuba.com/) | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | Offline | Paid | ❌ | ❌ | ❌ |
| [Blippar (1.2.0)](https://www.blippar.com/) | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | Online | Paid | ❌ | ✅ | ✅ |
| [CareAR (22.02.002)](https://carear.com/) | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Online | Paid | ❌ | ❌ | ✅ |
| [CraftAR (5.2.1*)](https://carear.com/craftar/)[^4] | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | Both | Paid | ❌ | ✅ | ✅ |
| [DeepAR (3.4.4)](https://www.deepar.ai/augmented-reality-sdk) | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Offline | Paid | ❌ | ❌ | ✅ |
| [EasyAR (4.5.0)](https://www.easyar.com/) | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | Offline | Paid | ❌ | ✅ | ❌ |
| [HERE SDK (4.12.3.0)](https://developer.here.com/) | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Offline | Paid | ❌ | ❌ | ❌ |
| [Kudan AR (1.8.0*)](https://www.xlsoft.com/en/products/kudan/index.html) | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | Offline | Paid | ❌ | ✅ | ❌ |
| [Lumin SDK (0.26.0*)](https://developer.magicleap.com/en-us/learn/guides/developer-portal) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | Offline | Free | ❌ | ✅ | ❌ |
| [MAXST AR (5.0.6)](https://developer.maxst.com/) | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | Both | Paid | ❌ | ✅ | ❌ |
| [Minsar (2.0)](https://www.minsar.app/)[^5] | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | Both | Paid | ❌ | ✅ | ✅ |
| [MRTK (2.8.2)](https://github.com/microsoft/MixedRealityToolkit-Unity) | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | Offline | Free | ✅ | ✅ | ❌ |
| [NyARToolkit (5.0.8*)](https://nyatla.jp/nyartoolkit/wp/?page_id=198) | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | Offline | Free | ✅ | ✅ | ❌ |
| [Onirix (N/A)](onirix.com) | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | Online | Paid | ❌ | ✅ | ✅ |
| [Pikkart AR (3.5.8*)](https://developer.pikkart.com/augmented-reality/sdk/) | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Both | Paid | ❌ | ✅ | ❌ |
| [PlugXR (2.0.0)](https://www.plugxr.com/) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | Online | Paid | ❌ | ✅ | ✅ |
| [Universal AR (N/A)](https://zap.works/universal-ar/)[^6] | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Online | Free | ❌ | ✅ | ❌ |
| [Vectary (N/A)](https://www.vectary.com/) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Online | Paid | ❌ | ❌ | ✅ |
| [Vidinoti SDK (N/A)](https://www.vidinoti.com/en/sdk-vidinoti/) | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Both | Paid | ❌ | ✅ | ✅ |
| [ViewAR SDK (N/A)](https://www.viewar.com/) | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | Offline | Paid | ❌ | ✅ | ❌ |
| [Vuforia (10.9)](https://developer.vuforia.com/) | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | Both | Paid | ❌ | ✅ | ❌ |
| [Wikitude (9.12)](https://www.wikitude.com/) | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | Both | Paid | ❌ | ✅ | ✅ |
| [WebXR (N/A)](https://immersiveweb.dev/) | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ◯ | ◯ | ◯ | ◯ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ◯ | ◯ | Offline | Free | ✅ | ✅ | ❌ |
| [XZIMG (2.0.2*)](https://www.xzimg.com/) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | Offline | Paid | ❌ | ✅ | ❌ |

Frameworks and SDKs marked with an asterisk (*) have not been updated in 1+ years.

Features or functions optionally supported in different platforms are marked with ◯.

[^1]: As of 18/05/2022, Amazon Sumerian is no longer available to new customers.
[^2]: Checked on 15/08/2022, the developer documentation for ARMedia SDK is not available.
[^3]: Checked on 15/08/2022, the original website containg the ArUco documentation is no longer available, but a GitHub repository of the code still exists.
[^4]: In November 2021, CraftAR was acquired by CareAR, and now both products exist side-by-side.
[^5]: As of 01/12/21, opuscope, the developing company of Minsar announced that the development of Minsar was to be discontinued. Instead, they would be focussing on their new AR social media platform, Wanderland.
[^6]: Universal AR is developed by Zappar, they also have other AR creation and publishing tools.

## Update log
### 2022-08-15 - Updating from original publication
The table has been copied from the original ACM Computing Surveys publication where the original table was compiled in December 2020. The information about the existing frameworks has been updated, and the CareAR framework has been added.

### 2025-11-17 - Moved content to new portfolio
The table has been updated to work in Markdown format due to the nature of how my new portfolio is deployed, i.e., using Markdown files through Zensical.