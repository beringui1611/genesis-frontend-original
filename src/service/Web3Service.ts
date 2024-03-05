import { ethers } from "ethers";
import ABI from '../service/ABI.json'
const GENESIS_BSC = `${process.env.REACT_APP_ADDRESS_CONTRACT_BSC}`;
const GENESIS_MATIC = `${process.env.REACT_APP_ADDRESS_CONTRACT_POLYGON}`


export enum Profile {
    MANAGER=1,
    USER=0
}


export  function getProfile(): Profile {
    const profile: any = localStorage.getItem('profile') || 0;
    return parseInt(profile);
}


function getProviderMetaMask(): ethers.BrowserProvider {
    if(!window.ethereum) throw new Error('Wallet not found');
      return new ethers.BrowserProvider(window.ethereum);
}

function getProviderTrust(): ethers.BrowserProvider {
    if(!window.trustwallet) throw new Error('Wallet not found');
    return new ethers.BrowserProvider(window.trustwallet);
}


function getProviderInjected(): ethers.BrowserProvider {
    if(!window.ethereum) throw new Error('Wallet not found');
    return new ethers.BrowserProvider(window.ethereum);
}


export async function connectMetaMask(): Promise<void>{
    const provider: any = getProviderMetaMask();
    const accounts = await provider.send('eth_requestAccounts',[]);
    if(!accounts ||!accounts.length) throw new Error('Wallet not found/allowed');
    localStorage.setItem('wallet', JSON.stringify(accounts[0]));
    return accounts[0]

}

export async function connectTrust(): Promise<void>{
    const provider: any = getProviderTrust();
    const accounts = await provider.send('eth_requestAccounts',[]);
    if(!accounts ||!accounts.length) throw new Error('Wallet not found/allowed');
    localStorage.setItem('wallet', JSON.stringify(accounts[0]));
    return accounts[0]

}

export async function connectInjected(): Promise<void>{
    const provider: any = getProviderInjected();
    const accounts = await provider.send('eth_requestAccounts',[]);
    if(!accounts ||!accounts.length) throw new Error('Wallet not found/allowed');
    localStorage.setItem('wallet', JSON.stringify(accounts[0]));
    return accounts[0]

}

export async function switchNetworkBsc(): Promise<void>{
    const TypeWallet = localStorage.getItem('type');
    const provider: any = TypeWallet === "metamask" ? getProviderMetaMask() : getProviderTrust();
    const accounts = await provider.send("eth_requestAccounts",[]);
    if(!accounts ||!accounts.length) throw new Error('Wallet not found/allowed');
    await provider.send("wallet_switchEthereumChain", [{chainId: "0x61"}])

}

export async function switchNetworkPolygon(): Promise<void>{
    const TypeWallet = localStorage.getItem('type');
    const provider: any = TypeWallet === "metamask" ? getProviderMetaMask() : getProviderTrust();
    const accounts = await provider.send("eth_requestAccounts",[]);
    if(!accounts ||!accounts.length) throw new Error('Wallet not found/allowed');
    await provider.send("wallet_switchEthereumChain", [{chainId: "0x13881"}])

}



export async function desconnect(): Promise<void> {
    localStorage.removeItem('wallet');
    localStorage.removeItem('type');
}


async function getContractSigner(provider?: ethers.BrowserProvider): Promise<ethers.Contract> {
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


export async function addYieldFarming(amount:any): Promise<any> {
    const contract = await getContractSigner();
    return await contract.addYield(amount);
}

export async function getBalance(address: any): Promise<void>{
    const contract = getContract()
    const balance = await contract.balanceOf(address);
    
    return balance

}




