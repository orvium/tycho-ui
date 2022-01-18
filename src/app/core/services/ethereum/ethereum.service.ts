import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { Web3Provider } from '@ethersproject/providers';
import { ethers, Signer } from 'ethers';
import { SnackbarService } from '../snackbar/snackbar.service';

declare global {
  interface Window {
    ethereum?: any;
  }
}

@Injectable({ providedIn: 'root' })
export class EthereumService {
  public isAvailable = new BehaviorSubject<boolean>(false);
  private provider?: Web3Provider;
  private signer?: Signer;
  public account?: string;

  constructor(
    private snackbar: SnackbarService
  ) {
    if (window.ethereum?.isMetaMask) {
      this.isAvailable.next(true);
    }
  }

  async init(): Promise<boolean> {
    const window = document.defaultView?.window;

    if (!window.ethereum) {
      this.snackbar.openSnackBar('Ethereum not detected in this browser');

      return false;
    }

    // Enable metamask extension
    const promise = from(
      window.ethereum.request({ method: 'eth_requestAccounts' })
    ).pipe(
      timeout(20000)
    ).toPromise();

    try {
      await promise;
    } catch (error) {
      this.snackbar.openSnackBar(error.message);

      return false;
    }

    // A Web3Provider wraps a standard Web3 provider, which is
    // what Metamask injects as window.ethereum into each page
    this.provider = new ethers.providers.Web3Provider(window.ethereum);

    // The Metamask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    this.signer = this.provider.getSigner();

    this.snackbar.openSnackBar('Connected', 'primary');

    return true;
  }
}
