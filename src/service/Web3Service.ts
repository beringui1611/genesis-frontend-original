import { InterfaceAbi, ethers } from "ethers";
import ABI from '../service/ABI.json';
import USDT from '../service/usdt.json';
const GENESIS_BSC = `${process.env.REACT_APP_ADDRESS_CONTRACT_BSC}`;
const GENESIS_MATIC = `${process.env.REACT_APP_ADDRESS_CONTRACT_POLYGON}`


export enum Profile {
    MANAGER = 1,
    USER = 0
}


export function getProfile(): Profile {
    const profile: any = localStorage.getItem('profile') || 0;
    return parseInt(profile);
}


function getProviderMetaMask(): any {
    try {
        if (!window.ethereum) throw new Error('Wallet not found');
        return new ethers.BrowserProvider(window.ethereum);
    }
    catch (err: any) {
        return err
    }

}

function getProviderTrust(): ethers.BrowserProvider {
    try {
        if (!window.trustwallet) throw new Error('Wallet not found');
        return new ethers.BrowserProvider(window.trustwallet);
    }
    catch (err: any) {
        return err
    }
}


function getProviderInjected(): ethers.BrowserProvider {
    if (!window.ethereum) throw new Error('Wallet not found');
    return new ethers.BrowserProvider(window.ethereum);
}


export async function connectMetaMask(): Promise<void> {
    const provider: any = getProviderMetaMask();
    const accounts = await provider.send('eth_requestAccounts', []);
    if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed');
    localStorage.setItem('wallet', JSON.stringify(accounts[0]));
    return accounts[0]

}

export async function connectTrust(): Promise<void> {
    const provider: any = getProviderTrust();
    const accounts = await provider.send('eth_requestAccounts', []);
    if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed');
    localStorage.setItem('wallet', JSON.stringify(accounts[0]));
    return accounts[0]

}

export async function connectInjected(): Promise<void> {
    const provider: any = getProviderInjected();
    const accounts = await provider.send('eth_requestAccounts', []);
    if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed');
    localStorage.setItem('wallet', JSON.stringify(accounts[0]));
    return accounts[0]

}

export async function switchNetworkBsc(): Promise<void> {
    try {
        const TypeWallet = localStorage.getItem('type');
        const provider: any = TypeWallet === "metamask" ? getProviderMetaMask() : getProviderTrust();
        const accounts = await provider.send("eth_requestAccounts", []);
        if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed');
        await provider.send("wallet_switchEthereumChain", [{ chainId: "0x61" }])
    }
    catch (err) {
        const TypeWallet = localStorage.getItem('type');
        const provider: any = TypeWallet === "metamask" ? getProviderMetaMask() : getProviderTrust();
        const accounts = await provider.send("eth_requestAccounts", []);
        if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed');

        const chainData = {
            chainId: "0x38",
            chainName: "Binance Smart Chain Mainnet",
            nativeCurrency: {
                name: "BNB",
                symbol: "BNB",
                decimals: 18
            },
            rpcUrls: ["https://bsc-dataseed1.binance.org"],
            blockExplorerUrls: ["https://bscscan.com/"]
        };
        await provider.send("wallet_addEthereumChain", [chainData]);
    }


}

export async function switchNetworkPolygon(): Promise<void> {
    try {
        const TypeWallet = localStorage.getItem('type');
        const provider: any = TypeWallet === "metamask" ? getProviderMetaMask() : getProviderTrust();
        const accounts = await provider.send("eth_requestAccounts", []);
        if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed');
        await provider.send("wallet_switchEthereumChain", [{ chainId: "0x13881" }])
    }
    catch (err) {
        const TypeWallet = localStorage.getItem('type');
        const provider: any = TypeWallet === "metamask" ? getProviderMetaMask() : getProviderTrust();
        const accounts = await provider.send("eth_requestAccounts", []);
        if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed');

        const chainData = {
            chainId: "0x89",
            chainName: "Polygon Mainnet",
            nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18
            },
            rpcUrls: ["https://rpc-mainnet.maticvigil.com"],
            blockExplorerUrls: ["https://explorer.matic.network/"]
        };
        await provider.send("wallet_addEthereumChain", [chainData]);

    }


}



