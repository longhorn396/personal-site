import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import AccentedImage from '../components/AccentedImage';
import Default from '../components/DefaultLayout';
import ExternalLink from '../components/ExternalLink';
import Project, { ProjectProps } from '../components/Project';
import WorkAccordion from '../components/WorkAccordion';
import homeData from '../data/homeData.json';

export type HomeProps = {
  projects: ProjectProps[];
  sections: { to: string; display: string }[];
  work: { name: string; summary: string[] }[];
};

const IndexPage = ({ projects, sections, work }: HomeProps): JSX.Element => {
  const [expanded, setExpanded] = React.useState<string>('');
  const handleChange = (panel: string) => (_event: React.ChangeEvent<Element>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <Default
      description="Devin Drawhorn is a software engineer who enjoys solving problems using code through automation scripts, applications, infrastructure as code, and everything in between."
      sections={sections}
      title="Devin Drawhorn"
    >
      <section>
        <Typography className="center" component="h1" variant="h2">
          Devin Drawhorn
        </Typography>
      </section>
      <section id="about">
        <Grid container justify="space-evenly" spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1">
              Hello! I&apos;m Devin, a software engineer based out of North Texas.
            </Typography>
            <br />
            <Typography variant="body1">
              I enjoy solving problems using code through automation scripts, applications, infrastructure as code, and
              everything in between. My goal is always to solve the problem in a way that whoever comes after me can
              easily understand, no matter how strange the solution gets.
            </Typography>
            <br />
            <Typography variant="body1">
              After graduating from <ExternalLink href="https://utexas.edu" text="The University of Texas" /> (Hook
              &apos;em!), I accepted a position at <ExternalLink href="https://gartner.com" text="Gartner" /> as a
              member of their IT Rotational Program. Two years and four different teams later, I graduated from the
              program and joined Gartner&apos;s Cloud Center of Excellence focussing on Kubernetes management.
            </Typography>
            <br />
            <Button href="/Devin_Drawhorn_Resume.PDF" variant="outlined">
              My Resume
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <AccentedImage alt="Devin Drawhorn" height="300px" src="/devin.png" width="200px" />
          </Grid>
        </Grid>
      </section>
      <section id="work">
        <Typography component="h2" variant="h3">
          Where I&apos;ve Worked
        </Typography>
        <br />
        <div>
          {work &&
            work.map(({ name, summary }) => {
              return (
                <WorkAccordion expanded={expanded} key={name} name={name} onChange={handleChange} summary={summary} />
              );
            })}
        </div>
      </section>
      <section id="projects">
        <Typography component="h2" variant="h3">
          Projects
        </Typography>
        <br />
        <Grid container justify="space-evenly" spacing={4}>
          {projects &&
            projects.map(({ githubLink, name, projectLink, summary }: ProjectProps) => {
              return (
                <Project key={name} githubLink={githubLink} name={name} projectLink={projectLink} summary={summary} />
              );
            })}
        </Grid>
      </section>
      <section id="contact">
        <Typography className="center" variant="body1">
          My inbox is always open! You can reach me at{' '}
          <span className="dark-info">[my_first_name]@[my_last_name].com</span>, or{' '}
          <span className="dark-info">[my_first_name][my_last_name]@gmail.com</span>. I also respond to{' '}
          <ExternalLink href="www.linkedin.com/in/devin-drawhorn" text="LinkedIn" /> requests and messages.
        </Typography>
      </section>
    </Default>
  );
};

export const getStaticProps = (): { props: HomeProps } => {
  return { props: homeData };
};

export default IndexPage;
