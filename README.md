# Undying Totem

[Youtube Video] (https://youtu.be/d98fo5zfzLM)

## Overview

Welcome to the Undying Totem project repository, an innovative solution designed to enhance the resilience and security of critical infrastructures against sophisticated cyberattacks, including those powered by AI. Leveraging advanced Content Addressable Storage (CAS) systems and the InterPlanetary File System (IPFS), Undying Totem ensures that critical data remains secure, accessible, and reliably distributed, even in the face of dire cyber threats.

## Architecture Diagram

![image](https://github.com/codlocker/DASSH-IPFS-App/assets/12949012/5421c339-3ced-4409-b487-5d501e1f28d6)

## Scenarios of Application

- **Airport Cybersecurity:** In the event of a cyberattack that disrupts airport operations, Undying Totem ensures that passenger information and flight details remain accessible, securing both passenger management and airport security operations.

- **Healthcare Data Protection:** Should hospitals lose access to patient data due to a cyberattack, Undying Totem enables the quick retrieval of medical records and diagnostic results, minimizing impact on patient care.

- **Infrastructure Resilience:** By applying CAS and IPFS, Undying Totem fortifies the resilience and security of interconnected critical infrastructure, ensuring smooth operation even under enhanced tension or direct attacks.

## Key Features

- **Content-Addressed Storage (CAS):** At the core of Undying Totem, CAS provides a unique fingerprint for each piece of data based on its content. This method ensures that any alteration to the data changes its fingerprint, allowing for immediate detection of unauthorized modifications.

- **Peer-to-Peer (P2P) Architecture:** Utilizing a decentralized P2P network, Undying Totem eliminates single points of failure. This ensures continuous operation and data availability even if parts of the network are compromised or experience downtime.

- **Integration with IPFS:** By integrating with the InterPlanetary File System, Undying Totem leverages a global, decentralized mode of storage and retrieval. IPFS's content-addressing system enables unique identification and efficient distribution of files across a distributed network.

- **Fault Tolerance and Reliability:** Data is replicated across multiple nodes in the network, providing redundancy and ensuring data availability during network problems or cyberattacks.

- **Efficient Resource Utilization:** By incorporating Bloom filters, Undying Totem significantly reduces the necessity for external queries to identify malicious activities, thereby saving on resources and enhancing response times without compromising on security.

## How It Works

1. **Data Storage:** Every piece of data stored within the system is assigned a unique cryptographic hash (fingerprint) derived from its content, ensuring any manipulation of the data is detectable.

2. **Data Retrieval:** Leveraging the P2P network, data can be efficiently retrieved from the nearest node without depending on a centralized server, enhancing speed and reliability.

3. **Anomaly Detection:** Incorporating Bloom filters, the system efficiently screens for known malicious activities with minimal resource expenditure, reducing the reliance on costly external verification services.
## Installation Steps

- ``` git clone https://github.com/codlocker/DASSH-IPFS-App.git```
- ```npm install```
- Ensure the following values are filled in .env file **NEXT_PUBLIC_CLIENT_ID** and **NEXT_PUBLIC_API_KEY**
- ```npm run dev```

## Contributing

We welcome contributions from the community! If you're interested in improving Undying Totem or adding new features, please check out our [Contribution Guidelines](/contributing) for more information on submitting pull requests.

## License

Undying Totem is released under the MIT License. See the [LICENSE](/LICENSE) file for more details.

## Support

If you encounter any issues or have questions, please file an issue on GitHub.

---

By leveraging cutting-edge technologies and a forward-thinking approach, Undying Totem aims to protect and preserve the integrity of critical data across various sectors. Join us in fortifying the defenses of our digital world.
