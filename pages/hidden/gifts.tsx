import React from 'react'
import { Card, CardActionArea, CardActions, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { Web } from '@mui/icons-material'
import fs from 'fs'
import YAML from 'yaml'
import Default from '../../components/DefaultLayout'

type Gift = {
  name: string
  desc: string
  link?: string
  image: string
}

type GiftsProps = {
  sections: { to: string; display: string }[]
  coffee: Gift[]
  food: Gift[]
  whiskey: Gift[]
  others: Gift[]
}

const GiftsPage = (props: GiftsProps): JSX.Element => {
  const sections = props.sections
  return (
    <Default
      description="I know I'm difficult to shop for, so here's some ideas"
      sections={sections}
      title="Devin Drawhorn Gift Ideas"
    >
      <section>
        <Typography className="center" component="h1" variant="h2">
          Gift Ideas
        </Typography>
        <br />
        <Typography className="center" variant="body1">
          I know that I can be difficult to shop for, so here are some ideas for you to help.
        </Typography>
      </section>
      <div>
        {sections &&
          sections.map(({ to, display }) => {
            return (
              <section id={to} key={to}>
                <Typography component="h2" variant="h3">
                  {display}
                </Typography>
                <Grid container justify="space-evenly" spacing={4}>
                  {props[to] &&
                    props[to].map(({ name, desc, link, image }) => {
                      return (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={name}>
                          <Card>
                            <CardActionArea>
                              <CardMedia sx={{ height: '140px' }} image={image} title={name} />
                              <div sx={{ textAlign: 'center', padding: '4px' }}>
                                <Typography component="h3" variant="h6">
                                  {name}
                                </Typography>
                                <br />
                                <Typography variant="body1">{desc}</Typography>
                              </div>
                            </CardActionArea>
                            <CardActions className="center">
                              {link && (
                                <a href={link} rel="noreferrer noopener" target="_blank">
                                  <IconButton title={`${name} Home Page`}>
                                    <Web />
                                  </IconButton>
                                </a>
                              )}
                            </CardActions>
                          </Card>
                        </Grid>
                      )
                    })}
                </Grid>
              </section>
            )
          })}
      </div>
    </Default>
  )
}

export const getStaticProps = (): { props: GiftsProps } => {
  return { props: YAML.parse(fs.readFileSync('pages/hidden/giftsData.yaml', 'utf8')) }
}

export default GiftsPage
