
import { 
    StyledANFT,
    ANFTText,
    ANFTImage,
    ANFTAddress,

} from "./ANFTStyles"

const ANFT = ({ name, description, image, id, uri }) => {
    return (
            <StyledANFT key={uri}>
                <ANFTText>
                    <div>{name}</div>
                    <div>{description}</div>
                </ANFTText>
                    <ANFTImage src={image} alt="ANFTImage"></ANFTImage>
                <ANFTAddress>
                    <div>OwnerAddress</div>
                </ANFTAddress>
            </StyledANFT>

    )
}
export default ANFT