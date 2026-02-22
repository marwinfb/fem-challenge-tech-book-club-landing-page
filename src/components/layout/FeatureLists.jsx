import assets from '../../assets/assets';
import DescriptionText from '../utilities/DescriptionText';

const FeaturesData = [
  {
    id: 1,
    description: 'Monthly curated tech reads selected by industry experts',
  },
  {
    id: 2,
    description: 'Virtual and in-person meetups for deep-dive discussions',
  },
  {
    id: 3,
    description: 'Early access to new tech book releases',
  },
  {
    id: 4,
    description: 'Author Q&A sessions with tech thought leaders',
  },
];

const FeatureLists = ({ className }) => {
  return (
    <ul className={`space-y-4 ${className}`}>
      {FeaturesData.map((feature) => (
        <li key={feature.id} className="flex items-center gap-3.5">
          <img src={assets.iconCheckSvg} alt="" className="w-7 h-7" />
          <DescriptionText>{feature.description}</DescriptionText>
        </li>
      ))}
    </ul>
  );
};

export default FeatureLists;
