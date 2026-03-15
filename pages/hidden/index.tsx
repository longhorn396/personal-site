/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material'
import React from 'react'
import Default from '../../components/DefaultLayout'

const HiddenIndex = (): React.JSX.Element => {
  return (
    <Default description="You found the hidden area! Have an Easter egg!" title="Devin Drawhorn Easter Egg">
      <br />
      <section>
        <Box
          sx={{
            border: (t) => `4px solid ${t.palette.info.main}`,
            borderRadius: '4px',
            m: '0 auto',
            position: 'relative',
          }}
          height="498px"
          width="498px"
        >
          <img alt="Easter Egg" src="https://c.tenor.com/NC_GFhupZUwAAAAd/tenor.gif" />
        </Box>
      </section>
    </Default>
  )
}

export default HiddenIndex
