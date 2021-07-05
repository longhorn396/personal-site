import { Card, CardActions, CardContent, Grid, IconButton, Typography } from '@material-ui/core';
import { GitHub, Web } from '@material-ui/icons';
import React from 'react';

export type ProjectProps = {
  githubLink?: string;
  name: string;
  projectLink?: string;
  summary: string;
};

const Project = ({ githubLink, name, projectLink, summary }: ProjectProps): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardContent>
          <Typography className="center" component="h3" variant="h6">
            {name}
          </Typography>
          <br />
          <Typography variant="body1">{summary}</Typography>
        </CardContent>
        <CardActions className="center">
          {projectLink && (
            <a href={projectLink} rel="noreferrer noopener" target="_blank">
              <IconButton title={`${name} Home Page`}>
                <Web />
              </IconButton>
            </a>
          )}
          {githubLink && (
            <a href={githubLink} rel="noreferrer noopener" target="_blank">
              <IconButton title={`${name} GitHub`}>
                <GitHub />
              </IconButton>
            </a>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Project;
