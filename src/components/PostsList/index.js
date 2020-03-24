import React from "react";

import { Container, Project, Image, Content } from "./styles";

const mockDescription = `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
PageMaker including versions of Lorem Ipsum.`;

export default function PostList() {
  return (
    <Container>
      <Project>
        <Image>
          <img
            src="https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="backround"
          />
        </Image>
        <Content>
          <h4>Grahpql Api</h4>
          <span>{mockDescription.substring(0, 574) + "..."}</span>
        </Content>
      </Project>

      <Project>
        <Image>
          <img
            src="https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="backround"
          />
        </Image>
        <Content>
          <h4>Grahpql Api</h4>
          <span>{mockDescription.substring(0, 574) + "..."}</span>
        </Content>
      </Project>

      <Project>
        <Image>
          <img
            src="https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="backround"
          />
        </Image>
        <Content>
          <h4>Grahpql Api</h4>
          <span>{mockDescription.substring(0, 574) + "..."}</span>
        </Content>
      </Project>

      <Project>
        <Image>
          <img
            src="https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="backround"
          />
        </Image>
        <Content>
          <h4>Grahpql Api</h4>
          <span>{mockDescription.substring(0, 574) + "..."}</span>
        </Content>
      </Project>
    </Container>
  );
}
