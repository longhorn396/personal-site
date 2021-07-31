import React from 'react';
import AccentedImage from '../../components/AccentedImage';
import Default from '../../components/DefaultLayout';

const HiddenIndex = (): JSX.Element => {
  return (
    <Default description="You found the hidden area! Have an Easter egg!" title="Devin Drawhorn Easter Egg">
      <br />
      <section>
        <AccentedImage
          alt="Easter Egg"
          height="498px"
          src="https://media1.tenor.com/images/3005af6031c48678422c9f3b27b15df7/tenor.gif?itemid=16091666"
          width="498px"
        />
      </section>
    </Default>
  );
};

export default HiddenIndex;
