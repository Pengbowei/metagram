import { StyledMintedNFT } from './MintedNFTStyled'
import ANFT from './ANFT';
 
 const MintedNFT = async () => {

    const [posts, setPosts] = useState([])

    // let NFT =[
    //     {"name":"🐷","description":"psytrance pig.","image":"https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc","id":"28","uri":"ipfs://bafkreid7tkhsqrwcbtlv2hgqwq2wis34fj6zolaqfedwmw6k4obexexq4q"},
    //     {"name":"🐷","description":"psytrance pig.","image":"https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc","id":"28","uri":"ipfs://bafkreid7tkhsqrwcbtlv2hgqwq2wis34fj6zolaqfedwmw6k4obexexq4q"},
    //     {"name":"🐷","description":"psytrance pig.","image":"https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc","id":"28","uri":"ipfs://bafkreid7tkhsqrwcbtlv2hgqwq2wis34fj6zolaqfedwmw6k4obexexq4q"},
    //     {"name":"🐷","description":"psytrance pig.","image":"https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc","id":"28","uri":"ipfs://bafkreid7tkhsqrwcbtlv2hgqwq2wis34fj6zolaqfedwmw6k4obexexq4q"},
    //     {"name":"🐷","description":"psytrance pig.","image":"https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc","id":"28","uri":"ipfs://bafkreid7tkhsqrwcbtlv2hgqwq2wis34fj6zolaqfedwmw6k4obexexq4q"},
    //     {"name":"🐷","description":"psytrance pig.","image":"https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc","id":"28","uri":"ipfs://bafkreid7tkhsqrwcbtlv2hgqwq2wis34fj6zolaqfedwmw6k4obexexq4q"},
    //     {"name":"🐷","description":"psytrance pig.","image":"https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc","id":"28","uri":"ipfs://bafkreid7tkhsqrwcbtlv2hgqwq2wis34fj6zolaqfedwmw6k4obexexq4q"},
    //     {"name":"🐷","description":"psytrance pig.","image":"https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc","id":"28","uri":"ipfs://bafkreid7tkhsqrwcbtlv2hgqwq2wis34fj6zolaqfedwmw6k4obexexq4q"},
    //     {"name":"🐷","description":"psytrance pig.","image":"https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc","id":"28","uri":"ipfs://bafkreid7tkhsqrwcbtlv2hgqwq2wis34fj6zolaqfedwmw6k4obexexq4q"},
        
    // ]



     
  useEffect( async() => {
    
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then(async(accounts) => {
        
        console.log(accounts[0])
        account = accounts[0]

        let ps = await fetch()
        console.log("ps", ps)
        setPosts(ps)

      }).catch((err) => console.log(err))
    : console.log("Please install MetaMask")



  }, [])

    // var posts = await Promise.all(NFT.map(async (item) => {
    //     const name = item.name
    //     const description = item.description
    //     const image = await fetch(item.image);
    //     const id = item.id
    //     const uri = item.uri
    //     return {name, description, image, id, uri};
    // }));

    // console.log(posts)


    return posts.slice(0).reverse().map(async(post) => {
        let { name, description, image, id, uri } = post;
        image = await fetch(image);
        return (
            <StyledMintedNFT
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            <ANFT name={name} description={description} image={image} id={id} uri={uri} />
            </StyledMintedNFT>
        );
    })}
  
export default MintedNFT
