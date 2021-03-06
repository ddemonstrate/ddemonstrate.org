# ddemonstrate
Decentralised, anonymous crowdfunding for activism.

demonstrate.org || ddemonstrate.com || ddemonstrate.eth

## What?
ddemonstrate provides a platform for anyone to freely create and co-ordinate activist campaigns and to make anonymous financial
contributions via cryptocurrency. By using cryptocurrencies and the Ethereum blockchain, it allows safe and secure socialisation of demonstrations.

The platform enables supporters and contributors of the cause who could not otherwise participate, to donate funds securely and anonymously without requiring third party banks or payment gateways who can reverse transactions or close accounts.

Furthermore, participants who attend in person can earn cryptocurrency for their efforts.

## Why?
Anonymous financial contributions to activism removes barriers and aids in campaigns by:

* Removing the risk of banks blocking payments, reversing transactions and closing accounts.
* Removing the risk of damage to public reputation and profile.
* Protecting the right to participate anonymously and pseudonymously in political discourse which is vital to any democracy.
* Protecting opinion and belief.
* Allowing people to avoid physical intimidation from those opposing their political views.
* Ensuring contributors avoid employment risks.
* Ensuring contributors avoid risks of personal threat.
* Maintaining privacy.

## How
* Blockchain based smart contracts means it's censorship resistant.  There is no one central point of failure or company that can close the project.
* The source code is open source.  Feel free to clone, fork or make edits via pull requests.
* Crypto only. No banks, credit cards, PayPal or third parties.
* Anonymous, no personal information is ever collected.
* Secure.  We encourage all users to use PGP based email.  Our PGP key is available below and MIT server.

## How to add a campaign
There are a number of ways you can add an event the smart contracts.

### Directly via the Smart Contract (Expert)
The abi file is found in our GitHub repo `/build/`

* Create the campaign: (startTime, location) which returns a unique index id
* Donate: add funds to the contract
* Participate: receive portions of the donated funds with a uniqute Proof of Attendence code.

### Via our API (Intermediate)
ddemonstrate hosts an open source API that interfaces with the ethruem smart contract using EthJs.  Feel free to use this api to make your integration easier (at the risk of centralisation).

Alternatively you can fork and host the API yourself.

### Via our website
Listing a campaign is made simple by entering the title, purpose and category (e.g. animal rights, environmental) of your campaign as well as providing your ethereum address.  Locations are set using the "What 3 Words" service. https://what3words.com

## How you can help
* Fork and clone this repo.  Cloning creates more local copies.
* Make contributions to this repo.  See "for developers"
* Donate Bitcoin to `bc1qejx6pwfcvya5z3q5h2cua5wffz0n8rey4th2q9` or Ethereum `0x9943d42D7a59a0abaE451130CcfC77d758da9cA0` | `ddemonstrate.eth`
* Sponsor a campaign!
* Spread the word!

## For developers

```
git clone https://github.com/ddemonstrate/ddemonstrate.org.git
make build
```

## Smart Contracts

Code will be commited under the `/contracts` directory.  Testnet key `tragic near rocket across biology shop push dragon jazz detail differ say`

m/44'/60'/0'/0
Private key `0x600f003a6ed434917afbbc7f03f2edf86a19f72448e2e9d05917e73e502f6970`

### Contract addresses

| Network | Address |
| --- | --- |
| Ropsten | `0x24b6e8aa5adca2bb30fc3c28159b96755d6930e6` |

## Thanks
Theme Name: DevFolio
Theme URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
Author: BootstrapMade.com
Author URL: https://bootstrapmade.com
POAP:  https://gitcoin.co/grants/490/poap-proof-of-attendance-protocol

## Contact
We can be reached at securely at `ddemonstrate@protonmail.com` usig PGP encrypted email.
Twitter: 
PGP Public Key| Fingerprint `9ee37e66bac184e4cd13ce73a33304a5545027ca`

