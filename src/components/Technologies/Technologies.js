import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio, DiZend } from 'react-icons/di';
import { SiDotNet } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technoligies</SectionTitle>
    <SectionText>
      I've worked in a range of technoligies from Web Development stacks to commercial Software Develpment stacks to create and maintain enterprise software.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js <br />
            Next.js <br />
            Windows Performance Forms <br />
            DevExpress <br />
          </ListParagraph>
        </ListContainer>
     </ListItem> 
      <ListItem>
        <DiFirebase size = "3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js <br />
            SQL Server <br />
            MySQL with PHP. <br />
          </ListParagraph>
        </ListContainer>
       </ListItem> 
      <ListItem>
        <DiVisualstudio size = "3rem"/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C# <br />
            C++ <br />
            Python <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiDotNet size = "3rem"/>
        <ListContainer>
          <ListTitle>Architectures and Frameworks</ListTitle>
          <ListParagraph>
            Experience with <br />
            MVVM with OOP <br />
            NHibernate <br />
            Entity Framework <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
