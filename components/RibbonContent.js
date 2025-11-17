import Image from 'next/image';
import LightLogo from '../public/WeddingLogoLight_fixed.png';

const RibbonContent = ({props, customStyle}) => {
  return (
    <div className="ribbon-container" style={customStyle}>
      <div>
        <p style={{ fontSize: "3.75rem"}}>Tove</p>
        <Image className="ribbon-icon" src={LightLogo} alt="logo.png" />
        <p style={{ fontSize: "3.125rem"}}>Christian</p>
      </div>
    </div>
  );
}

export default RibbonContent;