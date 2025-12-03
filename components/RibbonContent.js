import Image from 'next/image';
import AMEmblem from '@/public/am_emblem.png'

const RibbonContent = ({props, customStyle}) => {
  return (
    <div className="ribbon-container" style={customStyle}>
      <div>
        <p>Anna</p>
        <Image className="ribbon-icon" src={AMEmblem} alt="logo.png" />
        <p>Marcus</p>
      </div>
    </div>
  );
}

export default RibbonContent;