import React from 'react'
import { Card, Typography, Divider, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = (props) => {
  return(
    <div>
      <Typography variant="h3" gutterBottom>About</Typography>
      <Divider style={{ margin: "20px 0px" }}/>
      <Typography variant="body1">
        ♦ I am a final year engineering student with an ambition to make things that make a difference to humanity.
      </Typography>
      <br/>
      <Typography>
        ♦ Interested in automating things using Artificial Intelligence and improving business efficiency with Data Science in it.
        Always keen to learn new things and excel in it.
      </Typography>
      <br/>
      <Typography>
        ♦ Excellent in verbal and written communication with competitive mind, which keeps me motivated to go over limits to achieve big things.
      </Typography>
      <br/>
      <Typography>
        ♦ Learning Machine Learning with Tensorflow as backend.
      </Typography>
      <br/>
      <Typography>
        ♦ Current Focus : Competitive Programming // Image Classification
      </Typography>
      <Divider style={{margin: "20px"}} />
      <IconButton href="https://github.com/saurabhtakle/" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/saurabh-takle-a6420116a/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </IconButton>
    </div>
   )
 }

export default About