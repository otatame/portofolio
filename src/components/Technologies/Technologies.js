import React from 'react';
import { DiFirebase, DiPhotoshop, DiReact, DiSass, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle style={{marginTop: "2rem"}}>Techniologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in a web development world.<br />
      From Back-end to design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSass size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Sass
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="3rem"/>
        <ListContainer>
          <ListTitle>Graphic Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
