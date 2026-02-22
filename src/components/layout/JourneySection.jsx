import assets from '../../assets/assets';
import Headline from '../utilities/Headline';

const stepsContent = [
  {
    id: 1,
    headline: 'Choose your membership tier',
  },
  {
    id: 2,
    headline: 'Get your monthly book selection',
  },
  {
    id: 3,
    headline: 'Join our discussion forums',
  },
  {
    id: 4,
    headline: 'Attend exclusive meetups',
  },
];

const JourneySection = () => {
  return (
    <section className="my-15">
      <div className="relative rounded-xl overflow-hidden px-4 lg:px-16 py-16 lg:py-20 bg-primary-neutral-100" style={{ backgroundImage: `url(${assets.patternLightBgSvg})` }}>
        <Headline className="lg:mx-auto lg:text-center relative z-10 text-primary-neutral-900">
          Your tech <br />reading journey
        </Headline>

        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-10 mt-12 headline-xs text-primary-neutral-900 relative z-10">
          {stepsContent.map((step) => (
            <li key={step.id} className="flex flex-col gap-5 md:gap-6">
              <div className="flex items-center justify-between gap-5">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm border-2 font-semibold border-primary-neutral-900 flex items-center justify-center">{step.id}</div>
                {step.id !== stepsContent.length && <img src={assets.patternArrowSvg} className="hidden lg:block" alt="" />}
              </div>
              <p className="text-lg">{step.headline}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default JourneySection;
