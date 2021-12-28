import Head from "next/head";
import MintedNFT from "./mintedNFT/MintedNFT";
import {StyledNFT} from "./NFTStyles"

const NFT = () => {
  return (
    <div>
      <Head>
        <title>NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledNFT>
        <MintedNFT/>
      </StyledNFT>
    </div>
  );
};

export default NFT;