```
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v4.5.5
Comment: https://openpgpjs.org

xsBNBF1orWIBCACO8JbaTJRPWk7xOTiuzyF4sbNdAe0NbHU5TwKFqpsZVJaz
OWkn5/XTCCTnRqWvfUwM/jHPbgu2hIZ6j/4mk0frgpXt+t/NbW7MNhY+uveZ
989ZPKLikA3Qz3Qq/rXthHsgY/aVt3MdqTVZEan2ZvKTKMzR55dxnxnhTAOY
zsxysMB2E1llJKzVYWduuCtHHy+0ZyWeMiVx7SyD4lO++X1HuHJhmF8MpB+F
ZH2h9xEkprbknDb6NOratZC06TdJRsRwKuP7Q5HvQY17pJOFSGI740LhpsqP
MnXuuQ4C51BBhuVDixDwbK4GnDJv/NG2SeQ1qbxNBV9KMMAJz5Wy7guhABEB
AAHNOWRkZW1vbnN0cmF0ZUBwcm90b25tYWlsLmNvbSA8ZGRlbW9uc3RyYXRl
QHByb3Rvbm1haWwuY29tPsLAdQQQAQgAHwUCXWitYgYLCQcIAwIEFQgKAgMW
AgECGQECGwMCHgEACgkQozMEpVRQJ8pg8wf6A+XPIIdZgsmv1XQ+wPWYglZw
H2aVkINk3K+v6GgYPm16xjpr9Od0+7iuJ/jgoWYFeh2VFQIMiEcQiXm/8iWL
I9euUY6UxxcXYklvV7qqIh5SksIjZxSGBBtjBQu5WsT5y51E90FDuOyC6eAq
2tumm346G9ewmWis8LRWBKXenHSHoWtASIjghuhYtAzuAdAC+JRj3oNqj6a/
PjrKEyps28VpbrUClFSs42YbEm4kTaUz284owaZHaj34WwwC6DQuA/WSd6p7
DFivJGhv+L5ZtmMi9Z8zjySlM0/kEQZZsIB9jitf+y8sYUZgAyJk0oaWc4v6
LCHnjc/8UhuUc96Mrs7ATQRdaK1iAQgArv0mo35yRsUcf4Mg7z7vc94AzaiM
8aEeNTbTAMxeWuVtGKuWshTIzK2KdBSCwrcELaS2Zi7INFEndmRqdpC6Yunm
W1rLCmwEyb3fVEux0Yf7l+CdJOGTP5Br4ntzGvluJ3eL+mLlX4o2K/Gude3E
lPVBWrd5UBA7q1M4zKcvlk3GFtQfZMta9qbXuIbrwyJ8ckUGQTAHwPdCRBcq
CjdKHfQ0Xou5sHqIMpKV+JCMLHNJ4Sb1A4Prm3PhRTU+QqKfGhHxMl6i9ORR
K74kzS3Azynwc9+MxSwu3z0IbPIem1BsNiakATI0Tt0QLlc3mZhuSfZHOUGm
PGjMV2N7HdVSvQARAQABwsBfBBgBCAAJBQJdaK1iAhsMAAoJEKMzBKVUUCfK
958H/jb/DwsUKK6UKz5SGLntWrYgIqRrsgkbnmH4yGsYLZuPceppZo8rj5JC
gVtUuQgH+Vaq9c5jtVunxky1LlvTVow/2Qqekn+xJE60TWTqLecMZxoKcBHB
qWkhOJ2uzn8T0055FcomVICcQ3odgMX/68X79u6ypB612vOIOt2IxWtfk2gq
Kcz2FzMpL6uZwcv3lJImDj+otMgw1SoGHmne4r/gAIx1LwgHGnQzLbkMkoX6
kMcsPD59bRmH16AB6cxRa7Ilc5L1YkdlVTeooAEwMMdzCqIi41HwXv8XVGHh
clo/gTUql92J26bECUEhXF3WkyH8wf+gvrs7idHAf4JHRqM=
=A4GG
-----END PGP PUBLIC KEY BLOCK-----
```

## Licence
All our code is open source under the MIT licence.