export async function desconnect(): Promise<void> {
    localStorage.removeItem('wallet');
    localStorage.removeItem('type');
}


async function getContractSigner(provider?: any): Promise<ethers.Contract> {
    const network = localStorage.getItem('network');
    const TypeWallet = localStorage.getItem('type');
    if (!provider) provider = TypeWallet === "metamask" ? getProviderMetaMask() : getProviderTrust();
    const signer = await provider.getSigner(localStorage.getItem("account") || undefined);
    const contract = new ethers.Contract(network === "bsc" ? GENESIS_BSC : GENESIS_MATIC, ABI as ethers.InterfaceAbi, provider);
    return contract.connect(signer) as ethers.Contract;
}

function getContract(provider?: ethers.BrowserProvider): ethers.Contract {
    const network = localStorage.getItem('network');
    const TypeWallet = localStorage.getItem('type');
    if (!provider) provider = TypeWallet === "metamask" ? getProviderMetaMask() : getProviderTrust();
    return new ethers.Contract(network === "bsc" ? GENESIS_BSC : GENESIS_MATIC, ABI as ethers.InterfaceAbi, provider);
}



export async function addYieldFarming(amount: any): Promise<any> {
    const contract = await getContractSigner();
    return await contract.addYield(amount);
}

export async function getBalance(address: any): Promise<void> {
    const contract = getContract()
    const balance = await contract.balanceOf(address);

    return balance

}


export function getContractUsdt(): ethers.Contract {
    const network = localStorage.getItem('network');
    const providerBsc = new ethers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');
    const providerMatic = new ethers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/ ');
    return new ethers.Contract(network === "bsc" ? "0x8d902c9cFb6766B96B1D731B99A318e27479198A" : "0xf6Af579B32Fdc0Eec070735677cDf7d9935221e", USDT as InterfaceAbi, network === "bsc" ? providerBsc : providerMatic);
}

export async function getContractSignerUsdt(provider?: any): Promise<ethers.Contract> {
    const network = localStorage.getItem('network');
    const TypeWallet = localStorage.getItem('type');
    if (!provider) provider = TypeWallet === "metamask" ? getProviderMetaMask() : getProviderTrust();
    const signer = await provider.getSigner(localStorage.getItem("account") || undefined);
    const providerBsc = new ethers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');
    const providerMatic = new ethers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/ ');
    const contract = new ethers.Contract(network === "bsc" ? "0x8d902c9cFb6766B96B1D731B99A318e27479198A" : "0xf6Af579B32Fdc0Eec070735677cDf7d9935221e", USDT as InterfaceAbi, network === "bsc" ? providerBsc : providerMatic);
    return contract.connect(signer) as ethers.Contract;
}

export async function getUsdt(address: ethers.Provider): Promise<void> {
    const contract = getContractUsdt();
    const usdt = await contract.balanceOf(address);
    return usdt;
}

export async function getFarming(address: ethers.Provider): Promise<void> {
    const contract = getContract();
    const farming = await contract.farming(address);
    return farming;
}

export async function getRewards(): Promise<any> {
    try {
        const contract = await getContractSigner();
        const rewards = await contract.getTxPerTime();
        return rewards;
    } catch (error) {
        throw new Error("Não foi possível obter os rewards. Por favor, tente novamente.");
    }
}



export async function removeYield(amount: any): Promise<any> {
    const contract = await getContractSigner();
    return await contract.removeYield(amount);
}


export async function buy(amount: any): Promise<any> {
    try {
        const wallet: any = localStorage.getItem('wallet');
        const address = JSON.parse(wallet);
        
        const contract = await getContractSigner();
        const contractDolar = await getContractSignerUsdt();
        
       
        const allowanceUser = await contractDolar.allowance(address, contract.target);

        if (allowanceUser < amount) {
         const approve = await contractDolar.approve(contract.target, amount);

         await approve.wait();

                   
        }

        const result = await contract.buy(amount);
        await result.wait();
        
        return result;
    } catch (error) {
        throw new Error("Não foi possível realizar a compra. Por favor, tente novamente.");
    }
}
















