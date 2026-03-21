import React from 'react'
import AccentedImage from '../../components/AccentedImage'
import Default from '../../components/DefaultLayout'

const HiddenIndex = (): React.JSX.Element => {
  return (
    <Default description="You found the hidden area! Have an Easter egg!" title="Devin Drawhorn Easter Egg">
      <br />
      <section>
        <AccentedImage alt="Easter Egg" height="640px" src="/ee.gif" unoptimized width="640px" />
      </section>
    </Default>
  )
}

export default HiddenIndex
