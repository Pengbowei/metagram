import {
  StyledFooter,
  FooterForm,
  FooterTitle,
  FooterItem,
  FooterLink,
  StyledLink,
} from "./FooterStyles";
import FooterData from "./footerData";
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter>
      {FooterData.map((item, index) => {
        return (
          <FooterForm key={index}>
            <FooterTitle>{item.title}</FooterTitle>
            <FooterItem>
              <StyledLink>
                <Link href={`${item.path1}`} passHref>
                  <FooterLink>{item.item1}</FooterLink>
                </Link>
              </StyledLink>
              <StyledLink>
                <Link href={`${item.path2}`} passHref>
                  <FooterLink>{item.item2}</FooterLink>
                </Link>
              </StyledLink>
            </FooterItem>
          </FooterForm>
        );
      })}
    </StyledFooter>
  );
};

export default Footer;
